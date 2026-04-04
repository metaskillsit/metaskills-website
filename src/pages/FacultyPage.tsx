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
    bio: "Dr. Jinghao Ke is a recognised leader in applied AI...",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute | Senior Consultant",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: "/images/faculty/faculty-chris.jpg",
    bio: "Entrepreneurial Education, Technology and Strategy leader...",
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations | Consultant",
    expertise: "Operational Leadership | AI-Driven Transformation",
    image: "/images/faculty/faculty-andrew.png",
    bio: "Blending 17 years of defense and corporate experience...",
  },
];

const aiTeam = [
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning",
    image: "/images/faculty/faculty-jackhong.jpg",
    bio: "Dr. Jack Hong is Founder & CEO of Integrum Global...",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "AI | Machine Learning | Deep Learning",
    image: "/images/faculty/faculty-jacktee.png",
    bio: "As the business-minded AI Engineering Head...",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI",
    image: "/images/faculty/faculty-jonathan.png",
    bio: "Dr Jonathan Khoo is a full-stack app developer...",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Analytics",
    image: "/images/faculty/faculty-evelyn.png",
    bio: "Evelyn Wong is a data governance specialist...",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative AI | AI Solutions",
    image: "/images/faculty/faculty-alena.jpg",
    bio: "Alena Lavrinenko is an AI Solutions Manager...",
  },
];

const algoTradingTeam = [
  {
    name: "Victor",
    role: "Lead Consultant, Algorithmic Trading",
    expertise: "Algorithmic Trading | Forex | ML",
    image: "/images/faculty/faculty-victor.png",
    bio: "Victor used to run his own firm...",
  },
];

const cyberTeam = [
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity | ISO 27001",
    image: "/images/faculty/faculty-steven.jpg",
    bio: "Steven Ong is a seasoned cybersecurity executive...",
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI Training",
    image: "/images/faculty/faculty-jimmy.jpg",
    bio: "Jimmy Leong is a master trainer...",
  },
];

const adjunctTrainers = [
  {
    name: "Soon Yinjie",
    role: "Adjunct Trainer",
    expertise: "Programming | EdTech",
    image: "/images/faculty/faculty-yinjie.jpg",
    bio: "Yinjie is co-founder at Tinkercademy...",
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
