import { ExternalLink, Calendar, MapPin, Award, CheckCircle2, MessageCircle, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const COURSE_URL = "https://academy.smu.edu.sg/courses/professional-certificate-machine-learning";
const APPLY_URL = "https://smu.eteams.com.sg/registration#/Login?coursecode=PC-MLIGD";
const ENQUIRE_URL = "https://academy.smu.edu.sg/programme-enquiry?course=Professional%20Certificate%20in%20Machine%20Learning&nid=81306";
const WHATSAPP_URL = "https://wa.me/6589483482?text=Hi%2C%20I%27m%20interested%20in%20the%20Metaskills%20Institute%20Professional%20Certificate%20in%20Applied%20AI.";

const modules = [
  { n: 1, title: "Machine Learning Data Pipelines and Visualisation Mastery with Python", dates: "7, 8 & 11 Jul 2026", status: "Registration Closed" },
  { n: 2, title: "Statistical Mastery for Machine Learning and AI Success", dates: "28, 29 Jul & 1 Aug 2026", status: "Open for Registration" },
  { n: 3, title: "Supervised Machine Learning for Building and Deploying Models", dates: "18, 19 & 22 Aug 2026", status: "Open for Registration" },
  { n: 4, title: "Unsupervised Machine Learning and Advanced Techniques for Insights", dates: "8, 9 & 12 Sep 2026", status: "Open for Registration" },
  { n: 5, title: "Deep Learning and Machine Learning Mastery in Vision and Transfer Learning", dates: "29, 30 Sep & 3 Oct 2026", status: "Open for Registration" },
  { n: 6, title: "Machine Learning with Language Models and Agentic Workflows for Organisational Transformation", dates: "20, 21 & 24 Oct 2026", status: "Open for Registration" },
];

const audience = [
  "Professionals and managers in data science, engineering, or IT seeking to upskill in machine learning and AI",
  "Individuals transitioning into machine learning roles who have basic Python or programming experience",
  "Industry practitioners looking to understand and implement AI-driven solutions for business challenges",
  "Analysts or researchers aiming to apply ML/AI techniques to data-driven decision-making processes",
];

const objectives = [
  "Build and deploy machine learning pipelines efficiently using Python",
  "Apply supervised and unsupervised learning techniques for various business applications",
  "Understand and implement deep learning models for computer vision and transfer learning tasks",
  "Leverage language models and multi-agent AI workflows for automation and innovation",
  "Solve real-world problems using scalable, production-ready ML solutions",
];

const trainers = [
  { name: "Dr Jack Hong", role: "Data Science Advisor", org: "Vertex Holdings" },
  { name: "Dr Ke Jinghao", role: "Director", org: "Metaskills Institute" },
  { name: "Evelyn Wong", role: "Certified Lean Six Sigma Green Belt & Certified Scrum Master", org: "—" },
];

const SMUPCMLPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0b1a2b] via-[#0f2540] to-[#0b1a2b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Analytics & Tech", "Artificial Intelligence", "Innovation & Business Improvement", "Intermediate", "SkillsFuture"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20">
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Metaskills Institute</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Professional Certificate in Applied AI
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-3xl">
            A six-module, hands-on programme by Metaskills Institute that equips working professionals to design, build,
            and deploy machine-learning and AI solutions in real-world scenarios.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <Stat icon={<Calendar className="w-5 h-5" />} label="Next Intake" value="28 Jul 2026" />
            <Stat icon={<GraduationCap className="w-5 h-5" />} label="Level" value="Intermediate" />
            <Stat icon={<MapPin className="w-5 h-5" />} label="Venue" value="CT Hub 2, Singapore" />
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Apply Now <ExternalLink className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition">
              <MessageCircle className="w-4 h-4" /> Chat with Specialist
            </a>
            <a href={ENQUIRE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <Section title="Overview">
              <p>
                This programme equips participants with hands-on skills to design, build, and deploy
                machine-learning and artificial-intelligence solutions in real-world scenarios.
              </p>
              <p>
                Designed for working professionals, it focuses on practical implementation over theoretical
                concepts, enabling learners to work with advanced Python tools, explore supervised and
                unsupervised learning techniques, and leverage state-of-the-art AI technologies such as deep
                learning and large language models. By the end of the course, participants will be proficient in
                creating end-to-end ML pipelines, performing data analysis, and applying cutting-edge AI
                applications in their industries.
              </p>
              <p>
                With a modular structure, participants can progressively develop their skills while balancing
                learning with their work commitments. Practical exercises, case studies, and hands-on projects
                ensure applicability in professional settings.
              </p>
            </Section>

            <Section title="Learning Objectives">
              <ul className="space-y-3">
                {objectives.map((o) => (
                  <li key={o} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Who Should Attend">
              <ul className="space-y-3">
                {audience.map((a) => (
                  <li key={a} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <InfoCard title="Prerequisite">
                  Basic programming knowledge is recommended to enrol for this programme.
                </InfoCard>
                <InfoCard title="System Requirements">
                  Functional laptop with at least Intel Core i3 CPU, integrated GPU, and 4GB RAM.
                </InfoCard>
              </div>
            </Section>

            <Section title="Programme Structure">
              <p className="mb-6">
                To achieve the <strong>Professional Certificate in Applied AI</strong>, participants complete the
                following six modules in <strong>sequential order</strong>:
              </p>
              <div className="space-y-3">
                {modules.map((m) => (
                  <div key={m.n}
                    className="p-5 border border-border rounded-lg bg-card">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary mb-1">Module {m.n}</p>
                        <h3 className="font-serif text-lg text-foreground">
                          {m.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {m.dates}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs ${m.status === "Open for Registration" ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                            {m.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Registration closes 5 calendar days before the course start date, or once the class is full,
                whichever comes first.
              </p>
            </Section>

            <Section title="Assessment & Certification">
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Classroom exercises</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Group assignments</li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Individual assignment</li>
              </ul>
              <InfoCard title="Certification">
                Upon completion of all 6 modules within a maximum duration of 3 years, participants will be
                awarded a digital <strong>Professional Certificate in Applied AI</strong> by Metaskills Institute.
              </InfoCard>
            </Section>

            <Section title="Trainers">
              <div className="grid sm:grid-cols-3 gap-4">
                {trainers.map((t) => (
                  <div key={t.name} className="p-5 border border-border rounded-lg bg-card">
                    <h3 className="font-serif text-lg text-foreground">{t.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">{t.org}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Next Intake</p>
                <p className="font-serif text-2xl text-foreground mt-1">28 Jul 2026</p>
                <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Format:</strong> On-campus, Metaskills Institute</p>
                  <p><strong className="text-foreground">Modules:</strong> 6 sequential modules</p>
                  <p><strong className="text-foreground">Certification:</strong> Metaskills Institute digital certificate</p>
                </div>
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                  Apply Now <ExternalLink className="w-4 h-4" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-muted transition">
                  <MessageCircle className="w-4 h-4" /> Chat with Specialist
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-serif text-3xl text-foreground mb-5">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </section>
);

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
    <div className="text-primary mb-2">{icon}</div>
    <p className="text-xs uppercase tracking-widest text-white/60">{label}</p>
    <p className="font-serif text-lg text-white mt-1">{value}</p>
  </div>
);

const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-5 rounded-lg border border-border bg-muted/30">
    <p className="text-xs uppercase tracking-widest text-primary mb-2">{title}</p>
    <p className="text-sm text-muted-foreground">{children}</p>
  </div>
);

export default SMUPCMLPage;
