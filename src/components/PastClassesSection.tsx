import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
];

// Split into two rows for dual-direction scrolling
const half = Math.ceil(photos.length / 2);
const row1 = photos.slice(0, half);
const row2 = photos.slice(half);

const ScrollingRow = ({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof photos;
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Triple the items for seamless loop
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left"
            ? ["0%", "-33.333%"]
            : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {tripled.map((photo, i) => (
          <div
            key={`${photo.caption}-${i}`}
            className="flex-shrink-0 w-[340px] md:w-[420px] group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={420}
                height={263}
              />
            </div>
            {/* Hover overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-sm font-medium px-4 pb-4 leading-snug">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const PastClassesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            Our Training in Action
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Past Classes & Workshops
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real photos from our training sessions across Singapore — from algorithmic trading bootcamps to data science workshops and corporate programmes.
          </p>
        </motion.div>
      </div>

      {/* Scrolling rows — full width, no container constraint */}
      <div className="space-y-4">
        <ScrollingRow items={row1} direction="left" speed={40} />
        <ScrollingRow items={row2} direction="right" speed={45} />
      </div>
    </section>
  );
};

export default PastClassesSection;
