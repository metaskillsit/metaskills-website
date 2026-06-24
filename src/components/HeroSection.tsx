import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroAsean from "@/assets/hero-bg-asean.jpg";
import { useTranslation } from "react-i18next";

const YOUTUBE_ID = "jHTUoSXN5hA";
const INTERVAL = 7000;

const HeroSection = () => {
  const { t } = useTranslation();
  const [slide, setSlide] = useState<0 | 1>(0); // 0 = photo, 1 = video

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, INTERVAL);
    return () => clearInterval(id);
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
      {/* Media area */}
      <div className="relative aspect-[16/9] md:aspect-[1920/900]">
        <AnimatePresence mode="sync">
          {slide === 0 ? (
            <motion.img
              key="photo"
              src={heroAsean}
              alt="Professional AI training"
              width={1920}
              height={900}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ) : (
            <motion.div
              key="video"
              className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Scale wrapper hides YouTube UI bleed and fills the frame */}
              <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 md:h-[120%] md:w-[120%]">
                <iframe
                  title="Hero background video"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen={false}
                  frameBorder={0}
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
