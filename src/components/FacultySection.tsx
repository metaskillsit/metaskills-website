import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute",
    expertise: "Data Analytics | Data Science | Agentic AI | AI | Machine Learning | Business Intelligence",
    image: "https://metaskills.sg/wp-content/uploads/2025/09/JinghaoKe-ProfilePic-gemini-light-square.png",
    bio: "Recognised leader in applied AI, finance, and analytics. Adjunct faculty at SMU, teaching business analytics and finance.",
  },
  {
    name: "Dr Jack Hong",
    role: "Lead Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning | Business Intelligence | Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
    bio: "Founder & CEO of Integrum Global. Adjunct Faculty at SMU for over 10 years. Chair of Advocacy & Research at ASME.",
  },
  {
    name: "Christopher Tan",
    role: "CBDO, Metaskills Institute",
    expertise: "Data Science | Algorithmic Trading | Business Development | Higher Education Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2026/03/Chris-Tan-e1772416392943.jpg",
    bio: "20+ years across Government, Higher Education and Industry. Founding team of SMU Academy.",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant",
    expertise: "Data Science | AI | Machine Learning | Deep Learning",
    image: "https://metaskills.sg/wp-content/uploads/2022/10/Jon-300x300-1.jpg",
    bio: "Full-stack app developer with a Ph.D. from SMU. Masters from University of Michigan (Ann Arbor).",
  },
];

const FacultySection = () => {
  return (
    <section id="faculty" className="bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Faculty
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-muted-foreground leading-relaxed">
            Our faculty have collectively trained more than 10,000 professionals and teach Data Science at renowned Universities. All our trainers are carefully selected and known for simplifying difficult concepts for learners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-sm mb-4">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {f.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {f.expertise}
              </p>
              {f.bio && (
                <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-3">
                  {f.bio}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
