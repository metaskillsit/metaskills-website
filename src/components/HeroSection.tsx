import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Start fading 1.2s before the end
      if (video.duration && video.currentTime >= video.duration - 1.2) {
        setFading(true);
      } else {
        setFading(false);
      }
    };

    const handleSeeked = () => {
      // After loop restarts, briefly keep fade then remove
      setTimeout(() => setFading(false), 100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeked", handleSeeked);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, []);

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
      {/* Video area */}
      <div className="relative aspect-[16/9] md:aspect-[1920/900]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 1.2s ease-in-out",
          }}
          src={heroVideo.url}
        />

        {/* Desktop overlay — text on image */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[1140px] px-6 pb-6">
          <div className="inline-flex items-center gap-6 rounded-sm border border-border/60 bg-background/85 px-6 py-4 shadow-xl backdrop-blur-sm">
            {heroContent}
          </div>
        </div>
      </div>

      {/* Mobile — text below video */}
      <div className="md:hidden bg-background px-6 py-5">
        {heroContent}
      </div>
    </section>
  );
};

export default HeroSection;
