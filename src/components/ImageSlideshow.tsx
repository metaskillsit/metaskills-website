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
}

const ImageSlideshow = ({
  images,
  alt,
  className = "",
  interval = 4000,
  imgClassName = "",
  width,
  height,
  loading = "lazy",
  showDots = true,
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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
    </div>
  );
};

export default ImageSlideshow;
