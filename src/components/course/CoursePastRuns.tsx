import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PastRun } from "@/data/pastRuns";

interface CoursePastRunsProps {
  pastRuns: PastRun[];
  courseTitle: string;
}

const CoursePastRuns = ({ pastRuns, courseTitle }: CoursePastRunsProps) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<Record<number, number>>({});

  if (!pastRuns.length) return null;

  const totalParticipants = pastRuns.reduce((sum, run) => sum + run.participants, 0);

  const getPhotoIndex = (runIndex: number) => activePhotoIndex[runIndex] || 0;

  const nextPhoto = (runIndex: number, totalPhotos: number) => {
    setActivePhotoIndex((prev) => ({
      ...prev,
      [runIndex]: ((prev[runIndex] || 0) + 1) % totalPhotos,
    }));
  };

  const prevPhoto = (runIndex: number, totalPhotos: number) => {
    setActivePhotoIndex((prev) => ({
      ...prev,
      [runIndex]: ((prev[runIndex] || 0) - 1 + totalPhotos) % totalPhotos,
    }));
  };

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            Proven Track Record
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Past Course Runs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of professionals who have transformed their careers through our programmes.
          </p>

          {/* Summary Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{pastRuns.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Runs Completed</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{totalParticipants}+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Participants Trained</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Avg. Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Past Run Cards */}
        <div className="space-y-8">
          {pastRuns.map((run, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Photo Carousel */}
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden group">
                  {run.photos.map((photo, pIndex) => (
                    <img
                      key={pIndex}
                      src={photo}
                      alt={`${courseTitle} - ${run.date} - Photo ${pIndex + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        getPhotoIndex(index) === pIndex ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      width={1024}
                      height={640}
                    />
                  ))}

                  {/* Photo Navigation */}
                  {run.photos.length > 1 && (
                    <>
                      <button
                        onClick={() => prevPhoto(index, run.photos.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextPhoto(index, run.photos.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {run.photos.map((_, pIndex) => (
                          <button
                            key={pIndex}
                            onClick={() =>
                              setActivePhotoIndex((prev) => ({ ...prev, [index]: pIndex }))
                            }
                            className={`w-2 h-2 rounded-full transition-all ${
                              getPhotoIndex(index) === pIndex
                                ? "bg-white w-4"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Organization Badge */}
                  {run.organization && (
                    <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {run.organization}
                    </div>
                  )}
                </div>

                {/* Run Details */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {run.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {run.venue}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      {run.participants} Participants
                    </span>
                  </div>

                  {run.highlight && (
                    <div className="flex items-start gap-2 mb-5 p-3 bg-primary/5 rounded-md border border-primary/10">
                      <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">{run.highlight}</p>
                    </div>
                  )}

                  {run.testimonial && (
                    <div className="border-l-2 border-accent pl-4 mt-2">
                      <Quote className="w-5 h-5 text-accent/50 mb-2" />
                      <p className="text-sm text-foreground/80 italic leading-relaxed mb-3">
                        "{run.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">
                            {run.testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            {run.testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {run.testimonial.role}, {run.testimonial.org}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">5.0 / 5.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePastRuns;
