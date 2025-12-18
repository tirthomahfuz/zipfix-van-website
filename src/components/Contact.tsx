import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Rob will get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? Send a message or give Rob a call.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Tell Rob about your project"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[150px] resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" size="lg" className="flex-1">
              Send Message
            </Button>
            <Button 
              type="button"
              size="lg" 
              variant="outline" 
              className="flex-1 gap-2"
              asChild
            >
              <a href="tel:604-322-5009">
                <Phone className="h-5 w-5" />
                Call Rob Now
              </a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
