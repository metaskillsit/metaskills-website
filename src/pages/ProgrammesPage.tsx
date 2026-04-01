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

const ProgrammesPage = () => {
  const { t } = useTranslation();

  const programCategories = [
    {
      title: t("programmes.agenticTitle"),
      description: t("programmes.agenticDesc"),
      image: agenticImg,
      courses: [
        { name: "Foundations of Agentic AI Workflows", slug: "agentic-ai-foundations" },
        { name: "Empowering Agentic AI with LLMs and Use-Case Development", slug: "agentic-ai-use-case" },
        { name: "Deploying and Securing Advanced Agentic AI Systems", slug: "agentic-ai-deploy-secure-systems" },
      ],
    },
    {
      title: t("programmes.aiAutoTitle"),
      description: t("programmes.aiAutoDesc"),
      image: aiAutomationImg,
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
      image: datasciImg,
      courses: [
        { name: "Python Programming For Data Analytics", slug: "python-programming-for-data-analytics" },
        { name: "Certified Data Analyst — JCube Institute", slug: "certified-data-analyst" },
        { name: "Certified Data Scientist — JCube Institute", slug: "certified-data-scientist" },
      ],
    },
    {
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      image: fintechImg,
      courses: [
        { name: "Algorithmic Trading Mastery Series — Level 1", slug: "algorithmic-trading-level-1" },
        { name: "Algorithmic Trading Mastery Series — Level 2", slug: "algorithmic-trading-level-2" },
      ],
    },
    {
      title: t("programmes.cyberTitle"),
      description: t("programmes.cyberDesc"),
      image: cyberDefenceImg,
      courses: [
        { name: "Cybersecurity: Roles, Threats, and Certification Pathways", slug: "cybersecurity-roles-threats-pathways" },
      ],
    },
    {
      title: t("programmes.aiLeadTitle"),
      description: t("programmes.aiLeadDesc"),
      image: aiLeadershipImg,
      courses: [
        { name: "AI Strategy and Roadmap for Leaders", slug: "ai-strategy-roadmap-leaders" },
        { name: "Who Is Accountable When AI Decides?", slug: "ai-accountability-when-ai-decides" },
        { name: "Governing AI Agents: Trust, Boundaries, and Audit Trails", slug: "governing-ai-agents-trust-boundaries" },
        { name: "AI Wargaming: Test Decisions Before They Count", slug: "ai-wargaming-test-decisions" },
      ],
    },
    {
      title: t("programmes.mccTitle"),
      description: t("programmes.mccDesc"),
      image: cyberCertImg,
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
