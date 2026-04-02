import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.png";
import awsLogo from "@/assets/logo-aws.png";
import appleLogo from "@/assets/logo-apple.png";
import googleLogo from "@/assets/logo-google.png";

const certifications = [
  { name: "EC-Council", logo: ecCouncilLogo, smaller: false },
  { name: "CompTIA", logo: comptiaLogo, smaller: false },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", smaller: true },
  { name: "AWS", logo: awsLogo, smaller: false },
  { name: "Apple", logo: appleLogo, smaller: true },
  { name: "Google", logo: googleLogo, smaller: true },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  // Double the logos for seamless loop
  const doubled = [...certifications, ...certifications];

  return (
    <section className="bg-card border-t border-border py-3 md:py-4 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6"
        >
          {t("certified.heading")}
        </motion.p>
      </div>
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-8 md:gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className={`flex-shrink-0 flex items-center justify-center ${cert.smaller ? 'h-[70px] md:h-[100px]' : 'h-[100px] md:h-[140px]'}`}
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className={`h-full w-auto object-contain ${cert.smaller ? 'max-w-[170px] md:max-w-[260px]' : 'max-w-[240px] md:max-w-[360px]'}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
