import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 md:px-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-accent text-sm uppercase tracking-widest font-medium">
                Backend Developer
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Sabarinathan<span className="text-accent">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Building scalable backend systems
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              2 years of experience crafting robust APIs, real-time collaboration systems, 
              and scalable backend architectures using Node.js, TypeScript, and MongoDB.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg group"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sabari@example.com"
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
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
