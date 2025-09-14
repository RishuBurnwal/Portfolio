import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Rishu Kumar❤️",
    "a Developer😒",
    "a Techie😎",
    "a Student🥲",
    "a Cybersecurity Enthusiast😍"
  ];

  // Typing animation effect
  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typedText.length < phrase.length) {
        timeout = setTimeout(() => {
          setTypedText(phrase.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentPhrase]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello
              </p>
              
              {/* Dynamic Typing Text */}
              <div className="h-16 flex items-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-foreground">I am </span>
                  <span className="text-accent-primary">
                    {typedText}
                    <span className="animate-pulse border-r-2 border-accent-primary ml-1"></span>
                  </span>
                </h1>
              </div>
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I'm a Computer Science and Engineering student at Quantum University with a passion for cybersecurity. 
              As Club President of CyberHunter, I coordinate 100+ members and organize practical cybersecurity training workshops. 
              My proactive approach to learning and genuine passion for keeping computer systems secure sets me apart in this dynamic field.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-accent-primary hover:bg-accent-primary/90 text-white button-glow group"
              >
                Let's Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
              
              <Button
                variant="ghost"
                className="text-accent-primary hover:bg-accent-primary/10 transition-colors duration-300"
                onClick={() => {
                  // Placeholder for CV download functionality
                  window.open('/Myresume.pdf', '_blank');
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Stats or Quick Info */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">Top 11</div>
                <div className="text-sm text-muted-foreground">Pentathon 2024</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">100+</div>
                <div className="text-sm text-muted-foreground">Club Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-primary">CAP</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Flip Card */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="flip-card w-80 h-80">
              <div className="flip-card-inner">
                {/* Front - Professional Photo (rounded frame, image fits) */}
                <div className="flip-card-front bg-gradient-primary shadow-glow flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border-4 border-accent-primary/60 p-1 bg-background">
                    <img
                      src="/assets/Mypic.jpg"
                      alt="Rishu Kumar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Back - 3D Avatar using model-viewer (no circle, larger, glow behind) */}
                <div className="flip-card-back bg-transparent flex items-center justify-center rounded-none overflow-visible relative">
                  <div className="animate-float flex items-center justify-center relative">
                    <div
                      className="absolute -z-10 w-[420px] h-[420px] rounded-full blur-2xl opacity-60"
                      style={{
                        background: 'radial-gradient(circle at center, hsl(var(--accent-primary) / 0.5), transparent 60%)'
                      }}
                    />
                    <model-viewer
                      src="/assets/myavtar.glb"
                      alt="A 3D model of my avatar"
                      shadow-intensity="1"
                      camera-controls
                      auto-rotate
                      ar
                      autoplay
                      animation-name="wave"
                      style={{ width: '340px', height: '400px', background: 'transparent' }}
                    >
                    </model-viewer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
