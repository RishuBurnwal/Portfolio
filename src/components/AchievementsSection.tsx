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
  Star
} from "lucide-react";

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      type: "certification",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      description: "Advanced certification in ethical hacking methodologies and penetration testing techniques.",
      credentialId: "ECC-1234567890",
      icon: FileCheck,
      color: "text-green-500"
    },
    {
      type: "certification",
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      credentialId: "AWS-SAA-987654321",
      icon: FileCheck,
      color: "text-orange-500"
    },
    {
      type: "award",
      title: "Best Security Project",
      issuer: "National Cybersecurity Competition",
      date: "2023",
      description: "First place for developing an innovative threat detection system using machine learning.",
      credentialId: "NSC-2023-001",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      type: "certification",
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      description: "Professional certification in cloud architecture and security on Google Cloud Platform.",
      credentialId: "GCP-PCA-456789123",
      icon: FileCheck,
      color: "text-blue-500"
    },
    {
      type: "award",
      title: "Outstanding Graduate",
      issuer: "University Computer Science Dept.",
      date: "2022",
      description: "Recognized for academic excellence and contributions to cybersecurity research.",
      credentialId: "UNI-CS-2022",
      icon: Star,
      color: "text-purple-500"
    }
  ];

  // Auto-rotate achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(achievements.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [achievements.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(achievements.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(achievements.length / 3)) % Math.ceil(achievements.length / 3));
  };

  const visibleAchievements = achievements.slice(currentSlide * 3, (currentSlide * 3) + 3);

  return (
    <section id="achievements" className="py-20 bg-gradient-hero">
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
          <div className="grid md:grid-cols-3 gap-6">
            {visibleAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={achievement.credentialId}
                  className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-scale' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <CardContent className="p-6">
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
                    <div className="space-y-3">
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
                        <p className="text-xs text-muted-foreground">
                          Credential ID: {achievement.credentialId}
                        </p>
                      </div>
                    </div>

                    {/* Verify Button */}
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full hover:bg-accent-primary hover:text-white transition-colors"
                        onClick={() => {
                          // Placeholder for credential verification
                          window.open('#', '_blank');
                        }}
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Verify Credential
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background/80 hover:bg-background shadow-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background/80 hover:bg-background shadow-md"
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent-primary shadow-glow' 
                    : 'bg-muted hover:bg-muted-foreground'
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
            <div className="text-sm text-muted-foreground">Awards & Recognition</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Verification Rate</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-primary mb-2">2023</div>
            <div className="text-sm text-muted-foreground">Latest Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;