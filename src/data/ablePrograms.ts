export interface AbleModule {
  label: string;
  title: string;
  coverage: string[];
  outcome?: string;
  extraTitle?: string;
  extra?: string[];
}

export interface AbleProgram {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroDescription: string;
  tags: string[];
  level: string;
  positioning?: string;
  journey?: string[];
  why: string[];
  audience: string[];
  prerequisitesIntro?: string;
  prerequisites: string[];
  outcomes: string[];
  modulesTitle: string;
  modules: AbleModule[];
  aiCallout?: { title: string; body: string[]; focus: string[] };
  integration?: { title: string; intro: string; scenario: string; points: string[]; close: string };
  activities: string[];
  assessment: string[];
  experienceAnswer: string;
}

export const ablePrograms: AbleProgram[] = [
  {
    slug: "professional-certificate-python-automation-data-operations",
    title: "Professional Certificate in Python Automation and Data Operations",
    seoTitle: "Professional Certificate in Python Automation & Data Operations | Metaskills",
    seoDescription:
      "Develop practical Python skills for workflow automation, data processing, databases and operational applications through a hands-on professional certificate by Metaskills Institute Singapore.",
    heroDescription:
      "Build practical Python capabilities for automating repetitive work, processing operational data, integrating systems and developing reliable data-driven workflows.",
    tags: ["Professional Certificate", "Applied Programming", "Python", "Automation", "Data Operations"],
    level: "Foundation to Intermediate",
    why: [
      "Python has evolved far beyond being a programming language for software developers. It is widely used to automate repetitive processes, transform operational data, connect systems, manipulate files, interact with databases and support analytics and AI workflows.",
      "The Professional Certificate in Python Automation and Data Operations is designed around these practical applications.",
      "Participants progressively develop programming fundamentals before applying Python to everyday operational challenges involving data, files, APIs, databases and workflow automation.",
      "Rather than focusing only on programming syntax, the programme develops the ability to break down business problems, construct reliable scripts and build reusable automation solutions.",
    ],
    audience: [
      "Operations professionals looking to automate repetitive tasks",
      "Analysts working with data, reports or recurring data-processing workflows",
      "IT and technical support professionals",
      "Business professionals seeking practical programming capability",
      "Professionals transitioning toward data, automation or technical roles",
      "Beginners who want a structured introduction to Python with practical applications",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Comfort working with files, spreadsheets and common business applications",
      "No advanced programming experience required",
      "A laptop capable of installing and running Python development tools",
    ],
    outcomes: [
      "Understand fundamental Python syntax, variables, data types and program flow.",
      "Use functions, modules and common Python data structures to build reusable programs.",
      "Read, manipulate and generate files and structured data.",
      "Automate repetitive operational and administrative workflows.",
      "Work with dates, text and common business-data formats.",
      "Connect Python applications with databases and external data sources.",
      "Apply object-oriented concepts when designing more structured applications.",
      "Build scripts for data preparation, validation and transformation.",
      "Design practical automation solutions for workplace use cases.",
      "Develop and present an applied Python automation project.",
    ],
    modulesTitle: "Programme Structure",
    modules: [
      {
        label: "Module 01",
        title: "Python Programming Foundations",
        coverage: ["Development environment and Python setup", "Syntax, variables and data types", "Conditional logic", "Loops and program flow", "Debugging fundamentals", "Writing clean and understandable code"],
        outcome: "Build simple programs that translate business rules into executable logic.",
      },
      {
        label: "Module 02",
        title: "Data Structures and Reusable Programming",
        coverage: ["Lists and tuples", "Dictionaries and sets", "Functions", "Modules and packages", "Error handling", "Reusable programming patterns"],
        outcome: "Organise, process and reuse data and logic efficiently.",
      },
      {
        label: "Module 03",
        title: "Files, Data and Operational Automation",
        coverage: ["Reading and writing files", "Structured data", "Data validation", "Text manipulation", "Date and time processing", "Batch processing", "Automating recurring tasks"],
        outcome: "Build Python scripts that automate common operational workflows.",
      },
      {
        label: "Module 04",
        title: "Data Operations and Database Integration",
        coverage: ["Data preparation and transformation", "Tabular datasets", "Database fundamentals", "SQL interaction from Python", "Working with local and structured databases", "Data extraction and loading concepts"],
        outcome: "Move and transform operational data reliably between applications and storage systems.",
      },
      {
        label: "Module 05",
        title: "Applied Python Automation and Integration",
        coverage: ["APIs and external services", "Workflow integration", "Automation design", "Logging and exception handling", "Basic performance considerations", "Maintainable script design", "Introduction to AI-assisted programming where appropriate"],
        outcome: "Build more resilient automation solutions that interact with multiple systems.",
      },
      {
        label: "Module 06",
        title: "Applied Automation Project",
        coverage: ["File-processing automation", "Report-generation workflow", "Data validation utility", "Operational tracking solution", "API-based data retrieval workflow", "Database-driven utility", "Repetitive business-process automation"],
        outcome: "Participants identify or receive a realistic operational problem and create a working Python solution.",
        extraTitle: "Participants document",
        extra: ["Problem", "Approach", "Logic", "Implementation", "Testing", "Results", "Potential improvements"],
      },
    ],
    activities: [
      "Automatically organise and rename files",
      "Validate and clean a dataset",
      "Extract information from structured files",
      "Generate an operational report",
      "Automate repetitive calculations",
      "Query a database using Python",
      "Build a simple data-processing pipeline",
      "Consume an API",
      "Troubleshoot faulty scripts",
      "Build a workplace automation prototype",
    ],
    assessment: ["Practical exercises", "Scenario-based challenges", "Individual applied assignment", "Final automation project or competency assessment"],
    experienceAnswer:
      "No. The programme starts from programming fundamentals. You should be comfortable using a computer, working with files and spreadsheets, and installing software on your laptop.",
  },
  {
    slug: "professional-certificate-modern-web-application-development",
    title: "Professional Certificate in Modern Web Application Development",
    seoTitle: "Professional Certificate in Modern Web Application Development | Metaskills",
    seoDescription:
      "Build modern full-stack web applications with JavaScript, React, APIs, databases, back-end development and AI-assisted coding through Metaskills Institute Singapore.",
    heroDescription:
      "Design and build modern full-stack web applications using contemporary front-end, back-end, database, API and AI-assisted development workflows.",
    tags: ["Professional Certificate", "Full-Stack Development", "Web Applications", "AI-Assisted Development", "Applied Software Engineering"],
    level: "Foundation to Intermediate",
    why: [
      "Modern web applications are no longer built using isolated HTML pages and simple scripts.",
      "Today's development teams work across user interfaces, application logic, APIs, databases, authentication, cloud services, version control and increasingly AI-assisted development environments.",
      "This programme provides an applied pathway through the modern web-development stack. Participants learn how the major components of a web application fit together before progressively building front-end interfaces, server-side services, database-backed applications, APIs and full-stack projects.",
      "AI-assisted coding tools are introduced as productivity accelerators rather than replacements for fundamental development understanding.",
    ],
    audience: [
      "Aspiring software and web developers",
      "Professionals transitioning into application-development roles",
      "IT personnel seeking full-stack development capability",
      "Digital teams responsible for internal tools or web applications",
      "Product and technical professionals who want to understand how modern web applications are built",
      "Learners with basic digital literacy who want a structured development pathway",
    ],
    prerequisites: [
      "General computer literacy",
      "Logical problem-solving ability",
      "Prior coding knowledge is useful but not mandatory for the complete pathway",
      "A laptop capable of running a modern development environment",
    ],
    outcomes: [
      "Explain the architecture of a modern web application.",
      "Build semantic and responsive user interfaces.",
      "Use JavaScript to create interactive application behaviour.",
      "Develop component-based front-end applications.",
      "Build server-side applications and APIs.",
      "Design and interact with application databases.",
      "Implement authentication and basic application security patterns.",
      "Use Git and collaborative version-control workflows.",
      "Integrate external services and AI capabilities through APIs.",
      "Use AI coding assistants responsibly to accelerate development and troubleshooting.",
      "Build, test and present an end-to-end web application.",
    ],
    modulesTitle: "Programme Structure",
    modules: [
      {
        label: "Module 01",
        title: "Modern Web Foundations",
        coverage: ["How the web works", "HTML", "CSS", "Responsive layouts", "UI structure", "Accessibility fundamentals", "Browser development tools", "Introduction to modern development environments"],
        outcome: "Build responsive interfaces that work across common device sizes.",
      },
      {
        label: "Module 02",
        title: "JavaScript and Interactive Applications",
        coverage: ["JavaScript fundamentals", "Variables and data structures", "Functions", "Control structures", "DOM interaction", "Events", "Modern JavaScript", "Asynchronous programming", "Working with APIs"],
        outcome: "Transform static interfaces into interactive applications.",
      },
      {
        label: "Module 03",
        title: "Modern Front-End Development",
        coverage: ["Component-based development", "React concepts", "State and application flow", "Routing", "Reusable UI components", "Data fetching", "Front-end architecture", "Introduction to modern frameworks such as Next.js where appropriate"],
        outcome: "Develop maintainable front-end applications using modern development practices.",
      },
      {
        label: "Module 04",
        title: "Back-End Development and APIs",
        coverage: ["Server-side programming", "Node.js concepts", "Application servers", "Express-style frameworks", "REST APIs", "Request and response handling", "Application architecture", "Error handling"],
        outcome: "Create server-side applications and APIs that support modern front-end applications.",
      },
      {
        label: "Module 05",
        title: "Databases, Authentication and Application Integration",
        coverage: ["Database concepts", "Document and relational database considerations", "Data modelling", "Application/database integration", "Authentication", "Authorisation", "Sessions and token-based approaches", "File and media handling", "Basic security considerations", "Cloud/service integrations"],
        outcome: "Build applications that securely manage users and persistent information.",
      },
      {
        label: "Module 06",
        title: "AI-Assisted Full-Stack Capstone",
        coverage: ["Git and GitHub workflow", "Development lifecycle", "AI-assisted coding", "Code review and troubleshooting", "API integration", "Real-time features where appropriate", "Application testing", "Deployment concepts", "Capstone development"],
        extraTitle: "Capstone examples",
        extra: ["Operational dashboard", "Internal workflow system", "Booking or tracking application", "AI-enabled knowledge tool", "Data-driven portal", "Full-stack productivity application", "Real-time collaboration application"],
      },
    ],
    aiCallout: {
      title: "Develop With AI — Understand Without Depending On It",
      body: [
        "Modern developers increasingly use AI coding assistants to generate boilerplate, explain unfamiliar code, identify errors and accelerate prototyping.",
        "The programme introduces these tools within a disciplined development workflow. Participants are expected to understand the architecture, logic and behaviour of what they build rather than simply accepting AI-generated code.",
      ],
      focus: ["Prompting coding assistants effectively", "Verifying generated code", "Troubleshooting", "Understanding dependencies", "Reviewing security implications", "Documenting AI-assisted development decisions"],
    },
    activities: [
      "Responsive landing-page build",
      "JavaScript application",
      "API integration exercise",
      "React interface",
      "Back-end API",
      "Database-backed application",
      "Authentication workflow",
      "Git collaboration challenge",
      "AI-assisted debugging activity",
      "Full-stack capstone",
    ],
    assessment: ["Practical coding exercises", "Application-building challenges", "Code review or troubleshooting activities", "Individual or team project", "Final full-stack application demonstration"],
    experienceAnswer:
      "Prior coding knowledge is useful but not mandatory. The programme begins with web foundations; logical problem-solving ability and general computer literacy are the key starting points.",
  },
  {
    slug: "certificate-foundational-digital-technology",
    title: "Certificate in Foundational Digital Technology",
    seoTitle: "Certificate in Foundational Digital Technology | Metaskills",
    seoDescription:
      "Build practical foundations across AI, machine learning, cloud computing, databases and data analytics with Metaskills Institute Singapore.",
    heroDescription:
      "Build a practical foundation across artificial intelligence, machine learning, cloud computing, databases and data analytics — and understand how these technologies work together inside modern organisations.",
    tags: ["Certificate", "Digital Foundations", "AI & Machine Learning", "Cloud", "Data & Analytics"],
    level: "Foundation",
    positioning: "A systems-level introduction to the technologies powering the modern digital organisation.",
    journey: ["Data", "Compute / Cloud", "Analytics", "AI / Machine Learning", "Business Application"],
    why: [
      "Professionals increasingly encounter terms such as artificial intelligence, machine learning, cloud computing, databases, APIs, big data and analytics — even when they are not software engineers or data scientists. Understanding each technology in isolation is not enough.",
      "The Certificate in Foundational Digital Technology provides a connected view of the modern technology landscape.",
      "Participants explore how data is stored and processed, how cloud platforms provide scalable technology services, how analytics transforms data into insight and how artificial intelligence and machine learning use data to identify patterns and support increasingly sophisticated applications.",
      "The programme prioritises applied understanding over deep specialisation, making it suitable as a broad technology foundation before progressing into specialist AI, cloud, data, software or cybersecurity programmes.",
    ],
    audience: [
      "Professionals moving into technology-related roles",
      "Managers working with technical teams",
      "Project and programme managers",
      "Digital-transformation teams",
      "Operations professionals",
      "Business analysts",
      "Graduates and early-career professionals seeking broad technology foundations",
      "Professionals preparing for more specialised AI, data, cloud or software-development training",
    ],
    prerequisitesIntro: "No specialist technical background is required. Participants should:",
    prerequisites: [
      "Be comfortable using a computer",
      "Have basic numeracy",
      "Have an interest in modern digital technologies",
      "Be willing to participate in practical exercises",
    ],
    outcomes: [
      "Explain the major components of a modern digital technology environment.",
      "Distinguish artificial intelligence, machine learning, deep learning and generative AI.",
      "Explain the role of data in machine-learning and analytics workflows.",
      "Understand fundamental cloud-computing concepts and service models.",
      "Describe the role of compute, storage, networking, identity and cloud services.",
      "Understand relational databases and structured data concepts.",
      "Use basic data-query and analytics concepts.",
      "Explain descriptive, diagnostic, predictive and prescriptive analytics.",
      "Interpret data visualisations and dashboards.",
      "Connect AI, cloud and data technologies into an end-to-end digital solution.",
      "Evaluate basic technology choices for realistic organisational scenarios.",
    ],
    modulesTitle: "Three Connected Learning Domains",
    modules: [
      {
        label: "Domain 01",
        title: "Jump Start in AI, Machine Learning and Deep Learning",
        coverage: ["Artificial intelligence fundamentals", "Machine learning concepts", "Supervised and unsupervised learning", "Training versus inference", "Features and datasets", "Model evaluation", "Regression and classification", "Clustering", "Neural networks", "Deep-learning concepts", "Computer vision concepts", "Generative AI and modern AI assistants", "Responsible and appropriate AI use", "Real-world AI use cases"],
        outcome: "Understand and apply core AI concepts without advanced mathematics.",
        extraTitle: "Practical activities",
        extra: ["Exploring a dataset", "Identifying suitable machine-learning use cases", "Comparing model outputs", "Interpreting basic evaluation results", "Experimenting with modern generative-AI tools", "Mapping an AI opportunity in an organisation"],
      },
      {
        label: "Domain 02",
        title: "Establishing Foundations in Cloud Services and Applications",
        coverage: ["What cloud computing is", "On-premise versus cloud environments", "Public cloud concepts", "Compute", "Storage", "Databases", "Networking", "Identity and access", "Cloud security fundamentals", "Scalability", "Availability", "Serverless concepts", "Containers at a conceptual level", "Monitoring", "Cloud costs and consumption", "Shared-responsibility concepts", "Cloud architecture fundamentals"],
        outcome: "Examples may be demonstrated on a leading public-cloud platform; the certificate itself remains vendor-neutral.",
        extraTitle: "Practical activities",
        extra: ["Designing a simple cloud architecture", "Selecting suitable cloud services for a scenario", "Mapping identity permissions", "Comparing traditional and cloud deployment", "Analysing a basic cloud-cost scenario"],
      },
      {
        label: "Domain 03",
        title: "Unearthing the Potential of Databases, Big Data and Data Analytics",
        coverage: ["Why organisations collect data", "Structured and unstructured data", "Relational database concepts", "Tables, keys and relationships", "SQL concepts", "Querying and filtering", "Joining data", "Aggregation", "Data quality", "Data preparation", "Data pipelines", "Big-data concepts", "Analytics lifecycle", "Exploratory analysis", "Visualisation", "Dashboards", "Translating data into decisions"],
        extraTitle: "Practical activities",
        extra: ["Querying a sample database", "Cleaning a dataset", "Joining data sources", "Performing basic exploratory analysis", "Creating a simple visualisation/dashboard", "Communicating an evidence-based finding"],
      },
    ],
    integration: {
      title: "Putting the Digital Stack Together",
      intro: "The final activity connects all three technology domains into a single, realistic organisational challenge.",
      scenario: "An organisation collects operational data from multiple sources. Participants determine:",
      points: [
        "Where the data should be stored",
        "How it may be processed",
        "What cloud capabilities are required",
        "What analytics should be performed",
        "Whether AI/ML is appropriate",
        "What outputs decision-makers need",
        "What security and governance considerations apply",
      ],
      close: "Participants create a simple solution architecture and explain their choices.",
    },
    activities: [
      "Exploring and querying sample datasets",
      "Mapping AI opportunities in an organisation",
      "Designing a simple cloud architecture",
      "Analysing a cloud-cost scenario",
      "Building a simple dashboard",
      "Digital-solution architecture challenge",
    ],
    assessment: ["Applied quizzes or knowledge checks", "Scenario analysis", "Guided technology activities", "Practical exercises", "Digital-solution architecture challenge", "Final presentation or applied assessment"],
    experienceAnswer:
      "No specialist technical background is required. You should be comfortable using a computer, have basic numeracy and be willing to take part in practical exercises.",
  },
];

export const getAbleProgram = (slug: string) => ablePrograms.find((p) => p.slug === slug);
