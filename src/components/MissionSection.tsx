import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Transformational Learning",
    description:
      "A portfolio of impactful programmes for early professionals to senior executives in Agentic AI, Data Science, and Algorithmic Trading.",
  },
  {
    icon: TrendingUp,
    title: "Pioneering Faculty",
    description:
      "Our faculty bring their real-world consulting and deployment expertise — combined with over a decade of university-level teaching — to every classroom.",
  },
  {
    icon: ShieldCheck,
    title: "Industry-Ready Skills",
    description:
      "Every programme integrates technical depth, strategic thinking, and implementation frameworks aligned with enterprise and government standards.",
  },
];

const MissionSection = () => {
  return (
    <section id="about" className="bg-background">
      {/* Mission statement - INSEAD style centered block */}
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-body">
            Metaskills Institute equips our community with the knowledge, skills and experiences to{" "}
            <strong className="text-primary">tackle the AI challenges of tomorrow</strong> and{" "}
            <strong className="text-primary">drive digital transformation across ASEAN.</strong>
          </p>
        </motion.div>
      </div>

      {/* Three pillars - INSEAD style */}
      <div className="border-t border-border">
        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <motion.a
                key={pillar.title}
                href="#courses"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
