import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { ContactInfo } from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      <main>
        <HeroSection />
        <Dashboard />
        <ContactInfo />
      </main>
    </div>
  );
};

export default Index;
