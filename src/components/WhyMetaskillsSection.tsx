import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Lightbulb, Target, Network } from "lucide-react";
import facilityImg from "@/assets/facility.jpg";

const features = [
  {
    icon: Briefcase,
    title: "Practitioners First",
    description:
      "Our instructors are active AI consultants and deployment specialists working with corporates, government agencies, and universities.",
  },
  {
    icon: GraduationCap,
    title: "Master Trainers",
    description:
      "Guided by master trainers with over a decade of university-level teaching and corporate training experience.",
  },
  {
    icon: Award,
    title: "Industry-Recognised Certifications",
    description:
      "Certifications designed in partnership with industry and government — recognised across Singapore and ASEAN.",
  },
  {
    icon: Lightbulb,
    title: "Applied Learning",
    description:
      "We simplify complex AI concepts into practical steps, making them accessible for learners at all levels.",
  },
  {
    icon: Target,
    title: "10,000+ Professionals Trained",
    description:
      "Our faculty have collectively trained more than 10,000 professionals across Singapore and ASEAN.",
  },
  {
    icon: Network,
    title: "Career Networking",
    description:
      "Connect to Singapore's growing AI and digital innovation ecosystem through alumni events and industry partnerships.",
  },
];

const WhyMetaskillsSection = () => {
  return (
    <section id="consultants" className="bg-background">
      {/* Full-width image banner - INSEAD style */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={facilityImg}
          alt="Metaskills training facility"
          className="w-full h-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.6)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Why Metaskills
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-14">
          Our trainers are active AI consultants and deployment specialists. This industry immersion means every lesson is grounded in practical challenges and opportunities that matter today.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMetaskillsSection;
