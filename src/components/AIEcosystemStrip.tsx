import HeroConstellation from "@/components/HeroConstellation";

const AIEcosystemStrip = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[hsl(var(--hero-overlay))]"
      aria-label="AI ecosystem"
    >
      <div className="relative h-[160px] md:h-[220px]">
        <HeroConstellation />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))] via-transparent to-[hsl(var(--hero-overlay))]" />
      </div>
    </section>
  );
};

export default AIEcosystemStrip;
