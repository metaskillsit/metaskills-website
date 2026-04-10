import { motion } from "framer-motion";
import ImageSlideshow from "@/components/ImageSlideshow";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import { useTranslation } from "react-i18next";

const heroImages = [heroBg, heroBg2, heroBg3, heroBg4];

const HeroSection = () => {
  const { t } = useTranslation();

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
      {/* Image area */}
      <div className="relative aspect-[16/9] md:aspect-[1920/900]">
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

        {/* Desktop overlay — text on image */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[1140px] px-6 pb-6">
          <div className="inline-flex items-center gap-6 rounded-sm border border-border/60 bg-background/85 px-6 py-4 shadow-xl backdrop-blur-sm">
            {heroContent}
          </div>
        </div>
      </div>

      {/* Mobile — text below image */}
      <div className="md:hidden bg-background px-6 py-5">
        {heroContent}
      </div>
    </section>
  );
};

export default HeroSection;
