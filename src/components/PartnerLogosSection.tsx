import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, ArrowRight } from "lucide-react";

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
import imdaTrainingBg from "@/assets/imda-training-bg.jpg";

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
    <section className="bg-card border-t border-border py-6 md:py-8 overflow-hidden">
      {/* Featured Partnership Banner with Photo Background */}
      <div className="max-w-[1140px] mx-auto px-6 mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-lg"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imdaTrainingBg})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary z-10" />

          <div className="relative z-10 p-6 md:p-8">
            {/* Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {t("imda.badge")}
              </div>
            </div>

            {/* Tinkercademy logo centered */}
            <div className="flex items-center justify-center mb-5">
              <div className="bg-white/95 rounded-xl px-5 py-2.5 backdrop-blur-sm">
                <img
                  src={tinkercademyLogo}
                  alt="Tinkercademy"
                  className="h-8 md:h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Description with IMDA logo beside it */}
            <div className="flex items-center justify-center gap-5 md:gap-8 mb-5 max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-white/90 leading-relaxed text-center flex-1">
                {t("imda.description")}
              </p>
              <div className="bg-white/95 rounded-xl px-4 py-2 backdrop-blur-sm flex-shrink-0">
                <img
                  src={imdaLogo}
                  alt="Infocomm Media Development Authority (IMDA)"
                  className="h-10 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20the%20Vibe%20Coding%20programme%20with%20IMDA.%20Can%20you%20share%20more?"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
              >
                {t("imda.cta")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
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
