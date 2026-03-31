import { motion } from "framer-motion";
import aisgLogo from "@/assets/logo-aisg.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";

const partnerLogos = [
  { name: "AISG", logo: aisgLogo },
  { name: "ISCA", logo: "https://isca.org.sg/Content/img/logo.png" },
  { name: "SMU Academy", logo: smuAcademyLogo },
  { name: "NUS AIDF", logo: "https://aidf.nus.edu.sg/wp-content/uploads/2023/03/NUS-AIDF-logo-dark.png" },
  { name: "Tinkercademy", logo: tinkercademyLogo },
  { name: "JCube Institute", logo: jcubeLogo },
  { name: "Integrum Global", logo: integrumLogo },
  { name: "Singapore Vietnam Business Bridge", logo: svbbLogo },
];

const PartnerLogosSection = () => {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-muted border-t border-border py-12 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Partnering Institutions
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Collaborating with industry leaders to deliver world-class education across Singapore and ASEAN.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-right gap-20 items-center w-max px-10">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 w-[160px] h-[52px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[52px] max-w-[160px] w-auto h-auto object-contain"
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
