import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Trophy,
  FileCheck,
  Star,
  Play
} from "lucide-react";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    // === 2024 ===
    {
      type: "award",
      title: "DSCI & EY Hackathon2024 Finalist",
      issuer: "Data Security Council of India",
      date: "December 2024",
      description: "Finalist in the DSCI & EY Cybersecurity Hackathon2024, specializing in CTF challenges and ethical hacking. Recognized as a top contender for cybersecurity problem-solving and penetration testing.",
      credentialId: "DSCI-EY-2024-FINALIST",
      demoUrl: "https://www.dsci.in/events/dsci-ey-cyber-hackathon-2024",
      icon: Trophy,
      color: "text-blue-500"
    },
    {
      type: "certification",
      title: "Complete Guide to SQL for Data Engineering",
      issuer: "LinkedIn",
      date: "October 2024",
      description: "Advanced SQL certification covering data engineering concepts from beginner to advanced level, focusing on data manipulation and database optimization.",
      credentialId: "a0bd67c01f71a31333982c021e6e0e32a28196a2b19304b4b4779b755211973c",
      certificateUrl: "https://www.linkedin.com/learning/certificates/a0bd67c01f71a31333982c021e6e0e32a28196a2b19304b4b4779b755211973c",
      demoUrl: "https://www.linkedin.com/learning/paths/become-a-data-engineer",
      icon: FileCheck,
      color: "text-blue-500"
    },
    {
      type: "certification",
      title: "Kali Linux Essential Training",
      issuer: "LinkedIn",
      date: "October 2024",
      description: "Comprehensive training in Kali Linux fundamentals for penetration testing and ethical hacking, covering essential tools and techniques.",
      credentialId: "98569078409390628a09b94ab772ae84a37fbf95398ba67cc23dc1fee0718b60",
      certificateUrl: "https://www.linkedin.com/learning/certificates/98569078409390628a09b94ab772ae84a37fbf95398ba67cc23dc1fee0718b60",
      demoUrl: "https://www.linkedin.com/learning/kali-linux-essential-training",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Kali Linux for Advanced Pen Testing",
      issuer: "LinkedIn",
      date: "October 2024",
      description: "Advanced penetration testing and ethical hacking techniques using Kali Linux, covering sophisticated attack vectors and defense mechanisms.",
      credentialId: "f9695b3da2e7f9453c77a46e97a1cf8d25c1d3d4bc72f1e149d703ceef47c154",
      certificateUrl: "https://www.linkedin.com/learning/certificates/f9695b3da2e7f9453c77a46e97a1cf8d25c1d3d4bc72f1e149d703ceef47c154",
      demoUrl: "https://www.linkedin.com/learning/penetration-testing-kali-linux",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      date: "September 2024",
      description: "Professional certification in application security, secure coding practices, vulnerability assessment, and DevSecOps integration.",
      credentialId: "9096291",
      certificateUrl: "https://www.credly.com/badges/9096291",
      demoUrl: "https://www.secops.group/certified-appsec-practitioner/",
      icon: FileCheck,
      color: "text-green-500"
    },
    {
      type: "certification",
      title: "Penetration Testing Web Apps with Burp Suite",
      issuer: "LinkedIn",
      date: "September 2024",
      description: "Specialized training in web application penetration testing using Burp Suite and Kali Linux for identifying and exploiting web vulnerabilities.",
      credentialId: "f7c1ae87ef328376fb7b51756eaae0150f42c3c1d0a032d13f194ccf2bd4fbc1",
      icon: FileCheck,
      color: "text-orange-500"
    },
    {
      type: "certification",
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "August 2024",
      description: "Comprehensive introduction to AI concepts, business applications, technical overview, and different AI platforms for intelligent solutions.",
      credentialId: "1-fc908ea1-8570-4856-9c19-89884c1fcde4",
      certificateUrl: "https://infyspringboard.onwingspan.com/en/verify/1-fc908ea1-8570-4856-9c19-89884c1fcde4",
      demoUrl: "https://infyspringboard.onwingspan.com/web/en/page/artificial-intelligence-foundation",
      icon: FileCheck,
      color: "text-purple-500"
    },
    {
      type: "certification",
      title: "Mastercard Cybersecurity Job Simulation",
      issuer: "Forage",
      date: "August 2024",
      description: "Practical cybersecurity simulation covering technical security awareness, data analysis, strategy development, and security awareness training.",
      credentialId: "Sb3Ta55ycobwrAFgi",
      certificateUrl: "https://www.theforage.com/achievements/Sb3Ta55ycobwrAFgi",
      demoUrl: "https://www.theforage.com/virtual-internships/prototype/RL3QGYhohEmPm3S5Q/Cybersecurity-Program",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Network Security Assessment Internship",
      issuer: "Vapco Engineers Private Limited",
      date: "July 2024",
      description: "Professional internship completion certificate for network security assessment, covering network architecture and wireless network security.",
      credentialId: "VAPCO-NSA-2024",
      demoUrl: "https://www.vapco.in/services/network-security-assessment/",
      icon: FileCheck,
      color: "text-blue-500"
    },
    {
      type: "certification",
      title: "Hands-on Penetration Testing with Netcat",
      issuer: "EC-Council",
      date: "May 2024",
      description: "Practical training in network reconnaissance, port scanning, and secure file transfers using Netcat for penetration testing scenarios.",
      credentialId: "0dd98d03-7f37-4607-ab94-aa3b685fab46",
      certificateUrl: "https://codered.eccouncil.org/certificate/0dd98d03-7f37-4607-ab94-aa3b685fab46",
      demoUrl: "https://codered.eccouncil.org/course/penetration-testing-with-netcat",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "award",
      title: "Pentathon2024 CTF Grand Finale",
      issuer: "NCIIPC-AICTE & MoE",
      date: "April 2024",
      description: "Achieved top finalist position in the national-level CTF hackathon at Amity University, Noida. Competed in real-world challenges including web security, reverse engineering, forensics, and Android security.",
      credentialId: "PENTATHON-2024-FINALIST",
      demoUrl: "https://www.nciipc.gov.in/events/pentathon-2024",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      type: "certification",
      title: "Google Cybersecurity Certificate",
      issuer: "Google (Coursera)",
      date: "March 2024",
      description: "Comprehensive 8-course program covering cybersecurity fundamentals, SIEM, IDS/IPS, Linux, SQL, Python programming, and threat detection.",
      credentialId: "BCHM5WP85Y3P",
      certificateUrl: "https://coursera.org/verify/professional-cert/BCHM5WP85Y3P",
      demoUrl: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      icon: FileCheck,
      color: "text-blue-500"
    },
    {
      type: "certification",
      title: "HTML & CSS",
      issuer: "Cisco",
      date: "January 2024",
      description: "Fundamental web development certification covering HTML structure, CSS styling, and responsive web design principles.",
      credentialId: "KxYWGE7l3xnsfaNh",
      certificateUrl: "https://www.credly.com/badges/KxYWGE7l3xnsfaNh",
      icon: FileCheck,
      color: "text-green-500"
    },
    {
      type: "certification",
      title: "TCS Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "January 2024",
      description: "Professional simulation covering IAM fundamentals, business process alignment, solution design, and IAM evaluation for enterprise security.",
      credentialId: "J2R6mjpyiNSMwcoR5",
      certificateUrl: "https://www.theforage.com/achievements/J2R6mjpyiNSMwcoR5",
      icon: FileCheck,
      color: "text-blue-500"
    },
    
    // === 2023 ===
    {
      type: "certification",
      title: "GitHub Basics",
      issuer: "Udemy",
      date: "November 2023",
      description: "Fundamental version control and collaboration skills using GitHub for software development and project management.",
      credentialId: "UC-fba51436-755a-4ceb-b674-f378de2d2643",
      certificateUrl: "https://www.udemy.com/certificate/UC-fba51436-755a-4ceb-b674-f378de2d2643/",
      icon: FileCheck,
      color: "text-gray-500"
    },
    {
      type: "certification",
      title: "Complete Computer Forensics Course (CFCT+)",
      issuer: "Udemy",
      date: "November 2023",
      description: "Professional computer forensics training covering evidence preservation, forensic analysis, data integrity management, and rules of evidence.",
      credentialId: "UC-72284087-7602-4dcf-aee3-041c78b5760c",
      certificateUrl: "https://www.udemy.com/certificate/UC-72284087-7602-4dcf-aee3-041c78b5760c/",
      demoUrl: "https://www.udemy.com/course/computer-forensics-fundamentals-cfct+",
      icon: FileCheck,
      color: "text-purple-500"
    },
    {
      type: "certification",
      title: "Complete Ethical Hacking Course",
      issuer: "Udemy",
      date: "November 2023",
      description: "Comprehensive ethical hacking training covering Metasploit, password cracking, Burp Suite, cryptography, and social engineering techniques.",
      credentialId: "UC-a6d59b8e-fa94-4273-87cd-6cf973132a27",
      certificateUrl: "https://www.udemy.com/certificate/UC-a6d59b8e-fa94-4273-87cd-6cf973132a27/",
      demoUrl: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Advanced Level Ethical Hacking Course",
      issuer: "Udemy",
      date: "October 2023",
      description: "Advanced ethical hacking techniques including network scanning, DDoS attacks, sniffing, and sophisticated penetration testing methods.",
      credentialId: "UC-4c7c5d7e-5c8c-4b9c-8c1c-8c1c8c1c8c1c",
      certificateUrl: "https://www.udemy.com/certificate/UC-4c7c5d7e-5c8c-4b9c-8c1c-8c1c8c1c8c1c/",
      demoUrl: "https://www.udemy.com/course/learn-ethical-hacking-advanced/",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Metasploit Essential Training",
      issuer: "LinkedIn",
      date: "October 2023",
      description: "Professional training in Metasploit framework for exploit development, penetration testing, and advanced cybersecurity techniques.",
      credentialId: "3200c4a42e2685dbc8bf93df4ed6a514d98e050fc24ef37b5b991823a05bc6a5",
      certificateUrl: "https://www.linkedin.com/learning/certificates/3200c4a42e2685dbc8bf93df4ed6a514d98e050fc24ef37b5b991823a05bc6a5",
      demoUrl: "https://www.linkedin.com/learning/metasploit-essential-training",
      icon: FileCheck,
      color: "text-red-500"
    },
    {
      type: "certification",
      title: "Penetration Testing Web Apps (2023)",
      issuer: "LinkedIn",
      date: "September 2023",
      description: "Web application penetration testing using Kali Linux and Burp Suite for identifying and exploiting security vulnerabilities.",
      credentialId: "f7c1ae87ef328376fb7b51756eaae0150f42c3c1d0a032d13f194ccf2bd4fbc1",
      icon: FileCheck,
      color: "text-orange-500"
    },
    
    // === 2019 ===
    {
      type: "certification",
      title: "Ethical Hacking Course For Beginners",
      issuer: "Udemy",
      date: "August 2019",
      description: "Foundational ethical hacking course covering password cracking, Kali Linux basics, and fundamental cybersecurity concepts.",
      credentialId: "UC-8c1c8c1c-8c1c-4b9c-8c1c-8c1c8c1c8c1c",
      certificateUrl: "https://www.udemy.com/certificate/UC-8c1c8c1c-8c1c-4b9c-8c1c-8c1c8c1c8c1c/",
      demoUrl: "https://www.udemy.com/course/learn-cyber-security-from-scratch/",
      icon: FileCheck,
      color: "text-blue-500"
    }
  ];

  // Manual slide control only - auto-rotation disabled

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

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(achievements.length / 3));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(achievements.length / 3)) % Math.ceil(achievements.length / 3));
  };

  // Handle swipe for touch devices
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  const visibleAchievements = achievements.slice(currentSlide * 3, (currentSlide * 3) + 3);

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Professional certifications, awards, and recognitions that validate my expertise and commitment to excellence
          </p>
        </div>

        {/* Achievement Cards Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="grid md:grid-cols-3 gap-6 achievements-slider transition-transform duration-500 ease-in-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={achievement.credentialId}
                  className={`group relative overflow-hidden card-gradient-hover ${
                    isVisible ? 'animate-fade-in-scale' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  {/* Background Image with Blur - Responsive Frame */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/assets/Mypic.jpg"
                      alt="Background"
                      className="w-full h-full object-cover object-center opacity-60 blur-sm scale-110"
                      style={{
                        filter: 'blur(2px)',
                        minWidth: '100%',
                        minHeight: '100%'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-background/60" />
                  <CardContent className="p-6 flex flex-col h-full relative z-10">
                    {/* Achievement Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center ${achievement.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant={achievement.type === 'certification' ? 'default' : 'secondary'}>
                        {achievement.type}
                      </Badge>
                    </div>

                    {/* Achievement Content */}
                    <div className="space-y-3 flex-grow">
                      <h3 className="font-bold text-lg group-hover:text-accent-primary transition-colors">
                        {achievement.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-1" />
                        {achievement.issuer}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {achievement.date}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>

                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground break-all">
                          <span className="font-medium">ID: </span>
                          <span className="font-mono">{achievement.credentialId}</span>
                        </p>
                      </div>
                    </div>

                    {/* Verify Credentials Button - Fixed at bottom center */}
                    <div className="pt-4 mt-auto flex justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full max-w-[200px] hover:bg-accent-primary hover:text-white transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (achievement.certificateUrl) {
                            window.open(achievement.certificateUrl, '_blank');
                          } else if (achievement.demoUrl) {
                            window.open(achievement.demoUrl, '_blank');
                          } else {
                            navigator.clipboard.writeText(achievement.credentialId);
                            // You might want to add a toast notification here
                          }
                        }}
                      >
                        <span>Verify Credentials</span>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation Controls */}
          {achievements.length > 3 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background/80 hover:bg-background shadow-md z-10 hover:scale-110 transition-transform duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background/80 hover:bg-background shadow-md z-10 hover:scale-110 transition-transform duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        {/* Carousel Indicators */}
        {achievements.length > 3 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(achievements.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-accent-primary shadow-glow scale-125' 
                    : 'bg-muted hover:bg-muted-foreground hover:scale-110'
                }`}
              />
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">
              {achievements.filter(a => a.type === 'certification').length}+
            </div>
            <div className="text-sm text-muted-foreground">Professional Certifications</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">
              {achievements.filter(a => a.type === 'award').length}+
            </div>
            <div className="text-sm text-muted-foreground">Hackathon Achievements</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">2024</div>
            <div className="text-sm text-muted-foreground">Latest Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;