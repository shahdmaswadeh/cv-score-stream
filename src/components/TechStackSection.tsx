import { Code, Database, Cpu, Mail } from "lucide-react";

const techStack = [
  {
    category: "Backend",
    icon: Database,
    tech: "Spring Boot",
    description: "Robust and scalable backend infrastructure"
  },
  {
    category: "Frontend", 
    icon: Code,
    tech: "Angular",
    description: "Modern and responsive user interface"
  },
  {
    category: "AI/ML",
    icon: Cpu,
    tech: "GPT & ML APIs",
    description: "Advanced resume parsing and skill matching"
  },
  {
    category: "Email",
    icon: Mail,
    tech: "SendGrid/Mailgun",
    description: "Reliable email processing and automation"
  }
];

const TechStackSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-text mb-6">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-corporate-text/70 max-w-3xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver 
            reliable, scalable, and intelligent HR solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-xl border border-gray-100 hover:border-corporate-blue/30 hover:shadow-shadow-soft transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-corporate-blue-light to-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-corporate-blue" />
              </div>
              
              <div className="text-sm font-medium text-corporate-blue mb-2">
                {item.category}
              </div>
              
              <h3 className="text-lg font-semibold text-corporate-text mb-3">
                {item.tech}
              </h3>
              
              <p className="text-sm text-corporate-text/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;