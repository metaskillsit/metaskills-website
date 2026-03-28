import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const benefits = [
  "Industry-recognised certifications in Agentic AI and Applied Data Science",
  "Practical, project-based curriculum designed by master trainers",
  "Access to Singapore's growing AI and digital innovation ecosystem",
  "Alumni events and industry partnership opportunities",
  "Programmes endorsed by faculty teaching at universities and government agencies",
  "Available in English, Khmer, Thai, and Vietnamese",
];

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-[1140px] mx-auto px-6">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Admissions
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg max-w-xl">
              Join a community of forward-thinking professionals building real-world AI capabilities.
            </p>
          </div>
        </section>

        <section className="max-w-[1140px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Join Metaskills
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>

              <div id="fees" className="mt-12 pt-8 border-t border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Course Fees & Funding
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our course fees are exempt from GST. We offer both self-sponsored and corporate rates. For detailed pricing, please refer to the individual course pages or contact our admissions team.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Cancellation Policy:</strong> Up to 30 days before: Full refund minus SGD 900 processing fee. 30 days or less: No refund. Substitutions allowed up to 3 days before the programme start date.
                </p>
              </div>
            </motion.div>

            {/* Right - form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-sm p-8 border border-border sticky top-24"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Request Information
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Programme of Interest</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a programme</option>
                    <option>Foundations of Agentic AI Workflows</option>
                    <option>Empowering Agentic AI with LLMs</option>
                    <option>Deploying & Securing Agentic AI Systems</option>
                    <option>Python Programming For Data Analytics</option>
                    <option>Certified Data Analyst</option>
                    <option>Certified Data Scientist</option>
                    <option>Algorithmic Trading</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm text-sm uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AdmissionsPage;
