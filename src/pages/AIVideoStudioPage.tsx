import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const AIVideoStudioPage = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Slide-down navbar overlay */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          navVisible ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
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
        className="fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center w-12 h-7 rounded-b-xl bg-primary text-primary-foreground shadow-lg hover:brightness-110 transition-all"
      >
        {navVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
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
