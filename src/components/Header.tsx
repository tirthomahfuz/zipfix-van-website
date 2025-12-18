import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVibrating(true);
      setTimeout(() => setIsVibrating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-bold text-foreground">
            ZIP<span className="text-primary">FIX</span>
          </div>

          <Button 
            size="lg"
            asChild
            className={isVibrating ? "animate-vibrate" : ""}
          >
            <a href="tel:604-322-5009" className="gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
