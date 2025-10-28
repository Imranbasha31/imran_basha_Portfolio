import { Card } from "@/components/ui/card";
import { Code2, Cloud, Database, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Java Development",
      description: "Strong foundation in Java, Spring Boot, and object-oriented programming"
    },
    {
      icon: Cloud,
      title: "AWS Expertise",
      description: "Proficient in EC2, S3, Lambda, RDS, and cloud architecture"
    },
    {
      icon: Database,
      title: "Database Skills",
      description: "Experience with MySQL, PostgreSQL, and NoSQL databases"
    },
    {
      icon: Shield,
      title: "Best Practices",
      description: "Focus on clean code, testing, and secure development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated fresher Java developer with hands-on AWS experience and a passion for creating efficient, scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 backdrop-blur-sm bg-card/80"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
