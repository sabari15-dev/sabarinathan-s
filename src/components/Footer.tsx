import { Code2, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 pb-24 pt-8 sm:py-12 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Sabarinathan <span className="text-accent">Sundaram</span></span>
            </div>
            <p className="text-muted-foreground">
              Backend Developer
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Navigation</h3>
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
              <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#education" className="text-muted-foreground hover:text-accent transition-colors">
                Education
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
                href="https://www.linkedin.com/in/sabarinathan-s-1bb937259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sabarinathan978823@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Sabarinathan Sundaram. Built with
            <Heart className="w-4 h-4 text-accent fill-accent" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
