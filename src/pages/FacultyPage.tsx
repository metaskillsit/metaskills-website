import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ChevronDown, ChevronUp } from "lucide-react";

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
Technically, Jinghao operates at the intersection of traditional finance theory and cutting-edge AI implementation. His expertise spans classical machine learning, deep learning, generative AI, and agentic workflows, with hands-on proficiency in Python, Power BI, n8n automation, enterprise knowledge management architectures using RAG and MCP protocols, and cloud-based AI platforms. He approaches problems with precision in problem definition, attention to data realities and organizational constraints, and an unwavering commitment to solutions that organizations can maintain and scale independently. His teaching philosophy emphasizes real cases over textbook abstractions, framework-based thinking, and tying every analytical model back to a concrete decision and measurable outcome.
What distinguishes Jinghao is his ability to operate simultaneously as scholar, practitioner, and institution-builder. Whether designing multi-tier AI training pathways aligned with SkillsFuture priorities, advising C-suite executives on data strategy and model governance, mentoring student consulting teams on live corporate projects, or structuring cross-border business platforms, he brings intellectual depth, operational pragmatism, and a collaborative leadership style that values evidence, clear communication, and disciplined execution. Based in Singapore with strong professional networks across Vietnam and the broader ASEAN region, Jinghao continues to architect scalable AI capabilities for organizations while advancing the field through research, teaching, and thought leadership that bridges academic rigor with commercial impact.`,
  },
  {
    name: "Chris Tan",
    i18nKey: "christopherTan",
    role: "Chief Business Development Officer, Metaskills Institute",
    expertise: "Agentic AI | Data Science | AI Marketing | Algorithmic Trading | Business Development",
    image: "/images/faculty/faculty-chris.jpg",
    bio: `Chris Tan currently serves as the Chief Business Development Officer at Metaskills Institute, a premier AI Institute in Asia. Through Metaskills Institute, he supports whole-of-organisation AI capability transformation, delivering training in emerging AI areas such as Agentic AI, Vibe Coding, and AI literacy for organisations including MINDEF, IMDA, OCBC, UOB, Maybank, and AIA, amongst others, enabling enterprises and government bodies to build future-ready digital capabilities at scale. Christopher Tan is a senior strategy, transformation, and business development leader with over 20 years of experience building and scaling high-impact platforms across higher education, government, and technology ventures.
He is also heads business development at Singapore Vietnam Business Bridge (SVBB), a consulting firm focused on helping Singapore-based companies expand into Vietnam. Through this platform, he advises on market entry strategy, partnership development, and execution, and developed the Business Vietnam Programme, which has brought more than 300 business founders and executives into Vietnam to explore investment opportunities, partnerships, and cross-border expansion strategies.
Previously, Chris was part of the founding team at Singapore Management University (SMU) Academy, where he built a new business pillar entirely from scratch and scaled it into the Academy's top-performing revenue unit. Over three years, he launched more than 100 programmes and certification pathways, including a strong portfolio of technology-enabled programmes in AI, Machine Learning, Data Analytics (R and Python), Software Development, Digital Marketing, and E-Commerce. He built and managed a network of more than 120 trainers and industry practitioners, while designing and implementing the entire marketing and sales engine from the ground up.
His programmes were developed in collaboration with organisations such as the Singapore Tourism Board, Singapore Academy of Law, Temasek Polytechnic, Singapore MIT Alliance for Research and Technology (SMART), MINDEF, Real Madrid Academy, and SMU Case Writing Centre. Under his leadership, the business unit generated approximately $18 million in revenue within three years, contributing around 40% of SMU Academy's total revenue, with continued performance of $16–20 million annually after his departure.
In addition to commercial growth, he led enterprise transformation initiatives within SMU, delivering more than 12 cross-functional projects and Lean Six Sigma Black Belt implementations that improved demand forecasting, operational efficiency, and institutional planning.
Earlier in his career, Chris held education leadership roles at Republic Polytechnic and the Ministry of Education (MOE), where he contributed to national manpower planning and education system design, working across MOE, MOM, Singapore Economic Agencies, Universities, and Polytechnics. He also established Technology Development Centres in collaboration with A*STAR (I2R) and launched over 20 Continuing Education programmes aligned with industry needs.
Chris began his career as an entrepreneur, founding and scaling a software company from 4 to 20 staff, delivering approximately 30 projects and generating over $2.5 million in annual revenue, with clients including the Singapore Police Force, Stolt-Nielsen, The Ascott, and Pan Asia Paper.
Across his career, Christopher is recognised for his ability to build scalable growth platforms, structure complex transformation initiatives, and align stakeholders across public and private sectors to deliver measurable outcomes. He is particularly effective in situations that require turning strategy into execution at scale, especially in areas involving AI, capability development, and international market expansion. He is well-positioned to support organisations at the board, advisory, and senior leadership level in building new growth engines, driving digital and AI transformation, and navigating complex, multi-stakeholder environments.`,
  },
  {
    name: "Andrew Toh",
    i18nKey: "andrewToh",
    role: "Head, Operations, Metaskills Institute",
    expertise: "AI Operations | Training Systems | Business Transformation",
    image: "/images/faculty/faculty-andrew.png",
    bio: `Andrew Toh brings a unique combination of military leadership, adult education expertise, and AI-driven business transformation. He served 16 years in the Singapore Armed Forces (SAF) as a Subject Matter Expert (SME) in signal operations, specialising in LAN/WAN and radio communication systems. During his service, he was deeply involved in adult training and coaching, designing and delivering structured programmes for Regulars, Full-Time National Servicemen (NSFs), and NSmen across leadership and technical domains. He specialised in man management, training system design, and trainer development, including matching different training methodologies to different learner profiles, and is highly adaptive in adjusting training delivery dynamically (adhoc/on-the-go) to meet operational needs. He was also actively involved in large-scale national events, including the National Day Parade (NDP) 2009, 2013, and 2018, contributing to planning, coordination, and execution at scale. After transitioning from the military, Andrew expanded into AI operations, business development, and consulting, specialising in AI workflow design and implementation, vibe coding and prompt engineering, customised AI courses tailored to company use cases, train-the-trainer programmes for AI literacy and adoption, and business development and operational consulting, driving practical AI adoption aligned to real-world business needs.`,
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
    name: "Sriven Naidu",
    i18nKey: "srivenNaidu",
    role: "Lead Senior Consultant, AI Leadership",
    expertise: "AI Governance | Leadership | Human-Centric AI",
    image: "/images/faculty/faculty-sriven.png",
    bio: `Sriven is an executive educator, leadership advisor, and AI-focused consultant with more than 20 years of experience across management education, leadership development, executive training, mindfulness practice, and facilitation in Asia, Europe, and North America. He is currently Executive-in-Residence at IMD, the Swiss business school that ranked #1 worldwide for custom programs in the Financial Times Executive Education Rankings 2025.
His advisory work sits at the intersection of human development, high performance, and disruptive technology. Drawing on a cross-sector career spanning public policy, strategy, sport, law, executive education, and leadership development, Sriven helps leaders, institutions, and families respond wisely to the opportunities and risks created by AI, social media, and other emerging technologies.
A core area of his work is helping organizations and communities understand how new technologies are reshaping wellbeing, education, cognitive development, and creativity. He speaks and advises on the human costs of tech overexposure, including diminished attention, weakened reflection, fragmented learning, and the erosion of deep creativity, while offering practical safeguards for leaders, parents, educators, and children.
Sriven also brings a distinctive approach to capability development through mind-training. Building on his experience in mindfulness facilitation, leadership development, and high-performance sport, he teaches practical techniques to strengthen attention, focus, creativity, emotional regulation, and intuition in an age of tech-accelerated cognitive atrophy. In 2023, he developed a "Mind-Training for High Performance" programme for the Infijoy platform integrating Stoic philosophy, Himalayan mind-training practices, and positive psychology.
A further dimension of his consulting focuses on the governance of disruptive technologies, including AI and quantum computing. He helps senior leaders make sense of emerging regulation and its implications across consumer trust, privacy, sustainability, human rights, cybersecurity, military and geopolitical competition, and the strategic interests of major technology firms. His background in higher education policy, law, strategy, and executive leadership allows him to bridge the perspectives of governments, corporations, and civil society.
Sriven's earlier roles include Director of Strategy at Singapore Management University, Deputy Director of Higher Education Policy at Singapore's Ministry of Education, General Manager of a start-up in the creative industries, and Intellectual Property and Corporate Banking Lawyer. He has also designed and delivered leadership and transformation programmes for organizations including CapitaLand's Catapult executive learning centre, Banyan Tree Hotels & Resorts, and major institutions and companies across the UK, US, India, and ASEAN.
He previously led a team of Coach Developers at the Singapore Sport Institute, supporting high-performance coaches in reflective practice and continuing professional development. He also serves as consultant and advisor to Benber Yu, Head Coach of Team Cicada Trackers, linking elite sport, reflective learning, and sustained performance development in ways that inform his broader leadership and AI advisory practice.
Sriven holds an MBA from INSEAD and a Bachelor of Laws from the National University of Singapore. He is adept in psychometric assessment, strengths-based development, and leadership facilitation, and brings a rare combination of strategic range, human insight, and cross-disciplinary depth to clients navigating technological disruption and transformation.`,
  },
  {
    name: "Phan Phi Long",
    i18nKey: "phanPhiLong",
    role: "Senior Consultant and Trainer, AI Leadership",
    expertise: "IT Transformation | Generative AI | Agentic AI | SME Digitalisation",
    image: "/images/faculty/faculty-philong.png",
    bio: `Mr. Long Phan is the Managing Director of Way4SME Pte Ltd and VASSS Pte Ltd, where he serves as a trusted IT partner to over 1,000 SMEs across Singapore. With deep expertise in IT service management and enterprise transformation, he has played a pivotal role in helping SMEs and startups redesign their IT infrastructure, streamline operational processes, and achieve scalable, sustainable growth.
An accomplished professional holding certifications such as PMP, ITIL Expert, and CEH, Mr. Phan brings extensive experience in process engineering, operations management, and cybersecurity. In recent years, he has also developed strong practical capabilities across Generative AI and agentic technology stacks, enabling organisations to adopt AI-driven automation, intelligent workflows, and next-generation digital solutions. His work has empowered companies to enhance system stability, improve operational efficiency, and build future-ready, AI-enabled capabilities.
Beyond his corporate leadership, Mr. Phan is actively engaged in the regional business community. He serves as President of the Vietnamese Association in Singapore, Vice-President of the Vietnam Chamber of Commerce in Singapore, and Director of Regulus Investment and Capital Holdings. Through these roles, he has supported more than 100 Vietnamese SMEs and startups in expanding into Singapore and leveraging it as a gateway to global markets.
Mr. Phan holds a degree in Computer Engineering from Nanyang Technological University. He also studied at the Ho Chi Minh University of Banking, specialising in stock exchange and financial markets. With over 15 years of trading experience across equities, futures, options, and cryptocurrencies in Vietnam, Singapore, and the United States, he brings a practitioner's perspective to financial markets. His grounded, practical insights have helped many traders navigate real-world challenges across asset classes.`,
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
    role: "Senior Cyber Security Consultant",
    expertise: "Adult Learning | AI & Cyber Training",
    image: "/images/faculty/faculty-jimmy.jpg",
    bio: `Jimmy Leong (AFHEA) is a Singapore-based master trainer and adult education specialist with over 20 years of experience in adult learning and information technology. He specialises in the design and delivery of instructor development programmes, competency-based curricula, and hands-on technical training, with a focus on AI and cybersecurity domains. Throughout his career, he has supported organisations such as MINDEF, Amazon Web Services (AWS), Grab, McKinsey & Company (Generation), and the Institute for Adult Learning Singapore, delivering capability development initiatives for both public and private sector audiences. Jimmy adopts an evidence-based approach to adult learning, integrating practical methodologies such as simulated labs, tabletop exercises, and structured assessment frameworks to ensure effective knowledge transfer and measurable training outcomes.`,
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

const BioText = ({ bio }: { bio: string }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const paragraphs = bio.trim().split("\n").filter(Boolean);
  const preview = paragraphs.slice(0, 2).join("\n");
  const hasMore = paragraphs.length > 2;

  return (
    <div>
      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
        {expanded ? bio.trim() : preview}
      </p>
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

  return (
    <motion.div
      key={f.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="grid md:grid-cols-[240px_1fr] gap-8 py-10 border-b border-border last:border-b-0"
    >
      <div>
        <div className="aspect-square overflow-hidden rounded-lg shadow-md">
          <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-xl font-bold text-foreground">{f.name}</h3>
          <p className="text-sm font-medium text-primary mt-0.5">{ft.role}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{ft.expertise}</p>
        </div>
        <div className="mt-2">
          <BioText bio={ft.bio} />
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
      <main className="pt-16">
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
