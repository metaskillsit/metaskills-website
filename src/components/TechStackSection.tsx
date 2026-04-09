import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Bot, Cpu, Wrench, Video } from "lucide-react";

// LLM Providers
import openaiLogo from "@/assets/techlogos/openai.svg";
import anthropicLogo from "@/assets/techlogos/anthropic.svg";
import geminiLogo from "@/assets/techlogos/gemini.svg";
import deepseekLogo from "@/assets/techlogos/deepseek.png";
import grokLogo from "@/assets/techlogos/grok.png";
import ollamaLogo from "@/assets/techlogos/ollama.png";
import groqLogo from "@/assets/techlogos/groq.png";
import openrouterLogo from "@/assets/techlogos/openrouter.png";
import glmLogo from "@/assets/techlogos/glm.png";
import doubaoLogo from "@/assets/techlogos/doubao.png";
import kimiLogo from "@/assets/techlogos/kimi.png";

// AI Agents & Automation
import n8nLogo from "@/assets/techlogos/n8n.png";
import zapierLogo from "@/assets/techlogos/zapier.svg";
import makeLogo from "@/assets/techlogos/make.png";
import openclawLogo from "@/assets/techlogos/openclaw.png";

// AI Dev Tools
import huggingfaceLogo from "@/assets/techlogos/huggingface.svg";
import cursorLogo from "@/assets/techlogos/cursor.png";
import githubLogo from "@/assets/techlogos/github.svg";
import lovableLogo from "@/assets/techlogos/lovable.png";
import vercelLogo from "@/assets/techlogos/vercel.svg";
import notebooklmLogo from "@/assets/techlogos/notebooklm.png";
import perplexityLogo from "@/assets/techlogos/perplexity.svg";

// AI Media
import capcutLogo from "@/assets/techlogos/capcut.png";
import veo3Logo from "@/assets/techlogos/veo3.png";
import higgsfieldLogo from "@/assets/techlogos/higgsfield.png";
import seedanceLogo from "@/assets/techlogos/seedance.png";

const categories = [
  {
    titleKey: "techStack.llmProviders",
    icon: Cpu,
    items: [
      { name: "OpenAI", logo: openaiLogo },
      { name: "Claude", logo: anthropicLogo },
      { name: "Gemini", logo: geminiLogo },
      { name: "DeepSeek", logo: deepseekLogo },
      { name: "Grok", logo: grokLogo },
      { name: "Ollama", logo: ollamaLogo },
      { name: "Groq", logo: groqLogo },
      { name: "OpenRouter", logo: openrouterLogo },
      { name: "GLM", logo: glmLogo },
      { name: "Doubao", logo: doubaoLogo },
      { name: "Kimi", logo: kimiLogo },
    ],
  },
  {
    titleKey: "techStack.agentsAutomation",
    icon: Bot,
    items: [
      { name: "n8n", logo: n8nLogo },
      { name: "Zapier AI", logo: zapierLogo },
      { name: "Make", logo: makeLogo },
      { name: "OpenClaw", logo: openclawLogo },
    ],
  },
  {
    titleKey: "techStack.devTools",
    icon: Wrench,
    items: [
      { name: "Hugging Face", logo: huggingfaceLogo },
      { name: "Cursor", logo: cursorLogo },
      { name: "GitHub Copilot", logo: githubLogo },
      { name: "Lovable", logo: lovableLogo },
      { name: "Vercel AI", logo: vercelLogo },
      { name: "NotebookLM", logo: notebooklmLogo },
      { name: "Perplexity", logo: perplexityLogo },
    ],
  },
  {
    titleKey: "techStack.aiMedia",
    icon: Video,
    items: [
      { name: "CapCut", logo: capcutLogo },
      { name: "Veo 3", logo: veo3Logo },
      { name: "Higgsfield", logo: higgsfieldLogo },
      { name: "Seedance", logo: seedanceLogo },
    ],
  },
];

const TechStackSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-dark py-12 md:py-16 border-t border-border">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {t("techStack.label")}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
            {t("techStack.heading")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                  <Icon className="w-4 h-4 text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/70">
                    {t(cat.titleKey)}
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-1.5 group"
                    >
                      <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 p-2 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          loading="lazy"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span className="text-[10px] md:text-[11px] text-white/50 group-hover:text-white/90 transition-colors text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
