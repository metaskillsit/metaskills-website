import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { LineSegments, Points, PointsMaterial } from "three";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import handAsset from "@/assets/about-auralis/hand-points.bin.asset.json";
import treeAsset from "@/assets/about-auralis/tree-points.bin.asset.json";

type SceneProps = { progress: MotionValue<number>; reducedMotion: boolean };

const GOLD = new THREE.Color("#ffb81c");
const PEARL = new THREE.Color("#f5f1e8");

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

const createMPoints = (count: number) => {
  const random = seeded(20260720);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const segment = Math.floor(random() * 4);
    const t = random();
    const points = [
      [-8, -7, -8, 8],
      [-8, 8, 0, -1],
      [0, -1, 8, 8],
      [8, 8, 8, -7],
    ][segment];
    positions[i * 3] = points[0] + (points[2] - points[0]) * t + (random() - 0.5) * 1.6;
    positions[i * 3 + 1] = points[1] + (points[3] - points[1]) * t + (random() - 0.5) * 1.6;
    positions[i * 3 + 2] = (random() - 0.5) * 3.2;
  }
  return positions;
};

const decodePointCloud = (buffer: ArrayBuffer, count: number, offset: number[], scale: number[], multiplier: number) => {
  const values = new Uint16Array(buffer);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (offset[0] + (values[i * 3] / 65535) * scale[0]) * multiplier;
    positions[i * 3 + 1] = (offset[1] + (values[i * 3 + 1] / 65535) * scale[1]) * multiplier;
    positions[i * 3 + 2] = (offset[2] + (values[i * 3 + 2] / 65535) * scale[2]) * multiplier;
  }
  return positions;
};

const ParticleForm = ({ positions, opacity, scale = 1, rotation = 0 }: { positions: Float32Array; opacity: number; scale?: number; rotation?: number }) => {
  const ref = useRef<Points>(null);
  const materialRef = useRef<PointsMaterial>(null);
  const geometry = useMemo(() => {
    const value = new THREE.BufferGeometry();
    value.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return value;
  }, [positions]);

  useFrame(({ clock, pointer }) => {
    const mesh = ref.current;
    const material = materialRef.current;
    if (!mesh || !material) return;
    const time = clock.elapsedTime;
    mesh.rotation.y = rotation + Math.sin(time * 0.22) * 0.08 + pointer.x * 0.025;
    mesh.rotation.x = pointer.y * -0.018;
    mesh.position.y = Math.sin(time * 0.35) * 0.22;
    material.opacity += (opacity - material.opacity) * 0.08;
  });

  return (
    <points ref={ref} geometry={geometry} scale={scale}>
      <pointsMaterial ref={materialRef} color={PEARL} size={0.105} sizeAttenuation transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const Lattice = ({ progress }: { progress: MotionValue<number> }) => {
  const ref = useRef<LineSegments>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  const geometry = useMemo(() => new THREE.WireframeGeometry(new THREE.CylinderGeometry(9.2, 9.2, 22, 36, 12, true)), []);
  useFrame(({ clock }) => {
    const p = progress.get();
    if (!ref.current || !materialRef.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.045;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.15) * 0.025;
    materialRef.current.opacity = Math.max(0.06, 0.28 - Math.abs(p - 0.5) * 0.18);
  });
  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial ref={materialRef} color={GOLD} transparent opacity={0.2} depthWrite={false} />
    </lineSegments>
  );
};

const Scene = ({ progress, reducedMotion }: SceneProps) => {
  const { camera } = useThree();
  const [hand, setHand] = useState<Float32Array | null>(null);
  const [tree, setTree] = useState<Float32Array | null>(null);
  const mPoints = useMemo(() => createMPoints(12000), []);
  const dust = useMemo(() => {
    const random = seeded(77);
    const values = new Float32Array(1800 * 3);
    for (let i = 0; i < 1800; i += 1) {
      values[i * 3] = (random() - 0.5) * 56;
      values[i * 3 + 1] = (random() - 0.5) * 32;
      values[i * 3 + 2] = (random() - 0.5) * 42;
    }
    return values;
  }, []);
  const mMaterial = useRef<PointsMaterial>(null);
  const handMaterial = useRef<PointsMaterial>(null);
  const treeMaterial = useRef<PointsMaterial>(null);
  const networkMaterial = useRef<PointsMaterial>(null);

  useEffect(() => {
    let active = true;
    Promise.all([
      fetch(handAsset.url).then((response) => response.arrayBuffer()),
      fetch(treeAsset.url).then((response) => response.arrayBuffer()),
    ]).then(([handBuffer, treeBuffer]) => {
      if (!active) return;
      setHand(decodePointCloud(handBuffer, 4173, [-0.5973206758, -0.9999998808, -0.6382458806], [1.1946413517, 1.9999998808, 1.2764917612], 7));
      setTree(decodePointCloud(treeBuffer, 50000, [-0.8996697664, -1.0000001192, -0.5329897404], [1.7993395329, 2, 1.0659794807], 7.2));
    }).catch(() => undefined);
    return () => { active = false; };
  }, []);

  useFrame(({ clock, pointer }) => {
    const p = reducedMotion ? 0.04 : progress.get();
    const focusZ = THREE.MathUtils.lerp(0, -44, p);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.2, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2 + Math.sin(clock.elapsedTime * 0.12) * 0.45, 0.035);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 33 + focusZ * 0.12, 0.035);
    camera.lookAt(0, 1, focusZ);

    const values: Array<[React.RefObject<PointsMaterial>, number]> = [
      [mMaterial, p < 0.22 ? 1 - p / 0.22 : 0],
      [handMaterial, p > 0.15 && p < 0.48 ? Math.min(1, (p - 0.15) / 0.08, (0.48 - p) / 0.08) : 0],
      [networkMaterial, p > 0.38 && p < 0.8 ? Math.min(1, (p - 0.38) / 0.08, (0.8 - p) / 0.1) : 0],
      [treeMaterial, p > 0.72 ? Math.min(1, (p - 0.72) / 0.12) : 0],
    ];
    values.forEach(([ref, target]) => {
      if (ref.current) ref.current.opacity += (target - ref.current.opacity) * 0.08;
    });
  });

  const handGeometry = useMemo(() => {
    if (!hand) return null;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(hand, 3));
    return geometry;
  }, [hand]);
  const treeGeometry = useMemo(() => {
    if (!tree) return null;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(tree, 3));
    return geometry;
  }, [tree]);
  const dustGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(dust, 3));
    return geometry;
  }, [dust]);

  return (
    <>
      <fog attach="fog" args={["#07101f", 24, 90]} />
      <color attach="background" args={["#07101f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-12, 18, 20]} color={GOLD} intensity={2.4} />
      <group position={[0, 1, 0]}>
        <Lattice progress={progress} />
        <points>
          <bufferGeometry><bufferAttribute attach="attributes-position" array={mPoints} count={mPoints.length / 3} itemSize={3} /></bufferGeometry>
          <pointsMaterial ref={mMaterial} color={PEARL} size={0.12} transparent opacity={1} depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
      </group>
      {handGeometry && (
        <points geometry={handGeometry} position={[0, 0, -18]} rotation={[0, -Math.PI / 6, 0]} scale={1.3}>
          <pointsMaterial ref={handMaterial} color={PEARL} size={0.12} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
      )}
      <points geometry={dustGeometry} position={[0, 2, -34]} rotation={[0.3, 0.5, 0.15]}>
        <pointsMaterial ref={networkMaterial} color={GOLD} size={0.09} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      {treeGeometry && (
        <points geometry={treeGeometry} position={[0, -1, -47]} scale={1.45}>
          <pointsMaterial ref={treeMaterial} color={PEARL} size={0.095} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
      )}
      <ParticleForm positions={dust} opacity={0.24} scale={1.2} rotation={0.2} />
    </>
  );
};

const AboutImmersiveScene = ({ progress, reducedMotion }: SceneProps) => (
  <Canvas
    dpr={[0.75, 1.35]}
    camera={{ fov: 36, position: [0, 2, 33], near: 0.1, far: 120 }}
    gl={{ antialias: false, powerPreference: "high-performance" }}
    aria-hidden="true"
  >
    <Scene progress={progress} reducedMotion={reducedMotion} />
  </Canvas>
);

export default AboutImmersiveScene;