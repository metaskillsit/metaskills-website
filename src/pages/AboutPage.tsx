import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pillars = [
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "Designing, deploying, and governing autonomous AI agents for real-world enterprise applications.",
  },
  {
    icon: TrendingUp,
    title: "Algorithmic Trading Systems",
    description:
      "Data-driven trading strategies powered by automation and analytics for financial markets.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & AI Governance",
    description:
      "Securing digital infrastructures, safeguarding AI systems, and building compliance-ready architectures.",
  },
  {
    icon: Users,
    title: "Trusted Across ASEAN",
    description:
      "Trusted by corporates, universities, and government agencies across Singapore and ASEAN as a go-to partner for capability building.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero banner */}
        <section className="section-dark py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              About Metaskills Institute
            </h1>
            <p className="text-white/75 mt-4 text-lg max-w-2xl">
              ASEAN's go-to partner for Agentic AI, Algorithmic Trading, and Cybersecurity capability building.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Metaskills Institute is a next-generation training and advisory institute at the forefront of Agentic AI, Algorithmic Trading, and Cybersecurity. We equip organisations and professionals with the capabilities required to operate in an autonomous, AI-driven economy — where intelligent agents make decisions, cyber resilience determines survival, and financial markets are shaped by algorithms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We go beyond theory. Our programmes integrate technical depth, strategic thinking, and implementation frameworks aligned with enterprise standards. Our master trainers, many with over a decade of experience teaching in local universities and institutions, design the direction and curriculum. This ensures every instructor delivers value rooted in real-world consulting and deployment projects.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Metaskills Institute is a premier Digital Science Institute in Asia that is made up of the most respected and passionate practitioners and leaders, many who are Ph.Ds, in the field of digital science and transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our passion is to support individuals towards Digital Skills Mastery in high job demand areas such as Data Science, Artificial Intelligence, Machine Learning, Web Technologies, amongst others. With over 8 years of practical experience working on bespoke implementations of data driven strategies, our faculty and consultants have developed training programmes and certification standards that are high and relevant for existing and future industries.
              </p>
            </div>
          </div>
        </section>

        {/* Core Areas */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-[1140px] mx-auto px-6 py-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              Our Core Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Languages & Reach
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Our programmes are available in English, Chinese, and Vietnamese — reaching professionals and organisations across Singapore and the wider ASEAN region.
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
