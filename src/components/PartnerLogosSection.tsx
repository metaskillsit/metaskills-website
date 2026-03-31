import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aisgLogo from "@/assets/logo-aisg.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";
import iscaLogo from "@/assets/logo-isca.png";
import safraLogo from "@/assets/logo-safra.jpg";
import nusAidfLogo from "@/assets/logo-nus-aidf.png";

const partnerLogos = [
  { name: "AISG", logo: aisgLogo, large: true },
  { name: "ISCA", logo: iscaLogo, large: true },
  { name: "SMU Academy", logo: smuAcademyLogo, large: true },
  { name: "NUS AIDF", logo: nusAidfLogo, large: true },
  { name: "Tinkercademy", logo: tinkercademyLogo },
  { name: "JCube Institute", logo: jcubeLogo },
  { name: "Integrum Global", logo: integrumLogo },
  { name: "Singapore Vietnam Business Bridge", logo: svbbLogo },
  { name: "SAFRA", logo: safraLogo },
];

const PartnerLogosSection = () => {
  const { t } = useTranslation();
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-card border-t border-border py-12 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {t("partners.title")}
          </h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-right gap-20 items-center w-max px-10">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 w-[260px] h-[100px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[100px] max-w-[260px] w-auto h-auto object-contain"
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
