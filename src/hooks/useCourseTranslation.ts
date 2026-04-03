import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";

/**
 * Hook that returns translated course fields.
 * If a course has an i18nKey, it looks up translations from the locale files.
 * Otherwise, it falls back to the hardcoded English values in the course object.
 */
export const useCourseTranslation = (course: Course) => {
  const { t, i18n } = useTranslation();
  const key = course.i18nKey;

  const ct = (field: string, fallback: string): string => {
    if (!key) return fallback;
    const translated = t(`courses.${key}.${field}`, { defaultValue: "" });
    return translated || fallback;
  };

  const title = ct("title", course.title);
  const category = ct("category", course.category);
  const tagline = ct("tagline", course.tagline);
  const whyAttend = ct("whyAttend", course.whyAttend);
  const courseDesign = ct("courseDesign", course.courseDesign);

  const objectives = key
    ? course.objectives.map((obj, i) => {
        const translated = t(`courses.${key}.objective${i + 1}`, { defaultValue: "" });
        return translated || obj;
      })
    : course.objectives;

  const afterCompleting = course.afterCompleting
    ? key
      ? course.afterCompleting.map((item, i) => {
          const translated = t(`courses.${key}.afterCompleting${i + 1}`, { defaultValue: "" });
          return translated || item;
        })
      : course.afterCompleting
    : undefined;

  const whatYouLearn = course.whatYouLearn
    ? key
      ? course.whatYouLearn.map((item, i) => {
          const translated = t(`courses.${key}.whatYouLearn${i + 1}`, { defaultValue: "" });
          return translated || item;
        })
      : course.whatYouLearn
    : undefined;

  const schedule = key
    ? course.schedule.map((s, dayIdx) => ({
        day: t(`courses.${key}.scheduleDay${dayIdx + 1}`, { defaultValue: "" }) || s.day,
        items: s.items.map((item, itemIdx) => {
          const translated = t(`courses.${key}.scheduleDay${dayIdx + 1}Item${itemIdx + 1}`, { defaultValue: "" });
          return translated || item;
        }),
      }))
    : course.schedule;

  return {
    title,
    category,
    tagline,
    whyAttend,
    courseDesign,
    objectives,
    afterCompleting,
    whatYouLearn,
    schedule,
  };
};
