import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FivePracticesSection = () => {
  const { t } = useTranslation();

  const practices = [
    {
      num: "01",
      zh: "智融",
      name: t("practices.p1Name", "AI for Financial Services"),
      tagline: t("practices.p1Tagline", "AI and financial services for modern markets."),
      desc: t(
        "practices.p1Desc",
        "We help banks, insurers and investment firms build practical AI literacy, algorithmic trading capability, and risk-aware automation across their teams.",
      ),
    },
    {
      num: "02",
      zh: "慧学",
      name: t("practices.p2Name", "AI for Education & Training"),
      tagline: t("practices.p2Tagline", "AI-powered curriculum, assessment and adaptive tutors."),
      desc: t(
        "practices.p2Desc",
        "We work with educators, universities and training providers to use AI to improve curriculum development and delivery, design AI-enhanced curriculum, build AI tutors, and equip trainers for the next generation of learners.",
      ),
    },
    {
      num: "03",
      zh: "公智",
      name: t("practices.p3Name", "AI for Government & Public Sector"),
      tagline: t("practices.p3Tagline", "Responsible AI for public service and national readiness."),
      desc: t(
        "practices.p3Desc",
        "We support ministries, public agencies and defence organisations with AI literacy, governance frameworks, and agentic AI readiness programmes.",
      ),
    },
    {
      num: "04",
      zh: "企智",
      name: t("practices.p4Name", "AI for SMEs & Enterprises"),
      tagline: t("practices.p4Tagline", "From pilots to deployed AI in your business."),
      desc: t(
        "practices.p4Desc",
        "We help SMEs and enterprises identify high-impact use cases, build AI workflows and assistants, and guide teams from pilot projects to production deployment.",
      ),
    },
    {
      num: "05",
      zh: "善和",
      name: t("practices.p5Name", "AI for Wellness & Social Good"),
      tagline: t("practices.p5Tagline", "Human-centric AI for communities, care and inclusion."),
      desc: t(
        "practices.p5Desc",
        "We partner with social enterprises, NGOs and corporate CSR teams to apply AI in ways that support wellbeing, inclusion and community impact.",
      ),
    },
  ];

  return (
    <section aria-label="Our five practices" className="bg-background border-t border-border/30">
      <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 md:gap-20">
          {/* Left column — sticky editorial header */}
          <div className="md:sticky md:top-32 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8 bg-accent" />
              <span className="text-[11px] font-medium uppercase text-accent" style={{ letterSpacing: "0.28em" }}>
                {t("practices.eyebrow", "Our five practices")}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.02]">
              {t("practices.heading", "Where we work.")}
            </h2>
            <p className="mt-6 text-lg md:text-xl font-light text-muted-foreground italic leading-relaxed max-w-sm">
              {t("practices.headingItalic", "Five practices, one applied AI institute.")}
            </p>
          </div>

          {/* Right column — editorial list */}
          <ul className="border-t border-border/30">
            {practices.map((p, i) => (
              <motion.li
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group border-b border-border/30"
              >
                <div className="py-10 md:py-12">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-heading text-sm text-muted-foreground/50 tabular-nums" style={{ letterSpacing: "0.2em" }}>
                      {p.num}
                    </span>
                    <span className="text-[10px] uppercase text-muted-foreground/50" style={{ letterSpacing: "0.28em" }}>
                      {p.zh}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-[1.1] group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[15px] md:text-base text-foreground/70 font-light italic leading-relaxed">
                    {p.tagline}
                  </p>
                  <p className="mt-4 body-p text-[15px] leading-[1.7] max-w-[52ch]">
                    {p.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FivePracticesSection;
