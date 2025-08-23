import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  GithubIcon, 
    LinkedinIcon, 
  Twitter,
  InstagramIcon,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a message.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rishukumarburnwal9525@gmail.com",
      link: "mailto:rishukumarburnwal9525@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95253 XXXXX",
      link: "tel:+9195253XXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Roorkee, Uttarakhand, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      url: "https://github.com/rishuburnwal",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      url: "https://linkedin.com/in/rishuburnwal",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/rishuburnwal",
      color: "hover:text-blue-400"
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      url: "https://instagram.com/rishu.burnwal",
      color: "hover:text-pink-500"
    },
    {
      icon: MessageSquare,
      label: "Discord",
      url: "https://discord.com/users/912558419209232384",
      color: "hover:text-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Ready to discuss your next project or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="mr-3 h-6 w-6 text-accent-primary" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent-primary hover:bg-accent-primary/90 button-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.label} className="interactive-hover cursor-pointer" onClick={() => window.open(info.link, '_blank')}>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-accent-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media Links */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    return (
                      <Button
                        key={social.label}
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(social.url, '_blank')}
                        className={`transition-all duration-300 ${social.color} hover:scale-110`}
                      >
                        <social.icon className="h-5 w-5" />
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Additional CTA */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl mb-2">Ready to collaborate?</h4>
                <p className="mb-4 opacity-90">
                  Let's turn your ideas into reality with secure, innovative solutions.
                </p>
                <Button 
                  variant="secondary"
                  onClick={() => window.open('mailto:rishukumarburnwal9525@gmail.com', '_blank')}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;