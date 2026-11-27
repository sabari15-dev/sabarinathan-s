const Projects = () => {
  const projects = [
    {
      title: "Digital Twin Platform",
      description:
        "Backend for a digital twin platform that represents real-world assets and provides real-time status updates.",
      result:
        "Developed RESTful APIs and backend data models, implemented real-time communication with Socket.IO, worked on MongoDB schema design and data management, and supported backend workflows for asset monitoring. Confidential company project.",
      tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Socket.IO"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "Milestone and Task Management System",
      description:
        "Backend system for managing project milestones and tasks across multiple organizations.",
      result:
        "Developed REST APIs for milestone and task management, implemented JWT authentication and RBAC, and built multi-tenant architecture with tenant data isolation for organization-specific access. Confidential company project.",
      tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "RBAC"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "CI/CD Automation",
      description:
        "Automated application build and deployment workflows.",
      result:
        "Automated build and deployment workflows, integrated Jenkins and Gitea webhooks, managed Docker image builds and Harbor, and maintained Dockerfiles, Jenkins pipelines, and Kubernetes manifests for Argo CD and Kubernetes deployments. Contribution at Aalai Immersive Tech.",
      tags: ["Docker", "Jenkins", "Gitea", "Harbor", "Argo CD", "Kubernetes"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "OTS Travel – Corporate Travel Management Portal",
      description:
        "Corporate travel management platform that helps companies manage employee bookings, corporate travel policies, and travel expenses.",
      result:
        "Integrated third-party flight booking APIs, implemented employee booking controls and corporate travel policy management, worked on Master Wallet management and automated refund workflows, and developed GST invoicing and corporate expense management. Company project.",
      tags: ["Node.js", "TypeScript", "AWS Lambda", "AWS API Gateway", "DynamoDB", "Third-party API Integration"],
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Selected backend work, including confidential company projects and OTS Travel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.result}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
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
