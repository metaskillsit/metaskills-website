import type { Course } from "./courses";

// ── Advanced Certificate in AI-Powered Business Analytics ──
// Six stackable 2-day modules. Each module can be taken individually or as
// part of the full Advanced Certificate.
export const AI_POWERED_BA_CATEGORY = "Certifications";

const sharedFees = {
  selfSponsored: "S$750 per pax",
  corporateSmall: "S$6,000 per class",
  corporateLarge: "S$6,000 per class",
};

const sharedMeta = {
  duration: "2 Days",
  deliveryMode: "In-Person, Instructor-Led",
  fundingStatus: "Non-SSG-Funded",
  certificationStatus: "Module of Advanced Certificate",
  level: "Intermediate",
  courseDateStatus: "Contact admissions@metaskills.sg for next run dates",
  heroImage: "/src/assets/programmes-certifications.jpg",
};

export const aiPoweredBusinessAnalyticsCourses: Course[] = [
  {
    slug: "foundations-business-analytics-ai-concepts-frameworks",
    i18nKey: "aiBizAnalyticsModule1",
    title: "Foundations of Business Analytics and Artificial Intelligence (AI): Concepts and Frameworks",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Build the analytical mindset and AI literacy that underpin every modern business-decision workflow.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Foundations of Business Analytics and AI module.",
    seoTitle: "Foundations of Business Analytics and AI | Metaskills Institute",
    seoDescription:
      "Build analytical thinking and AI literacy through a two-day in-person module covering business analytics concepts, frameworks, and practical decision-making.",
    whyAttend:
      "Business analytics and artificial intelligence are now core to how organisations plan, operate and compete. This foundational module introduces the analytics lifecycle, data literacy, and the practical AI concepts that professionals need to ask better questions, interpret evidence, and contribute to data-informed decisions.\n\nParticipants explore real business scenarios, learn how structured thinking improves decision quality, and understand where AI co-pilots fit into the analytics workflow. The module establishes the common language and frameworks used across the rest of the Advanced Certificate.",
    objectives: [
      "Explain the business analytics lifecycle and its role in organisational decision-making.",
      "Distinguish between descriptive, diagnostic, predictive, and prescriptive analytics.",
      "Apply structured problem-framing techniques to business questions.",
      "Understand AI and generative AI concepts relevant to business analytics.",
      "Identify ethical, governance, and data-quality considerations in analytics projects.",
      "Map analytics use cases to business value and stakeholder needs.",
    ],
    whoShouldAttend: [
      "Analysts and business professionals starting their analytics journey",
      "Managers who consume or commission data-driven insights",
      "Finance, operations, marketing, and HR professionals using business data",
      "Individuals preparing for the Advanced Certificate in AI-Powered Business Analytics",
      "Anyone seeking a structured introduction to analytics and AI concepts",
    ],
    prerequisites: [
      "Basic working knowledge of Microsoft Excel",
      "Familiarity with business reports and spreadsheets",
      "Comfort with fundamental mathematics and logical reasoning",
      "No programming background required",
    ],
    courseDesign:
      "A two-day in-person workshop combining instructor-led discussion, case-based exercises, and collaborative activities. Participants apply frameworks to realistic business problems and begin using AI co-pilots to accelerate analysis and documentation.",
    schedule: [
      {
        day: "Day 1 — Analytics Concepts and Problem Framing",
        items: [
          "The analytics lifecycle: ask, prepare, analyse, interpret, act",
          "Descriptive, diagnostic, predictive, and prescriptive analytics",
          "Structured problem framing and stakeholder mapping",
          "Data types, sources, and quality fundamentals",
          "Case study: translating a business question into an analytics plan",
        ],
      },
      {
        day: "Day 2 — AI Foundations and Decision Frameworks",
        items: [
          "AI, machine learning, and generative AI in plain language",
          "How AI co-pilots assist analysts: opportunities and limits",
          "Ethics, bias, and governance in AI-assisted analytics",
          "Frameworks for evaluating analytical evidence",
          "Capstone activity: present a data-informed recommendation",
        ],
      },
    ],
    practicalActivities: [
      "Framing a business question using a structured analytics canvas",
      "Evaluating data quality and suitability for analysis",
      "Using an AI co-pilot to draft an analysis plan",
      "Reviewing an analytics output for bias and business relevance",
      "Presenting a concise, evidence-based recommendation",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
  {
    slug: "data-preparation-cleaning-power-query-ai-copilots",
    i18nKey: "aiBizAnalyticsModule2",
    title: "Data Preparation and Data Cleaning with Power Query and Artificial Intelligence (AI) Co-Pilots",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Transform messy, disconnected data into clean, analysis-ready datasets using Power Query and AI assistance.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Data Preparation and Cleaning with Power Query module.",
    seoTitle: "Data Preparation and Cleaning with Power Query | Metaskills Institute",
    seoDescription:
      "Learn to clean, shape, and combine data with Power Query and AI co-pilots in a two-day in-person business analytics module.",
    whyAttend:
      "Clean, well-structured data is the foundation of reliable analysis. Yet most analysts spend the majority of their time preparing data rather than analysing it. This module focuses on the practical skills needed to import, clean, transform, and combine data efficiently using Microsoft Power Query, with AI co-pilots accelerating repetitive tasks.\n\nParticipants work through realistic datasets with common quality issues — inconsistent formats, missing values, duplicates, and fragmented sources — and leave with reusable patterns they can apply immediately.",
    objectives: [
      "Import data from multiple sources into Power Query.",
      "Identify and resolve common data-quality issues.",
      "Transform, reshape, and combine datasets using the Power Query interface.",
      "Use AI co-pilots to suggest transformations and document steps.",
      "Build refreshable data pipelines that update automatically.",
      "Apply data-cleaning standards that improve reproducibility.",
    ],
    whoShouldAttend: [
      "Analysts who prepare data for reporting or modelling",
      "Excel users moving from manual cleanup to automated workflows",
      "Finance, operations, and marketing professionals working with multiple data sources",
      "Participants preparing for later modules in the Advanced Certificate",
    ],
    prerequisites: [
      "Basic working knowledge of Microsoft Excel",
      "Familiarity with spreadsheets, columns, rows, and formulas",
      "Experience working with business data",
      "Completion of Module 1 is recommended but not required",
    ],
    courseDesign:
      "A two-day in-person, hands-on workshop. Each concept is introduced through a short demonstration, followed by guided exercises using Power Query in Excel or Power BI. AI co-pilots are used to suggest transformations and explain M code.",
    schedule: [
      {
        day: "Day 1 — Import, Inspect, and Clean",
        items: [
          "Connecting to Excel, CSV, databases, and web sources",
          "Profiling data: types, distributions, and quality issues",
          "Handling missing values, duplicates, and inconsistent formats",
          "Text, date, and number standardisation techniques",
          "Guided lab: cleaning a multi-source sales dataset",
        ],
      },
      {
        day: "Day 2 — Transform, Combine, and Automate",
        items: [
          "Pivoting, unpivoting, and grouping data",
          "Merging and appending queries across sources",
          "Parameterising queries for reusability",
          "Using AI co-pilots to generate and explain transformations",
          "Capstone: build a refreshable data-prep pipeline",
        ],
      },
    ],
    practicalActivities: [
      "Connecting to multiple data sources in Power Query",
      "Cleaning a real-world dataset with missing and inconsistent values",
      "Merging related tables into an analysis-ready model",
      "Using an AI co-pilot to document transformation steps",
      "Building a query that refreshes with new data automatically",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
  {
    slug: "business-analytics-models-dax-chatgpt",
    i18nKey: "aiBizAnalyticsModule3",
    title: "Creating Business Analytics Models and Measures with Data Analysis Expressions (DAX) and ChatGPT",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Move beyond flat tables by building relational models and writing DAX measures that answer real business questions.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Business Analytics Models and DAX module.",
    seoTitle: "Business Analytics Models and DAX with ChatGPT | Metaskills Institute",
    seoDescription:
      "Learn to build relational data models and write DAX measures with ChatGPT assistance in a two-day in-person business analytics module.",
    whyAttend:
      "Reports and dashboards are only as good as the models behind them. This module teaches participants how to design clean, relational business analytics models and write Data Analysis Expressions (DAX) measures that produce accurate, reusable calculations.\n\nWith ChatGPT as a co-pilot, participants learn to explain model logic, debug formulas, and extend their analytical vocabulary. The emphasis is on building models that are easy to understand, maintain, and scale.",
    objectives: [
      "Design star-schema and relational models for business data.",
      "Create relationships, hierarchies, and calculated columns correctly.",
      "Write core DAX measures including SUMX, CALCULATE, and FILTER.",
      "Use ChatGPT to explain, debug, and extend DAX formulas.",
      "Apply time-intelligence patterns for period-over-period analysis.",
      "Validate model accuracy and troubleshoot common errors.",
    ],
    whoShouldAttend: [
      "Analysts building self-service models in Power BI or Excel Power Pivot",
      "Finance and operations professionals creating calculated KPIs",
      "Report developers who want to move beyond simple aggregations",
      "Participants preparing for dashboard and decision-support modules",
    ],
    prerequisites: [
      "Comfort with Excel formulas and pivot tables",
      "Familiarity with Power Query or data-cleaning concepts",
      "Basic understanding of tables, columns, and relationships",
      "Completion of Module 2 is recommended but not required",
    ],
    courseDesign:
      "A two-day in-person, hands-on workshop. Participants build models in Power BI or Excel Power Pivot, write DAX measures progressively, and use ChatGPT to accelerate learning and debugging.",
    schedule: [
      {
        day: "Day 1 — Relational Modelling Fundamentals",
        items: [
          "From flat tables to dimensional models",
          "Facts, dimensions, and star-schema design",
          "Creating and managing relationships",
          "Calculated columns vs measures",
          "Lab: build a sales and product model",
        ],
      },
      {
        day: "Day 2 — DAX Measures and Time Intelligence",
        items: [
          "Filter context and evaluation context",
          "Core functions: SUMX, AVERAGEX, CALCULATE, FILTER",
          "Using ChatGPT to explain and debug DAX",
          "Time-intelligence patterns: YTD, YoY, moving averages",
          "Capstone: create a validated KPI model",
        ],
      },
    ],
    practicalActivities: [
      "Designing a star-schema model from business requirements",
      "Writing DAX measures for revenue, margin, and growth",
      "Debugging incorrect totals and filter-context issues",
      "Using ChatGPT to explain a complex formula",
      "Building period-over-period comparisons",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
  {
    slug: "data-storytelling-dashboards-power-bi-ai-copilots",
    i18nKey: "aiBizAnalyticsModule4",
    title: "Data Storytelling and Business Dashboard Visualisations with Power BI and Artificial Intelligence (AI) Co-Pilots",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Design compelling visuals and narratives that turn analysis into action.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Data Storytelling and Dashboard Visualisations module.",
    seoTitle: "Data Storytelling and Dashboard Visualisations | Metaskills Institute",
    seoDescription:
      "Learn to design compelling Power BI visuals and data stories with AI co-pilot assistance in a two-day in-person module.",
    whyAttend:
      "Even the best analysis fails to create impact if it cannot be communicated clearly. This module focuses on the principles of data visualisation, dashboard design, and storytelling — using Power BI as the canvas and AI co-pilots to accelerate formatting, insight drafting, and accessibility.\n\nParticipants learn to choose the right visual for the right message, reduce cognitive load, and structure a narrative that moves stakeholders from insight to decision.",
    objectives: [
      "Apply visual-perception principles to dashboard design.",
      "Select appropriate chart types for different analytical messages.",
      "Build interactive, well-organised Power BI reports.",
      "Use AI co-pilots to draft insights, titles, and annotations.",
      "Structure a data story with a clear beginning, middle, and recommended action.",
      "Apply accessibility and mobile-layout considerations.",
    ],
    whoShouldAttend: [
      "Analysts and report developers who present data to stakeholders",
      "Managers who want clearer, more persuasive dashboards",
      "Marketing, finance, and operations professionals building self-service reports",
      "Participants preparing for the decision-support dashboard module",
    ],
    prerequisites: [
      "Basic familiarity with Power BI or similar BI tools",
      "Understanding of common business metrics and KPIs",
      "Comfort with Excel or data preparation concepts",
      "Completion of Module 3 is recommended but not required",
    ],
    courseDesign:
      "A two-day in-person, hands-on workshop. Participants design and build Power BI report pages, receive peer and instructor feedback, and use AI co-pilots to refine narrative text and visual formatting.",
    schedule: [
      {
        day: "Day 1 — Visualisation Principles and Report Design",
        items: [
          "Visual perception and cognitive load",
          "Choosing chart types and avoiding common pitfalls",
          "Colour, layout, and typography for clarity",
          "Building an interactive Power BI report page",
          "Lab: redesign a cluttered report",
        ],
      },
      {
        day: "Day 2 — Data Storytelling and AI Assistance",
        items: [
          "The anatomy of a persuasive data story",
          "Titles, annotations, and call-to-action design",
          "Using AI co-pilots to draft insights and summaries",
          "Accessibility, mobile layout, and governance basics",
          "Capstone: present a data story to the group",
        ],
      },
    ],
    practicalActivities: [
      "Redesigning a confusing report into a clear dashboard",
      "Building interactive slicers, drill-throughs, and tooltips",
      "Drafting insight narratives with an AI co-pilot",
      "Choosing visuals that match the analytical message",
      "Presenting a data story to peers for feedback",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
  {
    slug: "business-dashboard-decision-support-power-bi-ai-copilots",
    i18nKey: "aiBizAnalyticsModule5",
    title: "Creating and Using Business Dashboard Visualisations for Decision Support using Power BI and Artificial Intelligence (AI) Co-Pilots",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Build operational dashboards that support monitoring, diagnosis, and faster decisions.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Decision Support Dashboards with Power BI module.",
    seoTitle: "Decision Support Dashboards with Power BI | Metaskills Institute",
    seoDescription:
      "Build operational dashboards for decision support using Power BI and AI co-pilots in a two-day in-person business analytics module.",
    whyAttend:
      "Dashboards become valuable when they are used repeatedly to monitor performance, diagnose issues, and guide decisions. This module moves beyond visual design into the architecture of decision-support dashboards: KPI trees, alerts, user-centric navigation, and AI-generated explanations that help users interpret changes quickly.\n\nParticipants build a dashboard tied to a realistic business process and practice the hand-off from analyst insight to operational use.",
    objectives: [
      "Design dashboards around decision-making workflows.",
      "Build KPI trees and linked diagnostic views.",
      "Implement alerts, conditional formatting, and drill-through paths.",
      "Use AI co-pilots to generate explanations and what-if scenarios.",
      "Create user-specific views and row-level security basics.",
      "Plan dashboard maintenance, governance, and adoption.",
    ],
    whoShouldAttend: [
      "Analysts and BI developers building operational dashboards",
      "Team leads and managers who rely on dashboards for daily decisions",
      "Professionals in operations, finance, sales, and supply chain",
      "Participants preparing to complete the Advanced Certificate",
    ],
    prerequisites: [
      "Familiarity with Power BI report design",
      "Understanding of business KPIs and operational metrics",
      "Basic data-modelling knowledge",
      "Completion of Module 4 is recommended but not required",
    ],
    courseDesign:
      "A two-day in-person, hands-on workshop. Participants design a decision-support dashboard from requirements, build linked analytical pages, and use AI co-pilots to generate natural-language explanations and scenario commentary.",
    schedule: [
      {
        day: "Day 1 — Decision-Support Dashboard Architecture",
        items: [
          "From report to decision-support system",
          "KPI trees and diagnostic drill paths",
          "Designing for monitoring, diagnosis, and action",
          "Alerts, conditional formatting, and bookmarks",
          "Lab: build a KPI summary and diagnostic pages",
        ],
      },
      {
        day: "Day 2 — AI Explanations, Governance, and Adoption",
        items: [
          "Using AI co-pilots to generate insight explanations",
          "What-if and scenario commentary",
          "User roles, row-level security, and personalisation",
          "Governance, refresh schedules, and change management",
          "Capstone: deploy a decision-support dashboard prototype",
        ],
      },
    ],
    practicalActivities: [
      "Mapping business decisions to dashboard views",
      "Building a KPI tree with linked diagnostic pages",
      "Configuring alerts and conditional formatting",
      "Generating natural-language explanations with an AI co-pilot",
      "Planning rollout and user adoption for a dashboard",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
  {
    slug: "task-automation-macros-vba-ai-copilots",
    i18nKey: "aiBizAnalyticsModule6",
    title: "Task Automation with Macros, VBA and Artificial Intelligence (AI) Co-Pilots",
    category: AI_POWERED_BA_CATEGORY,
    tagline: "Automate repetitive Excel workflows with macros, VBA, and AI-assisted coding.",
    ...sharedMeta,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the Task Automation with Macros, VBA and AI Co-Pilots module.",
    seoTitle: "Task Automation with Macros, VBA and AI Co-Pilots | Metaskills Institute",
    seoDescription:
      "Automate repetitive Excel workflows with macros, VBA, and AI co-pilots in a two-day in-person business analytics module.",
    whyAttend:
      "Repetitive manual tasks drain time and increase error risk. This module shows participants how to record, edit, and write macros in Excel using VBA, with AI co-pilots helping to explain, generate, and debug code.\n\nThe focus is on practical automation: formatting reports, consolidating files, generating standard outputs, and creating user-friendly controls. Participants leave with working macros they can adapt immediately.",
    objectives: [
      "Record and edit macros in Excel.",
      "Understand VBA syntax, objects, variables, and loops.",
      "Write macros that format, consolidate, and generate reports.",
      "Use AI co-pilots to generate, explain, and debug VBA code.",
      "Add buttons, forms, and error handling for user-friendly automation.",
      "Evaluate when to use macros versus other automation tools.",
    ],
    whoShouldAttend: [
      "Excel power users spending time on repetitive tasks",
      "Analysts and administrators producing recurring reports",
      "Finance, operations, and HR professionals seeking workflow automation",
      "Participants completing the Advanced Certificate",
    ],
    prerequisites: [
      "Strong working knowledge of Microsoft Excel",
      "Familiarity with formulas, ranges, and worksheets",
      "Willingness to learn basic programming concepts",
      "Completion of earlier modules is recommended but not required",
    ],
    courseDesign:
      "A two-day in-person, hands-on workshop. Each topic is introduced with a short demonstration, followed by guided coding exercises. Participants use AI co-pilots to accelerate VBA learning and troubleshoot errors.",
    schedule: [
      {
        day: "Day 1 — Macro Recording and VBA Fundamentals",
        items: [
          "When and why to automate in Excel",
          "Recording, running, and editing macros",
          "VBA editor, modules, and security settings",
          "Variables, objects, methods, and properties",
          "Lab: build a formatting and cleanup macro",
        ],
      },
      {
        day: "Day 2 — Building Useful Automation",
        items: [
          "Loops and conditional logic in VBA",
          "Consolidating data across multiple files",
          "Creating user forms and buttons",
          "Using AI co-pilots to generate and explain code",
          "Capstone: build a report-generation automation tool",
        ],
      },
    ],
    practicalActivities: [
      "Recording and refining a macro for a common task",
      "Writing VBA to format and clean a report",
      "Consolidating data from multiple workbooks",
      "Using an AI co-pilot to debug a macro error",
      "Building a button-driven report generator",
    ],
    fees: sharedFees,
    nextRunDate: "Contact admissions@metaskills.sg for next run dates",
  },
];
