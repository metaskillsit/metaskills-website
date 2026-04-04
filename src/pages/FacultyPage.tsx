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
    bio: "Dr. Jinghao Ke is a recognised leader in applied AI, finance, and analytics, with extensive experience spanning AI development, digital transformation, and executive education across ASEAN. He has led cross-border consulting projects and is known for bridging advanced AI capabilities with practical business applications.",
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
    bio: "Dr. Jack Hong is a leader in enterprise AI adoption, guiding organisations from strategy to large-scale deployment. He has trained thousands of professionals across ASEAN and specialises in practical AI implementation.",
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
    bio: "Dr Jonathan Khoo is a full-stack AI developer with strong academic credentials from SMU and the University of Michigan, specialising in predictive modelling and data-driven decision systems.",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Analytics",
    image: "/images/faculty/faculty-evelyn.png",
    bio: "Evelyn Wong is a data governance specialist with experience across finance, IT, and risk, leading enterprise data frameworks and training professionals in analytics and AI tools.",
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
    bio: "Soon Yinjie is co-founder of Tinkercademy and a leader in programming education and curriculum innovation with strong academic and policy experience.",
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
