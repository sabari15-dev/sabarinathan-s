import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 relative px-4 md:px-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent text-sm uppercase tracking-widest font-medium">
            Academic Background
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-2xl bg-card border border-border hover-lift">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Mathematics</h3>
                <p className="text-accent font-medium mb-4">University Name • 2019 - 2022</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Graduated with strong foundation in logical thinking, analytical reasoning, 
                  and problem-solving. Specialized in discrete mathematics and algorithms, 
                  which directly translates to writing efficient backend code.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>Strong analytical and problem-solving skills</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>Deep understanding of algorithms and data structures</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>Excellent mathematical and logical reasoning abilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
