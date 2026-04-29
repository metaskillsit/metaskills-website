import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Radio, Minus, Plus, Pause, Play } from "lucide-react";

const SPEED_PRESETS = [
  { label: "Slow", duration: 75 },
  { label: "Normal", duration: 45 },
  { label: "Fast", duration: 25 },
];

const CurrentTrainingTicker = () => {
  const { t } = useTranslation();
  const [speedIdx, setSpeedIdx] = useState(2);
  const [paused, setPaused] = useState(false);

  const engagements = [
    "Vibe Coding for Whole of IMDA — with TinkerTanker",
    "AI For Good: Train the Trainers — Daughters of Tomorrow & United Women's Group, with AISG",
    "AI Literacy for Financial Institutions — OCBC, Maybank, DBS & AIA, with NTUC LearningHub",
    "MINDEF Agentic AI Training",
  ];

  const items = [...engagements, ...engagements];
  const current = SPEED_PRESETS[speedIdx];

  const slower = () => setSpeedIdx((i) => Math.max(0, i - 1));
  const faster = () => setSpeedIdx((i) => Math.min(SPEED_PRESETS.length - 1, i + 1));

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
        <div
          className="relative flex-1 overflow-hidden py-3 group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{
              animationDuration: `${current.duration}s`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {items.map((item, i) => (
              <span key={i} className="flex items-center text-sm md:text-[15px]">
                <span className="mx-6 text-background/90">{item}</span>
                <span className="text-primary" aria-hidden="true">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Speed controls */}
        <div className="hidden md:flex items-center gap-1 px-3 border-l border-background/10 shrink-0">
          <button
            type="button"
            onClick={slower}
            disabled={speedIdx === 0}
            aria-label="Slower"
            className="p-1.5 rounded hover:bg-background/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] uppercase tracking-wider text-background/70 w-12 text-center">
            {current.label}
          </span>
          <button
            type="button"
            onClick={faster}
            disabled={speedIdx === SPEED_PRESETS.length - 1}
            aria-label="Faster"
            className="p-1.5 rounded hover:bg-background/10 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="p-1.5 rounded hover:bg-background/10 transition ml-1"
          >
            {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentTrainingTicker;
