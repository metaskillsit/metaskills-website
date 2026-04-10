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

const certifications = [
  { name: "EC-Council", logo: ecCouncilLogo },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: awsLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Google", logo: googleLogo },
  // Tech stack logos
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
  { name: "n8n", logo: n8nLogo },
  { name: "Zapier AI", logo: zapierLogo },
  { name: "Make", logo: makeLogo },
  { name: "Hugging Face", logo: huggingfaceLogo },
  { name: "Cursor", logo: cursorLogo },
  { name: "GitHub Copilot", logo: githubLogo },
  { name: "MS Copilot", logo: copilotLogo },
  { name: "Lovable", logo: lovableLogo },
  { name: "Vercel AI", logo: vercelLogo },
  { name: "NotebookLM", logo: notebooklmLogo },
  { name: "Perplexity", logo: perplexityLogo },
  { name: "CapCut", logo: capcutLogo },
  { name: "Veo 3", logo: veo3Logo },
  { name: "Higgsfield", logo: higgsfieldLogo },
  { name: "Seedance", logo: seedanceLogo },
  { name: "OpenClaw", logo: openclawLogo },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  const doubled = [...certifications, ...certifications];

  return (
    <section className="bg-card border-t border-border py-3 md:py-4 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-4 md:mb-6"
        >
          {t("certified.heading")}
        </motion.p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-6 md:gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" },
          }}
        >
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-[28px] md:h-[36px]"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-full w-auto max-w-[80px] md:max-w-[110px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
