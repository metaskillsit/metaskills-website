import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Course, getCategoryImages } from "@/data/courses";
import ImageSlideshow from "@/components/ImageSlideshow";

interface CourseRelatedProps {
  relatedCourses: Course[];
}

const CourseRelated = ({ relatedCourses }: CourseRelatedProps) => {
  if (relatedCourses.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="max-w-[1140px] mx-auto px-6 py-14">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          Related Programmes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedCourses.map((c, i) => {
            const images = getCategoryImages(c.category);
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/course/${c.slug}`}
                  className="group block"
                >
                  {/* Image preview */}
                  <div className="aspect-[16/9] overflow-hidden rounded-sm mb-4">
                    <ImageSlideshow
                      images={images}
                      alt={c.title}
                      className="h-full w-full"
                      imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      interval={4000 + i * 800}
                      showDots={false}
                    />
                  </div>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    {c.category}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {c.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseRelated;
