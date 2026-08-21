import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, DollarSign, Award, Wallet, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { courses } from "@/data/courses";
import { getCourseImages } from "@/data/courseImages";
import cloudDevOpsImg from "@/assets/programmes-clouddevops.jpg";
import redHatImg from "@/assets/redhat-subscription.jpg";

type CategoryDef = {
  slug: string;
  name: string;
  intro: string[];
  pathway: { title: string; text: string }[];
  pathwayNote: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
};

const categories: Record<string, CategoryDef> = {
  "cloud-devops-ai-stack": {
    slug: "cloud-devops-ai-stack",
    name: "Cloud, DevOps & AI Stack",
    intro: [
      "Build practical capabilities across enterprise Linux, cloud architecture, Kubernetes, DevOps and the infrastructure supporting modern applications and AI systems.",
      "These programmes combine instructor-led technical instruction, guided hands-on laboratories, troubleshooting exercises and certification-aligned preparation.",
      "Participants may attend an individual programme or combine the courses to develop broader infrastructure, cloud and platform-engineering capabilities.",
    ],
    pathway: [
      {
        title: "Red Hat Enterprise Linux Administration",
        text: "Build the Linux foundation required to manage servers, storage, users, networking, services and system security.",
      },
      {
        title: "AWS Solutions Architecture",
        text: "Develop the ability to design secure, resilient, high-performing and cost-conscious cloud solutions.",
      },
      {
        title: "Kubernetes Administration",
        text: "Develop practical capabilities for managing containerised workloads, Kubernetes clusters, networking, storage and production troubleshooting.",
      },
    ],
    pathwayNote:
      "Participants do not need to complete the programmes in this order. The recommended starting point depends on their existing technical experience and role requirements.",
    image: cloudDevOpsImg,
    seoTitle: "Cloud, DevOps & AI Stack Courses Singapore | Metaskills",
    seoDescription:
      "Explore practical AWS, Kubernetes and Red Hat Linux training programmes covering cloud architecture, DevOps, systems administration and modern infrastructure operations.",
  },
};

const CourseCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categories[slug] : undefined;

  useEffect(() => {
    if (!category) return;
    const prevTitle = document.title;
    document.title = category.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    meta?.setAttribute("content", category.seoDescription);
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 md:pt-[90px]">
          <div className="max-w-[1140px] mx-auto px-6 py-24 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Category not found</h1>
            <Link to="/programmes" className="text-accent underline underline-offset-4">
              Browse all programmes
            </Link>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

  const categoryCourses = courses.filter((c) => c.category === category.name);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        {/* HERO */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
          <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-10 bg-accent" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-white/70 font-medium">
                Programme Category · Metaskills Institute
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight tracking-tight">
              {category.name}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base md:text-lg text-white/75 leading-relaxed">
              {category.intro[0]}
            </p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
          <ol className="max-w-[1140px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/programmes" className="hover:text-accent transition-colors">Programmes</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground/80 font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* INTRO */}
        <section className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-border/40 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {category.intro.slice(1).map((p, i) => (
                <p key={i} className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING PATHWAY */}
        <section className="border-y border-border bg-muted">
          <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-px w-8 bg-accent" />
              <span className="font-body text-[11px] tracking-[0.28em] uppercase text-muted-foreground font-medium">
                Learning Pathway
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">
              Three connected capability layers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.pathway.map((layer, i) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background rounded-sm p-6 border border-border"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-accent" />
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      LAYER {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-snug">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.text}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic leading-relaxed max-w-3xl">
              {category.pathwayNote}
            </p>
          </div>
        </section>

        {/* PROGRAMME CARDS */}
        <section className="max-w-[1140px] mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="font-body text-[11px] tracking-[0.28em] uppercase text-muted-foreground font-medium">
              {String(categoryCourses.length + (category.slug === "cloud-devops-ai-stack" ? 1 : 0)).padStart(2, "0")} Programmes
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">
            Programmes in this category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCourses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col border border-border rounded-sm overflow-hidden bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={getCourseImages(course.slug)[0]}
                    alt={course.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground leading-snug mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.tagline}</p>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 mt-auto">
                    <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" />{course.duration}</li>
                    <li className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 text-primary" />{course.fees.selfSponsored}</li>
                    <li className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-primary" />{course.certificationStatus || "Certification Preparation"}</li>
                    <li className="flex items-center gap-2"><Wallet className="w-3.5 h-3.5 text-primary" />{course.fundingStatus || "Non-SSG-Funded"}</li>
                  </ul>
                  <Link
                    to={`/course/${course.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all"
                  >
                    View Programme <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {category.slug === "cloud-devops-ai-stack" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col border border-accent rounded-sm overflow-hidden bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={redHatImg}
                    alt="Red Hat Learning Subscription – Standard & Premium"
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground leading-snug mb-2">
                    Red Hat Learning Subscription – Standard &amp; Premium
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Get 365-day access to Red Hat’s training catalogue, hands-on labs, certification
                    preparation and certification exam opportunities. Choose Standard for
                    self-directed learning or Premium for live virtual instructor-led classes.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["Red Hat", "Linux", "Cloud", "DevOps", "Certification"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground mb-5 mt-auto">
                    <li className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" />365 days</li>
                    <li className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 text-primary" />Standard (LS220): S$11,600 per participant</li>
                    <li className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 text-primary" />Premium (LS520): S$14,200 per participant</li>
                    <li className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-primary" />Certification Preparation &amp; Exams</li>
                  </ul>
                  <Link
                    to="/programmes/cloud-devops-ai/red-hat-learning-subscription"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all"
                  >
                    View Programme <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default CourseCategoryPage;
