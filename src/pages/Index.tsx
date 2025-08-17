import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="tech">
          <TechStackSection />
        </div>
        <CTASection />
      </main>
      
      <footer className="bg-corporate-text text-white py-8 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-corporate-blue to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-semibold">SmartCV Filter</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 SmartCV Filter. Revolutionizing HR technology with AI-powered solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
