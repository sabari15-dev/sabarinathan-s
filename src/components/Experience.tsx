import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "May 2026 – Present",
      title: "Backend Developer",
      company: "Aalai Immersive Tech",
      description:
        "Backend development for multi-tenant systems, real-time communication, and CI/CD automation.",
      achievements: [
        "Developed RESTful APIs using Node.js, Express.js, and TypeScript.",
        "Designed and optimized MongoDB schemas, indexes, and queries.",
        "Implemented JWT authentication, bcrypt password hashing, and RBAC.",
        "Developed multi-tenant authentication and tenant isolation mechanisms.",
        "Integrated Socket.IO for real-time communication.",
        "Managed MinIO object storage and file upload workflows.",
        "Developed a dedicated CI/CD Automation Service integrating Jenkins, Gitea webhooks, Harbor, Argo CD, and Kubernetes.",
        "Independently developed an MCP server that exposes Service Registry REST APIs as tools accessible to LLMs.",
      ],
    },
    {
      year: "February 2024 – April 2026",
      title: "Software Developer",
      company: "Hexr Factory Immersive Tech",
      description:
        "Backend application development, independent services, and automated service provisioning.",
      achievements: [
        "Developed RESTful backend services using Node.js, Express.js, and TypeScript with MVC architecture.",
        "Designed MongoDB schemas and indexes for efficient data access.",
        "Implemented JWT authentication, bcrypt, HTTP-only cookies, and RBAC.",
        "Integrated Socket.IO for real-time communication.",
        "Managed MinIO and Blob Storage file workflows.",
        "Developed an automated Service Creation workflow that provisions backend services when new projects are created through the application.",
        "Integrated Gitea to automatically create repositories and push the generated application code.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
