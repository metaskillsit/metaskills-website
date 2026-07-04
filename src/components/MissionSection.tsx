import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Landmark, GraduationCap, Shield, Briefcase, HeartHandshake } from "lucide-react";

const MissionSection = () => {
  const { t } = useTranslation();

  const practices = [
    {
      icon: Landmark,
      name: "AI for Financial Services",
      tagline: "AI and financial services for modern markets.",
    },
    {
      icon: GraduationCap,
      name: "AI for Education & Training",
      tagline: "AI-powered curriculum, assessment and adaptive tutors.",
    },
    {
      icon: Shield,
      name: "AI for Government & Public Sector",
      tagline: "Responsible AI for public service and national readiness.",
    },
    {
      icon: Briefcase,
      name: "AI for SMEs & Enterprises",
      tagline: "From pilots to deployed AI in your business.",
    },
    {
      icon: HeartHandshake,
      name: "AI for Wellness & Social Good",
      tagline: "Human-centric AI for communities, care and inclusion.",
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
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
              "Financial Services",
              "Education & Training",
              "Government & Public Sector",
              "SMEs & Enterprises",
              "Wellness & Social Good",
              "tackles the AI challenges of tomorrow",
              "Drive frontier‑level digital transformation",
            ];
            const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
            const parts = full.split(pattern);
            return (
              <p className="text-[17px] md:text-[19px] lg:text-[20px] text-foreground leading-[1.5] font-light font-heading text-justify">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 md:mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {practices.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border/20 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.12)] flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
                </div>
                <h3 className="font-heading text-[15px] font-medium tracking-tight text-foreground leading-tight mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {p.tagline}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
