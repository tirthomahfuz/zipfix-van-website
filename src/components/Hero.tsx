import { Button } from "@/components/ui/button";
import { Phone, Clock, Calendar, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Comprehensive Handyman Services
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Just inquire – jobs big or small.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-lg">Quick response time</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-lg">Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-lg">Professional, reliable work</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 gap-2"
                asChild
              >
                <a href="tel:604-322-5009">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
