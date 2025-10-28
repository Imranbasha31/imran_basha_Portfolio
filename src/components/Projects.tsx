import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Based E-Commerce Platform",
      description: "Developed a scalable e-commerce backend using Spring Boot and AWS services. Implemented microservices architecture with Lambda functions for order processing.",
      technologies: ["Spring Boot", "AWS Lambda", "RDS", "S3", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "Built a real-time messaging system with WebSocket support. Deployed on AWS EC2 with load balancing and auto-scaling capabilities.",
      technologies: ["Java", "WebSocket", "MySQL", "AWS EC2", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Expense Tracker API",
      description: "RESTful API for personal finance management with JWT authentication. Integrated AWS CloudWatch for monitoring and logging.",
      technologies: ["Spring Boot", "PostgreSQL", "JWT", "AWS CloudWatch"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with role-based access control. Deployed using AWS ECS with containerized services.",
      technologies: ["Spring MVC", "Hibernate", "MongoDB", "Docker", "ECS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical applications showcasing Java development and AWS cloud expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 backdrop-blur-sm bg-card/80"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:border-primary transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-primary-glow"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
