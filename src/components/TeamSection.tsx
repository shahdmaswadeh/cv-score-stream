const teamMembers = [
  {
    name: "Shahd",
    role: "Backend Developer",
    tech: "Spring Boot",
    description: "Backend architecture and API development specialist",
    gradient: "from-corporate-blue to-accent"
  },
  {
    name: "Hassan", 
    role: "Backend Developer",
    tech: "Spring Boot",
    description: "Database design and integration expert",
    gradient: "from-accent to-corporate-blue"
  },
  {
    name: "Rawaa",
    role: "Frontend Developer", 
    tech: "Angular",
    description: "User interface and experience designer",
    gradient: "from-corporate-blue-dark to-corporate-blue"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-corporate-gray">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-text mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-corporate-text/70 max-w-2xl mx-auto">
            A dedicated team of developers building the future of HR technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-white hover:shadow-shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-corporate-text mb-2">
                {member.name}
              </h3>
              
              <div className="text-corporate-blue font-medium mb-2">
                {member.role}
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-corporate-blue-light text-corporate-blue text-sm font-medium mb-4">
                {member.tech}
              </div>
              
              <p className="text-corporate-text/70">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;