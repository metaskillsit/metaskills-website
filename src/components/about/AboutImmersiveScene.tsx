import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

type SceneProps = { progress: MotionValue<number>; reducedMotion: boolean; compact?: boolean };
type CloudData = { positions: Float32Array; origins?: Float32Array; count: number };

const GOLD = new THREE.Color("hsl(43, 93%, 54%)");
const PEARL = new THREE.Color("hsl(42, 32%, 94%)");
const VIOLET = new THREE.Color("hsl(277, 48%, 58%)");
const NAVY = new THREE.Color("hsl(220, 62%, 7%)");

const clamp01 = (value: number) => THREE.MathUtils.clamp(value, 0, 1);
const range = (value: number, start: number, end: number) => clamp01((value - start) / (end - start));
const smoother = (value: number) => value * value * value * (value * (value * 6 - 15) + 10);
const fadeWindow = (value: number, start: number, peakIn: number, peakOut: number, end: number) =>
  Math.min(range(value, start, peakIn), 1 - range(value, peakOut, end));

const seeded = (seed: number) => {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const makeM = (count: number): CloudData => {
  const random = seeded(20260918);
  const positions = new Float32Array(count * 3);
  const origins = new Float32Array(count * 3);
  const segments = [[-7, -7, -7, 7], [-7, 7, 0, -1], [0, -1, 7, 7], [7, 7, 7, -7]];
  for (let i = 0; i < count; i += 1) {
    const segment = segments[Math.floor(random() * segments.length)];
    const t = random();
    const angle = random() * Math.PI * 2;
    const radius = 18 + random() * 24;
    positions[i * 3] = segment[0] + (segment[2] - segment[0]) * t + (random() - 0.5) * 1.25;
    positions[i * 3 + 1] = segment[1] + (segment[3] - segment[1]) * t + (random() - 0.5) * 1.25;
    positions[i * 3 + 2] = (random() - 0.5) * 3.5;
    origins[i * 3] = Math.cos(angle) * radius;
    origins[i * 3 + 1] = Math.sin(angle) * radius;
    origins[i * 3 + 2] = 15 + (random() - 0.5) * 34;
  }
  return { positions, origins, count };
};

const decodeCloud = (buffer: ArrayBuffer, count: number, offset: number[], scale: number[], multiplier: number, stride: number, density = 1, jitter = 0): CloudData => {
  const values = new Uint16Array(buffer);
  const safeCount = Math.min(count, Math.floor(values.length / 3));
  const baseCount = Math.ceil(safeCount / stride);
  const outputCount = baseCount * density;
  const positions = new Float32Array(outputCount * 3);
  const random = seeded(90210);
  let output = 0;
  for (let i = 0; i < safeCount; i += stride) {
    const x = (offset[0] + (values[i * 3] / 65535) * scale[0]) * multiplier;
    const y = (offset[1] + (values[i * 3 + 1] / 65535) * scale[1]) * multiplier;
    const z = (offset[2] + (values[i * 3 + 2] / 65535) * scale[2]) * multiplier;
    for (let d = 0; d < density; d += 1) {
      const j = d === 0 ? 0 : jitter;
      positions[output * 3] = x + (random() - 0.5) * j;
      positions[output * 3 + 1] = y + (random() - 0.5) * j;
      positions[output * 3 + 2] = z + (random() - 0.5) * j;
      output += 1;
    }
  }
  return { positions, count: outputCount };
};

/* ---------- particle cloud: shaded beads, soft falloff, depth fade ---------- */

const pointVertex = `
  attribute vec3 origin;
  attribute float aShade;
  attribute float aHero;
  attribute float aSeed;
  uniform float uMorph;
  uniform float uReveal;
  uniform float uTilt;
  uniform float uTime;
  uniform float uSize;
  uniform float uSway;
  varying float vAlpha;
  varying float vShade;
  varying float vHero;
  varying float vTrail;
  varying float vDepth;
  void main() {
    float delay = aSeed * .28;
    float morph = smoothstep(delay, delay + .66, uMorph);
    float eased = morph * morph * morph * (morph * (morph * 6. - 15.) + 10.);
    vec3 p = mix(origin, position, eased);
    float h = (position.y + 9. + position.x * uTilt) / 18.;
    float scan = smoothstep(uReveal - .14, uReveal, h);
    float band = max(0., 1. - abs(uReveal - h) / .12) * step(.001, uReveal) * (1. - step(.999, uReveal));
    float lifePhase = position.x * .23 + position.y * .31 + position.z * .17;
    p += uSway * vec3(sin(uTime * .6 + lifePhase), sin(uTime * .5 + lifePhase * 1.7), cos(uTime * .7 + lifePhase * 1.3));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
    float flight = sin(3.14159265 * eased);
    vTrail = flight * .9 + band * .8;
    gl_PointSize = uSize * (1. + aHero) * (.62 + .38 * eased) * (300.0 / -mv.z);
    vAlpha = morph * scan;
    vShade = aShade;
    vHero = aHero;
  }
`;

const pointFragment = `
  uniform vec3 uColor;
  uniform vec3 uAccent;
  uniform float uOpacity;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  varying float vAlpha;
  varying float vShade;
  varying float vHero;
  varying float vTrail;
  varying float vDepth;
  void main() {
    vec2 c = gl_PointCoord - .5;
    float d = length(c);
    float body = smoothstep(.5, .12, d);
    if (body < .02) discard;
    vec3 col = uColor * vShade;
    col = mix(col, uAccent, clamp(vTrail * .35, 0., 1.));
    col += uColor * vHero * .55;
    float fog = smoothstep(uFogNear, uFogFar, vDepth);
    col = mix(col, uFogColor, fog * .85);
    float a = body * vAlpha * uOpacity * (.72 + vHero * .45 + vTrail * .2) * (1. - fog * .5);
    gl_FragColor = vec4(col, a);
  }
`;

type CloudUniforms = { color?: THREE.Color; accent?: THREE.Color; size?: number; sway?: number; light?: [number, number, number] };

const ParticleCloud = ({ data, materialRef, color = PEARL, accent = GOLD, size = 2.2, sway = 0.05, light = [-14, 26, 34] }: CloudUniforms & { data: CloudData; materialRef: React.RefObject<THREE.ShaderMaterial> }) => {
  const geometry = useMemo(() => {
    const result = new THREE.BufferGeometry();
    const count = data.count;
    const shade = new Float32Array(count);
    const hero = new Float32Array(count);
    const seed = new Float32Array(count);
    const random = seeded(count + 7);
    const centroid = new THREE.Vector3();
    for (let i = 0; i < count; i += 1) centroid.x += data.positions[i * 3] / count, centroid.y += data.positions[i * 3 + 1] / count, centroid.z += data.positions[i * 3 + 2] / count;
    const key = new THREE.Vector3(light[0], light[1], light[2]).normalize();
    const normal = new THREE.Vector3();
    for (let i = 0; i < count; i += 1) {
      normal.set(data.positions[i * 3] - centroid.x, data.positions[i * 3 + 1] - centroid.y, data.positions[i * 3 + 2] - centroid.z).normalize();
      const wrap = Math.pow(0.5 + 0.5 * normal.dot(key), 1.7);
      shade[i] = 0.6 + 0.4 * wrap + (random() - 0.5) * 0.06;
      hero[i] = random() < 0.04 ? 1 : 0;
      seed[i] = random();
    }
    result.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    result.setAttribute("origin", new THREE.BufferAttribute(data.origins ?? data.positions, 3));
    result.setAttribute("aShade", new THREE.BufferAttribute(shade, 1));
    result.setAttribute("aHero", new THREE.BufferAttribute(hero, 1));
    result.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    return result;
  }, [data, light]);
  const uniforms = useMemo(() => ({
    uMorph: { value: 1 }, uReveal: { value: 1 }, uTilt: { value: 0 }, uTime: { value: 0 },
    uSize: { value: size }, uSway: { value: sway }, uColor: { value: color }, uAccent: { value: accent },
    uOpacity: { value: 0 }, uFogColor: { value: NAVY }, uFogNear: { value: 40 }, uFogFar: { value: 130 },
  }), [color, accent, size, sway]);
  return <points geometry={geometry} frustumCulled={false}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={pointVertex} fragmentShader={pointFragment} transparent depthWrite={false} blending={THREE.NormalBlending} /></points>;
};

/* ---------- self-weaving containment lattice ---------- */

const makeLattice = (radius = 8.7, height = 20, seed = 20260728) => {
  const geometry = new THREE.WireframeGeometry(new THREE.CylinderGeometry(radius, radius, height, 28, 9, true));
  const position = geometry.getAttribute("position");
  const count = position.count;
  const random = seeded(seed);
  const aSeed = new Float32Array(count);
  const aEnd = new Float32Array(count);
  for (let i = 0; i < count; i += 2) {
    const value = random();
    aSeed[i] = value; aSeed[i + 1] = value;
    aEnd[i] = 0; aEnd[i + 1] = 1;
  }
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));
  geometry.setAttribute("aEnd", new THREE.BufferAttribute(aEnd, 1));
  return geometry;
};

const latticeVertex = `
  attribute float aSeed;
  attribute float aEnd;
  uniform float uBuild;
  uniform float uHeight;
  varying float vFieldFade;
  varying float vLineT;
  varying float vBuildD;
  varying float vFieldT;
  varying float vSeed;
  void main() {
    float fieldT = position.y / uHeight + .5;
    vFieldFade = pow(clamp(sin(fieldT * 3.14159265), 0., 1.), 1.5);
    float bThr = .8 * (.45 * fieldT + .55 * aSeed);
    vBuildD = clamp((uBuild - bThr) / .2, 0., 1.);
    vLineT = aEnd; vFieldT = fieldT; vSeed = aSeed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`;

const latticeFragment = `
  uniform vec3 uColor;
  uniform vec3 uAccent;
  uniform float uOpacity;
  uniform float uTime;
  varying float vFieldFade;
  varying float vLineT;
  varying float vBuildD;
  varying float vFieldT;
  varying float vSeed;
  void main() {
    float bDraw = vBuildD * 1.25;
    float bA = (1. - smoothstep(bDraw - .25, bDraw, vLineT)) * smoothstep(0., .06, vBuildD);
    float bPulse = vBuildD * (1. - vBuildD) * 4.;
    float impRing = pow(.5 + .5 * sin(vFieldT * 4. - uTime * .9), 24.);
    float impFlash = pow(.5 + .5 * sin(uTime * .8 + vSeed * 97.), 36.);
    float imp = min(1., impRing + impFlash) * vBuildD;
    float accentMix = max(bPulse * .85, imp * .9);
    float a = uOpacity * vFieldFade * bA * (1. + bPulse * 1.2 + imp * 1.6);
    if (a < .004) discard;
    gl_FragColor = vec4(mix(uColor, uAccent, accentMix), a);
  }
`;

const Lattice = ({ geometry, materialRef, height, color = GOLD, accent = PEARL }: { geometry: THREE.BufferGeometry; materialRef: React.RefObject<THREE.ShaderMaterial>; height: number; color?: THREE.Color; accent?: THREE.Color }) => {
  const uniforms = useMemo(() => ({
    uBuild: { value: 0 }, uHeight: { value: height }, uTime: { value: 0 },
    uOpacity: { value: 0 }, uColor: { value: color }, uAccent: { value: accent },
  }), [height, color, accent]);
  return <lineSegments geometry={geometry} frustumCulled={false}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={latticeVertex} fragmentShader={latticeFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>;
};

/* ---------- rising accent motes (GPU driven) ---------- */

const moteVertex = `
  uniform float uTime;
  uniform float uRise;
  uniform float uSize;
  uniform float uScale;
  attribute vec4 aSeed;
  varying float vFade;
  void main() {
    float t = fract(aSeed.x + uTime * aSeed.y);
    vec3 p = position;
    p.y += t * uRise;
    p.x += sin(uTime * .5 + aSeed.x * 41.) * aSeed.z;
    p.z += cos(uTime * .42 + aSeed.x * 57.) * aSeed.z;
    vFade = smoothstep(0., .18, t) * (1. - smoothstep(.6, .95, t));
    vec4 mv = modelViewMatrix * vec4(p, 1.);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSeed.w * (uScale / -mv.z);
  }
`;

const moteFragment = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    float a = smoothstep(.5, .1, length(gl_PointCoord - .5));
    if (a < .02) discard;
    gl_FragColor = vec4(uColor, a * vFade * uOpacity);
  }
`;

type MoteConfig = { count: number; spreadX: number; spreadZ: number; rise: number; sway: number; speed: [number, number]; size: number; seed: number };

const Motes = ({ config, materialRef, color = GOLD, position }: { config: MoteConfig; materialRef: React.RefObject<THREE.ShaderMaterial>; color?: THREE.Color; position: [number, number, number] }) => {
  const geometry = useMemo(() => {
    const random = seeded(config.seed);
    const positions = new Float32Array(config.count * 3);
    const seeds = new Float32Array(config.count * 4);
    for (let i = 0; i < config.count; i += 1) {
      positions.set([(random() - 0.5) * config.spreadX, 0, (random() - 0.5) * config.spreadZ], i * 3);
      seeds.set([random(), config.speed[0] + random() * (config.speed[1] - config.speed[0]), config.sway * (0.5 + random()), 0.6 + random() * 0.8], i * 4);
    }
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    result.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 4));
    return result;
  }, [config]);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }, uRise: { value: config.rise }, uSize: { value: config.size },
    uScale: { value: 480 }, uColor: { value: color }, uOpacity: { value: 0 },
  }), [config, color]);
  return <points geometry={geometry} position={position} frustumCulled={false}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={moteVertex} fragmentShader={moteFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} /></points>;
};

/* ---------- drifting dust ---------- */

const Dust = ({ count, spread, height, position }: { count: number; spread: number; height: number; position: [number, number, number] }) => {
  const geometry = useMemo(() => {
    const random = seeded(77);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) positions.set([(random() - 0.5) * spread, (random() - 0.5) * height, (random() - 0.5) * spread], i * 3);
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return result;
  }, [count, spread, height]);
  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.012;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.08) * 0.5;
  });
  return <points ref={ref} geometry={geometry} position={position} frustumCulled={false}>
    <pointsMaterial color={PEARL} size={0.055} transparent opacity={0.2} depthWrite={false} sizeAttenuation />
  </points>;
};

/* ---------- helper geometries ---------- */

const makeTrails = (count: number, paths: number, length: number) => {
  const random = seeded(count + paths);
  const positions = new Float32Array(count * 6);
  for (let i = 0; i < count; i += 1) {
    const path = i % paths;
    const z = -((i / count) * length);
    const angle = (path / paths) * Math.PI * 2 + Math.sin(z * 0.18) * 0.45;
    const radius = 2.2 + path * 0.34;
    const x = Math.cos(angle) * radius + (random() - 0.5) * 0.2;
    const y = Math.sin(angle) * radius + (random() - 0.5) * 0.2;
    positions.set([x, y, z, x + Math.sin(z) * 0.08, y + 0.12, z - 0.55], i * 6);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
};

const makeWave = (columns: number, rows: number) => {
  const positions: number[] = [];
  for (let x = 0; x < columns; x += 1) for (let z = 0; z < rows - 1; z += 1) {
    const px = (x / (columns - 1) - 0.5) * 28;
    positions.push(px, 0, -z * 0.75, px, 0, -(z + 1) * 0.75);
  }
  for (let z = 0; z < rows; z += 1) for (let x = 0; x < columns - 1; x += 1) {
    const pz = -z * 0.75;
    positions.push((x / (columns - 1) - 0.5) * 28, 0, pz, ((x + 1) / (columns - 1) - 0.5) * 28, 0, pz);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
};

const Scene = ({ progress, reducedMotion, compact = false }: SceneProps) => {
  const { camera } = useThree();
  const [hand, setHand] = useState<CloudData | null>(null);
  const [tree, setTree] = useState<CloudData | null>(null);
  const glyph = useMemo(() => makeM(compact ? 9000 : 32000), [compact]);
  const mMaterial = useRef<THREE.ShaderMaterial>(null);
  const handMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeMaterial = useRef<THREE.ShaderMaterial>(null);
  const mGroup = useRef<THREE.Group>(null);
  const handGroup = useRef<THREE.Group>(null);
  const treeGroup = useRef<THREE.Group>(null);
  const glyphLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const handLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const glyphLatticeGroup = useRef<THREE.Group>(null);
  const waveMotesMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeMotesMaterial = useRef<THREE.ShaderMaterial>(null);
  const waveRef = useRef<THREE.LineSegments>(null);
  const trailRef = useRef<THREE.LineSegments>(null);
  const pathwayRef = useRef<THREE.LineSegments>(null);
  const pointerSmooth = useRef(new THREE.Vector2());
  const glyphLatticeGeometry = useMemo(() => makeLattice(8.7, 20), []);
  const handLatticeGeometry = useMemo(() => makeLattice(11, 22, 20260729), []);
  const treeLatticeGeometry = useMemo(() => makeLattice(8.2, 18, 20260730), []);
  const trailGeometry = useMemo(() => makeTrails(compact ? 260 : 720, 5, 44), [compact]);
  const pathwayGeometry = useMemo(() => makeTrails(compact ? 260 : 620, 5, 40), [compact]);
  const waveGeometry = useMemo(() => makeWave(compact ? 18 : 30, compact ? 22 : 38), [compact]);
  const waveMoteConfig = useMemo<MoteConfig>(() => ({ count: compact ? 50 : 130, spreadX: 26, spreadZ: 10, rise: 14, sway: 0.9, speed: [0.02, 0.05], size: 0.42, seed: 5150 }), [compact]);
  const treeMoteConfig = useMemo<MoteConfig>(() => ({ count: compact ? 40 : 110, spreadX: 11, spreadZ: 9, rise: 15, sway: 1.2, speed: [0.025, 0.06], size: 0.5, seed: 6060 }), [compact]);
  const cameraCurve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.5, 31), new THREE.Vector3(1.5, 2, 22), new THREE.Vector3(-2.4, 3.2, 6),
    new THREE.Vector3(2.2, 4.2, -11), new THREE.Vector3(-3.5, 7.5, -27), new THREE.Vector3(1.4, 4.5, -38),
  ], false, "catmullrom", 0.5), []);

  useEffect(() => {
    let active = true;
    Promise.all([fetch("/about/hand-points.bin").then((r) => r.ok ? r.arrayBuffer() : Promise.reject()), fetch("/about/tree-points.bin").then((r) => r.ok ? r.arrayBuffer() : Promise.reject())])
      .then(([handBuffer, treeBuffer]) => {
        if (!active) return;
        setHand(decodeCloud(handBuffer, 4173, [-0.5973206758, -0.9999998808, -0.6382458806], [1.1946413517, 1.9999998808, 1.2764917612], 7, compact ? 2 : 1, compact ? 5 : 10, 0.16));
        setTree(decodeCloud(treeBuffer, 50000, [-0.8996697664, -1.0000001192, -0.5329897404], [1.7993395329, 2, 1.0659794807], 7.2, compact ? 3 : 1, compact ? 1 : 2, 0.12));
      }).catch(() => undefined);
    return () => { active = false; };
  }, [compact]);

  useFrame(({ clock, pointer }, delta) => {
    const p = reducedMotion ? 0.08 : progress.get();
    const time = clock.elapsedTime;
    const k = compact || reducedMotion ? 0 : 1 - Math.pow(0.94, Math.min(delta, 0.05) * 60);
    pointerSmooth.current.x += (pointer.x - pointerSmooth.current.x) * k;
    pointerSmooth.current.y += (pointer.y - pointerSmooth.current.y) * k;
    const px = pointerSmooth.current.x;
    const py = pointerSmooth.current.y;

    const cameraPoint = cameraCurve.getPointAt(clamp01(p * 0.96));
    camera.position.lerp(cameraPoint, reducedMotion ? 1 : 0.14);
    const target = cameraCurve.getPointAt(clamp01(p * 0.96 + 0.035));
    target.x += px * 0.45;
    target.y += py * 0.24;
    camera.lookAt(target);
    // single out-and-back bank (~13 deg) through the flight, level afterwards
    camera.rotation.z = -0.23 * Math.sin(Math.PI * smoother(range(p, 0.04, 0.44)));

    const glyphOpacity = 1 - range(p, 0.16, 0.26);
    if (mMaterial.current) {
      mMaterial.current.uniforms.uMorph.value = reducedMotion ? 1 : range(p, 0, 0.055);
      mMaterial.current.uniforms.uReveal.value = 1;
      mMaterial.current.uniforms.uOpacity.value = glyphOpacity;
      mMaterial.current.uniforms.uTime.value = time;
    }
    if (mGroup.current) {
      const hold = 1 - smoother(range(p, 0.2, 0.32));
      mGroup.current.rotation.y = (Math.sin(time * 0.45) * 0.12 + px * 0.07) * hold;
      mGroup.current.rotation.x = -py * 0.04 * hold;
      mGroup.current.position.y = 1 + Math.sin(time * 0.3) * 0.3 * hold;
      mGroup.current.scale.setScalar(1 + range(p, 0.22, 0.34) * 0.4);
    }
    if (glyphLatticeMaterial.current) {
      const weave = Math.min(range(p, 0.035, 0.14), 1 - range(p, 0.22, 0.31));
      glyphLatticeMaterial.current.uniforms.uBuild.value = weave;
      glyphLatticeMaterial.current.uniforms.uTime.value = time;
      glyphLatticeMaterial.current.uniforms.uOpacity.value = 0.3 * Math.min(1, weave * 3);
    }
    if (glyphLatticeGroup.current) glyphLatticeGroup.current.rotation.y = time * 0.08;

    const handOpacity = fadeWindow(p, 0.17, 0.26, 0.44, 0.52);
    if (handMaterial.current) {
      handMaterial.current.uniforms.uMorph.value = 1;
      handMaterial.current.uniforms.uReveal.value = range(p, 0.2, 0.34);
      handMaterial.current.uniforms.uOpacity.value = handOpacity;
      handMaterial.current.uniforms.uTime.value = time;
    }
    if (handGroup.current) {
      // full eased pirouette during the scan-in, plus idle sway
      const hold = fadeWindow(p, 0.24, 0.3, 0.44, 0.5);
      handGroup.current.rotation.y = -0.35 + smoother(range(p, 0.25, 0.4)) * Math.PI * 2 + (Math.sin(time * 0.27 + 1) * 0.045 + px * 0.06) * hold;
      handGroup.current.position.y = Math.sin(time * 0.19 + 2) * 0.12 * hold;
    }
    if (handLatticeMaterial.current) {
      const weave = Math.min(range(p, 0.23, 0.33), 1 - range(p, 0.43, 0.51));
      handLatticeMaterial.current.uniforms.uBuild.value = weave;
      handLatticeMaterial.current.uniforms.uTime.value = time;
      handLatticeMaterial.current.uniforms.uOpacity.value = 0.12 * Math.min(1, weave * 3);
    }

    if (trailRef.current) (trailRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.18, 0.27, 0.52, 0.62) * 0.24;
    if (pathwayRef.current) (pathwayRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.51, 0.62, 0.78, 0.88) * 0.6;
    if (waveRef.current) {
      const opacity = fadeWindow(p, 0.46, 0.54, 0.68, 0.77);
      const attribute = waveRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < attribute.count; i += 1) {
        const x = attribute.getX(i); const z = attribute.getZ(i);
        attribute.setY(i, Math.sin(x * 0.42 + z * 0.3 + time * 0.7) * 0.46);
      }
      attribute.needsUpdate = true;
      (waveRef.current.material as THREE.LineBasicMaterial).opacity = opacity * 0.32;
      if (waveMotesMaterial.current) {
        waveMotesMaterial.current.uniforms.uTime.value = time;
        waveMotesMaterial.current.uniforms.uOpacity.value = opacity * 0.45;
      }
    }

    const treeOpacity = range(p, 0.79, 0.9);
    if (treeMaterial.current) {
      treeMaterial.current.uniforms.uMorph.value = 1;
      // tilted bottom-up wipe reveal
      treeMaterial.current.uniforms.uTilt.value = 0.4;
      treeMaterial.current.uniforms.uReveal.value = range(p, 0.78, 0.95);
      treeMaterial.current.uniforms.uOpacity.value = treeOpacity;
      treeMaterial.current.uniforms.uTime.value = time;
    }
    if (treeGroup.current) {
      treeGroup.current.rotation.y = Math.sin(time * 0.24 + 3) * 0.055 + px * 0.05 + (p - 0.82) * 0.18;
      treeGroup.current.position.y = -1 + Math.sin(time * 0.17 + 1) * 0.18;
    }
    if (treeLatticeMaterial.current) {
      const weave = range(p, 0.87, 0.97);
      treeLatticeMaterial.current.uniforms.uBuild.value = weave;
      treeLatticeMaterial.current.uniforms.uTime.value = time;
      treeLatticeMaterial.current.uniforms.uOpacity.value = 0.22 * Math.min(1, weave * 3);
    }
    if (treeMotesMaterial.current) {
      treeMotesMaterial.current.uniforms.uTime.value = time;
      treeMotesMaterial.current.uniforms.uOpacity.value = treeOpacity * 0.5;
    }
  });

  return <>
    <fog attach="fog" args={[NAVY, 22, 88]} /><color attach="background" args={[NAVY]} />
    <ambientLight intensity={0.18} /><directionalLight position={[-10, 16, 18]} color={GOLD} intensity={0.9} />
    <Dust count={compact ? 220 : 520} spread={44} height={30} position={[0, 2, 0]} />
    <Dust count={compact ? 200 : 420} spread={36} height={26} position={[0, 2, -34]} />
    <group ref={mGroup} position={[0, 1, 0]}>
      <ParticleCloud data={glyph} materialRef={mMaterial} size={compact ? 2.1 : 1.8} sway={0.05} />
      <group ref={glyphLatticeGroup}><Lattice geometry={glyphLatticeGeometry} materialRef={glyphLatticeMaterial} height={20} /></group>
    </group>
    <lineSegments ref={trailRef} geometry={trailGeometry} position={[0, 1, -3]}><lineBasicMaterial color={VIOLET} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {hand && <group ref={handGroup} position={[0, 2, -26]} scale={1.15}>
      <ParticleCloud data={hand} materialRef={handMaterial} size={compact ? 3.2 : 2.9} sway={0.04} light={[-18, 42, 16]} />
      <Lattice geometry={handLatticeGeometry} materialRef={handLatticeMaterial} height={22} />
    </group>}
    <lineSegments ref={waveRef} geometry={waveGeometry} position={[-1, -5, -26]} rotation={[0.18, 0, -0.12]}><lineBasicMaterial color={GOLD} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    <Motes config={waveMoteConfig} materialRef={waveMotesMaterial} position={[-1, -6, -26]} />
    <lineSegments ref={pathwayRef} geometry={pathwayGeometry} position={[0, 0, -30]} rotation={[Math.PI / 2.8, 0, 0]}><lineBasicMaterial color={PEARL} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {tree && <group ref={treeGroup} position={[0, -1, -52]} scale={1.55}>
      <ParticleCloud data={tree} materialRef={treeMaterial} size={compact ? 1.9 : 1.6} sway={0.12} />
      <Lattice geometry={treeLatticeGeometry} materialRef={treeLatticeMaterial} height={18} />
      <Motes config={treeMoteConfig} materialRef={treeMotesMaterial} position={[0, -6, 0]} />
    </group>}
    {!compact && !reducedMotion && <EffectComposer multisampling={0}>
      <Bloom intensity={0.34} luminanceThreshold={0.86} luminanceSmoothing={0.28} mipmapBlur />
      <Vignette offset={0.28} darkness={0.72} />
    </EffectComposer>}
  </>;
};

const supportsWebGL = () => {
  try { const canvas = document.createElement("canvas"); return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")); } catch { return false; }
};

const AboutImmersiveScene = ({ progress, reducedMotion }: SceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [compact, setCompact] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  useEffect(() => {
    setCompact(window.matchMedia("(max-width: 767px), (pointer: coarse)").matches);
    setWebGLAvailable(supportsWebGL());
    const node = containerRef.current;
    if (!node) return;
    const onVisibility = () => setIsVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => setIsVisible(!document.hidden && (entry?.isIntersecting ?? true)), { rootMargin: "100%" });
    if (node.offsetHeight > 0) observer.observe(node);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  return <div ref={containerRef} className="about-canvas-shell" aria-hidden="true">
    {!webGLAvailable ? <div className="about-scene-fallback"><span>M</span></div> : <Canvas dpr={compact ? 0.72 : [0.8, 1.3]} frameloop={isVisible && !reducedMotion ? "always" : "demand"} camera={{ fov: compact ? 46 : 38, position: [0, 2, 31], near: 0.1, far: 130 }} gl={{ antialias: false, powerPreference: compact ? "low-power" : "high-performance" }}><Scene progress={progress} reducedMotion={reducedMotion} compact={compact} /></Canvas>}
  </div>;
};

export default AboutImmersiveScene;
