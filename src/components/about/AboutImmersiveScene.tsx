import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";
import handAsset from "@/assets/about-auralis/hand-points.bin.asset.json";
import treeAsset from "@/assets/about-auralis/tree-points.bin.asset.json";

type SceneProps = { progress: MotionValue<number>; reducedMotion: boolean; compact?: boolean };
type CloudData = { positions: Float32Array; origins?: Float32Array; count: number };

const GOLD = new THREE.Color("hsl(43, 93%, 54%)");
const PEARL = new THREE.Color("hsl(42, 32%, 94%)");
const VIOLET = new THREE.Color("hsl(277, 48%, 58%)");
const NAVY = new THREE.Color("hsl(220, 62%, 7%)");

const clamp01 = (value: number) => THREE.MathUtils.clamp(value, 0, 1);
const range = (value: number, start: number, end: number) => clamp01((value - start) / (end - start));
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

const decodeCloud = (buffer: ArrayBuffer, count: number, offset: number[], scale: number[], multiplier: number, stride: number): CloudData => {
  const values = new Uint16Array(buffer);
  const safeCount = Math.min(count, Math.floor(values.length / 3));
  const outputCount = Math.ceil(safeCount / stride);
  const positions = new Float32Array(outputCount * 3);
  let output = 0;
  for (let i = 0; i < safeCount; i += stride) {
    positions[output * 3] = (offset[0] + (values[i * 3] / 65535) * scale[0]) * multiplier;
    positions[output * 3 + 1] = (offset[1] + (values[i * 3 + 1] / 65535) * scale[1]) * multiplier;
    positions[output * 3 + 2] = (offset[2] + (values[i * 3 + 2] / 65535) * scale[2]) * multiplier;
    output += 1;
  }
  return { positions, count: outputCount };
};

const pointVertex = `
  attribute vec3 origin;
  uniform float uMorph;
  uniform float uReveal;
  uniform float uTime;
  uniform float uSize;
  varying float vAlpha;
  void main() {
    float delay = fract(sin(dot(position.xy, vec2(12.9898,78.233))) * 43758.5453) * .2;
    float morph = smoothstep(delay, delay + .72, uMorph);
    vec3 p = mix(origin, position, morph);
    float scan = smoothstep(uReveal - .16, uReveal, (position.y + 9.) / 18.);
    p.x += sin(uTime * .45 + position.y * .4) * .025;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (300.0 / -mv.z);
    vAlpha = morph * scan;
  }
`;

const pointFragment = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - .5;
    float d = dot(c, c);
    if (d > .25) discard;
    float glow = smoothstep(.25, 0., d);
    gl_FragColor = vec4(uColor, glow * vAlpha * uOpacity);
  }
`;

const ParticleCloud = ({ data, materialRef, color = PEARL, size = 2.2 }: { data: CloudData; materialRef: React.RefObject<THREE.ShaderMaterial>; color?: THREE.Color; size?: number }) => {
  const geometry = useMemo(() => {
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    result.setAttribute("origin", new THREE.BufferAttribute(data.origins ?? data.positions, 3));
    return result;
  }, [data]);
  const uniforms = useMemo(() => ({ uMorph: { value: 1 }, uReveal: { value: 1 }, uTime: { value: 0 }, uSize: { value: size }, uColor: { value: color }, uOpacity: { value: 0 } }), [color, size]);
  return <points geometry={geometry}><shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={pointVertex} fragmentShader={pointFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} /></points>;
};

const makeLattice = (radius = 8.7, height = 20) => new THREE.WireframeGeometry(new THREE.CylinderGeometry(radius, radius, height, 28, 9, true));

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
  const treeLattice = useRef<THREE.LineSegments>(null);
  const firefliesRef = useRef<THREE.Points>(null);
  const glyphLattice = useRef<THREE.LineSegments>(null);
  const handLattice = useRef<THREE.LineSegments>(null);
  const waveRef = useRef<THREE.LineSegments>(null);
  const trailRef = useRef<THREE.LineSegments>(null);
  const pathwayRef = useRef<THREE.LineSegments>(null);
  const glyphLatticeGeometry = useMemo(() => makeLattice(), []);
  const handLatticeGeometry = useMemo(() => makeLattice(7.4, 18), []);
  const treeLatticeGeometry = useMemo(() => makeLattice(8.2, 18), []);
  const trailGeometry = useMemo(() => makeTrails(compact ? 260 : 720, 5, 44), [compact]);
  const pathwayGeometry = useMemo(() => makeTrails(compact ? 260 : 620, 5, 40), [compact]);
  const waveGeometry = useMemo(() => makeWave(compact ? 18 : 30, compact ? 22 : 38), [compact]);
  const fireflyGeometry = useMemo(() => {
    const random = seeded(984);
    const count = compact ? 90 : 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const t = i / count;
      const angle = t * Math.PI * 12 + random();
      const radius = 3.2 + random() * 4.4;
      positions.set([Math.cos(angle) * radius, -7 + t * 15, Math.sin(angle) * radius], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [compact]);
  const cameraCurve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.5, 31), new THREE.Vector3(1.5, 2, 22), new THREE.Vector3(-2.4, 3.2, 6),
    new THREE.Vector3(2.2, 4.2, -11), new THREE.Vector3(-3.5, 7.5, -27), new THREE.Vector3(1.4, 4.5, -38),
  ], false, "catmullrom", 0.5), []);

  useEffect(() => {
    let active = true;
    Promise.all([fetch(handAsset.url).then((r) => r.ok ? r.arrayBuffer() : Promise.reject()), fetch(treeAsset.url).then((r) => r.ok ? r.arrayBuffer() : Promise.reject())])
      .then(([handBuffer, treeBuffer]) => {
        if (!active) return;
        setHand(decodeCloud(handBuffer, 4173, [-0.5973206758, -0.9999998808, -0.6382458806], [1.1946413517, 1.9999998808, 1.2764917612], 7, compact ? 2 : 1));
        setTree(decodeCloud(treeBuffer, 50000, [-0.8996697664, -1.0000001192, -0.5329897404], [1.7993395329, 2, 1.0659794807], 7.2, compact ? 3 : 1));
      }).catch(() => undefined);
    return () => { active = false; };
  }, [compact]);

  useFrame(({ clock, pointer }) => {
    const p = reducedMotion ? 0.08 : progress.get();
    const time = clock.elapsedTime;
    const cameraPoint = cameraCurve.getPointAt(clamp01(p * 0.96));
    camera.position.lerp(cameraPoint, 0.075);
    const target = cameraCurve.getPointAt(clamp01(p * 0.96 + 0.035));
    target.x += pointer.x * 0.45;
    target.y += pointer.y * 0.24;
    camera.lookAt(target);
    camera.rotation.z = Math.sin(range(p, 0.12, 0.3) * Math.PI) * -0.22;

    const glyphOpacity = 1 - range(p, 0.23, 0.34);
    if (mMaterial.current) {
      mMaterial.current.uniforms.uMorph.value = reducedMotion ? 1 : range(p, 0, 0.055);
      mMaterial.current.uniforms.uReveal.value = 1;
      mMaterial.current.uniforms.uOpacity.value = glyphOpacity;
      mMaterial.current.uniforms.uTime.value = time;
    }
    if (mGroup.current) {
      mGroup.current.rotation.y = Math.sin(time * 0.22) * 0.1 + pointer.x * 0.035;
      mGroup.current.rotation.x = pointer.y * -0.025;
      mGroup.current.position.y = Math.sin(time * 0.4) * 0.2;
      mGroup.current.scale.setScalar(1 + range(p, 0.22, 0.34) * 0.4);
    }
    if (glyphLattice.current) {
      const weave = Math.min(range(p, 0.035, 0.12), 1 - range(p, 0.22, 0.31));
      glyphLattice.current.geometry.setDrawRange(0, Math.floor(glyphLatticeGeometry.index ? glyphLatticeGeometry.index.count * weave : Infinity));
      glyphLattice.current.rotation.y = time * 0.04;
      (glyphLattice.current.material as THREE.LineBasicMaterial).opacity = weave * 0.3;
    }

    const handOpacity = fadeWindow(p, 0.22, 0.31, 0.43, 0.52);
    if (handMaterial.current) {
      handMaterial.current.uniforms.uMorph.value = 1;
      handMaterial.current.uniforms.uReveal.value = range(p, 0.25, 0.37);
      handMaterial.current.uniforms.uOpacity.value = handOpacity;
      handMaterial.current.uniforms.uTime.value = time;
    }
    if (handGroup.current) handGroup.current.rotation.y = -0.35 + range(p, 0.24, 0.46) * Math.PI * 2;
    if (handLattice.current) {
      const weave = Math.min(range(p, 0.23, 0.31), 1 - range(p, 0.43, 0.51));
      handLattice.current.geometry.setDrawRange(0, Math.floor(handLatticeGeometry.index ? handLatticeGeometry.index.count * weave : Infinity));
      (handLattice.current.material as THREE.LineBasicMaterial).opacity = weave * 0.24;
    }

    if (trailRef.current) (trailRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.18, 0.27, 0.52, 0.62) * 0.5;
    if (pathwayRef.current) (pathwayRef.current.material as THREE.LineBasicMaterial).opacity = fadeWindow(p, 0.51, 0.62, 0.78, 0.88) * 0.68;
    if (waveRef.current) {
      const opacity = fadeWindow(p, 0.46, 0.54, 0.68, 0.77);
      const attribute = waveRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < attribute.count; i += 1) {
        const x = attribute.getX(i); const z = attribute.getZ(i);
        attribute.setY(i, Math.sin(x * 0.42 + z * 0.3 + time * 0.7) * 0.46);
      }
      attribute.needsUpdate = true;
      (waveRef.current.material as THREE.LineBasicMaterial).opacity = opacity * 0.38;
    }

    const treeOpacity = range(p, 0.79, 0.9);
    if (treeMaterial.current) {
      treeMaterial.current.uniforms.uMorph.value = 1;
      treeMaterial.current.uniforms.uReveal.value = range(p, 0.78, 0.94);
      treeMaterial.current.uniforms.uOpacity.value = treeOpacity;
      treeMaterial.current.uniforms.uTime.value = time;
    }
    if (treeGroup.current) treeGroup.current.rotation.y = Math.sin(time * 0.12) * 0.12 + (p - 0.82) * 0.22;
    if (treeLattice.current) {
      const weave = range(p, 0.86, 0.97);
      treeLattice.current.geometry.setDrawRange(0, Math.floor(treeLatticeGeometry.index ? treeLatticeGeometry.index.count * weave : Infinity));
      (treeLattice.current.material as THREE.LineBasicMaterial).opacity = weave * 0.22;
    }
    if (firefliesRef.current) {
      firefliesRef.current.rotation.y = time * 0.08;
      firefliesRef.current.position.y = (time * 0.18) % 1.6;
      (firefliesRef.current.material as THREE.PointsMaterial).opacity = treeOpacity * (0.38 + Math.sin(time * 1.4) * 0.08);
    }
  });

  return <>
    <fog attach="fog" args={[NAVY, 22, 88]} /><color attach="background" args={[NAVY]} />
    <ambientLight intensity={0.28} /><directionalLight position={[-10, 16, 18]} color={GOLD} intensity={1.8} />
    <group ref={mGroup} position={[0, 1, 0]}><ParticleCloud data={glyph} materialRef={mMaterial} size={compact ? 2.6 : 2.2} /><lineSegments ref={glyphLattice} geometry={glyphLatticeGeometry}><lineBasicMaterial color={GOLD} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments></group>
    <lineSegments ref={trailRef} geometry={trailGeometry} position={[0, 1, -3]}><lineBasicMaterial color={VIOLET} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {hand && <group ref={handGroup} position={[0, 0, -18]} scale={1.3}><ParticleCloud data={hand} materialRef={handMaterial} size={compact ? 2.8 : 2.35} /><lineSegments ref={handLattice} geometry={handLatticeGeometry}><lineBasicMaterial color={GOLD} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments></group>}
    <lineSegments ref={waveRef} geometry={waveGeometry} position={[-1, -5, -26]} rotation={[0.18, 0, -0.12]}><lineBasicMaterial color={GOLD} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    <lineSegments ref={pathwayRef} geometry={pathwayGeometry} position={[0, 0, -30]} rotation={[Math.PI / 2.8, 0, 0]}><lineBasicMaterial color={PEARL} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments>
    {tree && <group ref={treeGroup} position={[0, -1, -52]} scale={1.55}><ParticleCloud data={tree} materialRef={treeMaterial} size={compact ? 2.4 : 1.9} /><lineSegments ref={treeLattice} geometry={treeLatticeGeometry}><lineBasicMaterial color={GOLD} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></lineSegments><points ref={firefliesRef} geometry={fireflyGeometry}><pointsMaterial color={GOLD} size={0.1} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} /></points></group>}
    {!compact && !reducedMotion && <EffectComposer multisampling={0}><Bloom intensity={0.5} luminanceThreshold={0.7} luminanceSmoothing={0.34} mipmapBlur /></EffectComposer>}
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
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry?.isIntersecting ?? true));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={containerRef} className="about-canvas-shell" aria-hidden="true">
    {!webGLAvailable ? <div className="about-scene-fallback"><span>M</span></div> : <Canvas dpr={compact ? 0.72 : [0.8, 1.3]} frameloop={isVisible && !reducedMotion ? "always" : "demand"} camera={{ fov: compact ? 46 : 38, position: [0, 2, 31], near: 0.1, far: 130 }} gl={{ antialias: false, powerPreference: compact ? "low-power" : "high-performance" }}><Scene progress={progress} reducedMotion={reducedMotion} compact={compact} /></Canvas>}
  </div>;
};

export default AboutImmersiveScene;