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
    <section aria-label="Our five practices" className="bg-background border-t border-border">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-4">
            {t("practices.eyebrow", "Our five practices")}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.1]">
            {t("practices.heading", "Where we work.")}{" "}
            <span className="italic text-muted-foreground font-light">
              {t("practices.headingItalic", "Five practices, one applied AI institute.")}
            </span>
          </h2>
        </div>

        <ul className="border-t border-border">
          {practices.map((p, i) => (
            <motion.li
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative border-b border-border"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent/0 group-hover:bg-accent/50 transition-colors duration-500" />
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 pl-3 md:pl-5">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-heading text-sm md:text-base text-muted-foreground/40 font-light tabular-nums tracking-widest">
                    {p.num}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-heading text-lg md:text-xl font-medium tracking-tight text-foreground leading-snug">
                    <span className="text-accent not-italic mr-2">{p.zh}</span>
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm md:text-[15px] text-foreground/70 font-light leading-snug">
                    {p.tagline}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-7 md:pl-4">
                  <p className="body-p text-sm md:text-[15px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FivePracticesSection;
