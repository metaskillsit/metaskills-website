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
    <section className="bg-card border-t border-border py-6 md:py-10">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {t("partners.title")}
          </h2>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {partnerLogos.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-[90px] md:h-[130px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[200px] md:max-w-[300px] object-contain"
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
