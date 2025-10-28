import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring MVC", "Hibernate", "JUnit", "Maven"]
    },
    {
      category: "AWS Services",
      skills: ["EC2", "S3", "Lambda", "RDS", "CloudWatch", "IAM", "VPC", "ECS"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Redis"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "Jenkins", "REST APIs", "Microservices", "Linux"]
    },
    {
      category: "Concepts",
      skills: ["OOP", "Data Structures", "Algorithms", "Cloud Architecture", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, cloud-native applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
