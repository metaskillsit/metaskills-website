import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface FacultyMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

const executiveTeam: FacultyMember[] = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute | Senior Consultant",
    expertise: "Data Analytics | Data Science | Agentic AI | AI | Machine Learning",
    image: "/images/faculty/faculty-jinghao.png",
    bio: `Dr. Ke is the co-founder of Research Room, a highly trained team of Data Scientists and Analysts with domain expertise in economics, finance, strategy, and business management. He has provided management consulting for and managed teams to help thousands of individuals, SMEs, MNCs and various Singapore Government agencies deliver bespoke implementations of data-driven turn-key technology solutions in areas of complex prediction, decision making, machine learning, deep learning, amongst others. Dr. Ke is also co-founder of JCube Institute and a full-stack programmer well versed in various analytics stacks such as Python, R, SAS, Power BI, Microsoft Analytics and Stata. On top of his work, he is adjunct faculty with the Singapore Management University in his spare time and teaches at Professional, Masters and Undergraduate levels.`,
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute | Senior Consultant",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: "/images/faculty/faculty-chris.jpg",
    bio: `Christopher Tan is an entrepreneurial education, technology, and strategy leader with over 20 years of experience across Government, Higher Education, and Industry. He has built high-performance teams, led transformation initiatives, and played key roles in SMU Academy and national policy development.`,
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations | Consultant",
    expertise: "Operational Leadership | AI-Driven Transformation | Vibe Coding",
    image: "/images/faculty/faculty-andrew.png",
    bio: `Andrew Toh brings a unique combination of military leadership, adult education expertise, and AI-driven business transformation. He served 16 years in the Singapore Armed Forces (SAF) as a Subject Matter Expert (SME) in signal operations, specialising in LAN/WAN and radio communication systems. During his service, he was deeply involved in adult training and coaching, designing and delivering structured programmes for Regulars, Full-Time National Servicemen (NSFs), and NSmen across leadership and technical domains. He specialised in man management, training system design, and trainer development, including matching different training methodologies to different learner profiles, and is highly adaptive in adjusting training delivery dynamically (adhoc/on-the-go) to meet operational needs. He was also actively involved in large-scale national events, including the National Day Parade (NDP) 2009, 2013, and 2018, contributing to planning, coordination, and execution at scale. After transitioning from the military, Andrew expanded into AI operations, business development, and consulting, specialising in AI workflow design and implementation, vibe coding and prompt engineering, customised AI courses tailored to company use cases, train-the-trainer programmes for AI literacy and adoption, and business development and operational consulting, driving practical AI adoption aligned to real-world business needs.`,
  },
];

const aiTeam: FacultyMember[] = [
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning",
    image: "/images/faculty/faculty-jackhong.jpg",
    bio: `Co-founder of Research Room, an A.I. consulting and development outfit that delivers decision-making capabilities for complex use-cases, Dr. Hong specializes in developing prediction and decision engines with the use of alternative data. Some of his notable works include omni-channel content personalization systems, manpower resource optimization using deep reinforcement learning, real estate valuation engines, and highly personalized portfolio strategies using applied artificial intelligence (AI). He is also AI Technology Consultant at Certis Group, Data Science Advisor at Vertex Holdings, advising on Human Conversational AI, Predictive Resource Allocation, Super-Intelligence in Natural Language Capabilities in Finance. He is also CEO of Integrum Global. Adjunct faculty with the Singapore Management University (SMU), and has been actively teaching undergraduate, postgraduate, and professional programmes since 2015. He is also the lead faculty for the highly acclaimed "Leading Digital Transformation" course for MBA students.`,
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | NLP | Computer Vision",
    image: "/images/faculty/faculty-jacktee.png",
    bio: `As the business-minded AI Engineering Head at Integrum Global, Jack Tee leverages his MBA from SMU and Mechanical Engineering background to craft impactful AI solutions across diverse fields. He has spearheaded projects such as identifying competitors for startups through financial news analysis using Natural Language Processing, enhancing train safety with speed estimation and search-and-rescue drones using Computer Vision, and developing a mobile app and web portal for real-time fleet management through route optimization. Jack is also advanced in large language model commercialization research and development, combining technical expertise with a strong focus on achieving business objectives.`,
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "/images/faculty/faculty-jonathan.png",
    bio: `Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies that deliver complex prediction and decision-making capabilities to many large organizations. Dr Khoo has published papers in Genetic Programming and a working paper in Energy Prediction. He obtained his Ph.D. at SMU where his dissertation thesis investigates corporate finance through the lens of social network graph analytics, where he found a statistically significant "ownership centrality" effect in firm performance. Prior to that, he completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor), a year after he received degrees with Highest Honors in Economics and Summa Cum Laude in Electrical Engineering. He is an alumnus of Raffles Institution and Hwa Chong Institution.`,
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Compliance",
    image: "/images/faculty/faculty-evelyn.png",
    bio: `Evelyn Wong is a data governance specialist who currently leads Infiniuem, playing a pivotal role in data governance initiatives—developing and implementing frameworks, policies, standards, and roles that elevate data quality, ensure compliance, and enable trustworthy AI and analytics. She has worked across functions—finance, IT, risk, marketing, and data science—to harmonise data ownership and steward integrated analytics while maintaining regulatory standards under PDPA and GDPR. Evelyn has an extensive corporate background spanning Compliance, Business Development, Sales & Marketing, and Project Management at 3M and Agilent Technologies. She is adept in software development, data analysis, machine learning, and natural language processing. A Certified Lean Six Sigma Green Belt and Certified Scrum Master, she is well-versed in applying Lean Six Sigma, Agile, and Scrum methodologies across organisations.`,
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | Supply Chain",
    image: "/images/faculty/faculty-alena.jpg",
    bio: `Alena Lavrinenko is a Generative & Agentic AI specialist with a strong background in supply chain and professional training. She focuses on helping organisations move from AI experimentation to real-world deployment, combining technical expertise with practical business applications.`,
  },
];

const algoTradingTeam: FacultyMember[] = [
  {
    name: "Victor",
    role: "Lead Consultant, Algo Trading",
    expertise: "Algorithmic Trading | Forex & Gold Markets | Machine Learning",
    image: "/images/faculty/faculty-victor.png",
    bio: `Victor brings over 20 years of experience in financial markets, specialising in algorithmic trading systems powered by machine learning and reinforcement learning for automated trading performance.`,
  },
];

const cyberTeam: FacultyMember[] = [
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security",
    image: "/images/faculty/faculty-steven.jpg",
    bio: `Steven Ong is a cybersecurity leader with over 25 years of experience in enterprise security, governance, and compliance, with strong expertise in ISO 27001 and NIST frameworks.`,
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI & Cybersecurity Training | Instructor Development",
    image: "/images/faculty/faculty-jimmy.jpg",
    bio: `Jimmy Leong (AFHEA) is a Singapore-based master trainer and adult education specialist with over 20 years of experience in adult learning and information technology. He specialises in the design and delivery of instructor development programmes, competency-based curricula, and hands-on technical training, with a focus on AI and cybersecurity domains.`,
  },
];

const adjunctTrainers: FacultyMember[] = [
  {
    name: "Soon Yinjie",
    role: "Adjunct Trainer",
    expertise: "Programming | EdTech | Curriculum Development",
    image: "/images/faculty/faculty-yinjie.jpg",
    bio: `Soon Yinjie is co-founder at Tinkercademy and Tinkertanker Pte Ltd., a technology and education company in Singapore, building software, electronics, curriculum, and the next generation of coders, makers, and creators.`,
  },
];

const FacultyCard = ({ f, i }: { f: FacultyMember; i: number }) => (
  <motion.div
    key={f.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    className="grid md:grid-cols-4 gap-8 border-t pt-10"
  >
    <div className="md:col-span-1">
      <div className="aspect-square overflow-hidden rounded-sm">
        <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="md:col-span-3">
      <h3 className="text-xl font-bold">{f.name}</h3>
      <p className="text-sm text-primary">{f.role}</p>
      <p className="text-xs text-accent uppercase">{f.expertise}</p>
      <p className="text-sm text-muted-foreground">{f.bio}</p>
    </div>
  </motion.div>
);

const TeamSection = ({ title, members }: { title: string; members: FacultyMember[] }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold mb-8">{title}</h2>
    <div className="space-y-14">
      {members.map((f, i) => (
        <FacultyCard key={f.name} f={f} i={i} />
      ))}
    </div>
  </div>
);

const FacultyPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-[1140px] mx-auto px-6">
            <TeamSection title="Executive Team" members={executiveTeam} />
            <TeamSection title="AI Team" members={aiTeam} />
            <TeamSection title="Algo Trading Team" members={algoTradingTeam} />
            <TeamSection title="Cyber Team" members={cyberTeam} />
            <TeamSection title="Adjunct Trainers" members={adjunctTrainers} />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FacultyPage;
