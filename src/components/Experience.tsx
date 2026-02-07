import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
const experiences = [
  {
    year: "Feb 2024 – Present",
    title: "Backend Developer",
    company: "HEXR FACTORY IMMERSIVE TECH PVT LTD",
    location: "India",
    description:
      "Building scalable, high-performance backend systems using Node.js, TypeScript, Express.js, and Socket.IO, with a strong focus on real-time communication, system reliability, and performance optimization.",
    achievements: [
      "Designed and developed production-grade REST APIs and real-time communication modules",
      "Optimized MongoDB schemas, queries, and indexes to resolve large-scale database performance issues",
      "Improved API response time through efficient query optimization, indexing, and caching strategies",
      "Handled high-concurrency real-time traffic using Socket.IO with optimized event broadcasting",
      "Implemented Redis caching for faster data access, session management, and application-level performance improvements",
      "Managed large file and asset storage using MinIO, including 3D models and application assets",
      "Enhanced system reliability through robust error handling, logging, monitoring, and performance tuning",
      "Collaborated closely with frontend, QA, and product teams to deliver stable and maintainable backend services",
      "Supported deployment workflows and worked in Linux-based production environments",
    ],
  },
  {
    year: "Dec 2023 – Feb 2024",
    title: "Software Developer Trainee",
    company: "HEXR FACTORY IMMERSIVE TECH PVT LTD",
    location: "India",
    description:
      "Worked as a backend developer trainee, contributing to API development, database operations, and gaining hands-on experience with production-level backend workflows.",
    achievements: [
      "Assisted in backend API development using Node.js and Express.js",
      "Worked on MongoDB schema design and CRUD operations",
      "Supported debugging, testing, and enhancement of existing backend modules",
      "Learned production-level coding standards, version control practices, and team collaboration workflows",
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
