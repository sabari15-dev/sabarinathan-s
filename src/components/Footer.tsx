import { Code2, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-border px-4 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Sabari<span className="text-accent">nathan</span></span>
            </div>
            <p className="text-muted-foreground">
              Backend Developer crafting scalable solutions with clean code and modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sabari@example.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Sabarinathan S. Built with
            <Heart className="w-4 h-4 text-accent fill-accent" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
