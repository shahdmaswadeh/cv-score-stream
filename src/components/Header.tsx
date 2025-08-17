import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-corporate-blue to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-corporate-text">SmartCV Filter</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-corporate-text/70 hover:text-corporate-blue transition-colors">
              Features
            </a>
            <a href="#team" className="text-corporate-text/70 hover:text-corporate-blue transition-colors">
              Team
            </a>
            <a href="#tech" className="text-corporate-text/70 hover:text-corporate-blue transition-colors">
              Technology
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-corporate-text hover:text-corporate-blue">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;