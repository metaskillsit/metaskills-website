import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const faculty = [
  {
    name: "Dr Jack Hong",
    role: "Consultant, Metaskills Institute",
    expertise: "Data Science | AI | Machine Learning | Deep Learning | Business Intelligence | Leadership",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
    bio: "Co-founder of Research Room, an A.I. consulting and development outfit that delivers decision-making capabilities for complex use-cases, Dr. Hong specializes in developing prediction and decision engines with the use of alternative data. Some of his notable works include omni-channel content personalization systems, manpower resource optimization using deep reinforcement learning, real estate valuation engines, and highly personalized portfolio strategies using applied artificial intelligence (AI). He is also AI Technology Consultant at Certis Group, Data Science Advisor at Vertex Holdings, advising on Human Conversational AI, Predictive Resource Allocation, Super-Intelligence in Natural Language Capabilities in Finance. He is also CEO of Integrum Global. Adjunct faculty with the Singapore Management University (SMU), and has been actively teaching undergraduate, postgraduate, and professional programmes since 2015. He is also the lead faculty for the highly acclaimed \"Leading Digital Transformation\" course for MBA students.",
  },
  {
    name: "Dr Ke Jinghao",
    role: "CEO, Metaskills Institute",
    expertise: "Data Analytics | Data Science | AI | Machine Learning | Business Intelligence",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/Jinghao-300x300.jpg",
    bio: "Dr. Ke is the co-founder of Research Room, a highly trained team of Data Scientists and Analysts with domain expertise in economics, finance, strategy, and business management. He has provided management consulting for and managed teams to help thousands of individuals, SMEs, MNCs and various Singapore Government agencies deliver bespoke implementations of data-driven turn-key technology solutions in areas of complex prediction, decision making, machine learning, deep learning, amongst others. Dr. Ke is also co-founder of JCube Institute and a full-stack programmer well versed in various analytics stacks such as Python, R, SAS, Power BI, Microsoft Analytics and Stata. On top of his work, he is adjunct faculty with the Singapore Management University in his spare time and teaches at Professional, Masters and Undergraduate levels.",
  },
  {
    name: "Dr Jonathan Khoo",
    role: "Consultant, Metaskills Institute",
    expertise: "Data Science | AI | Machine Learning | Deep Learning | Business Intelligence",
    image: "https://metaskills.sg/wp-content/uploads/2022/10/Jon-300x300-1.jpg",
    bio: "Dr Jonathan Khoo is a full-stack app developer who has successfully delivered many projects on bespoke implementations of data driven strategies that deliver complex prediction and decision-making capabilities to many large organizations. Dr Khoo has published papers in Genetic Programming and a working paper in Energy Prediction. He obtained his Ph.D. at SMU where his dissertation thesis investigates corporate finance through the lens of social network graph analytics, where he found a statistically significant \"ownership centrality\" effect in firm performance. Prior to that, he completed his Masters in Industrial Engineering and Operations Research at the University of Michigan (Ann Arbor), a year after he received degrees with Highest Honors in Economics and Summa Cum Laude in Electrical Engineering. He is an alumnus of Raffles Institution and Hwa Chong Institution.",
  },
  {
    name: "Evelyn",
    role: "Consultant, Metaskills Institute",
    expertise: "Six Sigma | Scrum | Data Science | Machine Learning | Business Intelligence | Digital Skills",
    image: "https://metaskills.sg/wp-content/uploads/2022/01/Evelyn-300-300x300.jpg",
    bio: "",
  },
];

const FacultyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Our Faculty
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg max-w-2xl">
              Meet the practitioners, researchers, and educators behind our programmes.
            </p>
          </div>
        </section>

        {/* Faculty intro */}
        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="max-w-3xl space-y-4 mb-14">
            <p className="text-muted-foreground leading-relaxed">
              Metaskills Institute is a premier Digital Science Institute in Asia that is made up of the most respected and passionate practitioners and leaders, many who are Ph.Ds, in the field of digital science and transformation. Our passion is to support individuals towards Digital Skills Mastery in high job demand areas such as Data Science, Artificial Intelligence, Machine Learning, Web Technologies, amongst others.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 8 years of practical experience working on bespoke implementations of data driven strategies that delivers complex prediction and decision-making capabilities to thousands of clients and organizations, our faculty and consultants, together with the organizations that we develop solutions for, have developed training programmes and certification standards that are high and relevant for existing and future industries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our faculty has collectively trained more than 10,000 professionals and teach Data Science at renowned Universities at Undergraduate, Masters and Doctoral Levels and deliver corporate training for hundreds of organizations, government and private corporations. All our trainers are carefully selected and are known to be the best teachers who are patient and experienced in simplifying difficult concepts for learners to grasp easily.
            </p>
          </div>

          {/* Faculty profiles */}
          <div className="space-y-14">
            {faculty.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-4 gap-8 border-t border-border pt-10"
              >
                <div className="md:col-span-1">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{f.role}</p>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4">
                    {f.expertise}
                  </p>
                  {f.bio && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.bio}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FacultyPage;
