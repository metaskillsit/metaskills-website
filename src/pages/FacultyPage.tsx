import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ChevronDown, ChevronUp, Link2, Check } from "lucide-react";
import { toast } from "sonner";
import { withFacultyImageVersion } from "@/lib/facultyImages";


interface FacultyMember {
  name: string;
  i18nKey: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

/* =========================
   EXECUTIVE TEAM
========================= */
const executiveTeam: FacultyMember[] = [
  {
    name: "Dr. Jinghao Ke",
    i18nKey: "drKeJinghao",
    role: "CEO, Metaskills Institute | Chief Corporate Officer, Integrum Global",
    expertise: "Business Consulting | Data Analytics | Data Science | Agentic AI | AI | Machine Learning",
    image: "/images/faculty/faculty-jinghao.png",
    bio: `Dr. Jinghao Ke is C.E.O of Metaskills Institute and Chief Corporate Officer at Integrum Global. He oversees corporate AI and analytics training, focusing on AI in finance, machine learning, data strategy, and digital transformation programs for enterprise and government clients.
Dr. Ke holds a PhD in Finance and has designed and delivered training for functions including corporate finance, marketing analytics, and operations optimization. He is recognized for creating curricula that integrate business relevance with technical rigor, bridging strategic priorities with hands-on application.
Dr. Jinghao Ke is a Singapore-based AI and finance leader whose career bridges rigorous academic scholarship with high-impact commercial implementation. Holding a PhD in Corporate Finance from Singapore Management University, where his dissertation explored the intricate dynamics of CEO incentives, corporate governance, and firm value, Jinghao has built a distinctive reputation for translating complex analytical frameworks into pragmatic business solutions that deliver measurable results.
Over 15 years, Jinghao has trained more than 1,000 professionals across ASEAN and led hundreds of data science and AI projects spanning financial services, supply chain optimization, public sector transformation, and enterprise knowledge management. As Director of JCube Institute and Chief Research Officer at Integrum Global, he has designed and delivered flagship AI training programmes for major institutions including OCBC Bank, Great Eastern, and Changi General Hospital, while developing ISO 42001 compliance frameworks and agentic AI workflows that integrate large language models with operational automation tools. His consulting approach emphasizes implementable solutions over theoretical elegance, with particular attention to building internal capability within client organizations rather than creating dependency.
Jinghao's academic portfolio is equally substantial. As Adjunct Faculty at Singapore Management University since 2016, he has taught corporate finance, business analytics, and empirical finance to undergraduate, MBA, and executive audiences, while designing SMU Academy's Professional Certificate in Machine Learning programme that has trained over 500 professionals. His affiliate faculty appointments span the National University of Singapore's Asian Institute of Digital Finance, AI Singapore, Hong Kong University SPACE, and NTUC LearningHub, where he develops curriculum and delivers specialized training in AI applications for capital markets, supply chain, and aviation sectors. During his doctoral research, Jinghao created the Singapore Corporate Governance Index, bringing data-driven rigor to corporate governance assessment and demonstrating his capacity to pioneer analytical frameworks with lasting institutional impact.
His entrepreneurial ventures reflect a strategic vision for scaling expertise across borders. As Director of Singapore-Vietnam Business Bridge and co-founder of Research Room Pte Ltd, Jinghao facilitates cross-border investment, market entry strategies, and regional expansion for Singapore and ASEAN firms, with particular focus on property, sustainability technology, and SME digital transformation. His prior role as Chief Investment Officer at JCube Capital Partners, managing a MAS-licensed AI-augmented investment fund, combined his finance training with machine learning and deep learning techniques to optimize portfolio risk-return profiles. This fusion of quantitative rigor, regional market knowledge, and operational AI deployment defines his distinctive value proposition.
Technically, Jinghao works where traditional finance theory meets cutting-edge AI implementation. His expertise spans classical machine learning, deep learning, generative AI, and agentic workflows, with hands-on proficiency in Python, Power BI, n8n automation, enterprise knowledge management architectures using RAG and MCP protocols, and cloud-based AI platforms. He approaches problems with precision in problem definition, attention to data realities and organizational constraints, and an unwavering commitment to solutions that organizations can maintain and scale independently. His teaching philosophy emphasizes real cases over textbook abstractions, framework-based thinking, and tying every analytical model back to a concrete decision and measurable outcome.
What distinguishes Jinghao is his ability to operate simultaneously as scholar, practitioner, and institution-builder. Whether designing multi-tier AI training pathways aligned with SkillsFuture priorities, advising C-suite executives on data strategy and model governance, mentoring student consulting teams on live corporate projects, or structuring cross-border business platforms, he brings intellectual depth, operational pragmatism, and a collaborative leadership style that values evidence, clear communication, and disciplined execution. Based in Singapore with strong professional networks across Vietnam and the broader ASEAN region, Jinghao continues to architect scalable AI capabilities for organizations while advancing the field through research, teaching, and thought leadership that bridges academic rigor with commercial impact.`,
  },
  {
    name: "Phan Phi Long",
    i18nKey: "phanPhiLong",
    role: "CTO, Metaskills Institute",
    expertise: "IT Transformation | Generative AI | Agentic AI | SME Digitalisation",
    image: "/images/faculty/faculty-philong.jpg",
    bio: `As Chief Technology Officer of Metaskills Institute, Mr. Long Phan leads the Institute's technology strategy, AI engineering backbone, and digital learning infrastructure, ensuring its training platforms, agentic AI systems, and enterprise solutions remain at the forefront of innovation.
Mr. Long Phan is the Managing Director of Way4SME Pte Ltd and VASSS Pte Ltd, where he serves as a trusted IT partner to over 1,000 SMEs across Singapore. With deep expertise in IT service management and enterprise transformation, he has played a pivotal role in helping SMEs and startups redesign their IT infrastructure, streamline operational processes, and achieve scalable, sustainable growth.
An accomplished professional holding certifications such as PMP, ITIL Expert, and CEH, Mr. Phan brings extensive experience in process engineering, operations management, and cybersecurity. In recent years, he has also developed strong practical capabilities across Generative AI and agentic technology stacks, enabling organisations to adopt AI-driven automation, intelligent workflows, and next-generation digital solutions. His work has empowered companies to enhance system stability, improve operational efficiency, and build future-ready, AI-enabled capabilities.
Beyond his corporate leadership, Mr. Phan is actively engaged in the regional business community. He serves as President of the Vietnamese Association in Singapore, Vice-President of the Vietnam Chamber of Commerce in Singapore, and Director of Regulus Investment and Capital Holdings. Through these roles, he has supported more than 100 Vietnamese SMEs and startups in expanding into Singapore and leveraging it as a gateway to global markets.
Mr. Phan holds a degree in Computer Engineering from Nanyang Technological University. He also studied at the Ho Chi Minh University of Banking, specialising in stock exchange and financial markets. With over 15 years of trading experience across equities, futures, options, and cryptocurrencies in Vietnam, Singapore, and the United States, he brings a practitioner's perspective to financial markets. His grounded, practical insights have helped many traders navigate real-world challenges across asset classes.`,
  },
  {
    name: "Andrew Toh",
    i18nKey: "andrewToh",
    role: "Head, Operations, Metaskills Institute",
    expertise: "AI Operations | Training Systems | Business Transformation",
    image: "/images/faculty/faculty-andrew.png",
    bio: `Andrew Toh brings a unique combination of military leadership, adult education expertise, and AI-driven business transformation. He served 16 years in the Singapore Armed Forces (SAF) as a Subject Matter Expert (SME) in signal operations, specialising in LAN/WAN and radio communication systems. During his service, he was deeply involved in adult training and coaching, designing and delivering structured programmes for Regulars, Full-Time National Servicemen (NSFs), and NSmen across leadership and technical domains. He specialised in man management, training system design, and trainer development, including matching different training methodologies to different learner profiles, and is highly adaptive in adjusting training delivery dynamically (adhoc/on-the-go) to meet operational needs. He was also actively involved in large-scale national events, including the National Day Parade (NDP) 2009, 2013, and 2018, contributing to planning, coordination, and execution at scale. After transitioning from the military, Andrew expanded into AI operations, business development, and consulting, specialising in AI workflow design and implementation, vibe coding and prompt engineering, customised AI courses tailored to company use cases, train-the-trainer programmes for AI literacy and adoption, and business development and operational consulting, driving practical AI adoption aligned to real-world business needs.`,
  },
  {
    name: "Gary Ye",
    i18nKey: "garyYe",
    role: "Country Head, China, Metaskills Institute",
    expertise: "Business Development | China Market Expansion | Strategic Partnerships",
    image: "/images/faculty/faculty-gary.jpg",
    bio: `Gary Ye is a strategic "Go To Market" and partnerships leader with more than 10 years of experience in enterprise technology, channel management, and business development. He has held partner-facing and commercial roles at Hewlett Packard Enterprise, Ingram Micro, and Singtel, where he worked on channel growth, solution alignment, partner enablement, and revenue expansion. Besides his role at Metaskills Institute, he currently runs an education and consulting venture in Singapore, where he is developing partner networks in China and exploring practical AI applications in learner management, CRM, and digital marketing workflows.

He also brings experience in regional sales leadership, strategic alliances, cloud and SaaS solutions, and stakeholder management. His education includes a Bachelor in Digital Business from University College Dublin and a Diploma in Electronic, Computer and Communication Engineering from Nanyang Polytechnic.`,
  },
];

/* =========================
   AI TEAM
========================= */
const aiTeam: FacultyMember[] = [
  {
    name: "Dr. Jack Hong",
    i18nKey: "drJackHong",
    role: "Lead Senior Consultant",
    expertise: "AI Transformation | Data Science | Digital Strategy",
    image: "/images/faculty/faculty-jackhong.jpg",
    bio: `Dr. Jack Hong stands at the forefront of the Business Transformation landscape, harnessing the power of digital tools, data analytics, and cutting-edge Artificial Intelligence (AI) applications. As a visionary in the realm of Transformation-as-a-Service (XaaS), Dr. Hong is renowned for revolutionizing enterprises by reimagining their business models. His innovative approach involves a unique blend of proprietary frameworks, strategic team restructuring for optimal value delivery, mastery of data utilization, and the development of tailored AI solutions. 
Throughout his illustrious career, Dr. Hong has played a pivotal role in steering numerous enterprises, government entities, and systems integrators toward outcome-based transformations. His expertise spans diverse sectors, including real estate, healthcare, transportation, finance, education, and security, making him a highly sought-after figure in digital transformation.
He is the Founder and CEO of Integrum Global, a firm specialising in composable and agentic AI systems that operationalise machine learning, predictive analytics, and workflow automation across sectors such as healthcare, transport, real estate, education, and sustainability. Under his leadership, Integrum Global has implemented large-scale AI solutioning and competency-building programmes for both corporate and government clients across ASEAN. On Behalf of Integrum Global, Dr. Hong signed a MOU with Department of Planning and Investment of Ho Chi Minh City, as part of the Green Alliance of Transportation.
Beyond academia and business, Dr Hong contributes actively to Singapore's professional and enterprise ecosystem. He serves on committees with the Singapore Business Federation (SBF), the Singapore Computer Society (SCS), and the Association of Small and Medium Enterprises (ASME), where he advises on digital transformation, AI adoption, and workforce development. His cross-sector involvement positions him as a key connector between policy, innovation, and practice—supporting Singapore's move toward an AI-enabled economy.
He is also Co-founder of Research Room Pte Ltd, a data consultancy delivering advanced analytics and decision-support systems for financial, governmental, and industrial clients. Over the years, he has worked with organisations such as the Monetary Authority of Singapore (MAS), Vertex Holdings, MINDEF, Certis, and the Ministry of Education (MOE) on data-driven decision frameworks and AI deployment strategies.
Dr Hong's professional expertise spans composable AI architectures, knowledge automation, quantitative finance, and digital transformation strategy. A frequent keynote speaker at technology and leadership conferences—including KAINOS, Knight Frank Asia Pacific, and NTUC LearningHub—he advocates for responsible, measurable, and human-centric AI.
Before embarking on his current trailblazing path, Dr. Hong garnered extensive experience in the commercial sector and civil service. His notable roles include serving as the Corporate Planner for CapitaLand China and Ascott North Asia, with extensive exposure to Real Estate Private Equity; performing various significant roles within the Ministry of Defence, including International Military Relations; and a key member of the Organizing Secretariat of Singapore 2006 under the Monetary Authority of Singapore (MAS).
An ardent educator, Dr. Hong has been imparting his vast knowledge in digital transformation, artificial intelligence, and financial economics to undergraduates, postgraduates (MBA, EMBA, DBA), and professionals in academy programs since 2014. His academic contributions are further highlighted by his authorship of two applied works: "Financial Management, Theory and Practice" and "A Practitioner's Guide to Digital Platform Business," essential readings in Singapore Management University's MBA program.`,
  },
  {
    name: "Sriven Naidu | Sound Mind, Sound Body",
    i18nKey: "srivenNaidu",
    role: "Lead Senior Consultant, AI Leadership",
    expertise: "AI Governance | Leadership | Human-Centric AI",
    image: "/images/faculty/faculty-sriven.png",
    bio: `Sriven is an executive educator, leadership advisor, and AI-focused consultant with more than 20 years of experience across management education, leadership development, executive training, mindfulness practice, and facilitation in Asia, Europe, and North America. He is currently Executive-in-Residence at IMD, the Swiss business school that ranked #1 worldwide for custom programs in the Financial Times Executive Education Rankings 2025.

His advisory work draws human development, high performance, and disruptive technology together. Drawing on a cross-sector career spanning public policy, strategy, sport, law, executive education, and leadership development, Sriven helps leaders, institutions, and families respond wisely to the opportunities and risks created by AI, social media, and other emerging technologies.

A core area of his work is helping organizations and communities understand how new technologies are reshaping wellbeing, education, cognitive development, and creativity. He speaks and advises on the human costs of tech overexposure, including diminished attention, weakened reflection, fragmented learning, and the erosion of deep creativity, while offering practical safeguards for leaders, parents, educators, and children.

Sriven also brings a distinctive approach to capability development through mind-training. Building on his experience in mindfulness facilitation, leadership development, and high-performance sport, he teaches practical techniques to strengthen attention, focus, creativity, emotional regulation, and intuition in an age of tech-accelerated cognitive atrophy. In 2023, he developed a "Mind-Training for High Performance" programme for the Infijoy platform integrating Stoic philosophy, Himalayan mind-training practices, and positive psychology.

A further dimension of his consulting focuses on the governance of disruptive technologies, including AI and quantum computing. He helps senior leaders make sense of emerging regulation and its implications across consumer trust, privacy, sustainability, human rights, cybersecurity, military and geopolitical competition, and the strategic interests of major technology firms. His background in higher education policy, law, strategy, and executive leadership allows him to bridge the perspectives of governments, corporations, and civil society.

Sriven's earlier roles include Director of Strategy at Singapore Management University, Deputy Director of Higher Education Policy at Singapore's Ministry of Education, General Manager of a start-up in the creative industries, and Intellectual Property and Corporate Banking Lawyer. He has also designed and delivered leadership and transformation programmes for organizations including CapitaLand's Catapult executive learning centre, and major institutions and companies across the UK, US, India, and ASEAN.

He also serves as consultant and advisor to Benber Yu, Head Coach of Team Cicada Trackers, linking elite sport, reflective learning, and sustained performance development in ways that inform his broader leadership and AI advisory practice.

Sriven is adept in psychometric assessment, strengths-based development, and leadership facilitation, and brings a rare combination of strategic range, human insight, and cross-disciplinary depth to clients navigating technological disruption and transformation.`,
  },
  {
    name: "Adrian Toh",
    i18nKey: "adrianToh",
    role: "AI Senior Consultant",
    expertise: "AI in Finance | Investment Advisory | FX & Structured Products | Algorithmic Trading",
    image: "/images/faculty/faculty-adriantoh.jpg",
    bio: `Adrian Toh is an AI Senior Consultant who brings more than 13 years of frontline financial markets experience to the design and delivery of AI-powered solutions for the finance industry. Having held senior client-facing and advisory roles at leading institutions including UOB, ANZ, AG Investment Management LLP, and Citibank Singapore, he has advised private and high-net-worth clients across structured products, bonds, foreign exchange, dual-currency investments, equities, and commodities, with portfolios of up to S$100 million in assets under management. This deep practitioner background gives him a sharp instinct for where AI can create real value across wealth management, trading, and advisory workflows.
At Metaskills Institute, Adrian focuses on applying generative and agentic AI to the financial services value chain, including AI-augmented client advisory, intelligent portfolio analytics, automated market research and report generation, robo-advisory design, regulatory and compliance copilots, and AI-driven risk and fraud monitoring. He works with banks, wealth managers, and investment firms to translate frontline use cases into production-ready AI workflows, drawing on his commercial track record of consistently exceeding sales targets and growing assets under management through disciplined client acquisition, referral programmes, and structured marketing initiatives at UOB, ANZ, and Citibank Singapore.
Earlier in his career, Adrian served as a Director at AG Investment Management LLP, where he contributed to algorithmic trading system design, compliance, operations, and business development, and developed a 12-module foreign exchange trading model that achieved more than 23% per annum returns with drawdown below 8% over the period October 2009 to June 2010. This rare combination of frontline wealth advisory experience and quantitative trading system design positions Adrian to train and advise professionals working across financial markets, client advisory, and AI-augmented investment workflows — helping institutions move beyond pilots into measurable, governed AI deployment in finance.`,
  },
  {
    name: "Matthew Wu",
    i18nKey: "matthewWu",
    role: "Senior Strategist, Cross-Border Capital | Real Estate & Agricultural Investment | AI Digital Strategy",
    expertise: "Cross-Border Capital Raising & Deal Structuring | Real Estate & Agriculture | Asia-Pacific Investor Relations & Market Entry | AI for Market Research & Investment Intelligence",
    image: "/images/faculty/faculty-matthewwu.jpg",
    bio: `Matthew Wu is a Senior Strategist focused on cross-border capital, real estate and agricultural investment, and AI digital strategy. He applies AI-driven market research, investor intelligence, and deal-screening tools to sharpen due diligence, identify cross-border opportunities, and accelerate capital-raising workflows across Asia-Pacific. He began his career in private equity, and that grounding continues to shape the way he approaches transactions today. From understanding deal structures and investor expectations, to managing risk and nurturing long-term stakeholder relationships, his work is built on an analytical foundation refined over years of regional practice. Over time, his focus has extended across multiple markets and sectors, including real estate transactions in Hawaiʻi and Las Vegas, agricultural investment initiatives in Indonesia and Sri Lanka, and land transactions in the Philippines. The common thread throughout has been his ability to connect the right parties, navigate complex cross-border dynamics, and help move opportunities from discussion into execution. To date, he has contributed to and facilitated transactions collectively representing billions of dollars in project and investment value across Asia-Pacific, consistently centred on relationship development, market access, investor engagement, and cross-jurisdictional deal coordination.

One of the defining engagements of Matthew's career was The Villages of ʻAīna Leʻa, by any measure one of the most ambitious residential development projects ever undertaken on the Big Island of Hawaiʻi. The master plan covered more than 1,000 acres on the South Kohala Coast — 2,350 homes, a golf course, a resort lodge, retail, and medical facilities. The initial development was valued at US$1 billion, with a projected build-out value exceeding US$3 billion over an eight to ten year horizon. The developer, DW ʻAīna Leʻa Development LLC, had the vision and the land but needed a credible path to Asian capital. On the other side, a Singapore-based investment marketing firm had the investor network and regional distribution to move significant capital, but needed the right development partner to bring to market. Matthew knew both sides, had built genuine relationships with the principals of each organisation, and saw the fit before either of them did. Bridging two parties across different cultures, legal systems, and expectations of how business gets done is rarely straightforward; Matthew worked through all of it, and the financing agreement was signed in Singapore in July 2009. He stayed involved well past the signing, working closely with both teams through the early construction phase of the Lulana Gardens subdivision and helping keep things moving as the project transitioned from agreement into execution on the ground.

Matthew's work in agricultural capital raising in Indonesia is another body of work that reflects the depth of his cross-border practice. Indonesia is not an easy market: the regulatory landscape is layered, land ownership is complicated, and investors — whether institutional or private — require a level of confidence that takes time to build. Across multiple ventures, Matthew has raised in excess of US$250 million for agricultural projects there. That figure reflects years of patient work rather than a single transaction, and it speaks to his ability to structure investment propositions that hold up under scrutiny, navigate on-the-ground realities that rarely make it into any information memorandum, and maintain investor confidence across the full duration of a deal rather than only at the point of entry.

Beyond these flagship engagements, Matthew has assembled a broad regional deal portfolio. In Las Vegas, he worked with a US-based housing developer to open the Asian investor market for their residential portfolio. American developers entering Asia for the first time often underestimate how different the buyer mindset is, and Matthew understood both sides of that equation well enough to bridge them — giving the developer meaningful traction in a market they would not have been able to access on their own. In Sri Lanka, his agricultural work has continued in a market that demands patience and a solid grasp of local land ownership frameworks, where structuring transactions that work for all parties across different legal systems and stakeholder expectations is something he has done consistently. In the Philippines, where the property market moves on relationships as much as on numbers, he has facilitated land transactions with a careful read of both the foreign investment constraints that define what is possible and the personal trust that ultimately determines whether a deal closes.

Matthew's areas of expertise span cross-border deal facilitation and structuring, capital raising across real estate and agricultural sectors, investor relations and stakeholder management, Asia-Pacific market access and relationship development, multi-jurisdictional transaction management, American developer entry into Asian markets, end-to-end launch strategy and execution support, and the practical use of AI for market research, investor targeting, and transaction intelligence. Taken together, his career brings together relationships, capital, and cross-border opportunity — helping connect investors, developers, landowners, and strategic partners across multiple markets. From Hawaiʻi to Las Vegas, Indonesia to Sri Lanka and the Philippines, the markets have differed each time; the approach, however, has remained consistent: understand the opportunity, align the right stakeholders, and help guide transactions from concept through execution. Based in Singapore, Matthew remains active across Asia-Pacific real estate, agricultural investment, strategic land development, and international capital partnerships.`,
  },
  {
    name: "Dr Jonathan Khoo",
    i18nKey: "drJonathanKhoo",
    role: "AI Senior Consultant and Trainer",
    expertise: "Machine Learning | Deep Learning | App Development",
    image: "/images/faculty/faculty-jonathan.png",
    bio: `Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies that deliver complex prediction and decision-making capabilities to many large organizations. Dr Khoo has published papers in Genetic Programming and a working paper in Energy Prediction. He obtained his Ph.D. at SMU where his dissertation thesis investigates corporate finance through the lens of social network graph analytics, where he found a statistically significant "ownership centrality" effect in firm performance. Prior to that, he completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor), a year after he received degrees with Highest Honors in Economics and Summa Cum Laude in Electrical Engineering. He is an alumnus of Raffles Institution and Hwa Chong Institution.`,
  },
  {
    name: "Jack Tee",
    i18nKey: "jackTee",
    role: "AI Senior Consultant and Trainer",
    expertise: "AI Engineering | NLP | Computer Vision",
    image: "/images/faculty/faculty-jacktee.png",
    bio: `As the business-minded AI Engineering Head at Integrum Global, Jack Tee leverages his MBA from SMU and Mechanical Engineering background to craft high impact AI solutions across diverse fields. He has spearheaded projects such as identifying competitors for startups through financial news analysis using Natural Language Processing, enhancing train safety with speed estimation and search-and-rescue drones using Computer Vision, and developing a mobile app and web portal for real-time fleet management through route optimization. Jack is also advanced in large language model commercialization research and development, combining technical expertise with a strong focus on achieving business objectives.`,
  },
  {
    name: "Soon Yinjie",
    i18nKey: "soonYinjie",
    role: "AI Senior Consultant and Trainer",
    expertise: "Programming | EdTech | AI Systems",
    image: "/images/faculty/faculty-yinjie.jpg",
    bio: `Yinjie (YJ) is co-founder at Tinkertanker, a technology and education company in Singapore, building software, electronics, curriculum — and the next generation of coders, makers, and creators. YJ handles partnerships, strategy, and business development, while always making time to teach a few of his favourite programming classes. 
YJ received his Bachelor's and Master's degrees in Electrical Engineering from Stanford University in the USA, and a Post-Graduate Diploma in Secondary Education from the National Institute of Education in Singapore. Before Tinkertanker, YJ taught computing at Raffles Institution as Curriculum Head for Infocomm Technology, and served as a Senior Head for Policy & Planning at the Higher Education Division in MOE. For fun, he draws, collects programming memes, and tries to stop spending money on AI subscriptions.
YJ Soon is a full-stack software engineer and educator specializing in machine learning, Python development, and cloud-native workflows. He has extensive experience in web and mobile application development, as well as immersive technologies such as VR. YJ conducts technical training that merges hands-on coding with best practices in AI/ML deployment, making complex implementations approachable for learners from both technical and non-technical backgrounds.`,
  },
  {
    name: "Brendan Graetz",
    i18nKey: "brendanGraetz",
    role: "AI Senior Consultant and Trainer",
    expertise: "Generative AI | AI Engineering | Developer Education | DevRel Strategy | Backend Engineering",
    image: "/images/faculty/faculty-brendan.jpg",
    bio: `Brendan helps working professionals upskill by building practical confidence with generative AI and AI-assisted development. His background combines backend engineering, developer education, and DevRel strategy, with 10 years of software engineering and 7 years of experience creating courses, delivering workshops, and teaching technical concepts to learners who are new to software and AI.
He has built APIs that scaled past 1 million users for the Rio Olympics, built multi-tenant role-based authentication systems for Autopilot, and built crewing and rostering systems for Qantas. He has designed syllabi for developer courses at Rootstock, Hedera, and Injective, and has guest lectured at Singapore Management University. He founded DApps Dev Club, and has conducted workshops and spoken at many conferences and hackathons.`,
  },
  {
    name: "Evelyn Wong",
    i18nKey: "evelynWong",
    role: "AI Senior Consultant and Trainer",
    expertise: "Data Governance | Analytics | Compliance",
    image: "/images/faculty/faculty-evelyn.png",
    bio: `Evelyn Wong is a Data Governance Specialist currently leading data governance initiatives at Infinuem. She plays a pivotal role in developing and implementing data governance frameworks, policies, standards, and roles that strengthen data quality, security, and regulatory compliance, including alignment with PDPAand GDPR requirements. Working across finance, IT, risk, marketing, and AI teams, she helps harmonize data ownership and enable integrated analytics that support business decision-making.
In addition to her expertise in data governance, Evelyn brings strong capabilities in software development, data analysis, machine learning, and natural language applications. Her broad corporate background spans Compliance, Business Development, Sales & Marketing, and Project Management at global organizations such as 3M and Agilent Technologies, giving her a well-rounded perspective on business and technology transformation.
Evelyn is also an accomplished trainer in business and data analytics, with hands-on expertise in the Microsoft Power Platform, MySQL, and Python. Through her teaching engagements at SMU Academy and Metaskills Institute, she empowers mid-career professionals to transition into analytics and digital roles with confidence.
A Certified Lean Six Sigma Green Belt and Certified Scrum Master, Evelyn is highly skilled in applying Lean Six Sigma, Agile, and Scrum methodologies to improve organizational performance and drive continuous improvement. Her professional education also includes certifications in IT service management, enterprise architecture, and algorithmic trading, reflecting her strong commitment to lifelong learning and excellence.`,
  },
  {
    name: "Chris Tan Seok King",
    i18nKey: "chrisTan",
    role: "Senior Consultant and Trainer",
    expertise: "Financial Services | AI-Augmented Client Advisory | Sales Coaching",
    image: "/images/faculty/faculty-christan.jpg",
    bio: `Chris Tan is a seasoned sales trainer and former banking practitioner whose practice now brings financial services, client advisory, and AI-augmented selling together. A former Personal Banker at UOB and Financial Protection Specialist at OCBC, she brings frontline credibility from regulated bank environments together with years of experience designing and delivering sales coaching programmes for financial advisory and corporate sales teams across Singapore and Malaysia.
Her current focus is AI-augmented client advisory: helping advisers and relationship managers use generative AI tools to enrich client research, personalise outreach, prepare needs-based conversations, anticipate objections, and maintain disciplined follow-up — without losing the human trust that underpins advisory relationships. She trains teams to combine AI-generated insights with structured questioning, ethical disclosure, and compliant workflows so that technology amplifies rapport rather than replacing it.
She also specialises in building the daily habits and client-facing behaviours that drive commercial performance. Her programmes cover prospecting discipline, first-meeting confidence, needs-based dialogue, objection handling, follow-up consistency and closing effectiveness through structured role-plays, practical frameworks and accountability tools that translate training into action.
As Director and Sales Coach at Westrategos, she led coaching programmes for financial advisory agencies and corporate sales teams, achieving measured productivity improvements of 20% to 120% across teams. Earlier roles include Retail Sales Manager at Fame Partners, where she coached teams of 10 to 15 staff against monthly targets of S$60,000 to S$200,000, and Recruitment Consultant and Trainer at Prudential Assurance Malaysia, where she trained more than 30 financial planners. She holds a Bachelor of Economics and Finance and a Diploma in Financial Planning from the Singapore Institute of Management / RMIT University.`,
  },

  {
    name: "Alena Lavrinenko",
    i18nKey: "alenaLavrinenko",
    role: "AI Consultant and Trainer",
    expertise: "AI Solutions | Business Transformation",
    image: "/images/faculty/faculty-alena.jpg",
    bio: `Alena Lavrinenko is an AI expert with a dynamic blend of academic excellence and practical experience. A graduate with a Bachelor of Economics from Southern Federal University, Russia, and an MBA from Singapore Management University, she currently serves as the AI Solutions & Engineering Manager at Integrum Global in Singapore. In her role as an AI Trainer at JCube Institute, she is dedicated to nurturing future AI talent. With her extensive knowledge in AI applications and business transformation, Alena brings real-world insights and cutting-edge practices to her students.`,
  },
];

/* =========================
   ALGO TEAM
========================= */
const algoTradingTeam: FacultyMember[] = [
  {
    name: "Victor",
    i18nKey: "victor",
    role: "Lead Consultant, Algorithmic Trading",
    expertise: "Algo Trading | ML | Forex | Reinforcement Learning",
    image: "/images/faculty/faculty-victor.jpg",
    bio: `Victor is a seasoned financial professional and algorithmic trading specialist with over 20 years of experience in financial services, having previously founded and led his own firm focused on sales and marketing of financial products, risk management, and fiscal planning for high-net-worth individuals across the Greater China region.
Over the past four years, he has dedicated himself to his passion for algorithmic trading, self-funding and building a consistently profitable portfolio within the trillion-dollar forex and gold markets. Leveraging proprietary trading systems, Victor has successfully developed and deployed automated strategies powered by machine learning, with a particular focus on deep reinforcement learning for time-series analysis.
His methodology combines rigorous statistical modelling of currencies and commodities markets with advanced engineering, writing high-performance algorithms in C++ and Python to execute trades with precision, scalability, and consistency.
Beyond his personal trading success, Victor works closely with a network of self-funded, highly successful algorithmic trading professionals at Metaskills Institute, supported by a dedicated research team that has collectively tested hundreds of trading bots (Expert Advisors). This has enabled the team to identify sustainable, high-performing systems, while also developing proprietary trading bots (valued at over USD 4,000) that can be optimally configured for strong, risk-managed returns.
Currently, Victor is leading the development of a next-generation multi-agent trading framework designed to redefine how trading research, backtesting, deployment, and portfolio management are conducted.
This framework represents a major leap beyond traditional trading systems — enabling capabilities that were not feasible even three years ago. By orchestrating a network of intelligent agents, the system performs continuous market research, adaptive strategy optimisation, automated execution, and real-time risk management.
Built on emerging agentic AI architectures, including technologies such as OpenClaw, the framework aligns with the broader industry evolution toward autonomous, multi-agent systems — enabling traders to operate with the equivalent of a full institutional trading desk powered by AI.`,
  },
];

/* =========================
   CYBER TEAM
========================= */
const cyberTeam: FacultyMember[] = [
  {
    name: "Steven Ong",
    i18nKey: "stevenOng",
    role: "Lead Cyber Security Consultant",
    expertise: "ISO 27001 | NIST | Enterprise Security",
    image: "/images/faculty/faculty-steven.jpg",
    bio: `Steven Ong is a distinguished cybersecurity leader and academic with over 25 years of experience spanning enterprise security governance, regulatory compliance, digital transformation, and higher education leadership. As Chief Information Security Officer at the institutional level, he transformed cybersecurity from a reactive function into a structured, risk-based governance model aligned with ISO 27001 and the NIST Cybersecurity Framework. 
He established a comprehensive Information Security Program covering data protection, incident response, third-party risk, and policy governance, while forming a cross-functional Cybersecurity Steering Committee to embed security into executive decision-making. Steven strengthened compliance across FERPA, PDPA, and GDPR requirements, conducted enterprise-wide risk assessments, and formalized a risk register to enhance oversight and reduce regulatory exposure. He built a centralized Security Operations capability with 24/7 monitoring, deployed SIEM and EDR solutions, and implemented a tested Incident Response Plan, successfully containing phishing and ransomware threats without operational disruption. He enhanced research security through Zero Trust architecture and network segmentation, implemented institution-wide MFA and RBAC, automated identity lifecycle management, and reduced phishing click rates from 35% to 12% through targeted awareness programs. He also led cloud security governance, introduced CASB monitoring, optimized cybersecurity budgets, and secured increased funding through risk-based business cases. 
As a Senior Lecturer, he designed industry-aligned cybersecurity curricula, supervised over 100 undergraduate projects and 30+ Master's dissertations, trained corporate clients from leading organizations, developed advanced cybersecurity laboratories, and served in academic leadership roles. His career reflects a powerful integration of executive strategy, operational excellence, academic leadership, and national cybersecurity contribution.`,
  },
  {
    name: "Jimmy Leong",
    i18nKey: "jimmyLeong",
    role: "Senior Cyber Security Advisor",
    expertise: "Adult Learning | AI & Cyber Training",
    image: "/images/faculty/faculty-jimmy.png",
    bio: `Jimmy Leong (AFHEA) is a Singapore-based master trainer and adult education specialist with over 20 years of experience in adult learning and information technology. He specialises in the design and delivery of instructor development programmes, competency-based curricula, and hands-on technical training, with a focus on AI and cybersecurity domains. Throughout his career, he has supported organisations such as MINDEF, Amazon Web Services (AWS), Grab, McKinsey & Company (Generation), and the Institute for Adult Learning Singapore, delivering capability development initiatives for both public and private sector audiences. Jimmy adopts an evidence-based approach to adult learning, integrating practical methodologies such as simulated labs, tabletop exercises, and structured assessment frameworks to ensure effective knowledge transfer and measurable training outcomes.`,
  },
  {
    name: "Johnson Ang",
    i18nKey: "johnsonAng",
    role: "Lead Consultant, AI Security & DevOps",
    expertise: "Agentic AI Security | DevSecOps | Air-Gapped AI Infrastructure | VAPT | Cloud & MLOps",
    image: "/images/faculty/faculty-johnson.jpg",
    bio: `Johnson Ang is a cybersecurity and DevOps leader with over 15 years of experience across banking, national infrastructure, and higher education. His work brings secure engineering and applied AI together — building systems that are not only intelligent, but defensible.
At ST Engineering, Johnson led the design and delivery of a unified Agentic AI platform, consolidating fragmented tooling into a governed, enterprise-grade environment and delivering more than S$700k in annual savings. He architected secure, air-gapped GPU and LLMOps infrastructure for national security workloads, enabling sensitive AI development in fully isolated environments — a domain where very few practitioners have hands-on depth.
Earlier, at DBS Bank, he drove revenue-generating digital platforms and large-scale automation programmes, embedding DevSecOps practices into delivery pipelines and reducing manual toil across engineering teams. His technical range spans vulnerability assessment and penetration testing, Zero Trust architecture, cloud security across AWS and Azure, container and Kubernetes hardening, and CI/CD security automation.
Johnson is equally at home in the classroom. He has taught and developed programmes at NUS and SUTD, mentoring engineers and postgraduate students in secure cloud, DevOps, and AI operations. He holds industry cybersecurity credentials alongside cloud and AI certifications, and brings accredited adult-education experience to every engagement.
At Metaskills Institute, Johnson leads the AI Security and DevOps practice — helping organisations deploy agentic AI safely, secure their AI supply chain, and build engineering teams that can ship fast without breaking trust.`,
  },
];

/* =========================
   TRANSLATION HOOK
========================= */
const useFacultyTranslation = (f: FacultyMember) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  if (lang === "en" || !f.i18nKey) {
    return { role: f.role, expertise: f.expertise, bio: f.bio };
  }

  const key = f.i18nKey;
  const role = t(`facultyProfiles.${key}.role`, { defaultValue: "" }) || f.role;
  const expertise = t(`facultyProfiles.${key}.expertise`, { defaultValue: "" }) || f.expertise;
  const bio = t(`facultyProfiles.${key}.bio`, { defaultValue: "" }) || f.bio;

  return { role, expertise, bio };
};

/* =========================
   COMPONENTS
========================= */

const COLLAPSED_LINES = 7;

const facultySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[.'"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BioText = ({ bio, forceExpanded = false }: { bio: string; forceExpanded?: boolean }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (forceExpanded) setExpanded(true);
  }, [forceExpanded]);
  const contentRef = useRef<HTMLDivElement>(null);
  const paragraphs = bio.trim().split("\n").filter(Boolean);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const check = () => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "0") || 22;
      setHasMore(el.scrollHeight > lineHeight * COLLAPSED_LINES + 2);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [bio]);

  return (
    <div>
      <div className="relative">
        <div
          ref={contentRef}
          className="text-sm text-muted-foreground leading-relaxed"
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: COLLAPSED_LINES,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-justify mb-3 last:mb-0">{p}</p>
          ))}
        </div>
        {!expanded && hasMore && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
        >
          {expanded ? (
            <>{t("facultyPage.showLess")} <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>{t("facultyPage.readFullBio")} <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
};


const FacultyCard = ({ f, i }: { f: FacultyMember; i: number }) => {
  const ft = useFacultyTranslation(f);
  const { t } = useTranslation();
  const slug = facultySlug(f.name);
  const [highlighted, setHighlighted] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (hash !== slug) return;
      setHighlighted(true);
      window.setTimeout(() => {
        const el = cardRef.current;
        if (!el) return;
        const offset = window.innerWidth >= 768 ? 110 : 90;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }, 250);
      window.setTimeout(() => setHighlighted(false), 2600);
    };
    handle();
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, [slug]);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    toast.success(t("facultyPage.linkCopied", { defaultValue: "Link copied" }), {
      description: url,
    });
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      key={f.name}
      id={slug}
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className={`group scroll-mt-32 grid md:grid-cols-[240px_1fr] gap-8 py-10 border-b border-border last:border-b-0 rounded-lg transition-all duration-700 ${
        highlighted ? "ring-2 ring-primary/70 ring-offset-4 ring-offset-background bg-primary/[0.04]" : "ring-0"
      }`}
    >
      <div>
        <div className="aspect-square overflow-hidden rounded-lg shadow-md">
          <img src={withFacultyImageVersion(f.image)} alt={f.name} className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-start gap-2">
            <h3 className="text-xl font-bold text-foreground">{f.name}</h3>
            <button
              type="button"
              onClick={copyLink}
              aria-label={`Copy link to ${f.name}`}
              title={t("facultyPage.copyLink", { defaultValue: "Copy link to this profile" })}
              className="mt-1 shrink-0 rounded-full p-1.5 text-muted-foreground opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 hover:text-primary hover:bg-primary/10 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Link2 className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm font-medium text-primary mt-0.5">{ft.role}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{ft.expertise}</p>
        </div>
        <div className="mt-2">
          <BioText bio={ft.bio} forceExpanded={highlighted} />
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = ({ title, description, members }: { title: string; description?: string; members: FacultyMember[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 bg-primary rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      </div>
      {description && (
        <p className="text-muted-foreground ml-[19px] max-w-2xl">{description}</p>
      )}
    </div>
    <div className="divide-y divide-border border-t border-border">
      {members.map((f, i) => (
        <FacultyCard key={f.name} f={f} i={i} />
      ))}
    </div>
  </motion.div>
);

const FacultyPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <section className="bg-primary/5 py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("facultyPage.heroTitle")}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("facultyPage.heroSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1140px] mx-auto px-6">
            <TeamSection
              title={t("facultyPage.executiveTeam")}
              description={t("facultyPage.execDesc")}
              members={executiveTeam}
            />
            <TeamSection
              title={t("facultyPage.aiTeam")}
              description={t("facultyPage.aiDesc")}
              members={aiTeam}
            />
            <TeamSection
              title={t("facultyPage.algoTeam")}
              description={t("facultyPage.algoDesc")}
              members={algoTradingTeam}
            />
            <TeamSection
              title={t("facultyPage.cyberTeam")}
              description={t("facultyPage.cyberDesc")}
              members={cyberTeam}
            />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FacultyPage;
