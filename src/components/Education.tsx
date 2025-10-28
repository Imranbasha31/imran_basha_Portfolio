import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
const Education = () => {
  return <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education & Certifications
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">The New College</h3>
                  <p className="text-muted-foreground mb-2">Madras University</p>
                  <p className="text-sm text-muted-foreground mb-3">2023 - 2026</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">CGPA: 7.5/10</Badge>
                    <Badge variant="secondary">First Class</Badge>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">AWS Certified Solutions Architect - Associate (In Progress)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">Oracle Certified Associate, Java SE 8 Programmer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-foreground">Spring Framework Certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;