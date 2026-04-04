import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const executiveTeam = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute | Senior Consultant",
    expertise: "Data Analytics | Data Science | Agentic AI | AI | Machine Learning",
    image: "/images/faculty/faculty-jinghao.png",
    bio: "Dr. Ke is the co-founder of Research Room, a highly trained team of Data Scientists and Analysts with domain expertise in economics, finance, strategy, and business management. He has provided management consulting for and managed teams to help thousands of individuals, SMEs, MNCs and various Singapore Government agencies deliver bespoke implementations of data-driven turn-key technology solutions in areas of complex prediction, decision making, machine learning, deep learning, amongst others. Dr. Ke is also co-founder of JCube Institute and a full-stack programmer well versed in various analytics stacks such as Python, R, SAS, Power BI, Microsoft Analytics and Stata. On top of his work, he is adjunct faculty with the Singapore Management University in his spare time and teaches at Professional, Masters and Undergraduate levels.",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute | Senior Consultant",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: "/images/faculty/faculty-chris.jpg",
    bio: "Christopher Tan is an entrepreneurial education, technology, and strategy leader with over 20 years of experience across Government, Higher Education, and Industry. He has built high-performance teams, led transformation initiatives, and played key roles in SMU Academy and national policy development.",
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations | Consultant",
    expertise: "Operational Leadership | AI-Driven Transformation",
    image: "/images/faculty/faculty-andrew.png",
    bio: "Andrew Toh brings a unique combination of military leadership, adult education expertise, and AI-driven business transformation. He served 16 years in the Singapore Armed Forces (SAF) as a Subject Matter Expert in signal operations, designing and delivering structured training programmes for Regulars, NSFs, and NSmen. He specialises in training system design, trainer development, and adaptive delivery methodologies, and was involved in National Day Parade (NDP) 2009, 2013, and 2018. Transitioning into the corporate space, he now focuses on AI operations, vibe coding, customised corporate training, train-the-trainer programmes, and business consulting, driving practical AI adoption aligned to real-world business use cases.",
  },
];

const aiTeam = [
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning",
    image: "/images/faculty/faculty-jackhong.jpg",
    bio: "Co-founder of Research Room, an A.I. consulting and development outfit that delivers decision-making capabilities for complex use-cases, Dr. Hong specializes in developing prediction and decision engines with the use of alternative data. Some of his notable works include omni-channel content personalization systems, manpower resource optimization using deep reinforcement learning, real estate valuation engines, and highly personalized portfolio strategies using applied artificial intelligence (AI). He is also AI Technology Consultant at Certis Group, Data Science Advisor at Vertex Holdings, advising on Human Conversational AI, Predictive Resource Allocation, Super-Intelligence in Natural Language Capabilities in Finance. He is also CEO of Integrum Global. Adjunct faculty with the Singapore Management University (SMU), and has been actively teaching undergraduate, postgraduate, and professional programmes since 2015. He is also the lead faculty for the highly acclaimed "Leading Digital Transformation" course for MBA students.",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "AI | Machine Learning | Deep Learning",
    image: "/images/faculty/faculty-jacktee.png",
    bio: "Jack Tee is an AI Engineering leader specialising in developing practical AI solutions for real-world business applications, including NLP, computer vision, and optimisation systems.",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI",
    image: "/images/faculty/faculty-jonathan.png",
    bio: "Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies that deliver complex prediction and decision-making capabilities to many large organizations. Dr Khoo has published papers in Genetic Programming and a working paper in Energy Prediction. He obtained his Ph.D. at SMU where his dissertation thesis investigates corporate finance through the lens of social network graph analytics, where he found a statistically significant "ownership centrality" effect in firm performance. Prior to that, he completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor), a year after he received degrees with Highest Honors in Economics and Summa Cum Laude in Electrical Engineering. He is an alumnus of Raffles Institution and Hwa Chong Institution.",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Analytics",
    image: "/images/faculty/faculty-evelyn.png",
    bio: "Evelyn currently leads infinuem as a Data Governance Specialist to play a pivotal role in participating in data governance initiatives, develop and implement data governance frameworks, policies, standards and roles. Besides being adept in software development, data analysis, machine learning, natural language programming and applications, Evelyn has an extensive background in corporate functions, including Compliance, Business Development, Sales & Marketing and Project Management at 3M and Agilent Technologies. Evelyn is also a Certified Lean Six Sigma Green Belt and Certified Scrum Master. She is well-versed in applying the advanced elements of the Lean Six Sigma, Agile and Scrum Methodologies in any organisation. Evelyn's professional education includes certifications in IT service management, enterprise architecture, and algorithmic trading, further underscoring her commitment to continuous learning and excellence in her field.",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative AI | AI Solutions",
    image: "/images/faculty/faculty-alena.jpg",
    bio: "Alena Lavrinenko is an AI Solutions Manager specialising in generative and agentic AI, helping organisations transition from experimentation to operational deployment.",
  },
];

const algoTradingTeam = [
  {
    name: "Victor",
    role: "Lead Consultant, Algorithmic Trading",
    expertise: "Algorithmic Trading | Forex | ML",
    image: "/images/faculty/faculty-victor.png",
    bio: "Victor brings over 20 years of experience in financial markets, specialising in algorithmic trading systems powered by machine learning and reinforcement learning for automated trading performance.",
  },
];

const cyberTeam = [
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity | ISO 27001",
    image: "/images/faculty/faculty-steven.jpg",
    bio: "Steven Ong is a cybersecurity leader with over 25 years of experience in enterprise security, governance, and compliance, with strong expertise in ISO 27001 and NIST frameworks.",
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI Training",
    image: "/images/faculty/faculty-jimmy.jpg",
    bio: "Jimmy Leong is a master trainer with over 20 years of experience in adult education and IT training, specialising in AI and cybersecurity curriculum design and delivery.",
  },
];

const adjunctTrainers = [
  {
    name: "Soon Yinjie",
    role: "Adjunct Trainer",
    expertise: "Programming | EdTech",
    image: "/images/faculty/faculty-yinjie.jpg",
    bio: "SYInjie is co-founder at Tinkercademy and Tinkertanker Pte Ltd., a technology and education company in Singapore, building software, electronics, curriculum, and the next generation of coders, makers, and creators. YJ handles partnerships, strategy, and business development, while always making time to teach a few of his favourite programming classes. YJ received his Bachelor's and Master's degrees in Electrical Engineering from Stanford University in the USA, and a Post-Graduate Diploma in Secondary Education from the National Institute of Education in Singapore. Before Tinkertanker, YJ taught computing at Raffles Institution as Curriculum Head for Infocomm Technology, and served as a Senior Head for Policy & Planning at the Higher Education Division in the Ministry of Education, Singapore.",
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
    transition={{ delay: i * 0.1 }}
    className="grid md:grid-cols-4 gap-8 border-t pt-10"
  >
    <div className="md:col-span-1">
      <div className="aspect-square overflow-hidden rounded-sm">
        <img
          src={f.image}
          alt={f.name}
          className="w-full h-full object-cover"
        />
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
  const { t } = useTranslation();

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
