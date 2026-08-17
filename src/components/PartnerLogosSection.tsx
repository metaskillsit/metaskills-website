import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";

import aisgLogo from "@/assets/logo-aisg.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import integrumLogo from "@/assets/partner-integrum.png";
import ntucLhubLogo from "@/assets/logo-ntuc-learning-hub.jpg";
import svbbLogo from "@/assets/partner-svbb.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";
import iscaLogo from "@/assets/logo-isca.png";
import nusAidfLogo from "@/assets/logo-nus-aidf.png";
import amdLogo from "@/assets/logo-amd.svg";
import comptiaLogo from "@/assets/logo-comptia.jpg";

const partnerLogos: { name: string; logo: string; size: 1 | 2 | 3 }[] = [
  { name: "Integrum Global", logo: integrumLogo, size: 3 },
  { name: "SMU Academy", logo: smuAcademyLogo, size: 3 },
  { name: "NUS AIDF", logo: nusAidfLogo, size: 3 },
  { name: "AMD", logo: amdLogo, size: 1 },
  { name: "CompTIA Authorized Partner", logo: comptiaLogo, size: 3 },
  { name: "ISCA", logo: iscaLogo, size: 3 },
  { name: "AISG", logo: aisgLogo, size: 3 },
  { name: "NTUC LearningHub", logo: ntucLhubLogo, size: 2 },
  { name: "Tinkercademy", logo: tinkercademyLogo, size: 2 },
  { name: "Singapore Vietnam Business Bridge", logo: svbbLogo, size: 3 },
];

const cellClasses: Record<number, string> = {
  1: "min-h-[104px] md:min-h-[120px]",
  2: "min-h-[140px] md:min-h-[180px]",
  3: "min-h-[200px] md:min-h-[260px]",
};

const logoClasses: Record<number, string> = {
  1: "h-10 md:h-12 max-w-[140px]",
  2: "h-20 md:h-24 max-w-[280px]",
  3: "h-[120px] md:h-[144px] max-w-[420px]",
};


const PartnerLogosSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-t border-border py-4 md:py-6">
      <div className="max-w-[1140px] mx-auto px-6 mb-3 md:mb-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent"
        >
          {t("partners.title")}
        </motion.p>
      </div>
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              title={partner.name}
              className={`group flex items-center justify-center bg-card px-5 md:px-6 transition-colors duration-300 hover:bg-muted/40 ${cellClasses[partner.size]}`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`w-full object-contain opacity-80 grayscale-[35%] transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${logoClasses[partner.size]}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
      <div className="max-w-[1140px] mx-auto px-6 mt-4 md:mt-6">
        <Separator />
      </div>
    </section>
  );
};

export default PartnerLogosSection;
