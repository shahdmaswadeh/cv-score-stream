import { Mail, Brain, Filter, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Automated CV Reception",
    description: "Every incoming CV email is automatically detected, processed, and securely stored in your system.",
    color: "text-corporate-blue"
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    description: "Applicants receive professional auto-reply confirmations that their CV has been successfully received.",
    color: "text-accent"
  },
  {
    icon: Brain,
    title: "AI-Powered Scoring",
    description: "Advanced AI analyzes and scores CVs from 1-10 based on job requirements and skill matching.",
    color: "text-corporate-blue"
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Low-scoring CVs automatically trigger professional rejection emails with personalized feedback.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "HR Review Queue",
    description: "High-scoring candidates are prioritized and forwarded to HR staff for efficient manual review.",
    color: "text-corporate-blue"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-text mb-6">
            Streamline Your Hiring Process
          </h2>
          <p className="text-xl text-corporate-text/70 max-w-3xl mx-auto">
            Say goodbye to manual CV screening. Our AI-powered platform handles everything 
            from initial reception to candidate filtering, saving your HR team countless hours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-corporate-gray to-white border border-gray-100 hover:shadow-shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-corporate-blue-light to-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-corporate-text mb-4">
                {feature.title}
              </h3>
              
              <p className="text-corporate-text/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;