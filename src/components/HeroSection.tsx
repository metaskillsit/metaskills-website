import { motion } from "framer-motion";
import ImageSlideshow from "@/components/ImageSlideshow";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import { useTranslation } from "react-i18next";

const heroImages = [heroBg, heroBg2, heroBg3];

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full overflow-hidden bg-[hsl(var(--hero-overlay))] aspect-[16/9] md:aspect-[1920/900]">
      <ImageSlideshow
        images={heroImages}
        alt="Professional AI training"
        className="absolute inset-0 h-full w-full"
        imgClassName="absolute inset-0 h-full w-full object-cover object-center"
        width={1920}
        height={900}
        interval={7000}
        loading="eager"
        showDots={true}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[1140px] px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-6 rounded-sm border border-border/60 bg-background/85 px-6 py-4 shadow-xl backdrop-blur-sm"
        >
          <div>
            <h1 className="font-heading text-2xl font-bold leading-none text-foreground md:text-3xl">
              {t("hero.title")}
            </h1>
            <p className="mt-1.5 text-xs text-muted-foreground md:text-sm">
              {t("hero.subtitle")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
