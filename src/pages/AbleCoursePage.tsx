import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Check, MessageCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ABLE_FEE, ABLE_FULL_FEE, ableFaqs, ableSteps, ableValue, getAbleCourse, whatsappLink } from "@/data/ableCourses";
import NotFound from "./NotFound";

const AbleCoursePage = () => {
  const slug = useLocation().pathname.split("/").pop() || "";
  const course = getAbleCourse(slug);

  useEffect(() => {
    if (course) document.title = `${course.title} | MetaSkills`;
  }, [course]);

  if (!course) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <section className="section-dark bg-primary py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <span className="section-eyebrow !text-accent mb-3">Certifications · Full Course & ABLE</span>
            <h1 className="section-h2 !text-white max-w-3xl">{course.title}</h1>
            <p className="mt-4 text-xl font-heading text-accent">{course.subheading}</p>
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
              <div className="border border-white/20 rounded-sm p-5">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Full Course — {ABLE_FULL_FEE}</p>
                <p className="text-sm text-white/85 leading-relaxed">{course.heroFull}</p>
              </div>
              <div className="border border-accent/60 rounded-sm p-5">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">ABLE Course — {ABLE_FEE}</p>
                <p className="text-sm text-white/85 leading-relaxed">{course.heroAble}</p>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="border-b border-border">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li><li>/</li>
            <li><Link to="/programmes" className="hover:text-accent">Programmes</Link></li><li>/</li>
            <li><Link to="/programmes#certifications" className="hover:text-accent">Certifications</Link></li><li>/</li>
            <li className="text-foreground/80 font-medium">{course.title}</li>
          </ol>
        </nav>

        <div className="max-w-[1140px] mx-auto px-6 py-14 grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-14">
            <section>
              <h2 className="section-h3 mb-6">How ABLE works</h2>
              <p className="body-p mb-6">ABLE (Activity-Based Learning and Education) combines online self-learning with MetaSkills-led practical execution.</p>
              <ol className="space-y-5">
                {ableSteps.map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div><p className="font-medium text-foreground">{s.t}</p><p className="body-p">{s.d}</p></div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 italic text-muted-foreground">{ableValue}</p>
            </section>

            <section>
              <h2 className="section-h3 mb-6">Practical section (ABLE): {course.practicalTitle}</h2>
              <ul className="space-y-3">
                {course.practical.map((p) => (
                  <li key={p} className="flex gap-3 body-p"><Check className="w-4 h-4 mt-1 text-accent shrink-0" />{p}</li>
                ))}
              </ul>
              <p className="mt-5 body-p"><span className="font-medium text-foreground">Execution check: </span>{course.executionCheck}</p>
              {course.extraNote && <p className="mt-3 body-p">{course.extraNote}</p>}
              <p className="mt-4 text-sm italic text-muted-foreground">Illustrative activities. The specific tasks and project scope will be confirmed for each intake.</p>
            </section>

            <section>
              <h2 className="section-h3 mb-4">Who it's for & preparation</h2>
              <p className="body-p mb-3"><span className="font-medium text-foreground">Audience: </span>Professionals seeking a structured certificate, and self-directed learners who have studied online and want to check whether they can apply what they know.</p>
              <p className="body-p"><span className="font-medium text-foreground">Preparation: </span>Plan time for independent online learning before the practical sessions. Ask MetaSkills which content to prepare and what software to set up.</p>
            </section>

            <section>
              <h2 className="section-h3 mb-6">FAQs</h2>
              <div className="space-y-3">
                {ableFaqs.map((f) => (
                  <details key={f.q} className="border border-border rounded-sm p-4">
                    <summary className="cursor-pointer font-medium text-foreground">{f.q}</summary>
                    <p className="body-p mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="border border-border rounded-sm p-6 space-y-4">
              <h3 className="font-heading text-lg">Course Fees</h3>
              <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Full Course</p><p className="text-2xl font-heading text-foreground">{ABLE_FULL_FEE} <span className="text-sm text-muted-foreground">per learner</span></p><p className="text-xs text-muted-foreground mt-1">Structured instructor-led programme with full curriculum guidance.</p></div>
              <div><p className="text-xs uppercase tracking-wider text-accent">ABLE Course</p><p className="text-2xl font-heading text-foreground"><s className="text-base text-muted-foreground mr-2">{ABLE_FULL_FEE}</s>{ABLE_FEE} <span className="text-sm text-muted-foreground">per learner</span></p><p className="text-xs text-muted-foreground mt-1">Online self-learning + MetaSkills-led practical execution.</p></div>
              <p className="text-xs text-muted-foreground">Contact us to confirm GST treatment and any additional software or usage charges.</p>
              <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Schedule: </span>Enquire for schedule, online preparation requirements and entry conditions.</p>
              <a href={whatsappLink(course.title)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:brightness-110">
                <MessageCircle className="w-4 h-4" /> Chat with Specialist
              </a>
              <a href="mailto:admissions@metaskills.sg" className="flex items-center justify-center gap-2 text-sm text-primary hover:text-accent"><Mail className="w-4 h-4" /> admissions@metaskills.sg</a>
              <Link to="/programmes/able-courses" className="block text-center text-sm underline text-muted-foreground hover:text-accent">What is ABLE?</Link>
            </div>
          </aside>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default AbleCoursePage;
