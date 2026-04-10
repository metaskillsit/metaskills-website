import { motion } from "framer-motion";
import { CheckCircle, Clock, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";
import { useCourseTranslation } from "@/hooks/useCourseTranslation";
import imdaLogo from "@/assets/logo-imda.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";

interface CourseContentProps {
  course: Course;
}

const CourseContent = ({ course }: CourseContentProps) => {
  const { t } = useTranslation();
  const ct = useCourseTranslation(course);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          {t("coursePage.whyAttend")}
        </h2>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{ct.whyAttend}</p>

        {course.slug === "vibe-coding-for-digital-builders" && (
          <div className="mt-6 flex flex-wrap items-center gap-4 p-4 bg-muted rounded-lg border border-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Client Pool:</span>
            <div className="bg-white rounded-lg px-4 py-2">
              <img src={imdaLogo} alt="IMDA" className="h-8 md:h-10 w-auto object-contain" loading="lazy" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary ml-2">In Partnership With:</span>
            <div className="bg-white rounded-lg px-4 py-2">
              <img src={tinkercademyLogo} alt="Tinkercademy" className="h-6 md:h-8 w-auto object-contain" loading="lazy" />
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
          {t("coursePage.objectives")}
        </h2>
        <div className="space-y-3">
          {ct.objectives.map((obj, i) => (
            <motion.div
              key={i}
              className="flex gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80 leading-relaxed">{obj}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {ct.afterCompleting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            {t("coursePage.afterCompleting")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ct.afterCompleting.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-3 p-4 bg-muted rounded-sm border border-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        id="structure"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
          {t("coursePage.courseStructure")}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {ct.courseDesign}
        </p>

        {ct.duration && (
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
            <Clock className="w-4 h-4" />
            {ct.duration}
          </div>
        )}

        <div className="space-y-6">
          {ct.schedule.map((s) => (
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
    </>
  );
};

export default CourseContent;
