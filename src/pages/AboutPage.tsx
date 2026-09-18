import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useRef, useState } from "react";
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
  const [activeAct, setActiveAct] = useState(0);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = value < 0.16 ? 0 : value < 0.34 ? 1 : value < 0.5 ? 2 : value < 0.68 ? 3 : value < 0.88 ? 4 : 5;
    setActiveAct((current) => current === next ? current : next);
  });
  const actMotion = { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -18 }, transition: { duration: reducedMotion ? 0.01 : 0.55, ease: "easeOut" as const } };

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

            <AnimatePresence mode="wait">
            {activeAct === 0 && <motion.section key="hero" {...actMotion} className="about-act about-act-hero">
              <span className="about-kicker">The Institute</span>
              <h1>{t("aboutPage.heroTitle")}</h1>
              <p>{t("aboutPage.heroSubtitle")}</p>
              <span className="about-scroll-cue">Scroll to explore</span>
            </motion.section>}

            {activeAct === 1 && <motion.section key="mission" {...actMotion} className="about-act about-act-copy about-act-left">
              <span className="about-index">01 / 05</span>
              <h2>{t("aboutPage.missionTitle")}</h2>
              <div className="about-glass-copy">
                <p>{t("aboutPage.missionP1")}</p>
                <p>{t("aboutPage.missionP2")}</p>
              </div>
            </motion.section>}

            {activeAct === 2 && <motion.section key="vision" {...actMotion} className="about-act about-act-copy about-act-right">
              <span className="about-index">02 / 05</span>
              <h2>{t("aboutPage.visionTitle")}</h2>
              <div className="about-glass-copy">
                <p>{t("aboutPage.visionP1")}</p>
                <p>{t("aboutPage.visionP2")}</p>
              </div>
            </motion.section>}

            {activeAct === 3 && <motion.section key="areas" {...actMotion} className="about-act about-act-areas">
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
            </motion.section>}

            {activeAct === 4 && <motion.section key="practices" {...actMotion} className="about-act about-act-practices">
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
            </motion.section>}

            {activeAct === 5 && <motion.section key="reach" {...actMotion} className="about-act about-act-reach">
              <span className="about-index">05 / 05</span>
              <h2>{t("aboutPage.langTitle")}</h2>
              <p>{t("aboutPage.langDesc")}</p>
            </motion.section>}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
