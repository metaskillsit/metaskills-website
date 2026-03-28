import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import agenticImg from "@/assets/programmes-agentic.jpg";
import aiAutomationImg from "@/assets/programmes-aiautomation.jpg";
import datasciImg from "@/assets/programmes-datascience.jpg";
import fintechImg from "@/assets/programmes-fintech.jpg";
import cyberDefenceImg from "@/assets/programmes-cyberdefence.jpg";
import aiLeadershipImg from "@/assets/programmes-aileadership.jpg";
import cyberCertImg from "@/assets/programmes-cybercert.jpg";

const programCategories = [
  {
    title: "Agentic AI Workshop Series",
    description:
      "Designing, deploying, and governing autonomous AI agents for real-world enterprise applications.",
    image: agenticImg,
    courses: [
      { name: "Foundations of Agentic AI Workflows", slug: "agentic-ai-foundations" },
      { name: "Empowering Agentic AI with LLMs and Use-Case Development", slug: "agentic-ai-use-case" },
      { name: "Deploying and Securing Advanced Agentic AI Systems", slug: "agentic-ai-deploy-secure-systems" },
    ],
  },
  {
    title: "AI Automation and Agents",
    description:
      "From no-code workflows to AI coding agents — practical, hands-on workshops on building and deploying intelligent automation systems.",
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
    title: "Data Science & Analytics",
    description:
      "From Python programming to advanced machine learning — practical, project-based data science education.",
    image: datasciImg,
    courses: [
      { name: "Python Programming For Data Analytics", slug: "python-programming-for-data-analytics" },
      { name: "Certified Data Analyst — JCube Institute", slug: "certified-data-analyst" },
      { name: "Certified Data Scientist — JCube Institute", slug: "certified-data-scientist" },
    ],
  },
  {
    title: "Fintech & Algorithmic Trading",
    description:
      "Data-driven trading strategies powered by automation and analytics for financial markets.",
    image: fintechImg,
    courses: [
      { name: "Algorithmic Trading Mastery Series — Level 1", slug: "algorithmic-trading-level-1" },
      { name: "Algorithmic Trading Mastery Series — Level 2", slug: "algorithmic-trading-level-2" },
    ],
  },
  {
    title: "Cyber Defence",
    description:
      "Comprehensive cybersecurity overview — fundamentals, threat landscape, key roles, and certification roadmap planning.",
    image: cyberDefenceImg,
    courses: [
      { name: "Cybersecurity: Roles, Threats, and Certification Pathways", slug: "cybersecurity-roles-threats-pathways" },
    ],
  },
  {
    title: "AI Leadership and Governance",
    description:
      "Strategy workshops for senior leaders — AI adoption roadmaps, accountability frameworks, agent governance, and AI wargaming.",
    image: aiLeadershipImg,
    courses: [
      { name: "AI Strategy and Roadmap for Leaders", slug: "ai-strategy-roadmap-leaders" },
      { name: "Who Is Accountable When AI Decides?", slug: "ai-accountability-when-ai-decides" },
      { name: "Governing AI Agents: Trust, Boundaries, and Audit Trails", slug: "governing-ai-agents-trust-boundaries" },
      { name: "AI Wargaming: Test Decisions Before They Count", slug: "ai-wargaming-test-decisions" },
    ],
  },
  {
    title: "MCC+ Cyber Defence Certification",
    description:
      "Consolidated cybersecurity certification programme — 4-day core foundation plus 1-day electives aligned to Security+, CySA+, CEH, CHFI, and SecAI.",
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

const ProgramsSection = () => {
  return (
    <section id="courses" className="bg-background">
      <div className="relative h-[280px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Our Programmes
          </h2>
          <p className="text-primary-foreground/70 mt-3 text-lg max-w-xl">
            Find the right programme for you.
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
          All our programmes at a glance
        </h3>

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
      </div>
    </section>
  );
};

export default ProgramsSection;
