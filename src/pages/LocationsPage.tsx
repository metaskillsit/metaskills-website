import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import cthub2Img from "@/assets/cthub2-building.jpg";
import trainingCenterImg from "@/assets/training-center-real.png";
import classroomImg from "@/assets/classroom-cthub2-edited.jpg";
import conferenceRoomImg from "@/assets/conference-room.jpg";

const LocationsPage = () => {
  const { t } = useTranslation();

  const locations = [
    { name: t("locations.hqName"), description: t("locations.hqDesc"), image: cthub2Img },
    { name: t("locations.trainingName"), description: t("locations.trainingDesc"), image: trainingCenterImg },
    { name: t("locations.labName"), description: t("locations.labDesc"), image: classroomImg },
    { name: t("locations.confName"), description: t("locations.confDesc"), image: conferenceRoomImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("locationsPage.heroTitle")}
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              {t("locationsPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="space-y-16">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-2xl font-bold text-foreground">{loc.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{loc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default LocationsPage;
