import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CourseGalleryProps {
  images: string[];
  title: string;
}

const CourseGallery = ({ images, title }: CourseGalleryProps) => {
  const { t } = useTranslation();
  if (images.length < 2) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Camera className="w-5 h-5 text-primary" />
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t("coursePage.learningEnvironment")}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="aspect-[4/3] overflow-hidden rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <img
              src={img}
              alt={`${title} learning environment ${i + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="lazy"
              width={400}
              height={300}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseGallery;
