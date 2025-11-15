import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Backend Developer",
      company: "Tech Innovations Ltd",
      location: "Remote",
      description: "Leading backend architecture for real-time collaboration platforms. Implementing CRDT systems with Yjs, optimizing MongoDB queries, and scaling Socket.IO infrastructure.",
      achievements: [
        "Reduced API response time by 40% through query optimization",
        "Architected real-time collaboration system handling 10k+ concurrent users",
        "Mentored junior developers on backend best practices",
      ],
    },
    {
      year: "2022 - 2023",
      title: "Backend Developer",
      company: "StartupHub Tech",
      location: "Bangalore, India",
      description: "Developed and maintained RESTful APIs, implemented authentication systems, and designed database schemas for multiple SaaS products.",
      achievements: [
        "Built complete backend for 3 production applications",
        "Implemented JWT-based authentication system",
        "Designed and optimized MongoDB schemas reducing storage by 30%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Career Journey
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">
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
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
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
