import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import location1Img from "@/assets/location1.jpg";
import facilityImg from "@/assets/facility.jpg";
import location2Img from "@/assets/location2.jpg";

const locations = [
  {
    name: "Singapore HQ — CT Hub 2",
    description: "Located at 114 Lavender Street, CT Hub 2, #07-74, Singapore 338729. Our main campus equipped with state-of-the-art facilities for hands-on AI training.",
    image: location1Img,
  },
  {
    name: "Training Centre",
    description: "Modern collaborative learning spaces designed for immersive, project-based programmes.",
    image: facilityImg,
  },
  {
    name: "Innovation Lab",
    description: "A dedicated space for AI research, prototyping, and industry collaborations.",
    image: location2Img,
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Learning Spaces
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            World-class facilities designed for hands-on, immersive learning experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
