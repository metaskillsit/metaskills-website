import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import logo from "@/assets/metaskills-logo.png";

const HUGGINGFACE_URL = "https://huggingface.co/spaces";

const HuggingFaceSpacesPage = () => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className={`transition-transform duration-300 [&>nav]:transition-transform [&>nav]:duration-300 ${
          navVisible ? "" : "[&>nav]:-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      <button
        type="button"
        onClick={() => setNavVisible((v) => !v)}
        aria-label={navVisible ? "Hide navigation" : "Show navigation"}
        style={{ top: navVisible ? "80px" : "-12px" }}
        className="fixed left-1/2 -translate-x-1/2 z-[100] p-3 bg-transparent border-0 cursor-pointer touch-manipulation"
      >
        <span className="flex items-center justify-center w-8 h-4 rounded-b-md bg-primary text-primary-foreground shadow-md hover:brightness-110 transition-all">
          {navVisible ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </span>
      </button>

      <main>
        <div className="w-full relative" style={{ height: "100vh" }}>
          {/* Fallback shown underneath in case the embed is blocked by the provider */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="font-heading text-2xl md:text-3xl font-semibold">
              Hugging Face Spaces
            </h1>
            <p className="text-muted-foreground max-w-md text-sm">
              If the embedded view does not load, Hugging Face may be blocking
              embedding. Open it in a new tab instead.
            </p>
            <a
              href={HUGGINGFACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all"
            >
              Open Hugging Face Spaces
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <iframe
            src={HUGGINGFACE_URL}
            title="Hugging Face Spaces"
            className="relative w-full h-full border-0 bg-background"
            allow="camera; microphone; clipboard-read; clipboard-write; fullscreen; autoplay"
          />
        </div>
      </main>
    </div>
  );
};

export default HuggingFaceSpacesPage;
