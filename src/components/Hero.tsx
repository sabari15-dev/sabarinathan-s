import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-accent text-xs sm:text-sm uppercase tracking-widest font-medium">
                Backend Developer | Node.js | TypeScript | Backend Systems
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Sabarinathan <span className="text-accent">Sundaram</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Building scalable, secure server-side applications
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Backend Developer with 2 years and 8 months of experience building backend applications
              using Node.js, Express.js, TypeScript, and MongoDB. Experienced in REST API development,
              authentication, RBAC, multi-tenant architecture, real-time communication, service
              automation, CI/CD workflows, MCP server development, and backend troubleshooting.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/sabarinathan-s-1bb937259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sabarinathan978823@gmail.com"
                aria-label="Email"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img
                src={developerPortrait}
                alt="Sabarinathan - Backend Developer"
                className="relative rounded-2xl w-full object-cover shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
