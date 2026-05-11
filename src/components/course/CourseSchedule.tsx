import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Mail, TrendingUp, Users, Flame, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CourseRunDate } from "@/data/courseSchedule";

interface CourseScheduleProps {
  schedule: CourseRunDate[];
  courseTitle: string;
}

const CourseSchedule = ({ schedule, courseTitle }: CourseScheduleProps) => {
  const { t } = useTranslation();
  if (!schedule.length) return null;

  const pastRuns = schedule.filter((r) => r.status === "full");
  const upcomingRuns = schedule.filter((r) => r.status === "upcoming" || r.status === "filling");

  // Hide entire section only if there's nothing to show
  if (pastRuns.length === 0 && upcomingRuns.length === 0) return null;
  const clientRuns = pastRuns.filter((r) => r.client);
  const uniqueClients = [...new Set(clientRuns.map((r) => r.client))];
  const hasCompletedRuns = pastRuns.length > 0;

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
      <div className="max-w-[1140px] mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            {hasCompletedRuns && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{pastRuns.length}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{t("coursePage.runsCompleted")}</div>
                </div>
              </div>
            )}
            {uniqueClients.length > 0 && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{uniqueClients.length}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{t("coursePage.corporateClients")}</div>
                </div>
              </div>
            )}
            {hasCompletedRuns && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{t("coursePage.fullySubscribed")}</div>
                </div>
              </div>
            )}
          </div>

        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {pastRuns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {t("coursePage.pastRunsCount", { count: pastRuns.length })}
              </h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                {pastRuns.map((run, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{run.intake}</p>
                        <p className="text-xs text-muted-foreground">{run.dates}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {run.client && (
                        <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-primary/10 text-primary border border-primary/20">
                          {run.client}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-muted text-muted-foreground border border-border">
                        {t("coursePage.full")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSchedule;
