
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, TrendingUp, DollarSign, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Market Analysis",
      description: "Comprehensive market analysis and insights to help you make informed trading decisions.",
      icon: <ChartBar className="h-10 w-10 text-primary" />,
      features: ["Real-time market data", "Technical analysis", "Trend identification", "Risk assessment"],
    },
    {
      title: "Portfolio Management",
      description: "Professional management of your investment portfolio to optimize returns and minimize risks.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      features: ["Asset allocation", "Diversification strategies", "Regular rebalancing", "Performance tracking"],
    },
    {
      title: "Trading Advisory",
      description: "Expert advice on trading strategies and opportunities across various financial markets.",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      features: ["Personalized recommendations", "Entry/exit strategies", "Risk management", "Market updates"],
    },
    {
      title: "Wealth Management",
      description: "Comprehensive wealth management services to help you achieve your financial goals.",
      icon: <Users className="h-10 w-10 text-primary" />,
      features: ["Financial planning", "Retirement solutions", "Tax optimization", "Estate planning"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SIVVG provides exceptional trading and investment services tailored to meet your financial objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary/10 hover:bg-primary/20 text-primary"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
