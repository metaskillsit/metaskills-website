import courseAgenticAi1 from "@/assets/course-agentic-ai-1.jpg";
import courseAgenticAi2 from "@/assets/course-agentic-ai-2.jpg";
import courseAgenticAi3 from "@/assets/course-agentic-ai-3.jpg";
import courseDatascience1 from "@/assets/course-datascience-1.jpg";
import courseDatascience2 from "@/assets/course-datascience-2.jpg";
import courseDatascience3 from "@/assets/course-datascience-3.jpg";
import courseFintech1 from "@/assets/course-fintech-1.jpg";
import courseFintech2 from "@/assets/course-fintech-2.jpg";
import courseFintech3 from "@/assets/course-fintech-3.jpg";
import courseAutomation1 from "@/assets/course-automation-1.jpg";
import courseAutomation2 from "@/assets/course-automation-2.jpg";
import courseAutomation3 from "@/assets/course-automation-3.jpg";
import courseCyber1 from "@/assets/course-cyber-1.jpg";
import courseCyber2 from "@/assets/course-cyber-2.jpg";
import courseCyber3 from "@/assets/course-cyber-3.jpg";
import courseLeadership1 from "@/assets/course-leadership-1.jpg";
import courseLeadership2 from "@/assets/course-leadership-2.jpg";
import courseLeadership3 from "@/assets/course-leadership-3.jpg";

const categoryImages: Record<string, string[]> = {
  "Agentic AI Workshop Series": [courseAgenticAi1, courseAgenticAi2, courseAgenticAi3],
  "Data Science": [courseDatascience1, courseDatascience2, courseDatascience3],
  "Fintech / Algorithmic Trading": [courseFintech1, courseFintech2, courseFintech3],
  "AI Automation and Agents": [courseAutomation1, courseAutomation2, courseAutomation3],
  "Cyber Defence": [courseCyber1, courseCyber2, courseCyber3],
  "AI Leadership and Governance": [courseLeadership1, courseLeadership2, courseLeadership3],
  "MCC+ Cyber Defence Certification": [courseCyber1, courseCyber2, courseCyber3],
};

export const getCategoryImages = (category: string): string[] =>
  categoryImages[category] || [courseAgenticAi1, courseAgenticAi2, courseAgenticAi3];

export interface Course {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  whyAttend: string;
  objectives: string[];
  courseDesign: string;
  schedule: { day: string; items: string[] }[];
  nextRunDate: string;
  fees: {
    selfSponsored: string;
    corporateSmall: string;
    corporateLarge: string;
  };
  duration?: string;
  jointlyOfferedBy?: string;
  whatYouLearn?: string[];
  afterCompleting?: string[];
  totalRuns?: number;
  totalParticipants?: string;
  runHistory?: string;
}

export const courses: Course[] = [
  // ── Agentic AI Workshop Series (existing) ──
  {
    slug: "agentic-ai-foundations",
    title: "Foundations of Agentic AI Workflows",
    category: "Agentic AI Workshop Series",
    tagline: "Discover the basics of AI-driven systems to transform decision-making processes.",
    heroImage: "/src/assets/course-agentic1.png",
    whyAttend:
      "In today's fast-paced environment, understanding how to harness AI-driven workflows is essential. This introductory workshop equips you with the core concepts and practical tools to implement agentic systems that streamline and enhance decision-making.",
    objectives: [
      "Understand the core principles and components of agentic AI systems.",
      "Identify common tools and platforms used in developing AI workflows.",
      "Explore real-world applications and operational scenarios.",
      "Gain hands-on experience by building basic AI agentic workflows.",
      "Develop an operational mindset for integrating AI into decision-making processes.",
    ],
    courseDesign:
      "This two-day workshop provides a comprehensive introduction to agentic AI workflows. Participants will learn about the fundamentals of AI agents, explore common tools used to build these systems, and engage in hands-on exercises that simulate real-world applications.",
    schedule: [
      { day: "Day 1", items: ["Welcome & Course Overview", "Fundamentals of AI Agentic Systems", "Overview of Tools & Platforms", "Case Studies"] },
      { day: "Day 2", items: ["Interactive Lab", "Scenario-Based Exercises", "Peer Review & Presentations", "Wrap-Up & Q&A"] },
    ],
    nextRunDate: "Day 1 – 18 September 2025 (Thursday)\nDay 2 – 19 September 2025 (Friday)",
    fees: { selfSponsored: "S$1,800 for 2-day workshop", corporateSmall: "Less than 8 pax – S$11,000", corporateLarge: "8 to 15 pax – S$12,000" },
  },
  {
    slug: "agentic-ai-use-case",
    title: "Empowering Agentic AI with LLMs and Use-Case Development",
    category: "Agentic AI Workshop Series",
    tagline: "Harness the power of language models to create dynamic, autonomous agentic systems.",
    heroImage: "/src/assets/course-agentic2.png",
    whyAttend:
      "This workshop focuses on integrating large language models (LLMs) into agentic AI frameworks, enabling participants to design and implement systems that act as autonomous agents.",
    objectives: [
      "Deepen your understanding of agentic AI and autonomous decision-making systems.",
      "Learn to integrate LLMs into agentic workflows to enhance system autonomy.",
      "Develop practical skills in coding, API integration, and prompt engineering.",
      "Explore real-world scenarios where agentic AI transforms operational processes.",
      "Design and present tailored AI use cases leveraging agentic systems.",
    ],
    courseDesign:
      "This two-day workshop dives into the intermediate realm of agentic AI. Through lectures and practical exercises, the course covers building AI agents capable of initiating actions, making decisions, and evolving based on feedback.",
    schedule: [
      { day: "Day 1", items: ["Introduction & Course Overview", "Agentic AI Deep Dive", "Integrating LLMs into Agentic Workflows", "Real-World Use Cases"] },
      { day: "Day 2", items: ["Coding Lab", "Prompt Engineering for Agentic Systems", "Scenario-Based Development", "Group Presentations & Peer Review"] },
    ],
    nextRunDate: "Day 1 – 02 October 2025 (Thursday)\nDay 2 – 03 October 2025 (Friday)",
    fees: { selfSponsored: "S$1,800 for 2-day workshop", corporateSmall: "Less than 8 pax – S$11,000", corporateLarge: "8 to 15 pax – S$12,000" },
  },
  {
    slug: "agentic-ai-deploy-secure-systems",
    title: "Deploying and Securing Advanced Agentic AI Systems",
    category: "Agentic AI Workshop Series",
    tagline: "Master the deployment of autonomous AI agents in secure, scalable environments.",
    heroImage: "/src/assets/course-agentic3.png",
    whyAttend:
      "Deploying agentic AI systems in secure, reliable environments is critical for high-stakes operations. This advanced workshop is tailored for professionals ready to transition from development to robust, production-level deployment.",
    objectives: [
      "Understand the unique challenges of deploying autonomous agentic AI systems.",
      "Gain insights into secure deployment practices and on-premise integration.",
      "Learn advanced troubleshooting and integration techniques.",
      "Develop strategies for scaling agentic AI systems with strict security.",
      "Apply knowledge in hands-on simulation labs.",
    ],
    courseDesign:
      "This two-day workshop concentrates on advanced deployment and operationalization of agentic AI systems, with emphasis on on-premise deployment strategies, security protocols, and scalability.",
    schedule: [
      { day: "Day 1", items: ["Introduction & Course Overview", "Agentic AI Deployment Strategies", "Security & Compliance", "Advanced Integration Techniques"] },
      { day: "Day 2", items: ["Simulation Lab", "Deployment Strategy Workshop", "Hands-On Troubleshooting", "Group Presentations & Expert Feedback"] },
    ],
    nextRunDate: "TBC",
    fees: { selfSponsored: "S$1,800 for 2-day workshop", corporateSmall: "Less than 8 pax – S$11,000", corporateLarge: "8 to 15 pax – S$12,000" },
  },

  // ── Data Science (existing) ──
  {
    slug: "python-programming-for-data-analytics",
    title: "Python Programming For Data Analytics",
    category: "Data Science",
    tagline: "Python Programming | Machine Learning | Data Analytics",
    heroImage: "/src/assets/course-python.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    totalRuns: 20,
    totalParticipants: "500+",
    runHistory: "Over 20 runs conducted since 2019. Faculty have collectively trained 10,000+ professionals.",
    whyAttend:
      "Taught by Leading Singaporean Data Scientists working on existing Data Science and A.I Projects with MNCs and Government Bodies. This programme is uniquely designed by industry leaders in Data Science, AI, Machine Learning and Deep Learning.",
    objectives: [
      "Learn essential Python programming techniques for data analysis.",
      "Learn essential data wrangling techniques – import, inspect, clean, merge, and transform data.",
      "Learn how to present data and insights with visualizations.",
      "Apply all the learned techniques on real-world datasets and use-cases.",
    ],
    afterCompleting: [
      "Perform essential Data Analyst techniques using Python",
      "Make better and informed business decisions using data",
      "Identify business risks from data",
      "Analyse data on processes and generate recommendations",
      "Present findings with appropriate visualization techniques",
    ],
    courseDesign: "Conducted over 2 blocks — each block covers 2 weekday evenings (7 pm to 10.30 pm) and a full Saturday (9 am to 6 pm). Total training hours: 30 hours.",
    duration: "30 hours (2 Sessions)",
    schedule: [
      { day: "Session 1 (15 hours)", items: ["Class 1: Weekday evening", "Class 2: Weekday evening", "Class 3: Full Saturday"] },
      { day: "Session 2 (15 hours)", items: ["Class 1: Weekday evening", "Class 2: Weekday evening", "Class 3: Full Saturday"] },
    ],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$3,000 (CITREP+ eligible)", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },
  {
    slug: "certified-data-analyst",
    title: "Certified Data Analyst — JCube Institute",
    category: "Data Science",
    tagline: "Industry-recognised Data Analyst certification designed for career advancement.",
    heroImage: "/src/assets/course-python.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    totalRuns: 15,
    totalParticipants: "300+",
    runHistory: "Multiple runs since 2020. CITREP+ endorsed. Faculty trained 10,000+ professionals across JCube programmes.",
    whyAttend: "The Certified Data Analyst programme equips you with the analytical skills and tools needed to extract insights from complex datasets. This certification is endorsed by CITREP+ and recognised across Singapore and ASEAN. Singaporeans/PRs may be eligible for up to S$3,000 subsidy.",
    objectives: ["Master data wrangling, cleaning, and transformation techniques.", "Build proficiency in statistical analysis and hypothesis testing.", "Create compelling data visualizations and dashboards.", "Apply machine learning fundamentals to real-world business problems.", "Earn an industry-recognised certification from JCube Institute."],
    courseDesign: "A comprehensive programme conducted over 2 blocks of 15 hours each (2 weekday evenings + full Saturday per block). Total: 30 hours.",
    duration: "30 hours",
    schedule: [
      { day: "Block 1 (15 hours)", items: ["Weekday evening session", "Weekday evening session", "Full Saturday session"] },
      { day: "Block 2 (15 hours)", items: ["Weekday evening session", "Weekday evening session", "Full Saturday session"] },
    ],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$3,000 (CITREP+ eligible — nett from S$300)", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },
  {
    slug: "certified-data-scientist",
    title: "Certified Data Scientist — JCube Institute",
    category: "Data Science",
    tagline: "Advanced Data Science certification for professionals seeking mastery.",
    heroImage: "/src/assets/course-python.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    whyAttend: "The Certified Data Scientist programme takes your skills to the next level with advanced machine learning, deep learning, and AI techniques.",
    objectives: ["Build and deploy advanced machine learning and deep learning models.", "Master feature engineering and model optimization techniques.", "Implement end-to-end data science pipelines.", "Work with unstructured data including text, images, and time series.", "Earn an industry-recognised Data Scientist certification."],
    courseDesign: "An intensive programme combining advanced theoretical concepts with industry-grade projects.",
    schedule: [{ day: "Programme Structure", items: ["Advanced modular learning blocks", "Industry mentorship sessions", "Portfolio development and review", "Certification examination and defence"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "Contact for pricing", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },

  // ── Fintech / Algorithmic Trading (existing) ──
  {
    slug: "algorithmic-trading-level-1",
    title: "Algorithmic Trading Mastery Series — Level 1",
    category: "Fintech / Algorithmic Trading",
    tagline: "Data-driven trading strategies powered by automation and analytics for financial markets.",
    heroImage: "/src/assets/course-agentic1.png",
    totalRuns: 11,
    totalParticipants: "140+",
    runHistory: "Run 1–10 fully subscribed (12–16 pax each). Run 11 open for registration.",
    whyAttend: "Learn the foundations of algorithmic trading, from technical analysis to automated strategy development. This course teaches you the essentials of trading on MetaTrader 4 (MT4) and how to auto-trade strategies using expert advisors to generate consistent income.",
    objectives: ["Understand the fundamentals of algorithmic trading and quantitative finance.", "Learn technical analysis indicators and chart pattern recognition.", "Build basic automated trading strategies using code.", "Understand risk management and backtesting principles.", "Gain hands-on experience with trading platforms and APIs.", "Set up VPS to trade 24×7.", "Learn trading psychology and risk mitigation."],
    courseDesign: "A practical 3-evening workshop (7 pm – 10 pm) combining financial theory with hands-on coding exercises. Classes are on-site at CT Hub premises. Class sizes are capped to enhance learning.",
    schedule: [{ day: "Evening 1", items: ["Market profile of forex, gold & crypto", "Choosing the right MT4 broker", "Power of leverage and compounding"] }, { day: "Evening 2", items: ["Trading framework and indicators", "Setup trading environment", "Auto trading with Expert Advisors"] }, { day: "Evening 3", items: ["Trading psychology", "Strategy optimisation", "VPS setup for 24/7 trading"] }],
    nextRunDate: "Run 11 – Registration Open\nContact admissions@metaskills.sg",
    fees: { selfSponsored: "S$2,750", corporateSmall: "Special rates for JCube/MSI alumni", corporateLarge: "Contact for group rates" },
  },
  {
    slug: "algorithmic-trading-level-2",
    title: "Algorithmic Trading Mastery Series — Level 2",
    category: "Fintech / Algorithmic Trading",
    tagline: "Advanced algorithmic strategies and portfolio optimization for financial professionals.",
    heroImage: "/src/assets/course-agentic2.png",
    totalRuns: 4,
    totalParticipants: "50+",
    runHistory: "Run 1–3 fully subscribed. Run 4 open for registration.",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    whyAttend: "Building on Level 1, this advanced programme dives deep into sophisticated trading algorithms, machine learning-driven strategies, and portfolio optimization techniques.",
    objectives: ["Design and implement advanced algorithmic trading strategies.", "Apply machine learning techniques to financial market prediction.", "Master portfolio optimization and multi-asset allocation.", "Develop high-frequency and event-driven trading systems.", "Understand regulatory considerations for algorithmic trading."],
    courseDesign: "An advanced workshop for participants with foundational trading knowledge. Classes are on-site at CT Hub premises.",
    schedule: [{ day: "Workshop Structure", items: ["Advanced strategy design and ML-driven models", "Portfolio optimization and risk analytics", "High-frequency trading concepts", "Live trading simulation and review"] }],
    nextRunDate: "Run 4 – Registration Open\nContact admissions@metaskills.sg",
    fees: { selfSponsored: "Contact for pricing", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },

  // ── AI Automation and Agents (MSI) ──
  {
    slug: "rise-of-ai-agents-2026",
    title: "The Rise of AI Agents in 2026: Automating Everything with Intelligent AI Systems Now",
    category: "AI Automation and Agents",
    tagline: "A comprehensive introduction to the world of AI automation and autonomous agents.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "This course maps the current landscape: what AI agents are, how they differ from traditional automation, what no-code and low-code platforms exist, how organisations are deploying agents for scheduling, reporting, knowledge management, and decision support, and what the emerging trends are (multi-agent systems, personal AI assistants, agentic security).",
    objectives: ["Understand what AI agents are and how they differ from traditional automation.", "Explore no-code and low-code AI platforms.", "See live demonstrations of leading agent platforms.", "Build a simple automated workflow hands-on.", "Map out which courses match your role and goals."],
    courseDesign: "A one-day workshop with live demonstrations, hands-on exercises, and a guided learning path assessment.",
    schedule: [{ day: "Day 1", items: ["AI agent landscape overview", "Live platform demonstrations", "Hands-on workflow building", "Learning path planning"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "build-ai-workflows-no-code",
    title: "Build AI Workflows with No Code (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Create agentic AI workflows using visual automation — no programming required.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "Learn to create agentic AI workflows using n8n visual automation platform. Create workflows by connecting nodes, integrating APIs, and embedding AI agent nodes — all with drag-and-drop.",
    objectives: ["Build workflows using n8n visual automation platform.", "Connect nodes, integrate APIs, and embed AI agent nodes.", "Test, debug, and deploy functional workflows.", "Master drag-and-drop workflow building.", "Create production-ready automations without coding."],
    courseDesign: "A one-day hands-on workshop using the n8n visual automation platform.",
    schedule: [{ day: "Day 1", items: ["n8n platform fundamentals", "Node connections and API integration", "AI agent node embedding", "Testing, debugging, and deployment"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "design-ai-automations-plain-language",
    title: "Design AI Automations Using Plain Language (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Use LLMs to generate AI workflows from natural language descriptions.",
    heroImage: "/src/assets/course-agentic2.png",
    duration: "1 Day",
    whyAttend: "Describe desired automation in plain language, generate workflow configurations via AI, validate outputs, and iteratively refine until production-ready.",
    objectives: ["Use LLMs to generate n8n workflows from natural language.", "Describe automations in plain language and validate AI-generated outputs.", "Iteratively refine workflows until production-ready.", "Understand prompt-to-workflow translation.", "Deploy AI-designed automations confidently."],
    courseDesign: "A one-day workshop focused on natural language-driven workflow generation.",
    schedule: [{ day: "Day 1", items: ["Natural language workflow generation", "AI-driven configuration creation", "Output validation and refinement", "Production deployment"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "build-operational-tools-ai-coding-agents",
    title: "Build Operational Tools with AI Coding Agents (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Build production-quality tools using a structured five-layer AI coding approach.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day",
    whyAttend: "Build operationally relevant tools (data pipelines, report generators, dashboards) using AI coding agents. Follow a structured five-layer approach: define the goal, provide organisational context, set boundaries, write clear instructions, and capture lessons.",
    objectives: ["Build data pipelines, report generators, and dashboards with AI agents.", "Follow a structured five-layer approach for reliable output.", "Move beyond trial-and-error to production-quality AI coding.", "Provide organisational context to AI coding agents.", "Capture and apply lessons for continuous improvement."],
    courseDesign: "A one-day hands-on workshop building real operational tools with AI coding agents.",
    schedule: [{ day: "Day 1", items: ["Five-layer approach methodology", "Data pipeline construction", "Report generator and dashboard building", "Quality assurance and deployment"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "build-your-own-ai-assistant",
    title: "Build Your Own AI Assistant/Agent To Work For You (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Install, configure, and customise a personal AI agent on modest hardware.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "Hands-on introduction to lightweight, open-source personal AI agent frameworks (nanobot, zeroclaw, picoclaw). Install, configure, and customise a personal AI agent. Covers messaging integration, custom skills, and security risk management.",
    objectives: ["Work with open-source AI agent frameworks.", "Install and configure personal AI agents on modest hardware.", "Integrate messaging platforms and custom skills.", "Manage security risks for personal AI agents.", "Customise agent behaviour for your specific needs."],
    courseDesign: "A one-day hands-on workshop building and deploying personal AI agents.",
    schedule: [{ day: "Day 1", items: ["Framework overview and installation", "Configuration and customisation", "Messaging integration and custom skills", "Security and risk management"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "gpt-your-organisation-knowledge-base",
    title: "How To GPT Your Organisation's Knowledge Base (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Build searchable AI knowledge systems from your organisation's documents.",
    heroImage: "/src/assets/course-agentic2.png",
    duration: "1 Day",
    whyAttend: "Build searchable AI knowledge systems from unit documents (SOPs, policies, after-action reviews). Upload, structure, and index content with NotebookLM and Gemini. Focus on context engineering, chunking strategies, and operational knowledge retrieval that reduces hallucination.",
    objectives: ["Build AI knowledge systems from organisational documents.", "Upload, structure, and index content with NotebookLM and Gemini.", "Apply context engineering and chunking strategies.", "Reduce hallucination through proper knowledge retrieval.", "Create searchable AI-powered knowledge bases."],
    courseDesign: "A one-day workshop focused on building AI knowledge management systems.",
    schedule: [{ day: "Day 1", items: ["Document upload and structuring", "NotebookLM and Gemini integration", "Context engineering and chunking", "Knowledge retrieval and testing"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "secure-agentic-ai-infrastructure",
    title: "Secure Your Agentic AI Infrastructure: Threats, Defences, and Governance (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Security and governance for agentic AI systems — from threats to policy.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day",
    whyAttend: "Covers prompt injection, data exfiltration, permission escalation, and unintended autonomous actions. Includes a red-team exercise against a sample workflow and drafting a governance policy.",
    objectives: ["Identify key threats to agentic AI systems.", "Understand prompt injection, data exfiltration, and permission escalation.", "Conduct red-team exercises against sample workflows.", "Draft governance policies for AI agent deployment.", "Implement defence strategies for autonomous systems."],
    courseDesign: "A one-day workshop combining threat analysis, red-team exercises, and governance policy development.",
    schedule: [{ day: "Day 1", items: ["Threat landscape for agentic AI", "Red-team exercise", "Defence strategies and implementation", "Governance policy drafting"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "ai-training-design-curriculum",
    title: "Using AI for Training Design and Curriculum Development (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "For L&D professionals — use AI to create lesson plans, rubrics, and curriculum materials.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "For L&D professionals and training officers. Use Gemini and NotebookLM to create lesson plans, outlines, rubrics, and custom Gems. Source-grounded research and content synthesis for curriculum materials.",
    objectives: ["Use Gemini and NotebookLM for curriculum development.", "Create lesson plans, outlines, and rubrics with AI.", "Build custom Gems for training applications.", "Conduct source-grounded research and content synthesis.", "Design comprehensive curriculum materials efficiently."],
    courseDesign: "A one-day workshop for L&D professionals on AI-powered training design.",
    schedule: [{ day: "Day 1", items: ["AI tools for L&D professionals", "Lesson plan and rubric creation", "Custom Gems development", "Content synthesis and review"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "build-ai-tutors-adaptive-learning",
    title: "Build Powerful AI Tutors That Adapt To Students' Learning Paths (2026 Edition)",
    category: "AI Automation and Agents",
    tagline: "Build custom AI tutors and adaptive learning pathways for your organisation.",
    heroImage: "/src/assets/course-agentic2.png",
    duration: "1 Day",
    whyAttend: "For L&D professionals. Build custom AI tutors and adaptive learning pathways using Gems, NotebookLM, and chatbot prototyping tools. Covers on-premise vs. cloud deployment, security, and scaling strategies.",
    objectives: ["Build custom AI tutors with adaptive learning pathways.", "Use Gems, NotebookLM, and chatbot prototyping tools.", "Evaluate on-premise vs. cloud deployment options.", "Implement security measures for learning AI systems.", "Scale AI tutors for organisational learning environments."],
    courseDesign: "A one-day workshop for L&D professionals on building adaptive AI tutors.",
    schedule: [{ day: "Day 1", items: ["AI tutor architecture and design", "Adaptive learning pathway creation", "Deployment options and security", "Scaling strategies and review"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },

  // ── Cyber Defence (MSI) ──
  {
    slug: "cybersecurity-roles-threats-pathways",
    title: "Cybersecurity: Roles, Threats, and Certification Pathways",
    category: "Cyber Defence",
    tagline: "Comprehensive cybersecurity overview — fundamentals, roles, threats, and certification roadmap.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day",
    whyAttend: "Covers fundamentals (CIA triad, zero trust, risk management), the current threat landscape, key roles (SOC analyst, pen tester, forensic investigator, AI security specialist), and major certification pathways (Security+, CySA+, SecAI, CEH, CHFI). Participants build a personalised 12 to 24 month certification roadmap.",
    objectives: ["Understand cybersecurity fundamentals including CIA triad and zero trust.", "Navigate the current threat landscape.", "Explore key cybersecurity roles and career paths.", "Map major certification pathways (Security+, CySA+, CEH, CHFI).", "Build a personalised 12–24 month certification roadmap."],
    courseDesign: "A one-day comprehensive workshop covering cybersecurity fundamentals, career roles, and certification planning.",
    schedule: [{ day: "Day 1", items: ["Cybersecurity fundamentals", "Threat landscape overview", "Roles and career pathways", "Certification roadmap planning"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },

  // ── AI Leadership and Governance (MSI) ──
  {
    slug: "ai-strategy-roadmap-leaders",
    title: "AI Strategy and Roadmap for Leaders",
    category: "AI Leadership and Governance",
    tagline: "A strategy workshop for senior leaders to evaluate AI potential and build adoption plans.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "The morning covers AI fundamentals in plain language — what AI can and cannot do, how generative AI works, real defence and government use cases, and ethical risks leaders must manage. The afternoon is a hands-on strategy exercise: teams identify a real challenge, assess whether AI can help, and develop a practical roadmap with milestones, resource requirements, and risk mitigations.",
    objectives: ["Understand AI fundamentals in plain language.", "Evaluate real defence and government AI use cases.", "Identify challenges where AI can provide value.", "Develop a practical AI adoption roadmap.", "Manage ethical risks and resource requirements."],
    courseDesign: "A one-day strategy workshop combining AI fundamentals with hands-on roadmap development. No technical background required.",
    schedule: [{ day: "Day 1", items: ["AI fundamentals for leaders", "Real-world use cases and ethics", "Strategy exercise: challenge identification", "Roadmap development and presentation"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "ai-accountability-when-ai-decides",
    title: "Who Is Accountable When AI Decides?",
    category: "AI Leadership and Governance",
    tagline: "Tackle the accountability question for AI-driven decisions head-on.",
    heroImage: "/src/assets/course-agentic2.png",
    duration: "1 Day",
    whyAttend: "When an AI system processes a procurement request, triages maintenance tickets, or drafts operational communications, who is responsible if something goes wrong? This workshop tackles accountability through realistic scenarios. Learn to separate decisions that must stay with humans from tasks AI can handle, and design oversight models that work at operational speed.",
    objectives: ["Separate human-accountable decisions from AI-delegable tasks.", "Design oversight models that work at operational speed.", "Identify where human judgment remains irreplaceable.", "Build an accountability model for your unit's AI use.", "Present and peer-review accountability frameworks."],
    courseDesign: "A one-day workshop with realistic scenarios and group exercises designing accountability models. No technical background required.",
    schedule: [{ day: "Day 1", items: ["Accountability frameworks for AI", "Realistic scenario analysis", "Group exercise: accountability model design", "Peer review and presentation"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "governing-ai-agents-trust-boundaries",
    title: "Governing AI Agents: Trust, Boundaries, and Audit Trails",
    category: "AI Leadership and Governance",
    tagline: "Set boundaries and trace every AI agent action back to human authority.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day",
    whyAttend: "Learn to set clear boundaries for what an AI agent may and may not do (spending limits, data access, communication permissions, time windows), assign levels of autonomy based on risk and mission criticality, and trace any AI action back through a chain of authority.",
    objectives: ["Set clear boundaries for AI agent permissions and autonomy.", "Assign autonomy levels based on risk and mission criticality.", "Build audit trails tracing AI actions to human authority.", "Design boundary frameworks for realistic agent scenarios.", "Handle situations when agents exceed their authority."],
    courseDesign: "A one-day workshop on AI agent governance with boundary design exercises. No technical background required.",
    schedule: [{ day: "Day 1", items: ["AI agent boundary setting", "Autonomy levels and risk assessment", "Audit trail design", "Boundary scenario exercises"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },
  {
    slug: "ai-wargaming-test-decisions",
    title: "AI Wargaming: Test Decisions Before They Count",
    category: "AI Leadership and Governance",
    tagline: "Hands-on wargaming exercise where AI tools serve as analytical advisors.",
    heroImage: "/src/assets/course-agentic1.png",
    duration: "1 Day",
    whyAttend: "Teams construct a strategic scenario, then use AI to generate options, challenge assumptions, and simulate adversarial responses at each decision point. The exercise integrates governance: before the game begins, teams define what the AI advisor is and is not allowed to do, and after the game, they evaluate whether the AI stayed within bounds.",
    objectives: ["Use AI tools as analytical advisors in wargaming exercises.", "Construct strategic scenarios and generate AI-driven options.", "Challenge assumptions and simulate adversarial responses.", "Define and enforce AI advisor guardrails.", "Evaluate AI behaviour against governance boundaries."],
    courseDesign: "A one-day hands-on wargaming exercise combining AI decision-making with governance evaluation. No technical background required.",
    schedule: [{ day: "Day 1", items: ["Strategic scenario construction", "AI advisor guardrail definition", "Wargaming exercise with AI advisors", "Governance evaluation and debrief"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$6,000 per workshop (up to 15 pax)", corporateSmall: "S$6,000/run", corporateLarge: "S$6,000/run" },
  },

  // ── MCC+ Cyber Defence Certification (MSI) ──
  {
    slug: "mcc-plus-cyber-defence-foundation",
    title: "MSI CyberCore+ (MCC+) Cyber Defence Foundation",
    category: "MCC+ Cyber Defence Certification",
    tagline: "4-day intensive foundation covering core cybersecurity knowledge across all major certifications.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "4 Days",
    whyAttend: "A 4-day intensive foundation that covers the core knowledge shared across all major cybersecurity certifications: threat landscape, network security, system hardening, incident response, and risk management. After completing MCC+, participants only need 1 additional day per certification elective instead of 4–5 days each.",
    objectives: ["Master core cybersecurity knowledge across all major certifications.", "Understand threat landscape, network security, and system hardening.", "Learn incident response and risk management fundamentals.", "Prepare for Security+, CySA+, CEH, and CHFI certifications.", "Save training time with consolidated foundational programme."],
    courseDesign: "A 4-day intensive programme consolidating shared cybersecurity foundations aligned to CompTIA and EC-Council domains.",
    schedule: [
      { day: "Day 1–2", items: ["Threat landscape and network security", "System hardening fundamentals"] },
      { day: "Day 3–4", items: ["Incident response procedures", "Risk management and compliance"] },
    ],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$3,200 per pax (min 5, max 15)", corporateSmall: "S$3,200/pax", corporateLarge: "S$3,200/pax" },
  },
  {
    slug: "mcc-plus-security-operations",
    title: "MCC+ Security Operations (CompTIA Security+ Aligned)",
    category: "MCC+ Cyber Defence Certification",
    tagline: "1-day elective aligned to CompTIA Security+ domains.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day Add-On",
    whyAttend: "Builds on the MCC+ foundation to cover security architecture, IAM, network monitoring, and operational controls specific to the Security+ examination. Requires MCC+ completion.",
    objectives: ["Master Security+ specific domains.", "Understand security architecture and IAM.", "Implement network monitoring and operational controls.", "Prepare for CompTIA Security+ examination.", "Apply security operations concepts in practice."],
    courseDesign: "Intensive 1-day elective building on MCC+ foundation. Requires MCC+ completion.",
    schedule: [{ day: "Day 1", items: ["Security architecture", "IAM and access controls", "Network monitoring", "Operational security controls"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$1,800 per pax (min 5, max 15)", corporateSmall: "S$1,800/pax", corporateLarge: "S$1,800/pax" },
  },
  {
    slug: "mcc-plus-threat-hunting-blue-team",
    title: "MCC+ Threat Hunting and Blue Team (CompTIA CySA+ Aligned)",
    category: "MCC+ Cyber Defence Certification",
    tagline: "1-day elective aligned to CompTIA CySA+ domains.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day Add-On",
    whyAttend: "Builds on the MCC+ foundation to cover threat detection, log analysis, behavioural analytics, and SOC workflows for identifying advanced threats. Requires MCC+ completion.",
    objectives: ["Master threat detection and log analysis.", "Apply behavioural analytics for threat hunting.", "Implement SOC workflows for advanced threat identification.", "Prepare for CompTIA CySA+ examination.", "Build blue team operational capabilities."],
    courseDesign: "Intensive 1-day elective building on MCC+ foundation. Requires MCC+ completion.",
    schedule: [{ day: "Day 1", items: ["Threat detection fundamentals", "Log analysis and behavioural analytics", "SOC workflows", "Advanced threat identification"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$1,800 per pax (min 5, max 15)", corporateSmall: "S$1,800/pax", corporateLarge: "S$1,800/pax" },
  },
  {
    slug: "mcc-plus-offensive-cyber-fundamentals",
    title: "MCC+ Offensive Cyber Fundamentals (EC-Council CEH Aligned)",
    category: "MCC+ Cyber Defence Certification",
    tagline: "1-day elective aligned to EC-Council CEH domains.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day Add-On",
    whyAttend: "Builds on the MCC+ foundation to cover ethical hacking methodology: reconnaissance, scanning, enumeration, vulnerability assessment, and basic exploitation techniques. Requires MCC+ completion.",
    objectives: ["Understand ethical hacking methodology.", "Conduct reconnaissance and scanning.", "Perform enumeration and vulnerability assessment.", "Apply basic exploitation techniques.", "Prepare for EC-Council CEH examination."],
    courseDesign: "Intensive 1-day elective building on MCC+ foundation. Requires MCC+ completion.",
    schedule: [{ day: "Day 1", items: ["Reconnaissance and scanning", "Enumeration techniques", "Vulnerability assessment", "Basic exploitation methods"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$3,000 per pax (min 5, max 15)", corporateSmall: "S$3,000/pax", corporateLarge: "S$3,000/pax" },
  },
  {
    slug: "mcc-plus-digital-forensics",
    title: "MCC+ Digital Forensics and Incident Investigation (EC-Council CHFI Aligned)",
    category: "MCC+ Cyber Defence Certification",
    tagline: "1-day elective aligned to EC-Council CHFI domains.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day Add-On",
    whyAttend: "Builds on the MCC+ foundation to cover digital evidence collection, forensic investigation, chain-of-custody documentation, and incident reconstruction. Requires MCC+ completion.",
    objectives: ["Master digital evidence collection techniques.", "Conduct forensic investigations.", "Document chain-of-custody properly.", "Reconstruct incidents from digital evidence.", "Prepare for EC-Council CHFI examination."],
    courseDesign: "Intensive 1-day elective building on MCC+ foundation. Requires MCC+ completion.",
    schedule: [{ day: "Day 1", items: ["Digital evidence collection", "Forensic investigation procedures", "Chain-of-custody documentation", "Incident reconstruction"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$3,000 per pax (min 5, max 15)", corporateSmall: "S$3,000/pax", corporateLarge: "S$3,000/pax" },
  },
  {
    slug: "mcc-plus-ai-security-autonomous-defence",
    title: "MCC+ AI Security and Autonomous Defence (CompTIA SecAI Aligned)",
    category: "MCC+ Cyber Defence Certification",
    tagline: "1-day elective aligned to CompTIA SecAI domains.",
    heroImage: "/src/assets/course-agentic3.png",
    duration: "1 Day Add-On",
    whyAttend: "Builds on the MCC+ foundation to cover AI-specific threats (adversarial attacks, data poisoning, model theft), AI security lifecycle, and defence strategies for autonomous AI systems. Requires MCC+ completion.",
    objectives: ["Understand AI-specific threats including adversarial attacks and data poisoning.", "Manage AI security lifecycle.", "Implement defence strategies for autonomous AI systems.", "Address model theft and AI supply chain risks.", "Prepare for CompTIA SecAI examination."],
    courseDesign: "Intensive 1-day elective building on MCC+ foundation. Requires MCC+ completion.",
    schedule: [{ day: "Day 1", items: ["AI-specific threat landscape", "AI security lifecycle management", "Autonomous system defence strategies", "AI governance and compliance"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "S$1,800 per pax (min 5, max 15)", corporateSmall: "S$1,800/pax", corporateLarge: "S$1,800/pax" },
  },
];

export const getCourseBySlug = (slug: string) =>
  courses.find((c) => c.slug === slug);
