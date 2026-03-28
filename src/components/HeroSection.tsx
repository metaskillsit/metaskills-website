import { motion } from "framer-motion";
import ImageSlideshow from "@/components/ImageSlideshow";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroImages = [heroBg, heroBg2, heroBg3];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[hsl(var(--hero-overlay))] aspect-[4/5] md:aspect-[1920/900]">
      <ImageSlideshow
        images={heroImages}
        alt="Professional AI training"
        className="absolute inset-0 h-full w-full"
        imgClassName="absolute inset-0 h-full w-full object-contain object-center"
        width={1920}
        height={900}
        interval={5000}
        loading="eager"
        showDots={true}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.88)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[1140px] px-6 pb-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl rounded-sm border border-border/60 bg-background/85 p-5 shadow-xl backdrop-blur-sm md:p-7"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
            Professional AI Education
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[0.95] text-foreground md:text-5xl lg:text-[3.35rem]">
            The AI Institute for Asia
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-lg">
            Equipping professionals and organisations with Agentic AI, Algorithmic Trading, and Cybersecurity capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
