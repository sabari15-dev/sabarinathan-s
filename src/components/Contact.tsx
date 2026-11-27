import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hiring for a Backend Developer Role? <span className="gradient-text">Let's Talk</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Looking for backend development opportunities where I can contribute to building scalable, secure, and reliable server-side applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:sabarinathan978823@gmail.com"
                className="text-muted-foreground text-xs break-all hover:text-accent transition-colors"
              >
                sabarinathan978823@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a
                href="tel:+918925004960"
                className="text-muted-foreground text-xs hover:text-accent transition-colors"
              >
                +91 8925004960
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/sabarinathan-s-1bb937259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm break-all hover:text-accent transition-colors"
              >
                linkedin.com/in/sabarinathan-s-1bb937259
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Email and resume</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Email opens in your mail app, addressed to me. The resume downloads as a PDF.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg"
                >
                  <a href="mailto:sabarinathan978823@gmail.com?subject=Backend%20Developer%20Role">
                    Email Me
                    <Mail className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="py-6 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <a href="/Sabarinathan-Sundaram-Resume.pdf" download>
                    Download Resume
                    <Download className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
