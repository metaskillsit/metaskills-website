import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Brain, ShieldCheck, TrendingUp } from "lucide-react";

const MissionSection = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Brain,
      title: t("mission.pillar1Title"),
      description: t("mission.pillar1Desc"),
    },
    {
      icon: TrendingUp,
      title: t("mission.pillar2Title"),
      description: t("mission.pillar2Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("mission.pillar3Title"),
      description: t("mission.pillar3Desc"),
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-body">
            {t("mission.statement")}{" "}
            <mark className="bg-primary/30 text-foreground px-1 rounded-sm font-semibold">{t("mission.highlight1")}</mark>{" "}
            {t("mission.and")}{t("mission.and") ? " " : ""}
            <mark className="bg-primary/30 text-foreground px-1 rounded-sm font-semibold">{t("mission.highlight2")}</mark>{" "}
            {t("mission.tail")}
          </p>
        </motion.div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <motion.a
                key={pillar.title}
                href="#courses"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
