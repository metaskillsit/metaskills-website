import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import { Course } from "@/data/courses";
import ImageSlideshow from "@/components/ImageSlideshow";

interface CourseHeroProps {
  course: Course;
  categoryImages: string[];
}

const CourseHero = ({ course, categoryImages }: CourseHeroProps) => {
  return (
    <section className="relative bg-[hsl(var(--hero-overlay))] overflow-hidden min-h-[420px] md:min-h-[520px] lg:min-h-[560px]">
      {/* Full-bleed slideshow — minimal overlay so photos shine */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow
          images={categoryImages}
          alt={course.title}
          className="absolute inset-0 h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover object-top"
          width={1280}
          height={720}
          interval={8000}
          loading="eager"
          showDots={false}
          kenBurns={true}
        />
        {/* Subtle gradient — only darken bottom-left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.75)] via-[hsl(var(--hero-overlay)/0.35)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.90)] via-[hsl(var(--hero-overlay)/0.20)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 flex flex-col justify-end min-h-[420px] md:min-h-[520px] lg:min-h-[560px] pb-8 md:pb-12">
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-4 text-sm group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Programmes
        </Link>

        {/* Compact glass text panel — doesn't block the photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl backdrop-blur-sm bg-[hsl(var(--hero-overlay)/0.45)] rounded-sm px-6 py-5 border border-white/10"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-2"
          >
            {course.category}
          </motion.p>
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
            {course.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {course.tagline}
          </p>
          {course.jointlyOfferedBy && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-accent text-xs font-medium mt-3"
            >
              <Award className="w-3.5 h-3.5" />
              Jointly offered by {course.jointlyOfferedBy}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHero;
