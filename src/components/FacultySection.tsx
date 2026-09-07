import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback, useRef, PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withFacultyImageVersion } from "@/lib/facultyImages";
import { Button } from "@/components/ui/button";


const allFaculty = [
  {
    name: "Dr. Jinghao Ke",
    role: "CEO, Metaskills Institute | Chief Corporate Officer, Integrum Global",
    expertise: "Business Consulting | Data Analytics | Data Science | Agentic AI | Machine Learning | ACLP",
    image: "/images/faculty/faculty-jinghao.png",
  },
  {
    name: "Phan Phi Long",
    role: "CTO, Metaskills Institute",
    expertise: "IT Transformation | Generative AI | Agentic AI | SME Digitalisation | ACLP",
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
    expertise: "AI Transformation | Data Science | Digital Strategy | ACLP",
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
    expertise: "AI in Finance | Investment Advisory | FX & Structured Products | Algorithmic Trading | ACLP",
    image: "/images/faculty/faculty-adriantoh.jpg",
  },
  {
    name: "Matthew Wu",
    role: "Senior Strategist, Cross-Border Capital | Real Estate & Agricultural Investment | AI Digital Strategy",
    expertise: "Cross-Border Capital Raising & Deal Structuring | Asia-Pacific Investor Relations | AI for Market Research & Investment Intelligence | ACLP",
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
    expertise: "AI Engineering | NLP | Computer Vision | ACLP",
    image: "/images/faculty/faculty-jacktee.png",
  },
  {
    name: "Soon Yinjie",
    role: "AI Senior Consultant and Trainer",
    expertise: "Programming | EdTech | AI Systems | ACLP",
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
    expertise: "Data Governance | Analytics | Compliance | ACLP",
    image: "/images/faculty/faculty-evelyn.png",
  },
  {
    name: "Chris Tan Seok King",
    role: "Senior Consultant and Trainer",
    expertise: "Financial Services | AI-Augmented Client Advisory | Sales Coaching | ACLP",
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
    expertise: "ISO 27001 • NIST • IM8 | CISO-Grade Security Governance for Defence & MNCs | ACLP",
    image: "/images/faculty/faculty-steven.jpg",
  },
  {
    name: "Johnson Ang",
    role: "Lead Instructor, Cyber Security & Applied AI",
    expertise: "Adult Learning | Offensive Security | AI Infrastructure | AFHEA, ACTA/ACLP",
    image: "/images/faculty/faculty-johnson.jpg",
  },
  {
    name: "Jimmy Leong",
    role: "Senior Cyber Security Advisor",
    expertise: "Adult Learning | Cyber, DevOps & AI Training | ACLP",
    image: "/images/faculty/faculty-jimmy.png",
  },
  {
    name: "Lenz Yu",
    role: "Principal Cyber Security Consultant",
    expertise: "Ethical Hacking | Malware Reverse Engineering | Web & Network Security | ACLP",
    image: "/images/faculty/faculty-lenz.jpg",
  },
];

const AUTO_INTERVAL = 4000;
const SWIPE_THRESHOLD = 44;
const VISIBLE_OFFSETS = [-3, -2, -1, 0, 1, 2, 3];

const wrapIndex = (index: number) => (index + allFaculty.length) % allFaculty.length;

const FacultySection = () => {
  const { t } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pointerStartX = useRef(0);
  const pointerId = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrentIdx((prev) => wrapIndex(prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => wrapIndex(prev - 1));
  }, []);

  useEffect(() => {
    if (isInteracting) return;
    const timer = window.setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isInteracting, next]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerId.current = event.pointerId;
    pointerStartX.current = event.clientX;
    setDragX(0);
    setIsInteracting(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;
    setDragX(Math.max(-150, Math.min(150, event.clientX - pointerStartX.current)));
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;
    if (dragX <= -SWIPE_THRESHOLD) next();
    if (dragX >= SWIPE_THRESHOLD) prev();
    pointerId.current = null;
    setDragX(0);
    setIsInteracting(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const activeFaculty = allFaculty[currentIdx];

  return (
    <section id="faculty" className="bg-background overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <span className="section-eyebrow">Faculty</span>
            <h2 className="section-h2">
              {t("faculty.title")}
            </h2>
            <p className="lead-p mt-3">
              {t("faculty.subtitle")}
            </p>
          </div>
        </motion.div>

        <div
          className="relative h-[390px] sm:h-[470px] md:h-[520px] cursor-grab touch-pan-y select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 active:cursor-grabbing"
          role="region"
          aria-roledescription="carousel"
          aria-label="Core faculty"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => {
            if (pointerId.current === null) setIsInteracting(false);
          }}
        >
          <div className="absolute inset-x-0 bottom-5 h-px bg-border/70" aria-hidden="true" />
          {VISIBLE_OFFSETS.map((offset) => {
            const index = wrapIndex(currentIdx + offset);
            const faculty = allFaculty[index];
            const distance = Math.abs(offset);
            const translatePercent = offset * 72;
            const translateY = distance === 0 ? 0 : distance === 1 ? 38 : distance === 2 ? 82 : 126;
            const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : distance === 2 ? 0.7 : 0.58;
            const rotateY = offset * -8;
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.78 : distance === 2 ? 0.46 : 0.2;

            return (
              <article
                key={`${faculty.name}-${offset}`}
                className="absolute left-1/2 top-0 w-[62vw] max-w-[270px] sm:w-[250px] md:w-[280px] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(calc(-50% + ${translatePercent}% + ${dragX * (1 - distance * 0.12)}px)) translateY(${translateY}px) scale(${scale}) perspective(1400px) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex: 10 - distance,
                  filter: distance === 0 ? "none" : `grayscale(${Math.min(80, distance * 28)}%)`,
                }}
                aria-hidden={offset !== 0}
                aria-label={`${faculty.name}, ${faculty.role}`}
              >
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-border/80 bg-card shadow-[0_24px_60px_hsl(var(--foreground)/0.12)]">
                  <img
                    src={withFacultyImageVersion(faculty.image)}
                    alt={offset === 0 ? faculty.name : ""}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    style={
                      faculty.image.includes("brendan") || faculty.image.includes("adriantoh")
                        ? { objectPosition: "center top" }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-75" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground md:p-6">
                    <p className="mb-2 text-[10px] font-medium uppercase text-primary-foreground/70">{faculty.role}</p>
                    <h3 className="font-heading text-2xl font-medium leading-tight md:text-3xl">{faculty.name}</h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-7 max-w-2xl text-center" aria-live="polite" aria-atomic="true">
          <p className="text-[10px] font-medium uppercase text-accent">{activeFaculty.role}</p>
          <h3 className="mt-2 font-heading text-3xl font-medium text-foreground md:text-4xl">{activeFaculty.name}</h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground md:text-base">{activeFaculty.expertise}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 sm:gap-8">
          <Button variant="ghost" size="icon" onClick={prev} aria-label="Previous faculty member" className="rounded-full border border-border bg-background">
            <ChevronLeft />
          </Button>
          <div className="flex max-w-[70vw] items-center justify-center gap-2" aria-label={`Faculty member ${currentIdx + 1} of ${allFaculty.length}`}>
            {allFaculty.map((faculty, index) => (
              <button
                key={faculty.name}
                type="button"
                onClick={() => setCurrentIdx(index)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === currentIdx ? "w-6 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground"}`}
                aria-label={`Show ${faculty.name}`}
                aria-current={index === currentIdx ? "true" : undefined}
              />
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={next} aria-label="Next faculty member" className="rounded-full border border-border bg-background">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
