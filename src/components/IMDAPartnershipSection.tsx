import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import imdaLogo from "@/assets/logo-imda.png";
import tinkercademyLogo from "@/assets/logo-tinkercademy.png";

const IMDAPartnershipSection = () => {
  return (
    <section className="bg-muted/30 py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-10 shadow-lg"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="flex flex-col items-center text-center gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Partnership
            </div>

            {/* Logos side by side */}
            <div className="flex items-center justify-center gap-6 md:gap-10">
              <img
                src={imdaLogo}
                alt="Infocomm Media Development Authority (IMDA)"
                className="h-14 md:h-[72px] w-auto object-contain"
              />
              <span className="text-2xl md:text-3xl font-heading text-muted-foreground/30 font-light select-none">×</span>
              <img
                src={tinkercademyLogo}
                alt="Tinkercademy"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>

            {/* Title & description */}
            <div className="max-w-xl">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                Vibe Coding for IMDA
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Metaskills Institute partners with Tinkercademy to deliver <strong className="text-foreground">Vibe Coding</strong> training
                across the entire Infocomm Media Development Authority — equipping public officers
                with AI-assisted development capabilities.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20the%20Vibe%20Coding%20programme%20with%20IMDA.%20Can%20you%20share%20more?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Enquire About This Programme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IMDAPartnershipSection;
