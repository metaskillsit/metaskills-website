import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PastClassesSection from "@/components/PastClassesSection";
import agenticImg from "@/assets/programmes-agentic.jpg";
import aiAutomationImg from "@/assets/programmes-aiautomation.jpg";
import datasciImg from "@/assets/programmes-datascience.jpg";
import fintechImg from "@/assets/programmes-fintech.jpg";
import cyberDefenceImg from "@/assets/programmes-cyberdefence.jpg";
import aiLeadershipImg from "@/assets/programmes-aileadership.jpg";
import cyberCertImg from "@/assets/programmes-cybercert.jpg";
import vibeCodingImg from "@/assets/programmes-vibecoding.jpg";

const ProgrammesPage = () => {
  const { t } = useTranslation();

  const ct = (key: string) => t(`courses.${key}.title`);

  const programCategories = [
    {
      title: t("programmes.vibeCodingTitle"),
      description: t("programmes.vibeCodingDesc"),
      image: vibeCodingImg,
      courses: [
        { name: ct("vibeCodingDigitalBuilders"), slug: "vibe-coding-for-digital-builders" },
      ],
    },
    {
      title: t("programmes.aiLeadTitle"),
      description: t("programmes.aiLeadDesc"),
      image: aiLeadershipImg,
      courses: [
        { name: ct("aiStrategyLeaders"), slug: "ai-strategy-roadmap-leaders" },
        { name: ct("aiAccountability"), slug: "ai-accountability-when-ai-decides" },
        { name: ct("governingAiAgents"), slug: "governing-ai-agents-trust-boundaries" },
        { name: ct("aiWargaming"), slug: "ai-wargaming-test-decisions" },
      ],
    },
    {
      title: t("programmes.agenticTitle"),
      description: t("programmes.agenticDesc"),
      image: agenticImg,
      courses: [
        { name: ct("agenticFoundations"), slug: "agentic-ai-foundations" },
        { name: ct("agenticUseCase"), slug: "agentic-ai-use-case" },
        { name: ct("agenticDeploy"), slug: "agentic-ai-deploy-secure-systems" },
      ],
    },
    {
      title: t("programmes.aiAutoTitle"),
      description: t("programmes.aiAutoDesc"),
      image: aiAutomationImg,
      courses: [
        { name: ct("riseAiAgents"), slug: "rise-of-ai-agents-2026" },
        { name: ct("buildAiNoCode"), slug: "build-ai-workflows-no-code" },
        { name: ct("designAiPlainLang"), slug: "design-ai-automations-plain-language" },
        { name: ct("buildOpTools"), slug: "build-operational-tools-ai-coding-agents" },
        { name: ct("buildAiAssistant"), slug: "build-your-own-ai-assistant" },
        { name: ct("gptKnowledgeBase"), slug: "gpt-your-organisation-knowledge-base" },
        { name: ct("secureAgenticInfra"), slug: "secure-agentic-ai-infrastructure" },
        { name: ct("aiTrainingDesign"), slug: "ai-training-design-curriculum" },
        { name: ct("buildAiTutors"), slug: "build-ai-tutors-adaptive-learning" },
      ],
    },
    {
      title: t("programmes.dataTitle"),
      description: t("programmes.dataDesc"),
      image: datasciImg,
      courses: [
        { name: ct("pythonDataAnalytics"), slug: "python-programming-for-data-analytics" },
        { name: ct("certifiedDataAnalyst"), slug: "certified-data-analyst" },
        { name: ct("certifiedDataScientist"), slug: "certified-data-scientist" },
      ],
    },
    {
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      image: fintechImg,
      courses: [
        { name: ct("algoTradingL1"), slug: "algorithmic-trading-level-1" },
        { name: ct("algoTradingL2"), slug: "algorithmic-trading-level-2" },
      ],
    },
    {
      title: t("programmes.cyberTitle"),
      description: t("programmes.cyberDesc"),
      image: cyberDefenceImg,
      courses: [
        { name: ct("cyberRolesThreats"), slug: "cybersecurity-roles-threats-pathways" },
      ],
    },
    {
      title: t("programmes.mccTitle"),
      description: t("programmes.mccDesc"),
      image: cyberCertImg,
      courses: [
        { name: ct("mccFoundation"), slug: "mcc-plus-cyber-defence-foundation" },
        { name: ct("mccSecurityOps"), slug: "mcc-plus-security-operations" },
        { name: ct("mccThreatHunting"), slug: "mcc-plus-threat-hunting-blue-team" },
        { name: ct("mccOffensiveCyber"), slug: "mcc-plus-offensive-cyber-fundamentals" },
        { name: ct("mccDigitalForensics"), slug: "mcc-plus-digital-forensics" },
        { name: ct("mccAiSecurity"), slug: "mcc-plus-ai-security-autonomous-defence" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <section className="relative section-dark py-16 md:py-20 overflow-hidden">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("programmes.title")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              {t("programmes.subtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
            {t("programmes.glance")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {programCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-2 border-t border-border pt-4">
                  {cat.courses.map((course) => (
                    <li key={course.slug}>
                      <Link
                        to={`/course/${course.slug}`}
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                      >
                        <span>{course.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <PastClassesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ProgrammesPage;
