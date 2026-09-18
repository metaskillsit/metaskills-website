import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutImmersiveScene from "@/components/about/AboutImmersiveScene";
import raysAsset from "@/assets/about-auralis/light-rays.png.asset.json";
import glintAsset from "@/assets/about-auralis/light-glint.png.asset.json";
import bokehAsset from "@/assets/about-auralis/light-bokeh.png.asset.json";

const pillarIcons = [Brain, TrendingUp, ShieldCheck, Users];

const AboutPage = () => {
  const { t } = useTranslation();
  const journeyRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start start", "end end"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.11, 0.19], [1, 1, 0]);
  const missionOpacity = useTransform(scrollYProgress, [0.12, 0.2, 0.34, 0.42], [0, 1, 1, 0]);
  const visionOpacity = useTransform(scrollYProgress, [0.31, 0.4, 0.5, 0.57], [0, 1, 1, 0]);
  const areasOpacity = useTransform(scrollYProgress, [0.5, 0.58, 0.68, 0.74], [0, 1, 1, 0]);
  const practicesOpacity = useTransform(scrollYProgress, [0.68, 0.75, 0.88, 0.93], [0, 1, 1, 0]);
  const reachOpacity = useTransform(scrollYProgress, [0.88, 0.95, 1], [0, 1, 1]);

  const pillars = [
    { icon: pillarIcons[0], title: t("aboutPage.pillar1Title"), description: t("aboutPage.pillar1Desc") },
    { icon: pillarIcons[1], title: t("aboutPage.pillar2Title"), description: t("aboutPage.pillar2Desc") },
    { icon: pillarIcons[2], title: t("aboutPage.pillar3Title"), description: t("aboutPage.pillar3Desc") },
    { icon: pillarIcons[3], title: t("aboutPage.pillar4Title"), description: t("aboutPage.pillar4Desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div ref={journeyRef} className="about-cinematic-journey">
          <div className="about-cinematic-stage">
            <div className="about-scene"><AboutImmersiveScene progress={scrollYProgress} reducedMotion={reducedMotion} /></div>
            <div className="about-light about-light-rays" style={{ backgroundImage: `url(${raysAsset.url})` }} />
            <div className="about-light about-light-glint" style={{ backgroundImage: `url(${glintAsset.url})` }} />
            <div className="about-light about-light-bokeh" style={{ backgroundImage: `url(${bokehAsset.url})` }} />
            <div className="about-grain" />

            <motion.section style={{ opacity: heroOpacity }} className="about-act about-act-hero">
              <span className="about-kicker">The Institute</span>
              <h1>{t("aboutPage.heroTitle")}</h1>
              <p>{t("aboutPage.heroSubtitle")}</p>
              <span className="about-scroll-cue">Scroll to explore</span>
            </motion.section>

            <motion.section style={{ opacity: missionOpacity }} className="about-act about-act-copy about-act-left">
              <span className="about-index">01 / 05</span>
              <h2>{t("aboutPage.missionTitle")}</h2>
              <div className="about-glass-copy">
                <p>{t("aboutPage.missionP1")}</p>
                <p>{t("aboutPage.missionP2")}</p>
              </div>
            </motion.section>

            <motion.section style={{ opacity: visionOpacity }} className="about-act about-act-copy about-act-right">
              <span className="about-index">02 / 05</span>
              <h2>{t("aboutPage.visionTitle")}</h2>
              <div className="about-glass-copy">
                <p>{t("aboutPage.visionP1")}</p>
                <p>{t("aboutPage.visionP2")}</p>
              </div>
            </motion.section>

            <motion.section style={{ opacity: areasOpacity }} className="about-act about-act-areas">
              <header><span className="about-index">03 / 05</span><h2>{t("aboutPage.coreAreas")}</h2></header>
              <div className="about-area-grid">
                {pillars.map((pillar, i) => (
                  <article key={pillar.title}>
                    <span>0{i + 1}</span>
                    <pillar.icon aria-hidden="true" />
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section style={{ opacity: practicesOpacity }} className="about-act about-act-practices">
              <div className="about-practice-heading">
                <span className="about-index">04 / 05</span>
                <h2>{t("practices.heading")}</h2>
                <p>{t("practices.headingItalic")}</p>
              </div>
              <ol>
                {[1, 2, 3, 4, 5].map((number) => (
                  <li key={number}>
                    <span>0{number}</span>
                    <div><h3>{t(`practices.p${number}Name`)}</h3><em>{t(`practices.p${number}Tagline`)}</em><p>{t(`practices.p${number}Desc`)}</p></div>
                  </li>
                ))}
              </ol>
            </motion.section>

            <motion.section style={{ opacity: reachOpacity }} className="about-act about-act-reach">
              <span className="about-index">05 / 05</span>
              <h2>{t("aboutPage.langTitle")}</h2>
              <p>{t("aboutPage.langDesc")}</p>
            </motion.section>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
