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
  const [labsOpen, setLabsOpen] = useState(false);
  const labsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const langRefMobile = useRef<HTMLDivElement>(null);
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
          label: t("programmes.vibeCodingTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.vibeCodingDigitalBuilders.title"), href: "/course/vibe-coding-for-digital-builders" },
          ],
        },
        {
          label: t("programmes.agenticTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.agenticFoundations.title"), href: "/course/agentic-ai-foundations" },
            { label: t("courses.agenticUseCase.title"), href: "/course/agentic-ai-use-case" },
            { label: t("courses.agenticDeploy.title"), href: "/course/agentic-ai-deploy-secure-systems" },
          ],
        },
        {
          label: t("programmes.aiAutoTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.riseAiAgents.title"), href: "/course/rise-of-ai-agents-2026" },
            { label: t("courses.buildAiNoCode.title"), href: "/course/build-ai-workflows-no-code" },
            { label: t("courses.designAiPlainLang.title"), href: "/course/design-ai-automations-plain-language" },
            { label: t("courses.buildOpTools.title"), href: "/course/build-operational-tools-ai-coding-agents" },
            { label: t("courses.buildAiAssistant.title"), href: "/course/build-your-own-ai-assistant" },
            { label: t("courses.gptKnowledgeBase.title"), href: "/course/gpt-your-organisation-knowledge-base" },
            { label: t("courses.secureAgenticInfra.title"), href: "/course/secure-agentic-ai-infrastructure" },
            { label: t("courses.aiTrainingDesign.title"), href: "/course/ai-training-design-curriculum" },
            { label: t("courses.buildAiTutors.title"), href: "/course/build-ai-tutors-adaptive-learning" },
          ],
        },
        {
          label: t("programmes.dataTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.pythonDataAnalytics.title"), href: "/course/python-programming-for-data-analytics" },
            { label: t("courses.certifiedDataAnalyst.title"), href: "/course/certified-data-analyst" },
            { label: t("courses.certifiedDataScientist.title"), href: "/course/certified-data-scientist" },
          ],
        },
        {
          label: t("programmes.fintechTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.algoTradingL1.title"), href: "/course/algorithmic-trading-level-1" },
            { label: t("courses.algoTradingL2.title"), href: "/course/algorithmic-trading-level-2" },
          ],
        },
        {
          label: t("programmes.cyberTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.cyberRolesThreats.title"), href: "/course/cybersecurity-roles-threats-pathways" },
          ],
        },
        {
          label: t("programmes.aiLeadTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.aiStrategyLeaders.title"), href: "/course/ai-strategy-roadmap-leaders" },
            { label: t("courses.aiAccountability.title"), href: "/course/ai-accountability-when-ai-decides" },
            { label: t("courses.governingAiAgents.title"), href: "/course/governing-ai-agents-trust-boundaries" },
            { label: t("courses.aiWargaming.title"), href: "/course/ai-wargaming-test-decisions" },
          ],
        },
        {
          label: t("programmes.mccTitle"),
          href: "/programmes",
          subItems: [
            { label: t("courses.mccFoundation.title"), href: "/course/mcc-plus-cyber-defence-foundation" },
            { label: t("courses.mccSecurityOps.title"), href: "/course/mcc-plus-security-operations" },
            { label: t("courses.mccThreatHunting.title"), href: "/course/mcc-plus-threat-hunting-blue-team" },
            { label: t("courses.mccOffensiveCyber.title"), href: "/course/mcc-plus-offensive-cyber-fundamentals" },
            { label: t("courses.mccDigitalForensics.title"), href: "/course/mcc-plus-digital-forensics" },
            { label: t("courses.mccAiSecurity.title"), href: "/course/mcc-plus-ai-security-autonomous-defence" },
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
    {
      label: t("nav.msiLiveLabs"),
      items: [
        { label: t("nav.agenticAIGovernance"), href: "/agentic-ai-governance" },
      ],
    },
  ];

  const topNavItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.programmes"), href: "/programmes" },
    { label: t("nav.faculty"), href: "/faculty" },
    { label: t("nav.admissions"), href: "/admissions" },
  ];

  const contactItem = { label: t("nav.contact", "Contact"), href: "/locations" };

  const toggleCategory = (label: string) => {
    setExpandedCategory((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        langRef.current && !langRef.current.contains(e.target as Node) &&
        langRefMobile.current && !langRefMobile.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
      if (labsRef.current && !labsRef.current.contains(e.target as Node)) {
        setLabsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const resolvedLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const currentLang = languages.find((l) => l.code === resolvedLang) || languages[0];

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

          {/* Mobile language selector */}
          <div className="lg:hidden relative" ref={langRefMobile}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs font-medium text-foreground/70 hover:text-primary transition-colors"
              aria-label="Select language"
            >
              <Globe size={15} />
              <span>{currentLang.flag}</span>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[130px] animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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

            {/* MSI Live Labs dropdown */}
            <div ref={labsRef} className="relative">
              <button
                onClick={() => setLabsOpen(!labsOpen)}
                className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === "/agentic-ai-governance" ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                <span>{t("nav.msiLiveLabs")}</span>
                <ChevronDown size={14} />
              </button>
              {labsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[260px] animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <Link
                    to="/agentic-ai-governance"
                    onClick={() => setLabsOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      location.pathname === "/agentic-ai-governance"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {t("nav.agenticAIGovernance")}
                  </Link>
                </div>
              )}
            </div>
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
