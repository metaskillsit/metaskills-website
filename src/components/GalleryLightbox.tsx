import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryLightboxProps {
  isOpen: boolean;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryLightbox = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !items.length) return null;

  const activeItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-foreground/95 flex flex-col" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between p-4 md:p-6">
        <p className="text-sm text-background/80">
          {currentIndex + 1} / {items.length}
        </p>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20 transition-colors"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-10 relative">
        {items.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <img
          src={activeItem.src}
          alt={activeItem.alt}
          className="max-w-full max-h-[75vh] object-contain rounded-lg"
        />

        {items.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {activeItem.caption && (
        <div className="px-6 py-5 text-center">
          <p className="text-sm md:text-base text-background/90">{activeItem.caption}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryLightbox;
