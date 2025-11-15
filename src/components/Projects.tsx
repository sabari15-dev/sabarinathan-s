import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "3D Asset Collaboration System",
      description: "Real-time multi-user 3D editing platform with Yjs CRDT, Socket.IO, auto-save, undo/redo functionality, and MongoDB persistence.",
      tags: ["Node.js", "Socket.IO", "Yjs", "MongoDB", "Express"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "Collaborative Drawing App",
      description: "Multi-user drawing application with real-time line synchronization, auto-saving, snapshot management, and conflict-free collaborative editing.",
      tags: ["TypeScript", "Yjs", "WebSocket", "Canvas API"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "QR Code Attendance System",
      description: "Complete attendance management system with TypeScript backend, Mongoose ODM, automated report generation, and monthly QR code viewer.",
      tags: ["TypeScript", "MongoDB", "Express", "QR Generation"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "IoT Data Logging System",
      description: "Scalable IoT device data ingestion platform with real-time dashboard, MongoDB aggregation pipeline, and comprehensive analytics.",
      tags: ["Node.js", "MongoDB", "IoT", "Real-time"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "URL Shortener with Analytics",
      description: "Advanced URL shortening service with click tracking, link expiration, device statistics, and comprehensive analytics dashboard.",
      tags: ["Express", "MongoDB", "Analytics", "REST API"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "Backend CLI Auto-Generator",
      description: "Developer tool that auto-generates models, services, controllers, and routes from schema definitions to accelerate backend development.",
      tags: ["Node.js", "CLI", "Code Generation", "Templates"],
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="projects" className="py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world backend solutions demonstrating scalability and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}></div>
              
              <div className="relative p-8 bg-card border border-border rounded-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
