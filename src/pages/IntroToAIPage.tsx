import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  Sparkles,
  BookOpen,
  Bot,
  Wand2,
  Rocket,
  ShieldCheck,
  Building2,
  Compass,
  Download,
  ArrowRight,
  FileText,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WHATSAPP_URL =
  "https://wa.me/6589866146?text=Hi%2C%20I%27m%20interested%20in%20the%20Metaskills%20Introduction%20to%20Artificial%20Intelligence%20programme.";
const ENQUIRE_URL = WHATSAPP_URL;

const modules = [
  {
    n: 1,
    icon: BookOpen,
    title: "Understanding Artificial Intelligence",
    topics: [
      "History of AI",
      "AI evolution",
      "Narrow AI vs General AI",
      "Machine Learning",
      "Deep Learning",
      "Large Language Models",
      "AI ecosystem",
    ],
  },
  {
    n: 2,
    icon: Bot,
    title: "Generative AI Landscape",
    topics: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Microsoft Copilot",
      "Perplexity",
      "Grok",
      "Open-source AI models",
    ],
    footnote: "Hands-on comparison of different AI platforms.",
  },
  {
    n: 3,
    icon: Wand2,
    title: "Prompt Engineering",
    topics: [
      "Prompt fundamentals",
      "Context engineering",
      "Persona prompting",
      "Few-shot prompting",
      "Structured prompting",
      "AI reasoning techniques",
    ],
    footnote: "Practical workshop on improving prompt quality.",
  },
  {
    n: 4,
    icon: Rocket,
    title: "AI Productivity",
    topics: [
      "Email writing",
      "Report generation",
      "Meeting summaries",
      "Research",
      "Data analysis",
      "Presentation creation",
      "Document summarisation",
      "Translation",
      "Brainstorming",
    ],
    footnote: "Hands-on productivity challenge.",
  },
  {
    n: 5,
    icon: ShieldCheck,
    title: "Responsible AI",
    topics: [
      "AI hallucinations",
      "Bias",
      "Privacy",
      "Copyright",
      "Data security",
      "AI governance",
      "Responsible AI practices",
    ],
  },
  {
    n: 6,
    icon: Building2,
    title: "Industry Applications",
    topics: [
      "Banking",
      "Financial Services",
      "Healthcare",
      "Government",
      "Manufacturing",
      "Retail",
      "Human Resources",
      "Education",
      "Logistics",
    ],
  },
  {
    n: 7,
    icon: Compass,
    title: "AI Adoption Planning",
    topics: [
      "AI opportunity map",
      "Productivity improvement plan",
      "Risk assessment",
      "Quick wins",
      "90-day AI adoption roadmap",
    ],
  },
];

const outcomes = [
  "Understand Artificial Intelligence concepts",
  "Explain Machine Learning, Deep Learning and Generative AI",
  "Identify business opportunities using AI",
  "Use ChatGPT and other AI platforms effectively",
  "Apply Prompt Engineering techniques",
  "Evaluate AI responses critically",
  "Understand AI ethics and governance",
  "Create an AI adoption roadmap for their organisation",
];

const audience = [
  "Business Professionals",
  "Finance Professionals",
  "Government Officers",
  "Managers & Executives",
  "HR Professionals",
  "Sales & Marketing Teams",
  "Operations Teams",
  "SME Owners",
  "Anyone beginning their AI journey",
];

const activities = [
  "AI Prompt Challenge",
  "AI Productivity Competition",
  "AI Business Case Discussion",
  "Responsible AI Scenario Exercise",
  "Team AI Adoption Workshop",
];

import chatgptLogo from "@/assets/techlogos/openai.svg";
import claudeLogo from "@/assets/techlogos/anthropic.svg";
import geminiLogo from "@/assets/techlogos/gemini.svg";
import copilotLogo from "@/assets/techlogos/copilot.jpg";
import perplexityLogo from "@/assets/techlogos/perplexity.svg";
import notebooklmLogo from "@/assets/techlogos/notebooklm.png";
import grokLogo from "@/assets/techlogos/grok.png";
import napkinLogo from "@/assets/techlogos/napkin.png";
import canvaLogo from "@/assets/techlogos/canva.png";
import lovableLogo from "@/assets/techlogos/lovable.png";

const tools: { name: string; logo: string }[] = [
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "Microsoft Copilot", logo: copilotLogo },
  { name: "Perplexity", logo: perplexityLogo },
  { name: "NotebookLM", logo: notebooklmLogo },
  { name: "Grok", logo: grokLogo },
  { name: "Napkin AI", logo: napkinLogo },
  { name: "Canva AI", logo: canvaLogo },
  { name: "Lovable", logo: lovableLogo },
];

const deliverables = [
  "Digital Course Notes",
  "AI Prompt Guide",
  "AI Productivity Toolkit",
  "AI Tool Directory",
  "AI Adoption Checklist",
  "Certificate of Completion",
];

const assessment = [
  "Class Participation",
  "Hands-on Exercises",
  "Prompt Challenge",
  "AI Adoption Plan",
];

const whyChoose = [
  "Beginner Friendly",
  "No Coding Required",
  "Practical Hands-on Learning",
  "Real Business Use Cases",
  "Enterprise Ready",
  "Government & Corporate Focus",
  "Delivered by Industry Practitioners",
  "Immediate Workplace Application",
];

const pathway = [
  { label: "Introduction to AI", note: "You are here", current: true },
  { label: "AI Fluency", note: "Confident everyday use" },
  { label: "AI Strategy & Governance", note: "Lead adoption safely" },
  { label: "AI for Finance / Engineering", note: "Domain specialisation" },
  { label: "AI Agents", note: "Autonomous workflows" },
];

const relatedCourses = [
  {
    title: "AI Fluency for Finance Professionals",
    href: "/course/ai-fluency-for-finance-professionals",
    tag: "Fluency",
  },
  {
    title: "AI Strategy, Governance & Ethical Leadership",
    href: "/course/ai-strategy-governance-ethical-leadership",
    tag: "Leadership",
  },
  {
    title: "Foundations of Agentic AI Workflows",
    href: "/course/agentic-ai-foundations",
    tag: "Agents",
  },
];

const IntroToAIPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0b1a2b] via-[#0f2540] to-[#0b1a2b] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Foundation", "AI Literacy", "1 Day", "No Coding", "Enterprise & Government"].map((t) => (
              <span
                key={t}
                className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-accent mb-3 font-body">
            Metaskills Institute · AI Literacy Foundation
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl font-bold">
            Introduction to Artificial Intelligence
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-3xl leading-relaxed">
            A one-day practical programme that equips professionals with the knowledge,
            confidence and hands-on skills to understand, evaluate and apply AI responsibly
            in the workplace — the foundation of the Metaskills AI learning pathway.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <Stat icon={<Clock className="w-5 h-5" />} label="Duration" value="1 Day · 8 Hours" />
            <Stat icon={<Users className="w-5 h-5" />} label="Class Size" value="Max. 12 pax" />
            <Stat icon={<MapPin className="w-5 h-5" />} label="Mode" value="Classroom · Virtual · On-site" />
            <Stat icon={<GraduationCap className="w-5 h-5" />} label="Level" value="Beginner" />
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={ENQUIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
            >
              <MessageCircle className="w-4 h-4" /> Chat with Specialist
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition"
            >
              <Download className="w-4 h-4" /> Register Interest
            </a>
          </div>
        </div>
      </section>

      {/* Learning Pathway stepper */}
      <section className="border-y border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4 text-center">
            Metaskills AI Learning Pathway
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {pathway.map((p, i) => (
              <div
                key={p.label}
                className={`relative p-4 rounded-lg border text-center ${
                  p.current
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-card"
                }`}
              >
                <p className={`font-mono text-[10px] tracking-widest ${p.current ? "text-primary" : "text-muted-foreground"}`}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className={`font-heading text-sm md:text-base mt-1 font-semibold ${p.current ? "text-foreground" : "text-foreground/80"}`}>
                  {p.label}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <Section title="Course Summary">
              <p>
                Artificial Intelligence is reshaping every industry and profession. This
                one-day practical programme equips professionals with the knowledge,
                confidence and practical skills to understand, evaluate and apply AI
                responsibly in the workplace.
              </p>
              <p>
                Participants will explore AI fundamentals, Generative AI, Large Language
                Models (LLMs), prompt engineering, responsible AI, AI governance and
                practical productivity use cases using today's leading AI tools.
              </p>
              <p>
                The programme focuses on <strong className="text-foreground">practical workplace adoption</strong> rather than programming
                or software development. <em>No prior AI or coding experience is required.</em>
              </p>
            </Section>

            <Section title="Learning Outcomes">
              <ul className="grid sm:grid-cols-2 gap-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Who Should Attend">
              <div className="flex flex-wrap gap-2">
                {audience.map((a) => (
                  <span
                    key={a}
                    className="text-sm px-3 py-1.5 rounded-full bg-muted border border-border text-foreground/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Course Modules">
              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.n}
                      className="p-5 rounded-lg border border-border bg-card hover:shadow-md hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-widest text-primary mb-1">
                            Module {m.n}
                          </p>
                          <h3 className="font-heading text-lg text-foreground font-semibold">
                            {m.title}
                          </h3>
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {m.topics.map((t) => (
                              <li
                                key={t}
                                className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                          {m.footnote && (
                            <p className="mt-3 text-xs italic text-muted-foreground">
                              {m.footnote}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section title="Practical Activities">
              <div className="grid sm:grid-cols-2 gap-3">
                {activities.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-muted/40"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground/85">{a}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Recommended AI Tools">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-lg border border-border bg-card text-center hover:border-primary/40 hover:shadow-sm transition"
                  >
                    <div className="w-10 h-10 rounded-md bg-white border border-border flex items-center justify-center mx-auto mb-2 overflow-hidden">
                      <img src={tool.logo} alt={`${tool.name} logo`} className="w-7 h-7 object-contain" loading="lazy" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{tool.name}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Course Deliverables">
              <ul className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 p-3 rounded-md border border-border bg-card"
                  >
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground/85">{d}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Assessment">
              <p className="mb-4">
                Practical assessment is used in place of examinations. Components include:
              </p>
              <ul className="space-y-2">
                {assessment.map((a) => (
                  <li key={a} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Why Choose This Programme">
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChoose.map((w) => (
                  <div
                    key={w}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-transparent"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{w}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Course Fee
                </p>
                <p className="font-heading text-3xl text-foreground mt-1 font-bold">
                  SGD 500
                </p>
                <p className="text-xs text-muted-foreground">per participant</p>

                <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Class Size</p>
                      <p className="text-muted-foreground">Max. 12 participants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Duration</p>
                      <p className="text-muted-foreground">1 day · 8 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Mode</p>
                      <p className="text-muted-foreground">
                        Classroom · Virtual · Corporate On-site
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">Certification</p>
                      <p className="text-muted-foreground">
                        Certificate of Completion by Metaskills Institute
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={ENQUIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-muted transition"
                >
                  <MessageCircle className="w-4 h-4" /> Chat with Specialist
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:bg-muted transition"
                >
                  <Download className="w-4 h-4" /> Register Interest
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related programmes */}
        <section className="bg-muted/40 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Continue Your Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
              Related AI Programmes
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedCourses.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <p className="text-[11px] uppercase tracking-widest text-primary mb-3">
                    {c.tag}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition"
              >
                View all programmes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-5 font-bold">
      {title}
    </h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
  </section>
);

const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
    <div className="text-accent mb-2">{icon}</div>
    <p className="text-[11px] uppercase tracking-widest text-white/60">{label}</p>
    <p className="font-heading text-base text-white mt-1 font-semibold">{value}</p>
  </div>
);

export default IntroToAIPage;
