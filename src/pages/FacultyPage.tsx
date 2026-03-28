import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const executiveTeam = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute | Senior Consultant",
    expertise: "Data Analytics | Data Science | Agentic AI | AI | Machine Learning | Business Intelligence | Corporate Finance | Applied AI Consulting",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/JinghaoKe-ProfilePic-gemini-light-square.png",
    bio: "Dr. Jinghao Ke is a recognised leader in applied AI, finance, and analytics, with projects spanning AI development, digital transformation, and executive education. As CEO of JCube Institute and Chief Research Officer of Integrum Global, he has led cross-border consulting projects in AI-driven finance, supply chains, and sustainability. He also serves as adjunct faculty at Singapore Management University, teaching business analytics and finance, and has developed curricula for universities, corporates, and government agencies across ASEAN.",
  },
  {
    name: "Andrew",
    role: "Head, Operations | Consultant",
    expertise: "Operational Leadership | AI-Driven Transformation | Prompt Engineering | Workflow Architecture",
    image: "https://metaskills.sg/wp-content/uploads/2026/02/Andrew-e1772293476358.jpeg",
    bio: "Blending 17 years of defense and corporate experience, Andrew brings a unique mix of operational leadership, technical expertise, business development, and AI-driven transformation. Currently overseeing operations at Metaskills Institute and Integrum Global, he designs and deploys practical AI workflows in live business environments, including AI-powered ticket triaging, helpdesk automation and SLA monitoring dashboards.",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute | Senior Consultant",
    expertise: "Data Science | Algorithmic Trading | Business Development | Higher Education Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Chris-Tan-e1772416392943.jpg",
    bio: "Entrepreneurial Education, Technology and Strategy leader with 20+ years of impact across Government, Higher Education and Industry. Founding team of SMU's Office of Business Improvement while earning a Lean Six Sigma Black Belt. Was subsequently part of the initial founding team to set up SMU Academy, launching hundreds of programmes in Data Analytics, AI, Financial Trading, App/Web Development, and Digital Marketing.",
  },
];

const aiTeam = [
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning | Business Intelligence | Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
    bio: "Dr. Jack Hong is Founder & CEO of Integrum Global, a consultancy, training, and software company driving enterprise AI adoption. As Adjunct Faculty at Singapore Management University for over 10 years, Jack teaches MBA, EMBA, doctoral, and executive education programmes. He also serves as Chair of Advocacy & Research at ASME, SME Committee Member at SBF, and Executive Committee Member of the AI Ethics & Governance Chapter at SCS.",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning | NLP | Computer Vision",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Jack-Tee.jpeg",
    bio: "As the business-minded AI Engineering Head at Integrum Global, Jack Tee leverages his MBA from SMU and Mechanical Engineering background to craft impactful AI solutions. He has spearheaded projects in financial news NLP analysis, train safety computer vision, and real-time fleet management through route optimization. Jack is also advanced in large language model commercialization research and development.",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Agentic AI | Machine Learning | Deep Learning",
    image: "https://metaskills.sg/wp-content/uploads/2022/10/Jon-300x300-1.jpg",
    bio: "Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies. He obtained his Ph.D. at SMU and completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor). He is an alumnus of Raffles Institution and Hwa Chong Institution.",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Adult Learning | Compliance & Risk Management",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/Evelyn-300-300x300.jpg",
    bio: "Evelyn Wong is a data governance specialist with deep expertise in creating and operationalising frameworks that elevate data quality, ensure compliance, and enable trustworthy AI. She is an Adjunct Trainer with SMU Academy and JCube Institute, having trained more than 200 professionals in data analytics, business intelligence, and machine learning tools.",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | AI Solutions Consulting | Supply Chain & Built Environment | Professional Training",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/Alena1.jpg",
    bio: "Alena Lavrinenko is an AI Solutions Manager at Integrum Global and an AI Trainer with JCube Institute and Metaskills Institute. She designs and delivers enterprise-ready programmes in Generative and Agentic AI. Alena holds an MBA from Singapore Management University and has worked with leading organisations including CDL, SingLand, TPC Group, and MINDEF.",
  },
];

const cyberTeam = [
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security | Zero Trust | Incident Response",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/STeven-e1772366589711.jpeg",
    bio: "Steven Ong is a seasoned cybersecurity executive and academic leader with over 25 years of experience in enterprise security governance, regulatory compliance, digital transformation, and higher education leadership. He implemented comprehensive security policies aligned with ISO 27001 and the NIST Cybersecurity Framework, built centralized Security Operations capability with 24/7 monitoring, and reduced phishing click rates from 35% to 12% through targeted awareness initiatives.",
  },
];

const adjunctTrainers = [
  {
    name: "YJ Soon",
    role: "Adjunct Trainer",
    expertise: "Machine Learning | Python Development | Cloud-Native Workflows | VR",
    image: "",
    bio: "YJ Soon is a full-stack software engineer and educator specializing in machine learning, Python development, and cloud-native workflows. He conducts technical training that merges hands-on coding with best practices in AI/ML deployment.",
  },
  {
    name: "Magdalene Yang",
    role: "Adjunct Trainer",
    expertise: "Organizational Change | Workforce Transformation | Learning Consultancy",
    image: "",
    bio: "Magdalene Yang is a Transformational Learning & Development leader within Integrum Global, specializing in organizational change, workforce transformation, and learning consultancy.",
  },
  {
    name: "Chua Aik Tuck",
    role: "Adjunct Trainer",
    expertise: "Generative AI | Prompt Engineering | LLM Applications | Enterprise AI Systems",
    image: "",
    bio: "Chua Aik Tuck is a specialist in generative AI and prompt engineering, with experience building LLM-based domain-specific applications and deploying enterprise hybrid/on-prem AI systems.",
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
          <img
            src={f.image}
            alt={f.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-square overflow-hidden rounded-sm bg-muted flex items-center justify-center">
          <span className="text-4xl font-heading font-bold text-muted-foreground/30">
            {f.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
    <div className="md:col-span-3">
      <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
      <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
      <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4">
        {f.expertise}
      </p>
      {f.bio && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {f.bio}
        </p>
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero */}
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Meet Our Coaches & Consultants
            </h1>
            <p className="text-white/70 mt-4 text-lg max-w-2xl">
              Practitioners, researchers, and educators behind our programmes.
            </p>
          </div>
        </section>

        {/* Faculty intro */}
        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <p className="text-muted-foreground leading-relaxed">
              Our faculty have collectively trained more than 10,000 professionals and teach Data Science at renowned Universities. All our trainers are carefully selected and known for simplifying difficult concepts for learners.
            </p>
          </div>

          <TeamSection title="MetaSkills Executive Team" members={executiveTeam} />
          <TeamSection title="AI / Data Science Team" members={aiTeam} />
          <TeamSection title="Cyber Security Team" members={cyberTeam} />
          <TeamSection title="Adjunct Trainers" members={adjunctTrainers} />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FacultyPage;
