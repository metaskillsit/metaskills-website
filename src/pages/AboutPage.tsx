import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pillarIcons = [Brain, TrendingUp, ShieldCheck, Users];

const AboutPage = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: pillarIcons[0], title: t("aboutPage.pillar1Title"), description: t("aboutPage.pillar1Desc") },
    { icon: pillarIcons[1], title: t("aboutPage.pillar2Title"), description: t("aboutPage.pillar2Desc") },
    { icon: pillarIcons[2], title: t("aboutPage.pillar3Title"), description: t("aboutPage.pillar3Desc") },
    { icon: pillarIcons[3], title: t("aboutPage.pillar4Title"), description: t("aboutPage.pillar4Desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("aboutPage.heroTitle")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-2xl">
              {t("aboutPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">{t("aboutPage.missionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.missionP1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("aboutPage.missionP2")}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">{t("aboutPage.visionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.visionP1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("aboutPage.visionP2")}</p>
            </div>
          </div>
        </section>

        <section className="bg-muted border-y border-border">
          <div className="max-w-[1140px] mx-auto px-6 py-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              {t("aboutPage.coreAreas")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{t("aboutPage.langTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{t("aboutPage.langDesc")}</p>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
