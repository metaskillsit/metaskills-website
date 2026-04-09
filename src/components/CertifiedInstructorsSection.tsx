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
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/320px-Anthropic_logo.svg.png" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "Perplexity", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg" },
  { name: "LangChain", logo: "https://python.langchain.com/img/brand/wordmark.png" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "TensorFlow", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
  { name: "PyTorch", logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg" },
  { name: "Jupyter", logo: "https://cdn.worldvectorlogo.com/logos/jupyter.svg" },
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
  { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
  { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  { name: "Power BI", logo: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
  { name: "Snowflake", logo: "https://cdn.worldvectorlogo.com/logos/snowflake.svg" },
  { name: "Databricks", logo: "https://cdn.worldvectorlogo.com/logos/databricks-1.svg" },
  { name: "Apache Spark", logo: "https://cdn.worldvectorlogo.com/logos/apache-spark-5.svg" },
  { name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
  { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
  { name: "MLflow", logo: "https://mlflow.org/img/mlflow-black.svg" },
  { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  { name: "Gradio", logo: "https://www.gradio.app/assets/gradio.svg" },
  { name: "CrewAI", logo: "https://www.crewai.com/favicon.ico" },
  { name: "AutoGen", logo: "https://microsoft.github.io/autogen/img/ag.svg" },
  { name: "Pinecone", logo: "https://cdn.worldvectorlogo.com/logos/pinecone-1.svg" },
  { name: "Weaviate", logo: "https://weaviate.io/img/site/weaviate-logo-light.png" },
  { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
  { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
  { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-icon.svg" },
  { name: "Meta Llama", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/320px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/320px-Google_Gemini_logo.svg.png" },
  { name: "Mistral", logo: "https://mistral.ai/images/logo_huBC6gyl.svg" },
  { name: "Ollama", logo: "https://ollama.com/public/ollama.png" },
  { name: "ChromaDB", logo: "https://www.trychroma.com/chroma-logo.png" },
  { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
];

const CertifiedInstructorsSection = () => {
  const { t } = useTranslation();

  // Double the logos for seamless loop
  const doubled = [...certifications, ...certifications];
  const doubledTech = [...techStacks, ...techStacks];

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
        {/* Fade edges */}
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

      {/* Tech Stack Logos */}
      <div className="max-w-[1140px] mx-auto px-6 mt-6 md:mt-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-primary mb-4"
        >
          {t("certified.techStackHeading")}
        </motion.p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center gap-6 md:gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {doubledTech.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5 group"
            >
              <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-full w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedInstructorsSection;
