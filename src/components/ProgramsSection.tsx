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
import aiStackImg from "@/assets/programmes-aistack.jpg.asset.json";
import cloudDevOpsImg from "@/assets/programmes-clouddevops.jpg";
import aiEducationImg from "@/assets/programmes-aieducation.jpg";
import certificationsImg from "@/assets/programmes-certifications.jpg";
import finopsImg from "@/assets/programmes-finops.jpg";
import aiEducationImg2 from "@/assets/programmes-aieducation-2.jpg";
import aiEducationImg3 from "@/assets/programmes-aieducation-3.jpg";

const ProgramsSection = () => {
  const { t } = useTranslation();
  const ct = (key: string) => t(`courses.${key}.title`);

  const programCategories = [
    {
      title: "AI Stack Masterclasses",
      description:
        "One-day, hands-on masterclasses across the modern AI stack — agentic AI, frontier LLMs, automation, AI coding, research and media tools.",
      images: [aiStackImg.url],
      courses: [
        { name: "Hermes/Openclaw: Agentic AI / Personal AI Agent", slug: "/ai-stack-masterclasses", isExternal: true, unclickable: true },
        { name: "Frontier LLM Masterclasses (ChatGPT, Claude, Gemini, Grok & more)", slug: "/ai-stack-masterclasses", isExternal: true, unclickable: true },
        { name: "AI Automation (n8n, Zapier, Make.com)", slug: "/ai-stack-masterclasses", isExternal: true, unclickable: true },
        { name: "AI Coding (Lovable, Cursor, GitHub Copilot)", slug: "/ai-stack-masterclasses", isExternal: true, unclickable: true },
        { name: "AI Research & Media (NotebookLM, Perplexity, Veo 3, CapCut)", slug: "/ai-stack-masterclasses", isExternal: true, unclickable: true },
      ],
    },
    {
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      images: [fintechImg, fintechImg2, fintechImg3],
      courses: [
        { name: ct("aiLiteracyFinance"), slug: "ai-literacy-for-finance-professionals" },
        { name: ct("aiFluencyFinance"), slug: "ai-fluency-for-finance-professionals" },
        { name: ct("aiStrategyGovernance"), slug: "ai-strategy-governance-ethical-leadership" },
        { name: ct("rmEngagement"), slug: "rm-client-engagement-strategies" },
        { name: ct("rmNeedsAnalysis"), slug: "rm-needs-analysis-portfolio-management" },
        { name: ct("rmExperienceRetention"), slug: "rm-client-experience-retention" },
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
        { name: "Introduction to Artificial Intelligence — AI Literacy Foundation", slug: "/introduction-to-artificial-intelligence", isExternal: true },
        { name: ct("aiTrainingDesign"), slug: "ai-training-design-curriculum" },
        { name: ct("buildAiTutors"), slug: "build-ai-tutors-adaptive-learning" },
      ],
    },
    {
      title: t("programmes.certificationsTitle"),
      description: t("programmes.certificationsDesc"),
      images: [certificationsImg],
      courses: [
        { name: "Professional Certificate in Applied AI", slug: "/professional-certificate-in-Applied-AI", isExternal: true },
        { name: "Advanced Certificate in AI-Powered Business Analytics", slug: "/advanced-certificate-ai-powered-business-analytics", isExternal: true },
        { isSubItem: true, name: ct("aiBizAnalyticsModule1"), slug: "foundations-business-analytics-ai-concepts-frameworks" },
        { isSubItem: true, name: ct("aiBizAnalyticsModule2"), slug: "data-preparation-cleaning-power-query-ai-copilots" },
        { isSubItem: true, name: ct("aiBizAnalyticsModule3"), slug: "business-analytics-models-dax-chatgpt" },
        { isSubItem: true, name: ct("aiBizAnalyticsModule4"), slug: "data-storytelling-dashboards-power-bi-ai-copilots" },
        { isSubItem: true, name: ct("aiBizAnalyticsModule5"), slug: "business-dashboard-decision-support-power-bi-ai-copilots" },
        { isSubItem: true, name: ct("aiBizAnalyticsModule6"), slug: "task-automation-macros-vba-ai-copilots" },
        { name: ct("awsCloudDevOps"), slug: "aws-cloud-solutions-architecture-devops" },
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
        { name: "Strategic AI Compute and Optimisation", slug: "/ai-native-prototyping-compute-constraints", isExternal: true },
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
      images: [cloudDevOpsImg, aiStackImg.url],
      courses: [
        { name: "Red Hat Enterprise Linux Administration – RHCSA Preparation", slug: "red-hat-enterprise-linux-rhcsa-preparation" },
        { name: "Red Hat Learning Subscription – Standard & Premium", slug: "/programmes/cloud-devops-ai/red-hat-learning-subscription", isExternal: true },
        { name: "AWS Solutions Architect – Associate Preparation", slug: "aws-solutions-architect-associate-preparation" },
        { name: "Certified Kubernetes Administrator Preparation", slug: "certified-kubernetes-administrator-preparation" },
        { name: ct("awsCloudDevOps"), slug: "aws-cloud-solutions-architecture-devops" },
      ],
    },
    {
      title: "FinOps",
      description:
        "Cloud financial management, technology value and cost optimisation capabilities for professionals managing modern cloud and technology environments.",
      images: [finopsImg],
      courses: [
        { name: "FinOps Foundation™ Full Catalog Access", slug: "finops-foundation-full-catalog" },
      ],
    },
  ];


  return (
    <section id="courses" className="bg-background">
      <div className="relative h-[180px] md:h-[200px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
          <span className="section-eyebrow !text-accent/90 mb-3">Programmes</span>
          <h2 className="section-h2 !text-white">
            {t("programmes.title")}
          </h2>
          <p className="mt-3 text-base font-light text-white/75 max-w-xl leading-relaxed">
            {t("programmes.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-8 md:py-10">
        <h3 className="section-h3 mb-8">
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
                imgClassName={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${cat.title.toLowerCase().includes("financial") ? "object-top" : ""}`}
                interval={10000}
                width={800}
                height={600}
              />
              <h4 className="font-heading text-xl font-medium tracking-tight text-foreground mb-2">
                {cat.title}
              </h4>
              <p className="body-p mb-4">
                {cat.description}
              </p>
              <ul className="space-y-2 border-t border-border pt-4">
                {(() => { let m = 0; let s = 0; return cat.courses.map((course) => {
                  const isSub = 'isSubItem' in course && course.isSubItem;
                  let numLabel: string;
                  if (isSub) { s += 1; numLabel = `${String(m).padStart(2, "0")}.${String(s).padStart(2, "0")}`; }
                  else { m += 1; s = 0; numLabel = String(m).padStart(2, "0"); }
                  const isAbs = 'isExternal' in course && course.isExternal && /^https?:\/\//.test(course.slug);
                  const isComing = 'comingSoon' in course && course.comingSoon;
                  const isUnclickable = 'unclickable' in course && course.unclickable;
                  const cls = "flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link";
                  return (
                    <li key={course.slug + course.name} className={isSub ? "pl-6" : ""}>
                      {isUnclickable ? (
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">{numLabel}</span>
                          <span>{course.name}</span>
                        </span>
                      ) : isComing ? (
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">{numLabel}</span>
                          <span>{course.name}</span>
                          <span className="text-[10px] uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">Upcoming</span>
                        </span>
                      ) : isAbs ? (
                        <a href={course.slug} target="_blank" rel="noopener noreferrer" className={cls}>
                          <span className="font-mono text-[10px] tracking-widest text-accent">{numLabel}</span>
                          <span>{course.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          to={'isExternal' in course && course.isExternal ? course.slug : `/course/${course.slug}`}
                          className={cls}
                        >
                          <span className="font-mono text-[10px] tracking-widest text-accent">{numLabel}</span>
                          <span>{course.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  );
                }); })()}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
