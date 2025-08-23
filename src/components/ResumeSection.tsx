import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Calendar, MapPin, Building } from "lucide-react";

const ResumeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "TechCorp Solutions",
      location: "New Delhi, India",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led development of secure web applications and implemented cybersecurity best practices across multiple projects.",
      achievements: [
        "Reduced security vulnerabilities by 80% through implementation of OWASP guidelines",
        "Mentored junior developers in secure coding practices",
        "Architected microservices infrastructure serving 100K+ users"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker"]
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet Inc.",
      location: "Mumbai, India",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Conducted security assessments and penetration testing for enterprise clients.",
      achievements: [
        "Performed 50+ security audits and vulnerability assessments",
        "Developed automated security testing tools",
        "Reduced incident response time by 60%"
      ],
      technologies: ["Python", "Burp Suite", "Nmap", "Wireshark", "Metasploit"]
    },
    {
      title: "Junior Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Developed web applications and gained foundational experience in software development lifecycle.",
      achievements: [
        "Built responsive web applications using modern frameworks",
        "Collaborated with cross-functional teams on agile projects",
        "Implemented CI/CD pipelines for faster deployment"
      ],
      technologies: ["JavaScript", "React", "MongoDB", "Express.js", "Git"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Quantum University",
      location: "Roorkee, Uttarakhand, India",
      period: "2022 - 2026",
      grade: "7.5/10",
      highlights: [
        "Specialized in Cybersecurity and Network Security",
        "Leading a cybersecurity club in University.",
        "President of the CyberHunter Club.",
        "Participated in various CTFs and Hackathons.",
        "National level CTF Finalist (Pentathon2024)."
      ]
    }
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

    const section = document.getElementById('resume');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            My journey through various roles in software development and cybersecurity
          </p>
          
          {/* Download Resume Button */}
          <div className={`${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Button 
              className="bg-accent-primary hover:bg-accent-primary/90 button-glow"
              onClick={() => {
                // Placeholder for resume download
                window.open('/public/Myresume.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              Work Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index}
                    className={`ml-12 md:ml-20 hover:shadow-lg transition-all duration-300 ${
                      isVisible ? 'animate-slide-in-right' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 bg-accent-primary rounded-full shadow-glow"></div>
                    
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-accent-primary">{exp.title}</h4>
                          <div className="flex items-center text-muted-foreground mt-1">
                            <Building className="h-4 w-4 mr-1" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <Badge variant="outline" className="mb-1">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="leading-relaxed">{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-scale' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-accent-primary mb-2">{edu.degree}</h4>
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Badge className="bg-accent-primary text-white">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                <p className="mb-6 opacity-90">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Let's Connect
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.open('https://www.linkedin.com/in/rishuburnwal/', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
