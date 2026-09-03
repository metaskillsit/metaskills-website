import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { aiPoweredBusinessAnalyticsCourses } from "@/data/coursesAIPoweredBusinessAnalytics";

const WHATSAPP_NUMBER = "6589866146";
const WHATSAPP_MESSAGE =
  "Hello Metaskills Institute, I would like to enquire about the Advanced Certificate in AI-Powered Business Analytics.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const EMAIL_URL =
  "mailto:admissions@metaskills.sg?subject=Enquiry%3A%20Advanced%20Certificate%20in%20AI-Powered%20Business%20Analytics";

const audience = [
  "Business analysts and reporting professionals seeking to add AI-assisted analytics to their workflow",
  "Finance, operations, marketing, and HR professionals who work extensively with Excel, Power Query, and Power BI",
  "Managers who commission or consume data-driven insights and dashboards",
  "Individuals transitioning into analytics roles who want a structured, stackable credential",
  "Teams looking for a common analytics language and toolset across Excel, Power BI, and AI co-pilots",
];

const outcomes = [
  "Frame business problems as structured analytics questions",
  "Clean, transform, and combine data efficiently with Power Query",
  "Build relational models and write DAX measures for accurate KPIs",
  "Design compelling visuals and data stories in Power BI",
  "Build operational dashboards that support monitoring and faster decisions",
  "Automate repetitive Excel workflows with macros, VBA, and AI co-pilots",
];

const AIPoweredBusinessAnalyticsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-90" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-10 bg-accent" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-white/70 font-medium">
                Certifications
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight">
              Advanced Certificate in AI-Powered Business Analytics
            </h1>
            <p className="mt-5 max-w-3xl font-body text-base md:text-lg text-white/80 leading-relaxed">
              A stackable, six-module programme for professionals who want to clean data, model
              relationships, build dashboards, and automate Excel workflows — all with AI co-pilots
              accelerating every step.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <Stat icon={<Clock className="w-5 h-5" />} label="Duration" value="6 × 2 Days" />
              <Stat icon={<Calendar className="w-5 h-5" />} label="Format" value="In-Person" />
              <Stat icon={<Award className="w-5 h-5" />} label="Certificate" value="Stackable" />
              <Stat icon={<MapPin className="w-5 h-5" />} label="Venue" value="Singapore" />
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-primary font-semibold hover:bg-white/90 transition"
              >
                <MessageCircle className="w-4 h-4" /> Chat with Specialist
              </a>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                Email Admissions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-14">
            <Section title="Overview">
              <p className="text-muted-foreground leading-relaxed">
                The Advanced Certificate in AI-Powered Business Analytics is a practical, stackable
                programme built for professionals who analyse and present business data. It covers
                the full analytics workflow — from problem framing and data preparation to
                modelling, visualisation, dashboarding, and automation — with AI co-pilots embedded
                throughout.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Each of the six modules can be taken individually or combined to earn the Advanced
                Certificate. The curriculum is tool-focused and outcome-oriented: participants
                leave with working skills in Excel, Power Query, Power Pivot, DAX, Power BI, and
                VBA, supported by generative AI assistants that accelerate learning and execution.
              </p>
            </Section>

            <Section title="Who Should Attend">
              <ul className="space-y-3">
                {audience.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Learning Outcomes">
              <ul className="space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Programme Structure">
              <p className="text-muted-foreground mb-6">
                Complete any module individually, or complete all six to be awarded the{" "}
                <strong>Advanced Certificate in AI-Powered Business Analytics</strong>. Each module
                runs for two full days in person.
              </p>
              <div className="space-y-3">
                {aiPoweredBusinessAnalyticsCourses.map((course, idx) => (
                  <Link
                    key={course.slug}
                    to={`/course/${course.slug}`}
                    className="group block p-5 border border-border rounded-xl bg-card hover:border-accent/50 hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] tracking-widest text-accent mb-1">
                          MODULE {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h3 className="font-heading text-lg text-foreground group-hover:text-accent transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {course.tagline}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" /> 2 Days · In-Person
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </Section>

            <Section title="Pricing & Enrolment">
              <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Individual Module">
                  <p className="text-2xl font-heading font-bold text-foreground">S$750</p>
                  <p className="text-sm text-muted-foreground">per pax per module</p>
                </InfoCard>
                <InfoCard title="Corporate / Class Run">
                  <p className="text-2xl font-heading font-bold text-foreground">S$6,000</p>
                  <p className="text-sm text-muted-foreground">per class run</p>
                </InfoCard>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fees are before GST. Contact admissions@metaskills.sg or WhatsApp +65 8986 6146 for
                next run dates, in-house delivery, and group enrolment.
              </p>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-heading text-lg text-foreground mb-4">Enquire Now</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Speak with our admissions team about module selection, group pricing, and upcoming
                  intakes.
                </p>
                <div className="space-y-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                  <a
                    href={EMAIL_URL}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-border text-foreground font-semibold hover:bg-secondary transition"
                  >
                    Email Admissions
                  </a>
                </div>
              </div>

              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-heading text-lg text-foreground mb-4">At a Glance</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>6 modules × 2 days each</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>In-person, instructor-led workshops in Singapore</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <Users className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Open to individuals and corporate groups</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Advanced Certificate awarded on completion of all six modules</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

const Stat = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 p-4 rounded-sm bg-white/10 backdrop-blur-sm border border-white/10">
    <span className="text-accent">{icon}</span>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-white/60">{label}</p>
      <p className="font-body text-sm font-semibold text-white">{value}</p>
    </div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block h-px w-8 bg-accent" />
      <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="p-5 border border-border rounded-xl bg-card">
    <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
      {title}
    </h3>
    {children}
  </div>
);

export default AIPoweredBusinessAnalyticsPage;
