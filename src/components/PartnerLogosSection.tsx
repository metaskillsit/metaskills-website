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
    <section className="border-t border-border py-6 md:py-8 overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8"
        >
          {t("partners.title")}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partnerLogos.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center h-12 md:h-16"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
