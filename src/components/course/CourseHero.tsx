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
    <section className="relative bg-[hsl(var(--hero-overlay))] overflow-hidden min-h-[300px] md:min-h-[380px]">
      {/* Cinematic slideshow background with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow
          images={categoryImages}
          alt={course.title}
          className="absolute inset-0 h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover object-center"
          width={1280}
          height={720}
          interval={7000}
          loading="eager"
          showDots={false}
          kenBurns={true}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.95)] via-[hsl(var(--hero-overlay)/0.75)] to-[hsl(var(--hero-overlay)/0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.85)] via-transparent to-[hsl(var(--hero-overlay)/0.2)]" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-14 md:py-20 flex flex-col justify-end min-h-[300px] md:min-h-[380px]">
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors mb-5 text-sm group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Programmes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2"
          >
            {course.category}
          </motion.p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-3">
            {course.title}
          </h1>
          <p className="text-primary-foreground/65 text-base md:text-lg leading-relaxed max-w-2xl">
            {course.tagline}
          </p>

          {course.jointlyOfferedBy && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-accent text-sm font-medium mt-4"
            >
              <Award className="w-4 h-4" />
              Jointly offered by {course.jointlyOfferedBy}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHero;
