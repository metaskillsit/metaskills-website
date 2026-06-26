import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import cthub2Img from "@/assets/cthub2-building.jpg";
import trainingCenterImg from "@/assets/training-center-real.png";
import classroomImg from "@/assets/classroom-cthub2-edited.jpg";
import conferenceRoomImg from "@/assets/conference-room.jpg";

const LocationsSection = () => {
  const { t } = useTranslation();

  const locations = [
    { name: t("locations.hqName"), description: t("locations.hqDesc"), image: cthub2Img },
    { name: t("locations.trainingName"), description: t("locations.trainingDesc"), image: trainingCenterImg },
    { name: t("locations.labName"), description: t("locations.labDesc"), image: classroomImg },
    { name: t("locations.confName"), description: t("locations.confDesc"), image: conferenceRoomImg },
  ];

  return (
    <section id="locations" className="bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t("locations.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            {t("locations.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {loc.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {loc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
