import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "SecureChat Application",
      description: "End-to-end encrypted messaging platform with advanced security features including message self-destruction, secure file sharing, and multi-factor authentication.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "WebRTC", "Socket.io", "Encryption"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Vulnerability Scanner Tool",
      description: "Comprehensive web application security scanner that identifies OWASP Top 10 vulnerabilities with detailed reporting and remediation suggestions.",
      image: "/placeholder.svg",
      tech: ["Python", "Flask", "SQLAlchemy", "Selenium", "BeautifulSoup"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript, featuring dynamic animations and dark mode support.",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with real-time collaboration, file attachments, and advanced filtering capabilities.",
      image: "/placeholder.svg",
      tech: ["Next.js", "MongoDB", "Prisma", "NextAuth.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Network Monitor Dashboard",
      description: "Real-time network monitoring dashboard with traffic analysis, threat detection, and automated alerting system.",
      image: "/placeholder.svg",
      tech: ["Python", "Django", "PostgreSQL", "Chart.js", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Showcasing my latest work in web development, cybersecurity, and innovative software solutions
          </p>
        </div>

        {/* Main Project Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="grid lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted">
                <div className="aspect-video bg-gradient-secondary flex items-center justify-center">
                  <div className="text-6xl font-bold text-accent-primary/30">
                    {currentProj.title.charAt(0)}
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Project Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold">{currentProj.title}</h3>
                  {currentProj.featured && (
                    <Badge className="bg-accent-primary text-white">Featured</Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentProj.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProj.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-accent-primary hover:text-white transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-accent-primary hover:bg-accent-primary/90 button-glow"
                    onClick={() => window.open(currentProj.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(currentProj.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-accent-primary shadow-glow' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
              onClick={() => setCurrentProject(index)}
            >
              <CardContent className="p-0">
                {/* Project Thumbnail */}
                <div className="aspect-video bg-gradient-secondary flex items-center justify-center">
                  <div className="text-4xl font-bold text-accent-primary/50 group-hover:text-accent-primary transition-colors">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
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
    </section>
  );
};

export default ProjectsSection;