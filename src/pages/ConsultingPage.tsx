import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  LineChart,
  GraduationCap,
  Bot,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  Download,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WA_LINK =
  "https://wa.me/6589483482?text=Hi%2C%20I%27d%20like%20to%20book%20a%20scoping%20call%20with%20the%20Metaskills%20consulting%20team.";

const themes = [
  {
    icon: Compass,
    title: "AI Strategy & Governance",
    desc: "Align leadership, policy and operating models so AI investments deliver measurable business outcomes — safely.",
  },
  {
    icon: LineChart,
    title: "AI for Financial Services & Trading",
    desc: "Equip frontline finance, research and trading teams with AI copilots, algorithmic strategies and risk-aware workflows.",
  },
  {
    icon: GraduationCap,
    title: "AI for Education & Training Providers",
    desc: "Redesign curriculum, assessment and delivery around AI tutors and AI-enhanced learning experiences that scale.",
  },
  {
    icon: Bot,
    title: "Agentic AI & No-Code Automation for SMEs",
    desc: "Move manual, repetitive work onto agentic AI and no-code stacks — with clear ROI and human oversight built in.",
  },
  {
    icon: ShieldCheck,
    title: "AI & Cybersecurity Readiness",
    desc: "Stress-test AI adoption against data, model and cyber risks so deployments meet regulatory and enterprise standards.",
  },
  {
    icon: HeartHandshake,
    title: "AI for Wellness & Social Good",
    desc: "Design human-centric AI initiatives for NGOs, CSR teams and social enterprises focused on wellbeing and inclusion.",
  },
];

type Row = {
  practice: string;
  package: string;
  tier: string;
  duration: string;
  price: string;
  clients: string;
};

const rows: Row[] = [
  { practice: "AI Strategy & Governance", package: "AI Leadership & Governance Sprint", tier: "Entry", duration: "6–8 weeks", price: "18k–25k", clients: "Govt agencies, regulators, large enterprises" },
  { practice: "AI Strategy & Governance", package: "AI Leadership & Governance Sprint", tier: "Standard", duration: "6–8 weeks", price: "35k–55k", clients: "Ministries, FIs, regional HQs" },
  { practice: "AI Strategy & Governance", package: "AI Leadership & Governance Sprint", tier: "Premium", duration: "6–8 weeks", price: "60k–90k", clients: "Regulators, systemically important institutions" },
  { practice: "Financial Services & Trading", package: "AI for Frontline Finance & Algo Trading", tier: "Discovery & Design only", duration: "4–6 weeks", price: "25k–40k", clients: "Banks, insurers, wealth managers" },
  { practice: "Financial Services & Trading", package: "AI for Frontline Finance & Algo Trading", tier: "Design + Prototype", duration: "3–4 months", price: "60k–120k", clients: "FIs piloting AI tools for RMs or research" },
  { practice: "Financial Services & Trading", package: "AI for Frontline Finance & Algo Trading", tier: "Full Capability Build", duration: "4–6 months", price: "120k–250k+", clients: "Larger FIs and trading desks" },
  { practice: "Financial Services & Trading", package: "Algo Trading Capability Review", tier: "Fixed package", duration: "4–6 weeks", price: "15k–30k", clients: "Prop desks, HNW desks, internal trading teams" },
  { practice: "Education & Training", package: "AI-Enhanced Academy in 90 Days", tier: "Starter", duration: "Up to 3 months", price: "20k–35k", clients: "Private training providers, smaller institutes" },
  { practice: "Education & Training", package: "AI-Enhanced Academy in 90 Days", tier: "Standard", duration: "Up to 3 months", price: "40k–70k", clients: "Universities, corporate L&D teams" },
  { practice: "Education & Training", package: "AI-Enhanced Academy in 90 Days", tier: "Enterprise", duration: "Up to 3 months", price: "80k–150k", clients: "Large institutions and education groups" },
  { practice: "Agentic AI & No-Code Automation", package: "From Manual to Agentic", tier: "Discovery Sprint", duration: "2 weeks", price: "8k–12k", clients: "SMEs exploring AI/automation" },
  { practice: "Agentic AI & No-Code Automation", package: "From Manual to Agentic", tier: "Core Build Package", duration: "8–12 weeks", price: "25k–45k", clients: "SMEs and mid-size enterprises" },
  { practice: "Agentic AI & No-Code Automation", package: "From Manual to Agentic", tier: "Scale-Up Package", duration: "8–12 weeks", price: "50k–90k", clients: "Mid-market and larger enterprises" },
  { practice: "Agentic AI & No-Code Automation", package: "No-Code AI Factory Day", tier: "Intensive build day", duration: "1 day (+ follow)", price: "6k–10k", clients: "Teams wanting a fast pilot with hands-on support" },
  { practice: "Cybersecurity & AI Risk", package: "AI & Cyber Readiness Audit", tier: "SME", duration: "4 weeks", price: "12k–20k", clients: "Smaller firms deploying AI tools" },
  { practice: "Cybersecurity & AI Risk", package: "AI & Cyber Readiness Audit", tier: "Mid-Market", duration: "4–6 weeks", price: "25k–45k", clients: "Mid-size enterprises, regulators" },
  { practice: "Cybersecurity & AI Risk", package: "AI & Cyber Readiness Audit", tier: "Enterprise", duration: "6–8 weeks", price: "50k–80k", clients: "Regulated organisations, FIs, critical infrastructure" },
  { practice: "AI for Wellness & Social Good", package: "AI for Impact Design Lab", tier: "Base package", duration: "8–10 weeks", price: "15k–25k", clients: "NGOs, CSR teams, social enterprises" },
  { practice: "Retainer & Embedded Advisory", package: "AI Advisory Retainer", tier: "Essential", duration: "Ongoing monthly", price: "6k–8k per month", clients: "SMEs needing light strategic guidance" },
  { practice: "Retainer & Embedded Advisory", package: "AI Advisory Retainer", tier: "Standard", duration: "Ongoing monthly", price: "10k–18k per month", clients: "Mid-market firms with active AI projects" },
  { practice: "Retainer & Embedded Advisory", package: "AI Advisory Retainer", tier: "Comprehensive", duration: "Ongoing monthly", price: "20k–30k+ per month", clients: "Enterprises needing embedded AI advisors and office hours" },
];

// Add subtle group separators when the practice column changes
const rowsWithGroup = rows.map((r, i) => ({
  ...r,
  firstInGroup: i === 0 || rows[i - 1].practice !== r.practice,
}));

const ConsultingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* Hero */}
        <section className="relative border-b border-border bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-5">
                Consulting & Advisory
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-foreground">
                Consulting & Advisory for Applied AI in ASEAN
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
                Move from pilots to production with Metaskills Institute's consulting team — the same
                practitioners who train over 10,000 professionals across Singapore and the region in
                Agentic AI, algorithmic trading, data science and cybersecurity.
              </p>

              <div className="mt-6 space-y-3 text-[15px] md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Metaskills Institute is a Singapore-based applied AI institute working with
                  corporates, governments and universities across ASEAN.
                </p>
                <p>
                  Our faculty are active practitioners — not career consultants — leading real AI,
                  finance, cyber and education mandates. We focus on moving clients beyond
                  experiments into deployed, governed and secure AI systems.
                </p>
                <p>
                  Every engagement blends advisory, capability building and hands-on
                  implementation, so internal teams are ready to own the outcome after we leave.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Scoping Call
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-6 py-3 text-sm font-semibold tracking-wide hover:bg-muted transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Consulting Deck
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What we do */}
        <section className="border-b border-border bg-background">
          <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24">
            <div className="mb-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-4">
                What we do
              </p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.1]">
                Advisory that stays close to the work.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((th, i) => (
                <motion.div
                  key={th.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative border border-border bg-card p-6 hover:border-accent/60 transition-colors"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-border bg-muted text-accent">
                    <th.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-foreground leading-snug">
                    {th.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{th.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages table */}
        <section className="border-b border-border bg-muted/20">
          <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24">
            <div className="mb-10 max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-4">
                Consulting packages
              </p>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.1]">
                Transparent packages across every practice.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Indicative scopes and investment ranges to help you plan. Final proposals are
                shaped around your objectives, data and regulatory environment.
              </p>
            </div>

            <div className="border border-border bg-background overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted text-foreground">
                    <th className="text-left font-semibold px-4 py-3 border-b border-border whitespace-nowrap">Practice</th>
                    <th className="text-left font-semibold px-4 py-3 border-b border-border whitespace-nowrap">Package</th>
                    <th className="text-left font-semibold px-4 py-3 border-b border-border whitespace-nowrap">Tier / Option</th>
                    <th className="text-left font-semibold px-4 py-3 border-b border-border whitespace-nowrap">Duration</th>
                    <th className="text-left font-semibold px-4 py-3 border-b border-border whitespace-nowrap">Typical Investment (SGD)</th>
                    <th className="text-left font-semibold px-4 py-3 border-b border-border">Ideal Clients</th>
                  </tr>
                </thead>
                <tbody>
                  {rowsWithGroup.map((r, i) => (
                    <tr
                      key={i}
                      className={`${r.firstInGroup && i !== 0 ? "border-t-2 border-t-accent/30" : ""} border-b border-border hover:bg-muted/40 transition-colors`}
                    >
                      <td className="align-top px-4 py-3 font-medium text-foreground whitespace-nowrap">
                        {r.firstInGroup ? r.practice : <span className="text-muted-foreground/60">↳</span>}
                      </td>
                      <td className="align-top px-4 py-3 text-foreground/90">{r.package}</td>
                      <td className="align-top px-4 py-3 text-foreground/90 whitespace-nowrap">{r.tier}</td>
                      <td className="align-top px-4 py-3 text-muted-foreground whitespace-nowrap">{r.duration}</td>
                      <td className="align-top px-4 py-3 text-foreground font-medium whitespace-nowrap">{r.price}</td>
                      <td className="align-top px-4 py-3 text-muted-foreground">{r.clients}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs md:text-sm text-muted-foreground italic leading-relaxed">
              Project resourcing (onsite/remote days and hours per week) is tailored to your needs and
              confirmed during a scoping call. Exact pricing depends on scope, data, and regulatory complexity.
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="border-b border-border bg-background">
          <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-4">
                  Method
                </p>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-[1.1]">
                  How we work with you.
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-[15px] md:text-base text-foreground/80 leading-relaxed">
                <p>
                  Every engagement begins with a scoping call to understand your current
                  initiatives, constraints and the metrics that define success. We use this to
                  shape a proposal that is right-sized — not oversold.
                </p>
                <p>
                  Clients work directly with Metaskills faculty and consultants — practitioners
                  active in AI strategy, financial services, cyber defence, education and agentic
                  AI engineering. You get senior operators, not layered account teams.
                </p>
                <p>
                  Engagements blend workshops, design sessions and build phases with structured
                  capability-building, so internal teams can sustain and scale the solutions. For
                  Singapore organisations, engagements can be structured to align with available
                  government funding schemes where applicable.
                </p>

                <ul className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Practitioner-led faculty",
                    "Advisory + build + capability",
                    "Governance and risk baked in",
                    "Alignable with SG funding schemes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[hsl(var(--hero-overlay))] text-white">
          <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-24 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
              Ready to plan your next AI move?
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/75 text-base md:text-lg leading-relaxed">
              Book a scoping call with our consulting team, ask about bundling advisory with our
              training programmes, or let us help you pick the package that fits your stage and
              ambition.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to Our Consulting Team
              </a>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-accent transition-colors border-b border-white/30 hover:border-accent pb-0.5"
              >
                View Our AI Programmes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ConsultingPage;
