import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-3xl font-bold text-foreground mb-4">
          ZIP<span className="text-primary">FIX</span>
        </div>
        
        <a href="tel:604-322-5009" className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-block mb-4">
          604-322-5009
        </a>
        
        <p className="text-muted-foreground">
          Quick response time • Flexible scheduling
        </p>
      </div>
    </footer>
  );
};

export default Footer;
