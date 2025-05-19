import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will respond shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white text-lg">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our services or need personalized investment advice?
            Our team is ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <Card className="bg-gray-800 border-gray-700 p-10 rounded-2xl">
            <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
            <p className="mb-10 text-gray-300 text-lg">
              Whether you're looking for investment opportunities or need advice on your 
              financial goals, our experienced team is ready to help you navigate the 
              complex world of trading and investments.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Address</h4>
                  <p className="text-gray-300 text-lg">123 Finance Street, Trading Center, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Email</h4>
                  <p className="text-gray-300 text-lg">info@sivvg.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Phone</h4>
                  <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-3">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full h-12 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-3">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium mb-3">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  className="w-full h-12 px-4 text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-3">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={6}
                  className="w-full px-4 py-3 text-lg"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
