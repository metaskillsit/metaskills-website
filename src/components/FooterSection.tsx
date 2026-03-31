import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/metaskills-logo.jpg";

const FooterSection = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t("footer.programmes"),
      links: [
        { label: t("footer.allProgrammes"), href: "/programmes" },
        { label: t("footer.agenticAI"), href: "/course/agentic-ai-foundations" },
        { label: t("footer.dataScience"), href: "/course/python-programming-for-data-analytics" },
        { label: t("footer.algoTrading"), href: "/course/algorithmic-trading-level-1" },
      ],
    },
    {
      title: t("footer.institute"),
      links: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.faculty"), href: "/faculty" },
        { label: t("footer.partners"), href: "/partners" },
        { label: t("footer.learningSpaces"), href: "/locations" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.admissions"), href: "/admissions" },
        { label: t("footer.courseFeesAndFunding"), href: "/admissions#fees" },
      ],
    },
  ];

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
              {t("footer.tagline")}
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
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-accent transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
