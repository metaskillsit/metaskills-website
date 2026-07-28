import { ExternalLink, Boxes } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const LINKS = [
  { label: "Spaces", url: "https://huggingface.co/spaces", desc: "Browse thousands of live AI demo apps." },
  { label: "Models", url: "https://huggingface.co/models", desc: "Open-weight models for text, vision and audio." },
  { label: "Datasets", url: "https://huggingface.co/datasets", desc: "Public datasets for training and evaluation." },
];

const HuggingFaceSpacesPage = () => (
  <div className="min-h-screen bg-[hsl(220,25%,6%)] text-[hsl(220,15%,95%)]">
    <Navbar />
    <main className="pt-20 md:pt-[90px]">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(43,96%,56%,0.12),_transparent_50%)]" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-6">
            <Boxes className="w-3.5 h-3.5" /> Model Hub
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-5 leading-[1.1]">
            Hugging Face Spaces
          </h1>
          <p className="text-[hsl(220,15%,55%)] text-base md:text-lg max-w-2xl mb-10">
            Hugging Face does not permit embedding its site inside other pages,
            so we link out directly. Explore live model demos, open-weight
            models and datasets used across our programmes.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {LINKS.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[hsl(220,20%,20%)] bg-[hsl(220,25%,10%)] p-6 hover:border-[hsl(43,96%,56%,0.4)] hover:bg-[hsl(220,25%,12%)] transition-all"
              >
                <h2 className="font-sans-prem text-xl font-semibold mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                  {l.label}
                </h2>
                <p className="text-[hsl(220,15%,55%)] text-sm leading-relaxed mb-6">
                  {l.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))]">
                  Open <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
    <FooterSection />
  </div>
);

export default HuggingFaceSpacesPage;
