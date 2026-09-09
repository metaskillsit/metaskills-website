import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroAsean from "@/assets/hero-bg-asean.webp";
import heroSecondary from "@/assets/hero-bg.webp";
import { useTranslation } from "react-i18next";
import CurrentTrainingTicker from "./CurrentTrainingTicker";

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

  const goToPhase = () => {
    setPhase((current) => (current === "photo1" ? "photo2" : "photo1"));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(dx) > 40) goToPhase();
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

  return (
    <section className="hero-premium-section relative isolate w-full overflow-hidden bg-[hsl(var(--hero-overlay))]">
      {/* Background foundation — always-mounted base photo prevents flash */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_LQIP})` }}
      >
        <img
          src={heroAsean}
          alt="Singapore skyline"
          width={1920}
          height={900}
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority is a valid attribute
          fetchpriority="high"
          className="hero-premium-photo hero-premium-photo-primary absolute inset-0 h-full w-full object-cover object-center"
        />
        <motion.img
          key="photo2"
          src={heroSecondary}
          alt="AI training in action"
          width={1920}
          height={900}
          loading="eager"
          decoding="async"
          className="hero-premium-photo hero-premium-photo-secondary absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "photo2" ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Layered overlays */}
      <div className="hero-premium-overlay absolute inset-0 z-10 pointer-events-none" />
      <div className="hero-premium-spotlight absolute inset-0 z-10 pointer-events-none" />
      <div className="hero-premium-grid absolute inset-0 z-10 pointer-events-none" />

      {/* Top scrim for navbar legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 z-20 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.72)] via-[hsl(var(--hero-overlay)/0.28)] to-transparent" />

      {/* Invisible swipe/drag layer */}
      <div
        className="absolute inset-0 z-30 cursor-grab touch-pan-y active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStartX.current = null; }}
        aria-hidden="true"
      />

      {/* Content zone */}
      <div className="relative z-40 flex min-h-[calc(100svh-90px)] flex-col justify-end px-6 pb-8 md:min-h-[calc(100svh-90px)] md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            {/* Main content panel */}
            <motion.div
              className="hero-premium-panel lg:col-span-8 xl:col-span-7"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-premium-panel-inner">
                {/* Eyebrow */}
                <div className="hero-premium-eyebrow">
                  <span className="hero-premium-status" aria-hidden="true" />
                  <span>{t("hero.eyebrow", "Professional AI training")}</span>
                </div>

                {/* Brand label */}
                <div className="hero-premium-brand">
                  {t("hero.brandLabel", "METASKILLS INSTITUTE")}
                </div>

                {/* Headline */}
                <h1 className="hero-premium-title">
                  {t("hero.title")}
                </h1>

                {/* Subheadline */}
                <p className="hero-premium-subtitle">
                  {t("hero.subtitle")}
                </p>

                {/* CTA group */}
                <div className="hero-premium-ctas">
                  <a
                    href="/programmes"
                    className="hero-premium-cta-primary"
                  >
                    <span>{t("hero.ctaPrimary", "Explore Programmes")}</span>
                    <span className="hero-premium-cta-shine" aria-hidden="true" />
                  </a>
                  <a
                    href="https://wa.me/6589866146?text=Hi%20I'm%20interested%20in%20your%20AI%20training%20and%20solutions.%20Can%20you%20advise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-premium-cta-secondary"
                  >
                    {t("hero.ctaSecondary", "Speak to Admissions")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Trust signals — desktop side stack */}
            <motion.div
              className="hidden lg:block lg:col-span-5 xl:col-span-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-premium-trust-stack">
                <div className="hero-premium-trust-item">
                  <span className="hero-premium-trust-value">10,000+</span>
                  <span className="hero-premium-trust-label">{t("hero.trustTrained", "Professionals trained")}</span>
                </div>
                <div className="hero-premium-trust-divider" aria-hidden="true" />
                <div className="hero-premium-trust-item">
                  <span className="hero-premium-trust-value">Enterprise</span>
                  <span className="hero-premium-trust-label">{t("hero.trustSector", "Government & MNC clients")}</span>
                </div>
                <div className="hero-premium-trust-divider" aria-hidden="true" />
                <div className="hero-premium-trust-item">
                  <span className="hero-premium-trust-value">ASEAN</span>
                  <span className="hero-premium-trust-label">{t("hero.trustReach", "Regional delivery")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Proof rail — anchored lower in hero */}
        <motion.div
          className="mx-auto mt-8 w-full max-w-[1320px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CurrentTrainingTicker />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
