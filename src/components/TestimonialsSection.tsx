import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    { quote: t("testimonials.quote1"), author: t("testimonials.author1"), role: t("testimonials.role1") },
    { quote: t("testimonials.quote2"), author: t("testimonials.author2"), role: t("testimonials.role2") },
    { quote: t("testimonials.quote3"), author: t("testimonials.author3"), role: t("testimonials.role3") },
  ];

  return (
    <section className="bg-primary">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{t("testimonials.title")}</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="border-t border-white/20 pt-6">
              <p className="text-white/85 text-sm leading-relaxed mb-6">"{item.quote}"</p>
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
