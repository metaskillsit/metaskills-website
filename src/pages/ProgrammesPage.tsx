import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PastClassesSection from "@/components/PastClassesSection";
import agenticImg from "@/assets/programmes-agentic.jpg";
import aiAutomationImg from "@/assets/programmes-aiautomation.jpg";
import datasciImg from "@/assets/programmes-datascience.jpg";
import fintechImg from "@/assets/programmes-fintech.jpg";
import cyberDefenceImg from "@/assets/programmes-cyberdefence.jpg";
import aiLeadershipImg from "@/assets/programmes-aileadership.jpg";
import cyberCertImg from "@/assets/programmes-cybercert.jpg";
import vibeCodingImg from "@/assets/programmes-vibecoding.jpg";
import cloudDevOpsImg from "@/assets/programmes-clouddevops.jpg";
import aiEducationImg from "@/assets/programmes-aieducation.jpg";

type Course = {
  name: string;
  slug: string;
  isExternal?: boolean;
  partnerNote?: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  courses: Course[];
};

const ProgrammesPage = () => {
  const { t } = useTranslation();
  const ct = (key: string) => t(`courses.${key}.title`);

  const programCategories: Category[] = [
    {
      id: "fintech",
      title: t("programmes.fintechTitle"),
      description: t("programmes.fintechDesc"),
      image: fintechImg,
      courses: [
        { name: ct("algoTradingL1"), slug: "algorithmic-trading-level-1" },
        { name: ct("algoTradingL2"), slug: "algorithmic-trading-level-2" },
        { name: ct("aiLiteracyFinance"), slug: "ai-literacy-for-finance-professionals" },
        { name: ct("aiStrategyGovernance"), slug: "ai-strategy-governance-ethical-leadership" },
        { name: ct("aiFluencyFinance"), slug: "ai-fluency-for-finance-professionals" },
      ],
    },
    {
      id: "ai-education",
      title: t("programmes.aiEduTitle"),
      description: t("programmes.aiEduDesc"),
      image: aiEducationImg,
      courses: [
        { name: ct("aiTrainingDesign"), slug: "ai-training-design-curriculum" },
        { name: ct("buildAiTutors"), slug: "build-ai-tutors-adaptive-learning" },
      ],
    },
    {
      id: "ai-leadership",
      title: t("programmes.aiLeadTitle"),
      description: t("programmes.aiLeadDesc"),
      image: aiLeadershipImg,
      courses: [
        { name: ct("aiStrategyLeaders"), slug: "ai-strategy-roadmap-leaders" },
        { name: ct("aiAccountability"), slug: "ai-accountability-when-ai-decides" },
        { name: ct("governingAiAgents"), slug: "governing-ai-agents-trust-boundaries" },
        { name: ct("aiWargaming"), slug: "ai-wargaming-test-decisions" },
      ],
    },
    {
      id: "agentic-engineering",
      title: t("programmes.agenticEngTitle"),
      description: t("programmes.agenticEngDesc"),
      image: agenticImg,
      courses: [
        { name: ct("agenticFoundations"), slug: "agentic-ai-foundations" },
        { name: ct("agenticUseCase"), slug: "agentic-ai-use-case" },
        { name: ct("agenticDeploy"), slug: "agentic-ai-deploy-secure-systems" },
        { name: ct("secureAgenticInfra"), slug: "secure-agentic-ai-infrastructure" },
      ],
    },
    {
      id: "ai-automation",
      title: t("programmes.aiAutoTitle"),
      description: t("programmes.aiAutoDesc"),
      image: aiAutomationImg,
      courses: [
        { name: ct("riseAiAgents"), slug: "rise-of-ai-agents-2026" },
        { name: ct("buildAiNoCode"), slug: "build-ai-workflows-no-code" },
        { name: ct("designAiPlainLang"), slug: "design-ai-automations-plain-language" },
        { name: ct("buildAiAssistant"), slug: "build-your-own-ai-assistant" },
      ],
    },
    {
      id: "vibe-coding",
      title: t("programmes.vibeDevTitle"),
      description: t("programmes.vibeDevDesc"),
      image: vibeCodingImg,
      courses: [
        { name: ct("vibeCodingDigitalBuilders"), slug: "vibe-coding-for-digital-builders" },
        { name: ct("buildOpTools"), slug: "build-operational-tools-ai-coding-agents" },
        { name: ct("gptKnowledgeBase"), slug: "gpt-your-organisation-knowledge-base" },
      ],
    },
    {
      id: "data-science",
      title: t("programmes.dataTitle"),
      description: t("programmes.dataDesc"),
      image: datasciImg,
      courses: [
        { name: ct("pythonDataAnalytics"), slug: "python-programming-for-data-analytics" },
        { name: ct("certifiedDataAnalyst"), slug: "certified-data-analyst" },
        { name: ct("certifiedDataScientist"), slug: "certified-data-scientist" },
      ],
    },
    {
      id: "mcc-foundations",
      title: t("programmes.mccFoundTitle"),
      description: t("programmes.mccFoundDesc"),
      image: cyberCertImg,
      courses: [
        { name: ct("cyberRolesThreats"), slug: "cybersecurity-roles-threats-pathways" },
        { name: ct("mccFoundation"), slug: "mcc-plus-cyber-defence-foundation" },
        { name: ct("mccSecurityOps"), slug: "mcc-plus-security-operations" },
        { name: ct("mccThreatHunting"), slug: "mcc-plus-threat-hunting-blue-team" },
      ],
    },
    {
      id: "mcc-offensive",
      title: t("programmes.mccOffTitle"),
      description: t("programmes.mccOffDesc"),
      image: cyberDefenceImg,
      courses: [
        { name: ct("mccOffensiveCyber"), slug: "mcc-plus-offensive-cyber-fundamentals" },
        { name: ct("mccDigitalForensics"), slug: "mcc-plus-digital-forensics" },
        { name: ct("mccAiSecurity"), slug: "mcc-plus-ai-security-autonomous-defence" },
      ],
    },
    {
      id: "cloud-ai-stack",
      title: t("programmes.cloudAiStackTitle"),
      description: t("programmes.cloudAiStackDesc"),
      image: cloudDevOpsImg,
      courses: [
        { name: ct("awsCloudDevOps"), slug: "aws-cloud-solutions-architecture-devops" },
        { name: t("programmes.aiStack1DayCourse"), slug: "/ai-stack-masterclasses", isExternal: true },
      ],
    },
  ];

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeId, setActiveId] = useState<string>(programCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const renderCourseLink = (course: Course, dark: boolean) => {
    const isAbsolute = course.isExternal && /^https?:\/\//.test(course.slug);
    const baseColor = dark ? "text-[#f5f3ee]" : "text-[#0d0d0d]";
    const subColor = dark ? "text-[#f5f3ee]/55" : "text-[#0d0d0d]/55";
    const inner = (
      <div className="group/link flex items-start justify-between gap-6 py-5 border-b border-current/15">
        <div className="flex-1 min-w-0">
          <span className={`font-display text-xl md:text-2xl leading-snug ${baseColor} prem-link`}>
            {course.name}
          </span>
          {course.partnerNote && (
            <span className={`block font-sans-prem text-xs mt-1 ${subColor}`}>
              {course.partnerNote}
            </span>
          )}
        </div>
        <span className="shrink-0 mt-2 text-[#c9a84c] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
          {isAbsolute ? <ExternalLink className="w-4 h-4" /> : <ArrowUpRight className="w-5 h-5" />}
        </span>
      </div>
    );
    if (isAbsolute) {
      return (
        <a href={course.slug} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      );
    }
    return (
      <Link to={course.isExternal ? course.slug : `/course/${course.slug}`} className="block">
        {inner}
      </Link>
    );
  };

  return (
    <div className="min-h-screen prem-paper font-sans-prem">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO */}
        <section className="prem-paper relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-16 md:pb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="prem-rule" />
              <span className="prem-eyebrow text-[#0d0d0d]/70">
                {String(programCategories.length).padStart(2, "0")} Tracks · Metaskills Institute
              </span>
            </div>
            <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.95] text-[#0d0d0d] max-w-5xl">
              {t("programmes.title")}
              <span className="text-[#c9a84c]">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#0d0d0d]/70 leading-relaxed">
              {t("programmes.subtitle")}
            </p>
          </div>
          {/* edge divider */}
          <div className="h-px bg-[#0d0d0d]/10" />
        </section>

        {/* STICKY TRACK BAR */}
        <div className="sticky top-[64px] md:top-[80px] z-30 prem-trackbar">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
              {programCategories.map((cat, idx) => {
                const active = activeId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleJump(cat.id)}
                    className={`group flex-shrink-0 flex items-center gap-2 px-3 py-2 transition-colors ${
                      active ? "text-[#0d0d0d]" : "text-[#0d0d0d]/45 hover:text-[#0d0d0d]/80"
                    }`}
                  >
                    <span className={`font-mono text-[10px] tracking-widest ${active ? "text-[#c9a84c]" : ""}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans-prem text-xs md:text-sm whitespace-nowrap">
                      {cat.title}
                    </span>
                    {active && <span className="inline-block w-6 h-px bg-[#c9a84c]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FULL-WIDTH ALTERNATING SECTIONS */}
        <div>
          {programCategories.map((cat, i) => {
            const reverse = i % 2 === 1;
            const dark = i % 2 === 1; // alternate ink / paper for rhythm
            return (
              <motion.section
                key={cat.id}
                id={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className={`scroll-mt-32 ${dark ? "prem-ink" : "prem-paper"}`}
              >
                <div className="max-w-[1500px] mx-auto px-0 md:px-0">
                  <div
                    className={`grid lg:grid-cols-2 min-h-[80vh] ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* IMAGE SIDE — full-bleed */}
                    <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[80vh] group">
                      <motion.img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        width={1600}
                        height={1200}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                      />
                      <div
                        className={`absolute inset-0 ${
                          dark
                            ? "bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent"
                            : "bg-gradient-to-t from-[#f5f3ee]/40 via-transparent to-transparent"
                        }`}
                      />
                      {/* Big numeral overlay */}
                      <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 leading-none select-none mix-blend-luminosity opacity-90">
                        <span className="prem-numeral block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 md:py-20">
                      <div className="w-full max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                          <span
                            className="inline-block h-px w-12"
                            style={{ background: "#c9a84c" }}
                          />
                          <span
                            className={`prem-eyebrow ${
                              dark ? "text-[#f5f3ee]/60" : "text-[#0d0d0d]/55"
                            }`}
                          >
                            Track {String(i + 1).padStart(2, "0")} ·{" "}
                            {cat.courses.length} Course{cat.courses.length > 1 ? "s" : ""}
                          </span>
                        </div>

                        <h2
                          className={`font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.02] mb-6 ${
                            dark ? "text-[#f5f3ee]" : "text-[#0d0d0d]"
                          }`}
                        >
                          {cat.title}
                        </h2>

                        <p
                          className={`text-base md:text-lg leading-relaxed mb-10 ${
                            dark ? "text-[#f5f3ee]/75" : "text-[#0d0d0d]/70"
                          }`}
                        >
                          {cat.description}
                        </p>

                        <div className={`pt-2 border-t ${dark ? "border-[#f5f3ee]/15" : "border-[#0d0d0d]/15"}`}>
                          <p
                            className={`prem-eyebrow pt-5 mb-1 ${
                              dark ? "text-[#f5f3ee]/55" : "text-[#0d0d0d]/55"
                            }`}
                          >
                            {t("programmes.viewCourses")}
                          </p>
                          <ul>
                            {cat.courses.map((course) => (
                              <li key={course.slug}>{renderCourseLink(course, dark)}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        <div className="prem-paper">
          <PastClassesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProgrammesPage;
