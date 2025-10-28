import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "imranbasha@example.com",
      href: "mailto:imranbasha@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@imranbasha"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "in/imranbasha"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or have an opportunity? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/80"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/80">
            <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="hover:border-primary transition-all duration-300"
                  asChild
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon className="h-5 w-5" />
                    {social.username}
                  </a>
                </Button>
              ))}
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:imranbasha@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
