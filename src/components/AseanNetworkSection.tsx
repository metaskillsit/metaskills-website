import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type City = { name: string; lat: number; lon: number; hub?: boolean };

const CITIES: City[] = [
  { name: "Singapore", lat: 1.35, lon: 103.82, hub: true },
  { name: "Kuala Lumpur", lat: 3.14, lon: 101.69 },
  { name: "Jakarta", lat: -6.21, lon: 106.85 },
  { name: "Bangkok", lat: 13.76, lon: 100.5 },
  { name: "Ho Chi Minh City", lat: 10.82, lon: 106.63 },
  { name: "Hanoi", lat: 21.03, lon: 105.85 },
  { name: "Manila", lat: 14.6, lon: 120.98 },
  { name: "Phnom Penh", lat: 11.56, lon: 104.92 },
  { name: "Yangon", lat: 16.87, lon: 96.2 },
  { name: "Bandar Seri Begawan", lat: 4.9, lon: 114.94 },
  { name: "Vientiane", lat: 17.97, lon: 102.6 },
];

const R = 1.6;

const toVec = (lat: number, lon: number, r = R) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
};

const arcPoints = (a: THREE.Vector3, b: THREE.Vector3) => {
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.setLength(R * (1 + 0.18 + a.distanceTo(b) * 0.06));
  return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(48);
};

const GOLD = "#ffb81c";

function Globe() {
  const group = useRef<THREE.Group>(null);
  const hub = useMemo(() => toVec(CITIES[0].lat, CITIES[0].lon), []);
  const markers = useMemo(() => CITIES.map((c) => ({ c, v: toVec(c.lat, c.lon, R * 1.005) })), []);
  const arcs = useMemo(
    () => CITIES.slice(1).map((c) => arcPoints(hub, toVec(c.lat, c.lon))),
    [hub]
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} rotation={[0.25, -1.9, 0.1]}>
      {/* glass core */}
      <Sphere args={[R, 64, 64]}>
        <meshPhysicalMaterial
          color="#0b1b33"
          transparent
          opacity={0.55}
          roughness={0.15}
          metalness={0.2}
          transmission={0.6}
          thickness={1.4}
          clearcoat={1}
        />
      </Sphere>

      {/* wireframe latitude/longitude shell */}
      <Sphere args={[R * 1.008, 36, 24]}>
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.14} />
      </Sphere>

      {/* outer glow shell */}
      <Sphere args={[R * 1.12, 48, 48]}>
        <meshBasicMaterial color={GOLD} transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>

      {arcs.map((pts, i) => (
        <group key={i}>
          <Line points={pts} color={GOLD} lineWidth={1.1} transparent opacity={0.55} />
          <Pulse points={pts} offset={i * 0.13} />
        </group>
      ))}

      {markers.map(({ c, v }) => (
        <group key={c.name} position={v}>
          <mesh>
            <sphereGeometry args={[c.hub ? 0.05 : 0.03, 16, 16]} />
            <meshBasicMaterial color={c.hub ? "#ffffff" : GOLD} />
          </mesh>
          <mesh>
            <sphereGeometry args={[c.hub ? 0.1 : 0.06, 16, 16]} />
            <meshBasicMaterial color={GOLD} transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Pulse({ points, offset }: { points: THREE.Vector3[]; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.getElapsedTime() * 0.25 + offset) % 1;
    const p = points[Math.floor(t * (points.length - 1))];
    ref.current.position.copy(p);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.032, 12, 12]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

const AseanNetworkSection = () => {
  const { t } = useTranslation();
  const [failed, setFailed] = useState(false);

  return (
    <section className="section-dark relative overflow-hidden bg-[hsl(215_60%_8%)]">
      <div className="max-w-[1140px] mx-auto px-6 py-14 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow text-accent">
            {t("asean.eyebrow", "Regional Reach")}
          </span>
          <h2 className="section-h2 text-white mt-2 text-[28px] sm:text-[34px] leading-[1.15]">
            {t("asean.title", "One institute, an ASEAN-wide network")}
          </h2>
          <p className="mt-3 md:mt-4 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[46ch]">
            {t(
              "asean.subtitle",
              "From our Singapore headquarters we deliver AI, cloud and cyber capability programmes to enterprises, government agencies and universities across Southeast Asia."
            )}
          </p>

          <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
            {[
              { k: "11", v: t("asean.stat1", "Capital hubs") },
              { k: "40+", v: t("asean.stat2", "Organisations served") },
              { k: "3", v: t("asean.stat3", "Delivery languages") },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-heading text-2xl sm:text-3xl text-accent">{s.k}</div>
                <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider mt-1 leading-tight">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
            {CITIES.map((c) => (
              <span
                key={c.name}
                className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border ${
                  c.hub
                    ? "border-accent/70 text-accent bg-accent/10"
                    : "border-white/15 text-white/60"
                }`}
              >
                {c.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[260px] sm:h-[400px] lg:h-[520px] -mt-2 lg:mt-0"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-accent/10" aria-hidden />

          {!failed && (
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              onCreated={({ gl }) => gl.setClearAlpha(0)}
              onError={() => setFailed(true)}
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[4, 3, 5]} intensity={1.4} color="#ffd98a" />
              <pointLight position={[-4, -2, -3]} intensity={2} color="#2a6bd6" />
              <Suspense fallback={null}>
                <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
                  <Globe />
                </Float>
              </Suspense>
            </Canvas>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AseanNetworkSection;
