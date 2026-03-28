import { motion } from "framer-motion";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";

const partners = [
  {
    name: "Integrum Global",
    logo: integrumLogo,
    url: "https://integrum.global/",
  },
  {
    name: "JCube Institute",
    subtitle: "by j3Cube Pte Ltd",
    logo: jcubeLogo,
    url: "http://www.jcube-institute.com/",
  },
  {
    name: "Singapore-Vietnam Business Bridge",
    logo: svbbLogo,
    url: "https://svbb.sg/",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="bg-background border-t border-border">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Main Partners
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Collaborating with industry leaders to deliver world-class education across Singapore and ASEAN.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-3 group p-6 rounded-lg border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300"
            >
              <div className="h-16 md:h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
