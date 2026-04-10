import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import agenticHeroBg from "@/assets/agentic-hero-bg.jpg";
import terreneLogo from "@/assets/terrene-logo.svg";
import {
  Shield, Cpu, Eye, Activity, ArrowRight, CheckCircle2, AlertTriangle,
  BookOpen, Layers, Users, Bot, Brain, Building2, FileCheck, Workflow,
  MessageCircle, ExternalLink, ChevronRight, Landmark, BarChart3,
  Briefcase, Lock, Server, Zap, Target, Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WA_LINK =
  "https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20your%20Agentic%20AI%20Governance%20solutions.%20Can%20we%20schedule%20a%20strategy%20session%3F";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const AgenticAIPage = () => {
  const { t } = useTranslation();

  const flowLabels = [
    { label: t("agenticPage.trustLabel"), Icon: Shield },
    { label: t("agenticPage.executionLabel"), Icon: Workflow },
    { label: t("agenticPage.verificationLabel"), Icon: FileCheck },
    { label: t("agenticPage.observationLabel"), Icon: Eye },
  ];

  const failPoints = [
    t("agenticPage.fail1"), t("agenticPage.fail2"), t("agenticPage.fail3"),
    t("agenticPage.fail4"), t("agenticPage.fail5"),
  ];

  const researchCards = [
    { icon: Landmark, title: t("agenticPage.govFrameworks"), desc: t("agenticPage.govFrameworksDesc") },
    { icon: Globe, title: t("agenticPage.emergingStandards"), desc: t("agenticPage.emergingStandardsDesc") },
    { icon: Zap, title: t("agenticPage.enterpriseInfra"), desc: t("agenticPage.enterpriseInfraDesc") },
  ];

  const layers = [
    { icon: Shield, layer: t("agenticPage.trustPlane"), desc: t("agenticPage.trustPlaneDesc"), color: "43,96%,56%" },
    { icon: Workflow, layer: t("agenticPage.execPlane"), desc: t("agenticPage.execPlaneDesc"), color: "43,80%,50%" },
    { icon: FileCheck, layer: t("agenticPage.verifyLayer"), desc: t("agenticPage.verifyLayerDesc"), color: "43,70%,45%" },
    { icon: Eye, layer: t("agenticPage.observeLayer"), desc: t("agenticPage.observeLayerDesc"), color: "43,60%,40%" },
  ];

  const capabilities = [
    { icon: Bot, text: t("agenticPage.cap1") },
    { icon: Users, text: t("agenticPage.cap2") },
    { icon: Lock, text: t("agenticPage.cap3") },
    { icon: Shield, text: t("agenticPage.cap4") },
    { icon: FileCheck, text: t("agenticPage.cap5") },
    { icon: Brain, text: t("agenticPage.cap6") },
    { icon: Server, text: t("agenticPage.cap7") },
  ];

  const journey = [
    { icon: Target, step: t("agenticPage.assess"), desc: t("agenticPage.assessDesc") },
    { icon: Layers, step: t("agenticPage.design"), desc: t("agenticPage.designDesc") },
    { icon: Cpu, step: t("agenticPage.build"), desc: t("agenticPage.buildDesc") },
    { icon: Activity, step: t("agenticPage.pilot"), desc: t("agenticPage.pilotDesc") },
    { icon: Zap, step: t("agenticPage.scale"), desc: t("agenticPage.scaleDesc") },
  ];

  const useCases = [
    { icon: Building2, title: t("agenticPage.bpoTitle"), desc: t("agenticPage.bpoDesc") },
    { icon: BarChart3, title: t("agenticPage.finTitle"), desc: t("agenticPage.finDesc") },
    { icon: Bot, title: t("agenticPage.copilotTitle"), desc: t("agenticPage.copilotDesc") },
    { icon: Brain, title: t("agenticPage.decisionTitle"), desc: t("agenticPage.decisionDesc") },
    { icon: Briefcase, title: t("agenticPage.regulatedTitle"), desc: t("agenticPage.regulatedDesc") },
  ];

  const whyPoints = [
    t("agenticPage.whyMsi1"), t("agenticPage.whyMsi2"),
    t("agenticPage.whyMsi3"), t("agenticPage.whyMsi4"),
  ];

  const whatIsFeatures = [
    { icon: Brain, label: t("agenticPage.plansDecides"), desc: t("agenticPage.plansDecidesDesc") },
    { icon: Workflow, label: t("agenticPage.multiStep"), desc: t("agenticPage.multiStepDesc") },
    { icon: Server, label: t("agenticPage.usesTools"), desc: t("agenticPage.usesToolsDesc") },
    { icon: Cpu, label: t("agenticPage.memorySystems"), desc: t("agenticPage.memorySystemsDesc") },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-[hsl(220,15%,95%)]">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* HERO */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0">
            <img src={agenticHeroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,6%,0.85)] via-[hsl(220,25%,6%,0.7)] to-[hsl(220,25%,6%,0.5)]" />
          </div>
          <div className="relative z-10 max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-6">
                <Shield className="w-3.5 h-3.5" /> {t("agenticPage.badge")}
              </div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]">
                {t("agenticPage.heroTitle")} <span className="text-[hsl(var(--gold))]">{t("agenticPage.heroHighlight")}</span>
              </h1>
              <p className="text-[hsl(220,15%,55%)] text-base md:text-lg max-w-xl mb-10">
                {t("agenticPage.heroSubtitle")}
              </p>
              <div className="flex flex-wrap gap-4 items-start">
                <div className="relative">
                  <a href="https://terrene.foundation/" target="_blank" rel="noopener noreferrer" className="absolute -top-5 right-0 flex items-center gap-1.5 text-[9px] text-[hsl(220,15%,40%)] uppercase tracking-wider hover:text-[hsl(220,15%,60%)] transition-colors">
                    Powered by <img src={terreneLogo} alt="Terrene Foundation" className="h-3 brightness-0 invert opacity-50" />
                  </a>
                  <a href="#approach" className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(220,25%,6%)] font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all">
                    {t("agenticPage.requestDemo")}
                  </a>
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[hsl(220,20%,25%)] text-[hsl(220,15%,80%)] font-medium px-6 py-3 rounded-md hover:border-[hsl(var(--gold),0.5)] hover:text-[hsl(var(--gold))] transition-all">
                  <MessageCircle className="w-4 h-4" /> {t("agenticPage.bookStrategy")}
                </a>
              </div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-16 hidden md:block">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[hsl(220,15%,45%)]">
                {flowLabels.map(({ label, Icon }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    {i > 0 && <ChevronRight className="w-4 h-4 text-[hsl(var(--gold),0.4)]" />}
                    <div className="flex items-center gap-2 border border-[hsl(220,20%,18%)] bg-[hsl(220,25%,10%)] rounded-md px-4 py-2.5">
                      <Icon className="w-4 h-4 text-[hsl(var(--gold))]" />
                      <span className="text-[hsl(220,15%,75%)]">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT IS AGENTIC AI */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">{t("agenticPage.shiftLabel")}</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">{t("agenticPage.whatIsTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <p className="text-[hsl(220,15%,70%)] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("agenticPage.whatIsP1") }} />
                <p className="text-[hsl(220,15%,70%)] leading-relaxed mb-6">{t("agenticPage.whatIsP2")}</p>
                <a href="https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[hsl(var(--gold))] font-medium text-sm hover:underline">
                  <ExternalLink className="w-4 h-4" /> {t("agenticPage.imdaResearch")} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
                {whatIsFeatures.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-lg p-4">
                    <Icon className="w-5 h-5 text-[hsl(var(--gold))] mb-2" />
                    <p className="text-sm font-semibold text-[hsl(220,15%,90%)] mb-1">{label}</p>
                    <p className="text-xs text-[hsl(220,15%,55%)]">{desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-12">
              <AlertTriangle className="w-8 h-8 text-[hsl(0,70%,55%)] mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">{t("agenticPage.failTitle")}</h2>
              <p className="text-[hsl(220,15%,60%)]">{t("agenticPage.failSubtitle")}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {failPoints.map((point, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-start gap-3 border border-[hsl(0,30%,18%)] bg-[hsl(0,20%,8%)] rounded-lg p-4">
                  <AlertTriangle className="w-4 h-4 text-[hsl(0,70%,55%)] mt-0.5 shrink-0" />
                  <span className="text-sm text-[hsl(220,15%,75%)]">{point}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5} className="text-center mt-10 text-[hsl(var(--gold))] font-semibold text-sm md:text-base italic">
              {t("agenticPage.failQuote")}
            </motion.p>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">{t("agenticPage.industryLabel")}</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">{t("agenticPage.riseTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {researchCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1} className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6">
                  <Icon className="w-6 h-6 text-[hsl(var(--gold))] mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[hsl(220,15%,60%)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="approach" className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">{t("agenticPage.approachLabel")}</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">{t("agenticPage.solutionTitle")}</h2>
              <p className="text-[hsl(220,15%,60%)]">{t("agenticPage.solutionDesc")}</p>
            </motion.div>

            <div className="mb-20">
              <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="font-heading text-xl md:text-2xl font-bold text-center mb-10">
                {t("agenticPage.archTitle")}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {layers.map(({ icon: Icon, layer, desc, color }, i) => (
                  <motion.div key={layer} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1} className="relative border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6 overflow-hidden group hover:border-[hsl(43,96%,56%,0.3)] transition-colors">
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[hsl(${color})] to-transparent`} />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(43,96%,56%,0.1)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                      </div>
                      <span className="text-[hsl(220,15%,45%)] text-xs font-mono">0{i + 1}</span>
                    </div>
                    <h4 className="font-semibold text-base mb-2">{layer}</h4>
                    <p className="text-sm text-[hsl(220,15%,55%)] leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-8">{t("agenticPage.capabilities")}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {capabilities.map(({ icon: Icon, text }, i) => (
                  <motion.div key={text} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5} className="flex items-center gap-3 bg-[hsl(220,25%,9%)] border border-[hsl(220,20%,14%)] rounded-lg px-4 py-3">
                    <Icon className="w-4 h-4 text-[hsl(var(--gold))] shrink-0" />
                    <span className="text-sm text-[hsl(220,15%,75%)]">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">{t("agenticPage.deliveryLabel")}</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold">{t("agenticPage.deliveryTitle")}</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3">
              {journey.map(({ icon: Icon, step, desc }, i) => (
                <motion.div key={step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-5 relative">
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,96%,56%,0.1)] border border-[hsl(43,96%,56%,0.2)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{step}</p>
                  <p className="text-xs text-[hsl(220,15%,50%)]">{desc}</p>
                  <span className="absolute top-2 right-3 text-[hsl(220,15%,20%)] text-xs font-mono">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">{t("agenticPage.appLabel")}</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold">{t("agenticPage.useCasesTitle")}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6 hover:border-[hsl(43,96%,56%,0.3)] transition-colors">
                  <Icon className="w-6 h-6 text-[hsl(var(--gold))] mb-3" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-[hsl(220,15%,60%)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MSI */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">{t("agenticPage.whyMsiTitle")}</h2>
              <p className="text-[hsl(220,15%,60%)] max-w-xl mx-auto">{t("agenticPage.whyMsiSubtitle")}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {whyPoints.map((point, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-start gap-3 bg-[hsl(220,25%,9%)] border border-[hsl(220,20%,14%)] rounded-lg p-5">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--gold))] mt-0.5 shrink-0" />
                  <span className="text-sm text-[hsl(220,15%,75%)] leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220,25%,6%)] to-[hsl(220,30%,4%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                {t("agenticPage.ctaTitle")} <span className="text-[hsl(var(--gold))]">{t("agenticPage.ctaHighlight")}</span> {t("agenticPage.ctaSuffix")}
              </h2>
              <p className="text-base md:text-lg text-[hsl(220,15%,65%)] leading-relaxed max-w-2xl mx-auto mb-10">
                {t("agenticPage.ctaDesc")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(220,25%,6%)] font-semibold px-7 py-3.5 rounded-md hover:brightness-110 transition-all text-base">
                  <MessageCircle className="w-5 h-5" /> {t("agenticPage.exploreResearch")}
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[hsl(var(--gold),0.4)] text-[hsl(var(--gold))] font-semibold px-7 py-3.5 rounded-md hover:bg-[hsl(43,96%,56%,0.08)] transition-all text-base">
                  {t("agenticPage.bookConsultation")} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AgenticAIPage;
