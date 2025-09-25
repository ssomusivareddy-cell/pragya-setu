import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { ContactInfo } from "@/components/ContactInfo";
import { VoiceAssistant } from "@/components/VoiceAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      <main>
        <HeroSection />
        <Dashboard />
      <ContactInfo />
      <div className="container mx-auto px-4 py-8">
        <VoiceAssistant />
      </div>
      </main>
    </div>
  );
};

export default Index;
