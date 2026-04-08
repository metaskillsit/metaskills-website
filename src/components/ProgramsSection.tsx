import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageSlideshow from "@/components/ImageSlideshow";
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

const ProgramsSection = () => {
  const { t } = useTranslation();
  const [sectionOpen, setSectionOpen] = useState(false);
  const programCategories = [
    {
      title: t("programmes.aiLeadTitle"),
      description: t("programmes.aiLeadDesc"),
      images: [aiLeadershipImg, aiLeadershipImg2, aiLeadershipImg3],
      courses: [
        { name: "AI Strategy and Roadmap for Leaders", slug: "ai-strategy-roadmap-leaders" },
        { name: "Who Is Accountable When AI Decides?", slug: "ai-accountability-when-ai-decides" },
        { name: "Governing AI Agents: Trust, Boundaries, and Audit Trails", slug: "governing-ai-agents-trust-boundaries" },
        { name: "AI Wargaming: Test Decisions Before They Count", slug: "ai-wargaming-test-decisions" },
      ],
    },
    {
      title: t("programmes.agenticTitle"),
      description: t("programmes.agenticDesc"),
      images: [agenticImg, agenticImg2, agenticImg3],
      courses: [
        { name: "Foundations of Agentic AI Workflows", slug: "agentic-ai-foundations" },
        { name: "Empowering Agentic AI with LLMs and Use-Case Development", slug: "agentic-ai-use-case" },
        { name: "Deploying and Securing Advanced Agentic AI Systems", slug: "agentic-ai-deploy-secure-systems" },
      ],
    },
    {
      title: t("programmes.aiAutoTitle"),
      description: t("programmes.aiAutoDesc"),
      images: [aiAutomationImg, aiAutomationImg2, aiAutomationImg3],
      courses: [
        { name: "The Rise of AI Agents in 2026", slug: "rise-of-ai-agents-2026" },
        { name: "Build AI Workflows with No Code", slug: "build-ai-workflows-no-code" },
        { name: "Design AI Automations Using Plain Language", slug: "design-ai-automations-plain-language" },
        { name: "Build Operational Tools with AI Coding Agents", slug: "build-operational-tools-ai-coding-agents" },
        { name: "Build Your Own AI Assistant/Agent", slug: "build-your-own-ai-assistant" },
        { name: "GPT Your Organisation's Knowledge Base", slug: "gpt-your-organisation-knowledge-base" },
        { name: "Secure Your Agentic AI Infrastructure", slug: "secure-agentic-ai-infrastructure" },
        { name: "AI for Training Design and Curriculum", slug: "ai-training-design-curriculum" },
        { name: "Build AI Tutors with Adaptive Learning", slug: "build-ai-tutors-adaptive-learning" },
      ],
    },
    {
      title: t("programmes.dataTitle"),
      description: t("programmes.dataDesc"),
      images: [datasciImg, datasciImg2, datasciImg3],
      courses: [
        { name: "Python Programming For Data Analytics", slug: "python-programming-for-data-analytics" },
        { name: "Certified Data Analyst — JCube Institute", slug: "certified-data-analyst" },
        { name: "Certified Data Scientist — JCube Institute", slug: "certified-data-scientist" },
      ],
    },
    {
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      images: [fintechImg, fintechImg2, fintechImg3],
      courses: [
        { name: "Algorithmic Trading Mastery Series — Level 1", slug: "algorithmic-trading-level-1" },
        { name: "Algorithmic Trading Mastery Series — Level 2", slug: "algorithmic-trading-level-2" },
      ],
    },
    {
      title: t("programmes.cyberTitle"),
      description: t("programmes.cyberDesc"),
      images: [cyberDefenceImg, cyberDefenceImg2, cyberDefenceImg3],
      courses: [
        { name: "Cybersecurity: Roles, Threats, and Certification Pathways", slug: "cybersecurity-roles-threats-pathways" },
      ],
    },
    {
      title: t("programmes.mccTitle"),
      description: t("programmes.mccDesc"),
      images: [cyberCertImg, cyberCertImg2, cyberCertImg3],
      courses: [
        { name: "MCC+ Cyber Defence Foundation (4 Days)", slug: "mcc-plus-cyber-defence-foundation" },
        { name: "MCC+ Security Operations (Security+)", slug: "mcc-plus-security-operations" },
        { name: "MCC+ Threat Hunting & Blue Team (CySA+)", slug: "mcc-plus-threat-hunting-blue-team" },
        { name: "MCC+ Offensive Cyber (CEH)", slug: "mcc-plus-offensive-cyber-fundamentals" },
        { name: "MCC+ Digital Forensics (CHFI)", slug: "mcc-plus-digital-forensics" },
        { name: "MCC+ AI Security (SecAI)", slug: "mcc-plus-ai-security-autonomous-defence" },
      ],
    },
  ];

  return (
    <section id="courses" className="bg-background">
      <div className="relative h-[280px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            {t("programmes.title")}
          </h2>
          <p className="text-white/75 mt-3 text-lg max-w-xl">
            {t("programmes.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <button
          onClick={() => setSectionOpen(!sectionOpen)}
          className="flex items-center gap-3 w-full text-left mb-10"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {t("programmes.glance")}
          </h3>
          <ChevronDown className={`w-6 h-6 text-foreground transition-transform duration-300 ${sectionOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {sectionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {programCategories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <ImageSlideshow
                      images={cat.images}
                      alt={cat.title}
                      className="aspect-[4/3] overflow-hidden rounded-sm mb-5"
                      imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      interval={3500 + i * 500}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramsSection;
