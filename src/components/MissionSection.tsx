import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="text-[11px] font-medium uppercase text-accent" style={{ letterSpacing: "0.28em" }}>
              The Institute
            </span>
          </div>
          {(() => {
            const full = `${t("mission.statement")} ${t("mission.highlight1")} ${t("mission.and") ? t("mission.and") + " " : ""}${t("mission.highlight2")} ${t("mission.tail")}`;
            const highlights = [
              "eight years of specialised training and consulting",
              "over 10,000 professionals trained",
              "tackles the AI challenges of tomorrow",
              "Drive frontier‑level digital transformation",
            ];
            const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
            const parts = full.split(pattern);
            return (
              <p className="text-[22px] md:text-[26px] lg:text-[28px] text-foreground leading-[1.55] font-light font-heading text-center">
                {parts.map((part, i) =>
                  highlights.includes(part) ? (
                    <span key={i} className="text-foreground font-medium border-b border-accent">{part}</span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            );
          })()}
        </motion.div>
      </div>

    </section>
  );
};

export default MissionSection;
