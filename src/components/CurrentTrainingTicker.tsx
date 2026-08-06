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

const MARQUEE_DURATION = 45;

const CurrentTrainingTicker = () => {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);

  const engagements = [
    "IMDA Vibe Coding (~30 runs)",
    "NTUC LHub - OCBC (16 runs)",
    "MINDEF DIS - Strategic AI Compute and Optimisation",
    "NTUC LHub - MayBank (19 runs)",
    "NTUC LHub - UOB (6 runs)",
    "BOC Senior Management - Leveraging Generative AI for Executive Decision-Making",
    "TinkerTanker - DSTA Intermediate Agentic Engineering",
    "NTUC LHub - AIA (8 runs)",
    "AMD Regional Sales - Agentic Setups on Ryzen AI Laptops",
    "NTUC LHub - ICICI (6 runs)",
    "MINDEF - AWS Certification",
    "NTUC LHub - GE (3 runs)",
    "SMU - Professional Cert in Machine Learning",
    "AISG-Daughters of Tomorrow (3 runs)",
    "AISG-United Women's Group (3 runs)",
    "AISG-Micron (1 run)",
    "Synpulse (1 run)",
    "Smarter Supply Chain Workflows (4 runs)",
    "NUS AIDF-Zhejiang University CEO/Executive Training (multiple runs)",
  ];

  const items = [...engagements, ...engagements];

  return (
    <section
      aria-label={t("ticker.label", "Currently training")}
      className="bg-foreground text-background border-y border-primary/30 overflow-hidden"
    >
      <div className="flex items-stretch">
        {/* Label badge */}
        <div className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-semibold text-xs uppercase tracking-widest whitespace-nowrap shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(142_76%_42%)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(142_76%_42%)] ring-1 ring-[hsl(142_76%_25%)]"></span>
          </span>
          {t("ticker.label", "Live Training 2026")}
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
              animationDuration: `${MARQUEE_DURATION}s`,
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

        {/* View all */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 sm:px-4 shrink-0 border-l border-primary/30 text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
