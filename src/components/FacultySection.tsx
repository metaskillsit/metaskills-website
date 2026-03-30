import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allFaculty = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute",
    expertise: "Data Analytics | Data Science | Agentic AI | Machine Learning",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/JinghaoKe-ProfilePic-gemini-light-square.png",
  },
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Chris-Tan-e1772416392943.jpg",
  },
  {
    name: "Andrew",
    role: "Head, Operations",
    expertise: "Operational Leadership | AI-Driven Transformation",
    image: "https://metaskills.sg/wp-content/uploads/2026/02/Andrew-e1772293476358.jpeg",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | NLP | Computer Vision",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Jack-Tee.jpeg",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "https://metaskills.sg/wp-content/uploads/2022/10/Jon-300x300-1.jpg",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Compliance",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/Evelyn-300-300x300.jpg",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | Supply Chain | Professional Training",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/Alena1.jpg",
  },
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/STeven-e1772366589711.jpeg",
  },
];

const VISIBLE = 4;
const AUTO_INTERVAL = 4000;

const FacultySection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const maxStart = allFaculty.length - VISIBLE;

  const next = useCallback(() => {
    setStartIdx((prev) => (prev >= maxStart ? 0 : prev + 1));
  }, [maxStart]);

  const prev = useCallback(() => {
    setStartIdx((prev) => (prev <= 0 ? maxStart : prev - 1));
  }, [maxStart]);

  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const visible = allFaculty.slice(startIdx, startIdx + VISIBLE);

  return (
    <section id="faculty" className="bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex items-end justify-between"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Faculty
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Practitioners, researchers, and educators who have collectively trained more than 10,000 professionals.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-sm border border-border hover:bg-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-sm border border-border hover:bg-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="flex gap-1.5 mb-8">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIdx(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === startIdx ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visible.map((f) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-sm mb-4 bg-muted">
                  {f.image ? (
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-muted-foreground/30">
                        {f.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {f.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {f.expertise}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-sm border border-border hover:bg-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-sm border border-border hover:bg-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
