import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import logo from "@/assets/metaskills-logo.png";

const STORAGE_KEY = "ai-video-studio:nav-visible";

const AIVideoStudioPage = () => {
  const [navVisible, setNavVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(navVisible));
  }, [navVisible]);

  // Preload the logo so it appears instantly when the header opens
  useEffect(() => {
    const img = new Image();
    img.src = logo;
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navbar always mounted (so logo stays cached); hidden via transform on its inner <nav> */}
      <div
        className={`transition-transform duration-300 [&>nav]:transition-transform [&>nav]:duration-300 ${
          navVisible ? "" : "[&>nav]:-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Floating toggle tab */}
      <button
        type="button"
        onClick={() => setNavVisible((v) => !v)}
        aria-label={navVisible ? "Hide navigation" : "Show navigation"}
        style={{ top: navVisible ? "92px" : "0px" }}
        className="fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center w-8 h-4 rounded-b-md bg-primary text-primary-foreground shadow-md hover:brightness-110 transition-all"
      >
        {navVisible ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </button>

      <main>
        <div className="w-full" style={{ height: "100vh" }}>
          <iframe
            src="https://appvenger.com/dashboard"
            title="AI Video Studio"
            className="w-full h-full border-0"
            allow="camera; microphone; clipboard-read; clipboard-write; fullscreen"
          />
        </div>
      </main>
    </div>
  );
};

export default AIVideoStudioPage;
