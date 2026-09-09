import { useState } from "react";
import { useTranslation } from "react-i18next";
import { List } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MARQUEE_DURATION = 50;

export const engagements = [
  "IMDA Vibe Coding (~30 runs)",
  "NTUC LHub - OCBC (16 runs)",
  "MINDEF DIS - Strategic AI Compute and Optimisation",
  "NTUC LHub - MayBank (19 runs)",
  "NTUC LHub - UOB (6 runs)",
  "NTUC LHub - Sumitomo Mitsui Trust Bank (12 runs)",
  "Leveraging Generative AI for Executive Decision-Making - BOC, NUS AIDF - Zhejiang University",
  "TinkerTanker - DSTA Intermediate Agentic Engineering",
  "NTUC LHub - AIA (8 runs)",
  "AMD Regional Sales - Agentic Setups on Ryzen AI Laptops",
  "NTUC LHub - ICICI (6 runs)",
  "MINDEF - AWS Certification",
  "NTUC LHub - GE (3 runs)",
  "SMU Academy - Professional Cert in Machine Learning",
  "AISG-Daughters of Tomorrow (3 runs)",
  "AISG-United Women's Group (3 runs)",
  "AISG-Micron (1 run)",
  "Synpulse (1 run)",
  "Smarter Supply Chain Workflows (4 runs)",
];

const CurrentTrainingTicker = () => {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);

  const items = [...engagements, ...engagements];

  return (
    <section
      aria-label={t("ticker.label", "Currently training")}
      className="hero-premium-ticker"
    >
      <div className="hero-premium-ticker-inner">
        {/* Label badge */}
        <div className="hero-premium-ticker-badge">
          <span className="hero-premium-ticker-pulse" aria-hidden="true" />
          <span className="hero-premium-ticker-label">
            {t("ticker.label", "Live Training 2026")}
          </span>
        </div>

        {/* Marquee */}
        <div
          className="hero-premium-ticker-track"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="hero-premium-ticker-marquee"
            style={{
              animationDuration: `${MARQUEE_DURATION}s`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {items.map((item, i) => (
              <span key={i} className="hero-premium-ticker-item">
                <span className="hero-premium-ticker-text">{item}</span>
                <span className="hero-premium-ticker-dot" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* View all */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="hero-premium-ticker-action"
              aria-label={t("ticker.viewAll", "View all training")}
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("ticker.viewAll", "View all")}</span>
              <span className="sm:hidden">{engagements.length}</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">
                {t("ticker.dialogTitle", "Currently Training")}
              </DialogTitle>
            </DialogHeader>
            <ul className="mt-2 max-h-[60vh] overflow-y-auto divide-y divide-border">
              {engagements.map((item) => (
                <li key={item} className="flex items-start gap-3 py-2.5 text-sm text-foreground">
                  <span className="text-primary mt-0.5" aria-hidden="true">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CurrentTrainingTicker;
