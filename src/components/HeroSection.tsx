import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroAsean from "@/assets/hero-bg-asean.jpg";
import heroSecondary from "@/assets/hero-bg-3.jpg";
import { useTranslation } from "react-i18next";

const YOUTUBE_ID = "jHTUoSXN5hA";
const PHOTO_DURATION = 7000; // each photo shown for 7s

type Phase = "photo1" | "video" | "photo2";

const HeroSection = () => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("photo1");
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
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

  const sendCommand = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  };

  const toggleMute = () => {
    if (muted) {
      sendCommand("unMute");
      sendCommand("setVolume", [100]);
      sendCommand("playVideo");
      setMuted(false);
    } else {
      sendCommand("mute");
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

  // Listen for YouTube "ended" → switch to photo2
  useEffect(() => {
    if (phase !== "video") return;

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("youtube")) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "infoDelivery" && data?.info?.playerState === 0) {
          setPhase("photo2");
        }
      } catch {
        /* ignore */
      }
    };

    window.addEventListener("message", handleMessage);

    const send = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: YOUTUBE_ID }),
        "*"
      );
    };
    const t1 = setTimeout(send, 800);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(t1);
      // reset mute state when leaving video
      setMuted(true);
    };
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
      <div className="relative aspect-[16/9] md:aspect-[1920/900]">
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
              loading="lazy"
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
              className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 md:h-[120%] md:w-[120%]">
                <iframe
                  ref={iframeRef}
                  title="Hero background video"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen={false}
                  frameBorder={0}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
