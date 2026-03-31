import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyMetaskillsSection from "@/components/WhyMetaskillsSection";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";

import LocationsSection from "@/components/LocationsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import FooterSection from "@/components/FooterSection";
import CertifiedInstructorsSection from "@/components/CertifiedInstructorsSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import TranslationWidget from "@/components/TranslationWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        <HeroSection />
        <CertifiedInstructorsSection />
        <MissionSection />
        <StatsSection />
        <ProgramsSection />
        <WhyMetaskillsSection />
        <FacultySection />
        <TestimonialsSection />
        <PartnerLogosSection />
        
        <LocationsSection />
        <AdmissionsSection />
      </main>
      <FooterSection />
      <TranslationWidget />
    </div>
  );
};

export default Index;
