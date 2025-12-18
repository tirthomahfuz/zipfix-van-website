import robPhoto from "@/assets/rob-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Robert
            </h2>
            <p className="text-xl text-foreground mb-4">
              Rob Tomich — cabinet maker by trade, handyman at heart.
            </p>
            <p className="text-lg text-muted-foreground">
              Serving Vancouver for over 40 years with reliable, honest workmanship.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={robPhoto} 
              alt="Rob Tomich - Professional Handyman" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
