import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import jimmyImg from "@/assets/Jimmy Profile.jpg";
import yinjieImg from "@/assets/Yin Jie.jpeg";
import evelynImg from "@/assets/evelyn.png";
import jinghaoImg from "@/assets/Jinghao.png";
import chrisImg from "@/assets/Chris Tan.jpg";
import jackHongImg from "@/assets/JackHong.jpg";
import andrewImg from "@/assets/Andrew.png";
import jackTeeImg from "@/assets/Jack Tee.png";
import jonathanImg from "@/assets/Jonathan.png";
import alenaImg from "@/assets/Alena.jpeg";
import stevenImg from "@/assets/Steven.jpg";
import victorImg from "@/assets/victor.jpg"; // 👈 THIS IS NEW

const allFaculty = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute",
    expertise: "Data Analytics | Data Science | Agentic AI | Machine Learning",
    image: jinghaoImg,
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: chrisImg,
  },
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: jackHongImg,
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations",
    expertise: "Operational Leadership | AI-Driven Transformation | Vibe Coding",
    image: andrewImg,
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | NLP | Computer Vision",
    image: jackTeeImg,
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: jonathanImg,
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Compliance",
    image: evelynImg,
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | Supply Chain | Professional Training",
    image: alenaImg,
  },
  {
    name: "Victor",
    role: "Lead Consultant, Algo Trading",
    expertise: "Algorithmic Trading | Forex & Gold Markets | Machine Learning",
    image: victorImg,
  },
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security",
    image: stevenImg,
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI & Cybersecurity Training | Instructor Development",
    image: jimmyImg,
  },
  {
    name: "Soon Yinjie",
    role: "Adjunct Trainer",
    expertise: "Programming Education | EdTech | Partnerships & Strategy",
    image: yinjieImg,
  },
];

const AUTO_INTERVAL = 4000;
const GAP = 32;

const FacultySection = () => {
  const { t } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const maxIdx = allFaculty.length - 4;

  const updateCardWidth = useCallback(() => {
    if (trackRef.current) {
      const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
      setCardWidth((containerWidth - GAP * 3) / 4);
    }
  }, []);

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [updateCardWidth]);

  const next = useCallback(() => {
    setCurrentIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
  }, [maxIdx]);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => (prev <= 0 ? maxIdx : prev - 1));
  }, [maxIdx]);

  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const translateX = currentIdx * (cardWidth + GAP);

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
              {t("faculty.title")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              {t("faculty.subtitle")}
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="p-2 rounded-sm border border-border hover:bg-accent transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={next} className="p-2 rounded-sm border border-border hover:bg-accent transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
        <div className="flex gap-1.5 mb-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? "w-6 bg-primary" : "w-2 bg-border"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="overflow-hidden" ref={trackRef}>
          <div className="flex gap-8" style={{ transform: `translateX(-${translateX}px)`, transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)" }}>
            {allFaculty.map((f) => (
              <div key={f.name} className="group flex-shrink-0" style={{ width: cardWidth > 0 ? cardWidth : "calc(25% - 24px)" }}>
                <div className="aspect-square overflow-hidden rounded-sm mb-4 bg-muted">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{f.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.expertise}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button onClick={prev} className="p-2 rounded-sm border border-border hover:bg-accent transition-colors" aria-label="Previous">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="p-2 rounded-sm border border-border hover:bg-accent transition-colors" aria-label="Next">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
