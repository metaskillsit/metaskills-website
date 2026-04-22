import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withFacultyImageVersion } from "@/lib/facultyImages";

const allFaculty = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute",
    expertise: "Data Analytics | Data Science | Agentic AI | Machine Learning",
    image: "/images/faculty/faculty-jinghao.png",
  },
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "/images/faculty/faculty-jackhong.jpg",
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations",
    expertise: "Operational Leadership | AI-Driven Transformation | Vibe Coding",
    image: "/images/faculty/faculty-andrew.png",
  },
  {
    name: "Gary Ye",
    role: "Country Head, China",
    expertise: "Business Development | China Market Expansion | Strategic Partnerships",
    image: "/images/faculty/faculty-gary.jpg",
  },
  {
    name: "Chris Tan",
    role: "Chief Strategist and Consultant, Metaskills Institute",
    expertise: "Data Science | Algorithmic Trading | Business Development",
    image: "/images/faculty/faculty-chris.jpg",
  },
  {
    name: "Sriven Naidu",
    role: "Lead Senior Consultant, AI Leadership",
    expertise: "AI Governance | Leadership | Human-Centric AI",
    image: "/images/faculty/faculty-sriven.png",
  },
  {
    name: "Phan Phi Long",
    role: "Senior Consultant and Trainer",
    expertise: "IT Transformation | Generative AI | Agentic AI | SME Digitalisation",
    image: "/images/faculty/faculty-philong.png",
  },
  {
    name: "Jack Tee",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | NLP | Computer Vision",
    image: "/images/faculty/faculty-jacktee.png",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "/images/faculty/faculty-jonathan.png",
  },
  {
    name: "Evelyn Wong",
    role: "Consultant",
    expertise: "Data Governance | Business & Data Analytics | Compliance",
    image: "/images/faculty/faculty-evelyn.png",
  },
  {
    name: "Ms. Alena Lavrinenko",
    role: "Consultant",
    expertise: "Generative & Agentic AI | Supply Chain | Professional Training",
    image: "/images/faculty/faculty-alena.jpg",
  },
  {
    name: "Victor",
    role: "Lead Consultant, Algo Trading",
    expertise: "Algorithmic Trading | Forex & Gold Markets | Machine Learning",
    image: "/images/faculty/faculty-victor.jpg",
  },
  {
    name: "Adrian Toh",
    role: "Consultant, Wealth Management & Financial Markets",
    expertise: "Wealth Management | Investment Advisory | FX & Structured Products | Algorithmic Trading",
    image: "/images/faculty/faculty-adriantoh.jpg",
  },
  {
    name: "Mr Steven Ong",
    role: "Lead Consultant",
    expertise: "Cybersecurity Governance | ISO 27001 | NIST | Cloud Security",
    image: "/images/faculty/faculty-steven.jpg",
  },
  {
    name: "Jimmy Leong",
    role: "Adjunct Trainer",
    expertise: "Adult Education | AI & Cybersecurity Training | Instructor Development",
    image: "/images/faculty/faculty-jimmy.png",
  },
  {
    name: "Soon Yinjie",
    role: "Adjunct Trainer",
    expertise: "Programming Education | EdTech | Partnerships & Strategy",
    image: "/images/faculty/faculty-yinjie.jpg",
  },
];

const AUTO_INTERVAL = 4000;
const GAP = 32;
const SWIPE_THRESHOLD = 50;

const FacultySection = () => {
  const { t } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateCardWidth = useCallback(() => {
    if (trackRef.current) {
      const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
      const cols = containerWidth < 640 ? 2 : containerWidth < 1024 ? 3 : 4;
      setVisibleCards(cols);
      setCardWidth((containerWidth - GAP * (cols - 1)) / cols);
    }
  }, []);

  const maxIdx = Math.max(0, allFaculty.length - visibleCards);

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

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) next();
      else prev();
    }
  };

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
            <button onClick={prev} className="p-2 border hover:bg-accent">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 border hover:bg-accent">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          className="overflow-hidden"
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-8"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            {allFaculty.map((f) => (
              <div key={f.name} className="flex-shrink-0" style={{ width: cardWidth }}>
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={withFacultyImageVersion(f.image)}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">{f.name}</h3>
                <p className="text-primary">{f.role}</p>
                <p className="text-sm">{f.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
