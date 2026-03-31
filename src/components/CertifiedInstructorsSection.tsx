import { motion } from "framer-motion";
import aisgLogo from "@/assets/logo-aisg.png";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.webp";
import smuAcademyLogo from "@/assets/logo-smu-academy.png";

const certifications = [
  { name: "AISG", logo: aisgLogo },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "EC-Council", logo: ecCouncilLogo },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB.61d334f1a1172c3f7f5140ddc773571c16e9d04c.png" },
  { name: "SMU Academy", logo: smuAcademyLogo },
];

const CertifiedInstructorsSection = () => {
  const doubled = [...certifications, ...certifications];

  return (
    <section className="bg-card border-t border-border py-10 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Curriculum designed and delivered by officially certified instructors
        </motion.p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left gap-20 items-center w-max px-10">
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex-shrink-0 w-[140px] h-[48px] flex items-center justify-center"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="max-h-[48px] max-w-[140px] w-auto h-auto object-contain"
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
