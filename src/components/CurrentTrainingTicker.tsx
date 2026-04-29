import { useTranslation } from "react-i18next";
import { Radio } from "lucide-react";

const CurrentTrainingTicker = () => {
  const { t } = useTranslation();

  const engagements = [
    "Vibe Coding for Whole of IMDA — with TinkerTanker",
    "AI For Good: Train the Trainers — Daughters of Tomorrow & United Women's Group, with AISG",
    "AI Literacy for Financial Institutions — OCBC, Maybank, DBS & AIA, with NTUC LearningHub",
    "MINDEF Agentic AI Training",
  ];

  // duplicate items for seamless marquee
  const items = [...engagements, ...engagements];

  return (
    <section
      aria-label={t("ticker.label", "Currently training")}
      className="bg-foreground text-background border-y border-primary/30 overflow-hidden"
    >
      <div className="flex items-stretch">
        {/* Label badge */}
        <div className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-semibold text-xs uppercase tracking-widest whitespace-nowrap shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
          </span>
          <Radio className="w-3.5 h-3.5" aria-hidden="true" />
          {t("ticker.label", "Now Training")}
        </div>

        {/* Marquee */}
        <div className="relative flex-1 overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {items.map((item, i) => (
              <span key={i} className="flex items-center text-sm md:text-[15px]">
                <span className="mx-6 text-background/90">{item}</span>
                <span className="text-primary" aria-hidden="true">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTrainingTicker;
