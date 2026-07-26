import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroAsean from "@/assets/hero-bg-asean.webp";
import heroSecondary from "@/assets/hero-bg.webp";
import { useTranslation } from "react-i18next";

const PHOTO1_DURATION = 6000;
const PHOTO2_DURATION = 6000;
// Tiny inline LQIP — instant first paint while the LCP webp decodes
const HERO_LQIP =
  "data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAADwBACdASogABIAPu1mqE2ppaOiMAgBMB2JYwCsM4DOACaG/httsodjQrvfYHcSzCgA/u+9TZJYwgdYAmeDE716XPvXfiQ6hdGzAhgJPAvxBeJmVvEWR1gFbysxYE3ivD24Nx5w32ldRyqnltSQKKDdIB2S3EixUffJtbH9oPwGL8NFqJOEqqUuiMyNtwiIurlhV/535rco+Y9qlN3xaj4KSLdHKjHPdTbo1QAA";

type Phase = "photo1" | "photo2";

const HeroSection = () => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("photo1");
  const pointerStartX = useRef<number | null>(null);

  const goToPhase = (dir: 1 | -1) => {
    setPhase((current) => (current === "photo1" ? "photo2" : "photo1"));
    void dir;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(dx) > 40) goToPhase(dx < 0 ? 1 : -1);
  };

  // Warm the secondary image during idle so transitions are instant
  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.src = heroSecondary;
  }, []);

  // Cross-fade between the two hero photos
  useEffect(() => {
    const duration = phase === "photo1" ? PHOTO1_DURATION : PHOTO2_DURATION;
    const id = setTimeout(() => setPhase((p) => (p === "photo1" ? "photo2" : "photo1")), duration);
    return () => clearTimeout(id);
  }, [phase]);

  const heroContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-tech-eyebrow mb-4">
        <span className="hero-tech-status" aria-hidden="true" />
        <span className="font-body font-medium uppercase">
          Metaskills Institute
        </span>
      </div>
      <h1 className="hero-tech-title font-heading text-[42px] md:text-[54px] lg:text-[62px] font-semibold leading-[1.02] text-primary-foreground">
        {t("hero.title")}
      </h1>
      <p className="hero-tech-subtitle mt-5 max-w-[720px] font-body text-[16px] md:text-[20px] lg:text-[23px] leading-[1.55]">
        {t("hero.subtitle")}
      </p>
    </motion.div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[hsl(var(--hero-overlay))]">
      {/* Always-mounted base photo — prevents flash and guarantees instant LCP */}
      <div
        className="relative aspect-[16/9] md:aspect-[1920/900] bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_LQIP})` }}
      >
        <img
          src={heroAsean}
          alt="Professional AI training"
          width={1920}
          height={900}
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority is a valid attribute
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <AnimatePresence>
          {phase === "photo2" && (
            <motion.img
              key="photo2"
              src={heroSecondary}
              alt="AI training in action"
              width={1920}
              height={900}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Invisible swipe/drag layer — manual navigation without visible controls */}
        <div
          className="absolute inset-0 z-10 cursor-grab touch-pan-y active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { pointerStartX.current = null; }}
          aria-hidden="true"
        />

        {/* 3D AI stack constellation — sits behind hero text */}
        <HeroConstellation />

        {/* Top scrim — keeps transparent navbar legible over bright hero photos */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 z-10 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

        {/* Desktop overlay — text on media */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent z-10" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[1140px] px-6 pb-6">
          <div className="hero-tech-card inline-flex items-center gap-6 px-7 py-5">
            <span className="hero-tech-glow" aria-hidden="true" />
            <span className="hero-tech-grid" aria-hidden="true" />
            {heroContent}
          </div>
        </div>
      </div>

      {/* Mobile — text below media */}
      <div className="md:hidden bg-[hsl(var(--hero-overlay))] px-6 py-5">
        <div className="hero-tech-card relative overflow-hidden px-5 py-5">
          <span className="hero-tech-glow" aria-hidden="true" />
          <span className="hero-tech-grid" aria-hidden="true" />
          {heroContent}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
