import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Mail, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WHATSAPP_URL = "https://wa.me/6589483482?text=Hi%20I%27m%20interested%20in%20your%20AI%20training%20and%20solutions.";

const categories = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLM & Foundation Models" },
  { id: "automation", label: "AI Automation" },
  { id: "coding", label: "AI Coding & Dev" },
  { id: "research", label: "AI Research Tools" },
  { id: "video", label: "AI Video & Content" },
  { id: "cloud", label: "Cloud AI" },
  { id: "cyber", label: "Cybersecurity AI" },
];

interface Course {
  title: string;
  vendor: string;
  price: string;
  originalPrice?: string;
  category: string;
  categoryLabel: string;
  description: string;
  skillsFuture: boolean;
}

const courses: Course[] = [
  // LLM & Foundation Models
  { title: "Mastering ChatGPT for Professional Productivity", vendor: "OpenAI", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Unlock advanced ChatGPT techniques for workplace efficiency and decision-making.", skillsFuture: true },
  { title: "Claude AI for Enterprise Writing & Analysis", vendor: "Anthropic", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Leverage Claude's analytical capabilities for enterprise-grade writing and research.", skillsFuture: true },
  { title: "Google Gemini: AI for the Google Workspace Professional", vendor: "Google", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Integrate Gemini AI across Google Workspace for enhanced productivity.", skillsFuture: true },
  { title: "DeepSeek AI: China's Open-Source LLM for Business", vendor: "DeepSeek", price: "S$588", category: "llm", categoryLabel: "LLM", description: "Explore DeepSeek's open-source capabilities for bilingual business applications.", skillsFuture: false },
  { title: "Grok AI: Real-Time Intelligence & Reasoning", vendor: "xAI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Harness Grok's real-time data access and advanced reasoning for strategic insights.", skillsFuture: false },
  { title: "Run AI Locally: Private LLMs with Ollama", vendor: "Ollama", price: "S$888", category: "llm", categoryLabel: "LLM", description: "Deploy and run large language models locally for maximum privacy and control.", skillsFuture: true },
  { title: "Blazing-Fast AI Inference with Groq", vendor: "Groq", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Experience ultra-fast AI inference using Groq's LPU-powered architecture.", skillsFuture: false },
  { title: "OpenRouter: One API for All LLMs", vendor: "OpenRouter", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Access and compare multiple LLMs through a single unified API gateway.", skillsFuture: false },
  { title: "GLM: China's Leading LLM for Bilingual AI Work", vendor: "Zhipu AI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Master GLM for Chinese-English bilingual AI applications in enterprise settings.", skillsFuture: false },
  { title: "Doubao AI: ByteDance's LLM for Content & Business", vendor: "ByteDance", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Leverage ByteDance's Doubao for content generation and business intelligence.", skillsFuture: false },
  { title: "Kimi AI: Long-Context LLM for Research & Documents", vendor: "Moonshot AI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Process lengthy documents and research papers with Kimi's extended context window.", skillsFuture: false },

  // AI Automation
  { title: "Build AI Workflows with n8n: No-Code Automation", vendor: "n8n", price: "S$988", category: "automation", categoryLabel: "Automation", description: "Create powerful AI-driven automations without writing a single line of code.", skillsFuture: true },
  { title: "Zapier AI: Automate Your Entire Workflow in a Day", vendor: "Zapier", price: "S$788", category: "automation", categoryLabel: "Automation", description: "Connect and automate 6,000+ apps with Zapier's AI-enhanced workflow builder.", skillsFuture: true },
  { title: "Make.com: Visual AI Automation for Business Teams", vendor: "Make", price: "S$788", category: "automation", categoryLabel: "Automation", description: "Design complex multi-step automations with Make's visual drag-and-drop builder.", skillsFuture: true },

  // AI Coding & Dev
  { title: "Cursor AI: Code Smarter, Ship Faster", vendor: "Cursor", price: "S$988", category: "coding", categoryLabel: "Coding", description: "Accelerate software development with Cursor's AI-first code editor.", skillsFuture: true },
  { title: "GitHub Copilot: AI-Assisted Coding for Developers", vendor: "GitHub", price: "S$888", category: "coding", categoryLabel: "Coding", description: "Boost developer productivity with GitHub Copilot's contextual code suggestions.", skillsFuture: true },
  { title: "Microsoft Copilot: AI for the Modern Workplace", vendor: "Microsoft", price: "S$888", category: "coding", categoryLabel: "Coding", description: "Transform workplace productivity with Microsoft 365 Copilot integration.", skillsFuture: true },
  { title: "Lovable: Build Web Apps with AI, No Code Needed", vendor: "Lovable", price: "S$788", category: "coding", categoryLabel: "Coding", description: "Ship production-ready web applications using AI-powered development.", skillsFuture: true },
  { title: "Vercel AI SDK: Deploy AI-Powered Web Apps", vendor: "Vercel", price: "S$988", category: "coding", categoryLabel: "Coding", description: "Build and deploy AI-enhanced web applications with Vercel's AI SDK.", skillsFuture: true },

  // AI Research
  { title: "NotebookLM: AI Research Assistant for Knowledge Workers", vendor: "Google", price: "S$588", category: "research", categoryLabel: "Research", description: "Transform your research workflow with Google's AI-powered notebook assistant.", skillsFuture: true },
  { title: "Perplexity AI: AI-Powered Research for Professionals", vendor: "Perplexity", price: "S$588", category: "research", categoryLabel: "Research", description: "Conduct deep, cited research using Perplexity's conversational AI engine.", skillsFuture: true },
  { title: "Hugging Face: Explore, Fine-Tune & Deploy Open AI Models", vendor: "Hugging Face", price: "S$1,088", category: "research", categoryLabel: "Research", description: "Navigate the open-source AI ecosystem and deploy custom models.", skillsFuture: true },

  // AI Video & Content
  { title: "CapCut AI: Video Editing & Content Creation Masterclass", vendor: "CapCut", price: "S$488", category: "video", categoryLabel: "Video", description: "Create professional video content using CapCut's AI-powered editing tools.", skillsFuture: false },
  { title: "Veo 3: AI Video Generation for Creators & Marketers", vendor: "Google", price: "S$888", category: "video", categoryLabel: "Video", description: "Generate cinematic AI videos with Google's latest Veo 3 model.", skillsFuture: true },
  { title: "Higgsfield AI: Cinematic Video Generation Workshop", vendor: "Higgsfield", price: "S$688", category: "video", categoryLabel: "Video", description: "Produce high-quality cinematic videos using Higgsfield's AI generation platform.", skillsFuture: false },
  { title: "Seedance: AI Motion & Video Creation", vendor: "Seedance", price: "S$588", category: "video", categoryLabel: "Video", description: "Create dynamic motion graphics and videos with Seedance AI.", skillsFuture: false },
  { title: "OpenClaw: AI-Powered Visual Content Automation", vendor: "OpenClaw", price: "S$588", category: "video", categoryLabel: "Video", description: "Automate visual content production at scale with OpenClaw's AI pipeline.", skillsFuture: false },

  // Cloud AI
  { title: "AWS AI Services: Build & Deploy Machine Learning Solutions", vendor: "AWS", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Design and deploy ML solutions using Amazon's comprehensive AI service suite.", skillsFuture: true },
  { title: "Azure AI: Deploying AI Solutions on Microsoft Cloud", vendor: "Microsoft", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Build enterprise AI applications on Microsoft Azure's cloud platform.", skillsFuture: true },
  { title: "Google Cloud AI: Vertex AI & Generative AI on GCP", vendor: "Google", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Leverage Vertex AI and generative AI capabilities on Google Cloud Platform.", skillsFuture: true },
  { title: "Apple AI: On-Device Intelligence for iOS Developers", vendor: "Apple", price: "S$788", category: "cloud", categoryLabel: "Cloud", description: "Integrate on-device AI and Apple Intelligence into iOS applications.", skillsFuture: false },

  // Cybersecurity AI
  { title: "Ethical Hacking Fundamentals (CEH-Aligned, 1-Day Intro)", vendor: "EC-Council", price: "S$988", category: "cyber", categoryLabel: "Cyber", description: "Introduction to ethical hacking methodologies aligned with CEH certification.", skillsFuture: true },
  { title: "CompTIA Security Essentials: A 1-Day Orientation", vendor: "CompTIA", price: "S$888", category: "cyber", categoryLabel: "Cyber", description: "Foundation-level cybersecurity orientation aligned with CompTIA Security+.", skillsFuture: true },
];

const bundles = [
  {
    name: "Automation Trio",
    tools: "n8n + Make + Zapier AI",
    original: "S$2,564",
    bundle: "S$2,180",
  },
  {
    name: "LLM Essentials Pack",
    tools: "ChatGPT + Claude + Gemini",
    original: "S$2,064",
    bundle: "S$1,755",
  },
  {
    name: "AI Dev Accelerator",
    tools: "Cursor + GitHub Copilot + Lovable",
    original: "S$2,664",
    bundle: "S$2,265",
  },
];

const faqs = [
  {
    q: "Do I need prior AI experience to attend?",
    a: "No prior AI experience is required. Our 1-day masterclasses are designed for professionals at all levels. Each course starts with foundational concepts before progressing to hands-on application.",
  },
  {
    q: "Are courses available online or only in-person?",
    a: "Most courses are available both in-person at our Singapore campus and online via live virtual classroom. Check individual course listings for delivery options.",
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes, all participants receive a Certificate of Completion from Metaskills Institute upon finishing the course, which can be added to your LinkedIn profile.",
  },
  {
    q: "How do I use my SkillsFuture Credit?",
    a: "Eligible Singaporeans aged 25 and above can claim SkillsFuture Credit on supported courses. Simply select the course on the MySkillsFuture portal and submit your claim. We'll guide you through the process.",
  },
  {
    q: "Can I attend multiple courses in the same week?",
    a: "Absolutely. Each course is a standalone 1-day intensive, so you can stack multiple courses across a week to build a comprehensive AI skill set.",
  },
  {
    q: "Is the course content kept up to date with the latest tool versions?",
    a: "Yes. Our curriculum is reviewed and updated before every cohort to reflect the latest features, updates, and best practices for each AI tool.",
  },
];

const AIStackPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredCourses = activeFilter === "all" ? courses : courses.filter((c) => c.category === activeFilter);

  const scrollToCourses = () => {
    document.getElementById("course-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0D1B2A] pt-28 md:pt-36 pb-16 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            AI Stack Masterclasses
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#C9A84C] mb-6">
            1-Day Intensive Courses — Learn Any AI Tool in a Single Day
          </p>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Metaskills Institute offers focused, hands-on 1-day workshops on every major AI tool and platform.
            Each course is delivered by industry practitioners. Suitable for professionals, managers, and teams
            looking to master specific AI stacks fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToCourses}
              className="px-8 py-3 bg-[#C9A84C] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#b8963f] transition-colors"
            >
              Browse All Courses
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp to Enquire
            </a>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 md:top-[90px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "bg-[#C9A84C] text-[#0D1B2A]"
                    : "bg-transparent border border-gray-300 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COURSE GRID */}
      <section id="course-grid" className="bg-[#F8F8F6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-gray-500">{filteredCourses.length} courses found</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#F4F4F2] rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full">
                    {course.categoryLabel}
                  </span>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-[10px] text-gray-400 font-medium">
                    {course.vendor}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-[13px] text-gray-500 mb-4 flex-grow">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                    1 Day | 9am – 5pm
                  </span>
                  <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                    Classroom | Online Available
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#C9A84C]">{course.price}</span>
                  {course.skillsFuture && (
                    <span className="text-[11px] font-semibold bg-green-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle size={12} /> SkillsFuture
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2.5 bg-[#C9A84C] text-[#0D1B2A] text-sm font-semibold rounded-lg hover:bg-[#b8963f] transition-colors"
                  >
                    Enquire
                  </a>
                  <button className="flex-1 text-center px-4 py-2.5 border-2 border-[#C9A84C] text-[#C9A84C] text-sm font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLSFUTURE BANNER */}
      <section className="bg-[#C9A84C] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
            SkillsFuture Credit Accepted
          </h2>
          <p className="text-[#0D1B2A]/80 mb-6 max-w-2xl mx-auto">
            Singaporeans aged 25 and above can use their SkillsFuture Credit to offset course fees.
            Eligible courses are marked with the SkillsFuture badge.
          </p>
          <a
            href="https://www.myskillsfuture.gov.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#1a2d42] transition-colors"
          >
            Check Your Credit Balance
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* BUNDLE DEALS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-3">
            Stack Bundles — Save 15%
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Combine related courses and save on your upskilling investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle, idx) => (
              <div
                key={idx}
                className="bg-[#F4F4F2] rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{bundle.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{bundle.tools}</p>
                <div className="mb-6">
                  <span className="text-sm text-gray-400 line-through mr-2">{bundle.original}</span>
                  <span className="text-2xl font-bold text-[#C9A84C]">{bundle.bundle}</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-6 py-3 bg-[#C9A84C] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#b8963f] transition-colors"
                >
                  Enquire About Bundle
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Training Your Whole Team?
          </h2>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            We deliver any of these 1-day stack courses as private in-house workshops for your organisation.
            Up to 20 participants per session. Fully customisable content and delivery format.
          </p>
          <p className="text-[#C9A84C] font-semibold text-lg mb-8">
            From S$3,500 per day (group rate)
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#b8963f] transition-colors"
          >
            <MessageCircle size={18} />
            Request a Corporate Quote
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[#1A1A1A] pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-[#C9A84C] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#C9A84C] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure which course to start with?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Chat with our AI specialists on WhatsApp — we'll recommend the right stack course based on your role and goals.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#b8963f] transition-colors mb-8"
          >
            <MessageCircle size={18} />
            Chat with a Specialist
          </a>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white font-bold text-lg">Metaskills Institute</p>
            <p className="text-[#C9A84C] text-sm mt-1">The AI Institute for Asia</p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AIStackPage;
