import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ImageSlideshow from "@/components/ImageSlideshow";
import vibeCodingImg from "@/assets/programmes-vibecoding.jpg";
import vibeCodingImg2 from "@/assets/programmes-vibecoding-2.jpg";
import vibeCodingImg3 from "@/assets/programmes-vibecoding-3.jpg";
import agenticImg from "@/assets/programmes-agentic.jpg";
import agenticImg2 from "@/assets/programmes-agentic-2.jpg";
import agenticImg3 from "@/assets/programmes-agentic-3.jpg";
import aiAutomationImg from "@/assets/programmes-aiautomation.jpg";
import aiAutomationImg2 from "@/assets/programmes-aiautomation-2.jpg";
import aiAutomationImg3 from "@/assets/programmes-aiautomation-3.jpg";
import datasciImg from "@/assets/programmes-datascience.jpg";
import datasciImg2 from "@/assets/programmes-datascience-2.jpg";
import datasciImg3 from "@/assets/programmes-datascience-3.jpg";
import fintechImg from "@/assets/programmes-fintech.jpg";
import fintechImg2 from "@/assets/programmes-fintech-2.jpg";
import fintechImg3 from "@/assets/programmes-fintech-3.jpg";
import cyberDefenceImg from "@/assets/programmes-cyberdefence.jpg";
import cyberDefenceImg2 from "@/assets/programmes-cyberdefence-2.jpg";
import cyberDefenceImg3 from "@/assets/programmes-cyberdefence-3.jpg";
import aiLeadershipImg from "@/assets/programmes-aileadership.jpg";
import aiLeadershipImg2 from "@/assets/programmes-aileadership-2.jpg";
import aiLeadershipImg3 from "@/assets/programmes-aileadership-3.jpg";
import cyberCertImg from "@/assets/programmes-cybercert.jpg";
import cyberCertImg2 from "@/assets/programmes-cybercert-2.jpg";
import cyberCertImg3 from "@/assets/programmes-cybercert-3.jpg";
import aiStackImg from "@/assets/programmes-aistack.jpg";
import cloudDevOpsImg from "@/assets/programmes-clouddevops.jpg";
import aiEducationImg from "@/assets/programmes-aieducation.jpg";
import aiEducationImg2 from "@/assets/programmes-aieducation-2.jpg";
import aiEducationImg3 from "@/assets/programmes-aieducation-3.jpg";

const ProgramsSection = () => {
  const { t } = useTranslation();
  const ct = (key: string) => t(`courses.${key}.title`);

  const programCategories = [
    {
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      images: [fintechImg, fintechImg2, fintechImg3],
      courses: [
        { name: ct("aiLiteracyFinance"), slug: "ai-literacy-for-finance-professionals" },
        { name: ct("aiFluencyFinance"), slug: "ai-fluency-for-finance-professionals" },
        { name: ct("aiStrategyGovernance"), slug: "ai-strategy-governance-ethical-leadership" },
        { name: ct("algoTradingL1"), slug: "algorithmic-trading-level-1" },
        { name: ct("algoTradingL2"), slug: "algorithmic-trading-level-2" },
        { name: "The AI-Powered Investor Series", slug: "#", comingSoon: true },
      ],
    },
    {
      title: t("programmes.aiEduTitle"),
      description: t("programmes.aiEduDesc"),
      images: [aiEducationImg, aiEducationImg2, aiEducationImg3],
      courses: [
        { name: ct("aiTrainingDesign"), slug: "ai-training-design-curriculum" },
        { name: ct("buildAiTutors"), slug: "build-ai-tutors-adaptive-learning" },
      ],
    },
    {
      title: t("programmes.aiLeadTitle"),
      description: t("programmes.aiLeadDesc"),
      images: [aiLeadershipImg, aiLeadershipImg2, aiLeadershipImg3],
      courses: [
        { name: ct("aiStrategyLeaders"), slug: "ai-strategy-roadmap-leaders" },
        { name: ct("aiAccountability"), slug: "ai-accountability-when-ai-decides" },
        { name: ct("governingAiAgents"), slug: "governing-ai-agents-trust-boundaries" },
        { name: ct("aiWargaming"), slug: "ai-wargaming-test-decisions" },
      ],
    },
    {
      title: t("programmes.agenticEngTitle"),
      description: t("programmes.agenticEngDesc"),
      images: [agenticImg, agenticImg2, agenticImg3],
      courses: [
        { name: ct("agenticFoundations"), slug: "agentic-ai-foundations" },
        { name: ct("agenticUseCase"), slug: "agentic-ai-use-case" },
        { name: ct("agenticDeploy"), slug: "agentic-ai-deploy-secure-systems" },
        { name: ct("secureAgenticInfra"), slug: "secure-agentic-ai-infrastructure" },
      ],
    },
    {
      title: t("programmes.aiAutoTitle"),
      description: t("programmes.aiAutoDesc"),
      images: [aiAutomationImg, aiAutomationImg2, aiAutomationImg3],
      courses: [
        { name: ct("riseAiAgents"), slug: "rise-of-ai-agents-2026" },
        { name: ct("buildAiNoCode"), slug: "build-ai-workflows-no-code" },
        { name: ct("designAiPlainLang"), slug: "design-ai-automations-plain-language" },
        { name: ct("buildAiAssistant"), slug: "build-your-own-ai-assistant" },
      ],
    },
    {
      title: t("programmes.vibeDevTitle"),
      description: t("programmes.vibeDevDesc"),
      images: [vibeCodingImg, vibeCodingImg2, vibeCodingImg3],
      courses: [
        { name: ct("vibeCodingDigitalBuilders"), slug: "vibe-coding-for-digital-builders" },
        { name: ct("buildOpTools"), slug: "build-operational-tools-ai-coding-agents" },
        { name: ct("gptKnowledgeBase"), slug: "gpt-your-organisation-knowledge-base" },
      ],
    },
    {
      title: t("programmes.dataTitle"),
      description: t("programmes.dataDesc"),
      images: [datasciImg, datasciImg2, datasciImg3],
      courses: [
        { name: ct("pythonDataAnalytics"), slug: "python-programming-for-data-analytics" },
        { name: ct("certifiedDataAnalyst"), slug: "certified-data-analyst" },
        { name: ct("certifiedDataScientist"), slug: "certified-data-scientist" },
      ],
    },
    {
      title: t("programmes.mccFoundTitle"),
      description: t("programmes.mccFoundDesc"),
      images: [cyberCertImg, cyberCertImg2, cyberCertImg3],
      courses: [
        { name: ct("cyberRolesThreats"), slug: "cybersecurity-roles-threats-pathways" },
        { name: ct("mccFoundation"), slug: "mcc-plus-cyber-defence-foundation" },
        { name: ct("mccSecurityOps"), slug: "mcc-plus-security-operations" },
        { name: ct("mccThreatHunting"), slug: "mcc-plus-threat-hunting-blue-team" },
      ],
    },
    {
      title: t("programmes.mccOffTitle"),
      description: t("programmes.mccOffDesc"),
      images: [cyberDefenceImg, cyberDefenceImg2, cyberDefenceImg3],
      courses: [
        { name: ct("mccOffensiveCyber"), slug: "mcc-plus-offensive-cyber-fundamentals" },
        { name: ct("mccDigitalForensics"), slug: "mcc-plus-digital-forensics" },
        { name: ct("mccAiSecurity"), slug: "mcc-plus-ai-security-autonomous-defence" },
      ],
    },
    {
      title: t("programmes.cloudAiStackTitle"),
      description: t("programmes.cloudAiStackDesc"),
      images: [cloudDevOpsImg, aiStackImg],
      courses: [
        { name: ct("awsCloudDevOps"), slug: "aws-cloud-solutions-architecture-devops" },
        { name: t("programmes.aiStack1DayCourse"), slug: "/ai-stack-masterclasses", isExternal: true },
      ],
    },
  ];


  return (
    <section id="courses" className="bg-background">
      <div className="relative h-[180px] md:h-[200px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            {t("programmes.title")}
          </h2>
          <p className="text-white/75 mt-2 text-base max-w-xl">
            {t("programmes.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-8 md:py-10">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
          {t("programmes.glance")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <ImageSlideshow
                images={cat.images}
                alt={cat.title}
                className="aspect-[4/3] overflow-hidden rounded-sm mb-5"
                imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                interval={10000}
                width={800}
                height={600}
              />
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                {cat.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {cat.description}
              </p>
              <ul className="space-y-2 border-t border-border pt-4">
                {cat.courses.map((course) => {
                  const isAbs = 'isExternal' in course && course.isExternal && /^https?:\/\//.test(course.slug);
                  const cls = "flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link";
                  return (
                    <li key={course.slug}>
                      {isAbs ? (
                        <a href={course.slug} target="_blank" rel="noopener noreferrer" className={cls}>
                          <span>{course.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          to={'isExternal' in course && course.isExternal ? course.slug : `/course/${course.slug}`}
                          className={cls}
                        >
                          <span>{course.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
