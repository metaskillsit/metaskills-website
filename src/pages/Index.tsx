import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PastClassesSection from "@/components/PastClassesSection";
import LocationsSection from "@/components/LocationsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import FooterSection from "@/components/FooterSection";
import CertifiedInstructorsSection from "@/components/CertifiedInstructorsSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import CurrentTrainingTicker from "@/components/CurrentTrainingTicker";
import TrustAuthoritySection from "@/components/TrustAuthoritySection";
import AseanNetworkSection from "@/components/AseanNetworkSection";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-[90px]">
        <HeroSection />
        <CurrentTrainingTicker />
        <MissionSection />
        <StatsSection />
        <TrustAuthoritySection />
        <AseanNetworkSection />
        
        <PastClassesSection />
        <ProgramsSection />
        <CertifiedInstructorsSection />
        <PartnerLogosSection />
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
