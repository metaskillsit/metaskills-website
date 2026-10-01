import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, MessageCircle, BookOpen, Target, GraduationCap, CalendarDays, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ABLE_FEE_NOTE, SHARED_FAQS, ablePrograms, getAbleProgramme } from "@/data/ablePrograms";
import NotFound from "./NotFound";

type Pathway = "help" | "full" | "able";
const PATHWAYS: Record<Pathway, { label: string; fee: string }> = {
  help: { label: "Help me choose", fee: "" },
  full: { label: "Full Course", fee: "S$9,000" },
  able: { label: "ABLE", fee: "S$3,000" },
};

const ABLE_STEPS = [
  { title: "Prepare through online learning.", text: "Study the relevant content independently and complete the preparation required for your practical sessions." },
  { title: "Apply it to a use case.", text: "Join MetaSkills-led activities to work through a task and translate concepts into practical steps." },
  { title: "Demonstrate and explain.", text: "Present your work, show how it functions and explain the decisions behind your approach." },
  { title: "Have your understanding assessed.", text: "Complete the programme assessment so your applied understanding can be evaluated against its requirements." },
];

const SECTIONS = [
  ["overview", "Overview"],
  ["pathways", "Learning Pathways"],
  ["able", "ABLE"],
  ["curriculum", "Curriculum"],
  ["assessment", "Assessment"],
  ["faqs", "FAQs"],
] as const;

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 150;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5">{children}</h2>
);

const AbleProgrammePage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/course\//, "").replace(/\/$/, "");
  const programme = getAbleProgramme(slug);
  const [pathway, setPathway] = useState<Pathway>("help");

  useEffect(() => {
    if (!programme) return;
    const prevTitle = document.title;
    document.title = programme.seoTitle;
    const url = `https://metaskills.sg/course/${programme.slug}`;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    meta?.setAttribute("content", programme.seoDescription);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify([
      { "@context": "https://schema.org", "@type": "Course", name: programme.title, description: programme.seoDescription, url, provider: { "@type": "Organization", name: "MetaSkills Institute", url: "https://metaskills.sg" } },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://metaskills.sg/" },
        { "@type": "ListItem", position: 2, name: "Programmes", item: "https://metaskills.sg/programmes" },
        { "@type": "ListItem", position: 3, name: "Certifications", item: "https://metaskills.sg/programmes" },
        { "@type": "ListItem", position: 4, name: programme.title, item: url },
      ] },
    ]);
    document.head.appendChild(ld);
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
      if (prevCanonical) canonical!.href = prevCanonical; else canonical?.remove();
      ld.remove();
    };
  }, [programme]);

  const links = useMemo(() => {
    if (!programme) return { wa: "", mail: "" };
    const sel = pathway === "help" ? "a learning pathway (please help me choose)" : PATHWAYS[pathway].label;
    const fee = pathway === "help" ? "the published fee" : PATHWAYS[pathway].fee;
    const msg = `Hi MetaSkills, I'm interested in ${programme.title}. I'm considering ${sel} at ${fee}. Please share the learning arrangements, preparation requirements, assessment criteria, schedule and fee inclusions.`;
    return {
      wa: `https://wa.me/6589866146?text=${encodeURIComponent(msg)}`,
      mail: `mailto:admissions@metaskills.sg?subject=${encodeURIComponent(`Enquiry: ${programme.title}`)}&body=${encodeURIComponent(msg)}`,
    };
  }, [programme, pathway]);

  if (!programme) return <NotFound />;
  const related = ablePrograms.filter((p) => p.slug !== programme.slug);
  const faqs = [...SHARED_FAQS, ...programme.faqs];

  const EnquiryCard = () => (
    <div className="bg-muted border border-border rounded-sm p-6 space-y-4">
      <h3 className="font-heading text-lg font-bold text-foreground">Enquire About This Programme</h3>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="border border-border rounded-sm p-3 bg-background">
          <p className="text-xs text-muted-foreground">Full Course</p>
          <p className="font-bold text-foreground">S$9,000</p>
        </div>
        <div className="border border-border rounded-sm p-3 bg-background">
          <p className="text-xs text-muted-foreground">ABLE</p>
          <p className="font-bold text-foreground">S$3,000</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Per learner, per course. {ABLE_FEE_NOTE}</p>
      <div>
        <label htmlFor="pathway-select" className="block text-xs font-semibold text-foreground mb-1.5">Learning pathway</label>
        <select
          id="pathway-select"
          value={pathway}
          onChange={(e) => setPathway(e.target.value as Pathway)}
          className="w-full border border-border rounded-sm bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="help">Help me choose</option>
          <option value="full">Full Course — S$9,000</option>
          <option value="able">ABLE — S$3,000</option>
        </select>
        {pathway !== "help" && (
          <p className="mt-2 text-sm text-foreground">Selected fee: <span className="font-bold">{PATHWAYS[pathway].fee}</span> per learner</p>
        )}
      </div>
      <p className="text-xs text-muted-foreground"><CalendarDays className="inline w-3.5 h-3.5 mr-1 text-primary" />Enquire for upcoming intakes.</p>
      <a href={links.wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all">
        <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
      </a>
      <a href={links.mail} className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-background transition-all">
        <Mail className="w-4 h-4" /> Email admissions@metaskills.sg
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px] pb-24 lg:pb-0">
        <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes" className="hover:text-accent">Programmes</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes#certifications" className="hover:text-accent">Certifications</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground/80 font-medium" aria-current="page">{programme.title}</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="section-dark bg-[hsl(var(--hero-overlay))]">
          <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/50 text-accent">Certifications</span>
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-primary-foreground/20 text-primary-foreground/70">{programme.subjectArea}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-4xl break-words">{programme.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-accent font-medium">{programme.subheading}</p>
            <p className="mt-4 text-primary-foreground/80 max-w-3xl leading-relaxed">{programme.heroParagraph}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Subject areas">
              {programme.chips.map((c) => (
                <li key={c} className="text-sm px-3 py-1.5 rounded-sm bg-primary-foreground/10 text-primary-foreground/90">{c}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => scrollToId("enquire")} className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Enquire About This Programme <ArrowRight className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => scrollToId("curriculum")} className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                View Curriculum
              </button>
            </div>
          </div>
        </section>

        {/* FACTS */}
        <section className="border-b border-border bg-muted">
          <dl className="max-w-[1140px] mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-5 text-sm">
            {[
              ["Fees", "Full Course S$9,000 / ABLE S$3,000, per learner per course"],
              ["Focus", programme.facts.focus],
              ["Entry", programme.facts.entry],
              ["Pathway", "Full Course or ABLE"],
              ["Intake", "Enquire for upcoming intakes"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{k}</dt>
                <dd className="font-semibold text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SECTION NAV */}
        <nav aria-label="Page sections" className="sticky top-20 md:top-[90px] z-30 bg-background/95 backdrop-blur border-b border-border">
          <ul className="max-w-[1140px] mx-auto px-6 flex gap-5 overflow-x-auto text-sm">
            {SECTIONS.map(([id, label]) => (
              <li key={id}>
                <button type="button" onClick={() => scrollToId(id)} className="py-3 whitespace-nowrap text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">{label}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16 min-w-0">
              <section id="overview" className="scroll-mt-40">
                <H2>Overview</H2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  {programme.overview.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <section id="pathways" className="scroll-mt-40">
                <H2>Choose your learning pathway</H2>
                <p className="text-foreground/80 mb-6">Choose the learning pathway that suits how you want to prepare and apply your skills.</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="border border-border rounded-sm p-6 flex flex-col">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Full Course</p>
                    <p className="font-heading text-3xl font-bold text-foreground my-2">S$9,000</p>
                    <p className="text-sm text-foreground/80 leading-relaxed flex-1">A comprehensive learning pathway covering the programme content, practical application and assessment. Suitable for learners seeking the full programme experience. Speak to MetaSkills about the teaching format, schedule and included learning support.</p>
                    <p className="text-xs text-muted-foreground mt-3">Contact us for the full programme structure, teaching format and schedule.</p>
                    <button type="button" onClick={() => { setPathway("full"); scrollToId("enquire"); }} className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:brightness-110">Enquire About the Full Course</button>
                  </div>
                  <div className="border border-border rounded-sm p-6 flex flex-col">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">ABLE</p>
                    <p className="font-heading text-3xl font-bold text-foreground my-2">S$3,000</p>
                    <p className="text-sm text-foreground/80 leading-relaxed flex-1">Learn the course content online independently, then join MetaSkills for activity-based use cases and assessment. Put your knowledge into practice and demonstrate your understanding through the work you complete.</p>
                    <p className="text-xs text-muted-foreground mt-3">Independent online learning, followed by MetaSkills-led practical use cases and assessment. Enquire for preparation requirements and the practical-session schedule.</p>
                    <button type="button" onClick={() => { setPathway("able"); scrollToId("enquire"); }} className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:brightness-110">Enquire About ABLE</button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Per learner, per course. {ABLE_FEE_NOTE}</p>
              </section>

              <section id="able" className="scroll-mt-40">
                <H2>What is ABLE?</H2>
                <p className="font-heading text-lg text-foreground mb-4">Learn independently. Apply your knowledge. Demonstrate your understanding.</p>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>ABLE stands for Activity-Based Learning and Education. It is designed for learners who study course content online independently and want to find out how well they can apply what they have learned.</p>
                  <p>You come to MetaSkills for practical, activity-based use cases and assessment. These give you opportunities to work through realistic tasks, demonstrate your approach and have your applied understanding evaluated.</p>
                  <p>The focus is on evidence of learning: what you can do, how you approach a task and how clearly you can explain the result. Assessment provides the basis for MetaSkills to recognise the understanding you demonstrate, subject to the programme's assessment and award requirements.</p>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">How ABLE works</h3>
                <ol className="grid sm:grid-cols-2 gap-4">
                  {ABLE_STEPS.map((s, i) => (
                    <li key={s.title} className="border border-border rounded-sm p-5 bg-muted">
                      <span className="text-accent font-heading text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <p className="font-semibold text-foreground mt-1">{s.title}</p>
                      <p className="text-sm text-foreground/75 mt-1">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <H2>What you will learn</H2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {programme.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-foreground/80"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{o}</li>
                  ))}
                </ul>
              </section>

              <section className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">Who this programme is for</h2>
                  <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                    {programme.audience.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">Before you begin</h2>
                  <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                    {programme.beforeYouBegin.map((b, i) => <p key={i}>{b}</p>)}
                  </div>
                </div>
              </section>

              <section id="curriculum" className="scroll-mt-40">
                <H2>{programme.curriculumHeading}</H2>
                <p className="text-xs text-muted-foreground mb-4">Topic groupings are editorial and do not indicate duration, credits or class sessions.</p>
                <Accordion type="multiple" defaultValue={["area-0"]} className="border-t border-border">
                  {programme.areas.map((a, i) => (
                    <AccordionItem key={a.title} value={`area-${i}`}>
                      <AccordionTrigger className="text-left font-heading text-base md:text-lg">{a.title}</AccordionTrigger>
                      <AccordionContent className="space-y-3 text-foreground/80">
                        <p>{a.description}</p>
                        {a.topics && <p><span className="font-semibold text-foreground">Topics: </span>{a.topics}</p>}
                        {a.core && (
                          <div>
                            <p className="font-semibold text-foreground mb-1">Core topics</p>
                            <ul className="list-disc pl-5 space-y-1">{a.core.map((c) => <li key={c}>{c}</li>)}</ul>
                          </div>
                        )}
                        {a.deeper && (
                          <div>
                            <p className="font-semibold text-foreground mb-1">Deeper study areas</p>
                            <ul className="list-disc pl-5 space-y-1">{a.deeper.map((c) => <li key={c}>{c}</li>)}</ul>
                          </div>
                        )}
                        {a.application && <p><span className="font-semibold text-foreground">Illustrative application: </span>{a.application}</p>}
                        {a.scopeNote && <p className="text-xs text-muted-foreground italic">{a.scopeNote}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {programme.connections && (
                <section aria-labelledby="connections-h">
                  <h2 id="connections-h" className="font-heading text-2xl font-bold text-foreground mb-5">See the connections</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="img" aria-label="Data provides the information. Cloud provides computing and storage. AI uses data to identify patterns or support a task.">
                    {[["Data", "Provides the information"], ["Cloud", "Provides computing and storage"], ["AI", "Uses data to identify patterns or support a task"]].map(([t, d]) => (
                      <div key={t} className="border border-border rounded-sm p-5 text-center bg-muted">
                        <p className="font-heading text-xl font-bold text-primary">{t}</p>
                        <p className="text-sm text-foreground/75 mt-1">{d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 mt-4">Data provides the information. Cloud provides computing and storage. AI uses data to identify patterns or support a task. The right combination depends on the problem, the data and the operating requirements.</p>
                </section>
              )}

              <section>
                <H2>ABLE practical activities</H2>
                <p className="text-xs text-muted-foreground italic mb-3">Illustrative activities. The specific tasks and project scope will be confirmed for each intake.</p>
                <p className="text-foreground/80 mb-4">{programme.activitiesIntro}</p>
                <ul className="space-y-3">
                  {programme.activities.map((a) => (
                    <li key={a} className="flex gap-3 text-foreground/80"><Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />{a}</li>
                  ))}
                </ul>
                <div className="mt-6 border-l-4 border-accent bg-muted p-5 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-1">How you check your execution</h3>
                  <p className="text-sm text-foreground/80">{programme.executionCheck}</p>
                </div>
              </section>

              {programme.showcase && (
                <section>
                  <H2>{programme.showcase.heading}</H2>
                  {programme.showcase.scopeNote && <p className="text-xs text-muted-foreground italic mb-4">{programme.showcase.scopeNote}</p>}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {programme.showcase.items.map((s) => (
                      <div key={s.title} className="border border-border rounded-sm p-5">
                        <p className="font-semibold text-foreground">{s.title}</p>
                        <p className="text-sm text-foreground/75 mt-1">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {programme.bullets && (
                <section>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">{programme.bullets.heading}</h2>
                  <ul className="space-y-2">
                    {programme.bullets.items.map((b) => <li key={b} className="flex gap-3 text-foreground/80"><Layers className="w-4 h-4 text-primary shrink-0 mt-1" />{b}</li>)}
                  </ul>
                </section>
              )}

              <section id="assessment" className="scroll-mt-40">
                <H2>Assessment and recognition</H2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>Assessment focuses on the understanding you demonstrate through practical work. It helps establish whether you can apply the relevant concepts, complete the task and explain your results.</p>
                  <p>Recognition is based on meeting the programme's assessment and award requirements. Completing online content or attending practical sessions alone does not establish that those requirements have been met. Contact MetaSkills for the assessment format, completion criteria and recognition awarded for your selected pathway.</p>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-40">
                <H2>Frequently asked questions</H2>
                <div className="divide-y divide-border border-y border-border">
                  {faqs.map((f) => (
                    <div key={f.q} className="py-4">
                      <h3 className="font-semibold text-foreground">{f.q}</h3>
                      <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <H2>Related programmes</H2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/course/${r.slug}`} className="group border border-border rounded-sm p-5 hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <p className="text-xs uppercase tracking-wider text-accent font-semibold">"{r.relatedPrompt}"</p>
                      <p className="font-heading font-bold text-foreground mt-2">{r.title}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">View Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <aside id="enquire" className="lg:col-span-1 scroll-mt-40">
              <div className="lg:sticky lg:top-40"><EnquiryCard /></div>
            </aside>
          </div>
        </div>

        <section className="section-dark bg-[hsl(var(--hero-overlay))]">
          <div className="max-w-[1140px] mx-auto px-6 py-16 text-center">
            <GraduationCap className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">Ready to discuss {programme.shortTitle}?</h2>
            <p className="text-primary-foreground/75 mt-3 max-w-2xl mx-auto">Speak to MetaSkills about the Full Course or ABLE pathway, preparation requirements and upcoming intakes.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={links.wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:brightness-110"><MessageCircle className="w-4 h-4" /> Enquire About This Programme</a>
              <a href={links.mail} className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-sm hover:bg-primary-foreground/10"><BookOpen className="w-4 h-4" /> Email Us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile bottom enquiry bar */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-background border-t border-border px-4 pt-3" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}>
        <button type="button" onClick={() => scrollToId("enquire")} className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm">
          Enquire · Full Course S$9,000 / ABLE S$3,000
        </button>
      </div>
      <FooterSection />
    </div>
  );
};

export default AbleProgrammePage;
