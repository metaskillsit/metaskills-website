import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const AdmissionsPage = () => {
  const { t } = useTranslation();

  const benefits = [
    t("admissions.benefit1"),
    t("admissions.benefit2"),
    t("admissions.benefit3"),
    t("admissions.benefit4"),
    t("admissions.benefit5"),
    t("admissions.benefit6"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("admissions.title")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              {t("admissions.subtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t("admissions.whyJoin")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>

              <div id="fees" className="mt-12 pt-8 border-t border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {t("admissions.feesTitle")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("admissions.feesDesc")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>{t("admissions.cancellation")}</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-sm p-8 border border-border sticky top-24"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                {t("admissions.requestInfo")}
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">{t("admissions.fullName")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t("admissions.fullNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">{t("admissions.email")}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t("admissions.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">{t("admissions.programmeOfInterest")}</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">{t("admissions.selectProgramme")}</option>
                    <option>Foundations of Agentic AI Workflows</option>
                    <option>Empowering Agentic AI with LLMs</option>
                    <option>Deploying & Securing Agentic AI Systems</option>
                    <option>Python Programming For Data Analytics</option>
                    <option>Certified Data Analyst</option>
                    <option>Certified Data Scientist</option>
                    <option>Algorithmic Trading</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">{t("admissions.message")}</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                    placeholder={t("admissions.messagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  {t("admissions.submit")}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AdmissionsPage;
