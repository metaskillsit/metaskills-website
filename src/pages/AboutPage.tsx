import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pillarIcons = [Brain, TrendingUp, ShieldCheck, Users];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Index = ({ n }: { n: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="text-xs font-semibold tracking-[0.25em] text-primary">{n} / 05</span>
    <span className="h-px w-16 bg-primary/40" />
  </div>
);

const AboutPage = () => {
  const { t } = useTranslation();
  const pillars = [1, 2, 3, 4].map((i) => ({
    icon: pillarIcons[i - 1],
    title: t(`aboutPage.pillar${i}Title`),
    description: t(`aboutPage.pillar${i}Desc`),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl">
            <motion.div {...reveal}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">The Institute</span>
              <h1 className="mt-6 font-heading text-4xl md:text-6xl leading-tight text-foreground">{t("aboutPage.heroTitle")}</h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{t("aboutPage.heroSubtitle")}</p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-6 py-20 md:py-28 max-w-6xl grid md:grid-cols-2 gap-16">
          {[
            { n: "01", title: t("aboutPage.missionTitle"), p: [t("aboutPage.missionP1"), t("aboutPage.missionP2")] },
            { n: "02", title: t("aboutPage.visionTitle"), p: [t("aboutPage.visionP1"), t("aboutPage.visionP2")] },
          ].map((b) => (
            <motion.div key={b.n} {...reveal}>
              <Index n={b.n} />
              <h2 className="font-heading text-3xl md:text-4xl mb-6">{b.title}</h2>
              {b.p.map((x, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-justify">{x}</p>)}
            </motion.div>
          ))}
        </section>

        {/* Core areas */}
        <section className="bg-secondary/40 border-y border-border">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
            <motion.div {...reveal}><Index n="03" /><h2 className="font-heading text-3xl md:text-4xl mb-12">{t("aboutPage.coreAreas")}</h2></motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => (
                <motion.article key={p.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}
                  className="bg-card border border-border p-8 hover:border-primary transition-colors">
                  <p.icon className="h-7 w-7 text-primary mb-6" aria-hidden="true" />
                  <h3 className="font-heading text-xl mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="container mx-auto px-6 py-20 md:py-28 max-w-5xl">
          <motion.div {...reveal}>
            <Index n="04" />
            <h2 className="font-heading text-3xl md:text-4xl">{t("practices.heading")}</h2>
            <p className="mt-3 font-heading italic text-xl text-primary">{t("practices.headingItalic")}</p>
          </motion.div>
          <ol className="mt-12 divide-y divide-border border-y border-border">
            {[1, 2, 3, 4, 5].map((n) => (
              <motion.li key={n} {...reveal} className="grid md:grid-cols-[80px_1fr] gap-4 py-8">
                <span className="font-heading text-3xl text-primary">0{n}</span>
                <div>
                  <h3 className="font-heading text-2xl">{t(`practices.p${n}Name`)}</h3>
                  <em className="block mt-1 text-sm text-primary">{t(`practices.p${n}Tagline`)}</em>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{t(`practices.p${n}Desc`)}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Reach */}
        <section className="bg-secondary/40 border-t border-border">
          <motion.div {...reveal} className="container mx-auto px-6 py-20 md:py-24 max-w-4xl text-center">
            <div className="flex justify-center"><Index n="05" /></div>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">{t("aboutPage.langTitle")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutPage.langDesc")}</p>
          </motion.div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
