import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroAsean from "@/assets/hero-bg-asean.webp";
import heroSecondary from "@/assets/hero-bg.webp";
import heroVideoAsset from "@/assets/msi-amd-video.mp4.asset.json";
import { useTranslation } from "react-i18next";

const HERO_VIDEO_SRC = heroVideoAsset.url;
const PHOTO_DURATION = 4000; // first photo shown for 4s before video
const PHOTO2_DURATION = 7000; // secondary photo dwell after video
// Tiny inline LQIP — instant first paint while the LCP webp decodes
const HERO_LQIP =
  "data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAADwBACdASogABIAPu1mqE2ppaOiMAgBMB2JYwCsM4DOACaG/httsodjQrvfYHcSzCgA/u+9TZJYwgdYAmeDE716XPvXfiQ6hdGzAhgJPAvxBeJmVvEWR1gFbysxYE3ivD24Nx5w32ldRyqnltSQKKDdIB2S3EixUffJtbH9oPwGL8NFqJOEqqUuiMyNtwiIurlhV/535rco+Y9qlN3xaj4KSLdHKjHPdTbo1QAA";

type Phase = "photo1" | "video" | "photo2";

const HeroSection = () => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("photo1");
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pointerStartX = useRef<number | null>(null);

  const PHASE_ORDER: Phase[] = ["photo1", "video", "photo2"];
  const goToPhase = (dir: 1 | -1) => {
    setPhase((current) => {
      const i = PHASE_ORDER.indexOf(current);
      const next = (i + dir + PHASE_ORDER.length) % PHASE_ORDER.length;
      return PHASE_ORDER[next];
    });
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

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    if (muted) {
      v.muted = false;
      v.volume = 1;
      void v.play();
      setMuted(false);
    } else {
      v.muted = true;
      setMuted(true);
    }
  };

  // photo1 → video (after dwell); photo2 → photo1 (after dwell)
  useEffect(() => {
    if (phase === "photo1") {
      const id = setTimeout(() => setPhase("video"), PHOTO_DURATION);
      return () => clearTimeout(id);
    }
    if (phase === "photo2") {
      const id = setTimeout(() => setPhase("photo1"), PHOTO_DURATION);
      return () => clearTimeout(id);
    }
  }, [phase]);

  // Autoplay muted by default
  useEffect(() => {
    if (phase !== "video") return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
    void v.play();
  }, [phase]);

  const heroContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="font-heading text-4xl font-bold leading-none text-foreground md:text-5xl lg:text-6xl">
        {t("hero.title")}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground md:text-lg lg:text-xl">
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

          {phase === "video" && (
            <motion.div
              key="video"
              className="absolute inset-0 h-full w-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <video
                ref={videoRef}
                src={HERO_VIDEO_SRC}
                autoPlay
                playsInline
                onEnded={() => setPhase("photo2")}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </motion.div>
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

        {phase === "video" && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 md:right-6 md:top-6"
          >
            {muted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            )}
          </button>
        )}

        {/* Desktop overlay — text on media */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent z-10" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[1140px] px-6 pb-6">
          <div className="inline-flex items-center gap-6 rounded-sm border border-border/60 bg-background/85 px-6 py-4 shadow-xl backdrop-blur-sm">
            {heroContent}
          </div>
        </div>
      </div>

      {/* Mobile — text below media */}
      <div className="md:hidden bg-background px-6 py-5">
        {heroContent}
      </div>
    </section>
  );
};

export default HeroSection;
