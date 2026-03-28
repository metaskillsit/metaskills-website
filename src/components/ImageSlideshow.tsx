import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  imgClassName?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  showDots?: boolean;
  kenBurns?: boolean;
}

const kenBurnsVariants = [
  { scale: 1, x: "0%", y: "0%" },
  { scale: 1.12, x: "-2%", y: "-1%" },
  { scale: 1.08, x: "2%", y: "1%" },
  { scale: 1.15, x: "-1%", y: "2%" },
  { scale: 1.1, x: "1%", y: "-2%" },
];

const ImageSlideshow = ({
  images,
  alt,
  className = "",
  interval = 6000,
  imgClassName = "",
  width,
  height,
  loading = "lazy",
  showDots = true,
  kenBurns = false,
}: ImageSlideshowProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={className}>
        <img
          src={images[0]}
          alt={alt}
          className={imgClassName}
          width={width}
          height={height}
          loading={loading}
        />
      </div>
    );
  }

  const kbTarget = kenBurnsVariants[current % kenBurnsVariants.length];

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className={imgClassName}
          width={width}
          height={height}
          loading={loading}
          initial={{ opacity: 0, scale: kenBurns ? 1 : 1 }}
          animate={{
            opacity: 1,
            scale: kenBurns ? kbTarget.scale : 1,
            x: kenBurns ? kbTarget.x : "0%",
            y: kenBurns ? kbTarget.y : "0%",
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: kenBurns ? interval / 1000 + 2 : 0, ease: "linear" },
            x: { duration: kenBurns ? interval / 1000 + 2 : 0, ease: "linear" },
            y: { duration: kenBurns ? interval / 1000 + 2 : 0, ease: "linear" },
          }
        />
      </AnimatePresence>
      {showDots && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
      {/* Progress bar for video-style feel */}
      {kenBurns && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
          <motion.div
            key={`progress-${current}`}
            className="h-full bg-white/50"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
