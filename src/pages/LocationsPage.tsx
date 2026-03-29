import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import location1Img from "@/assets/location1.jpg";
import trainingCenterImg from "@/assets/training-center-real.png";
import classroomImg from "@/assets/classroom-cthub2.jpg";

const locations = [
  {
    name: "Singapore HQ — CT Hub 2",
    description: "Located at 114 Lavender Street, CT Hub 2, #07-74, Singapore 338729. Our main campus equipped with state-of-the-art facilities for hands-on AI training and workshops.",
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

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero */}
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Learning Spaces
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-xl">
              World-class facilities designed for hands-on, immersive learning experiences.
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="space-y-16">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {loc.description}
                  </p>
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
