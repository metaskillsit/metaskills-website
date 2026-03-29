import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, RotateCcw } from "lucide-react";
import { Course } from "@/data/courses";
import ImageSlideshow from "@/components/ImageSlideshow";

interface CourseHeroProps {
  course: Course;
  categoryImages: string[];
}

const CourseHero = ({ course, categoryImages }: CourseHeroProps) => {
  return (
    <section className="relative bg-[hsl(var(--hero-overlay))] overflow-hidden min-h-[340px] md:min-h-[420px]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.95)] via-[hsl(var(--hero-overlay)/0.7)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.8)] via-transparent to-[hsl(var(--hero-overlay)/0.3)]" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-24 flex flex-col justify-end min-h-[340px] md:min-h-[420px]">
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors mb-6 text-sm group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Programmes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-wider mb-3"
          >
            {course.category}
          </motion.p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground leading-tight mb-4">
            {course.title}
          </h1>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
            {course.tagline}
          </p>

          {/* Stats badges */}
          {(course.totalRuns || course.totalParticipants) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-5"
            >
              {course.totalRuns && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold backdrop-blur-sm">
                  <RotateCcw className="w-3.5 h-3.5" />
                  {course.totalRuns} Runs Completed
                </span>
              )}
              {course.totalParticipants && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-semibold backdrop-blur-sm">
                  <Users className="w-3.5 h-3.5" />
                  {course.totalParticipants} Participants Trained
                </span>
              )}
            </motion.div>
          )}

          {course.jointlyOfferedBy && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
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
