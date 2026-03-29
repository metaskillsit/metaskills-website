import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
  Play,
} from "lucide-react";
import { getCourseBySlug, courses, getCategoryImages } from "@/data/courses";
import { getCourseImages } from "@/data/courseImages";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ImageSlideshow from "@/components/ImageSlideshow";
import CourseHero from "@/components/course/CourseHero";
import CourseTrackRecord from "@/components/course/CourseTrackRecord";
import CourseContent from "@/components/course/CourseContent";
import CourseSidebar from "@/components/course/CourseSidebar";
import CoursePolicies from "@/components/course/CoursePolicies";
import CourseRelated from "@/components/course/CourseRelated";
import CourseGallery from "@/components/course/CourseGallery";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug || "");

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

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
            to="/programmes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Browse Programmes
          </Link>
        </div>
      </div>
    );
  }

  const categoryImages = getCourseImages(course.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <CourseHero course={course} categoryImages={categoryImages} />

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

        {/* === TRACK RECORD SHOWCASE === */}
        <CourseTrackRecord course={course} />

        {/* === MAIN CONTENT === */}
        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <CourseContent course={course} />
              <CourseGallery images={categoryImages} title={course.title} />
            </div>
            <CourseSidebar course={course} />
          </div>
        </div>

        <CoursePolicies />
        <CourseRelated relatedCourses={relatedCourses} />
      </main>
      <FooterSection />
    </div>
  );
};

export default CoursePage;
