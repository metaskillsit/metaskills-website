import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";

const PartnersPage = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: "Integrum Global",
      logo: integrumLogo,
      url: "https://integrum.global/",
      description: t("partnersPage.integrumDesc"),
    },
    {
      name: "JCube Institute",
      subtitle: t("partnersPage.jcubeSubtitle"),
      logo: jcubeLogo,
      url: "http://www.jcube-institute.com/",
      description: t("partnersPage.jcubeDesc"),
    },
    {
      name: "Singapore-Vietnam Business Bridge",
      logo: svbbLogo,
      url: "https://svbb.sg/",
      description: t("partnersPage.svbbDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("partnersPage.heroTitle")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              {t("partnersPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="space-y-12">
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
                className="grid md:grid-cols-4 gap-8 border-t border-border pt-10 group"
              >
                <div className="md:col-span-1 flex items-start justify-center">
                  <img src={partner.logo} alt={partner.name} className="h-20 w-auto object-contain transition-all duration-300" loading="lazy" />
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  {partner.subtitle && <p className="text-sm text-muted-foreground mb-2">{partner.subtitle}</p>}
                  <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default PartnersPage;
