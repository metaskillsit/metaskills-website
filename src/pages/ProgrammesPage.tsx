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
  comingSoon?: boolean;
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
        { name: ct("aiLiteracyFinance"), slug: "ai-literacy-for-finance-professionals" },
        { name: ct("aiFluencyFinance"), slug: "ai-fluency-for-finance-professionals" },
        { name: ct("aiStrategyGovernance"), slug: "ai-strategy-governance-ethical-leadership" },
        { name: ct("rmEngagement"), slug: "rm-client-engagement-strategies" },
        { name: ct("rmNeedsAnalysis"), slug: "rm-needs-analysis-portfolio-management" },
        { name: ct("rmExperienceRetention"), slug: "rm-client-experience-retention" },
        { name: ct("algoTradingL1"), slug: "algorithmic-trading-level-1" },
        { name: ct("algoTradingL2"), slug: "algorithmic-trading-level-2" },
        { name: "The AI-Powered Investor Series", slug: "#", comingSoon: true },
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
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const renderCourseLink = (course: Course, idx: number) => {
    const isAbsolute = course.isExternal && /^https?:\/\//.test(course.slug);
    const isComing = course.comingSoon;
    const inner = (
      <div className="group/link flex items-start gap-3 py-2 border-b border-border/70 last:border-b-0">
        <span className={`font-mono text-[10px] tracking-widest pt-[5px] w-6 flex-shrink-0 transition-colors ${isComing ? "text-muted-foreground/60" : "text-accent"}`}>
          {String(idx + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <span
            className={
              isComing
                ? "block font-body text-[15px] md:text-base font-medium leading-snug text-muted-foreground"
                : "block font-body text-[15px] md:text-base font-medium leading-snug text-foreground/85 underline decoration-accent/30 decoration-1 underline-offset-[6px] group-hover/link:text-accent group-hover/link:decoration-accent transition-colors"
            }
          >
            {course.name}
            {isComing && (
              <span className="ml-2 align-middle inline-block font-mono text-[9px] tracking-widest uppercase text-accent border border-accent/40 rounded-sm px-1.5 py-[1px]">
                Upcoming
              </span>
            )}
          </span>
          {course.partnerNote && (
            <span className="block text-xs mt-0.5 text-muted-foreground">
              {course.partnerNote}
            </span>
          )}
        </div>
        {!isComing && (
          <span className="shrink-0 mt-1 text-accent transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
            {isAbsolute ? <ExternalLink className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
          </span>
        )}
      </div>
    );
    if (isComing) {
      return <div className="block cursor-default">{inner}</div>;
    }
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO — matches site banner pattern */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-10 bg-accent" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-white/70 font-medium">
                {String(programCategories.length).padStart(2, "0")} Tracks · Metaskills Institute
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight">
              {t("programmes.title")}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base md:text-lg text-white/75 leading-relaxed">
              {t("programmes.subtitle")}
            </p>
          </div>
        </section>

        {/* STICKY TRACK BAR */}
        <div className="sticky top-[64px] md:top-[80px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-[1140px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-1 py-2.5">
              {programCategories.map((cat, idx) => {
                const active = activeId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleJump(cat.id)}
                    title={cat.title}
                    className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-left transition-colors min-w-0 ${
                      active
                        ? "text-foreground bg-secondary/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className={`font-mono text-[10px] tracking-widest flex-shrink-0 ${active ? "text-accent" : "text-muted-foreground/70"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-xs md:text-[13px] font-medium leading-tight truncate">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* TRACK SECTIONS — compact editorial, alternating image side */}
        <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
          {programCategories.map((cat, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.section
                key={cat.id}
                id={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                className="scroll-mt-36"
              >
                <div className={`grid lg:grid-cols-12 gap-8 md:gap-12 ${cat.id === "fintech" ? "items-stretch" : "items-start"}`}>
                  {/* IMAGE */}
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <div className={`relative overflow-hidden rounded-2xl group shadow-lg ring-1 ring-border/40 ${cat.id === "fintech" ? "aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[560px]" : "aspect-[4/3]"}`}>
                      <motion.img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))]/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-[10px] tracking-widest text-white/85 bg-[hsl(var(--hero-overlay))]/70 backdrop-blur-sm px-2 py-1 rounded-sm">
                          TRACK {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block h-px w-8 bg-accent" />
                      <span className="font-body text-[11px] tracking-[0.28em] uppercase text-muted-foreground font-medium">
                        {String(cat.courses.length).padStart(2, "0")} Course{cat.courses.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl lg:text-[34px] font-bold text-foreground leading-tight tracking-tight mb-3">
                      {cat.title}
                    </h2>

                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-5 max-w-xl">
                      {cat.description}
                    </p>

                    <ul className="border-t border-border">
                      {cat.courses.map((course, ci) => (
                        <li key={course.slug}>{renderCourseLink(course, ci)}</li>
                      ))}

                    </ul>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        <PastClassesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ProgrammesPage;
