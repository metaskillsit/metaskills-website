import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";
import { useCourseTranslation } from "@/hooks/useCourseTranslation";
import { getCourseImages } from "@/data/courseImages";
import ImageSlideshow from "@/components/ImageSlideshow";

interface CourseRelatedProps {
  relatedCourses: Course[];
}

const CourseRelated = ({ relatedCourses }: CourseRelatedProps) => {
  const { t } = useTranslation();
  if (relatedCourses.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-14">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          {t("coursePage.relatedProgrammes")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedCourses.map((c, i) => (
            <RelatedCourseCard key={c.slug} course={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RelatedCourseCard = ({ course, index }: { course: Course; index: number }) => {
  const { t } = useTranslation();
  const ct = useCourseTranslation(course);
  const images = getCourseImages(course.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/course/${course.slug}`} className="group block">
        <div className="aspect-[16/9] overflow-hidden rounded-sm mb-4">
          <ImageSlideshow
            images={images}
            alt={ct.title}
            className="h-full w-full"
            imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            interval={4000 + index * 800}
            showDots={false}
          />
        </div>
        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
          {ct.category}
        </p>
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {ct.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {ct.tagline}
        </p>
        <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
          {t("coursePage.learnMore")} <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </motion.div>
  );
};

export default CourseRelated;
