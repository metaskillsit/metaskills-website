import { motion } from "framer-motion";
import ImageSlideshow from "@/components/ImageSlideshow";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroImages = [heroBg, heroBg2, heroBg3];

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <ImageSlideshow
        images={heroImages}
        alt="Professional AI training"
        className="absolute inset-0 w-full h-full"
        imgClassName="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={900}
        interval={5000}
        loading="eager"
        showDots={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.7)] via-[hsl(var(--hero-overlay)/0.4)] to-[hsl(var(--hero-overlay)/0.2)]" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight max-w-2xl">
            The AI Institute for Asia
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-xl font-body">
            Equipping professionals and organisations with Agentic AI, Algorithmic Trading, and Cybersecurity capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
