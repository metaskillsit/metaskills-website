import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

// Logo imports
import openaiLogo from "@/assets/techlogos/openai.svg";
import anthropicLogo from "@/assets/techlogos/anthropic.svg";
import geminiLogo from "@/assets/techlogos/gemini.svg";
import deepseekLogo from "@/assets/techlogos/deepseek.png";
import grokLogo from "@/assets/techlogos/grok.png";
import ollamaLogo from "@/assets/techlogos/ollama.png";
import groqLogo from "@/assets/techlogos/groq.png";
import openrouterLogo from "@/assets/techlogos/openrouter.png";
import glmLogo from "@/assets/techlogos/glm.png";
import doubaoLogo from "@/assets/techlogos/doubao2.png";
import kimiLogo from "@/assets/techlogos/kimi.png";
import n8nLogo from "@/assets/techlogos/n8n.png";
import zapierLogo from "@/assets/techlogos/zapier.svg";
import makeLogo from "@/assets/techlogos/make2.png";
import cursorLogo from "@/assets/techlogos/cursor.png";
import githubLogo from "@/assets/techlogos/github.svg";
import copilotLogo from "@/assets/techlogos/copilot.jpg";
import lovableLogo from "@/assets/techlogos/lovable.png";
import vercelLogo from "@/assets/techlogos/vercel.svg";
import notebooklmLogo from "@/assets/techlogos/notebooklm.png";
import perplexityLogo from "@/assets/techlogos/perplexity.svg";
import huggingfaceLogo from "@/assets/techlogos/huggingface.svg";
import capcutLogo from "@/assets/techlogos/capcut.png";
import veo3Logo from "@/assets/techlogos/veo3.png";
import higgsfieldLogo from "@/assets/techlogos/higgsfield.png";
import seedanceLogo from "@/assets/techlogos/seedance.png";
import openclawLogo from "@/assets/techlogos/openclaw.png";

const WHATSAPP_URL = "https://wa.me/6589483482?text=Hi%20I%27m%20interested%20in%20your%20AI%20training%20and%20solutions.";

const vendorLogos: Record<string, string> = {
  "OpenAI": openaiLogo,
  "Anthropic": anthropicLogo,
  "Google": geminiLogo,
  "DeepSeek": deepseekLogo,
  "xAI": grokLogo,
  "Ollama": ollamaLogo,
  "Groq": groqLogo,
  "OpenRouter": openrouterLogo,
  "Zhipu AI": glmLogo,
  "ByteDance": doubaoLogo,
  "Moonshot AI": kimiLogo,
  "n8n": n8nLogo,
  "Zapier": zapierLogo,
  "Make": makeLogo,
  "Cursor": cursorLogo,
  "GitHub": githubLogo,
  "Microsoft": copilotLogo,
  "Lovable": lovableLogo,
  "Vercel": vercelLogo,
  "Perplexity": perplexityLogo,
  "Hugging Face": huggingfaceLogo,
  "CapCut": capcutLogo,
  "Higgsfield": higgsfieldLogo,
  "Seedance": seedanceLogo,
  "OpenClaw": openclawLogo,
  "AWS": undefined as unknown as string,
  "Apple": undefined as unknown as string,
};

// Special handling for courses with Google as vendor but different logos
const courseLogoOverrides: Record<string, string> = {
  "Google Gemini: AI for the Google Workspace Professional": geminiLogo,
  "NotebookLM: AI Research Assistant for Knowledge Workers": notebooklmLogo,
  "Veo 3: AI Video Generation for Creators & Marketers": veo3Logo,
  "Google Cloud AI: Vertex AI & Generative AI on GCP": geminiLogo,
};

const categories = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLM & Foundation Models" },
  { id: "automation", label: "AI Automation" },
  { id: "coding", label: "AI Coding & Dev" },
  { id: "research", label: "AI Research Tools" },
  { id: "video", label: "AI Video & Content" },
  { id: "cloud", label: "Cloud AI" },
];

interface Course {
  title: string;
  vendor: string;
  price: string;
  originalPrice?: string;
  category: string;
  categoryLabel: string;
  description: string;
}

const hotCourses = new Set([
  "OpenClaw: Agentic AI / Personal AI Agent",
  "Lovable: Build Web Apps with AI, No Code Needed",
]);

const courses: Course[] = [
  // 🔥 Hot — pinned to top
  { title: "OpenClaw: Agentic AI / Personal AI Agent", vendor: "OpenClaw", price: "S$588", category: "automation", categoryLabel: "Automation", description: "Deploy a local, open-source AI agent that connects any LLM to your apps, files, browser, and messaging channels — and works for you around the clock." },
  { title: "Lovable: Build Web Apps with AI, No Code Needed", vendor: "Lovable", price: "S$788", category: "coding", categoryLabel: "Coding", description: "Ship production-ready web applications using AI-powered development." },

  // LLM & Foundation Models
  { title: "Mastering ChatGPT for Professional Productivity", vendor: "OpenAI", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Unlock advanced ChatGPT techniques for workplace efficiency and decision-making." },
  { title: "Claude AI for Enterprise Writing & Analysis", vendor: "Anthropic", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Leverage Claude's analytical capabilities for enterprise-grade writing and research." },
  { title: "Google Gemini: AI for the Google Workspace Professional", vendor: "Google", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Integrate Gemini AI across Google Workspace for enhanced productivity." },
  { title: "DeepSeek AI: China's Open-Source LLM for Business", vendor: "DeepSeek", price: "S$588", category: "llm", categoryLabel: "LLM", description: "Explore DeepSeek's open-source capabilities for bilingual business applications." },
  { title: "Grok AI: Real-Time Intelligence & Reasoning", vendor: "xAI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Harness Grok's real-time data access and advanced reasoning for strategic insights." },
  { title: "Run AI Locally: Private LLMs with Ollama", vendor: "Ollama", price: "S$888", category: "llm", categoryLabel: "LLM", description: "Deploy and run large language models locally for maximum privacy and control." },
  { title: "Blazing-Fast AI Inference with Groq", vendor: "Groq", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Experience ultra-fast AI inference using Groq's LPU-powered architecture." },
  { title: "OpenRouter: One API for All LLMs", vendor: "OpenRouter", price: "S$688", category: "llm", categoryLabel: "LLM", description: "Access and compare multiple LLMs through a single unified API gateway." },
  { title: "GLM: China's Leading LLM for Bilingual AI Work", vendor: "Zhipu AI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Master GLM for Chinese-English bilingual AI applications in enterprise settings." },
  { title: "Doubao AI: ByteDance's LLM for Content & Business", vendor: "ByteDance", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Leverage ByteDance's Doubao for content generation and business intelligence." },
  { title: "Kimi AI: Long-Context LLM for Research & Documents", vendor: "Moonshot AI", price: "S$488", category: "llm", categoryLabel: "LLM", description: "Process lengthy documents and research papers with Kimi's extended context window." },

  // AI Automation
  { title: "Build AI Workflows with n8n: No-Code Automation", vendor: "n8n", price: "S$988", category: "automation", categoryLabel: "Automation", description: "Create powerful AI-driven automations without writing a single line of code." },
  { title: "Zapier AI: Automate Your Entire Workflow in a Day", vendor: "Zapier", price: "S$788", category: "automation", categoryLabel: "Automation", description: "Connect and automate 6,000+ apps with Zapier's AI-enhanced workflow builder." },
  { title: "Make.com: Visual AI Automation for Business Teams", vendor: "Make", price: "S$788", category: "automation", categoryLabel: "Automation", description: "Design complex multi-step automations with Make's visual drag-and-drop builder." },

  // AI Coding & Dev
  { title: "Cursor AI: Code Smarter, Ship Faster", vendor: "Cursor", price: "S$988", category: "coding", categoryLabel: "Coding", description: "Accelerate software development with Cursor's AI-first code editor." },
  { title: "GitHub Copilot: AI-Assisted Coding for Developers", vendor: "GitHub", price: "S$888", category: "coding", categoryLabel: "Coding", description: "Boost developer productivity with GitHub Copilot's contextual code suggestions." },
  { title: "Microsoft Copilot: AI for the Modern Workplace", vendor: "Microsoft", price: "S$888", category: "coding", categoryLabel: "Coding", description: "Transform workplace productivity with Microsoft 365 Copilot integration." },
  { title: "Vercel AI SDK: Deploy AI-Powered Web Apps", vendor: "Vercel", price: "S$988", category: "coding", categoryLabel: "Coding", description: "Build and deploy AI-enhanced web applications with Vercel's AI SDK." },

  // AI Research
  { title: "NotebookLM: AI Research Assistant for Knowledge Workers", vendor: "Google", price: "S$588", category: "research", categoryLabel: "Research", description: "Transform your research workflow with Google's AI-powered notebook assistant." },
  { title: "Perplexity AI: AI-Powered Research for Professionals", vendor: "Perplexity", price: "S$588", category: "research", categoryLabel: "Research", description: "Conduct deep, cited research using Perplexity's conversational AI engine." },
  { title: "Hugging Face: Explore, Fine-Tune & Deploy Open AI Models", vendor: "Hugging Face", price: "S$1,088", category: "research", categoryLabel: "Research", description: "Navigate the open-source AI ecosystem and deploy custom models." },

  // AI Video & Content
  { title: "CapCut AI: Video Editing & Content Creation Masterclass", vendor: "CapCut", price: "S$488", category: "video", categoryLabel: "Video", description: "Create professional video content using CapCut's AI-powered editing tools." },
  { title: "Veo 3: AI Video Generation for Creators & Marketers", vendor: "Google", price: "S$888", category: "video", categoryLabel: "Video", description: "Generate cinematic AI videos with Google's latest Veo 3 model." },
  { title: "Higgsfield AI: Cinematic Video Generation Workshop", vendor: "Higgsfield", price: "S$688", category: "video", categoryLabel: "Video", description: "Produce high-quality cinematic videos using Higgsfield's AI generation platform." },
  { title: "Seedance: AI Motion & Video Creation", vendor: "Seedance", price: "S$588", category: "video", categoryLabel: "Video", description: "Create dynamic motion graphics and videos with Seedance AI." },

  // Cloud AI
  { title: "AWS AI Services: Build & Deploy Machine Learning Solutions", vendor: "AWS", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Design and deploy ML solutions using Amazon's comprehensive AI service suite." },
  { title: "Azure AI: Deploying AI Solutions on Microsoft Cloud", vendor: "Microsoft", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Build enterprise AI applications on Microsoft Azure's cloud platform." },
  { title: "Google Cloud AI: Vertex AI & Generative AI on GCP", vendor: "Google", price: "S$1,088", category: "cloud", categoryLabel: "Cloud", description: "Leverage Vertex AI and generative AI capabilities on Google Cloud Platform." },
  { title: "Apple AI: On-Device Intelligence for iOS Developers", vendor: "Apple", price: "S$788", category: "cloud", categoryLabel: "Cloud", description: "Integrate on-device AI and Apple Intelligence into iOS applications." },
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
    a: "No prior AI experience is required. Our 1-day courses are designed for professionals at all levels. Each course starts with foundational concepts before progressing to hands-on application.",
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes, all participants receive a Certificate of Completion from Metaskills Institute upon finishing the course, which can be added to your LinkedIn profile.",
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

const getCourseLogo = (course: Course): string | null => {
  if (courseLogoOverrides[course.title]) return courseLogoOverrides[course.title];
  return vendorLogos[course.vendor] || null;
};

const AIStackPage = () => {
  useTranslation();
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
            AI Stack Training
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
            {filteredCourses.map((course, idx) => {
              const logo = getCourseLogo(course);
              return (
                <div
                  key={idx}
                  className="bg-[#F4F4F2] rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full">
                      {course.categoryLabel}
                    </span>
                    {hotCourses.has(course.title) && (
                      <span className="inline-block bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                        🔥 Hot
                      </span>
                    )}
                    {logo ? (
                      <img src={logo} alt={course.vendor} className="w-10 h-10 object-contain rounded-lg" />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-[10px] text-gray-400 font-medium">
                        {course.vendor}
                      </div>
                    )}
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
                      Classroom
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-[#C9A84C]">{course.price}</span>
                    <span className="text-xs text-gray-400">per pax</span>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2.5 bg-[#C9A84C] text-[#0D1B2A] text-sm font-semibold rounded-lg hover:bg-[#b8963f] transition-colors"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
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
