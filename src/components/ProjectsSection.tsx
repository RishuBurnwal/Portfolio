import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState<{[key: number]: number}>({});

  const projects = [
    {
      title: "DICE - Dynamic Intelligence Countermeasures Engine",
      description: "Enterprise-grade, AI-powered cybersecurity platform for real-time threat detection, automated mitigation, and intelligent defense mechanisms. Features AI-driven behavioral analysis, deep packet inspection, incident response, and advanced monitoring dashboards with scalable deployment capabilities.",
      image: "/Portfolio.gif",
      images: ["/Portfolio.gif", "/assets/Mypic.jpg", "/placeholder.svg"],
      tech: ["Node.js", "TypeScript", "React", "Python", "MongoDB", "Redis", "AI/ML"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "PiGuard Pro - Advanced Network Control Dashboard",
      description: "Professional-grade network security and control dashboard for Raspberry Pi Zero W. Features real-time device management, advanced traffic filtering, content modification using Mitmproxy, iptables, and dnsmasq with FastAPI backend and responsive Tailwind CSS dashboard.",
      image: "/Portfolio.gif",
      images: ["/Portfolio.gif", "/assets/Mypic.jpg", "/placeholder.svg"],
      tech: ["FastAPI", "Python", "Tailwind CSS", "SQLite", "Raspberry Pi", "Network Security"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "ChatPi Hub - Complete Local Chat Server",
      description: "Python Flask-based local chat server with WhatsApp-style messaging and group chat functionality. Features end-to-end encryption, real-time notifications, file sharing, admin dashboard, and mobile-responsive design with customizable themes.",
      image: "/Portfolio.gif",
      images: ["/Portfolio.gif", "/assets/Mypic.jpg", "/placeholder.svg"],
      tech: ["Python", "Flask", "WebSocket", "SQLite", "HTML/CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Planner with Email Verification & Unsubscribe",
      description: "PHP-based task management system with task creation, completion, and deletion. Features email subscription with OTP verification, hourly CRON-based task reminders, unsubscribe functionality, and fake mail testing using Mailpit + msmtp.",
      image: "/Portfolio.gif",
      images: ["/Portfolio.gif", "/assets/Mypic.jpg", "/placeholder.svg"],
      tech: ["PHP", "MySQL", "CRON", "Mailpit", "msmtp", "Bash"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio - Modern Responsive Portfolio",
      description: "Developed a modern, fully responsive portfolio website using React 18, TypeScript, Vite, and Tailwind CSS. Features dark/light mode, smooth animations with Framer Motion, SEO optimization, and accessibility compliance (WCAG 2.1 AA).",
      image: "/Portfolio.gif",
      images: ["/Portfolio.gif", "/assets/Mypic.jpg", "/placeholder.svg"],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
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

  // Auto-rotate project images for non-featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectImageIndex(prev => {
        const newIndex = { ...prev };
        projects.forEach((project, projectIndex) => {
          if (!project.featured) {
            const currentIndex = prev[projectIndex] || 0;
            newIndex[projectIndex] = (currentIndex + 1) % project.images.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projects]);

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
    <section id="projects" className="py-20 bg-background">
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
        <div className="max-w-7xl mx-auto mb-16">
          <Card className={`overflow-hidden card-gradient-hover ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Project Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      {currentProj.title.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentProj.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {currentProj.featured && (
                          <Badge className="bg-accent-primary text-white text-xs">Featured</Badge>
                        )}
                        <span className="text-sm text-muted-foreground">Project #{currentProject + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevProject}
                      className="hover:bg-accent-primary/10"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex gap-1 px-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentProject(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentProject 
                              ? 'bg-accent-primary' 
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextProject}
                      className="hover:bg-accent-primary/10"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6 p-6">
                {/* Project Preview */}
                <div className="lg:col-span-1">
                  <div className="relative group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-card">
                      <img
                        src={currentProj.image}
                        alt={currentProj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center border-2 border-dashed border-muted-foreground/20 group-hover:border-accent-primary/50 transition-colors">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-accent-primary/40 mb-2">
                            {currentProj.title.charAt(0)}
                          </div>
                          <p className="text-xs text-muted-foreground">Preview</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-accent-primary">About This Project</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentProj.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-accent-primary rounded-full" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.tech.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-accent-secondary rounded-full" />
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'Security Focused'].map((feature, index) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="bg-accent-primary hover:bg-accent-primary/90 button-glow flex-1 sm:flex-none"
                      onClick={() => window.open(currentProj.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 sm:flex-none hover:bg-accent-primary hover:text-white"
                      onClick={() => window.open(currentProj.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Projects Rail */}
        <div className="relative">
          <h3 className={`text-2xl font-bold mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Other <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h3>
          
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className={`group cursor-pointer relative overflow-hidden card-gradient-hover flex-shrink-0 w-72 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                  onClick={() => setCurrentProject(projects.findIndex(p => p.title === project.title))}
                  onMouseEnter={(e) => e.currentTarget.style.pointerEvents = 'auto'}
                >
                  <CardContent className="p-0 relative z-20 h-full flex flex-col">
                    {/* Project Thumbnail with Slider */}
                    <div className="aspect-video bg-transparent relative overflow-hidden">
                      {project.images && (
                        <>
                          <img
                            src={project.images[projectImageIndex[projects.findIndex(p => p.title === project.title)] || 0]}
                            alt={`${project.title} - Image ${(projectImageIndex[projects.findIndex(p => p.title === project.title)] || 0) + 1}`}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                            {project.images.map((_, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  imgIndex === (projectImageIndex[projects.findIndex(p => p.title === project.title)] || 0)
                                    ? 'bg-accent-primary'
                                    : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold mb-2 group-hover:text-accent-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-grow">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs px-2 py-0.5">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-accent-primary hover:bg-accent-primary/90 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 text-xs hover:bg-accent-primary hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <ChevronLeft className="h-3 w-3" />
              Scroll to explore more projects
              <ChevronRight className="h-3 w-3" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;