import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartBar, TrendingUp, DollarSign, Users } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Market Analysis",
      description: "Comprehensive market analysis and insights to help you make informed trading decisions.",
      icon: <ChartBar className="h-10 w-10 text-amber-500" />,
      bgImage: "https://i.pinimg.com/736x/2f/8f/5a/2f8f5ad22789776604e62e11d47d73ea.jpg",
      gradient: "from-amber-500/80 to-amber-600/80",
      features: ["Real-time market data", "Technical analysis", "Trend identification", "Risk assessment"],
    },
    {
      title: "Portfolio Management",
      description: "Professional management of your investment portfolio to optimize returns and minimize risks.",
      icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
      bgImage: "https://i.pinimg.com/736x/a0/1d/87/a01d8793a6aa5e66eea80dfaf0da26df.jpg",
      gradient: "from-emerald-500/80 to-emerald-600/80",
      features: ["Asset allocation", "Diversification strategies", "Regular rebalancing", "Performance tracking"],
    },
    {
      title: "Trading Advisory",
      description: "Expert advice on trading strategies and opportunities across various financial markets.",
      icon: <DollarSign className="h-10 w-10 text-indigo-500" />,
      bgImage: "https://i.pinimg.com/736x/7a/5c/d1/7a5cd134be322e939a42755c7117dd74.jpg",
      gradient: "from-indigo-500/80 to-indigo-600/80",
      features: ["Personalized recommendations", "Entry/exit strategies", "Risk management", "Market updates"],
    },
    {
      title: "Wealth Management",
      description: "Comprehensive wealth management services to help you achieve your financial goals.",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      bgImage: "https://i.pinimg.com/736x/0f/c8/d8/0fc8d8cbe42b9890a21aa212666582d2.jpg",
      gradient: "from-purple-500/80 to-purple-600/80",
      features: ["Financial planning", "Retirement solutions", "Tax optimization", "Estate planning"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SIVVG provides exceptional trading and investment services tailored to meet your financial objectives.
          </p>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/1 lg:basis-1/1">
                  <ServiceCard 
                    service={service} 
                    index={index} 
                    isHovered={hoveredIndex === index}
                    setHoveredIndex={setHoveredIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service} 
              index={index} 
              isHovered={hoveredIndex === index}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    bgImage: string;
    gradient: string;
    features: string[];
  };
  index: number;
  isHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
}

const ServiceCard = ({ service, index, isHovered, setHoveredIndex }: ServiceCardProps) => {
  return (
    <Card 
      className="overflow-hidden group transition-all duration-300 hover:shadow-xl border-0 relative h-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${service.bgImage})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 z-10`} />
      <div className="relative z-20">
        <CardHeader>
          <div className="mb-4 bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-bold text-white drop-shadow-md">
            {service.title}
          </CardTitle>
          <CardDescription className="text-white/90 text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                <span className={`h-2 w-2 rounded-full mr-2 bg-white`}></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transform transition-all duration-300 group-hover:translate-y-[-5px]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default Services;
