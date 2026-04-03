import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, Users, Award, ArrowLeft } from "lucide-react";
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

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug || "");

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <CourseHero course={course} categoryImages={categoryImages} />

        <section className="border-b border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{course.duration || "2-Day Workshop"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>{t("coursePage.keyInfoFaculty")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>{t("coursePage.keyInfoCertification")}</span>
            </div>
          </div>
        </section>

        <CourseSchedule schedule={courseSchedule} courseTitle={course.title} />

        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <CourseContent course={course} />
              <CourseGallery images={categoryImages} title={course.title} />
            </div>
            <CourseSidebar course={course} />
          </div>
        </div>

        <CoursePastRuns pastRuns={pastRuns} courseTitle={course.title} />
        <CoursePolicies />
        <CourseRelated relatedCourses={relatedCourses} />
      </main>
      <FooterSection />
    </div>
  );
};

export default CoursePage;
