import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/** Scroll-triggered entrance used across the landing page for a cohesive motion system. */
export const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

/** Parent wrapper that staggers any nested <RevealItem /> children. */
export const RevealGroup = ({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{ visible: { transition: { staggerChildren: stagger } } }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={variants}
    transition={{ duration: 0.65, ease: EASE }}
  >
    {children}
  </motion.div>
);

export default Reveal;
