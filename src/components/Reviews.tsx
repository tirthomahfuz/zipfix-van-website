import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Kitsilano",
      text: "Rob's work is exceptional. Quick, professional, and great attention to detail."
    },
    {
      name: "James T.",
      location: "West End",
      text: "Highly recommend! Rob transformed our outdated cabinets beautifully."
    },
    {
      name: "Linda K.",
      location: "Mount Pleasant",
      text: "Honest, reliable service. Rob goes above and beyond every time."
    },
    {
      name: "David R.",
      location: "Yaletown",
      text: "Best handyman in Vancouver. Rob's craftsmanship is unmatched."
    },
    {
      name: "Maria S.",
      location: "Commercial Drive",
      text: "Professional and courteous. Rob fixed issues others couldn't solve."
    },
    {
      name: "Peter L.",
      location: "Point Grey",
      text: "40 years of experience shows. Quality work at fair prices."
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "{review.text}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-muted-foreground">{review.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
