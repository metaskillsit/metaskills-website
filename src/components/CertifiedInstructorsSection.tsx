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
];

const techStacks = [
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

  return (
    <section className="bg-card border-t border-border py-10 md:py-14">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Certified Instructors */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 md:mb-8"
        >
          {t("certified.heading")}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10 md:mb-14">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center justify-center h-[28px] md:h-[36px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-full w-auto max-w-[90px] md:max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto mb-10 md:mb-14" />

        {/* Tools & Technologies */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 md:mb-8"
        >
          {t("certified.techStackHeading")}
        </motion.p>
        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-14 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-6 justify-items-center">
          {techStacks.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.015 }}
              className="flex flex-col items-center gap-1 group w-[52px] md:w-[60px]"
            >
              <div className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-md bg-muted/40 p-1 group-hover:bg-primary/10 transition-colors">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-[8px] md:text-[9px] text-muted-foreground/60 group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
