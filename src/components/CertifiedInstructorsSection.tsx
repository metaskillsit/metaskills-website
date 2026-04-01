import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.png";
import awsLogo from "@/assets/logo-aws.png";
import appleLogo from "@/assets/logo-apple.png";
import googleLogo from "@/assets/logo-google.png";

const certifications = [
  { name: "EC-Council", logo: ecCouncilLogo },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: awsLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Google", logo: googleLogo },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-t border-border py-3 md:py-4 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 md:mb-6"
        >
          {t("certified.heading")}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center justify-center h-[50px] md:h-[70px]"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-full w-auto max-w-[120px] md:max-w-[180px] object-contain"
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
