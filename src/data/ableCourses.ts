export interface AbleCourse {
  slug: string;
  title: string;
  subheading: string;
  heroFull: string;
  heroAble: string;
  practicalTitle: string;
  practical: string[];
  executionCheck: string;
  extraNote?: string;
}

export const ABLE_FULL_FEE = "S$9,000";
export const ABLE_FEE = "S$3,000";

export const ableCourses: AbleCourse[] = [
  {
    slug: "professional-certificate-python-automation-data-operations",
    title: "Professional Certificate in Python Automation and Data Operations",
    subheading: "Learn Python online. Put your code to work.",
    heroFull:
      "Master Python through structured instructor-led sessions covering syntax, functions, data handling, file operations and database concepts. Build complete programs with guided support and earn your professional certificate.",
    heroAble:
      "Study Python online, then join MetaSkills-led practical activities to apply your knowledge. Write and run programs, work with files and databases, and demonstrate how your code solves real tasks. Build confidence through execution.",
    practicalTitle: "Apply your Python knowledge",
    practical: [
      "Write a small program using functions and collections to process records.",
      "Read input from a file and produce an output you can check.",
      "Extend a simple application with a Tkinter interface or SQLite storage, according to the session scope.",
    ],
    executionCheck:
      "Run the program with sample inputs, compare the output with the task requirements, explain the important steps and try a small change to the task.",
  },
  {
    slug: "professional-certificate-modern-web-application-development",
    title: "Professional Certificate in Modern Web Application Development",
    subheading: "Learn web development online. Make the application work.",
    heroFull:
      "Build modern web applications through structured sessions covering frontend development, backend logic, APIs and data persistence. Create a complete working application with guided mentorship and earn your professional certificate.",
    heroAble:
      "Study frontend, backend and database concepts online, then apply them in MetaSkills-led practical sessions. Connect interfaces to application logic and stored data, work through execution challenges and demonstrate working features.",
    practicalTitle: "Connect the parts of a working application",
    practical: [
      "Turn a brief into an interactive page using the frontend topics covered.",
      "Connect a page to backend functionality and read or write application data.",
      "Extend a selected project with an authentication, real-time or AI feature appropriate to the session scope.",
    ],
    executionCheck:
      "Demonstrate the user journey, show how data moves between the interface and backend, explain a problem you encountered and check a changed input or requirement.",
  },
  {
    slug: "certificate-foundational-digital-technology",
    title: "Certificate in Foundational Digital Technology",
    subheading: "Learn the foundations online. Apply AI, cloud and data skills.",
    heroFull:
      "Gain a structured grounding in AI, cloud services and data concepts through guided sessions. Explore how these three pillars work together in real technology environments and earn your certificate.",
    heroAble:
      "Study AI, cloud and data concepts online, then join MetaSkills-led activities to put selected skills into practice. Work with data, explore cloud-service choices and demonstrate what you understand through practical tasks and explanations.",
    practicalTitle: "Put the three pillars into practice",
    practical: [
      "AI: Explore a prepared dataset, run a basic modelling exercise and interpret its evaluation results.",
      "Cloud: Match an application scenario to suitable compute, storage and access services and explain your choices.",
      "Data: Query a sample dataset and turn the results into a simple visual insight using the tools covered.",
    ],
    executionCheck:
      "Show the task output, explain the steps and assumptions, and identify a limitation or next improvement.",
    extraNote:
      "Built on three pillars — AI, cloud and data. Basic Python readiness is recommended; ask us what to prepare. Cloud activities are scenario-based.",
  },
];

export const getAbleCourse = (slug: string) => ableCourses.find((c) => c.slug === slug);

export const whatsappLink = (title: string) =>
  `https://wa.me/6589866146?text=${encodeURIComponent(
    `Hi MetaSkills, I'm interested in ${title}. Please share the schedule, entry requirements, fee inclusions and whether ABLE pricing is available.`
  )}`;

export const ableSteps = [
  { t: "Learn the content online.", d: "Study the course content independently at your own pace and come to the practical sessions prepared." },
  { t: "Apply it with MetaSkills.", d: "Join practical sessions designed around real use cases — you will build, run and troubleshoot real outputs." },
  { t: "Demonstrate your execution.", d: "Present what you have built, explain your decisions and show that the result meets the task requirements." },
  { t: "Identify your next practice step.", d: "Use the outcomes to see what you can already execute and what needs more work." },
];

export const ableValue =
  "Online study helps you understand the content. Practical execution helps you find out whether you can apply it. ABLE brings both into the same learning journey.";

export const ableFaqs = [
  { q: "How is the ABLE course conducted?", a: "You learn the course content online independently, then join MetaSkills-led practical sessions focused on activities and execution. Contact us for the preparation requirements and session schedule." },
  { q: "How is the full course different from the ABLE course?", a: "The full course (S$9,000) is a structured, instructor-led programme with guided sessions throughout. The ABLE course (S$3,000) shifts the knowledge-learning to independent online study and focuses MetaSkills' time on practical execution sessions. Both lead to the same certificate; the difference is in how much of the learning you do independently versus with guided support." },
  { q: "I have already studied online. Is ABLE suitable for me?", a: "ABLE is designed for learners who want to put their existing or self-acquired knowledge into practice. Tell us what you have studied so we can discuss your preparation for the practical activities. Prior study does not automatically waive course requirements or reduce the fee." },
  { q: "How will I know whether I can execute what I have learned?", a: "The practical activities give you opportunities to produce an output, demonstrate how it works and compare the result with the task requirements. This helps you identify your strengths and areas for further practice." },
  { q: "What is the course fee?", a: "The full course fee is S$9,000 per learner. The ABLE course fee is S$3,000 per learner. Contact us to confirm GST treatment, online-content access arrangements and any additional software or usage charges." },
  { q: "Will I receive the same certificate?", a: "Both the full course and the ABLE course lead to the same professional certificate. The path is different — more independent study in ABLE — but the credential and assessment standards are the same." },
];
