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
import courseCloudDevOps1 from "@/assets/course-clouddevops-1.jpg";

const categoryImages: Record<string, string[]> = {
  "Agentic AI Workshop Series": [courseAgenticAi1, courseAgenticAi2, courseAgenticAi3],
  "Data Science": [courseDatascience1, courseDatascience2, courseDatascience3],
  "Fintech / Algorithmic Trading": [courseFintech1, courseFintech2, courseFintech3],
  "AI Automation and Agents": [courseAutomation1, courseAutomation2, courseAutomation3],
  "Cyber Defence": [courseCyber1, courseCyber2, courseCyber3],
  "AI Leadership and Governance": [courseLeadership1, courseLeadership2, courseLeadership3],
  "MCC+ Cyber Defence Certification": [courseCyber1, courseCyber2, courseCyber3],
  "Vibe Coding": [courseAutomation1, courseAutomation2, courseAutomation3],
  "Cloud Solutions & DevOps": [courseCloudDevOps1, courseCloudDevOps1, courseCloudDevOps1],
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
  i18nKey?: string;
}

export const courses: Course[] = [
  // ── Agentic AI Workshop Series (existing) ──
  {
    slug: "agentic-ai-foundations",
    i18nKey: "agenticFoundations",
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
    i18nKey: "agenticUseCase",
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
    i18nKey: "agenticDeploy",
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
    i18nKey: "pythonDataAnalytics",
    title: "Python Programming For Data Analytics",
    category: "Data Science",
    tagline: "Python Programming | Machine Learning | Data Analytics",
    heroImage: "/src/assets/course-python.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
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
    fees: { selfSponsored: "Contact for pricing", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },
  {
    slug: "certified-data-analyst",
    i18nKey: "certifiedDataAnalyst",
    title: "Certified Data Analyst — JCube Institute",
    category: "Data Science",
    tagline: "Industry-recognised Data Analyst certification designed for career advancement.",
    heroImage: "/src/assets/course-python.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    whyAttend: "The Certified Data Analyst programme equips you with the analytical skills and tools needed to extract insights from complex datasets. This certification is recognised across Singapore and ASEAN.",
    objectives: ["Master data wrangling, cleaning, and transformation techniques.", "Build proficiency in statistical analysis and hypothesis testing.", "Create compelling data visualizations and dashboards.", "Apply machine learning fundamentals to real-world business problems.", "Earn an industry-recognised certification from JCube Institute."],
    courseDesign: "A comprehensive programme combining theoretical foundations with hands-on projects using real-world datasets.",
    schedule: [{ day: "Programme Structure", items: ["Modular learning with flexible scheduling", "Hands-on lab sessions", "Capstone project and peer review", "Certification examination"] }],
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "Contact for pricing", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
  },
  {
    slug: "certified-data-scientist",
    i18nKey: "certifiedDataScientist",
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

  // ── Fintech / Algorithmic Trading ──
  {
    slug: "algorithmic-trading-level-1",
    i18nKey: "algoTradingL1",
    title: "Algorithmic Trading Mastery in Financial Markets for Non-Professionals — Level 1",
    category: "Fintech / Algorithmic Trading",
    tagline: "Take your first step towards becoming a successful trader in the trillion dollar Forex, Gold and Crypto markets.",
    heroImage: "/src/assets/course-agentic1.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    whyAttend:
      "Most top tier investors do not reveal their investment secrets but after profiting sufficiently through shrewd investment strategies over the years, our experts have decided to unlock their knowledge and skills to a wider community so that more can benefit from the exciting new market that has emerged with technology advances.\n\nThis course has been designed to teach you the essentials of trading on the world's most popular trading platform, Meta Trader 4 (MT4) and auto-trade the strategies or algorithm that you are comfortable with and learn to manage your risk to generate consistent income.\n\nAlgorithmic trading, also called 'Auto Trading' or 'System Trading,' uses electronic platforms such as MetaTrader 4/5 to enter trading orders with an algorithm. The main benefit of algorithmic trading is that it does not make decisions based on emotions. It can also help you take more trades, as you're not limited by your ability to sit at the computer and enter orders manually. It is essential to note that there are risks associated but all these can be mitigated and taught hands on in this unique course. Start making passive and sustainable income now!",
    whatYouLearn: [
      "Evaluate your personal trading profile",
      "Market profile of forex, gold and crypto markets on MT4 trading platform",
      "Choosing the right MT4 broker",
      "Power of leverage, compounding and concept of expected payout",
      "Financial mechanics of trading on MT4 platform",
      "Risks and rewards of trading",
      "Different timeframes and related trading styles",
      "Opportune timing, Favourable Factors and Right Frame of Mind trading framework",
      "Best trading hours and trading range",
      "Setup trading environment for high success rates with indicators, templates and settings",
      "How to make consistent income with just USD$300",
      "Trading psychology",
      "Auto trading or trading with Expert Advisors",
      "Free resources to find new tools, trading strategies, expert advisors and indicators",
      "Trading with funds from others – proprietary trading company",
      "Setup VPS to trade 24X7",
    ],
    objectives: [
      "Any aspiring trader who is just starting out and who wants to kickstart their financial trading journey to begin earning passive income using trading robots.",
      "Anyone who wants to learn about Expert Advisors using MT4's largest online store of trading robots, technical indicators, panels, libraries, analyzers in MT4.",
      "No prior trading experience is required. This MetaTrader course is designed for traders who are just starting out, or for those who have never used MetaTrader 4.",
    ],
    courseDesign:
      "Full Hands-On with Coaching Outside Classes. Classes are all On-Site at our CT Hub premises. Class sizes are capped to enhance students' learning experience. 3 evenings (7 pm to 10 pm), 9 hours total.",
    schedule: [
      { day: "Evening 1", items: ["Personal trading profile evaluation", "Market profile of forex, gold and crypto", "Choosing the right MT4 broker", "Power of leverage and compounding"] },
      { day: "Evening 2", items: ["Financial mechanics of trading on MT4", "Risks and rewards of trading", "Different timeframes and trading styles", "Trading framework and best trading hours"] },
      { day: "Evening 3", items: ["Setup trading environment for high success rates", "Auto trading with Expert Advisors", "Setup VPS to trade 24X7", "Trading psychology and resources"] },
    ],
    nextRunDate: "Run 11 – Registration Open\nContact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "SGD $2,750 (Full Fee Before Subsidies)", corporateSmall: "Special rates for JCube Institute Students/Alumni", corporateLarge: "Special rates for MINDEF CDA Alumni and MSI Members" },
  },
  {
    slug: "algorithmic-trading-level-2",
    i18nKey: "algoTradingL2",
    title: "Algorithmic Trading Mastery in Financial Markets for Non-Professionals — Level 2",
    category: "Fintech / Algorithmic Trading",
    tagline: "Advanced algorithmic trading strategies with backtesting, optimization, and proprietary EAs for the Forex, Gold and Crypto markets.",
    heroImage: "/src/assets/course-agentic2.png",
    jointlyOfferedBy: "JCube Institute & Metaskills Institute",
    whyAttend:
      "Building on Level 1, this advanced programme takes you deeper into the world of algorithmic trading. Most top tier investors do not reveal their investment secrets but after profiting sufficiently through shrewd investment strategies over the years, our experts have decided to unlock their knowledge and skills to a wider community.\n\nThis course has been designed to teach you the essentials of trading on the world's most popular trading platform, Meta Trader 4 (MT4) and auto-trade the strategies or algorithm that you are comfortable with and learn to manage your risk to generate consistent income.\n\nParticipants who have completed the course will be eligible to participate in a Metaskills Institute competition with $100 for top prize and $50 x 2 for consolation prizes.",
    whatYouLearn: [
      "Backtesting – learn how to examine the effectiveness of trading strategies",
      "Optimize on parameters of each strategy",
      "Get the ten most profitable EAs in the market and setup in your VPS",
      "Common strategies adopted by EAs developers",
      "Working knowledge of setting up VPS to optimize trading performance",
      "2 free EAs developed by trainer: FXV-Avalanche and FXV-Z-Scalper",
      "Proprietary Trading Companies and pass their assessment for funding your trading career",
    ],
    objectives: [
      "Any aspiring trader who wants to advance their algorithmic trading skills beyond Level 1.",
      "Anyone who wants to learn advanced Expert Advisor strategies, backtesting, and optimization.",
      "Pre-requisite: Participants are required to complete Algorithmic Trading Mastery Level 1.",
    ],
    courseDesign:
      "Jointly offered with JCube Institute (On-Site Classes). Classes are all On-Site at our CT Hub premises. Class sizes are capped to enhance students' learning experience. 3 evenings (7 pm to 10 pm), 9 hours total.",
    schedule: [
      { day: "Evening 1", items: ["Backtesting fundamentals", "Examining effectiveness of trading strategies", "Parameter optimization techniques"] },
      { day: "Evening 2", items: ["Top 10 most profitable EAs in the market", "Common strategies adopted by EA developers", "VPS setup for optimal trading performance"] },
      { day: "Evening 3", items: ["Proprietary trading companies and funding assessment", "Free proprietary EAs: FXV-Avalanche and FXV-Z-Scalper", "Competition briefing and next steps"] },
    ],
    nextRunDate: "Run 4 – Registration Open\nContact admissions@metaskills.sg for next run dates",
    fees: { selfSponsored: "SGD $3,500 (Full Fee Before Subsidies)", corporateSmall: "SGD $2,250 for JCube Institute Students/Alumni & MSI L1 Students", corporateLarge: "Contact for group rates" },
  },

  // ── AI Automation and Agents (MSI) ──
  {
    slug: "rise-of-ai-agents-2026",
    i18nKey: "riseAiAgents",
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
    i18nKey: "buildAiNoCode",
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
    i18nKey: "designAiPlainLang",
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
    i18nKey: "buildOpTools",
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
    i18nKey: "buildAiAssistant",
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
    i18nKey: "gptKnowledgeBase",
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
    i18nKey: "secureAgenticInfra",
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
    i18nKey: "aiTrainingDesign",
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
    i18nKey: "buildAiTutors",
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
    i18nKey: "cyberRolesThreats",
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
    i18nKey: "aiStrategyLeaders",
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
    i18nKey: "aiAccountability",
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
    i18nKey: "governingAiAgents",
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
    i18nKey: "aiWargaming",
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
    i18nKey: "mccFoundation",
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
    i18nKey: "mccSecurityOps",
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
    i18nKey: "mccThreatHunting",
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
    i18nKey: "mccOffensiveCyber",
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
    i18nKey: "mccDigitalForensics",
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
    i18nKey: "mccAiSecurity",
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

// ── Vibe Coding (Partnership with Tinkercademy) ──
courses.push({
  slug: "vibe-coding-for-digital-builders",
  i18nKey: "vibeCodingDigitalBuilders",
  title: "Vibe Coding for Digital Builders (Partnership with Tinkercademy)",
  category: "Vibe Coding",
  tagline: "Leverage AI-driven tools like ChatGPT, Figma, and Lovable to rapidly prototype, design, and deploy web applications.",
  heroImage: "/src/assets/course-agentic1.png",
  jointlyOfferedBy: "Tinkercademy & Metaskills Institute",
  duration: "2 Days",
  whyAttend:
    "Generative AI is reshaping the way organisations approach digital transformation, product design, and application development. This workshop provides hands-on experience in leveraging AI-driven tools like ChatGPT, Figma, and Lovable to rapidly prototype, design, and deploy web applications.\n\nIn this practical two-day course, you'll explore how generative AI can be effectively integrated into your organisation's workflow — starting with problem discovery and analysis using ChatGPT for deep research, solution proposals, user persona creation, and UAT writing. You'll then transition into visual design with Figma, creating user-centric prototypes and UI definitions. Finally, you'll employ Lovable, a powerful vibe-coding platform, to build and debug a complete web app backed by Supabase using natural language prompts.\n\nIMDA is one of our client pool for this programme.",
  objectives: [
    "Understand the fundamentals and practical applications of generative AI tools like ChatGPT.",
    "Conduct in-depth problem analysis and generate comprehensive solution proposals.",
    "Develop responsive user interface designs and wireframes using Figma.",
    "Rapidly build and deploy web applications through vibe coding with Lovable and Supabase.",
    "Evaluate the impact and integration strategies of AI tools within your organisation's digital transformation initiatives.",
  ],
  courseDesign:
    "A practical two-day workshop. Day 1 focuses on problem discovery, research, and solution design using ChatGPT. Day 2 covers UI prototyping with Figma and full-stack web app development with Lovable. Participants are provided with paid ChatGPT Business and Lovable plans for the duration of the course.",
  schedule: [
    { day: "Day 1", items: ["Problem discovery and analysis with ChatGPT", "Deep research and solution proposals", "User persona creation and UAT writing", "Product development cycle with AI"] },
    { day: "Day 2", items: ["Visual design and prototyping with Figma", "User-centric UI definitions", "Vibe coding with Lovable and Supabase", "Build, debug, and deploy a complete web app"] },
  ],
  nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  fees: {
    selfSponsored: "16 pax and above: S$650/pax | 12–15 pax: S$750/pax | 8–11 pax: S$870/pax",
    corporateSmall: "7 or fewer participants: S$6,800 flat fee",
    corporateLarge: "Contact for group rates",
  },
});

// ── Cloud Solutions Architecture & DevOps Engineering ──
courses.push({
  slug: "aws-cloud-solutions-architecture-devops",
  i18nKey: "awsCloudDevOps",
  title: "Advanced Certificate in AWS Cloud Solutions Architecture and DevOps Engineering",
  category: "Cloud Solutions & DevOps",
  tagline: "Design resilient cloud architectures, implement automated testing, and establish robust DevOps pipelines.",
  heroImage: "/src/assets/course-clouddevops-1.jpg",
  duration: "6 Modules",
  whyAttend:
    "Cloud computing continues to reshape how organisations build, ship, and operate software at scale. This programme equips technology professionals with the end-to-end competencies needed to design resilient cloud architectures, implement automated testing strategies, and establish robust DevOps pipelines, all within a leading public cloud ecosystem.\n\nThrough six progressive modules, participants move from design thinking and prototyping through cloud service orchestration, test automation, CI/CD pipeline construction, and infrastructure-as-code practices, culminating in a team-based capstone that mirrors a real-world product delivery cycle. Every session combines instructor-led walkthroughs with hands-on lab exercises, ensuring participants leave with portfolio-ready artefacts and the confidence to architect production-grade solutions.\n\nWhether you are a software developer seeking to deepen your cloud fluency, a technical project manager aiming to streamline delivery workflows, or a business analyst bridging the gap between strategy and implementation, this programme provides an immersive, skills-first pathway guided by certified cloud practitioners and experienced technologists.",
  objectives: [
    "Apply design thinking frameworks and rapid prototyping techniques to translate business requirements into cloud application blueprints.",
    "Architect cloud-based solutions by selecting, configuring, and integrating core infrastructure, compute, storage, and database services.",
    "Implement test-driven development (TDD) practices, including unit, integration, and end-to-end testing, within cloud development environments.",
    "Construct CI/CD pipelines that automate the build, test, release, and deployment stages of the software delivery lifecycle.",
    "Operationalise DevOps principles by provisioning infrastructure as code, decomposing applications into microservices, and configuring real-time monitoring and alerting.",
    "Synthesise skills from all prior modules in a collaborative capstone project that designs, builds, and delivers a cloud-hosted application through a fully automated DevOps workflow.",
  ],
  courseDesign:
    "Six progressive modules combining instructor-led walkthroughs with hands-on lab exercises. Each module builds on the previous, progressing from design thinking through cloud architecture, test automation, CI/CD pipelines, DevOps engineering, and culminating in a team-based capstone project.",
  schedule: [
    { day: "Module 1: Design Thinking and Cloud Application Prototyping", items: ["Structured design thinking methodologies", "Stanford Design Thinking process (Empathise, Define, Ideate, Prototype, Test)", "UI wireframes and interactive prototypes", "Software diagramming and architecture blueprints", "Team presentation of design package"] },
    { day: "Module 2: Core Cloud Services and Solution Architecture", items: ["Cloud computing vs on-premises infrastructure", "Identity and access management policies", "Core cloud services: storage, compute, databases, hosting", "Programmatic interaction via SDKs and CLI tools", "Professional cloud architecture diagrams"] },
    { day: "Module 3: Automated Testing and Test-Driven Development", items: ["Unit tests with PyTest and Jest", "Agile user stories to Gherkin test scenarios", "BDD test suite auto-generation", "End-to-end testing with Cypress or Selenium", "Test-first development workflow integration"] },
    { day: "Module 4: Building CI/CD Pipelines for Automated Software Delivery", items: ["CI/CD paradigm and automated pipelines", "Cloud-based code services configuration", "Multi-stage CI/CD pipeline assembly", "Logging and audit trail implementation", "Monitoring dashboards and alerting rules"] },
    { day: "Module 5: DevOps Engineering, Microservices, and Infrastructure as Code", items: ["DevOps culture, practices, and tooling", "Microservices with container orchestration and serverless", "Infrastructure-as-code templates", "Real-time monitoring, log aggregation, and alerting"] },
    { day: "Module 6: Capstone Project — Cloud Application Delivery", items: ["Software development lifecycle mapping", "Architect, build, and deploy cloud-hosted web application", "Complete CI/CD pipeline implementation", "Professional design documentation", "Team presentation and architecture review"] },
  ],
  nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  fees: { selfSponsored: "S$9,000 per pax", corporateSmall: "Contact for corporate rates", corporateLarge: "Contact for group rates" },
});

// ── Fintech / AI for Finance Professionals ──
courses.push({
  slug: "ai-literacy-for-finance-professionals",
  i18nKey: "aiLiteracyFinance",
  title: "AI Literacy for Finance Professionals",
  category: "Fintech / Algorithmic Trading",
  tagline: "Move from passive awareness to operational implementation of AI in regulated financial services.",
  heroImage: "/src/assets/course-fintech-1.jpg",
  duration: "1 Day (8 hours)",
  whyAttend:
    "This is a 1-day instructor-led workshop designed for financial services professionals who need to move from passive awareness to operational implementation of AI.\n\nUnlike general AI courses, this programme is contextualised for the unique constraints of the financial sector. The journey moves rapidly from Foundations (GenAI vs. ML) to Execution (CRAFT Prompting) to Optimisation (Workflow Mapping) and finally to Supervision (Critical Evaluation and Ethics).\n\nThe programme culminates in a practical assessment where learners demonstrate their ability to implement AI tools within a regulated business environment, applying VERIFY and FEAT frameworks aligned to MAS guidelines.",
  whatYouLearn: [
    "Demystify GenAI: understand the mechanics of LLMs and how they apply to banking, insurance and wealth management.",
    "Master prompt engineering using the CRAFT framework for high-precision professional outputs.",
    "Optimise workflows with the 3A framework (Automate / Augment / Amplify).",
    "Govern outputs with the VERIFY and FEAT frameworks to manage hallucinations, bias and MAS compliance.",
    "Identify red-flag tasks unsuitable for AI in regulated workflows.",
    "Apply human-in-the-loop accountability and escalation protocols.",
  ],
  objectives: [
    "Digital Transformation Executive",
    "Business Process Improvement Executive",
    "Account Operations Analyst, Transaction Banking Operations Analyst",
    "Client Service Officer / Client Support Service Officer",
    "Pre-requisites: Diploma or degree, WPL/WPN Level 4 English & numeracy proficiency.",
  ],
  courseDesign:
    "1-day instructor-led physical workshop (8 hours, 9am–6pm). Trainer-to-trainee ratio 1:20. Written assessment on Day 1. Eligible for IBF-STS funding (up to 70% subsidy, cap S$3,000), SkillsFuture Credit and UTAP for NTUC members.",
  schedule: [
    { day: "Unit 1: GenAI Fundamentals & The Financial Landscape", items: ["The AI tech spectrum: AI, ML, GenAI", "Predictive vs Generative AI in finance", "How LLMs work — training vs generation", "Boundaries, limitations and confidentiality risks", "High-value use cases across risk, ops, CX and trading"] },
    { day: "Unit 2: Precision Prompting via the CRAFT Framework", items: ["Anatomy of a prompt", "CRAFT: Context, Role, Action, Format, Tone", "Context & role engineering for banking personas", "Structural formats for professional outputs", "Prompt iteration and team reuse"] },
    { day: "Unit 3: Workflow Analysis & AI Integration", items: ["The 3A framework — Automate, Augment, Amplify", "Task suitability checklist for quick wins", "Extracting inputs, outputs and constraints", "Measuring effectiveness (time saved, quality)", "Red flags: confidential data and ethical judgment"] },
    { day: "Unit 4: Critical Evaluation & Responsible AI (FEAT)", items: ["AI failure modes: hallucinations, bias, cutoffs", "VERIFY framework — 6-step systematic review", "FEAT principles: Fairness, Explainability, Accountability, Transparency", "Human-in-the-loop accountability", "Escalation protocols for high-stakes decisions"] },
  ],
  nextRunDate: "Next run: 1 Jul 2026 — Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$700 (Full fee, before subsidies & GST)",
    corporateSmall: "S$210–S$350 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy, SkillsFuture Credit & UTAP",
  },
});

courses.push({
  slug: "ai-strategy-governance-ethical-leadership",
  i18nKey: "aiStrategyGovernance",
  title: "AI Strategy, Governance & Ethical Leadership",
  category: "Fintech / Algorithmic Trading",
  tagline: "Move beyond playing with AI to implementing it strategically — for financial services leaders.",
  heroImage: "/src/assets/course-fintech-2.jpg",
  duration: "1 Day (8 hours)",
  whyAttend:
    "This is a 1-day instructor-led workshop designed for financial services leaders who need to move beyond 'playing' with AI to 'implementing' it strategically.\n\nThe programme moves rapidly from Strategy (Value & Prioritisation) to Execution (Build vs Buy, Roadmap) to Governance (MAS Guidelines, Policy) and finally People (Capability Building & Change Management). It culminates in a practical assessment where learners apply these frameworks to real-world banking scenarios.",
  whatYouLearn: [
    "Identify high-value, feasible AI opportunities for your department.",
    "Formulate a compliant AI adoption strategy aligned to business objectives.",
    "Govern risks using MAS FEAT and TRM principles and the Three Lines of Defence.",
    "Lead team role evolution required for an AI-augmented future.",
    "Design Build vs Buy vs Partner decisions for financial institutions.",
    "Build a 30-60-90 day change management plan.",
  ],
  objectives: [
    "Head of Digital Transformation",
    "Head of Innovation and Process Excellence",
    "Head of Client Service / Client Support Services Director",
    "Head of Sustainability",
    "Pre-requisites: Diploma or degree, WPL/WPN Level 4 English & numeracy proficiency.",
  ],
  courseDesign:
    "1-day instructor-led physical workshop (8 hours, 9am–6pm). Trainer-to-trainee ratio 1:20. Written assessment. Eligible for IBF-STS funding (up to 70% subsidy, cap S$3,000) and SkillsFuture Credit.",
  schedule: [
    { day: "Unit 1: AI Value Creation & Strategic Prioritisation", items: ["Predictive vs Generative vs Agentic AI", "Identifying efficiency, revenue and risk value drivers", "Impact-Feasibility matrix for portfolio prioritisation", "Task-Technique matrix for workflow mapping", "Systems thinking — ripple effects and dependencies"] },
    { day: "Unit 2: Formulating AI Adoption Strategy", items: ["Strategic alignment to core business objectives", "Build vs Buy vs Partner decision framework", "3A framework — Automate, Augment, Amplify", "6-stage implementation roadmap: Pilot to Scale", "Reimagining roles: from execution to oversight"] },
    { day: "Unit 3: AI Governance, Risk & Compliance", items: ["MAS TRM Guidelines and Three Lines of Defence", "Operationalising FEAT principles", "Drafting policy scopes and authority protocols", "PDPA compliance and preventing GenAI data leakage", "Managing model and vendor risk"] },
    { day: "Unit 4: Building Team Capability & Leading Change", items: ["3A capability model — Awareness, Adaptability, Application", "Diagnosing skill gaps and designing interventions", "Managing resistance ('AI will take my job')", "Communicating value to stakeholders", "30-60-90 day action plan"] },
  ],
  nextRunDate: "Next run: 6 Jul 2026 — Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$1,000 (Full fee, before subsidies & GST)",
    corporateSmall: "S$300–S$500 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy & SkillsFuture Credit",
  },
});

courses.push({
  slug: "ai-fluency-for-finance-professionals",
  i18nKey: "aiFluencyFinance",
  title: "AI Fluency for Finance Professionals",
  category: "Fintech / Algorithmic Trading",
  tagline: "From AI users to AI architects — build production-grade Agents with Context Engineering and RAG.",
  heroImage: "/src/assets/course-fintech-3.jpg",
  duration: "2 Days (16 hours)",
  whyAttend:
    "This intensive hands-on workshop transforms participants from AI users into AI architects. While prompt engineering focuses on the 'ask,' Context Engineering focuses on the 'environment.'\n\nOver two days, participants master the 9 components of context, learn to structure financial data for RAG (Retrieval-Augmented Generation), and work in teams to build a fully functional AI Agent prototype on Microsoft Copilot Studio that solves a real-world business friction point — under strict banking compliance and risk standards.",
  whatYouLearn: [
    "Move beyond basic prompting to Context Engineering — designing data, memory and tools.",
    "Architect, build and deploy functional AI Agents on Microsoft Copilot Studio.",
    "Structure financial data for Retrieval-Augmented Generation (RAG).",
    "Apply advanced prompt patterns including chain-of-thought and persona constraints.",
    "Implement business rules, guardrails and compliance controls in agent design.",
    "Conduct adversarial 'red team' testing on agent prototypes.",
  ],
  objectives: [
    "Business Leaders",
    "Digital Transformation Executive",
    "Business Process Improvement Executive",
    "Account / Transaction Banking Operations Analyst",
    "Client Service Officer / Client Support Service Officer",
    "Pre-requisites: Diploma or degree, WPL/WPN Level 4 English & numeracy proficiency.",
  ],
  courseDesign:
    "2-day intensive hands-on physical workshop (16 hours over 2 weekdays, 9am–6pm with 1–2pm break). Trainer-to-trainee ratio 1:20. Team-based agent build on Microsoft Copilot Studio. Eligible for IBF-STS funding (up to 70% subsidy, cap S$3,000), SkillsFuture Credit and UTAP for NTUC members.",
  schedule: [
    { day: "Day 1 — Unit 1: Context Engineering Foundations", items: ["From prompts to systems — 9 components of context", "Agent architecture: Chatbot vs Copilot vs Agent", "Microsoft Copilot Studio platform intro", "Project scoping — defining the business problem"] },
    { day: "Day 1 — Unit 2: Advanced System Instructions & Prompt Patterns", items: ["Designing system prompts ('God Mode' instructions)", "Chain-of-thought and advanced prompt patterns", "Role and constraint engineering — personas", "Building a reusable prompt library"] },
    { day: "Day 1 — Unit 3: Knowledge Framework Design (RAG)", items: ["5-Step Context Method — Gather to Document", "Document structuring and chunking", "Knowledge auditing and data cleaning", "Designing for retrieval quality"] },
    { day: "Day 1 — Unit 4: Stakeholder Analysis & Change Readiness", items: ["Stakeholder mapping", "Managing resistance and adoption curves", "Skill gap analysis"] },
    { day: "Day 2 — Unit 5: Workflow Logic & Agent Construction", items: ["Configuring RAG in Copilot Studio", "Topic routing — the 'switchboard'", "Business rules and guardrails (If/Then logic)", "Error handling, fallbacks and multi-turn flows"] },
    { day: "Day 2 — Unit 6: Integration, Testing & Deployment", items: ["Adversarial testing ('red teaming')", "Performance metrics: accuracy and latency", "Deployment controls — access and versioning", "Business continuity planning"] },
  ],
  nextRunDate: "Next run: 22–23 Jul 2026 — Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$1,400 (Full fee, before subsidies & GST)",
    corporateSmall: "S$420–S$700 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy, SkillsFuture Credit & UTAP",
  },
});

// ── Winning Customers with AI for RM (3-part series) ──
courses.push({
  slug: "rm-client-engagement-strategies",
  i18nKey: "rmEngagement",
  title: "Winning Customers with AI for RM — Part 1: Client Engagement Strategies",
  category: "Fintech / Algorithmic Trading",
  tagline: "Engaging and connecting with clients — read signals, adapt communication, and build compliant networks with AI.",
  heroImage: "/src/assets/course-fintech-1.jpg",
  duration: "1 Day (7 hours)",
  whyAttend:
    "Client Engagement Strategies equips Relationship Managers and client-facing Financial Planners to strategically engage and win clients. Participants learn to read client cues and signals, adapt their communication and language to different client types and segments, and build and leverage professional networks and partnerships — all within compliance.\n\nThe course is hands-on with AI. Participants build a Client Engagement Assistant that captures effective engagement approaches, and use a Prospect and Segment Scout for compliant prospecting, with a Compliance Check agent keeping every client-facing output within the line. The engagement approaches captured here carry through the series and shape the client experience in Part 3. The embedded Future Enabled Skill of Data Fluency is developed as participants interpret market and client data.",
  whatYouLearn: [
    "Develop client engagement strategies that adapt communication to different client types and segments, using research-based listening and client cues.",
    "Identify and engage prospects across retail and private / HNW segments using market and client data.",
    "Build and leverage professional networks and partnerships to generate compliant business and referrals.",
    "Engage and communicate within financial-promotion and data-protection requirements.",
    "Use the Client Engagement Assistant and Prospect and Segment Scout agents to prepare and personalise client engagement.",
    "Apply alternative growth levers where direct referrals are unlikely (HNWI reality).",
  ],
  objectives: [
    "Retail Banking Relationship Managers responsible for engaging and acquiring clients.",
    "Client-facing Financial Planners across retail and private / high-net-worth segments.",
    "Pre-requisites: Working RM or Financial Planner, or equivalent client-facing experience.",
    "Basic digital literacy required.",
    "TSCs covered: Customer Acquisition Management (L4), Networking (L4), Partnership Management (L3).",
  ],
  courseDesign:
    "1-day instructor-led, face-to-face workshop (approx. 7 training hours, 09:00–17:30 inclusive of breaks and assessment). Class size 12–20. Hands-on with AI tools inside the host's approved Microsoft 365 Copilot (Premium) and Copilot Agent Studio environment. IBF-STS accreditation proposed.",
  schedule: [
    { day: "09:00 – Welcome & Series Frame", items: ["The series and the client lifecycle", "The compliance-first frame", "Setup of the Copilot environment"] },
    { day: "09:15 – Reading & Engaging the Client", items: ["Client cues and signals", "Research-based listening", "Adapting communication and language by client type and segment", "Build the engagement approach with the Client Engagement Assistant"] },
    { day: "11:00 – Prospecting & Networks", items: ["Segment-aware prospecting", "Networking strategy", "The HNWI referral reality and alternative levers", "Prospect and Segment Scout; Networking Prep"] },
    { day: "13:30 – Partnerships & Compliant Outreach", items: ["Partner and intermediary channels", "Professional credibility", "Financial-promotion guardrails", "Partner Outreach; Compliance Check agent"] },
    { day: "15:15 – Build Your Engagement Plan", items: ["Build an engagement and pipeline plan", "Client engagement role-play", "Apply all tools end-to-end"] },
    { day: "16:30 – Assessment", items: ["Part A: Engagement role-play (read the client, adapt communication)", "Part B: Engagement and pipeline plan", "Compliance checklist applied to both"] },
  ],
  nextRunDate: "Next run: Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$700 (Full fee, before subsidies & GST)",
    corporateSmall: "S$210–S$350 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy (cap S$3,000), SkillsFuture Credit & UTAP",
  },
});

courses.push({
  slug: "rm-needs-analysis-portfolio-management",
  i18nKey: "rmNeedsAnalysis",
  title: "Winning Customers with AI for RM — Part 2: Client Behaviour Needs Analysis and Portfolio Management",
  category: "Fintech / Algorithmic Trading",
  tagline: "Analyse client needs and grow their portfolio across life stages — with AI-assisted suitability and fair framing.",
  heroImage: "/src/assets/course-fintech-2.jpg",
  duration: "1 Day (7 hours)",
  whyAttend:
    "Client Behaviour Needs Analysis and Portfolio Management develops the analytical and growth core of the Relationship Manager role. Participants learn to analyse client behaviour, finances and needs, and to apply a portfolio-management mindset: growing a single client's holdings across their life stages — for example an HDB loan, then an executive condominium, then a private condominium upgrade — through suitable and well-timed next steps.\n\nParticipants use a Pitch Playbook agent to turn needs into two matched options, and a Portfolio Growth Planner agent to map each client's product journey and flag the next suitable opportunity, always within suitability and fair dealing. The embedded Future Enabled Skill of Data Fluency is developed as participants interpret client financial and portfolio data.",
  whatYouLearn: [
    "Analyse client behaviour, financial situation and needs to inform suitable solutions.",
    "Apply a portfolio-management mindset to grow holdings across life stages through suitable, well-timed next steps.",
    "Identify and develop cross-sell and upsell opportunities within existing relationships, within suitability.",
    "Use the Pitch Playbook and Portfolio Growth Planner agents to prepare matched options and a client portfolio plan.",
    "Present recommendations using fair, transparent framing aligned with suitability and fair-dealing duties.",
    "Interpret client financial and portfolio data with Data Fluency.",
  ],
  objectives: [
    "Retail Banking Relationship Managers advising and growing client holdings over time.",
    "Client-facing Financial Planners responsible for portfolio expansion within suitability.",
    "Pre-requisites: Working RM or Financial Planner, or equivalent client-facing experience.",
    "Basic digital literacy required.",
    "TSCs covered: Financial Analysis (L3), Account Management (L4), Business Opportunities Development (L4).",
  ],
  courseDesign:
    "1-day instructor-led, face-to-face workshop (approx. 7 training hours, 09:00–17:30 inclusive of breaks and assessment). Class size 12–20. Hands-on with AI tools inside the host's approved Microsoft 365 Copilot (Premium) and Copilot Agent Studio environment. IBF-STS accreditation proposed.",
  schedule: [
    { day: "09:00 – Welcome", items: ["From engaging to growing the client", "Series recap and Part 2 frame"] },
    { day: "09:15 – Client Behaviour & Needs Analysis", items: ["Analysing client behaviour, financial picture and needs", "Interpreting client financial data", "Financial Needs Analysis prompt library"] },
    { day: "11:00 – The Portfolio-Management Mindset", items: ["Life-stage product journeys (HDB → EC → condo)", "Next-best suitable step", "Cross-sell and upsell within suitability", "Portfolio Growth Planner agent"] },
    { day: "13:30 – Matched Options & Fair Recommendation", items: ["Building two suitable options", "Fair framing of gains and risks", "Pitch Playbook; Fair-Framing; Compliance Check"] },
    { day: "15:15 – Build a Portfolio Plan", items: ["Build a client portfolio growth plan", "Recommendation role-play", "Apply all tools end-to-end"] },
    { day: "16:30 – Assessment", items: ["Part A: Needs-analysis and recommendation role-play", "Part B: Multi-stage, suitability-gated client portfolio growth plan", "Compliance checklist applied to both"] },
  ],
  nextRunDate: "Next run: Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$700 (Full fee, before subsidies & GST)",
    corporateSmall: "S$210–S$350 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy (cap S$3,000), SkillsFuture Credit & UTAP",
  },
});

courses.push({
  slug: "rm-client-experience-retention",
  i18nKey: "rmExperienceRetention",
  title: "Winning Customers with AI for RM — Part 3: Enhancing Client Experience and Building Retention Strategies",
  category: "Fintech / Algorithmic Trading",
  tagline: "Turn engagement into a lasting client experience — sustain, retain, recover, and protect clients from digital fraud.",
  heroImage: "/src/assets/course-fintech-3.jpg",
  duration: "1 Day (7 hours)",
  whyAttend:
    "Enhancing Client Experience and Building Retention Strategies equips Relationship Managers and client-facing Financial Planners to turn strong engagement into a superior, lasting client experience and a retained book. Building on the engagement approaches captured by the AI in Part 1, participants learn to sustain relationships, deliver a consistent client experience, handle service challenges so they strengthen the relationship, and protect clients from digitally-enabled fraud.\n\nParticipants use a Client Experience and Retention agent to prepare reviews, nurture relationships and flag retention risks, supported by a Compliance Check agent. The embedded Future Enabled Skills are Data Fluency, as participants interpret portfolio and client-experience data, and Digitally-Enabled Fraud, as they learn to recognise and respond to scams that target clients.",
  whatYouLearn: [
    "Sustain long-term client relationships and deliver a consistent, high-quality client experience.",
    "Design and apply client retention strategies for an existing portfolio.",
    "Handle service challenges and complaints to recover and strengthen relationships.",
    "Recognise and respond to digitally-enabled fraud and scams that target clients.",
    "Use the Client Experience and Retention agent and prompt libraries to nurture and pressure-test for compliance.",
    "Reuse Part 1 engagement profiles to tailor the client experience.",
  ],
  objectives: [
    "Retail Banking Relationship Managers retaining, servicing and growing an existing client portfolio.",
    "Client-facing Financial Planners responsible for long-term client relationships.",
    "Pre-requisites: Working RM or Financial Planner, or equivalent client-facing experience.",
    "Basic digital literacy required.",
    "TSCs covered: Customer Relationship Management (L3), Service Challenges (L4). FES: Data Fluency, Digitally-Enabled Fraud.",
  ],
  courseDesign:
    "1-day instructor-led, face-to-face workshop (approx. 7 training hours, 09:00–17:30 inclusive of breaks and assessment). Class size 12–20. Hands-on with AI tools inside the host's approved Microsoft 365 Copilot (Premium) and Copilot Agent Studio environment. IBF-STS accreditation proposed.",
  schedule: [
    { day: "09:00 – Welcome", items: ["From winning to keeping", "Why experience drives retention"] },
    { day: "09:15 – Client Experience & Relationships", items: ["Experience standards", "Sustaining relationships", "Part 1 engagement profiles feed a tailored experience", "Client Experience and Retention agent"] },
    { day: "11:00 – Retention Strategies", items: ["Retention planning", "Nurture cadence", "Identifying at-risk clients", "Relationship Nurture prompt library"] },
    { day: "13:30 – Service Recovery & Client Protection", items: ["Handling complaints and service challenges", "Protecting clients from digitally-enabled fraud", "Service Recovery; Compliance Check"] },
    { day: "15:15 – Build a Retention Plan", items: ["Build a client experience and retention plan", "Service-recovery role-play", "Apply all tools end-to-end"] },
    { day: "16:30 – Assessment", items: ["Part A: Relationship-review and service-recovery role-play", "Part B: Client experience and retention plan", "Compliance checklist applied to both"] },
  ],
  nextRunDate: "Next run: Contact admissions@metaskills.sg or WhatsApp +65 8948 3482 to enrol",
  fees: {
    selfSponsored: "S$700 (Full fee, before subsidies & GST)",
    corporateSmall: "S$210–S$350 (after IBF-STS subsidy, SC/PR eligible)",
    corporateLarge: "Eligible for IBF-STS up to 70% subsidy (cap S$3,000), SkillsFuture Credit & UTAP",
  },
});

export const getCourseBySlug = (slug: string) =>
  courses.find((c) => c.slug === slug);


