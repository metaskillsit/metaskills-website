import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";

const AIVideoStudioPage = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Slide-down navbar overlay */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setNavVisible((v) => !v)}
        aria-label={navVisible ? "Hide navigation" : "Show navigation"}
        className="fixed top-3 left-3 z-[60] flex items-center justify-center w-10 h-10 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg text-foreground hover:text-primary hover:bg-card transition-all"
      >
        {navVisible ? <X size={18} /> : <Menu size={18} />}
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
