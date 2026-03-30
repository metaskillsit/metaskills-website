import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Mail } from "lucide-react";
import { CourseRunDate } from "@/data/courseSchedule";

interface CourseScheduleProps {
  schedule: CourseRunDate[];
  courseTitle: string;
}

const CourseSchedule = ({ schedule, courseTitle }: CourseScheduleProps) => {
  if (!schedule.length) return null;

  const pastRuns = schedule.filter((r) => r.status === "full");
  const upcomingRuns = schedule.filter((r) => r.status === "upcoming" || r.status === "filling");

  return (
    <section className="border-t border-border bg-muted/20">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            Course Schedule
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Past & Upcoming Dates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View our training schedule. Past runs are fully subscribed — register early for upcoming sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Past Runs */}
          {pastRuns.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Past Runs ({pastRuns.length} completed)
              </h3>
              <div className="space-y-2">
                {pastRuns.map((run, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{run.intake}</p>
                        <p className="text-xs text-muted-foreground">{run.dates}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-muted text-muted-foreground border border-border">
                      Full
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Runs */}
          {upcomingRuns.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                Upcoming Runs
              </h3>
              <div className="space-y-2">
                {upcomingRuns.map((run, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-card border border-primary/20 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{run.intake}</p>
                        <p className="text-xs text-muted-foreground">{run.dates}</p>
                      </div>
                    </div>
                    {run.status === "filling" ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-accent/10 text-accent border border-accent/20">
                        Filling Fast
                      </span>
                    ) : (
                      <a
                        href="mailto:admissions@metaskills.sg"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all"
                      >
                        <Mail className="w-3 h-3" />
                        Contact Us
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSchedule;
