import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronRight, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/metaskills-logo.png";

interface NavItem {
  label: string;
  href: string;
}

interface NavCategory {
  label: string;
  href: string;
  subItems: NavItem[];
}

interface NavGroup {
  label: string;
  items?: NavItem[];
  categories?: NavCategory[];
}

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "vi", label: "VI", flag: "🇻🇳" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navGroups: NavGroup[] = [
    {
      label: t("nav.aboutMetaskills"),
      items: [
        { label: t("nav.aboutUs"), href: "/about" },
        { label: t("nav.ourFaculty"), href: "/faculty" },
        { label: t("nav.partners"), href: "/partners" },
        { label: t("nav.ourClients"), href: "/clients" },
        { label: t("nav.learningSpaces"), href: "/locations" },
      ],
    },
    {
      label: t("nav.programmes"),
      categories: [
        {
          label: "Agentic AI Workshop Series",
          href: "/programmes",
          subItems: [
            { label: "Foundations of Agentic AI Workflows", href: "/course/agentic-ai-foundations" },
            { label: "Empowering Agentic AI with LLMs", href: "/course/agentic-ai-use-case" },
            { label: "Deploying & Securing Agentic AI", href: "/course/agentic-ai-deploy-secure-systems" },
          ],
        },
        {
          label: "AI Automation and Agents",
          href: "/programmes",
          subItems: [
            { label: "The Rise of AI Agents in 2026", href: "/course/rise-of-ai-agents-2026" },
            { label: "Build AI Workflows with No Code", href: "/course/build-ai-workflows-no-code" },
            { label: "Design AI Automations Using Plain Language", href: "/course/design-ai-automations-plain-language" },
            { label: "Build Operational Tools with AI Coding Agents", href: "/course/build-operational-tools-ai-coding-agents" },
            { label: "Build Your Own AI Assistant/Agent", href: "/course/build-your-own-ai-assistant" },
            { label: "GPT Your Organisation's Knowledge Base", href: "/course/gpt-your-organisation-knowledge-base" },
            { label: "Secure Your Agentic AI Infrastructure", href: "/course/secure-agentic-ai-infrastructure" },
            { label: "AI for Training Design & Curriculum", href: "/course/ai-training-design-curriculum" },
            { label: "Build AI Tutors with Adaptive Learning", href: "/course/build-ai-tutors-adaptive-learning" },
          ],
        },
        {
          label: "Data Science & Analytics",
          href: "/programmes",
          subItems: [
            { label: "Python Programming For Data Analytics", href: "/course/python-programming-for-data-analytics" },
            { label: "Certified Data Analyst — JCube", href: "/course/certified-data-analyst" },
            { label: "Certified Data Scientist — JCube", href: "/course/certified-data-scientist" },
          ],
        },
        {
          label: "Fintech & Algorithmic Trading",
          href: "/programmes",
          subItems: [
            { label: "Algorithmic Trading — Level 1", href: "/course/algorithmic-trading-level-1" },
            { label: "Algorithmic Trading — Level 2", href: "/course/algorithmic-trading-level-2" },
          ],
        },
        {
          label: "Cyber Defence",
          href: "/programmes",
          subItems: [
            { label: "Cybersecurity: Roles, Threats & Pathways", href: "/course/cybersecurity-roles-threats-pathways" },
          ],
        },
        {
          label: "AI Leadership & Governance",
          href: "/programmes",
          subItems: [
            { label: "AI Strategy and Roadmap for Leaders", href: "/course/ai-strategy-roadmap-leaders" },
            { label: "Who Is Accountable When AI Decides?", href: "/course/ai-accountability-when-ai-decides" },
            { label: "Governing AI Agents: Trust & Boundaries", href: "/course/governing-ai-agents-trust-boundaries" },
            { label: "AI Wargaming: Test Decisions", href: "/course/ai-wargaming-test-decisions" },
          ],
        },
        {
          label: "MCC+ Cyber Defence Certification",
          href: "/programmes",
          subItems: [
            { label: "MCC+ Cyber Defence Foundation (4 Days)", href: "/course/mcc-plus-cyber-defence-foundation" },
            { label: "MCC+ Security Operations (Security+)", href: "/course/mcc-plus-security-operations" },
            { label: "MCC+ Threat Hunting (CySA+)", href: "/course/mcc-plus-threat-hunting-blue-team" },
            { label: "MCC+ Offensive Cyber (CEH)", href: "/course/mcc-plus-offensive-cyber-fundamentals" },
            { label: "MCC+ Digital Forensics (CHFI)", href: "/course/mcc-plus-digital-forensics" },
            { label: "MCC+ AI Security (SecAI)", href: "/course/mcc-plus-ai-security-autonomous-defence" },
          ],
        },
      ],
    },
    {
      label: t("nav.admissions"),
      items: [
        { label: t("nav.howToApply"), href: "/admissions" },
        { label: t("nav.courseFeesAndFunding"), href: "/admissions#fees" },
      ],
    },
  ];

  const topNavItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.programmes"), href: "/programmes" },
    { label: t("nav.faculty"), href: "/faculty" },
    { label: t("nav.admissions"), href: "/admissions" },
  ];

  const toggleCategory = (label: string) => {
    setExpandedCategory((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between h-16 md:h-[70px]">
          <div className="flex items-center gap-4">
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Metaskills Institute" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-7">
            {topNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === item.href ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="text-foreground/50 hover:text-primary transition-colors ml-2">
              <Search size={18} />
            </button>

            {/* Language selector - desktop */}
            <div ref={langRef} className="relative ml-1">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/70 hover:text-primary transition-colors"
                aria-label="Select language"
              >
                <Globe size={16} />
                <span>{currentLang.flag} {currentLang.label}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[140px] animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 h-16 md:h-[70px] border-b border-border">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src={logo} alt="Metaskills Institute" className="h-10 w-auto object-contain" />
                </Link>
                <button onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">
                  <X size={22} />
                </button>
              </div>

              <div className="px-6 py-8 space-y-8">
                {navGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      {group.label}
                    </h3>

                    {group.items && (
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={() => setMenuOpen(false)}
                              className={`flex items-center justify-between py-2.5 px-3 rounded-sm text-sm transition-colors group ${
                                location.pathname === item.href
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-foreground/80 hover:bg-muted hover:text-primary"
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {group.categories && (
                      <ul className="space-y-1">
                        <li>
                          <Link
                            to="/programmes"
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center justify-between py-2.5 px-3 rounded-sm text-sm transition-colors group ${
                              location.pathname === "/programmes"
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-foreground/80 hover:bg-muted hover:text-primary"
                            }`}
                          >
                            <span>{t("nav.allProgrammes")}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                          </Link>
                        </li>

                        {group.categories.map((cat) => {
                          const isExpanded = expandedCategory === cat.label;
                          return (
                            <li key={cat.label}>
                              <button
                                onClick={() => toggleCategory(cat.label)}
                                className="w-full flex items-center justify-between py-2.5 px-3 rounded-sm text-sm transition-colors text-foreground/80 hover:bg-muted hover:text-primary"
                              >
                                <span className="font-medium">{cat.label}</span>
                                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                </motion.div>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    {cat.subItems.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          to={sub.href}
                                          onClick={() => setMenuOpen(false)}
                                          className={`flex items-center gap-2 py-2 pl-7 pr-3 text-[13px] transition-colors group ${
                                            location.pathname === sub.href
                                              ? "text-primary font-medium"
                                              : "text-muted-foreground hover:text-primary"
                                          }`}
                                        >
                                          <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                                          <span>{sub.label}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 border-t border-border">
                <Link
                  to="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-primary text-primary-foreground text-center font-semibold rounded-sm text-sm hover:brightness-110 transition-all"
                >
                  {t("nav.enquireNow")}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
