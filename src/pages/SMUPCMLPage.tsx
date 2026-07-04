import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const SMU_URL = "https://academy.smu.edu.sg/courses/professional-certificate-machine-learning";

const SMUPCMLPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Data Science & Analytics · Partner Programme
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-foreground mt-1">
              Professional Certificate in Machine Learning — SMU
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Delivered by SMU Academy. Metaskills Institute is a curriculum partner.
            </p>
          </div>
          <a
            href={SMU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            View on SMU Academy <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <main className="flex-1 bg-muted/30">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-6">
          <div className="relative w-full h-[calc(100vh-180px)] min-h-[600px] bg-white sm:rounded-lg sm:shadow-sm overflow-hidden">
            <iframe
              src={SMU_URL}
              title="SMU Academy — Professional Certificate in Machine Learning"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <noscript>
              <a href={SMU_URL}>Open the SMU course page</a>
            </noscript>
          </div>
          <p className="text-xs text-muted-foreground text-center py-4 px-4">
            If the SMU page does not load above (some browsers block embedded institutional
            sites),{" "}
            <a
              href={SMU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              open it directly on SMU Academy
            </a>
            .
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default SMUPCMLPage;
