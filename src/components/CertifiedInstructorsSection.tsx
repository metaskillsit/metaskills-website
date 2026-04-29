import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.png";
import awsLogo from "@/assets/logo-aws.png";
import appleLogo from "@/assets/logo-apple.png";
import googleLogo from "@/assets/logo-google.png";

// Tech stack logos (local)
import openaiLogo from "@/assets/techlogos/openai.svg";
import anthropicLogo from "@/assets/techlogos/anthropic.svg";
import geminiLogo from "@/assets/techlogos/gemini.svg";
import deepseekLogo from "@/assets/techlogos/deepseek.png";
import ollamaLogo from "@/assets/techlogos/ollama.png";
import groqLogo from "@/assets/techlogos/groq.png";
import huggingfaceLogo from "@/assets/techlogos/huggingface.svg";
import perplexityLogo from "@/assets/techlogos/perplexity.svg";
import githubLogo from "@/assets/techlogos/github.svg";
import vercelLogo from "@/assets/techlogos/vercel.svg";
import zapierLogo from "@/assets/techlogos/zapier.svg";
import n8nLogo from "@/assets/techlogos/n8n.png";
import cursorLogo from "@/assets/techlogos/cursor.png";
import makeLogo from "@/assets/techlogos/make.png";
import grokLogo from "@/assets/techlogos/grok.png";
import openrouterLogo from "@/assets/techlogos/openrouter.png";
import glmLogo from "@/assets/techlogos/glm.png";
import doubaoLogo from "@/assets/techlogos/doubao.png";
import kimiLogo from "@/assets/techlogos/kimi.png";
import notebooklmLogo from "@/assets/techlogos/notebooklm.png";
import lovableLogo from "@/assets/techlogos/lovable.png";
import capcutLogo from "@/assets/techlogos/capcut.png";
import veo3Logo from "@/assets/techlogos/veo3.png";
import higgsfieldLogo from "@/assets/techlogos/higgsfield.png";
import seedanceLogo from "@/assets/techlogos/seedance.png";
import openclawLogo from "@/assets/techlogos/openclaw.png";
import copilotLogo from "@/assets/techlogos/copilot.jpg";

type Logo = { name: string; logo: string };

const groups: { title: string; items: Logo[] }[] = [
  {
    title: "Industry Certifications",
    items: [
      { name: "EC-Council", logo: ecCouncilLogo },
      { name: "CompTIA", logo: comptiaLogo },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "AWS", logo: awsLogo },
      { name: "Apple", logo: appleLogo },
      { name: "Google", logo: googleLogo },
    ],
  },
  {
    title: "Foundation AI Models",
    items: [
      { name: "OpenAI", logo: openaiLogo },
      { name: "Claude", logo: anthropicLogo },
      { name: "Gemini", logo: geminiLogo },
      { name: "Grok", logo: grokLogo },
      { name: "DeepSeek", logo: deepseekLogo },
      { name: "GLM", logo: glmLogo },
      { name: "Doubao", logo: doubaoLogo },
      { name: "Kimi", logo: kimiLogo },
    ],
  },
  {
    title: "AI Infrastructure & Routing",
    items: [
      { name: "Ollama", logo: ollamaLogo },
      { name: "Groq", logo: groqLogo },
      { name: "OpenRouter", logo: openrouterLogo },
      { name: "Hugging Face", logo: huggingfaceLogo },
      { name: "Perplexity", logo: perplexityLogo },
      { name: "NotebookLM", logo: notebooklmLogo },
    ],
  },
  {
    title: "Automation & Agentic Workflows",
    items: [
      { name: "n8n", logo: n8nLogo },
      { name: "Zapier AI", logo: zapierLogo },
      { name: "Make", logo: makeLogo },
      { name: "OpenClaw", logo: openclawLogo },
    ],
  },
  {
    title: "Coding & Developer Tools",
    items: [
      { name: "Cursor", logo: cursorLogo },
      { name: "GitHub Copilot", logo: githubLogo },
      { name: "MS Copilot", logo: copilotLogo },
      { name: "Lovable", logo: lovableLogo },
      { name: "Vercel AI", logo: vercelLogo },
    ],
  },
  {
    title: "Creative & Generative Media",
    items: [
      { name: "CapCut", logo: capcutLogo },
      { name: "Veo 3", logo: veo3Logo },
      { name: "Higgsfield", logo: higgsfieldLogo },
      { name: "Seedance", logo: seedanceLogo },
    ],
  },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-card border-t border-border py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-8 md:mb-12"
        >
          {t("certified.heading")}
        </motion.p>

        <div className="space-y-8 md:space-y-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px flex-1 bg-border" />
                <h3 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12 md:gap-y-6">
                {group.items.map((cert) => (
                  <div
                    key={cert.name}
                    title={cert.name}
                    className="group flex items-center justify-center h-[32px] md:h-[40px] grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-full w-auto max-w-[100px] md:max-w-[130px] object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
