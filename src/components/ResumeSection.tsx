import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Calendar, MapPin, Building } from "lucide-react";

const ResumeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "Trainer/President",
      company: "CyberHunterClub | Quantum University",
      location: "Roorkee, Uttarakhand",
      period: "September 2023 - Present",
      type: "Leadership Role",
      description: "Leading CyberHunter, Quantum University's official student-run cybersecurity club, guiding and training 100+ students in cybersecurity practices and ethical hacking.",
      achievements: [
        "Taught hands-on workshops on Linux, ethical hacking, penetration testing, and cybersecurity tools like Metasploit, Nmap, and Burp Suite",
        "Organized and oversaw CTF challenges, awareness sessions, and skill-development programs",
        "Enhanced strong leadership, teamwork, and communication skills through event management and junior mentoring",
        "Taught students Vulnerability Assessment and Penetration Testing (VAPT) projects and ethical hacking practices"
      ],
      technologies: ["Linux", "Metasploit", "Nmap", "Burp Suite", "VAPT", "CTF", "Ethical Hacking"]
    },
    {
      title: "Network Security Assessment Intern",
      company: "Vapco Engineers Pvt. Ltd.",
      location: "Belapur, Navi Mumbai",
      period: "July 2024 - August 2024",
      type: "Internship",
      description: "Performed comprehensive Network Security Assessment, determined vulnerabilities, evaluated risks, and compiled in-depth security reports for corporate IT infrastructure.",
      achievements: [
        "Attained hands-on experience in corporate IT security practices and enhanced skills in threat analysis and countermeasures",
        "Worked with the security team to suggest preventive strategies for network defense fortification",
        "Increased knowledge of professional industry tools and methodologies applied in vulnerability assessments",
        "Compiled detailed security reports with risk assessments and mitigation strategies"
      ],
      technologies: ["Network Security", "Vulnerability Assessment", "Risk Analysis", "Security Reporting", "Threat Analysis"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Quantum University",
      location: "Roorkee, Uttarakhand",
      period: "2022 - 2026",
      grade: "CGPA: 7.25/10",
      highlights: [
        "Built strong foundation in core computer science subjects including Data Structures & Algorithms, Operating Systems, Networks, and Database Systems",
        "Club President of CyberHunter, coordinating over 100 members and organizing practical cybersecurity training workshops",
        "Achieved 11th position at the NCIIPC-AICTE Pentathon 2024 Grand Finale, competing among top teams nationally",
        "Certified AppSec Practitioner (CAP) with hands-on experience in VAPT, Linux, Metasploit, Nmap, Burp Suite, and Raspberry Pi projects",
        "Actively participate in national-level Capture the Flag (CTF) competitions to sharpen problem-solving and ethical hacking skills"
      ]
    },
    {
      degree: "Senior Secondary Education",
      institution: "Katras College",
      location: "Dhanbad, State Board",
      period: "2019 - 2021",
      grade: "Score: 63.8%",
      highlights: [
        "Completed higher secondary education with focus on Science stream",
        "Developed foundational knowledge in Mathematics, Physics, and Chemistry",
        "Participated in various academic and extracurricular activities"
      ]
    },
    {
      degree: "Secondary Education",
      institution: "DAV+2 High School Katras",
      location: "Dhanbad, State Board",
      period: "2018 - 2019",
      grade: "Score: 71.6%",
      highlights: [
        "Completed secondary education with strong academic performance",
        "Built fundamental knowledge across core subjects",
        "Demonstrated consistent academic excellence and discipline"
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
                    className={`ml-12 md:ml-20 card-gradient-hover ${
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
                  className={`card-gradient-hover ${
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
            <Card className="text-white card-gradient-hover" style={{background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(262 83% 58%))'}}>
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
