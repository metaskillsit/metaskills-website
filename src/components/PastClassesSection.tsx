import { motion } from "framer-motion";
import { useState } from "react";

import GalleryLightbox from "@/components/GalleryLightbox";
import pastClass1 from "@/assets/past-class-1.jpg";
import pastClass2 from "@/assets/past-class-2.jpg";
import pastClass3 from "@/assets/past-class-3.jpg";
import pastClass4 from "@/assets/past-class-4.jpg";
import pastClass5 from "@/assets/past-class-5.jpg";
import pastClass6 from "@/assets/past-class-6.jpg";
import pastClass7 from "@/assets/past-class-7.jpg";
import pastClass8 from "@/assets/past-class-8.jpg";
import pastClass9 from "@/assets/past-class-9.jpg";
import pastClass10 from "@/assets/past-class-10.jpg";
import pastClass11 from "@/assets/past-class-11.jpg";
import pastClass12 from "@/assets/past-class-12.jpg";
import pastClass13 from "@/assets/past-class-13.jpg";
import pastClass14 from "@/assets/past-class-14.jpg";
import pastClass15 from "@/assets/past-class-15.jpg";
import pastClass16 from "@/assets/past-class-16.jpg";
import pastClass17 from "@/assets/past-class-17.jpg";
import pastClass18 from "@/assets/past-class-18.jpg";
import pastClass19 from "@/assets/past-class-19.jpg";
import pastClass20 from "@/assets/past-class-20.jpg";
import pastClass21 from "@/assets/past-class-21.jpg";
import pastClass22 from "@/assets/past-class-22.jpg";
import pastClass23 from "@/assets/past-class-23.jpg";
import pastClass24 from "@/assets/past-class-24.jpg";
import pastClass25 from "@/assets/past-class-25.jpg";
import pastClass26 from "@/assets/past-class-26.jpg";
import pastClass27 from "@/assets/past-class-27.jpg";
import pastClass28 from "@/assets/past-class-28.jpg";
import pastClass29 from "@/assets/past-class-29.jpg";
import pastClass30 from "@/assets/past-class-30.jpg";
import pastClass31 from "@/assets/past-class-31.jpg";
import pastClass32 from "@/assets/past-class-32.jpg";
import pastClass33 from "@/assets/past-class-33.jpg";
import pastClass34 from "@/assets/past-class-34.jpg";
import pastClass35 from "@/assets/past-class-35.jpg";
import pastClass36 from "@/assets/past-class-36.jpg";
import pastClass37 from "@/assets/past-class-37.jpg";
import pastClass38 from "@/assets/past-class-38.jpg";
import pastClass39 from "@/assets/past-class-39.jpg";
import pastClass40 from "@/assets/past-class-40.jpg";
import pastClass41 from "@/assets/past-class-41.jpg";
import pastClass42 from "@/assets/past-class-42.jpg";
import pastClass43 from "@/assets/past-class-43.jpg";

const photos = [
  { src: pastClass1, caption: "Algorithmic Trading Mastery — Level 1, Run 8" },
  { src: pastClass2, caption: "Algorithmic Trading Mastery — Live Trading Session" },
  { src: pastClass3, caption: "Algorithmic Trading Mastery — Classroom Workshop" },
  { src: pastClass4, caption: "Algorithmic Trading Mastery — Live Market Analysis" },
  { src: pastClass5, caption: "Algorithmic Trading Mastery — Hands-On Practice" },
  { src: pastClass6, caption: "Certified Data Analyst — Run 31" },
  { src: pastClass7, caption: "Corporate Training — Small Group Session" },
  { src: pastClass8, caption: "SMU Academy — Algorithmic Trading Cohort" },
  { src: pastClass9, caption: "SMU Academy — Internationalisation Series" },
  { src: pastClass10, caption: "Corporate Workshop — Video Conference Session" },
  { src: pastClass11, caption: "AI Powerhouses — Asia AI Workshop" },
  { src: pastClass12, caption: "Generative AI — Group Activity & Final Project" },
  { src: pastClass13, caption: "AI Coding Workshop — Guided Lab Session" },
  { src: pastClass14, caption: "AI Coding Workshop — Hands-On Participant Practice" },
  { src: pastClass15, caption: "Team Collaboration — Pair Programming Session" },
  { src: pastClass16, caption: "Workshop Graduation — Cohort Group Photo" },
  { src: pastClass17, caption: "AI Transformation Workshop — Critical Elements Session" },
  { src: pastClass18, caption: "AI Transformation Workshop — Full Classroom View" },
  { src: pastClass19, caption: "Prompt Engineering Workshop — Intensive Training Cohort" },
  { src: pastClass20, caption: "Small Group Coaching — Peer Discussion Session" },
  { src: pastClass21, caption: "Leadership Session — Interactive Class Discussion" },
  { src: pastClass22, caption: "Leadership Session — Participant Engagement" },
  { src: pastClass23, caption: "Workshop Cohort — Group Graduation Photo" },
  { src: pastClass24, caption: "Applied Data Science Class — Full Workshop View" },
  { src: pastClass25, caption: "Applied Data Science — Instructor-Led Session" },
  { src: pastClass26, caption: "Industry Showcase — JCube/Integrum Event Booth" },
  { src: pastClass27, caption: "Applied Data Science — Learner Engagement Session" },
  { src: pastClass28, caption: "LLM-Assisted Planning — Mermaid Workshop Day 1" },
  { src: pastClass29, caption: "Hands-On Coding — Full Classroom Group Session" },
  { src: pastClass30, caption: "Smarter AI for All — Lenovo x Intel Industry Talk" },
  { src: pastClass31, caption: "Context Engineering — Enterprise AI Assistants Workshop" },
  { src: pastClass32, caption: "Prompt Design with ChatGPT — Instructor-Led Workshop" },
  { src: pastClass33, caption: "Data is the New Gold — SMU Lecture Hall Session" },
  { src: pastClass34, caption: "Data Science Masterclass — SMU Lecture Theatre" },
  { src: pastClass35, caption: "Data Analytics — Full Lecture Hall Presentation" },
  { src: pastClass36, caption: "Corporate Lab — Hands-On Technical Mentoring" },
  { src: pastClass37, caption: "Algorithmic Trading Mastery — Evening Intensive Session" },
  { src: pastClass38, caption: "AI for Good — AI Singapore x Micron Train-the-Trainers Batch 1" },
  { src: pastClass39, caption: "Algorithmic Trading Mastery — Level 1, Run 5 Live Charts" },
  { src: pastClass40, caption: "Algorithmic Trading Mastery — Level 1, Run 5 Classroom" },
  { src: pastClass41, caption: "CDA Stream A — Virtual Class, June 2020 Cohort" },
  { src: pastClass42, caption: "Online Workshop — Zoom Live Session" },
  { src: pastClass43, caption: "AI for Good — AI Singapore x Micron Train-the-Trainers Batch 2" },
];

const third = Math.ceil(photos.length / 3);
const row1 = photos.slice(0, third);
const row2 = photos.slice(third, third * 2);
const row3 = photos.slice(third * 2);

const ScrollingRow = ({
  items,
  startIndex,
  direction = "left",
  speed = 35,
  onPhotoClick,
}: {
  items: typeof photos;
  startIndex: number;
  direction?: "left" | "right";
  speed?: number;
  onPhotoClick: (index: number) => void;
}) => {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-3 md:gap-4"
        animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ x: { duration: speed, repeat: Infinity, ease: "linear" } }}
      >
        {tripled.map((photo, i) => {
          const realIndex = startIndex + (i % items.length);
          return (
            <button
              key={`${photo.caption}-${i}`}
              type="button"
              onClick={() => onPhotoClick(realIndex)}
              className="flex-shrink-0 w-[300px] md:w-[380px] lg:w-[420px] group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500"
              aria-label={`Open photo: ${photo.caption}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.02] contrast-[1.02] saturate-[1.05]"
                  loading="lazy"
                  width={420}
                  height={263}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium px-4 pb-4 leading-snug drop-shadow-lg">{photo.caption}</p>
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

const PastClassesSection = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedPhotoIndex(null);
  const nextLightboxPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
  };
  const prevLightboxPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Our Training in Action</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Past Classes & Workshops</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Real photos from our training sessions across Singapore — from algorithmic trading bootcamps to AI workshops, data science masterclasses, and corporate programmes.
          </p>
        </motion.div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <ScrollingRow items={row1} startIndex={0} direction="left" speed={50} onPhotoClick={setSelectedPhotoIndex} />
        <ScrollingRow items={row2} startIndex={third} direction="right" speed={55} onPhotoClick={setSelectedPhotoIndex} />
        <ScrollingRow items={row3} startIndex={third * 2} direction="left" speed={48} onPhotoClick={setSelectedPhotoIndex} />
      </div>

      <div className="max-w-[1140px] mx-auto px-6 mt-8">
        <p className="text-xs text-muted-foreground/60 text-center md:text-right">{photos.length} photos from real training sessions</p>
      </div>

      <GalleryLightbox
        isOpen={selectedPhotoIndex !== null}
        items={photos.map((photo) => ({ src: photo.src, alt: photo.caption, caption: photo.caption }))}
        currentIndex={selectedPhotoIndex ?? 0}
        onClose={closeLightbox}
        onPrev={prevLightboxPhoto}
        onNext={nextLightboxPhoto}
      />
    </section>
  );
};

export default PastClassesSection;
