export interface AbleArea {
  title: string;
  description: string;
  topics?: string;
  core?: string[];
  deeper?: string[];
  scopeNote?: string;
  application?: string;
}

export interface AbleFaq {
  q: string;
  a: string;
}

export interface AbleProgramme {
  slug: string;
  title: string;
  shortTitle: string;
  subjectArea: string;
  subheading: string;
  heroParagraph: string;
  chips: string[];
  facts: { focus: string; entry: string };
  catalogueSummary: string;
  overview: string[];
  outcomes: string[];
  audience: string[];
  beforeYouBegin: string[];
  curriculumHeading: string;
  areas: AbleArea[];
  extraNote?: string;
  activitiesIntro: string;
  activities: string[];
  executionCheck: string;
  showcase?: { heading: string; scopeNote?: string; items: { title: string; text: string }[] };
  bullets?: { heading: string; items: string[] };
  connections?: boolean;
  faqs: AbleFaq[];
  seoTitle: string;
  seoDescription: string;
  relatedPrompt: string;
}

export const ABLE_FEE_NOTE =
  "Contact us to confirm GST treatment and any additional learning-resource, software or usage charges.";

export const SHARED_FAQS: AbleFaq[] = [
  { q: "What is the difference between the Full Course and ABLE?", a: "The Full Course is S$9,000 and offers the comprehensive programme pathway. ABLE is S$3,000 and is designed around independent online learning followed by MetaSkills-led practical use cases and assessment. Speak to our team about the detailed arrangements and inclusions for each pathway." },
  { q: "Who is ABLE suitable for?", a: "Learners who are willing to study online independently and want structured opportunities to apply their knowledge and demonstrate their understanding through assessment." },
  { q: "I have already completed an online course. Can I join ABLE?", a: "Tell MetaSkills what you have studied so we can discuss your readiness and preparation. Previous online study does not automatically waive programme or assessment requirements." },
  { q: "Is ABLE just an online course?", a: "It combines independent online preparation with MetaSkills-led practical use cases and assessment. The practical component is where you apply and demonstrate your learning." },
  { q: "Does attendance automatically earn a certificate or endorsement?", a: "Recognition depends on meeting the applicable assessment and award requirements. Ask MetaSkills about the exact recognition and completion criteria for your selected pathway." },
  { q: "Do both pathways award the same certificate?", a: "Contact MetaSkills to confirm the credential and award requirements for each pathway before enrolling." },
  { q: "What do the fees include?", a: "The published pathway fees are S$9,000 for the Full Course and S$3,000 for ABLE, per learner per course. Confirm learning-resource access, GST treatment, software costs and other inclusions with our team." },
];

const ABLE_PREP = "For ABLE, plan time for independent online learning before the relevant practical sessions. Ask MetaSkills which content to prepare and what software to set up.";
const AUDIENCE_BASE = [
  "Learners seeking the comprehensive Full Course pathway",
  "Self-directed learners seeking ABLE practical use cases and assessment after online study",
  "Learners who want to demonstrate applied understanding through practical work",
];
const OVERVIEW_LEAD = "Choose the Full Course for the comprehensive programme pathway, or ABLE for independent online preparation followed by MetaSkills-led practical use cases and assessment.";

export const ablePrograms: AbleProgramme[] = [
  {
    slug: "professional-certificate-python-automation-and-data-operations",
    title: "Professional Certificate in Python Automation and Data Operations",
    shortTitle: "Python Automation and Data Operations",
    subjectArea: "Programming and Digital Skills",
    subheading: "Automate everyday tasks. Put your data to work.",
    heroParagraph: "Develop Python skills to automate repeatable tasks, process files and manage records with database-connected tools. Choose the Full Course or the ABLE pathway to develop and demonstrate your practical understanding.",
    chips: ["Python fundamentals", "Practical applications", "Files and databases"],
    facts: { focus: "Practical Python programming", entry: "Starts with programming fundamentals" },
    catalogueSummary: "Automate repeatable tasks, process files and manage records with database-connected Python tools.",
    overview: [
      OVERVIEW_LEAD,
      "Python gives you a flexible way to turn a repeatable task into a program you can understand and improve. This programme develops the core concepts behind reliable code, including control flow, data structures, functions and object-oriented programming.",
      "You will also explore how programs interact with files, dates, desktop interfaces and SQLite databases. The emphasis is on understanding how a program works and combining its parts into useful applications. These foundations can support further learning in data analytics, AI or software development.",
    ],
    outcomes: [
      "Write Python programs using variables, expressions, conditions and loops.",
      "Organise information using lists, tuples, dictionaries and sets.",
      "Break problems into reusable functions and modules.",
      "Read and write files, and work with dates and times.",
      "Use classes, simple desktop interfaces and SQLite to structure practical applications.",
      "Explore generators, lambda expressions, timing tools and Big O notation to reason about code efficiency.",
    ],
    audience: [
      ...AUDIENCE_BASE,
      "Working professionals who want to understand and write practical code",
      "Operations and administrative staff interested in repeatable information-handling tasks",
      "Aspiring programmers building a foundation for further technical study",
      "Learners who have tried short coding tutorials and want a more connected view of Python",
    ],
    beforeYouBegin: [
      ABLE_PREP,
      "The curriculum starts with environment setup and programming fundamentals. Be comfortable using a computer, managing files and installing software. Contact our team to confirm the entry requirements and laptop setup for your intake.",
    ],
    curriculumHeading: "Learning areas",
    areas: [
      { title: "1. Set up and start coding", description: "Set up your Python environment and understand how to run a program.", topics: "Course orientation, environment setup, Python syntax, basic values and expressions." },
      { title: "2. Control how a program works", description: "Express decisions and repeated steps in code.", topics: "Program flow, conditional logic, loops and control structures." },
      { title: "3. Organise data with Python collections", description: "Select a useful structure for different kinds of information.", topics: "Lists, tuples, dictionaries and sets." },
      { title: "4. Build reusable functions and modules", description: "Divide larger tasks into smaller, understandable pieces.", topics: "Defining and calling functions, modules and advanced function concepts." },
      { title: "5. Work with files, dates and times", description: "Move information into and out of a program.", topics: "File input/output, reading and writing files, date and time handling." },
      { title: "6. Structure applications with objects", description: "Represent related information and behaviour using classes.", topics: "Object-oriented programming, classes, objects and methods." },
      { title: "7. Add interfaces and persistent data", description: "Explore user interaction and storing information between runs.", topics: "Tkinter desktop interfaces and SQLite3 database integration." },
      { title: "8. Understand efficiency and advanced language features", description: "Examine different ways to express and evaluate program logic.", topics: "Generators, lambdas, the timeit module and Big O notation." },
    ],
    activitiesIntro: "Apply the Python topics you have studied through tasks that require you to write, run and explain your own code.",
    activities: [
      "Write a small program using functions and collections to process a set of records.",
      "Read input from a file and produce an output you can check.",
      "Extend a simple application with a Tkinter interface or SQLite storage, according to the session scope.",
    ],
    executionCheck: "Run the program with sample inputs, compare the output with the task requirements, explain the important steps and try a small change to the task.",
    showcase: {
      heading: "Where these skills can take you",
      scopeNote: "Illustrative applications of the skills covered. Confirm the practical assignments for your intake with our team.",
      items: [
        { title: "File-processing helper", text: "Read a set of structured records and write a useful summary." },
        { title: "Desktop record manager", text: "Combine a simple Tkinter interface with SQLite to store and retrieve information." },
        { title: "Date-based organiser", text: "Use dates, collections and functions to organise recurring tasks or records." },
      ],
    },
    bullets: {
      heading: "A foundation for building useful software",
      items: [
        "Learn how program logic and reusable code fit together.",
        "Explore interfaces and databases alongside core language skills.",
        "Develop programming foundations you can extend into specialist areas.",
      ],
    },
    faqs: [
      { q: "Is this a data analytics course?", a: "Its main focus is general Python programming, including files, interfaces, databases and program structure. Learners seeking a dedicated analytics pathway can also explore MetaSkills' separate Python Programming For Data Analytics programme." },
      { q: "Do I need prior Python experience?", a: "The syllabus begins with setup and fundamentals. Speak to our team about your starting point and the preparation recommended for your intake." },
      { q: "Will I learn to build desktop applications?", a: "The curriculum includes Tkinter and SQLite3, introducing the interface and data-storage concepts used in simple desktop applications." },
      { q: "Does this cover machine learning?", a: "Machine learning is not the main focus of this programme. The programming foundations can help you prepare for later study in AI and data science." },
      { q: "What are the fees, schedule and certificate requirements?", a: "Choose the Full Course at S$9,000 or ABLE at S$3,000 per learner. Contact us for schedules, GST treatment, assessment details and pathway-specific award requirements." },
    ],
    seoTitle: "Python Automation and Data Operations | MetaSkills",
    seoDescription: "Explore practical Python programming with MetaSkills: core coding, functions, files, Tkinter interfaces and SQLite databases. Enquire about upcoming intakes.",
    relatedPrompt: "I want to learn programming",
  },
  {
    slug: "professional-certificate-modern-web-application-development",
    title: "Professional Certificate in Modern Web Application Development",
    shortTitle: "Modern Web Application Development",
    subjectArea: "Software Development and AI",
    subheading: "Build modern web applications that connect interfaces, logic and data.",
    heroParagraph: "Connect frontend interfaces, backend logic and application data using modern web technologies. Explore interactive features and AI integrations, with a choice of the Full Course or the ABLE pathway.",
    chips: ["Full-stack JavaScript", "AI integrations", "Application projects"],
    facts: { focus: "Full-stack web applications", entry: "Foundations through advanced topics" },
    catalogueSummary: "Connect frontend interfaces, backend logic and application data with React, Node.js, MongoDB and AI integrations.",
    overview: [
      OVERVIEW_LEAD,
      "A working web application connects an interface, application logic and stored data. This programme follows that path from HTML and responsive layouts through JavaScript, React, server-side development and database integration.",
      "The curriculum also includes authentication, error handling, real-time communication and AI-enabled application examples. AI coding tools appear alongside the underlying programming concepts, helping learners explore assisted development while understanding the code and application behaviour.",
    ],
    outcomes: [
      "Structure and style responsive web interfaces using HTML, CSS and Bootstrap.",
      "Use JavaScript, DOM events and asynchronous programming to create interactive behaviour.",
      "Build React interfaces with routing and state-management concepts.",
      "Develop server-side functionality with Node.js, Express and MongoDB/Mongoose.",
      "Explore authentication, authorisation, error handling and real-time communication.",
      "Integrate AI services into application examples and manage source code with Git and GitHub.",
    ],
    audience: [
      ...AUDIENCE_BASE,
      "Aspiring developers seeking an organised introduction to full-stack applications",
      "Professionals who want to understand the software behind operational tools",
      "Entrepreneurs and product builders developing their technical capabilities",
      "Learners ready to progress from simple pages to applications with users and data",
    ],
    beforeYouBegin: [
      ABLE_PREP,
      "The curriculum starts with web foundations and progresses into more demanding programming topics. Regular coding practice will be important. Ask our team about entry requirements, laptop setup and recommended preparation. Some exercises may require third-party accounts or API usage; confirm applicable costs before enrolment.",
    ],
    curriculumHeading: "Learning areas",
    areas: [
      { title: "1. Web foundations and developer workflow", description: "Understand the building blocks of a web project and organise your code.", topics: "Getting started with web development, generative AI for developers, Git and GitHub. Version control is introduced early and revisited throughout." },
      { title: "2. HTML, CSS and responsive interfaces", description: "Create structured pages and layouts that adapt to different screens.", topics: "HTML, AI-assisted HTML practice, CSS basics, selectors, box model, positioning, Flexbox, responsive design and Bootstrap 5." },
      { title: "3. JavaScript and browser interaction", description: "Add logic and interaction to web pages.", topics: "Functions, conditions, loops, arrays, objects, ES6, DOM selection, traversal, events and asynchronous programming." },
      { title: "4. React application development", description: "Organise interactive interfaces into components and manage navigation and state.", topics: "React, Context API, useReducer, React Router and related state-management concepts." },
      { title: "5. Node.js, Express and server-side applications", description: "Connect frontend experiences to backend application logic.", topics: "Node.js, Express, EJS templates, MVC structure and error handling." },
      { title: "6. MongoDB and application data", description: "Store and relate information used by an application.", topics: "MongoDB, Mongoose, database integration and associations." },
      { title: "7. Authentication and supporting services", description: "Explore how applications recognise users and provide supporting functionality.", topics: "Cookies, sessions, JWT-based authentication and authorisation, cloud image uploads and email sending with Node.js." },
      { title: "8. Real-time applications", description: "Explore communication features that update as events happen.", topics: "Socket.IO, a basic chat application and MERN chat application frontend/backend examples." },
      { title: "9. AI-assisted development and AI features", description: "Explore development tools and applications that use AI services.", topics: "Cursor, AI-assisted API development, grammar and writing assistants, content generation, chatbots, image generation and image analysis, with examples using OpenAI and Gemini services." },
      { title: "10. Application project library", description: "Connect the concepts through application examples.", topics: "Full-stack blog, expense tracker, currency converter, authentication API, e-commerce API, React portfolio, countdown timer and typing game, with a Next.js/MongoDB API as an extension example." },
    ],
    activitiesIntro: "Use the online content to prepare, then work through the connections that make a web application function.",
    activities: [
      "Turn a brief into an interactive page using the frontend topics covered.",
      "Connect a page to backend functionality and read or write application data.",
      "Extend a selected project with an authentication, real-time or AI feature appropriate to the session scope.",
    ],
    executionCheck: "Demonstrate the user journey, show how data moves between the interface and backend, explain a problem you encountered and check a changed input or requirement.",
    showcase: {
      heading: "Explore applications you can build",
      scopeNote: "Examples represented in the curriculum. The project selection and depth for each intake will be confirmed by MetaSkills.",
      items: [
        { title: "Expense tracker", text: "Connect a user interface with backend logic and stored expense records." },
        { title: "Full-stack blog", text: "Explore content, application routes and database relationships." },
        { title: "Real-time chat", text: "Use Socket.IO and the MERN stack to explore live communication." },
        { title: "AI writing assistant", text: "Connect an application to an AI service for text-related features." },
      ],
    },
    bullets: {
      heading: "Understand the application behind the screen",
      items: [
        "Connect frontend, backend and database concepts in one learning pathway.",
        "Explore AI features alongside conventional application development.",
        "Work through application examples that reveal how the parts fit together.",
      ],
    },
    faqs: [
      { q: "Is this a no-code course?", a: "This is a coding programme. AI-assisted tools are included, but the curriculum also covers HTML, CSS, JavaScript, React and backend development." },
      { q: "What does full-stack mean here?", a: "It refers to the browser interface, server-side application logic and database. The main stack includes React, Node.js, Express and MongoDB." },
      { q: "Will I complete every listed project?", a: "The curriculum contains a broad project library. Contact MetaSkills to confirm which projects and extensions are included in your intake." },
      { q: "Are AI tools and API credits included?", a: "Tool accounts, licences and usage charges depend on the delivery arrangement. Ask our team for the confirmed inclusions before enrolling." },
      { q: "Does the programme guarantee a developer role?", a: "The programme develops technical skills. Employment outcomes depend on your wider experience, practice, portfolio and recruitment processes." },
      { q: "How long is the programme and how is it assessed?", a: "Schedule and assessment arrangements depend on the selected pathway. ABLE combines independent online learning with MetaSkills-led use cases and assessment. Contact MetaSkills for the detailed requirements." },
    ],
    seoTitle: "Modern Web Application Development | MetaSkills",
    seoDescription: "Learn full-stack web application concepts with React, Node.js, MongoDB and AI integrations. Explore the MetaSkills programme and enquire about upcoming intakes.",
    relatedPrompt: "I want to build web applications",
  },
  {
    slug: "certificate-foundational-digital-technology",
    title: "Certificate in Foundational Digital Technology",
    shortTitle: "Foundational Digital Technology",
    subjectArea: "Technology Foundations",
    subheading: "Build a practical foundation in AI, cloud and data.",
    heroParagraph: "Understand how AI, cloud services and data support digital solutions. Develop your knowledge across three connected technology pillars and demonstrate your understanding through the Full Course or the ABLE pathway.",
    chips: ["AI and machine learning", "Cloud services", "Databases and analytics"],
    facts: { focus: "Three connected technology pillars", entry: "Foundational concepts with technical extensions" },
    catalogueSummary: "Understand how AI, cloud services and data connect across three practical technology pillars.",
    overview: [
      OVERVIEW_LEAD,
      "Modern digital solutions rely on data, computing infrastructure and intelligent applications. This programme brings those areas together so you can understand the role each plays and identify where you want to develop further.",
      "The AI pillar introduces the data-to-model workflow. The cloud pillar explores services used to run and support applications. The data pillar develops relational database, SQL and visualisation concepts. The curriculum also contains advanced material: these topics are presented as deeper study areas, with the precise scope confirmed for each intake.",
    ],
    outcomes: [
      "Explain the relationship between AI, machine learning and deep learning.",
      "Explore data preparation, visualisation and the evaluation of basic machine-learning models.",
      "Recognise common cloud compute, storage, networking and database services.",
      "Explain the role of identity, security, monitoring and billing in cloud environments.",
      "Query and combine relational data using SQL and explore results in Tableau.",
      "Describe how data, cloud infrastructure and AI can contribute to a practical digital solution.",
    ],
    audience: [
      ...AUDIENCE_BASE,
      "Professionals seeking a broader understanding of the technology used across their organisation",
      "Learners exploring future study in AI, cloud or analytics",
      "Business and project teams who collaborate with technical specialists",
      "Early-career practitioners who want to connect concepts across several technical areas",
    ],
    beforeYouBegin: [
      ABLE_PREP,
      "The cloud and database strands introduce foundational concepts. The AI strand includes Python-based exercises, so basic programming and comfort with simple algebra and statistics are recommended. If you are new to coding, speak to our team about preparation or starting with the Python programme.",
    ],
    curriculumHeading: "Three connected technology pillars",
    areas: [
      {
        title: "Pillar 1: Jump Start in AI, Machine Learning and Deep Learning",
        description: "Follow the path from a dataset to a model, and understand how results are evaluated.",
        core: ["NumPy and pandas for working with data.", "Exploratory data analysis and Matplotlib visualisation.", "Supervised and unsupervised learning concepts.", "Regression and classification examples.", "Evaluation metrics, bias-variance concepts and cross-validation.", "Introduction to neural networks and deep learning."],
        deeper: ["Nearest neighbours, decision trees, random forests and support vector machines.", "Hyperparameter optimisation, K-means, PCA and recommendation systems.", "Convolutional and recurrent networks, LSTM and transfer learning.", "Gradient boosting, CatBoost and model interpretation.", "Temporal and spatial analysis, geospatial visualisation, Kaggle resources and model-selection/deployment topics.", "Introductory exploration of generative AI tools."],
        scopeNote: "Advanced topics are deeper study areas, not a promise of specialist mastery. Contact us to confirm the exercises and depth for your intake.",
        application: "Explore a prepared dataset, compare model results and explain what the evaluation does and does not show.",
      },
      {
        title: "Pillar 2: Establishing a Foundation in Cloud Services and Applications",
        description: "Understand the services, responsibilities and cost considerations involved in running applications in the cloud, using AWS examples.",
        core: ["Cloud computing concepts and global infrastructure.", "Identity and access management.", "Compute services, EC2 and instance storage.", "S3 storage, load balancing and auto scaling.", "Databases and analytics services.", "VPC and networking fundamentals.", "Security, monitoring, account management, billing and support."],
        deeper: ["Containers, serverless and other compute services, including ECS, Lambda, Batch and Lightsail.", "Infrastructure deployment, integrations and advanced identity concepts.", "Architecture, the wider AWS ecosystem and machine-learning service awareness.", "Cloud Practitioner exam-preparation resources."],
        scopeNote: "Cloud exam-preparation material does not itself award an AWS certification. Ask our team whether any exam preparation or exam fees are included in your intake.",
        application: "Sketch the compute, storage, access and monitoring needs of a simple application.",
      },
      {
        title: "Pillar 3: Databases, Big Data and Data Analytics",
        description: "Understand how relational data is organised and queried, then explore how results become useful visual insights. The core topics focus on SQL Server and Tableau; ask our team about the big-data scope of your intake.",
        core: ["Relational databases, SQL terminology and Microsoft SQL Server.", "SELECT statements and common functions.", "Joins, views, constraints and aggregations.", "Data modification and transaction concepts.", "Connecting SQL Server data to Tableau.", "Building dashboards and visualisations from business datasets.", "Big-data concepts: data volume, velocity and variety; relational versus non-relational storage; warehouses versus lakes; batch versus streaming; and an example pipeline from ingestion to analytics (conceptual)."],
        deeper: ["Advanced joins and queries, programmability and query performance.", "Database housekeeping and data-protection practices.", "HR/payroll and e-commerce practice datasets.", "Complex SQL, Tableau visualisations and a showcase project."],
        application: "Query a sample business dataset and present its patterns in a Tableau dashboard.",
      },
    ],
    activitiesIntro: "Apply selected concepts from each pillar and explain the results in your own words.",
    activities: [
      "AI: Explore a prepared dataset, run a basic modelling exercise and interpret its evaluation results.",
      "Cloud: Match an application scenario to suitable compute, storage and access services and explain your choices.",
      "Data: Query a sample dataset and turn the results into a simple visual insight using the tools covered.",
    ],
    executionCheck: "Show the task output, explain the steps and assumptions, and identify a limitation or next improvement. Cloud activities may use scenario-based exercises.",
    connections: true,
    faqs: [
      { q: "Is this suitable for complete beginners?", a: "It introduces foundational concepts, but the AI strand includes technical exercises. Basic Python and numerical confidence are recommended; ask our team about preparation for your starting point." },
      { q: "Will this make me an AI engineer or cloud architect?", a: "This is a foundation for further learning. It introduces several areas and includes selected deeper topics, rather than providing specialist mastery of every discipline." },
      { q: "Is AWS certification included?", a: "The curriculum includes exam-preparation resources. AWS certification is a separate award; confirm preparation and exam-fee arrangements with MetaSkills." },
      { q: "How much big data is covered?", a: "The data curriculum focuses on SQL Server and Tableau, with a conceptual introduction to big data. Ask our team to confirm the big-data concepts and any additional practical coverage for your intake." },
      { q: "Can I take one pillar on its own?", a: "Contact MetaSkills to confirm standalone enrolment options and how they relate to the full certificate." },
      { q: "What software and accounts do I need?", a: "Requirements depend on the selected exercises and delivery arrangement. Ask our team about Python setup, cloud access, SQL Server, Tableau and any usage or licence charges." },
    ],
    seoTitle: "Foundational Digital Technology | MetaSkills",
    seoDescription: "Explore AI, machine learning, cloud services, SQL and data analytics with MetaSkills. Understand how these technologies connect and enquire about the programme.",
    relatedPrompt: "I want to understand AI, cloud and data",
  },
];

export const getAbleProgramme = (slug: string) => ablePrograms.find((p) => p.slug === slug);
