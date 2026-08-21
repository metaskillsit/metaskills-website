import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Clock, Minus, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import EnquiryForm from "@/components/enquiry/EnquiryForm";

const SEO_TITLE = "Red Hat Learning Subscription Singapore | LS220 & LS520 | Metaskills";
const SEO_DESC =
  "Compare Red Hat Learning Subscription Standard LS220 at S$11,600 and Premium LS520 at S$14,200 per participant. Get 365-day training access, labs and certification opportunities through Metaskills.";
const OG_TITLE = "Red Hat Learning Subscription – Standard & Premium";
const OG_DESC =
  "Choose Standard LS220 at S$11,600 or Premium LS520 at S$14,200 per participant for 365-day Red Hat training access.";

export const PLAN_STANDARD = "Standard LS220 — S$11,600 per participant";
export const PLAN_PREMIUM = "Premium LS520 — S$14,200 per participant";
const PLAN_UNSURE = "Not sure — request a recommendation";

const standardIncludes = [
  "Access to the full Red Hat training catalogue",
  "Self-paced digital training",
  "Up to 400 hours of hands-on cloud labs",
  "Guided learning paths",
  "Exam-readiness resources",
  "Up to five certification exam attempts",
  "One complimentary retake for each eligible first exam attempt, up to five retakes",
  "Expert learning resources and support",
  "Access to eligible new content released during the subscription period",
];

const premiumIncludes = [
  "Everything included in Standard",
  "Live virtual instructor-led classes",
  "Up to two live virtual class sessions per eligible course",
  ...standardIncludes,
];

const comparison: { feature: string; standard: string; premium: string }[] = [
  { feature: "Subscription duration", standard: "365 days", premium: "365 days" },
  { feature: "Price per participant", standard: "S$11,600", premium: "S$14,200" },
  { feature: "Full Red Hat training catalogue", standard: "Included", premium: "Included" },
  { feature: "Self-paced courses", standard: "Included", premium: "Included" },
  { feature: "Hands-on labs", standard: "Up to 400 hours", premium: "Up to 400 hours" },
  { feature: "Certification exam attempts", standard: "Up to 5", premium: "Up to 5" },
  { feature: "Complimentary retakes", standard: "Up to 5", premium: "Up to 5" },
  { feature: "Exam-readiness resources", standard: "Included", premium: "Included" },
  { feature: "Live virtual classes", standard: "Not included", premium: "Included" },
  {
    feature: "Live class attendance",
    standard: "Not applicable",
    premium: "Up to 2 sessions per eligible course",
  },
];

const audienceList = [
  "Linux and system administrators",
  "Cloud and platform engineers",
  "DevOps professionals",
  "Site reliability engineers",
  "Infrastructure and automation engineers",
  "IT professionals pursuing Red Hat certifications",
  "Organisations developing internal Red Hat capabilities",
];

const whyMetaskills = [
  "Assistance selecting the appropriate subscription tier",
  "Support with corporate procurement and participant enrolment",
  "Guidance on aligning training with certification objectives",
  "A single contact point for purchase coordination",
  "Support for individual and organisational training requirements",
];

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(el);
  }
  const prev = el.getAttribute(attr) || "";
  el.setAttribute(attr, value);
  return () => el!.setAttribute(attr, prev);
};

const RedHatSubscriptionPage = () => {
  const [plan, setPlan] = useState<string>(PLAN_UNSURE);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = SEO_TITLE;
    const restore = [
      setMeta('meta[name="description"]', "content", SEO_DESC),
      setMeta('meta[property="og:title"]', "content", OG_TITLE),
      setMeta('meta[property="og:description"]', "content", OG_DESC),
    ];
    return () => {
      document.title = prevTitle;
      restore.forEach((r) => r());
    };
  }, []);

  const scrollToEnquiry = (selected: string) => {
    setPlan(selected);
    const el = document.getElementById("enquiry");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-10 bg-accent" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-white/70 font-medium">
                Cloud, DevOps &amp; AI Stack
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight">
              Red Hat Learning Subscription
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-4 font-heading text-xl md:text-2xl text-white/85">
              Standard and Premium 365-Day Training Plans
            </p>
            <p className="mt-5 max-w-3xl font-body text-base md:text-lg text-white/75 leading-relaxed">
              Build practical Red Hat expertise with 365-day access to an extensive catalogue of
              self-paced training, hands-on labs, certification preparation and examination
              opportunities. Choose Standard for flexible self-directed learning or Premium for the
              addition of live virtual instructor-led classes.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { name: "Standard", code: "LS220", price: "S$11,600" },
                { name: "Premium", code: "LS520", price: "S$14,200" },
              ].map((p) => (
                <div key={p.code} className="rounded-sm border border-white/20 bg-white/5 px-5 py-4">
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
                    {p.name} ({p.code})
                  </p>
                  <p className="mt-1 font-heading text-2xl md:text-3xl font-bold text-white">{p.price}</p>
                  <p className="text-xs text-white/60">per participant</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToEnquiry(PLAN_UNSURE)}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Metaskills
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/60">
              Individual subscription • 365-day access • Prices stated per participant
            </p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes" className="hover:text-accent transition-colors">Programmes</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/course-category/cloud-devops-ai-stack" className="hover:text-accent transition-colors">
                Cloud, DevOps &amp; AI Stack
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground/80 font-medium">Red Hat Learning Subscription</li>
          </ol>
        </nav>

        {/* PRICING */}
        <section className="max-w-[1140px] mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="font-body text-[11px] tracking-[0.28em] uppercase text-muted-foreground font-medium">
              Subscription Plans
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">
            Two plans, both with 365-day access
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {[
              {
                plan: "Standard",
                code: "LS220",
                price: "S$11,600",
                label: "Best for self-directed learners",
                includes: standardIncludes,
                featured: false,
              },
              {
                plan: "Premium",
                code: "LS520",
                price: "S$14,200",
                label: "Best for instructor-supported learning",
                includes: premiumIncludes,
                featured: true,
              },
            ].map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex flex-col h-full rounded-sm border p-7 md:p-8 bg-background ${
                  p.featured ? "border-accent shadow-lg" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">{p.plan}</h3>
                    <p className="font-mono text-[11px] tracking-widest text-muted-foreground mt-1">
                      PRODUCT CODE {p.code}
                    </p>
                  </div>
                  {p.featured && (
                    <span className="shrink-0 rounded-sm bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
                      Standard + live classes
                    </span>
                  )}
                </div>

                <p className="mt-5 font-heading text-3xl md:text-4xl font-bold text-foreground">{p.price}</p>
                <p className="text-sm text-muted-foreground">per participant</p>

                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" />365 days</span>
                  <span className="inline-flex items-center gap-2"><Users className="w-3.5 h-3.5 text-primary" />{p.label}</span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Prices are stated in Singapore dollars per participant. Final pricing, applicable taxes,
            availability and subscription entitlements are subject to confirmation at the time of
            enrolment. Product features and certification policies may be updated by the training
            and certification provider.
          </p>
        </section>

        {/* COMPARISON */}
        <section className="border-y border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-14 md:py-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Plan comparison
            </h2>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
              Premium includes everything in Standard, plus live virtual instructor-led classes.
            </p>

            <div className="overflow-x-auto rounded-sm border border-border bg-background">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="sr-only">
                  Comparison of Red Hat Learning Subscription Standard LS220 and Premium LS520
                </caption>
                <thead>
                  <tr className="bg-primary text-primary-foreground text-left">
                    <th scope="col" className="px-5 py-3 font-semibold">Feature</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Standard LS220</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Premium LS520</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 ? "bg-muted/40" : ""}>
                      <th scope="row" className="px-5 py-3 text-left font-medium text-foreground">
                        {row.feature}
                      </th>
                      <td className="px-5 py-3 text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          {row.standard === "Included" && <Check className="w-4 h-4 text-accent" aria-hidden="true" />}
                          {(row.standard === "Not included" || row.standard === "Not applicable") && (
                            <Minus className="w-4 h-4 text-muted-foreground/60" aria-hidden="true" />
                          )}
                          {row.standard}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          {row.premium === "Included" && <Check className="w-4 h-4 text-accent" aria-hidden="true" />}
                          {row.premium}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* AUDIENCE + WHY */}
        <section className="max-w-[1140px] mx-auto px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Who this programme is for
              </h2>
              <ul className="space-y-3">
                {audienceList.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-sm border border-border p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Why choose Standard</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose Standard if you prefer to learn independently and need flexible access to
                  Red Hat’s full training catalogue, hands-on labs and certification exam
                  opportunities throughout the year.
                </p>
              </div>
              <div className="rounded-sm border border-accent/50 p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Why choose Premium</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose Premium if you want everything included in Standard together with
                  structured, live virtual instructor-led classes for additional guidance and
                  reinforcement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
              Why choose Metaskills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyMetaskills.map((w) => (
                <div key={w} className="rounded-sm border border-border p-5">
                  <Check className="w-4 h-4 text-accent mb-3" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section id="enquiry" className="bg-[hsl(var(--hero-overlay))] text-white scroll-mt-28">
          <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Enquiry
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Red Hat Learning Subscription enquiry
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-2xl">
              Tell us which plan you are considering and how many participants you need. A Metaskills
              specialist will follow up to confirm enrolment. No payment is taken on this page.
              You can also email us directly at{" "}
              <a href="mailto:admissions@metaskills.sg" className="text-accent hover:underline">
                admissions@metaskills.sg
              </a>
              .
            </p>
            <EnquiryForm
              audienceLabel="Subscription plan"
              audienceOptions={[PLAN_STANDARD, PLAN_PREMIUM, PLAN_UNSURE]}
              presetAudience={plan}
              showFormat={false}
              roleLabel="Contact number"
              roleType="tel"
              rolePlaceholder="+65 0000 0000"
              teamSizeLabel="Number of participants"
              teamSizePlaceholder="e.g. 5"
              timeframeLabel="Preferred start date"
              timeframePlaceholder="e.g. October 2026"
              messageLabel="Additional requirements"
              messagePlaceholder="Tell us about certification goals, preferred courses or procurement requirements."
              submitLabel="Send Enquiry"
              successText="Thank you. A Metaskills specialist will follow up within one working day about your selected subscription plan."
            />
          </div>
        </section>

        {/* TRADEMARK NOTICE */}
        <section className="max-w-[1140px] mx-auto px-6 py-10">
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            Red Hat and associated product names are trademarks or registered trademarks of Red Hat,
            Inc. Metaskills Institute is responsible for its own programme information and enrolment
            services.
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default RedHatSubscriptionPage;
