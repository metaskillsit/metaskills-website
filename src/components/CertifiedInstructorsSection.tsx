import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aisgLogo from "@/assets/logo-aisg.png";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.png";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";
import awsLogo from "@/assets/logo-aws.png";

const certifications = [
  { name: "AISG", logo: aisgLogo, large: true },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "EC-Council", logo: ecCouncilLogo, large: true },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: awsLogo },
  { name: "SMU Academy", logo: smuAcademyLogo, large: true },
  { name: "Tinkercademy", logo: tinkercademyLogo },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();
  const doubled = [...certifications, ...certifications];

  return (
    <section className="bg-card border-t border-border py-6 md:py-12 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-4 md:mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          {t("certified.heading")}
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left gap-10 md:gap-20 items-center w-max px-6 md:px-10">
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className={`flex-shrink-0 flex items-center justify-center ${
                (cert as any).large ? "w-[180px] h-[70px] md:w-[320px] md:h-[120px]" : "w-[140px] h-[56px] md:w-[260px] md:h-[100px]"
              }`}
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className={`w-auto h-auto object-contain ${
                  (cert as any).large ? "max-h-[120px] max-w-[320px]" : "max-h-[100px] max-w-[260px]"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
