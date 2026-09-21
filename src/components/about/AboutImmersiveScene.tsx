import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

type SceneProps = { progress: MotionValue<number>; reducedMotion: boolean; compact?: boolean };
type CloudData = { positions: Float32Array; origins?: Float32Array; count: number };
type BeadShaderState = { uniforms: Record<string, { value: unknown }> };

const GOLD = new THREE.Color("#e6ecf2");
const PEARL = new THREE.Color("#e6ecf2");
const VIOLET = new THREE.Color("#b552ff");
const POINTER_VIOLET = new THREE.Color("#b579ff");
const BACKDROP = new THREE.Color("#05060a");
const DEMO_FOG = new THREE.Color("#868e96");

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
    positions[i * 3] = segment[0] + (segment[2] - segment[0]) * t + (random() - 0.5) * 0.58;
    positions[i * 3 + 1] = segment[1] + (segment[3] - segment[1]) * t + (random() - 0.5) * 0.58;
    positions[i * 3 + 2] = (random() - 0.5) * 1.8;
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
  attribute vec3 aBurst;
  attribute vec3 aCurtain;
  attribute float aShade;
  attribute float aHero;
  attribute float aSeed;
  attribute float aHeight;
  uniform float uMorph;
  uniform float uBurst;
  uniform float uCrumble;
  uniform float uGrowth;
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
  varying float vLife;
  void main() {
    float delay = aSeed * .28;
    float morph = smoothstep(delay, delay + .66, uMorph);
    float eased = morph * morph * morph * (morph * (morph * 6. - 15.) + 10.);
    vec3 p = mix(origin, position, eased);
    float burstEase = uBurst * uBurst * (3. - 2. * uBurst);
    float curlPhase = aSeed * 18.8496 + uTime * .45;
    p += aBurst * burstEase * (5. + aSeed * 12.);
    p += vec3(sin(curlPhase), cos(curlPhase * .73), sin(curlPhase * .51)) * burstEase * 1.8;
    float crumbleDelay = smoothstep(aHeight * .58, aHeight * .58 + .34, uCrumble);
    p = mix(p, aCurtain, crumbleDelay);
    p.x += sin(aCurtain.y * .72 + uTime * 1.1 + aSeed * 6.28) * crumbleDelay * (1.15 + uCrumble * .8);
    p.z += cos(aCurtain.x * .38 + uTime * .82) * crumbleDelay * 1.35;
    float grow = smoothstep(aHeight * .82, aHeight * .82 + .22, uGrowth);
    p.y = mix(-8.5, p.y, grow);
    p.xz *= .28 + .72 * grow;
    float h = (position.y + 9. + position.x * uTilt) / 18.;
    float scan = 1. - smoothstep(uReveal, uReveal + .14, h);
    float band = max(0., 1. - abs(uReveal - h) / .12) * step(.001, uReveal) * (1. - step(.999, uReveal));
    float lifePhase = position.x * .23 + position.y * .31 + position.z * .17;
    p += uSway * vec3(sin(uTime * .6 + lifePhase), sin(uTime * .5 + lifePhase * 1.7), cos(uTime * .7 + lifePhase * 1.3));
    float lifeBand = .5 + .5 * sin(position.y * .24 + position.x * .1 - uTime * .5);
    vLife = lifeBand * lifeBand * lifeBand;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
    float flight = sin(3.14159265 * eased);
    vTrail = flight * .9 + band * .8;
    gl_PointSize = uSize * (1. + aHero) * (.62 + .38 * eased) * (300.0 / -mv.z);
    vAlpha = morph * scan * grow * (1. - burstEase * .92);
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
  uniform vec3 uLife;
  uniform float uFlow;
  varying float vAlpha;
  varying float vShade;
  varying float vHero;
  varying float vTrail;
  varying float vDepth;
  varying float vLife;
  void main() {
    vec2 c = gl_PointCoord - .5;
    float d = length(c);
    float body = smoothstep(.5, .1, d);
    float core = smoothstep(.32, .0, d);
    if (body < .02) discard;
    vec3 col = uColor * (.42 + .58 * vShade);
    col = mix(col, uAccent, clamp(vTrail * .35, 0., 1.));
    col += uLife * uFlow * vLife * .62;
    col += uColor * (vHero * 5.0 + core * .12);
    float fog = smoothstep(uFogNear, uFogFar, vDepth);
    col = mix(col, uFogColor, fog * .28);
    float a = body * vAlpha * uOpacity * (.38 + vHero * .16 + vTrail * .12 + core * .12) * (1. - fog * .58);
    gl_FragColor = vec4(col, a);
  }
`;

type CloudUniforms = { color?: THREE.Color; accent?: THREE.Color; size?: number; sway?: number; flow?: number; light?: [number, number, number] };

const ParticleCloud = ({ data, materialRef, color = PEARL, accent = GOLD, size = 2.2, sway = 0.05, flow = 0.35, light = [-14, 26, 34] }: CloudUniforms & { data: CloudData; materialRef: React.RefObject<THREE.ShaderMaterial> }) => {
  const geometry = useMemo(() => {
    const result = new THREE.BufferGeometry();
    const count = data.count;
    const shade = new Float32Array(count);
    const hero = new Float32Array(count);
    const seed = new Float32Array(count);
    const burst = new Float32Array(count * 3);
    const curtain = new Float32Array(count * 3);
    const height = new Float32Array(count);
    const random = seeded(count + 7);
    const centroid = new THREE.Vector3();
    for (let i = 0; i < count; i += 1) centroid.x += data.positions[i * 3] / count, centroid.y += data.positions[i * 3 + 1] / count, centroid.z += data.positions[i * 3 + 2] / count;
    const key = new THREE.Vector3(light[0], light[1], light[2]).normalize();
    const normal = new THREE.Vector3();
    const bounds = new THREE.Box3().setFromBufferAttribute(new THREE.BufferAttribute(data.positions, 3));
    const spanY = Math.max(0.001, bounds.max.y - bounds.min.y);
    for (let i = 0; i < count; i += 1) {
      normal.set(data.positions[i * 3] - centroid.x, data.positions[i * 3 + 1] - centroid.y, data.positions[i * 3 + 2] - centroid.z).normalize();
      const wrap = Math.pow(0.5 + 0.5 * normal.dot(key), 1.7);
      shade[i] = 0.6 + 0.4 * wrap + (random() - 0.5) * 0.06;
      hero[i] = random() < 0.04 ? 1 : 0;
      seed[i] = random();
      const angle = random() * Math.PI * 2;
      burst.set([Math.cos(angle) * (0.7 + random() * 0.5), (random() - 0.35) * 1.1, Math.sin(angle) * (0.7 + random() * 0.5)], i * 3);
      const column = (i % 48) / 47;
      curtain.set([(column - 0.5) * 25, bounds.min.y + ((Math.floor(i / 48) % 80) / 79) * spanY * 1.7, -2 + (random() - 0.5) * 1.2], i * 3);
      height[i] = (data.positions[i * 3 + 1] - bounds.min.y) / spanY;
    }
    result.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    result.setAttribute("origin", new THREE.BufferAttribute(data.origins ?? data.positions, 3));
    result.setAttribute("aShade", new THREE.BufferAttribute(shade, 1));
    result.setAttribute("aHero", new THREE.BufferAttribute(hero, 1));
    result.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    result.setAttribute("aBurst", new THREE.BufferAttribute(burst, 3));
    result.setAttribute("aCurtain", new THREE.BufferAttribute(curtain, 3));
    result.setAttribute("aHeight", new THREE.BufferAttribute(height, 1));
    return result;
  }, [data, light]);
  const uniforms = useMemo(() => ({
    uMorph: { value: 1 }, uBurst: { value: 0 }, uCrumble: { value: 0 }, uGrowth: { value: 1 }, uReveal: { value: 1 }, uTilt: { value: 0 }, uTime: { value: 0 },
    uSize: { value: size }, uSway: { value: sway }, uColor: { value: color }, uAccent: { value: accent },
    uOpacity: { value: 0 }, uFogColor: { value: DEMO_FOG }, uFogNear: { value: 25 }, uFogFar: { value: 130 },
    uLife: { value: VIOLET }, uFlow: { value: flow },
  }), [color, accent, size, sway, flow]);
  return <points geometry={geometry} frustumCulled={false}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={pointVertex} fragmentShader={pointFragment} transparent depthWrite={false} blending={THREE.NormalBlending} /></points>;
};

/* ---------- shared Auralis form: true lit pearl-violet bead instances ---------- */

const AuralisBeads = ({ data, materialRef, growthRef, compact, density = 1, beadSize = 0.08, centerY = 0, seed = 71717 }: { data: CloudData; materialRef: React.RefObject<THREE.MeshStandardMaterial>; growthRef: React.RefObject<THREE.Group>; compact: boolean; density?: number; beadSize?: number; centerY?: number; seed?: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const resolvedDensity = compact ? 1 : density;
    const total = data.count * resolvedDensity;
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    const jitterRandom = seeded(seed + 5);
    const random = seeded(seed + 1);
    const pearl = new THREE.Color("#ffffff");
    const beadColor = new THREE.Color();
    const light = new THREE.Vector3(-14, 26, 34).normalize();
    const glow = new Float32Array(total * 3);
    const heights = new Float32Array(total);
    const bounds = new THREE.Box3().setFromBufferAttribute(new THREE.BufferAttribute(data.positions, 3));
    const spanY = Math.max(0.001, bounds.max.y - bounds.min.y);
    const jitter = beadSize * (1.5 + resolvedDensity * 0.3);
    let output = 0;
    for (let i = 0; i < data.count; i += 1) {
      const baseX = data.positions[i * 3];
      const baseY = data.positions[i * 3 + 1];
      const baseZ = data.positions[i * 3 + 2];
      for (let d = 0; d < resolvedDensity; d += 1) {
        const x = baseX + (d === 0 ? 0 : (jitterRandom() - 0.5) * jitter);
        const y = baseY + (d === 0 ? 0 : (jitterRandom() - 0.5) * jitter);
        const z = baseZ + (d === 0 ? 0 : (jitterRandom() - 0.5) * jitter);
        position.set(x, y + centerY, z);
        const hero = random() < 0.04;
        const beadScale = hero ? beadSize * 2 : beadSize * (1 + (random() - 0.5) * 0.4);
        scale.setScalar(beadScale);
        matrix.compose(position, quaternion, scale);
        mesh.setMatrixAt(output, matrix);
        const normal = new THREE.Vector3(x, y, z).normalize();
        const wrap = Math.pow(0.5 + 0.5 * normal.dot(light), 1.7);
        beadColor.copy(pearl).multiplyScalar(0.82 + 0.18 * wrap + (random() - 0.5) * 0.04);
        mesh.setColorAt(output, beadColor);
        if (hero) glow.set([5, 5, 5], output * 3);
        heights[output] = clamp01((y - bounds.min.y) / spanY);
        random();
        random();
        output += 1;
      }
    }
    mesh.geometry.setAttribute("aGlow", new THREE.InstancedBufferAttribute(glow, 3));
    mesh.geometry.setAttribute("aTreeHeight", new THREE.InstancedBufferAttribute(heights, 1));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    const material = materialRef.current;
    if (material) material.needsUpdate = true;
  }, [beadSize, centerY, compact, data, density, materialRef, seed]);
  return <group ref={growthRef}>
    <instancedMesh ref={meshRef} args={[undefined, undefined, data.count * (compact ? 1 : density)]} frustumCulled={false}>
      <sphereGeometry args={[0.5, 8, 6]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#ffffff"
        roughness={0.98}
        metalness={0}
        envMapIntensity={0.08}
        onBeforeCompile={(shader) => {
          shader.uniforms.uTreeScan = { value: 0 };
          shader.uniforms.uTreeTime = { value: 0 };
           shader.uniforms.uObjectOpacity = { value: 0 };
          shader.uniforms.uTreeScanTint = { value: new THREE.Color(VIOLET).multiplyScalar(4.2) };
          shader.uniforms.uTreeFlowTint = { value: new THREE.Color(VIOLET).multiplyScalar(0.8) };
          shader.vertexShader = shader.vertexShader
             .replace("#include <common>", "#include <common>\nattribute vec3 aGlow;\nattribute float aTreeHeight;\nvarying vec3 vTreeGlow;\nvarying float vObjectReveal;\nuniform float uTreeScan;\nuniform float uTreeTime;\nuniform vec3 uTreeScanTint;\nuniform vec3 uTreeFlowTint;")
            .replace("#include <begin_vertex>", [
              "#include <begin_vertex>",
              "float treeLine = uTreeScan * 1.05;",
              "float treeDelta = treeLine - aTreeHeight;",
              "float treeReveal = clamp(treeDelta / 0.05, 0.0, 1.0);",
              "transformed *= treeReveal;",
               "vObjectReveal = treeReveal;",
              "float treeActive = 1.0 - step(0.9999, uTreeScan);",
              "float treeBand = treeActive * max(0.0, 1.0 - treeDelta / 0.14) * step(0.0, treeDelta);",
              "float treeLife = 0.5 + 0.5 * sin(aTreeHeight * 12.0 - uTreeTime * 0.5);",
              "vTreeGlow = aGlow + uTreeScanTint * treeBand + uTreeFlowTint * treeLife * treeLife * treeLife;",
            ].join("\n"));
          shader.fragmentShader = shader.fragmentShader
             .replace("#include <common>", "#include <common>\nvarying vec3 vTreeGlow;\nvarying float vObjectReveal;\nuniform float uObjectOpacity;")
             .replace("#include <color_fragment>", "#include <color_fragment>\n\tdiffuseColor.a *= vObjectReveal * uObjectOpacity;")
             .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\n\ttotalEmissiveRadiance += vTreeGlow;");
          const material = materialRef.current;
           if (material) material.userData.beadShader = shader;
        }}
         transparent
         depthWrite={false}
      />
    </instancedMesh>
  </group>;
};

/* ---------- self-weaving containment lattice ---------- */

const makeLattice = (radius = 7.6, height = 18, seed = 20260728) => {
  const geometry = new THREE.WireframeGeometry(new THREE.CylinderGeometry(radius, radius, height, 56, 20, true));
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

/* ---------- tapered violet ribbon burst ---------- */

const makeRibbons = (ribbons: number, segments: number) => {
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const progress: number[] = [];
  const ribbon: number[] = [];
  const side: number[] = [];
  for (let r = 0; r < ribbons; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const t0 = s / segments;
      const t1 = (s + 1) / segments;
      positions.push(0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0);
      progress.push(t0,t1,t0, t0,t1,t1);
      ribbon.push(r,r,r,r,r,r);
      side.push(-1,-1,1, 1,-1,1);
    }
  }
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("aProgress", new THREE.Float32BufferAttribute(progress, 1));
  geometry.setAttribute("aRibbon", new THREE.Float32BufferAttribute(ribbon, 1));
  geometry.setAttribute("aSide", new THREE.Float32BufferAttribute(side, 1));
  return geometry;
};

const ribbonVertex = `
  attribute float aProgress;
  attribute float aRibbon;
  attribute float aSide;
  uniform float uTime;
  uniform float uBurst;
  varying float vProgress;
  varying float vEdge;
  void main() {
    float angle = aRibbon * 1.256637 + .34;
    float t = aProgress;
    float travel = smoothstep(0., 1., uBurst);
    float head = travel * 1.3;
    float visible = smoothstep(head - .42, head - .26, t) * (1. - smoothstep(head, head + .08, t));
    float radius = 1.2 + t * 12.;
    vec3 p = vec3(cos(angle) * radius, sin(angle) * radius * .58, -t * 20.);
    p.x += sin(t * 12. + uTime * 1.15 + aRibbon) * (1. + t * 2.2);
    p.y += cos(t * 9. - uTime * .86 + aRibbon * 2.) * (0.6 + t * 1.4);
    p.z += sin(t * 7. + aRibbon) * 1.8;
    float width = (.34 + sin(t * 3.14159265) * .72) * (1. - t * .55);
    p.xy += vec2(-sin(angle), cos(angle)) * aSide * width;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
    vProgress = t;
    vEdge = visible;
  }
`;

const ribbonFragment = `
  uniform vec3 uColor;
  uniform vec3 uEdge;
  uniform float uOpacity;
  varying float vProgress;
  varying float vEdge;
  void main() {
    float tail = pow(1. - vProgress, .55);
    vec3 color = mix(uColor, uEdge, pow(vProgress, 5.));
    float alpha = uOpacity * vEdge * (.28 + tail * .72);
    if (alpha < .008) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

const Ribbons = ({ materialRef, compact }: { materialRef: React.RefObject<THREE.ShaderMaterial>; compact: boolean }) => {
  const geometry = useMemo(() => makeRibbons(3, compact ? 54 : 110), [compact]);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uBurst: { value: 0 }, uOpacity: { value: 0 }, uColor: { value: VIOLET }, uEdge: { value: GOLD } }), []);
  return <mesh geometry={geometry} frustumCulled={false}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={ribbonVertex} fragmentShader={ribbonFragment} transparent depthWrite={false} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} /></mesh>;
};

/* ---------- low rolling finale fog ---------- */

const fogVertex = `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += sin(p.x * .12 + uTime * .14) * 1.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
  }
`;

const fogFragment = `
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColor;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p) { vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
  void main() {
    float n = noise(vUv * vec2(7.,3.) + vec2(uTime * .025, 0.));
    n += noise(vUv * vec2(14.,5.) - vec2(uTime * .018, 0.)) * .45;
    float edgeY = smoothstep(0., .3, vUv.y) * (1. - smoothstep(.72, 1., vUv.y));
    float edgeX = smoothstep(0., .16, vUv.x) * (1. - smoothstep(.84, 1., vUv.x));
    float alpha = edgeX * edgeY * smoothstep(.3, 1.1, n) * uOpacity;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

const FinaleFog = ({ materialRef }: { materialRef: React.RefObject<THREE.ShaderMaterial> }) => {
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uOpacity: { value: 0 }, uColor: { value: PEARL } }), []);
  return <mesh position={[1.5, -4.6, -64]}><planeGeometry args={[44, 11, 48, 16]} /><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={fogVertex} fragmentShader={fogFragment} transparent depthWrite={false} blending={THREE.NormalBlending} /></mesh>;
};

const Scene = ({ progress, reducedMotion, compact = false }: SceneProps) => {
  const { camera } = useThree();
  const [hand, setHand] = useState<CloudData | null>(null);
  const [tree, setTree] = useState<CloudData | null>(null);
  const glyph = useMemo(() => makeM(compact ? 6000 : 14000), [compact]);
  const mMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const handMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const treeMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const mTransitionMaterial = useRef<THREE.ShaderMaterial>(null);
  const handTransitionMaterial = useRef<THREE.ShaderMaterial>(null);
  const mGroup = useRef<THREE.Group>(null);
  const handGroup = useRef<THREE.Group>(null);
  const treeGroup = useRef<THREE.Group>(null);
  const mGrowthGroup = useRef<THREE.Group>(null);
  const handGrowthGroup = useRef<THREE.Group>(null);
  const treeGrowthGroup = useRef<THREE.Group>(null);
  const glyphLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const handLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeLatticeMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeLatticeGroup = useRef<THREE.Group>(null);
  const glyphLatticeGroup = useRef<THREE.Group>(null);
  const handLatticeGroup = useRef<THREE.Group>(null);
  const waveMotesMaterial = useRef<THREE.ShaderMaterial>(null);
  const treeMotesMaterial = useRef<THREE.ShaderMaterial>(null);
  const waveRef = useRef<THREE.LineSegments>(null);
  const trailRef = useRef<THREE.LineSegments>(null);
  const pathwayRef = useRef<THREE.LineSegments>(null);
  const ribbonMaterial = useRef<THREE.ShaderMaterial>(null);
  const finaleFogMaterial = useRef<THREE.ShaderMaterial>(null);
  const mAutoGrowth = useRef(0);
  const mAutoStarted = useRef(false);
  const handAutoGrowth = useRef(0);
  const handAutoStarted = useRef(false);
  const treeAutoGrowth = useRef(0);
  const treeAutoStarted = useRef(false);
  const pointerSmooth = useRef(new THREE.Vector2());
  const glyphLatticeGeometry = useMemo(() => makeLattice(7.6, 18), []);
  const handLatticeGeometry = useMemo(() => makeLattice(7.6, 18, 20260729), []);
  const treeLatticeGeometry = useMemo(() => makeLattice(7.6, 18, 20260730), []);
  const trailGeometry = useMemo(() => makeTrails(compact ? 260 : 720, 5, 44), [compact]);
  const pathwayGeometry = useMemo(() => makeTrails(compact ? 260 : 620, 5, 40), [compact]);
  const waveGeometry = useMemo(() => makeWave(compact ? 18 : 30, compact ? 22 : 38), [compact]);
  const waveMoteConfig = useMemo<MoteConfig>(() => ({ count: compact ? 50 : 130, spreadX: 26, spreadZ: 10, rise: 14, sway: 0.9, speed: [0.02, 0.05], size: 0.42, seed: 5150 }), [compact]);
  const treeMoteConfig = useMemo<MoteConfig>(() => ({ count: compact ? 40 : 110, spreadX: 11, spreadZ: 9, rise: 20, sway: 1.2, speed: [0.025, 0.06], size: 0.5, seed: 6060 }), [compact]);
  const cameraCurve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.5, 31), new THREE.Vector3(1.5, 2, 22), new THREE.Vector3(-2.4, 3.2, 6),
    new THREE.Vector3(2.2, 4.2, -11), new THREE.Vector3(-3.5, 7.5, -27), new THREE.Vector3(1.4, 4.5, -38),
  ], false, "catmullrom", 0.5), []);

  useEffect(() => {
    let active = true;
    Promise.all([fetch("/about/hand-points.bin").then((r) => r.ok ? r.arrayBuffer() : Promise.reject()), fetch("/about/tree-points.bin").then((r) => r.ok ? r.arrayBuffer() : Promise.reject())])
      .then(([handBuffer, treeBuffer]) => {
        if (!active) return;
        setHand(decodeCloud(handBuffer, 4173, [-0.5973206758, -0.9999998808, -0.6382458806], [1.1946413517, 1.9999998808, 1.2764917612], 7, compact ? 2 : 1, 1, 0));
        setTree(decodeCloud(treeBuffer, 50000, [-0.8996697664, -1.0000001192, -0.5329897404], [1.7993395329, 2, 1.0659794807], 8, 1, 1, 0));
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
    camera.position.lerp(cameraPoint, reducedMotion ? 1 : 1 - Math.pow(0.0006, Math.min(delta, 0.2)));
    const target = cameraCurve.getPointAt(clamp01(p * 0.96 + 0.035));
    const finaleFocus = smoother(range(p, 0.76, 0.9));
    camera.position.lerp(new THREE.Vector3(11.2, 1.4, -14), finaleFocus);
    target.lerp(new THREE.Vector3(11.2, -1.6, -64), finaleFocus);
    target.x += px * 0.45;
    target.y += py * 0.24;
    camera.lookAt(target);
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    const targetFov = THREE.MathUtils.lerp(compact ? 46 : 38, 32, finaleFocus);
    if (Math.abs(perspectiveCamera.fov - targetFov) > 0.001) {
      perspectiveCamera.fov = targetFov;
      perspectiveCamera.updateProjectionMatrix();
    }
    // single out-and-back bank (~13 deg) through the flight, level afterwards
    camera.rotation.z = -0.26 * Math.sin(Math.PI * smoother(range(p, 0.04, 0.44)));

    const glyphOpacity = 1 - range(p, 0.16, 0.26);
    const glyphCylinderBuild = smoother(range(p, 0.015, 0.065));
    if (reducedMotion) {
      mAutoGrowth.current = 1;
    } else if (p >= 0.065) {
      mAutoStarted.current = true;
      mAutoGrowth.current = Math.min(1, mAutoGrowth.current + delta / 1.65);
    } else if (p < 0.01) {
      mAutoStarted.current = false;
      mAutoGrowth.current = 0;
    }
    const glyphGrowth = smoother(mAutoStarted.current ? mAutoGrowth.current : 0);
    if (mMaterial.current) {
      const shader = mMaterial.current.userData.beadShader as BeadShaderState | undefined;
      if (shader) {
        shader.uniforms.uTreeScan.value = glyphGrowth;
        shader.uniforms.uTreeTime.value = time;
        shader.uniforms.uObjectOpacity.value = glyphOpacity;
      }
    }
    if (mTransitionMaterial.current) {
      const burst = smoother(range(p, 0.16, 0.245));
      mTransitionMaterial.current.uniforms.uMorph.value = 1;
      mTransitionMaterial.current.uniforms.uBurst.value = reducedMotion ? 0 : burst;
      mTransitionMaterial.current.uniforms.uReveal.value = 1;
      mTransitionMaterial.current.uniforms.uOpacity.value = Math.sin(Math.PI * burst) * 0.72;
      mTransitionMaterial.current.uniforms.uTime.value = time;
    }
    if (ribbonMaterial.current) {
      const burst = range(p, 0.145, 0.305);
      ribbonMaterial.current.uniforms.uTime.value = time;
      ribbonMaterial.current.uniforms.uBurst.value = burst;
      ribbonMaterial.current.uniforms.uOpacity.value = reducedMotion ? 0 : Math.sin(Math.PI * burst) * 0.9;
    }
    if (mGroup.current) {
      const hold = 1 - smoother(range(p, 0.2, 0.32));
      mGroup.current.rotation.y = (Math.sin(time * 0.45) * 0.12 + px * 0.07) * hold;
      mGroup.current.rotation.x = -py * 0.04 * hold;
      mGroup.current.position.y = (compact ? -2 : 2) + Math.sin(time * 0.3) * 0.3 * hold;
      mGroup.current.scale.setScalar((compact ? 0.34 : 0.46) * (1 + range(p, 0.22, 0.34) * 0.4));
    }
    if (glyphLatticeMaterial.current) {
      const weave = Math.min(glyphCylinderBuild, 1 - range(p, 0.22, 0.31));
      glyphLatticeMaterial.current.uniforms.uBuild.value = weave;
      glyphLatticeMaterial.current.uniforms.uTime.value = time;
      glyphLatticeMaterial.current.uniforms.uOpacity.value = 0.32 * Math.min(1, weave * 3);
    }
    if (glyphLatticeGroup.current) glyphLatticeGroup.current.rotation.y = time * 0.08;

    const handOpacity = fadeWindow(p, 0.17, 0.26, 0.44, 0.52);
    const handCylinderBuild = smoother(range(p, 0.19, 0.255));
    if (reducedMotion) {
      handAutoGrowth.current = 1;
    } else if (p >= 0.255) {
      handAutoStarted.current = true;
      handAutoGrowth.current = Math.min(1, handAutoGrowth.current + delta / 2.15);
    } else if (p < 0.18) {
      handAutoStarted.current = false;
      handAutoGrowth.current = 0;
    }
    const handGrowth = smoother(handAutoStarted.current ? handAutoGrowth.current : 0);
    if (handMaterial.current) {
      const shader = handMaterial.current.userData.beadShader as BeadShaderState | undefined;
      if (shader) {
        shader.uniforms.uTreeScan.value = handGrowth;
        shader.uniforms.uTreeTime.value = time;
        shader.uniforms.uObjectOpacity.value = handOpacity * (1 - range(p, 0.43, 0.49));
      }
    }
    if (handTransitionMaterial.current) {
      const crumble = reducedMotion ? 0 : smoother(range(p, 0.43, 0.56));
      handTransitionMaterial.current.uniforms.uMorph.value = 1;
      handTransitionMaterial.current.uniforms.uCrumble.value = crumble;
      handTransitionMaterial.current.uniforms.uReveal.value = 1;
      handTransitionMaterial.current.uniforms.uOpacity.value = handOpacity * Math.sin(Math.PI * range(p, 0.405, 0.56)) * 0.76;
      handTransitionMaterial.current.uniforms.uTime.value = time;
    }
    if (handGroup.current) {
      // full eased pirouette during the scan-in, plus idle sway
      const hold = fadeWindow(p, 0.24, 0.3, 0.44, 0.5);
      handGroup.current.rotation.y = -0.35 + smoother(range(p, 0.25, 0.4)) * Math.PI * 2 + (Math.sin(time * 0.27 + 1) * 0.045 + px * 0.06) * hold;
      handGroup.current.position.x = -2.15 + px * 0.08 * hold;
      handGroup.current.position.y = 0.9 + Math.sin(time * 0.19 + 2) * 0.1 * hold;
    }
    if (handLatticeMaterial.current) {
      const weave = Math.min(handCylinderBuild, 1 - range(p, 0.43, 0.51));
      handLatticeMaterial.current.uniforms.uBuild.value = weave;
      handLatticeMaterial.current.uniforms.uTime.value = time;
      handLatticeMaterial.current.uniforms.uOpacity.value = 0.32 * Math.min(1, weave * 3);
    }
    if (handLatticeGroup.current) handLatticeGroup.current.rotation.y = time * 0.08;

    if (trailRef.current) (trailRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.42, 0.49, 0.57, 0.64) * 0.24;
    if (pathwayRef.current) (pathwayRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.51, 0.62, 0.78, 0.88) * 0.42;
    if (waveRef.current) {
      const opacity = fadeWindow(p, 0.46, 0.54, 0.68, 0.77);
      const attribute = waveRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < attribute.count; i += 1) {
        const x = attribute.getX(i); const z = attribute.getZ(i);
        attribute.setY(i, Math.sin(x * 0.42 + z * 0.3 + time * 0.7) * 0.46);
      }
      attribute.needsUpdate = true;
      (waveRef.current.material as THREE.LineBasicMaterial).opacity = opacity * 0.38;
      if (waveMotesMaterial.current) {
        waveMotesMaterial.current.uniforms.uTime.value = time;
        waveMotesMaterial.current.uniforms.uOpacity.value = opacity * 0.45;
      }
    }

    // Scrolling builds the cylinder. Once complete, the demo tree forms on its
    // own timeline, so the viewer can stop scrolling and watch the full growth.
    const cylinderBuild = smoother(range(p, 0.76, 0.84));
    if (reducedMotion) {
      treeAutoGrowth.current = 1;
    } else if (p >= 0.84) {
      treeAutoStarted.current = true;
      treeAutoGrowth.current = Math.min(1, treeAutoGrowth.current + delta / 4.8);
    } else if (p < 0.74) {
      treeAutoStarted.current = false;
      treeAutoGrowth.current = 0;
    }
    const treeGrowth = smoother(treeAutoStarted.current ? treeAutoGrowth.current : 0);
    if (treeMaterial.current) {
      const shader = treeMaterial.current.userData.beadShader as BeadShaderState | undefined;
      if (shader) {
        shader.uniforms.uTreeScan.value = treeGrowth;
        shader.uniforms.uTreeTime.value = time;
        shader.uniforms.uObjectOpacity.value = 1;
      }
    }
    if (treeGrowthGroup.current) {
      treeGrowthGroup.current.scale.setScalar(1);
    }
    if (treeGroup.current) {
      treeGroup.current.rotation.y = Math.sin(time * 0.24 + 3) * 0.055 + px * 0.05 + (p - 0.82) * 0.18;
      treeGroup.current.rotation.x = py * 0.025;
      treeGroup.current.position.y = -1.6 + Math.sin(time * 0.17 + 1) * 0.18;
    }
    if (treeLatticeMaterial.current) {
      treeLatticeMaterial.current.uniforms.uBuild.value = cylinderBuild;
      treeLatticeMaterial.current.uniforms.uTime.value = time;
      treeLatticeMaterial.current.uniforms.uOpacity.value = 0.32 * Math.min(1, cylinderBuild * 3);
    }
    if (treeLatticeGroup.current) treeLatticeGroup.current.rotation.y = time * 0.08;
    if (treeMotesMaterial.current) {
      treeMotesMaterial.current.uniforms.uTime.value = time;
      treeMotesMaterial.current.uniforms.uOpacity.value = treeGrowth * 0.65;
    }
    if (finaleFogMaterial.current) {
      finaleFogMaterial.current.uniforms.uTime.value = time;
      finaleFogMaterial.current.uniforms.uOpacity.value = fadeWindow(p, 0.735, 0.79, 0.96, 1.08) * (0.14 - treeGrowth * 0.05);
    }
  });

  return <>
    <fog attach="fog" args={[DEMO_FOG, 25, 130]} /><color attach="background" args={[BACKDROP]} />
    <hemisphereLight color="#e6ecf2" groundColor="#8a929a" intensity={0.3} />
    <ambientLight intensity={0.12} /><directionalLight position={[-14, 26, 34]} color="#ffffff" intensity={2.6} />
    <Dust count={compact ? 280 : 700} spread={44} height={30} position={[0, 2, 0]} />
    <Dust count={compact ? 220 : 700} spread={36} height={26} position={[0, 2, -34]} />
    <group ref={mGroup} position={[compact ? 8 : 13, compact ? -2 : 2.6, -8]} scale={compact ? 0.34 : 0.4}>
      <AuralisBeads data={glyph} materialRef={mMaterial} growthRef={mGrowthGroup} compact={compact} density={compact ? 1 : 2} beadSize={0.1} seed={20260720} />
      <ParticleCloud data={glyph} materialRef={mTransitionMaterial} color={PEARL} accent={VIOLET} size={compact ? 0.82 : 0.56} sway={0.05} flow={0.7} />
      <group ref={glyphLatticeGroup}><Lattice geometry={glyphLatticeGeometry} materialRef={glyphLatticeMaterial} height={18} color={PEARL} accent={VIOLET} /></group>
    </group>
    <group position={[compact ? 8 : 13, compact ? -2 : 2.6, -8]} scale={compact ? 0.34 : 0.4}><Ribbons materialRef={ribbonMaterial} compact={compact} /></group>
    <lineSegments ref={trailRef} geometry={trailGeometry} position={[0, 1, -3]}><lineBasicMaterial color={VIOLET} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {hand && <group ref={handGroup} position={[-2.15, 0.9, -37]} scale={0.58}>
      <AuralisBeads data={hand} materialRef={handMaterial} growthRef={handGrowthGroup} compact={compact} density={compact ? 1 : 3} beadSize={0.1} seed={90210} />
      <ParticleCloud data={hand} materialRef={handTransitionMaterial} color={PEARL} accent={VIOLET} size={compact ? 1.28 : 0.84} sway={0.025} flow={0.72} light={[-14, 26, 34]} />
      <group ref={handLatticeGroup}><Lattice geometry={handLatticeGeometry} materialRef={handLatticeMaterial} height={18} color={PEARL} accent={VIOLET} /></group>
    </group>}
    <lineSegments ref={waveRef} geometry={waveGeometry} position={[-1, -5, -26]} rotation={[0.18, 0, -0.12]}><lineBasicMaterial color={VIOLET} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    <Motes config={waveMoteConfig} materialRef={waveMotesMaterial} color={POINTER_VIOLET} position={[-1, -6, -26]} />
    <lineSegments ref={pathwayRef} geometry={pathwayGeometry} position={[0, 0, -30]} rotation={[Math.PI / 2.8, 0, 0]}><lineBasicMaterial color={PEARL} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {tree && <group ref={treeGroup} position={[11.2, -1.6, -64]} scale={compact ? 0.54 : 0.68}>
      <AuralisBeads data={tree} materialRef={treeMaterial} growthRef={treeGrowthGroup} compact={compact} density={3} beadSize={0.08} centerY={8} seed={71717} />
      <group ref={treeLatticeGroup}><Lattice geometry={treeLatticeGeometry} materialRef={treeLatticeMaterial} height={18} color={PEARL} accent={VIOLET} /></group>
      <Motes config={treeMoteConfig} materialRef={treeMotesMaterial} color={POINTER_VIOLET} position={[0, -6, 0]} />
    </group>}
    <FinaleFog materialRef={finaleFogMaterial} />
    {!compact && !reducedMotion && <EffectComposer multisampling={0}>
      <Bloom intensity={1.5} luminanceThreshold={3.5} luminanceSmoothing={0.1} mipmapBlur />
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
    {!webGLAvailable ? <div className="about-scene-fallback"><span>M</span></div> : <Canvas dpr={compact ? 0.72 : [0.8, 1.3]} frameloop={isVisible && !reducedMotion ? "always" : "demand"} camera={{ fov: compact ? 46 : 38, position: [0, 2, 31], near: 0.1, far: 130 }} gl={{ antialias: false, powerPreference: compact ? "low-power" : "high-performance", toneMapping: THREE.ACESFilmicToneMapping }}><Scene progress={progress} reducedMotion={reducedMotion} compact={compact} /></Canvas>}
  </div>;
};

export default AboutImmersiveScene;
