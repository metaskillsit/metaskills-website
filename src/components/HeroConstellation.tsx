import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#ffb81c";

const LIGHT_NODE = "#f0e6cf";
const DARK_NODE = "#123055";

type NodeDef = {
  kind: "chip" | "shield" | "cloud" | "core";
  pos: [number, number, number];
  scale: number;
};

const NODES: NodeDef[] = [
  { kind: "core", pos: [0, 0, 0], scale: 1 },
  { kind: "chip", pos: [2.6, 0.9, -0.6], scale: 0.9 },
  { kind: "shield", pos: [-2.8, -0.5, 0.4], scale: 0.85 },
  { kind: "cloud", pos: [1.6, -1.4, 0.8], scale: 0.8 },
  { kind: "chip", pos: [-1.8, 1.5, -1.2], scale: 0.6 },
  { kind: "shield", pos: [3.4, -1.2, -1.4], scale: 0.55 },
  { kind: "cloud", pos: [-3.6, 1.2, -1.6], scale: 0.6 },
];

function Geometry({ kind }: { kind: NodeDef["kind"] }) {
  switch (kind) {
    case "chip":
      return <boxGeometry args={[0.62, 0.62, 0.1]} />;
    case "shield":
      return <octahedronGeometry args={[0.42, 0]} />;
    case "cloud":
      return <icosahedronGeometry args={[0.4, 0]} />;
    default:
      return <torusKnotGeometry args={[0.34, 0.1, 120, 16]} />;
  }
}

function Constellation({ variant = "dark" }: { variant?: "dark" | "muted" }) {
  const group = useRef<THREE.Group>(null);
  const isDark = variant === "dark";

  const links = useMemo(() => {
    const origin = new THREE.Vector3(...NODES[0].pos);
    return NODES.slice(1).map((n) => {
      const target = new THREE.Vector3(...n.pos);
      const geo = new THREE.BufferGeometry().setFromPoints([origin, target]);
      return geo;
    });
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06;
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    group.current.position.z = -scroll * 0.0025;
    group.current.rotation.x = 0.08 + Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
  });

  return (
    <group ref={group}>
      {links.map((geo, i) => (
        <primitive
          key={i}
          object={new THREE.Line(
            geo,
            new THREE.LineBasicMaterial({
              color: GOLD,
              transparent: true,
              opacity: isDark ? 0.22 : 0.45,
            })
          )}
        />
      ))}

      {NODES.map((n, i) => (
        <Float key={i} speed={1 + i * 0.12} rotationIntensity={0.5} floatIntensity={0.7}>
          <group position={n.pos} scale={n.scale}>
            <mesh>
              <Geometry kind={n.kind} />
              <meshPhysicalMaterial
                color={n.kind === "core" ? GOLD : isDark ? DARK_NODE : LIGHT_NODE}
                transparent
                opacity={isDark ? 0.55 : 0.75}
                roughness={0.12}
                metalness={0.35}
                transmission={0.7}
                thickness={1.1}
                clearcoat={1}
                emissive={n.kind === "core" ? GOLD : isDark ? DARK_NODE : GOLD}
                emissiveIntensity={isDark ? 0.1 : 0.35}
              />
            </mesh>
            <mesh scale={1.35}>
              <Geometry kind={n.kind} />
              <meshBasicMaterial
                color={GOLD}
                transparent
                opacity={isDark ? 0.06 : 0.12}
                side={THREE.BackSide}
              />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

const HeroConstellation = ({ variant = "dark" }: { variant?: "dark" | "muted" }) => (
  <div
    className={`pointer-events-none absolute inset-0 z-[5] ${variant === "dark" ? "opacity-70" : "opacity-100"}`}
    aria-hidden="true"
  >
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
    >
      <ambientLight intensity={isDark ? 0.7 : 1.2} />
      <directionalLight position={[4, 3, 5]} intensity={isDark ? 1.2 : 1.5} color="#ffd98a" />
      <pointLight position={[-5, -2, -3]} intensity={isDark ? 2.2 : 1.0} color="#2a6bd6" />
      <Suspense fallback={null}>
        <Constellation variant={variant} />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroConstellation;

