import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import comptiaLogo from "@/assets/logo-comptia.png";
import ecCouncilLogo from "@/assets/logo-ec-council.png";
import awsLogo from "@/assets/logo-aws.png";
import appleLogo from "@/assets/logo-apple.png";
import googleLogo from "@/assets/logo-google.png";

const certifications = [
  { name: "EC-Council", logo: ecCouncilLogo, smaller: false },
  { name: "CompTIA", logo: comptiaLogo, smaller: false },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", smaller: true },
  { name: "AWS", logo: awsLogo, smaller: false },
  { name: "Apple", logo: appleLogo, smaller: true },
  { name: "Google", logo: googleLogo, smaller: true },
];

const techStacks = [
  // LLM Providers
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/320px-Anthropic_logo.svg.png" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/320px-Google_Gemini_logo.svg.png" },
  { name: "Meta Llama", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/320px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png" },
  { name: "Mistral", logo: "https://mistral.ai/images/logo_huBC6gyl.svg" },
  { name: "DeepSeek", logo: "https://chat.deepseek.com/favicon.ico" },
  { name: "Grok", logo: "https://x.ai/favicon.ico" },
  { name: "Ollama", logo: "https://ollama.com/public/ollama.png" },
  { name: "Groq", logo: "https://groq.com/wp-content/uploads/2024/03/PNGLogo_color.png" },
  { name: "OpenRouter", logo: "https://openrouter.ai/favicon.ico" },
  { name: "GLM", logo: "https://chatglm.cn/img/icons/chatglm-logo.svg" },
  { name: "Doubao", logo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo-doubao-overflow.png" },
  { name: "Kimi", logo: "https://kimi.moonshot.cn/favicon.ico" },
  // AI Agents & Automation
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "CrewAI", logo: "https://www.crewai.com/favicon.ico" },
  { name: "AutoGen", logo: "https://microsoft.github.io/autogen/img/ag.svg" },
  { name: "Zapier AI", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
  { name: "Make", logo: "https://images.ctfassets.net/qqlj6g4ee76j/1DdtIAIrIiiqmiSMYcGi2e/96af98f4b3ed10e29f10e0e1f36ffa4c/make-logo-mark-full-color-rgb.svg" },
  // AI Dev Tools
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
  { name: "GitHub Copilot", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
  { name: "Vercel AI", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  { name: "Gradio", logo: "https://www.gradio.app/assets/gradio.svg" },
  { name: "MLflow", logo: "https://mlflow.org/img/mlflow-black.svg" },
  { name: "NotebookLM", logo: "https://notebooklm.google/favicon.ico" },
  // AI Media Tools
  { name: "Perplexity", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg" },
  { name: "CapCut", logo: "https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/common/images/capcut-logo.svg" },
  { name: "Veo 3", logo: "https://deepmind.google/favicon.ico" },
  { name: "HiggfieldAI", logo: "https://higgsfield.ai/favicon.ico" },
  { name: "Seedance", logo: "https://seedance.ai/favicon.ico" },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  // Double the logos for seamless loop
  const doubled = [...certifications, ...certifications];

  return (
    <section className="bg-card border-t border-border py-3 md:py-4 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6"
        >
          {t("certified.heading")}
        </motion.p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-8 md:gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {doubled.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className={`flex-shrink-0 flex items-center justify-center ${cert.smaller ? 'h-[70px] md:h-[100px]' : 'h-[100px] md:h-[140px]'}`}
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className={`h-full w-auto object-contain ${cert.smaller ? 'max-w-[170px] md:max-w-[260px]' : 'max-w-[240px] md:max-w-[360px]'}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* AI Tech Stack Grid */}
      <div className="max-w-[1140px] mx-auto px-6 mt-6 md:mt-8 pb-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-5"
        >
          {t("certified.techStackHeading")}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {techStacks.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-lg bg-muted/50 p-1.5 group-hover:bg-primary/10 transition-colors">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[9px] md:text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
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
