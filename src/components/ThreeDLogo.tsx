import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import modelAsset from "@/assets/metaskills-institute-cube.glb.asset.json";

const MODEL_URL = modelAsset.url;

function LogoModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);
  const model = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    const bounds = new THREE.Box3().setFromObject(clone);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const largestDimension = Math.max(size.x, size.y, size.z) || 1;

    clone.position.set(-center.x, -center.y, -center.z);
    clone.scale.setScalar(2.7 / largestDimension);
    return clone;
  }, [scene]);

  useFrame((_, rawDelta) => {
    const group = groupRef.current;
    if (!group || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    group.rotation.y += Math.min(rawDelta, 0.05) * 0.35;
  });

  return (
    <group ref={groupRef} rotation={[0.18, -0.55, -0.08]}>
      <primitive object={model} />
    </group>
  );
}

const ThreeDLogo = () => (
  <span
    className="relative block h-12 w-12 md:h-[58px] md:w-[58px]"
    role="img"
    aria-label="Metaskills Institute"
  >
    <span className="absolute inset-[18%] bg-accent/20" aria-hidden="true" />
    <Canvas
      orthographic
      camera={{ position: [0, 0, 5], zoom: 36 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={1.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-3, -1, 2]} intensity={0.8} />
      <Suspense fallback={null}>
        <LogoModel />
      </Suspense>
    </Canvas>
  </span>
);

useGLTF.preload(MODEL_URL);

export default ThreeDLogo;