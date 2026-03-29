import { motion } from "framer-motion";
import { RotateCcw, Users, TrendingUp, Camera } from "lucide-react";
import { Course } from "@/data/courses";
import trainingCentreImg from "@/assets/training-centre.jpg";

interface CourseTrackRecordProps {
  course: Course;
}

const CourseTrackRecord = ({ course }: CourseTrackRecordProps) => {
  if (!course.totalRuns && !course.totalParticipants) return null;

  return (
    <section className="bg-[hsl(var(--hero-overlay))]">
      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Stats side */}
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Proven Track Record
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Trusted by Professionals &amp; Organisations
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {course.totalRuns && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-5 text-center backdrop-blur-sm"
                >
                  <RotateCcw className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-heading text-3xl font-bold text-primary-foreground">{course.totalRuns}</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">Runs Completed</p>
                </motion.div>
              )}
              {course.totalParticipants && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-5 text-center backdrop-blur-sm"
                >
                  <Users className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-heading text-3xl font-bold text-primary-foreground">{course.totalParticipants}</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">Participants Trained</p>
                </motion.div>
              )}
            </div>

            {course.runHistory && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-2 text-sm text-primary-foreground/60 leading-relaxed"
              >
                <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {course.runHistory}
              </motion.p>
            )}
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={trainingCentreImg}
                alt="MetaSkills Training Centre"
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={450}
              />
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[hsl(var(--hero-overlay)/0.8)] backdrop-blur-sm px-3 py-1.5 rounded-sm">
              <Camera className="w-3 h-3 text-accent" />
              <span className="text-xs text-primary-foreground/70">Our Training Centre</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseTrackRecord;
