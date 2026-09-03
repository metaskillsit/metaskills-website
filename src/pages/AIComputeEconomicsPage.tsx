import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Building2, Cpu, Gauge, Layers, LineChart, Server, Shield,
  ShieldCheck, Users, Landmark, Wrench, FileText, Award, Clock, Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/compute-economics-hero.jpg";

const TITLE = "AI-Native Prototyping — Building Under Compute Constraints";
const SUBTITLE =
  "A 2-day build workshop for leaders and engineers who need to say yes or no to AI spend — and be able to defend the decision.";

const testimonials = [
  { name: "Jeffrey", role: "Workshop participant",
    text: "Vibe-coding genuinely sped up my prototyping — but this course showed me what productionising really takes. Planning first with a PRD and validating with Gherkin tests has changed how I start every build." },
  { name: "Anthony", role: "Workshop participant",
    text: "The seven layers of AI cost consideration were a revelation. I now plan MVPs in phases around token budgets, and use PRDs alongside routing tools to keep utilisation lean." },
  { name: "Calvin", role: "Workshop participant",
    text: "Using PRDs as prompts — and even using one LLM to sharpen prompts for another — improved my results immediately. The token optimisation techniques alone were worth the two days." },
  { name: "Melvin", role: "Workshop participant",
    text: "Prompting effectively turned out to be real cost optimisation. The course made data sovereignty concrete for our context and showed how a good PRD makes building dramatically more efficient." },
  { name: "Keith", role: "Workshop participant",
    text: "Iterating look and feel with vibe tooling while cherry-picking purpose-fit models taught me real prudency with AI spend. I left asking sharper questions about value beyond the AI pitch." },
  { name: "Ryan", role: "Workshop participant",
    text: "Learning to prompt an LLM until it reaches a degree of certainty — plus MSI's approach to governing enterprise agentic development — gave me a framework I can apply at work straight away." },
  { name: "Ravi", role: "Workshop participant",
    text: "Clear pros and cons of on-prem AI compute, a practical approach to AI cost optimisation, and straight answers on when to choose cloud versus on-prem — exactly the strategic grounding I needed." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const Section = ({
  id, dark, children, className = "",
}: { id?: string; dark?: boolean; children: React.ReactNode; className?: string }) => (
  <section
    id={id}
    className={`${dark ? "bg-[hsl(var(--hero-overlay))] text-white" : "bg-background"} ${className}`}
  >
    <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">{children}</div>
  </section>
);

const Eyebrow = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${dark ? "text-accent" : "text-accent"}`}>
    {children}
  </p>
);

const tracks = [
  {
    icon: Building2,
    name: "Enterprise governance",
    who: "For CTOs, heads of engineering, platform and FinOps leaders who must govern AI spend and infrastructure decisions.",
    bullets: [
      "Set a defensible cost-per-token baseline across your model portfolio.",
      "Route workloads intelligently — train, fine-tune or simply ask.",
      "Contain the agentic cost multiplier before it reaches production.",
    ],
  },
  {
    icon: Landmark,
    name: "Public sector & sovereign",
    who: "For defence, gov-tech and regulated organisations weighing sovereign AI infrastructure.",
    bullets: [
      "Assess the sovereignty premium against security and supply-chain risk.",
      "Model national and agency-level compute capacity and power constraints.",
      "Validate AI-generated code to a standard you can present to a board.",
    ],
  },
];

const outcomes = [
  { icon: LineChart, text: 'Define and apply "strategic compute economics" — CapEx, power OpEx and cost-per-token.' },
  { icon: Layers, text: "Right-size models and route workloads (train vs fine-tune vs ask) to spend wisely." },
  { icon: Gauge, text: "Read the macro forces moving the price of intelligence (capital gaps, LLMflation, open weights)." },
  { icon: Cpu, text: "Do the inference cost-solver math: VRAM, prefill vs decode, the three cost models." },
  { icon: Server, text: 'Weigh sovereign AI infrastructure — security, supply-chain and the "sovereignty premium".' },
  { icon: ShieldCheck, text: "Secure and validate AI-generated code, then demo and defend a working prototype." },
];

const sessions = [
  {
    id: "s12",
    title: "Sessions 1 & 2 — Physical Infrastructure & Singapore's Constraints",
    body: "The 7-layer cost stack, physical cluster boundaries and the savings available from tropical data-centre setpoints.",
  },
  {
    id: "s3",
    title: "Session 3 — Workload Economics & Intelligent Portfolios",
    body: "Raise/train/ask cost profiles, the agentic cost multiplier and multi-model routing gateways.",
  },
  {
    id: "s4",
    title: "Session 4 — Macro-Economics & Geopolitical Compute Strategy",
    body: "The ~$600B capital gap, LLMflation, and open-weight models as strategic complements.",
  },
  {
    id: "s5",
    title: "Session 5 — Technical Grounding & Cost-Solver Math",
    body: "VRAM quantization, prefill vs decode, and the exact formulas behind the Inference Cost Solver.",
  },
  {
    id: "s6",
    title: "Session 6 — Sovereign Prototyping Challenge",
    body: "Credit controls, security validation (Trivy) and turning compute logic into a defensible prototype.",
  },
];

const day1 = [
  ["0845–0855", "Welcome & introduction"],
  ["0855–1000", "Compute masterclass + mini exercise"],
  ["1015–1030", "Tea break"],
  ["1030–1045", "PRD explanation & template"],
  ["1045–1130", "Challenge briefing, credit allocation & PRD drafting"],
  ["1130–1300", "Lunch"],
  ["1300", "Sprint 1 — Inference Cost Solver"],
  ["1500–1530", "Tea break"],
  ["1530–1630", "Presentations & vote for best project"],
  ["1630–1730", "Day 2 sprint briefing & project-scope confirmation"],
];

const day2 = [
  ["0830", "Arrival, setup & standup"],
  ["0845", "Final challenge build begins — CRUD app (200 credits)"],
  ["1115", "Submit: PRD + prototype + architecture + compute log"],
  ["1130–1300", "Panel presentations & judging"],
  ["1300–1400", "Lunch"],
  ["1400", "Expert debrief & awards"],
];

const rubric = [
  ["Product value & usefulness", 25],
  ["Compute / credit efficiency", 20],
  ["Prototype completeness & build craft", 20],
  ["User experience", 15],
  ["Innovation", 10],
  ["AI integration", 10],
] as const;

const deliverables = [
  { icon: Wrench, title: "Working prototype" },
  { icon: FileText, title: "MVP & requirements summary" },
  { icon: Layers, title: "Architecture overview" },
  { icon: Gauge, title: "Compute reflection" },
  { icon: Shield, title: "Security & Trivy discussion" },
  { icon: ArrowRight, title: "Future roadmap" },
];

const formats = [
  { title: "In-house (at your office)", body: "We bring the masterclass and both build sprints to your team, on your infrastructure realities." },
  { title: "Private cohort (our venue)", body: "A closed cohort of ~8–12 at a Metaskills learning space in Singapore." },
  { title: "Custom / sector-specific", body: "Reframed around your sector — finance, defence, gov-tech or regulated industry." },
];

const faqs = [
  { q: "Do we need coding experience?", a: "Yes — participants should already code or lead technical teams. We do not test raw coding ability; we assess how well you direct AI under constraint." },
  { q: "What is Lovable and do participants need accounts?", a: "Lovable is the AI app builder used for both build sprints. Each participant works in their own account with an allocated credit budget; we provide setup instructions before day one." },
  { q: "Can it be delivered remotely or hybrid?", a: "The workshop is designed as an in-person, cohort-based build. Hybrid delivery can be arranged for distributed teams — tell us your setup and we will scope it." },
  { q: "How many people per cohort?", a: "Approximately 8–12 engineers and leaders. This keeps judging, mentoring and panel presentations meaningful." },
  { q: "Can content be tailored to our sector?", a: "Yes. The masterclass economics stay constant; the challenge brief, PRD and judging criteria are reframed to your sector and workloads." },
  { q: "Is there a certificate?", a: "Participants receive a Metaskills Institute certificate of completion, alongside their prototype, architecture overview and compute log." },
  { q: "What does it cost?", a: "Priced by enquiry, scoped to your team size, format and level of sector customisation. No public list price." },
];

const AIComputeEconomicsPage = () => {
  const [track, setTrack] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Compute Economics & Sovereign AI — 2-Day Workshop | Metaskills Institute";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    meta?.setAttribute(
      "content",
      "Hands-on 2-day workshop on strategic AI compute economics, sovereign infrastructure and shipping a defensible prototype — for enterprise and public-sector teams."
    );
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: TITLE,
    description: SUBTITLE,
    provider: { "@type": "Organization", name: "Metaskills Institute", url: "https://metaskills.sg" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* 1. HERO */}
        <section className="relative bg-[hsl(var(--hero-overlay))] overflow-hidden">
          <img
            src={heroBg} alt="" aria-hidden="true" width={1920} height={1088}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay))]/85 to-[hsl(var(--hero-overlay))]/50" />
          <div className="relative max-w-[1140px] mx-auto px-6 py-20 md:py-28">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <Eyebrow dark>AI Leadership &amp; Governance</Eyebrow>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
                {TITLE}
              </h1>
              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-3xl">
                {SUBTITLE}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#enquiry"
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all">
                  Tell us about your team <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:border-accent hover:text-accent transition-all">
                  View curriculum
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-white/70">
              {["2 Days", "Hands-on", "Cohort of ~8–12", "Platform: Lovable", "AI Leadership & Governance"].map((f, i) => (
                <span key={f} className="flex items-center gap-6">
                  {i > 0 && <span className="text-white/25" aria-hidden="true">·</span>}
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW */}
        <Section>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Every AI capability decision is a compute-economics decision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As the price of intelligence falls, usage does not fall with it. Agentic workloads
                multiply calls, context and retries — so cheaper tokens routinely produce larger bills
                and harder infrastructure questions. Leaders are asked to approve capability, but what
                they are really approving is a compute position.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This workshop puts leaders and engineers in front of that position directly. Over two
                days, participants work under a hard, real cost constraint: a live credit budget that
                governs what they can build, how much they can iterate and what they must justify.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                They leave with a working prototype, a documented architecture and a compute log —
                the artefacts needed to defend a technical decision in front of a board, a panel or a
                procurement committee.
              </p>
            </div>
            <blockquote className="border-l-2 border-accent pl-6 self-center">
              <p className="font-heading text-xl md:text-2xl leading-snug text-accent">
                “The model generates. The engineer guides, validates, refines, secures and
                operationalises.”
              </p>
            </blockquote>
          </div>
        </Section>

        {/* 3. DUAL AUDIENCE */}
        <Section dark>
          <Eyebrow dark>Two tracks, one cohort</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
            Choose the lens your organisation operates in
          </h2>
          <div className="flex gap-2 mb-8" role="tablist" aria-label="Audience tracks">
            {tracks.map((tr, i) => (
              <button key={tr.name} role="tab" aria-selected={track === i}
                onClick={() => setTrack(i)}
                className={`rounded-sm px-5 py-2.5 text-sm font-semibold transition-all ${
                  track === i ? "bg-accent text-accent-foreground" : "border border-white/25 text-white/70 hover:text-white"
                }`}>
                {tr.name}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((tr, i) => (
              <div key={tr.name}
                className={`rounded-sm border p-7 transition-all ${
                  track === i ? "border-accent/60 bg-white/[0.07]" : "border-white/15 bg-white/[0.03]"
                }`}>
                <tr.icon className="h-6 w-6 text-accent mb-4" aria-hidden="true" />
                <h3 className="font-heading text-xl font-bold text-white mb-2">{tr.name}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-5">{tr.who}</p>
                <ul className="space-y-3">
                  {tr.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. WHO SHOULD ATTEND */}
        <Section>
          <Eyebrow>Who should attend</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Built for people who already ship
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Software, data science, ML and cloud engineers",
              "Engineering & platform leads",
              "FinOps / AI cost owners",
              "Public-sector and defence technologists",
            ].map((w) => (
              <div key={w} className="flex gap-3 rounded-sm border border-border bg-muted p-4">
                <Users className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" aria-hidden="true" />
                <span className="text-sm text-foreground/85">{w}</span>
              </div>
            ))}
          </div>
          <p className="border-l-2 border-accent pl-5 text-sm text-muted-foreground italic leading-relaxed max-w-2xl">
            You can already code — we don't test raw coding ability. We assess how well you direct AI
            under constraint.
          </p>
        </Section>

        {/* 5. OUTCOMES */}
        <Section dark>
          <Eyebrow dark>What you'll learn</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-10">
            Six capabilities you can apply the following Monday
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <motion.div key={o.text} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} transition={{ delay: i * 0.06 }}
                className="rounded-sm border border-white/15 bg-white/[0.03] p-6 hover:border-accent/50 transition-colors">
                <o.icon className="h-5 w-5 text-accent mb-4" aria-hidden="true" />
                <p className="text-sm text-white/80 leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 6. WHAT YOU'LL BUILD */}
        <Section>
          <Eyebrow>What you'll build</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Real product, real constraint, live compute budget
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Two builds, both shipped inside the workshop. Credits are allocated up front and tracked
            publicly — spend is part of the assessment, not an afterthought.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tag: "Sprint 1", title: "Inference Cost Solver", budget: "80-credit budget",
                body: "Build the solver from a provided PRD: VRAM sizing, prefill vs decode, and the three cost models applied to a working interface." },
              { tag: "Day 2", title: "Your own working CRUD app", budget: "200-credit budget",
                body: "Scope, build and submit an application of your choice — delivered with PRD, architecture overview and compute log." },
            ].map((b) => (
              <div key={b.title} className="rounded-sm border border-border bg-card p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-sm bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                    {b.tag}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {b.budget}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. CURRICULUM */}
        <Section id="curriculum" dark>
          <Eyebrow dark>Curriculum</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            A 2-hour masterclass, then two build sprints
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl leading-relaxed">
            The economics are taught once, densely, then applied under budget for the rest of the
            programme.
          </p>
          <Accordion type="single" collapsible className="mb-10">
            {sessions.map((s) => (
              <AccordionItem key={s.id} value={s.id} className="border-white/15">
                <AccordionTrigger className="text-left font-heading text-base md:text-lg font-semibold text-white hover:text-accent hover:no-underline">
                  {s.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/70 leading-relaxed">
                  {s.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Sprint 1 — Inference Cost Solver", d: "Build from the provided PRD under an 80-credit budget, then present." },
              { t: "Day 2 — Final Challenge (own CRUD app)", d: "Scope and ship your own application under a 200-credit budget, judged by panel." },
            ].map((b) => (
              <div key={b.t} className="rounded-sm border border-accent/40 bg-accent/[0.07] p-6">
                <Zap className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{b.t}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. SCHEDULE — hidden by request; toggle `false` to `true` to restore */}
        {false && (
          <Section>
            <Eyebrow>Schedule</Eyebrow>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              Two days, end to end
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Day 1 — Build & Burn", rows: day1 },
                { title: "Day 2 — Optimise & Justify", rows: day2 },
              ].map((d) => (
                <div key={d.title} className="border border-border rounded-sm overflow-hidden">
                  <div className="bg-primary px-6 py-3 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-primary-foreground">{d.title}</h3>
                  </div>
                  <ul className="divide-y divide-border">
                    {d.rows.map(([time, item]) => (
                      <li key={time + item} className="flex gap-4 px-6 py-3">
                        <span className="w-24 flex-shrink-0 text-xs font-semibold text-accent tabular-nums pt-0.5">
                          {time}
                        </span>
                        <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-sm border-l-2 border-accent bg-accent/10 p-5">
              <p className="text-sm text-foreground/85 leading-relaxed">
                <span className="font-semibold">Compute checkpoint</span> — if credits are fully used,
                accounts freeze until a revised budget plan is submitted (mirrors real governance).
              </p>
            </div>
          </Section>
        )}

        {/* 9. ASSESSMENT */}
        <Section dark>
          <Eyebrow dark>How you're assessed</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
            A weighted rubric
          </h2>
          <p className="text-white/60 mb-10">Judged on outcomes, not volume.</p>
          <div className="space-y-5 max-w-3xl">
            {rubric.map(([label, weight]) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/85">{label}</span>
                  <span className="font-semibold text-accent tabular-nums">{weight}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${weight * 4}%` }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-accent" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60 max-w-2xl leading-relaxed">
            Each criterion is scored 1–5; the final score blends judge 90% / peer 10%.
          </p>
        </Section>

        {/* 10. DELIVERABLES */}
        <Section>
          <Eyebrow>Deliverables</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
            What participants leave with
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d) => (
              <div key={d.title} className="flex items-center gap-4 rounded-sm border border-border bg-muted p-5">
                <d.icon className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{d.title}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 11. CREDIBILITY */}
        <Section dark>
          <Eyebrow dark>Why Metaskills</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-10">
            Developed in the field, not the abstract
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shield, t: "Public-sector origin", d: "Developed and delivered for a Singapore public-sector AI compute challenge (MINDEF / Digital Intelligence Service)." },
              { icon: Award, t: "Certified instructors", d: "Faculty certified across cloud, AI and security disciplines." },
              { icon: Users, t: "10,000+ professionals trained", d: "Delivered across ASEAN to enterprise and government teams." },
              { icon: Wrench, t: "Hands-on, cohort-based", d: "Small cohorts, live builds, panel judging — no lecture-only sessions." },
            ].map((c) => (
              <div key={c.t} className="rounded-sm border border-white/15 bg-white/[0.03] p-6">
                <c.icon className="h-5 w-5 text-accent mb-4" aria-hidden="true" />
                <h3 className="font-heading text-base font-bold text-white mb-2">{c.t}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
            <span className="text-xs uppercase tracking-widest text-white/40">Trusted by teams at</span>
            {["MINDEF / DIS", "NTUC LearningHub", "IMDA", "Enterprise & gov-tech"].map((l) => (
              <span key={l} className="rounded-sm border border-white/15 px-4 py-2 text-xs text-white/60">
                {l}
              </span>
            ))}
          </div>
        </Section>

        {/* 12. FORMATS */}
        <Section>
          <Eyebrow>Formats & logistics</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
            Three ways to run it
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div key={f.title} className="flex flex-col rounded-sm border border-border bg-card p-7">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.body}</p>
                <p className="mt-6 text-sm font-semibold text-accent">
                  By enquiry — we scope to your team.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 13. FAQ */}
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Common questions
            </h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* 14. ENQUIRY */}
        <Section id="enquiry" dark>
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Eyebrow dark>Enquiry</Eyebrow>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Request in-house training
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                Tell us about your team and we will return a scoped proposal — cohort size, sector
                framing, credit budgets and dates. Typical response within one working day.
              </p>
              <p className="mt-6 text-sm text-white/50">
                Prefer to talk first? WhatsApp{" "}
                <a href="https://wa.me/6589866146" className="text-accent hover:underline">
                  +65 8986 6146
                </a>
                {" "}or email{" "}
                <a href="mailto:admissions@metaskills.sg" className="text-accent hover:underline">
                  admissions@metaskills.sg
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-3">
              <EnquiryForm />
            </div>
          </div>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AIComputeEconomicsPage;
