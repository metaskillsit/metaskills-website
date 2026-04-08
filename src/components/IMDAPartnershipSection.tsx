import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import imdaLogo from "@/assets/logo-imda.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";

const IMDAPartnershipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-y border-border py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Logos */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <img
              src={imdaLogo}
              alt="Infocomm Media Development Authority (IMDA)"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <span className="text-2xl font-heading text-muted-foreground/40 font-light">×</span>
            <img
              src={tinkercademyLogo}
              alt="Tinkercademy"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
              Featured Partnership
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
              Vibe Coding for IMDA
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              Partnering with Tinkercademy to deliver Vibe Coding training across the entire
              Infocomm Media Development Authority — empowering public officers with AI-assisted
              development skills.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20the%20Vibe%20Coding%20programme%20with%20IMDA.%20Can%20you%20share%20more?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IMDAPartnershipSection;
