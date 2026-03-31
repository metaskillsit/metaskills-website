import { motion } from "framer-motion";

const certifications = [
  { name: "AISG", logo: "https://aisingapore.org/wp-content/uploads/2023/01/AISG-Logo-Horizontal-Colour.png" },
  { name: "CompTIA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/CompTIA_logo.svg/1200px-CompTIA_logo.svg.png" },
  { name: "EC-Council", logo: "https://www.eccouncil.org/wp-content/uploads/2022/02/EC-Council-Logo.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
  { name: "SMU Academy", logo: "https://academy.smu.edu.sg/sites/academy.smu.edu.sg/files/SMU%20Academy_1.png" },
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
        <div className="flex animate-scroll-left gap-16 items-center w-max">
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex-shrink-0 h-10 md:h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-full w-auto max-w-[140px] object-contain"
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
