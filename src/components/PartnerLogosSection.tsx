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
import comptiaAsset from "@/assets/logo-comptia.jpg.asset.json";

const partnerLogos: { name: string; logo: string }[] = [
  { name: "Integrum Global", logo: integrumLogo },
  { name: "SMU Academy", logo: smuAcademyLogo },
  { name: "NUS AIDF", logo: nusAidfLogo },
  { name: "AMD", logo: amdLogo },
  { name: "CompTIA Authorized Partner", logo: comptiaAsset.url },
  { name: "ISCA", logo: iscaLogo },
  { name: "AISG", logo: aisgLogo },
  { name: "NTUC LearningHub", logo: ntucLhubLogo },
  { name: "Tinkercademy", logo: tinkercademyLogo },
  { name: "Singapore Vietnam Business Bridge", logo: svbbLogo },
];


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
              className="group flex items-center justify-center bg-card h-[104px] md:h-[120px] px-5 md:px-6 transition-colors duration-300 hover:bg-muted/40"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 w-full max-w-[140px] object-contain opacity-80 grayscale-[35%] transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
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
