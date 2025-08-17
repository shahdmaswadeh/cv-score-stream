import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-corporate-blue-light to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-corporate-text leading-tight">
                Smart CV Filtering
                <span className="block text-corporate-blue">
                  Powered by AI
                </span>
              </h1>
              <p className="text-xl text-corporate-text/80 leading-relaxed max-w-lg">
                Revolutionize your hiring process with automated CV screening, 
                intelligent scoring, and instant candidate filtering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Try Demo
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
                Join Early Access
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-corporate-blue">90%</div>
                <div className="text-sm text-corporate-text/70">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-corporate-blue">10x</div>
                <div className="text-sm text-corporate-text/70">Faster Screening</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-corporate-blue">95%</div>
                <div className="text-sm text-corporate-text/70">Accuracy</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="AI-powered CV filtering system illustration"
              className="relative z-10 w-full h-auto rounded-2xl shadow-shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;