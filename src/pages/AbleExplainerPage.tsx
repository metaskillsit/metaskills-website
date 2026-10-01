import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ABLE_FEE, ABLE_FULL_FEE, ableCourses, ableFaqs } from "@/data/ableCourses";

const steps = [
  ["Study online independently", "Access the full course content and prepare on your own schedule."],
  ["Join practical sessions", "MetaSkills designs activities around real use cases so you apply concepts, not just review them."],
  ["Demonstrate your execution", "Run what you have built, explain your approach and check whether it meets the task requirements."],
  ["Identify your next step", "Use the activity outcomes to recognise what you can do and where more practice will help."],
];

const gets = [
  "Access to the full online course content for independent study",
  "MetaSkills-designed practical activities based on real use cases",
  "Facilitated sessions to work through activities with guidance",
  "Assessment of your execution to validate understanding",
  "Clear identification of strengths and areas for further practice",
];

const AbleExplainerPage = () => {
  useEffect(() => { document.title = "ABLE Courses — Activity-Based Learning and Education | MetaSkills"; }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <section className="section-dark bg-primary py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <span className="section-eyebrow !text-accent mb-3">ABLE · Activity-Based Learning and Education</span>
            <h1 className="section-h2 !text-white">Learn online. Prove you can do it.</h1>
            <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">Been learning online, but still unsure whether you can apply what you have studied? MetaSkills ABLE Courses combine online self-learning with practical sessions focused on execution. Work through real-world activities, tackle use-case challenges and demonstrate what you can actually build.</p>
          </div>
        </section>

        <div className="max-w-[1140px] mx-auto px-6 py-14 space-y-14">
          <section>
            <h2 className="section-h3 mb-6">How it works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(([t, d], i) => (
                <div key={t} className="border-t-2 border-accent pt-4">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-medium text-foreground mt-1">{t}</p>
                  <p className="body-p mt-2">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 italic text-muted-foreground max-w-3xl">Online study helps you understand the content. Practical execution helps you find out whether you can apply it. ABLE brings both into the same learning journey — at a lower fee because you take ownership of the self-study part.</p>
          </section>

          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-h3 mb-4">Why ABLE costs less</h2>
              <p className="body-p">ABLE is designed for learners who are comfortable studying on their own but want structured opportunities to prove they can apply that knowledge. You cover the theory independently through online materials. MetaSkills then designs activities around real use cases — so you are not just watching or reading, but actually building, running and explaining working outputs. Because you are responsible for the independent study portion, the programme fee is lower than the full guided course.</p>
              <h3 className="font-heading text-lg mt-6 mb-2">What ABLE is not</h3>
              <p className="body-p">ABLE is not a self-paced course with no support, nor is it a watered-down version of the full programme. The practical sessions and assessments are real — you produce outputs, demonstrate how they work and receive feedback on your execution.</p>
            </div>
            <div>
              <h2 className="section-h3 mb-4">What you get in ABLE</h2>
              <ul className="space-y-2 list-disc pl-5 body-p">{gets.map((g) => <li key={g}>{g}</li>)}</ul>
              <h3 className="font-heading text-lg mt-6 mb-2">Eligibility</h3>
              <p className="body-p">ABLE is suited to self-directed learners who have studied online and want to validate their ability to execute. Tell us what you have studied so we can discuss your preparation for the practical activities.</p>
            </div>
          </section>

          <section>
            <h2 className="section-h3 mb-6">Courses available (ABLE pricing)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ableCourses.map((c) => (
                <Link key={c.slug} to={`/programmes/certifications/${c.slug}`} className="group border border-border rounded-sm p-6 hover:border-accent transition-colors">
                  <p className="font-heading text-lg text-foreground">{c.title}</p>
                  <p className="mt-3 text-sm text-accent font-semibold">ABLE Course — {ABLE_FEE}</p>
                  <p className="text-xs text-muted-foreground">Full Course — {ABLE_FULL_FEE}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:text-accent">View course <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              ))}
            </div>
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
      </main>
      <FooterSection />
    </div>
  );
};

export default AbleExplainerPage;
