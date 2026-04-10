import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";

import aisgLogo from "@/assets/logo-aisg.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";
import iscaLogo from "@/assets/logo-isca.png";
import lxCopilotLogo from "@/assets/partner-lxcopilot.png";
import nusAidfLogo from "@/assets/logo-nus-aidf.png";

const partnerLogos = [
  { name: "AISG", logo: aisgLogo },
  { name: "SMU Academy", logo: smuAcademyLogo },
  { name: "NUS AIDF", logo: nusAidfLogo },
  { name: "ISCA", logo: iscaLogo },
  { name: "Integrum Global", logo: integrumLogo },
  { name: "JCube Institute", logo: jcubeLogo },
  { name: "Tinkercademy", logo: tinkercademyLogo },
  { name: "Singapore Vietnam Business Bridge", logo: svbbLogo },
  { name: "LX Copilot", logo: lxCopilotLogo },
];

const PartnerLogosSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-t border-border py-4 md:py-6">
      <div className="max-w-[1140px] mx-auto px-6 mb-2 md:mb-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground"
        >
          {t("partners.title")}
        </motion.p>
      </div>
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-nowrap items-center justify-center gap-4 md:gap-6">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 flex items-center justify-center h-[36px] md:h-[48px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[90px] md:max-w-[120px] object-contain"
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
