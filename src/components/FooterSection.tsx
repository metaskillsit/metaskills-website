import { Link } from "react-router-dom";
import logo from "@/assets/metaskills-logo.jpg";

const footerLinks = [
  {
    title: "Programmes",
    links: [
      { label: "All Programmes", href: "/programmes" },
      { label: "Agentic AI Workflows", href: "/course/agentic-ai-foundations" },
      { label: "Data Science & Analytics", href: "/course/python-programming-for-data-analytics" },
      { label: "Algorithmic Trading", href: "/course/algorithmic-trading-level-1" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Faculty", href: "/faculty" },
      { label: "Partners", href: "/partners" },
      { label: "Learning Spaces", href: "/locations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Course Fees & Funding", href: "/admissions#fees" },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className="section-dark">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img
              src={logo}
              alt="Metaskills Institute"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              ASEAN's go-to partner for Agentic AI, Algorithmic Trading, and
              Cybersecurity capability building.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Metaskills Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
