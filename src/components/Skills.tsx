import { Database, Code2, Server, GitBranch, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Node.js"],
    },
    {
      icon: Server,
      category: "Frameworks",
      items: ["Express.js", "Socket.IO", "REST APIs"],
    },
    {
      icon: Database,
      category: "Databases",
      items: ["MongoDB", "Mongoose", "Redis"],
    },
    {
      icon: Zap,
      category: "Real-time",
      items: ["Socket.IO", "Yjs", "WebSockets"],
    },
    {
      icon: Layers,
      category: "Architecture",
      items: ["Microservices", "MVC", "RESTful"],
    },
    {
      icon: GitBranch,
      category: "Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Technical Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized in building scalable backend systems with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="p-8 rounded-2xl bg-card border border-border hover-lift group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-secondary text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
