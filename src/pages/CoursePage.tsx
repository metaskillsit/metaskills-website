import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";
import { getCourseBySlug, courses, getCategoryImages } from "@/data/courses";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ImageSlideshow from "@/components/ImageSlideshow";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  const relatedCourses = courses
    .filter((c) => c.category === course?.category && c.slug !== slug)
    .slice(0, 3);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* === HERO BANNER with Slideshow === */}
        <section className="relative bg-primary overflow-hidden">
          {/* Slideshow background */}
          <div className="absolute inset-0 z-0">
            <ImageSlideshow
              images={getCategoryImages(course.category)}
              alt={course.title}
              className="absolute inset-0 h-full w-full"
              imgClassName="absolute inset-0 h-full w-full object-cover object-center"
              width={1280}
              height={720}
              interval={4500}
              loading="eager"
              showDots={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>

          <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <Link
              to="/#courses"
              className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors mb-8 text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Programmes
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                {course.category}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                {course.tagline}
              </p>
              {course.jointlyOfferedBy && (
                <p className="flex items-center gap-2 text-accent text-sm font-medium mt-4">
                  <Award className="w-4 h-4" />
                  Jointly offered by {course.jointlyOfferedBy}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* === KEY INFO BAR === */}
        <section className="border-b border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{course.duration || "2-Day Workshop"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Expert Faculty</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Certification Included</span>
            </div>
          </div>
        </section>

        {/* === MAIN CONTENT - Two column layout === */}
        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-14">
            {/* Left column - content */}
            <div className="lg:col-span-2 space-y-14">
              {/* Why Attend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Why Attend This Programme
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.whyAttend}
                </p>
              </motion.div>

              {/* Objectives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Course Objectives
                </h2>
                <div className="space-y-3">
                  {course.objectives.map((obj, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/80 leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* After Completing */}
              {course.afterCompleting && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    After Completing This Programme
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.afterCompleting.map((item, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-muted rounded-sm border border-border">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Course Structure */}
              <motion.div
                id="structure"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Course Design & Structure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {course.courseDesign}
                </p>

                {course.duration && (
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                )}

                <div className="space-y-6">
                  {course.schedule.map((s) => (
                    <div key={s.day} className="border border-border rounded-sm overflow-hidden">
                      <div className="bg-primary px-6 py-3 flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <h3 className="text-sm font-bold text-primary-foreground">{s.day}</h3>
                      </div>
                      <ul className="p-6 space-y-3">
                        {s.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column - sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Schedule card */}
                <div className="bg-muted rounded-sm p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">Next Run Date</h3>
                  </div>
                  <p className="text-foreground text-sm whitespace-pre-line">
                    {course.nextRunDate}
                  </p>
                </div>

                {/* Fees card */}
                <div className="bg-muted rounded-sm p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">Course Fees</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Self-Sponsored</p>
                      <p className="font-bold text-foreground">{course.fees.selfSponsored}</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs text-muted-foreground mb-0.5">Corporate Rates</p>
                      <p className="text-sm text-foreground">{course.fees.corporateSmall}</p>
                      <p className="text-sm text-foreground">{course.fees.corporateLarge}</p>
                    </div>
                    <p className="text-xs text-muted-foreground italic pt-2">
                      Note: Our course fees are exempt from GST.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="mailto:admissions@metaskills.sg"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all"
                >
                  <Mail className="w-4 h-4" /> Enquire Now
                </a>
                <Link
                  to="/#admissions"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-muted transition-all"
                >
                  Submit Enquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === POLICIES === */}
        <section className="border-t border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-12">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">
              Course Policies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cancellation",
                  text: "Up to 30 days before: Full refund minus SGD 900 processing fee. 30 days or less: No refund. Substitutions allowed up to 3 days before.",
                },
                {
                  title: "Rescheduling",
                  text: "Client-initiated rescheduling at least 14 days before. SGD 600 rescheduling fee may apply. Metaskills-initiated changes offer full refund option.",
                },
                {
                  title: "Attendance",
                  text: "75% attendance required for certification. Participants should arrive on time. Notify absence via email to admissions@metaskills.sg.",
                },
              ].map((policy) => (
                <div key={policy.title} className="bg-background rounded-sm p-5 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{policy.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{policy.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === RELATED COURSES === */}
        {relatedCourses.length > 0 && (
          <section className="bg-background">
            <div className="max-w-[1140px] mx-auto px-6 py-14">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Related Programmes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedCourses.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/course/${c.slug}`}
                    className="group border-t border-border pt-6"
                  >
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {c.category}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {c.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterSection />
    </div>
  );
};

export default CoursePage;
