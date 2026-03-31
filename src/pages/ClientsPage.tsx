import { motion } from "framer-motion";
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
import safraLogo from "@/assets/clients/safra.png";
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
  category: string;
}

const featuredClients: Client[] = [
  { name: "MINDEF", logo: mindefLogo, category: "Government & Defence" },
  { name: "OCBC Bank", logo: ocbcLogo, category: "Banking & Finance" },
  { name: "Maybank", logo: maybankLogo, category: "Banking & Finance" },
  { name: "UOB", logo: uobLogo, category: "Banking & Finance" },
  { name: "ST Logistics", logo: stLogLogo, category: "Defence & Logistics" },
  { name: "IMDA", logo: imdaLogo, category: "Government & Defence" },
  { name: "NUS", logo: nusLogo, category: "Universities & Education" },
];

const allClients: Client[] = [
  ...featuredClients,
  { name: "MAS", logo: masLogo, category: "Government & Defence" },
  { name: "SMU", logo: smuLogo, category: "Universities & Education" },
  { name: "Ernst & Young", logo: eyLogo, category: "Consulting & Technology" },
  { name: "Google", logo: googleLogo, category: "Consulting & Technology" },
  { name: "Panasonic Asia Pacific", logo: panasonicLogo, category: "Consulting & Technology" },
  { name: "SMRT", logo: smrtLogo, category: "Transport & Infrastructure" },
  { name: "NEC Asia Pacific", logo: necLogo, category: "Consulting & Technology" },
  { name: "Certis", logo: certisLogo, category: "Defence & Logistics" },
  { name: "SAFRA", logo: safraLogo, category: "Government & Defence" },
  { name: "KK Women's & Children's Hospital", logo: kkhLogo, category: "Healthcare" },
  { name: "DSTA", logo: dstaLogo, category: "Government & Defence" },
  { name: "BCA Academy", logo: bcaLogo, category: "Government & Defence" },
  { name: "NEA", logo: neaLogo, category: "Government & Defence" },
  { name: "Singapore Customs", logo: customsLogo, category: "Government & Defence" },
  { name: "MDDI", logo: mddiLogo, category: "Government & Defence" },
  { name: "People's Association", logo: paLogo, category: "Government & Defence" },
  { name: "Ministry of Manpower", logo: momLogo, category: "Government & Defence" },
  { name: "Ministry of Health", logo: mohLogo, category: "Healthcare" },
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
  "… and many other organisations under NDA",
];

const categories = [...new Set(allClients.map((c) => c.category))];

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero */}
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-3xl md:text-5xl font-bold text-white"
            >
              Trusted by Leading Organisations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/70 mt-4 text-lg max-w-2xl mx-auto"
            >
              From government agencies to multinational corporations, our faculty
              and consultants have trained and partnered with organisations
              across Singapore and the region.
            </motion.p>
          </div>
        </section>


        {/* Full Client Grid by Category */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Organisations We've Worked With
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Training, consulting, product development, and masterclasses
              delivered across all organisational levels.
            </p>

            {categories.map((cat) => (
              <div key={cat} className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 border-b border-border pb-2">
                  {cat}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {allClients
                    .filter((c) => c.category === cat)
                    .map((client, i) => (
                      <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex flex-col items-center gap-3 p-5 rounded-lg border border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          loading="lazy"
                          width={512}
                          height={512}
                          className="h-14 w-auto max-w-[120px] object-contain transition-all duration-500"
                        />
                        <span className="text-xs text-muted-foreground text-center font-medium">
                          {client.name}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Organisations — Text List */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-xl font-bold text-foreground text-center mb-8">
              We've Also Worked With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalOrgs.map((org) => (
                <span
                  key={org}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark py-16 text-center">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Growing Client Network
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Ready to upskill your team? Contact us for customised training
              solutions tailored to your organisation's needs.
            </p>
            <a
              href="/admissions"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:brightness-110 transition-all"
            >
              Enquire Now
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ClientsPage;
