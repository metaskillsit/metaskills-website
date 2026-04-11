import { useState, useEffect, useCallback } from "react";

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
}: ImageSlideshowProps) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, images.length]);

  // Preload next image
  useEffect(() => {
    if (images.length <= 1) return;
    const nextIdx = (current + 1) % images.length;
    if (!loaded.has(nextIdx)) {
      const img = new Image();
      img.src = images[nextIdx];
      img.onload = () => setLoaded((prev) => new Set(prev).add(nextIdx));
    }
  }, [current, images, loaded]);

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
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={`${imgClassName} transition-opacity duration-1000 ease-in-out`}
          width={width}
          height={height}
          loading={i === 0 ? loading : "lazy"}
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}
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
