import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import integrumLogo from "@/assets/partner-integrum.png";
import jcubeLogo from "@/assets/partner-jcube.jpg";
import svbbLogo from "@/assets/partner-svbb.png";

const partners = [
  {
    name: "Integrum Global",
    logo: integrumLogo,
    url: "https://integrum.global/",
    description: "An A.I. consulting and development outfit that delivers decision-making capabilities for complex use-cases. Specializes in developing prediction and decision engines using alternative data.",
  },
  {
    name: "JCube Institute",
    subtitle: "by j3Cube Pte Ltd",
    logo: jcubeLogo,
    url: "http://www.jcube-institute.com/",
    description: "A partner institute co-founded by Dr Ke Jinghao, offering certified Data Analyst and Data Scientist programmes with hands-on, project-based curriculum.",
  },
  {
    name: "Singapore-Vietnam Business Bridge",
    logo: svbbLogo,
    url: "https://svbb.sg/",
    description: "Facilitating cross-border collaboration between Singapore and Vietnam, enabling knowledge exchange and business networking across ASEAN.",
  },
];

const PartnersPage = () => {
  const { t } = useTranslation();

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
