import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Bot,
  MessageSquare,
  Video,
  Music,
  Shield,
  ArrowRight,
  FlaskConical,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const LiveLabsPage = () => {
  const { t } = useTranslation();

  const labs = [
    {
      category: t("liveLabs.textCodeLab"),
      icon: MessageSquare,
      items: [
        {
          title: t("liveLabs.llmPlayground.title"),
          desc: t("liveLabs.llmPlayground.desc"),
          href: "/llm-playground",
          icon: Bot,
        },
      ],
    },
    {
      category: t("liveLabs.mediaLab"),
      icon: Video,
      items: [
        {
          title: t("liveLabs.aiMediaStudio.title"),
          desc: t("liveLabs.aiMediaStudio.desc"),
          href: "/ai-video-studio",
          icon: Video,
        },
        {
          title: t("liveLabs.aiSongStudio.title"),
          desc: t("liveLabs.aiSongStudio.desc"),
          href: "/ai-song-studio",
          icon: Music,
        },
      ],
    },
    {
      category: t("liveLabs.modelHub"),
      icon: Boxes,
      items: [
        {
          title: t("liveLabs.huggingFaceSpaces.title"),
          desc: t("liveLabs.huggingFaceSpaces.desc"),
          href: "/huggingface-spaces",
          icon: Boxes,
        },
      ],
    },
  ];


  const governance = {
    title: t("liveLabs.agenticGovernance.title"),
    desc: t("liveLabs.agenticGovernance.desc"),
    href: "/agentic-ai-governance",
    icon: Shield,
  };

  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-[hsl(220,15%,95%)]">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(43,96%,56%,0.12),_transparent_50%)]" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-6">
                <FlaskConical className="w-3.5 h-3.5" /> {t("liveLabs.badge")}
              </div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]">
                {t("liveLabs.title")}
              </h1>
              <p className="text-[hsl(220,15%,55%)] text-base md:text-lg max-w-xl mb-10">
                {t("liveLabs.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* LAB CATEGORIES */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1140px] mx-auto px-6 space-y-20">
            {labs.map((lab) => (
              <div key={lab.category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(43,96%,56%,0.12)] border border-[hsl(43,96%,56%,0.25)] flex items-center justify-center text-[hsl(var(--gold))]">
                    <lab.icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                    {lab.category}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {lab.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="group relative rounded-xl border border-[hsl(220,20%,20%)] bg-[hsl(220,25%,10%)] p-6 hover:border-[hsl(43,96%,56%,0.4)] hover:bg-[hsl(220,25%,12%)] transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[hsl(43,96%,56%,0.12)] flex items-center justify-center text-[hsl(var(--gold))]">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--gold))]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse" />
                          {t("liveLabs.liveLab")}
                        </span>
                      </div>
                      <h3 className="font-sans-prem text-xl font-semibold mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[hsl(220,15%,55%)] text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))]">
                        {t("liveLabs.openLab")}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* GOVERNANCE CARD */}
            <div className="relative rounded-2xl border border-[hsl(220,20%,20%)] bg-gradient-to-br from-[hsl(220,25%,12%)] to-[hsl(220,25%,8%)] p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(43,96%,56%,0.06)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="w-14 h-14 rounded-xl bg-[hsl(43,96%,56%,0.12)] border border-[hsl(43,96%,56%,0.25)] flex items-center justify-center text-[hsl(var(--gold))] shrink-0">
                  <Shield className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                    {governance.title}
                  </h2>
                  <p className="text-[hsl(220,15%,55%)] max-w-2xl">
                    {governance.desc}
                  </p>
                </div>
                <Link
                  to={governance.href}
                  className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(220,25%,6%)] font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all shrink-0"
                >
                  {t("liveLabs.openLab")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default LiveLabsPage;
