import { CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Services
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          From repairs to upgrades, ZipFix provides comprehensive handyman services. If you don't see your project listed, just inquire.
        </p>

        <div className="flex flex-col gap-4 text-left max-w-md mx-auto">
          <div className="flex items-center gap-3 text-lg">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Home repairs</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Cabinet & furniture work</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Doors, windows, and fixtures</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Condo repairs & upgrades</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Decks, patios, and more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
