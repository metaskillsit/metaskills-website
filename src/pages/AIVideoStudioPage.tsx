import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const AIVideoStudioPage = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navbar (mounted only when visible so its internal fixed positioning doesn't block the iframe) */}
      {navVisible && <Navbar />}

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
