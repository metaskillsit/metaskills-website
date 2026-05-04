import Navbar from "@/components/Navbar";

const AIVideoStudioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <div className="w-full" style={{ height: "calc(100vh - 90px)" }}>
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
