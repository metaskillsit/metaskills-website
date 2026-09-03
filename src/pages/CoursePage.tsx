import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, Users, Award, ArrowLeft, Presentation, Wallet } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getPastRuns } from "@/data/pastRuns";
import { getCourseSchedule } from "@/data/courseSchedule";
import { getCourseBySlug, courses } from "@/data/courses";
import { getCourseImages } from "@/data/courseImages";
import { useCourseTranslation } from "@/hooks/useCourseTranslation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CourseHero from "@/components/course/CourseHero";
import CourseContent from "@/components/course/CourseContent";
import CourseSidebar from "@/components/course/CourseSidebar";
import CoursePolicies from "@/components/course/CoursePolicies";
import CourseRelated from "@/components/course/CourseRelated";
import CourseGallery from "@/components/course/CourseGallery";
import CoursePastRuns from "@/components/course/CoursePastRuns";
import CourseSchedule from "@/components/course/CourseSchedule";
import CoursePastClients from "@/components/course/CoursePastClients";


const CoursePageContent = ({ slug }: { slug: string }) => {
  const { t } = useTranslation();
  const course = getCourseBySlug(slug);

  const relatedCourses = courses
    .filter((c) => c.category === course?.category && c.slug !== slug)
    .slice(0, 3);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t("coursePage.notFoundTitle")}</h1>
          <p className="text-muted-foreground mb-6">{t("coursePage.notFoundDesc")}</p>
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> {t("coursePage.browseProgrammes")}
          </Link>
        </div>
      </div>
    );
  }

  const categoryImages = getCourseImages(course.slug);
  const pastRuns = getPastRuns(course.slug);
  const courseSchedule = getCourseSchedule(course.slug);

  return <CoursePageInner course={course} categoryImages={categoryImages} pastRuns={pastRuns} courseSchedule={courseSchedule} relatedCourses={relatedCourses} />;
};

const categorySlugs: Record<string, string> = {
  "Cloud and DevOps": "cloud-devops-ai-stack",
  "FinOps": "finops",
};

const CoursePageInner = ({ course, categoryImages, pastRuns, courseSchedule, relatedCourses }: any) => {
  const { t } = useTranslation();
  const ct = useCourseTranslation(course);
  const isNew = pastRuns.length === 0;
  const categorySlug = categorySlugs[course.category];

  useEffect(() => {
    if (!course.seoTitle && !course.seoDescription) return;
    const prevTitle = document.title;
    if (course.seoTitle) document.title = course.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    if (course.seoDescription && meta) meta.setAttribute("content", course.seoDescription);
    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute("content", prevDesc);
    };
  }, [course.seoTitle, course.seoDescription]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <CourseHero course={course} categoryImages={categoryImages} isNew={isNew} />

        <CoursePastClients slug={course.slug} />

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes" className="hover:text-accent transition-colors">Programmes</Link></li>
            {categorySlug && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to={categorySlug === "finops" ? "/programmes/finops" : `/course-category/${categorySlug}`} className="hover:text-accent transition-colors">
                    {ct.category}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li className="text-foreground/80 font-medium">{ct.title}</li>
          </ol>
        </nav>

        <section className="border-b border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{ct.duration || t("coursePage.defaultDuration")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>{t("coursePage.keyInfoFaculty")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>{course.certificationStatus || t("coursePage.keyInfoCertification")}</span>
            </div>
            {course.deliveryMode && (
              <div className="flex items-center gap-2">
                <Presentation className="w-4 h-4 text-primary" />
                <span>{course.deliveryMode}</span>
              </div>
            )}
            {course.fundingStatus && (
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-primary" />
                <span>{course.fundingStatus}</span>
              </div>
            )}
          </div>
        </section>

        <CourseSchedule schedule={courseSchedule} courseTitle={ct.title} />

        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <CourseContent course={course} />
              <CourseGallery images={categoryImages} title={ct.title} />
            </div>
            <CourseSidebar course={course} />
          </div>
        </div>

        {!isNew && <CoursePastRuns pastRuns={pastRuns} courseTitle={ct.title} />}
        <CoursePolicies />
        <CourseRelated relatedCourses={relatedCourses} />
      </main>
      <FooterSection />
    </div>
  );
};

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  return <CoursePageContent slug={slug || ""} />;
};

export default CoursePage;
