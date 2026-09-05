import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback, useRef, TouchEvent, MouseEvent as ReactMouseEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withFacultyImageVersion } from "@/lib/facultyImages";


const allFaculty = [
  {
    name: "Dr. Jinghao Ke",
    role: "CEO, Metaskills Institute | Chief Corporate Officer, Integrum Global",
    expertise: "Business Consulting | Data Analytics | Data Science | Agentic AI | Machine Learning",
    image: "/images/faculty/faculty-jinghao.png",
  },
  {
    name: "Phan Phi Long",
    role: "CTO, Metaskills Institute",
    expertise: "IT Transformation | Generative AI | Agentic AI | SME Digitalisation",
    image: "/images/faculty/faculty-philong.jpg",
  },
  {
    name: "Andrew Toh",
    role: "Head, Operations, Metaskills Institute",
    expertise: "AI Operations | Training Systems | Business Transformation",
    image: "/images/faculty/faculty-andrew.png",
  },
  {
    name: "Gary Ye",
    role: "Country Head, China, Metaskills Institute",
    expertise: "Business Development | China Market Expansion | Strategic Partnerships",
    image: "/images/faculty/faculty-gary.jpg",
  },
  {
    name: "Dr. Jack Hong",
    role: "Lead Senior Consultant",
    expertise: "AI Transformation | Data Science | Digital Strategy",
    image: "/images/faculty/faculty-jackhong.jpg",
  },
  {
    name: "Sriven Naidu",
    role: "Lead Senior Consultant, AI Leadership",
    expertise: "AI Governance | Leadership | Human-Centric AI",
    image: "/images/faculty/faculty-sriven.png",
  },
  {
    name: "Adrian Toh",
    role: "AI Senior Consultant",
    expertise: "AI in Finance | Investment Advisory | FX & Structured Products | Algorithmic Trading",
    image: "/images/faculty/faculty-adriantoh.jpg",
  },
  {
    name: "Matthew Wu",
    role: "Senior Strategist, Cross-Border Capital | Real Estate & Agricultural Investment | AI Digital Strategy",
    expertise: "Cross-Border Capital Raising & Deal Structuring | Asia-Pacific Investor Relations | AI for Market Research & Investment Intelligence",
    image: "/images/faculty/faculty-matthewwu.jpg",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "AI Senior Consultant and Trainer",
    expertise: "Machine Learning | Deep Learning | App Development",
    image: "/images/faculty/faculty-jonathan.png",
  },
  {
    name: "Jack Tee",
    role: "AI Senior Consultant and Trainer",
    expertise: "AI Engineering | NLP | Computer Vision",
    image: "/images/faculty/faculty-jacktee.png",
  },
  {
    name: "Soon Yinjie",
    role: "AI Senior Consultant and Trainer",
    expertise: "Programming | EdTech | AI Systems",
    image: "/images/faculty/faculty-yinjie.jpg",
  },
  {
    name: "Brendan Graetz",
    role: "AI Senior Consultant and Trainer",
    expertise: "Generative AI | AI Engineering | Developer Education | DevRel Strategy",
    image: "/images/faculty/faculty-brendan.jpg",
  },
  {
    name: "Evelyn Wong",
    role: "AI Senior Consultant and Trainer",
    expertise: "Data Governance | Analytics | Compliance",
    image: "/images/faculty/faculty-evelyn.png",
  },
  {
    name: "Chris Tan Seok King",
    role: "Senior Consultant and Trainer",
    expertise: "Financial Services | AI-Augmented Client Advisory | Sales Coaching",
    image: "/images/faculty/faculty-christan.jpg",
  },
  {
    name: "Alena Lavrinenko",
    role: "AI Consultant and Trainer",
    expertise: "AI Solutions | Business Transformation",
    image: "/images/faculty/faculty-alena.jpg",
  },
  {
    name: "Victor",
    role: "Lead Consultant, Algorithmic Trading",
    expertise: "Algo Trading | ML | Forex | Reinforcement Learning",
    image: "/images/faculty/faculty-victor.jpg",
  },
  {
    name: "Steven Ong",
    role: "Lead Cyber Security Consultant",
    expertise: "ISO 27001 | NIST | Enterprise Security",
    image: "/images/faculty/faculty-steven.jpg",
  },
  {
    name: "Johnson Ang (AFHEA, ACTA/ACLP)",
    role: "Lead Instructor, Cyber Security & Applied AI",
    expertise: "Adult Learning | Offensive Security | AI Infrastructure",
    image: "/images/faculty/faculty-johnson.jpg",
  },
  {
    name: "Jimmy Leong",
    role: "Senior Cyber Security Advisor",
    expertise: "Adult Learning | AI & Cyber Training",
    image: "/images/faculty/faculty-jimmy.png",
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

  const isDragging = useRef(false);

  const handleMouseDown = (e: ReactMouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleTouchEnd();
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
            <span className="section-eyebrow">Faculty</span>
            <h2 className="section-h2">
              {t("faculty.title")}
            </h2>
            <p className="lead-p mt-3">
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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
                    style={
                      f.image.includes("brendan") || f.image.includes("adriantoh")
                        ? { objectPosition: "center top" }
                        : undefined
                    }
                  />
                </div>
                <h3 className="font-heading text-base font-medium tracking-tight text-foreground">{f.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5">{f.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">{f.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
