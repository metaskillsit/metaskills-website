import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BookOpen, Building2, CheckCircle2, ClipboardCheck, GraduationCap, Layers,
  Mail, MessageCircle, Wrench, CalendarDays, Sparkles, ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NotFound from "./NotFound";
import { getAbleProgram } from "@/data/ablePrograms";
import pythonHero from "@/assets/able-python-automation-hero.jpg";
import webHero from "@/assets/able-web-development-hero.jpg";
import digitalHero from "@/assets/able-digital-foundations-hero.jpg";

const heroPhotos: Record<string, string> = {
  "professional-certificate-python-automation-data-operations": pythonHero,
  "professional-certificate-modern-web-application-development": webHero,
  "certificate-foundational-digital-technology": digitalHero,
};

const SITE = "https://metaskills.sg";
const EMAIL = "admissions@metaskills.sg";
const wa = (msg: string) => `https://wa.me/6589866146?text=${encodeURIComponent(msg)}`;

const comparison: [string, string, string][] = [
  ["Knowledge Learning", "Instructor facilitated", "Guided independent learning"],
  ["Concept Explanation", "Detailed instructor-led teaching", "Primarily completed independently"],
  ["Application Activities", "Included", "Core focus"],
  ["Practical Labs", "Included", "Included"],
  ["Facilitator Support", "Throughout learning journey", "During application and validation stages"],
  ["Workplace Use Cases", "Included", "Strong emphasis"],
  ["Assessment", "Included", "Included"],
  ["Metaskills Certification", "Upon meeting requirements", "Upon meeting requirements"],
  ["Programme Fee", "S$9,000", "S$3,000"],
];

const fullIncludes = [
  "Instructor-led programme delivery", "Structured explanation of core concepts", "Demonstrations and guided walkthroughs",
  "Hands-on practical laboratories", "Applied workplace use cases", "Facilitated projects", "Instructor feedback",
  "Practical assessment", "Metaskills certification upon meeting programme requirements",
];
const ableIncludes = [
  "Guided independent/self-paced learning pathway", "Metaskills application workshops", "Scenario-based activities",
  "Practical laboratories or build challenges", "Facilitated troubleshooting", "Workplace use-case application",
  "Skills demonstration", "Applied assessment", "Metaskills certification upon meeting programme requirements",
];

const Heading = ({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) => (
  <div className="mb-8">
    {eyebrow && <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{eyebrow}</p>}
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">{title}</h2>
    {sub && <p className="text-muted-foreground mt-2">{sub}</p>}
  </div>
);

const CheckList = ({ items, cols = false }: { items: string[]; cols?: boolean }) => (
  <ul className={cols ? "grid sm:grid-cols-2 gap-x-8 gap-y-3" : "space-y-3"}>
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-foreground/85">
        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

const AbleProgramPage = ({ slug }: { slug: string }) => {
  const p = getAbleProgram(slug);

  useEffect(() => {
    if (!p) return;
    const prevTitle = document.title;
    document.title = p.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    meta?.setAttribute("content", p.seoDescription);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const created = !canonical;
    const prevHref = canonical?.getAttribute("href") || "";
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE}/course/${p.slug}`;
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
      if (created) canonical?.remove();
      else canonical?.setAttribute("href", prevHref);
    };
  }, [p]);

  if (!p) return <NotFound />;

  const waGeneral = wa(`Hi, I'm interested in the Metaskills ${p.title}.`);
  const waFull = wa(`Hi, I'd like to enquire about the Full Professional Programme for the ${p.title}.`);
  const waAble = wa(`Hi, I'd like to enquire about the ABLE Pathway for the ${p.title}.`);
  const waCorp = wa(`Hi, I'd like to discuss a corporate run of the ${p.title}.`);
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${p.title}`)}`;

  const faqs = [
    {
      q: "What is the difference between the Full Programme and ABLE?",
      a: "The Full Professional Programme is a fully facilitated learning journey: instructors teach the core concepts, run demonstrations and guide you through labs, projects and assessment. ABLE (Activity-Based Learning and Education) is a different pathway: you complete the knowledge-learning component through guided independent study, and Metaskills focuses facilitated time on application, practical challenges, feedback and assessment.",
    },
    {
      q: "Is ABLE completely online?",
      a: "No. The knowledge-learning component is predominantly completed independently, while Metaskills facilitates the applied activities, practical sessions and assessment according to the programme design.",
    },
    {
      q: "Do ABLE participants receive a certificate?",
      a: "Yes. Participants who meet the Metaskills programme and assessment requirements receive the applicable Metaskills certificate. Completing online or self-paced content alone does not constitute successful completion.",
    },
    { q: "Is previous experience required?", a: p.experienceAnswer },
    { q: "Can companies enrol an entire team?", a: "Yes. Dedicated and customised cohort arrangements can be discussed with Metaskills Institute." },
    { q: "Can the programme be customised?", a: "For organisational cohorts, activities, datasets and use cases may be contextualised while maintaining the programme's core learning outcomes." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO */}
        <section className="section-dark relative overflow-hidden">
          <img
            src={heroPhotos[p.slug]}
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/75 md:bg-gradient-to-r md:from-[hsl(var(--hero-overlay))]/95 md:via-[hsl(var(--hero-overlay))]/65 md:to-transparent" aria-hidden="true" />
          <div className="relative max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary-foreground/20 text-primary-foreground/80">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Metaskills Institute · Certifications</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-4xl">{p.title}</h1>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">{p.heroDescription}</p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
              {[
                { icon: GraduationCap, k: "Level", v: p.level },
                { icon: Layers, k: "Delivery", v: "Full Programme or ABLE Pathway" },
                { icon: Award, k: "Certificate", v: "Metaskills Institute" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="rounded-sm border border-primary-foreground/15 p-4">
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary-foreground/60">
                    <Icon className="w-4 h-4 text-accent" aria-hidden="true" /> {k}
                  </dt>
                  <dd className="mt-1 font-semibold text-primary-foreground">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3 mt-10">
              <a href="#pathways" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <MessageCircle className="w-4 h-4" /> Chat with Specialist
              </a>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes" className="hover:text-accent transition-colors">Programmes</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes#certifications" className="hover:text-accent transition-colors">Certifications</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground/80 font-medium">{p.title}</li>
          </ol>
        </nav>

        <section className="border-b border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Contact Metaskills for upcoming intake dates.</span>
          </div>
        </section>

        <div className="max-w-[1140px] mx-auto px-6 py-14 space-y-20">
          {/* WHY */}
          <section>
            <Heading eyebrow="Overview" title="Why Attend This Programme" />
            {p.positioning && (
              <p className="font-heading text-xl text-foreground border-l-2 border-accent pl-4 mb-6">{p.positioning}</p>
            )}
            <div className="space-y-4 text-foreground/85 leading-relaxed max-w-3xl">
              {p.why.map((w) => <p key={w}>{w}</p>)}
            </div>
            {p.journey && (
              <ol className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-3" aria-label="Learner journey">
                {p.journey.map((j, i) => (
                  <li key={j} className="relative bg-muted border border-border rounded-sm p-4 text-center">
                    <span className="block text-xs text-accent font-semibold tracking-widest">0{i + 1}</span>
                    <span className="block font-heading font-bold text-foreground mt-1">{j}</span>
                    {i < p.journey!.length - 1 && (
                      <ChevronDown className="sm:hidden mx-auto mt-2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            )}
          </section>

          {/* AUDIENCE + PREREQ */}
          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <Heading title="Who Should Attend" />
              <CheckList items={p.audience} />
            </div>
            <div>
              <Heading title="Recommended Prerequisites" />
              {p.prerequisitesIntro && <p className="text-foreground/85 mb-4">{p.prerequisitesIntro}</p>}
              <CheckList items={p.prerequisites} />
            </div>
          </section>

          {/* OUTCOMES */}
          <section>
            <Heading title="Learning Outcomes" sub="By the end of the programme, participants should be able to:" />
            <ol className="grid md:grid-cols-2 gap-4">
              {p.outcomes.map((o, i) => (
                <li key={o} className="flex gap-4 bg-muted border border-border rounded-sm p-4">
                  <span className="font-heading text-lg font-bold text-accent w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground/85">{o}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* MODULES */}
          <section>
            <Heading eyebrow="Curriculum" title={p.modulesTitle} />
            <div className={`grid gap-6 ${p.modules.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {p.modules.map((m) => (
                <article key={m.title} className="bg-card border border-border rounded-sm p-6 flex flex-col hover:border-accent/60 transition-colors">
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest">{m.label}</p>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-4 leading-snug">{m.title}</h3>
                  <ul className="space-y-1.5 text-sm text-foreground/80 mb-4">
                    {m.coverage.map((c) => (
                      <li key={c} className="flex gap-2"><span className="text-accent" aria-hidden="true">•</span>{c}</li>
                    ))}
                  </ul>
                  {m.extra && (
                    <div className="border-t border-border pt-3 mb-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">{m.extraTitle}</p>
                      <p className="text-sm text-muted-foreground">{m.extra.join(" · ")}</p>
                    </div>
                  )}
                  {m.outcome && (
                    <p className="mt-auto text-sm text-foreground border-t border-border pt-3">
                      <span className="font-semibold">Outcome: </span>{m.outcome}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {p.integration && (
            <section className="section-dark rounded-sm p-8 md:p-10">
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Integration Challenge</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{p.integration.title}</h2>
              <p className="text-primary-foreground/80 mt-4 max-w-3xl">{p.integration.intro}</p>
              <p className="text-primary-foreground/80 mt-4">{p.integration.scenario}</p>
              <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                {p.integration.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{pt}
                  </li>
                ))}
              </ul>
              <p className="text-primary-foreground font-semibold mt-6">{p.integration.close}</p>
            </section>
          )}

          {p.aiCallout && (
            <section className="border-l-4 border-accent bg-muted rounded-sm p-8 md:p-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
                <p className="text-accent text-xs font-semibold uppercase tracking-widest">AI-Assisted Development</p>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{p.aiCallout.title}</h2>
              <div className="space-y-3 text-foreground/85 mt-4 max-w-3xl">
                {p.aiCallout.body.map((b) => <p key={b}>{b}</p>)}
              </div>
              <div className="mt-6"><CheckList items={p.aiCallout.focus} cols /></div>
            </section>
          )}

          {/* ACTIVITIES + ASSESSMENT */}
          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <Heading title="Practical Activities" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {p.activities.map((a) => (
                  <li key={a} className="flex gap-3 items-start bg-muted border border-border rounded-sm p-3 text-sm text-foreground/85">
                    <Wrench className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />{a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Heading title="Assessment" sub="Practical, applied assessment rather than purely theoretical testing." />
              <CheckList items={p.assessment} />
            </div>
          </section>

          {/* ABLE */}
          <section id="able" className="scroll-mt-28">
            <Heading eyebrow="Activity-Based Learning and Education" title="A Different Way to Learn: ABLE" />
            <p className="font-heading text-xl text-foreground mb-6">Learn independently. Apply collaboratively. Validate your capability.</p>
            <div className="space-y-4 text-foreground/85 leading-relaxed max-w-3xl">
              <p>ABLE is Metaskills Institute's applied learning pathway for professionals who prefer the flexibility of independent digital learning while still wanting structured opportunities to practise, demonstrate and validate their skills.</p>
              <p>Participants complete the underlying learning content through guided online or self-paced study before joining Metaskills for facilitated application sessions.</p>
              <p>Instead of repeating online lessons in a classroom, ABLE focuses the facilitated portion of the programme on doing: solving realistic problems, working through practical scenarios, building solutions, receiving feedback and completing competency-based activities.</p>
              <p>This creates a bridge between knowing a concept and being able to use it confidently in practice — moving learners from <em>"I completed the content"</em> to <em>"I can apply what I learned."</em></p>
            </div>

            <ol className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { n: "01", t: "Learn", d: "Complete guided digital learning at your own pace.", icon: BookOpen },
                { n: "02", t: "Apply", d: "Attend Metaskills activity-based sessions and work through realistic use cases, labs and challenges.", icon: Wrench },
                { n: "03", t: "Validate", d: "Demonstrate your understanding through applied activities and assessment.", icon: ClipboardCheck },
              ].map(({ n, t, d, icon: Icon }) => (
                <li key={n} className="bg-card border border-border rounded-sm p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-3xl font-bold text-accent">{n}</span>
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-foreground">{t}</h3>
                  <p className="text-sm text-foreground/80 mt-2">{d}</p>
                </li>
              ))}
            </ol>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                ["Knowledge", "Independent digital learning builds conceptual understanding."],
                ["Application", "Activity-based workshops turn knowledge into practical capability."],
                ["Validation", "Structured exercises and assessment provide evidence that learners can apply the concepts."],
                ["Reflection", "Facilitated reviews help participants understand what worked, what failed and how the learning transfers to their workplace."],
              ].map(([k, v]) => (
                <div key={k} className="border-t-2 border-accent pt-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground">{k}</p>
                  <p className="text-sm text-muted-foreground mt-1">{v}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 bg-muted border-l-4 border-accent rounded-sm p-6 text-foreground/85 italic">
              ABLE is designed for learners who are comfortable taking ownership of the knowledge-acquisition portion of their learning and want Metaskills to focus classroom time on application, problem-solving and validation.
            </blockquote>

            <div className="mt-8 bg-card border border-border rounded-sm p-6">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">How ABLE Learners Are Assessed</h3>
              <p className="text-sm text-foreground/80">Completion of online or self-paced content by itself does not constitute successful completion of the Metaskills certification. Certification is based on satisfactory completion of the required ABLE application and assessment activities. ABLE participants demonstrate their understanding through structured application activities and competency-based assessment facilitated by Metaskills Institute.</p>
            </div>

            {/* COMPARISON */}
            <div className="mt-12">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Full Programme vs ABLE Pathway</h3>
              <div className="hidden md:block overflow-hidden border border-border rounded-sm">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th scope="col" className="text-left p-4 font-semibold text-foreground w-1/3"><span className="sr-only">Feature</span></th>
                      <th scope="col" className="text-left p-4 font-heading font-bold text-foreground">Full Professional Programme</th>
                      <th scope="col" className="text-left p-4 font-heading font-bold text-foreground">ABLE Pathway</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(([row, full, able]) => (
                      <tr key={row} className="border-t border-border">
                        <th scope="row" className="text-left p-4 font-medium text-foreground">{row}</th>
                        <td className="p-4 text-foreground/80">{full}</td>
                        <td className="p-4 text-foreground/80">{able}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden space-y-3">
                {comparison.map(([row, full, able]) => (
                  <div key={row} className="border border-border rounded-sm p-4">
                    <p className="font-semibold text-foreground mb-2">{row}</p>
                    <p className="text-sm text-foreground/80"><span className="text-muted-foreground">Full: </span>{full}</p>
                    <p className="text-sm text-foreground/80"><span className="text-muted-foreground">ABLE: </span>{able}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PATHWAYS */}
          <section id="pathways" className="scroll-mt-28">
            <Heading eyebrow="Programme Fees" title="Choose Your Learning Pathway" />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Full Professional Programme", sub: undefined, price: "S$9,000", best: "Best for learners who want a fully facilitated learning journey.", items: fullIncludes, cta: "Enquire About Full Programme", href: waFull },
                { name: "ABLE Pathway", sub: "Activity-Based Learning and Education", price: "S$3,000", best: "Best for self-directed learners who can independently complete the knowledge-learning component and want structured application and validation.", items: ableIncludes, cta: "Enquire About ABLE", href: waAble },
              ].map((c) => (
                <article key={c.name} className="bg-card border border-border rounded-sm p-8 flex flex-col hover:border-accent/60 transition-colors">
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">{c.name}</h3>
                  {c.sub && <p className="text-accent text-xs font-semibold uppercase tracking-widest mt-1">{c.sub}</p>}
                  <p className="mt-5"><span className="font-heading text-4xl font-bold text-foreground">{c.price}</span> <span className="text-sm text-muted-foreground">per participant</span></p>
                  <p className="text-sm text-foreground/80 mt-4">{c.best}</p>
                  <div className="border-t border-border my-6" />
                  <div className="flex-1"><CheckList items={c.items} /></div>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <MessageCircle className="w-4 h-4" /> {c.cta}
                  </a>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-3xl">Corporate and customised cohort arrangements are available. Contact Metaskills Institute to discuss delivery format, class size and organisational requirements.</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl">All fees are exempt from GST.</p>
          </section>

          {/* CERTIFICATION + CORPORATE */}
          <section className="grid lg:grid-cols-2 gap-6">
            <div className="bg-muted border border-border rounded-sm p-8">
              <Award className="w-6 h-6 text-accent mb-3" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Certification by Metaskills Institute</h2>
              <p className="text-foreground/80 mt-3">Participants who successfully fulfil the programme requirements and demonstrate the required competencies through the applicable assessments will receive a certificate issued by Metaskills Institute.</p>
              <p className="text-foreground/80 mt-3">Participants who successfully meet the programme and assessment requirements will be awarded the {p.title} by Metaskills Institute.</p>
            </div>
            <div className="bg-muted border border-border rounded-sm p-8 flex flex-col">
              <Building2 className="w-6 h-6 text-accent mb-3" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Built for Individuals and Organisations</h2>
              <p className="text-foreground/80 mt-3">Programmes may be delivered for individual participants or configured as dedicated organisational cohorts.</p>
              <p className="text-foreground/80 mt-3">For corporate programmes, Metaskills can contextualise activities, datasets, examples and capstone challenges around relevant business or operational scenarios while retaining the programme's core learning outcomes.</p>
              <a href={waCorp} target="_blank" rel="noopener noreferrer" className="mt-6 self-start inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Discuss a Corporate Run <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <Heading eyebrow="FAQ" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading text-base text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* FINAL CTA */}
        <section className="section-dark">
          <div className="max-w-[1140px] mx-auto px-6 py-16 text-center">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground">Build Practical Digital Capability</h2>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">Speak with Metaskills Institute about the Full Professional Programme, the ABLE learning pathway or a customised corporate cohort.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <MessageCircle className="w-4 h-4" /> Chat with Specialist
              </a>
              <a href={mail} className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Mail className="w-4 h-4" /> Email Admissions
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AbleProgramPage;
