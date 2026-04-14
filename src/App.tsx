import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Index from "./pages/Index.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProgrammesPage from "./pages/ProgrammesPage.tsx";
import FacultyPage from "./pages/FacultyPage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import LocationsPage from "./pages/LocationsPage.tsx";
import AdmissionsPage from "./pages/AdmissionsPage.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import AgenticAIPage from "./pages/AgenticAIPage.tsx";
import AIStackPage from "./pages/AIStackPage.tsx";
import NotFound from "./pages/NotFound.tsx";


const queryClient = new QueryClient();

const AppContent = () => {
  const { i18n } = useTranslation();
  const languageKey = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  return (
    <>
      <ScrollToTop />
      <FloatingWhatsApp />
      <Routes key={languageKey}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/course/:slug" element={<CoursePage />} />
        <Route path="/agentic-ai-governance" element={<AgenticAIPage />} />
        <Route path="/ai-stack-masterclasses" element={<AIStackPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
