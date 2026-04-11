import { motion } from "framer-motion";
import { Sparkles, Rocket, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CourseNewLaunch = ({ courseTitle }: { courseTitle: string }) => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Sparkles,
      title: t("coursePage.newCourse.freshTitle", { defaultValue: "Brand New Curriculum" }),
      desc: t("coursePage.newCourse.freshDesc", { defaultValue: "Designed with the latest industry frameworks, tools, and real-world case studies for 2025 and beyond." }),
    },
    {
      icon: Users,
      title: t("coursePage.newCourse.smallTitle", { defaultValue: "Small Cohort, Big Impact" }),
      desc: t("coursePage.newCourse.smallDesc", { defaultValue: "Intimate class sizes ensure personalised mentorship and hands-on learning with industry-expert faculty." }),
    },
    {
      icon: Rocket,
      title: t("coursePage.newCourse.pioneerTitle", { defaultValue: "Be a Pioneer" }),
      desc: t("coursePage.newCourse.pioneerDesc", { defaultValue: "Join the inaugural cohort and gain a first-mover advantage with skills your peers won't have yet." }),
    },
  ];

  return (
    <section className="border-t border-border bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t("coursePage.newCourse.badge", { defaultValue: "New Programme" })}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("coursePage.newCourse.heading", { defaultValue: "Launching Soon" })}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("coursePage.newCourse.subheading", {
              defaultValue: "This is a brand-new programme crafted by our expert faculty. Be among the first to gain these cutting-edge skills.",
            })}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[hsl(var(--hero-overlay))] rounded-lg p-8 md:p-10 text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
            {t("coursePage.newCourse.ctaTitle", { defaultValue: "Register Your Interest" })}
          </h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
            {t("coursePage.newCourse.ctaDesc", {
              defaultValue: "Secure your spot in the inaugural cohort. Early registrants enjoy priority placement and may qualify for launch pricing.",
            })}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6588993975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              {t("coursePage.newCourse.ctaWhatsApp", { defaultValue: "WhatsApp Us" })}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:admissions@metaskills.sg"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm text-sm hover:bg-white/10 transition-all"
            >
              {t("coursePage.newCourse.ctaEmail", { defaultValue: "Email Admissions" })}
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-white/50 text-xs">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {t("coursePage.newCourse.noObligation", { defaultValue: "No obligation" })}</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {t("coursePage.newCourse.earlyBird", { defaultValue: "Early-bird pricing" })}</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {t("coursePage.newCourse.limitedSeats", { defaultValue: "Limited seats" })}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseNewLaunch;
