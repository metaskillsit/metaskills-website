import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mindefLogo from "@/assets/clients/mindef.png";
import unitedWomenLogo from "@/assets/clients/united-women-singapore.png";
import daughtersOfTomorrowLogo from "@/assets/clients/daughters-of-tomorrow.png";

interface ClientLogo {
  name: string;
  src: string;
}

const pastClientsBySlug: Record<string, ClientLogo[]> = {
  "ai-training-design-curriculum": [
    { name: "MINDEF", src: mindefLogo },
    { name: "United Women Singapore", src: unitedWomenLogo },
    { name: "Daughters Of Tomorrow", src: daughtersOfTomorrowLogo },
  ],
};

interface CoursePastClientsProps {
  slug: string;
}

const CoursePastClients = ({ slug }: CoursePastClientsProps) => {
  const { t } = useTranslation();
  const clients = pastClientsBySlug[slug];
  if (!clients || clients.length === 0) return null;

  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            {t("coursePage.pastClientsEyebrow", { defaultValue: "Past Clients" })}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {t("coursePage.pastClientsHeading", {
              defaultValue: "Trusted by Leading Organisations",
            })}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            {t("coursePage.pastClientsSubheading", {
              defaultValue: "Selected organisations that have engaged this programme.",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 items-center gap-6 md:gap-12 max-w-3xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <img
                src={client.src}
                alt={client.name}
                title={client.name}
                loading="lazy"
                className="max-h-16 md:max-h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePastClients;
