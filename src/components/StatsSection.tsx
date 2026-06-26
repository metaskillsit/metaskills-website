import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
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
    <section className="border-y border-border bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
