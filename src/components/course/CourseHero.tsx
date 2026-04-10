import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";
import { useCourseTranslation } from "@/hooks/useCourseTranslation";
import ImageSlideshow from "@/components/ImageSlideshow";

interface CourseHeroProps {
  course: Course;
  categoryImages: string[];
}

const CourseHero = ({ course, categoryImages }: CourseHeroProps) => {
  const { t } = useTranslation();
  const ct = useCourseTranslation(course);

  return (
    <section className="relative bg-[hsl(var(--hero-overlay))] overflow-hidden">
      <div className="relative w-full h-[380px] md:h-[480px] lg:h-[540px]">
        <ImageSlideshow
          images={categoryImages}
          alt={ct.title}
          className="absolute inset-0 h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          width={1280}
          height={720}
          interval={15000}
          loading="eager"
          showDots={false}
          kenBurns={true}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--hero-overlay))] to-transparent" />

        <Link
          to="/programmes"
          className="absolute top-4 left-4 md:top-6 md:left-6 z-20 inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm group backdrop-blur-sm bg-black/20 rounded-full px-3 py-1.5"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t("coursePage.allProgrammes")}
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-[hsl(var(--hero-overlay))] border-t border-white/10"
      >
        <div className="max-w-[1140px] mx-auto px-6 py-5 md:py-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-1.5"
          >
            {ct.category}
          </motion.p>
          <h1 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-1">
            {ct.title}
          </h1>
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-3xl">
            {ct.tagline}
          </p>
          {ct.jointlyOfferedBy && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-accent text-xs font-medium mt-2"
            >
              <Award className="w-3.5 h-3.5" />
              {t("coursePage.jointlyOfferedBy", { name: ct.jointlyOfferedBy })}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CourseHero;
