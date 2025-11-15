import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1 order-2">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-2xl"></div>
              <img
                src={developerPortrait}
                alt="About Sabarinathan"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-8 lg:order-2 order-1">
            <div className="space-y-4">
              <p className="text-accent text-sm uppercase tracking-widest font-medium">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl font-bold">
                Crafting Robust <span className="gradient-text">Backend Systems</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Backend Developer with 2 years of experience specializing in building 
                scalable and efficient server-side applications. My expertise lies in crafting 
                robust APIs, designing complex database architectures, and implementing real-time 
                collaboration systems.
              </p>
              <p>
                With a strong foundation in mathematics and a passion for problem-solving, 
                I approach backend development with analytical precision and attention to detail. 
                I thrive on creating systems that are not just functional, but elegant and maintainable.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">2+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>

              <div className="space-y-2">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>

              <div className="space-y-2">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">B.Sc</h3>
                <p className="text-sm text-muted-foreground">Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
