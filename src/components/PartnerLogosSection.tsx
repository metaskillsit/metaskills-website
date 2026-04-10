import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    <section className="bg-card border-t border-border py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10"
        >
          {t("partners.title")}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-[40px] md:h-[52px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[110px] md:max-w-[150px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
