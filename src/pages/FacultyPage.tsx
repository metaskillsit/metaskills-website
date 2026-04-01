import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import jimmyImg from "@/assets/jimmy-profile.jpg";

const executiveTeam = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute | Senior Consultant",
    expertise: "Data Analytics | Data Science | Agentic AI | AI | Machine Learning | Business Intelligence | Corporate Finance | Applied AI Consulting",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/JinghaoKe-ProfilePic-gemini-light-square.png",
    bio: "Dr. Jinghao Ke is a recognised leader in applied AI, finance, and analytics, with projects spanning AI development, digital transformation, and executive education.\n\nAs CEO of JCube Institute and Chief Research Officer of Integrum Global, he has led cross-border consulting projects in AI-driven finance, supply chains, and sustainability. He also serves as adjunct faculty at Singapore Management University, teaching business analytics and finance, and has developed curricula for universities, corporates, and government agencies across ASEAN.",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute | Senior Consultant",
    expertise: "Data Science | Algorithmic Trading | Business Development | Higher Education Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Chris-Tan-e1772416392943.jpg",
    bio: "Entrepreneurial Education, Technology and Strategy leader with 20+ years of impact across Government, Higher Education and Industry. Recognised for building high-performance teams, securing strategic collaborations, delivering funding-backed innovation, and aligning strategy, operations and technology to measurable growth and quality outcomes.\n\nFounding team of SMU's Office of Business Improvement while earning a Lean Six Sigma Black Belt and driving 12 institution-wide transformation projects. Was also subsequently part of the initial founding team to set up SMU Academy. Established revenue and business development operations from scratch, launched and ran hundreds of programmes in Business Vietnam, Data Analytics, AI, Financial Trading, App/Web Development, Digital Marketing, amongst others.\n\nAt Ministry of Education Higher Education Division, led national manpower planning, policy evaluation and cross-institution partnerships. Founded and scaled a 10-staff software development company serving MNC, public sector clients before exit in early years of career.",
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations | Consultant",
    expertise: "Operational Leadership | AI-Driven Transformation | Vibe Coding | Prompt Engineering | Workflow Architecture",
    image: "https://metaskills.sg/wp-content/uploads/2026/02/Andrew-e1772293476358.jpeg",
    bio: "Blending 17 years of defense and corporate experience, Andrew brings a unique mix of operational leadership, technical expertise, business development, and AI-driven transformation.\n\nAndrew spent 16 years in the Singapore Armed Forces (SAF), serving as a Subject Matter Expert in LAN/WAN and radio communication systems and as an Institute Trainer designing structured curricula for Regulars and NSFs. As Company Sergeant Major, he led and developed over 80 personnel, ensuring operational readiness, discipline, and performance excellence. He also spearheaded large-scale communications exercises locally and overseas, and contributed to national initiatives such as NDP 2013 and NDP 2018 in media and content roles.\n\nTransitioning into the corporate sector, he expanded into business growth and digital transformation. He has also driven professional upskilling initiatives, promoting AI and digital capabilities to organizations and working professionals.\n\nCurrently, overseeing operations at Metaskills Institute and Integrum Global, he designs and deploys practical AI workflows in live business environments. Notable work includes AI-powered ticket triaging, helpdesk automation and SLA monitoring dashboards. He specialises in prompt engineering and workflow architecture, leveraging Claude and other LLMs to reduce turnaround time, improve reporting clarity, and enhance decision-making.",
  },
];

const aiTeam = [
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning | Business Intelligence | Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
    bio: "Dr. Jack Hong is Founder & CEO of Integrum Global, a consultancy, training, and software company driving enterprise AI adoption through its proprietary frameworks and solutions. He has led transformation projects across sectors, guiding organisations from strategic diagnosis to prototype design and enterprise-scale deployment.\n\nAs Adjunct Faculty at Singapore Management University for over 10 years, Jack teaches MBA, EMBA, doctoral, and executive education programmes in digital transformation, machine learning, and finance. He has trained thousands of professionals and senior leaders in Singapore and across ASEAN.\n\nJack also serves in key leadership roles including Chair of Advocacy & Research at the Association of Small & Medium Enterprises (ASME), SME Committee Member at the Singapore Business Federation (SBF), and Executive Committee Member of the AI Ethics & Governance Chapter at the Singapore Computer Society (SCS).",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning | Business Intelligence | Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Jack-Tee.jpeg",
    bio: "As the business-minded AI Engineering Head at Integrum Global, Jack Tee leverages his MBA from SMU and Mechanical Engineering background to craft impactful AI solutions across diverse fields. He has spearheaded projects such as identifying competitors for startups through financial news analysis using Natural Language Processing, enhancing train safety with speed estimation and search-and-rescue drones using Computer Vision, and developing a mobile app and web portal for real-time fleet management through route optimization. Jack is also advanced in large language model commercialization research and development, combining technical expertise with a strong focus on achieving business objectives.",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning",
    image: "https://metaskills.sg/wp-content/uploads/2022/10/Jon-300x300-1.jpg",
    bio: "Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies that deliver complex prediction and decision-making capabilities to many large organizations.\n\nDr Khoo has published papers in Genetic Programming and a working paper in Energy Prediction. He obtained his Ph.D. at SMU where his dissertation thesis investigates corporate finance through the lens of social network graph analytics, where he found a statistically significant \"ownership centrality\" effect in firm performance.\n\nPrior to that, he completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor), a year after he received degrees with Highest Honors in Economics and Summa Cum Laude in Electrical Engineering. He is an alumnus of Raffles Institution and Hwa Chong Institution.",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Adult Learning | Compliance & Risk Management",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/Evelyn-300-300x300.jpg",
    bio: "Evelyn Wong is a data governance specialist with deep expertise in creating and operationalising frameworks that elevate data quality, ensure compliance, and enable trustworthy AI and analytics. She has worked across functions—finance, IT, risk, marketing, and data science—to harmonise data ownership and stewardship, ensuring integrated analytics while maintaining regulatory standards under PDPA and GDPR.\n\nEvelyn is also an experienced adult learning practitioner, having trained more than 200 professionals in data analytics, business intelligence, and machine learning tools including Power BI, MySQL, Python, and VBA. She is an Adjunct Trainer with SMU Academy and JCube Institute, where she equips mid-career professionals with the skills to transition into data and AI roles.\n\nPassionate about promoting data literacy, Evelyn links governance initiatives to business outcomes—improving data quality, enhancing decision-making, and fostering a data-conscious culture.",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | AI Solutions Consulting | Supply Chain & Built Environment | Professional Training",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/Alena1.jpg",
    bio: "Alena Lavrinenko is an AI Solutions Manager at Integrum Global and an AI Trainer with JCube Institute and Metaskills Institute. She designs and delivers enterprise-ready programmes in Generative and Agentic AI, enabling organisations to move beyond experimentation to operational adoption.\n\nHer work spans prompt engineering, Python applications, and agentic workflows, combined with domain expertise in the built environment and supply chains. She has trained mid-career professionals, public sector officers, and enterprise leaders, translating AI capabilities into tangible business outcomes.\n\nAlena holds an MBA from Singapore Management University and has worked with leading organisations including City Developments Ltd (CDL), Singapore Land Group (SingLand), TPC Group, and MINDEF. Her passion lies in bridging advanced AI technologies with accessible, practical training that drives adoption at scale.",
  },
];

const algoTradingTeam = [
  {
    name: "Victor",
    role: "Lead Consultant, Algorithmic Trading",
    expertise: "Algorithmic Trading | Forex & Gold Markets | MetaTrader 4/5 | Machine Learning | Deep Reinforcement Learning | C++ | Python",
    image: "https://metaskills.sg/wp-content/uploads/2022/08/Victor-300sq-300x300.jpg",
    bio: "Victor used to run his own firm with more than 20 years of financial experience in sales and marketing financial products and risk management, fiscal planning for high-net-worth individuals in the greater China region.\n\nFor the past 4 years, he has self-funded his other passion which is algorithmic trading in the trillion dollar forex and gold market. Currently he has a consistent and successful portfolio in the market using proprietary trading systems that he has developed to run on auto mode using machine learning especially in deep reinforcement learning on time series analysis. He runs a lot of statistical analysis on currencies and commodities market and then writes algorithms and programs using C++ and Python.\n\nBesides Victor, all our trainers are self-funded and successful algorithmic trading masters with very consistent, lucrative and successful portfolio in the forex and precious metals market. Together with our research team at Metaskills Institute, they have field tested over hundreds of trading bots (EAs) with a good knowledge of the sustainable and profitable ones. In addition to selecting and giving away some of these trading bots, the team has also developed proprietary trading bots (worth more than USD4k) that can be optimally configured to generate high returns.",
  },
];


const cyberTeam = [
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security | Zero Trust | Incident Response",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/STeven-e1772366589711.jpeg",
    bio: "Steven Ong is a seasoned cybersecurity executive and academic leader with over 25 years of experience in enterprise security governance, regulatory compliance, digital transformation, and higher education leadership. As a Chief Information Security Officer, he transformed institutional cybersecurity into a structured, risk-based program aligned with ISO 27001 and the NIST Cybersecurity Framework. He implemented comprehensive security policies, established a cross-functional Cybersecurity Steering Committee, and strengthened compliance across FERPA, PDPA, and GDPR frameworks. Through enterprise-wide risk assessments and formalized risk registers, he significantly reduced regulatory exposure and enhanced executive oversight.\n\nHe also built centralized Security Operations capability with 24/7 monitoring, deployed SIEM and EDR solutions, and implemented tested Incident Response Plan that successfully contained phishing and ransomware threats without operational disruption. He secured research environments using Zero Trust principles and network segmentation, introduced institution-wide Multi-Factor Authentication and Role-Based Access Control, automated identity lifecycle management, and reduced phishing click rates from 35% to 12% through targeted awareness initiatives. He also led cloud security governance, implemented CASB monitoring, optimized cybersecurity investments, and secured increased funding through strategic business cases.\n\nAs a Senior Lecturer, Steven has designed industry-aligned cybersecurity curricula, developed advanced cybersecurity laboratories, supervised over 100 undergraduate and 30+ Master's projects, and trained corporate clients from leading organizations. His career reflects a rare integration of executive strategy, operational excellence, academic leadership, and national cybersecurity capacity building.",
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI & Cybersecurity Training | Instructor Development | Competency-Based Curricula",
    image: jimmyImg,
    bio: "Jimmy Leong (AFHEA) is a Singapore-based master trainer and adult education specialist with over 20 years of experience in adult learning and information technology. He specialises in the design and delivery of instructor development programmes, competency-based curricula, and hands-on technical training, with a focus on AI and cybersecurity domains. Throughout his career, he has supported organisations such as MINDEF, Amazon Web Services (AWS), Grab, McKinsey & Company (Generation), and the Institute for Adult Learning Singapore, delivering capability development initiatives for both public and private sector audiences. Jimmy adopts an evidence-based approach to adult learning, integrating practical methodologies such as simulated labs, tabletop exercises, and structured assessment frameworks to ensure effective knowledge transfer and measurable training outcomes.",
  },
];

const adjunctTrainers = [
  {
    name: "YJ Soon",
    role: "Adjunct Trainer",
    expertise: "Machine Learning | Python Development | Cloud-Native Workflows | VR",
    image: "",
    bio: "YJ Soon is a full-stack software engineer and educator specializing in machine learning, Python development, and cloud-native workflows. He has extensive experience in web and mobile application development, as well as immersive technologies such as VR. YJ conducts technical training that merges hands-on coding with best practices in AI/ML deployment, making complex implementations approachable for learners from both technical and non-technical backgrounds.",
  },
];

interface FacultyMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

const FacultyCard = ({ f, i }: { f: FacultyMember; i: number }) => (
  <motion.div
    key={f.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    className="grid md:grid-cols-4 gap-8 border-t border-border pt-10"
  >
    <div className="md:col-span-1">
      {f.image ? (
        <div className="aspect-square overflow-hidden rounded-sm">
          <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
      ) : (
        <div className="aspect-square overflow-hidden rounded-sm bg-muted flex items-center justify-center">
          <span className="text-4xl font-heading font-bold text-muted-foreground/30">{f.name.charAt(0)}</span>
        </div>
      )}
    </div>
    <div className="md:col-span-3">
      <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
      <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
      <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4">{f.expertise}</p>
      {f.bio && (
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          {f.bio.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const TeamSection = ({ title, members }: { title: string; members: FacultyMember[] }) => (
  <div className="mb-16">
    <h2 className="font-heading text-2xl font-bold text-foreground mb-8">{title}</h2>
    <div className="space-y-14">
      {members.map((f, i) => (
        <FacultyCard key={f.name} f={f} i={i} />
      ))}
    </div>
  </div>
);

const FacultyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("facultyPage.heroTitle")}
            </h1>
            <p className="text-white/70 mt-4 text-lg max-w-2xl">
              {t("facultyPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <p className="text-muted-foreground leading-relaxed">
              {t("facultyPage.intro")}
            </p>
          </div>

          <TeamSection title={t("facultyPage.executiveTeam")} members={executiveTeam} />
          <TeamSection title={t("facultyPage.aiTeam")} members={aiTeam} />
          <TeamSection title={t("facultyPage.algoTeam")} members={algoTradingTeam} />
          <TeamSection title={t("facultyPage.cyberTeam")} members={cyberTeam} />
          <TeamSection title={t("facultyPage.adjunctTrainers")} members={adjunctTrainers} />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FacultyPage;
