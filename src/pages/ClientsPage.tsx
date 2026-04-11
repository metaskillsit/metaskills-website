import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

import mindefLogo from "@/assets/clients/mindef.png";
import ocbcLogo from "@/assets/clients/ocbc.png";
import maybankLogo from "@/assets/clients/maybank.png";
import uobLogo from "@/assets/clients/uob.png";
import stLogLogo from "@/assets/clients/st-logistics.png";
import imdaLogo from "@/assets/clients/imda.png";
import nusLogo from "@/assets/clients/nus.png";
import masLogo from "@/assets/clients/mas.png";
import smuLogo from "@/assets/clients/smu.png";
import eyLogo from "@/assets/clients/ey.png";
import googleLogo from "@/assets/clients/google.png";
import panasonicLogo from "@/assets/clients/panasonic.png";
import smrtLogo from "@/assets/clients/smrt.png";
import necLogo from "@/assets/clients/nec.png";
import certisLogo from "@/assets/clients/certis.png";
import kkhLogo from "@/assets/clients/kkh.png";
import dstaLogo from "@/assets/clients/dsta.png";
import bcaLogo from "@/assets/clients/bca-academy.png";
import neaLogo from "@/assets/clients/nea.png";
import customsLogo from "@/assets/clients/singapore-customs.png";
import mddiLogo from "@/assets/clients/mddi.png";
import paLogo from "@/assets/clients/peoples-association.png";
import momLogo from "@/assets/clients/mom.png";
import mohLogo from "@/assets/clients/moh.png";

interface Client {
  name: string;
  logo: string;
  categoryKey: string;
}

const ClientsPage = () => {
  const { t } = useTranslation();

  const allClients: Client[] = [
    { name: "MINDEF", logo: mindefLogo, categoryKey: "catGovDefence" },
    { name: "OCBC Bank", logo: ocbcLogo, categoryKey: "catBanking" },
    { name: "Maybank", logo: maybankLogo, categoryKey: "catBanking" },
    { name: "UOB", logo: uobLogo, categoryKey: "catBanking" },
    { name: "ST Logistics", logo: stLogLogo, categoryKey: "catDefenceLog" },
    { name: "IMDA", logo: imdaLogo, categoryKey: "catGovDefence" },
    { name: "NUS", logo: nusLogo, categoryKey: "catUni" },
    { name: "MAS", logo: masLogo, categoryKey: "catGovDefence" },
    { name: "SMU", logo: smuLogo, categoryKey: "catUni" },
    { name: "Ernst & Young", logo: eyLogo, categoryKey: "catConsulting" },
    { name: "Google", logo: googleLogo, categoryKey: "catConsulting" },
    { name: "Panasonic Asia Pacific", logo: panasonicLogo, categoryKey: "catConsulting" },
    { name: "SMRT", logo: smrtLogo, categoryKey: "catTransport" },
    { name: "NEC Asia Pacific", logo: necLogo, categoryKey: "catConsulting" },
    { name: "Certis", logo: certisLogo, categoryKey: "catDefenceLog" },
    { name: "KK Women's & Children's Hospital", logo: kkhLogo, categoryKey: "catHealthcare" },
    { name: "DSTA", logo: dstaLogo, categoryKey: "catGovDefence" },
    { name: "BCA Academy", logo: bcaLogo, categoryKey: "catGovDefence" },
    { name: "NEA", logo: neaLogo, categoryKey: "catGovDefence" },
    { name: "Singapore Customs", logo: customsLogo, categoryKey: "catGovDefence" },
    { name: "MDDI", logo: mddiLogo, categoryKey: "catGovDefence" },
    { name: "People's Association", logo: paLogo, categoryKey: "catGovDefence" },
    { name: "Ministry of Manpower", logo: momLogo, categoryKey: "catGovDefence" },
    { name: "Ministry of Health", logo: mohLogo, categoryKey: "catHealthcare" },
  ];

  const additionalOrgs = [
    "Defence Psychology Department",
    "Golden Equator (Asia Finance)",
    "Penang State Administration",
    "Nanyang Optical",
    "Red House Seafood",
    "Tiong Seng Contractors",
    "Sim Kee Boon Institute for Financial Economics",
    "Agfunder",
    "SME Center",
    "Avente Consulting Club",
    "Nanyang Realty",
    t("clientsPage.additionalNda"),
  ];

  const categoryKeys = [...new Set(allClients.map((c) => c.categoryKey))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-5xl font-bold text-white">
              {t("clientsPage.heroTitle")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
              {t("clientsPage.heroSubtitle")}
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              {t("clientsPage.workedWith")}
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              {t("clientsPage.workedWithDesc")}
            </p>

            {categoryKeys.map((catKey) => (
              <div key={catKey} className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-border pb-2">
                  {t(`clientsPage.${catKey}`)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {allClients
                    .filter((c) => c.categoryKey === catKey)
                    .map((client, i) => (
                      <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex flex-col items-center gap-3 p-5 rounded-lg border border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                      >
                        <img src={client.logo} alt={client.name} loading="lazy" width={512} height={512} className="h-14 w-auto max-w-[120px] object-contain transition-all duration-500" />
                        <span className="text-xs text-muted-foreground text-center font-medium">{client.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-xl font-bold text-foreground text-center mb-8">
              {t("clientsPage.alsoWorkedWith")}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalOrgs.map((org) => (
                <span key={org} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark py-16 text-center">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              {t("clientsPage.ctaTitle")}
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              {t("clientsPage.ctaDesc")}
            </p>
            <a href="/admissions" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:brightness-110 transition-all">
              {t("nav.enquireNow")}
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ClientsPage;
