import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyMetaskillsSection from "@/components/WhyMetaskillsSection";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PastClassesSection from "@/components/PastClassesSection";
import LocationsSection from "@/components/LocationsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import FooterSection from "@/components/FooterSection";
import CertifiedInstructorsSection from "@/components/CertifiedInstructorsSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import CurrentTrainingTicker from "@/components/CurrentTrainingTicker";
import FivePracticesSection from "@/components/FivePracticesSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <HeroSection />
        <CurrentTrainingTicker />
        <MissionSection />
        <FivePracticesSection />
        <PartnerLogosSection />
        <PastClassesSection />
        <ProgramsSection />
        <StatsSection />
        <WhyMetaskillsSection />
        <CertifiedInstructorsSection />
        <FacultySection />
        <TestimonialsSection />
        
        <LocationsSection />
        <AdmissionsSection />
      </main>
      <FooterSection />
      
    </div>
  );
};

export default Index;
