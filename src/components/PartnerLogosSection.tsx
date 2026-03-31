import { motion } from "framer-motion";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";

const partnerLogos = [
  { name: "AISG", logo: "https://aisingapore.org/wp-content/uploads/2023/01/AISG-Logo-Horizontal-Colour.png" },
  { name: "ISCA", logo: "https://www.isca.org.sg/Content/img/logo.png" },
  { name: "SMU Academy", logo: "https://academy.smu.edu.sg/sites/academy.smu.edu.sg/files/SMU%20Academy_1.png" },
  { name: "NUS AIDF", logo: "https://aidf.nus.edu.sg/wp-content/uploads/2023/03/NUS-AIDF-logo-dark.png" },
  { name: "Tinkercademy", logo: "https://framerusercontent.com/images/bMgq19Cvo9jSECKl8JEaUC60c.png" },
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
        <div className="flex animate-scroll-right gap-20 items-center w-max">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 h-12 md:h-14 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-[160px] object-contain"
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
