import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-to-r from-white to-accent-primary bg-clip-text text-transparent">
              Rishu Kumar
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Passionate developer and cybersecurity enthusiast crafting secure, 
              innovative solutions that make a difference in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Achievements', id: 'achievements' },
                { label: 'Resume', id: 'resume' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-primary-foreground/80 hover:text-accent-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Let's Connect</h4>
            <p className="text-primary-foreground/80">
              Ready to collaborate on your next project? 
              Let's create something amazing together!
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent-primary hover:bg-accent-primary/90 text-white border-none"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>© {currentYear} Rishu Kumar. All rights reserved.</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;