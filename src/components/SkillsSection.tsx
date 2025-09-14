import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Shield, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch,
  Terminal,
  Lock,
  Bug
} from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 },
        { name: "HTML/CSS", level: 85 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      skills: [
        { name: "Nmap", level: 90 },
        { name: "Metasploit", level: 85 },
        { name: "Burp Suite", level: 85 },
        { name: "Wireshark", level: 80 },
        { name: "Kali Linux", level: 85 },
        { name: "VAPT", level: 80 }
      ]
    },
    {
      title: "Security Expertise",
      icon: Lock,
      skills: [
        { name: "Network Security", level: 85 },
        { name: "Threat Management", level: 80 },
        { name: "Risk Management", level: 75 },
        { name: "Cyber Forensics", level: 75 },
        { name: "Bug Bounty", level: 70 },
        { name: "SIEM", level: 70 }
      ]
    },
    {
      title: "Development & Tools",
      icon: Globe,
      skills: [
        { name: "Web Development", level: 80 },
        { name: "Git & Github", level: 85 },
        { name: "Project Leading", level: 85 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Flask", level: 75 }
      ]
    }
  ];

  const tools = [
    { name: "Nmap", icon: Bug },
    { name: "Kali Linux", icon: Terminal },
    { name: "Metasploit", icon: Lock },
    { name: "Wireshark", icon: Bug },
    { name: "Burp Suite", icon: Lock },
    { name: "Hydra", icon: Lock },
    { name: "Git & Github", icon: GitBranch },
    { name: "SIEM", icon: Shield },
    { name: "VAPT", icon: Bug },
    { name: "Raspberry Pi", icon: Server },
    { name: "Python Flask", icon: Server },
    { name: "FastAPI", icon: Server },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            A comprehensive overview of my technical skills and proficiency across various domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`p-6 bg-card border-border card-gradient-hover ${
                  isVisible ? 'animate-fade-in-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-accent-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies - Marquee */}
        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Tools & Technologies
          </h3>
          <div className="marquee max-w-6xl mx-auto">
            <div className="marquee-content">
              {[...tools, ...tools].map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Badge 
                    key={`${tool.name}-${index}`}
                    variant="outline" 
                    className="px-6 py-3 text-base hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-300 cursor-default"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tool.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;