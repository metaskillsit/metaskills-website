import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    quote:
      "Within two months of completing the programme, I automated 30% of my reporting tasks using Agentic AI workflows. The trainers' real-world consulting experience made the training immediately applicable.",
    author: "Senior Supply Chain Professional",
    role: "Course Participant, Singapore",
  },
  {
    quote:
      "Metaskills designed a customised AI upskilling programme for our managers. Beyond training, they worked with us to identify pilot projects where AI could deliver tangible business value.",
    author: "Analytics Lead",
    role: "Financial Institution Partner",
  },
  {
    quote:
      "The course gave us a clear framework to evaluate Agentic AI opportunities while balancing governance and compliance. It's rare to have trainers who can bridge strategy with technical know-how this effectively.",
    author: "Policy Officer",
    role: "Course Participant",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-primary">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="border-t border-white/20 pt-6"
            >
              <p className="text-white/85 text-sm leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <p className="text-sm font-semibold text-accent">{item.author}</p>
              <p className="text-xs text-white/60">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
