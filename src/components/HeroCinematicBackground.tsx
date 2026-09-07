import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

const MIDNIGHT = "#040711";
const GOLD = new THREE.Color("#d5ad53");
const VIOLET = new THREE.Color("#8468c7");
const PEARL = new THREE.Color("#f3eee3");
const CYCLE_SECONDS = 24;

function seeded(index: number, offset: number) {
  const value = Math.sin(index * 127.1 + offset * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function smooth(value: number) {
  const clamped = THREE.MathUtils.clamp(value, 0, 1);
  return clamped * clamped * (3 - 2 * clamped);
}

function makeStarGeometry() {
  const shape = new THREE.Shape();
  const points = 10;
  for (let i = 0; i < points * 2; i += 1) {
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const radius = i % 2 === 0 ? 1 : 0.42;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.24,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  });
  geometry.center();
  return geometry;
}

function CinematicScene({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const starRef = useRef<THREE.Mesh>(null);
  const pointer = useRef(new THREE.Vector2());
  const particleCount = 1800;
  const starGeometry = useMemo(makeStarGeometry, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const core = new Float32Array(particleCount * 3);
    const cloud = new Float32Array(particleCount * 3);
    const galaxy = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      const a = seeded(i, 1);
      const b = seeded(i, 2);
      const c = seeded(i, 3);
      const theta = a * Math.PI * 2;
      const phi = Math.acos(2 * b - 1);
      const radius = Math.pow(c, 2.4) * 1.25;

      core[i3] = Math.sin(phi) * Math.cos(theta) * radius;
      core[i3 + 1] = Math.cos(phi) * radius * 0.7;
      core[i3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;

      const cloudAngle = theta + Math.sin(i * 0.17) * 1.4;
      const cloudRadius = 2.2 + seeded(i, 4) * 4.6;
      cloud[i3] = Math.cos(cloudAngle) * cloudRadius + Math.sin(i * 0.11) * 1.2;
      cloud[i3 + 1] = (b - 0.5) * 4.6 + Math.sin(cloudAngle * 3) * 0.8;
      cloud[i3 + 2] = Math.sin(cloudAngle) * cloudRadius * 0.55 + (c - 0.5) * 3;

      const arm = i % 4;
      const galRadius = 0.45 + Math.pow(a, 0.72) * 6.2;
      const galAngle = galRadius * 1.45 + arm * (Math.PI / 2) + (b - 0.5) * 0.55;
      galaxy[i3] = Math.cos(galAngle) * galRadius;
      galaxy[i3 + 1] = (c - 0.5) * (0.25 + galRadius * 0.11);
      galaxy[i3 + 2] = Math.sin(galAngle) * galRadius * 0.72;

      positions[i3] = core[i3];
      positions[i3 + 1] = core[i3 + 1];
      positions[i3 + 2] = core[i3 + 2];

      const color = i % 9 < 4 ? GOLD : i % 9 < 7 ? VIOLET : PEARL;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, core, cloud, galaxy, colors };
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointer.current.set(event.clientX / window.innerWidth - 0.5, event.clientY / window.innerHeight - 0.5);
    };
    if (!reducedMotion) window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reducedMotion]);

  useEffect(() => () => starGeometry.dispose(), [starGeometry]);

  useFrame(({ camera, clock }, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const time = reducedMotion ? CYCLE_SECONDS * 0.78 : clock.elapsedTime;
    const cycle = (time % CYCLE_SECONDS) / CYCLE_SECONDS;
    const phase = cycle * 3;
    const from = phase < 1 ? particles.core : phase < 2 ? particles.cloud : particles.galaxy;
    const to = phase < 1 ? particles.cloud : phase < 2 ? particles.galaxy : particles.core;
    const blend = smooth(phase % 1);
    const pulse = 1 + Math.sin(time * 1.45) * (phase < 1 ? 0.08 : 0.018);
    const positionAttribute = pointsRef.current?.geometry.getAttribute("position") as THREE.BufferAttribute | undefined;

    if (positionAttribute) {
      const values = positionAttribute.array as Float32Array;
      for (let i = 0; i < values.length; i += 3) {
        values[i] = THREE.MathUtils.lerp(from[i], to[i], blend) * pulse;
        values[i + 1] = THREE.MathUtils.lerp(from[i + 1], to[i + 1], blend) * pulse;
        values[i + 2] = THREE.MathUtils.lerp(from[i + 2], to[i + 2], blend) * pulse;
      }
      positionAttribute.needsUpdate = true;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += dt * (phase >= 2 ? 0.09 : 0.025);
      pointsRef.current.rotation.z = Math.sin(time * 0.12) * 0.06;
    }
    if (starRef.current) {
      starRef.current.rotation.x += dt * 0.09;
      starRef.current.rotation.y += dt * 0.14;
      starRef.current.position.y = 0.15 + Math.sin(time * 0.38) * 0.16;
    }

    const targetX = reducedMotion ? 0 : pointer.current.x * 0.5 + Math.sin(time * 0.08) * 0.18;
    const targetY = reducedMotion ? 0 : -pointer.current.y * 0.3 + Math.cos(time * 0.1) * 0.1;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.2, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.2, dt);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 8.1 + Math.sin(time * 0.16) * 0.28, 1.6, dt);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={[MIDNIGHT]} />
      <fogExp2 attach="fog" args={[MIDNIGHT, 0.035]} />
      <ambientLight intensity={0.45} color="#d8d0eb" />
      <pointLight position={[-4, 2, 3]} intensity={14} color="#8468c7" distance={12} />
      <pointLight position={[4, -1, 4]} intensity={11} color="#d5ad53" distance={12} />

      <points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.038}
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
          toneMapped={false}
        />
      </points>

      <mesh ref={starRef} geometry={starGeometry} scale={0.72} rotation={[0.15, -0.25, 0]}>
        <meshPhysicalMaterial
          color="#dddce0"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={2.1}
        />
      </mesh>

      <Environment resolution={128}>
        <Lightformer intensity={3} color="#f3eee3" position={[0, 4, 4]} scale={[8, 2, 1]} />
        <Lightformer intensity={2} color="#d5ad53" position={[5, 0, 1]} rotation-y={-Math.PI / 2} scale={[5, 1, 1]} />
        <Lightformer intensity={2} color="#8468c7" position={[-5, 0, 1]} rotation-y={Math.PI / 2} scale={[5, 1, 1]} />
      </Environment>

      {!reducedMotion && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={1.35} luminanceThreshold={0.35} luminanceSmoothing={0.7} mipmapBlur />
        </EffectComposer>
      )}
    </>
  );
}

export default function HeroCinematicBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      <div className="hero-cinematic-canvas">
        <Canvas
          camera={{ position: [0, 0, 8.1], fov: 52, near: 0.1, far: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        >
          <CinematicScene reducedMotion={reducedMotion} />
        </Canvas>
      </div>
      <div className="hero-cinematic-vignette" />
    </>
  );
}