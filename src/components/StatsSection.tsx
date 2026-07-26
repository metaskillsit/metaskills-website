import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroConstellation from "@/components/HeroConstellation";


const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutExpo — fast start, premium settle
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setCount(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-none">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 9116, suffix: "", label: t("stats.profTrained") + " " + t("stats.tillDate") },
    { value: 50, suffix: "+", label: t("stats.yearsExp") },
    { value: 100, suffix: "+", label: t("stats.orgsPartnered") },
    { value: 30, suffix: "+", label: t("stats.progsOffered") },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-muted">
      {/* AI constellation — low opacity watermark behind the stats */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-35" aria-hidden="true">
        <HeroConstellation variant="muted" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-muted/70 via-muted/30 to-muted/70" aria-hidden="true" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-8 h-px bg-accent mx-auto mb-4" />
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 font-body text-[11px] font-medium text-muted-foreground uppercase tracking-[0.28em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default StatsSection;
