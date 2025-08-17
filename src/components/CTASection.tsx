import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm">
            <Clock className="w-4 h-4" />
            <span>3-Month Development Roadmap</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join our early access program and be among the first to experience 
            the future of automated CV screening and candidate filtering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-corporate-blue hover:bg-white/90"
            >
              Try Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-corporate-blue"
            >
              Join Early Access
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-white/90">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Month 1-2</div>
              <div className="text-sm">Research & MVP Development</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Month 2-3</div>
              <div className="text-sm">AI Integration & Frontend</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Month 3</div>
              <div className="text-sm">Testing & Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;