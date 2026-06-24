import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
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
        {
          name: t("programmes.lhubAiLiteracy"),
          slug: "https://ntuclearninghub.com/web/guest/-/course/ai-literacy-for-finance-professionals",
          isExternal: true,
          partnerNote: t("programmes.viaLhub"),
        },
        {
          name: t("programmes.lhubAiStrategy"),
          slug: "https://ntuclearninghub.com/web/guest/-/course/ai-strategy-governance-and-ethical-leadership",
          isExternal: true,
          partnerNote: t("programmes.viaLhub"),
        },
        {
          name: t("programmes.lhubAiFluency"),
          slug: "https://ntuclearninghub.com/web/guest/-/course/ai-fluency-for-financial-professionals",
          isExternal: true,
          partnerNote: t("programmes.viaLhub"),
        },
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
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const renderCourseLink = (course: Course) => {
    const isAbsolute = course.isExternal && /^https?:\/\//.test(course.slug);
    const className =
      "flex items-start gap-2 text-sm md:text-base text-primary hover:text-accent transition-colors group/link py-1";
    const inner = (
      <>
        <span className="flex-1">
          {course.name}
          {course.partnerNote && (
            <span className="block text-xs text-muted-foreground font-normal mt-0.5">
              {course.partnerNote}
            </span>
          )}
        </span>
        {isAbsolute ? (
          <ExternalLink className="w-3.5 h-3.5 mt-1 opacity-60 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5 mt-1 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
        )}
      </>
    );
    if (isAbsolute) {
      return (
        <a href={course.slug} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      );
    }
    return (
      <Link
        to={course.isExternal ? course.slug : `/course/${course.slug}`}
        className={className}
      >
        {inner}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* Hero */}
        <section className="relative section-dark py-16 md:py-20 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("programmes.title")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              {t("programmes.subtitle")}
            </p>
          </div>
        </section>

        {/* Mobile sticky chips */}
        <div className="lg:hidden sticky top-[64px] z-30 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
            {programCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => handleJump(cat.id)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeId === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                {String(idx + 1).padStart(2, "0")} · {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Body: sticky rail + banners */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[220px_1fr] gap-8 py-8 md:py-12">
            {/* Sticky nav rail (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-[110px]">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                  {t("programmes.jumpToTrack")}
                </p>
                <ul className="space-y-1 border-l border-border">
                  {programCategories.map((cat, idx) => {
                    const active = activeId === cat.id;
                    return (
                      <li key={cat.id}>
                        <button
                          onClick={() => handleJump(cat.id)}
                          className={`w-full text-left text-sm pl-4 py-2 -ml-px border-l-2 transition-all ${
                            active
                              ? "border-primary text-primary font-semibold"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                          }`}
                        >
                          <span className="text-xs font-mono opacity-60 mr-2">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {cat.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Banner stack */}
            <div className="space-y-8 md:space-y-12">
              {programCategories.map((cat, i) => {
                const reverse = i % 2 === 1;
                return (
                  <motion.section
                    key={cat.id}
                    id={cat.id}
                    ref={(el) => {
                      sectionRefs.current[cat.id] = el;
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-28"
                  >
                    <div
                      className={`grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border bg-card shadow-sm ${
                        reverse ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image side */}
                      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] overflow-hidden group">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          width={1200}
                          height={900}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-${
                            reverse ? "l" : "r"
                          } from-transparent via-transparent to-background/40 hidden md:block`}
                        />
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-sm">
                          <span className="text-xs font-mono text-primary font-semibold">
                            {String(i + 1).padStart(2, "0")} / {String(programCategories.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content side */}
                      <div className="p-6 md:p-10 flex flex-col justify-center">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {cat.title}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                          {cat.description}
                        </p>
                        <div className="border-t border-border pt-4">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                            {t("programmes.viewCourses")} · {cat.courses.length}
                          </p>
                          <ul className="space-y-1">
                            {cat.courses.map((course) => (
                              <li key={course.slug}>{renderCourseLink(course)}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </div>
        </div>

        <PastClassesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ProgrammesPage;
