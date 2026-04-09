import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

import aisgLogo from "@/assets/logo-aisg.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";
import iscaLogo from "@/assets/logo-isca.png";
import lxCopilotLogo from "@/assets/partner-lxcopilot.png";
import nusAidfLogo from "@/assets/logo-nus-aidf.png";
import imdaLogo from "@/assets/logo-imda.png";

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

const doubled = [...partnerLogos, ...partnerLogos];

const PartnerLogosSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-t border-border py-3 md:py-4 overflow-hidden">
      {/* Featured Partnership Banner */}
      <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 border-y border-primary/20 py-3 md:py-4 mb-4">
        <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-center gap-3 md:gap-6 flex-wrap">
          <div className="inline-flex items-center gap-1.5 text-primary text-[10px] md:text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
            {t("imda.badge")}
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <img src={tinkercademyLogo} alt="Tinkercademy" className="h-6 md:h-8 w-auto object-contain" loading="lazy" />
            <span className="text-muted-foreground text-xs">×</span>
            <img src={imdaLogo} alt="IMDA" className="h-8 md:h-10 w-auto object-contain" loading="lazy" />
          </div>
          <p className="text-xs text-muted-foreground max-w-sm text-center md:text-left hidden md:block">
            {t("imda.description")}
          </p>
          <a
            href="https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20the%20Vibe%20Coding%20programme%20with%20IMDA.%20Can%20you%20share%20more?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-md font-semibold text-xs hover:opacity-90 transition-opacity"
          >
            {t("imda.cta")}
          </a>
        </div>
      </div>

      {/* Partnering Institutions heading + scrolling logos */}
      <div className="max-w-[1140px] mx-auto px-6 mb-3 md:mb-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground"
        >
          {t("partners.title")}
        </motion.p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-8 md:gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-[70px] md:h-[100px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[160px] md:max-w-[240px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
