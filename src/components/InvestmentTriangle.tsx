
import { useState } from "react";
import { Shield, Banknote, TrendingUp, ChevronRight, BarChart3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InvestmentTriangle = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const policies = [
    {
      id: "risk",
      title: "Risk Assessment",
      description: "We conduct thorough risk assessments for all investment opportunities, ensuring they align with our balanced approach to the investment triangle.",
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      color: "blue"
    },
    {
      id: "diversification",
      title: "Diversification",
      description: "We believe in strategic diversification across asset classes to minimize risk while optimizing returns and maintaining adequate liquidity.",
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      color: "emerald"
    },
    {
      id: "longterm",
      title: "Long-term Perspective",
      description: "While capitalizing on short-term opportunities, our primary focus is on sustainable long-term growth that generates consistent returns.",
      icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
      color: "amber"
    },
    {
      id: "transparency",
      title: "Transparent Reporting",
      description: "We provide regular, transparent reports on investment performance, ensuring you're always informed about your portfolio's status.",
      icon: <Banknote className="h-6 w-6 text-purple-500" />,
      color: "purple"
    },
  ];

  return (
    <section id="investment" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Investment Policies
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mb-6"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-up animation-delay-150">
            At SIVVG, we follow a balanced approach to trading and investments, 
            ensuring the perfect equilibrium between safety, liquidity, and returns.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-24 overflow-visible">
          {/* Triangle visualization with hover effects */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-lg relative">
              {/* Container for the triangle */}
              <div className="relative h-[500px] md:h-[550px]">
                {/* Background triangle with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 rounded-3xl shadow-lg backdrop-blur-sm border border-white/20"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 text-center w-full max-w-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    The SIVVG Triangle
                  </h3>
                  <div className="w-24 h-1 mx-auto rounded-full bg-indigo-500/60 mb-4"></div>
                  <p className="text-gray-700 px-4">
                    Our investment philosophy is built upon three core pillars that form the foundation of our success.
                  </p>
                </div>
                
                {/* Liquidity Card - Top */}
                <TriangleCard 
                  title="Liquidity"
                  description="We ensure your investments remain liquid, giving you access to your funds when you need them most."
                  position="top"
                  color="bg-blue-500"
                  icon={<Banknote className="h-8 w-8 text-blue-500" />}
                  isHovered={hoveredCard === "liquidity"}
                  setHovered={() => setHoveredCard("liquidity")}
                  resetHovered={() => setHoveredCard(null)}
                />
                
                {/* Safety Card - Bottom Left */}
                <TriangleCard 
                  title="Safety"
                  description="We prioritize capital preservation with robust risk management strategies and secure investment options."
                  position="bottom-left"
                  color="bg-green-500"
                  icon={<Shield className="h-8 w-8 text-green-500" />}
                  isHovered={hoveredCard === "safety"}
                  setHovered={() => setHoveredCard("safety")}
                  resetHovered={() => setHoveredCard(null)}
                />
                
                {/* Returns Card - Bottom Right */}
                <TriangleCard 
                  title="Returns"
                  description="We identify high-potential opportunities to maximize your investment returns consistently."
                  position="bottom-right"
                  color="bg-orange-500"
                  icon={<TrendingUp className="h-8 w-8 text-orange-500" />}
                  isHovered={hoveredCard === "returns"}
                  setHovered={() => setHoveredCard("returns")}
                  resetHovered={() => setHoveredCard(null)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Investment Approach
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <Card 
                key={policy.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl border border-${policy.color}-100 group hover:translate-y-[-5px]`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r from-${policy.color}-400 to-${policy.color}-600`}></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${policy.color}-50 group-hover:bg-${policy.color}-100 transition-colors duration-300`}>
                      {policy.icon}
                    </div>
                    <div>
                      <CardTitle className={`text-xl text-${policy.color}-700`}>{policy.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{policy.description}</p>
                </CardContent>
                <CardFooter>
                  <button className={`flex items-center text-${policy.color}-600 font-medium group-hover:text-${policy.color}-700`}>
                    Learn more 
                    <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1 text-${policy.color}-500`} />
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to experience our balanced investment approach?
              <span className="block mt-2">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                >
                  Start Investing Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TriangleCardProps {
  title: string;
  description: string;
  position: 'top' | 'bottom-left' | 'bottom-right';
  color: string;
  icon: React.ReactNode;
  isHovered: boolean;
  setHovered: () => void;
  resetHovered: () => void;
}

const TriangleCard = ({ 
  title, 
  description, 
  position, 
  color, 
  icon, 
  isHovered, 
  setHovered, 
  resetHovered 
}: TriangleCardProps) => {
  // Determine position styles based on the position prop
  const positionStyles = {
    'top': 'absolute left-1/2 transform -translate-x-1/2 top-28',
    'bottom-left': 'absolute left-0 bottom-10',
    'bottom-right': 'absolute right-0 bottom-10',
  }[position];

  const colorMap = {
    'bg-blue-500': 'from-blue-500 to-blue-600 text-blue-600 bg-blue-100',
    'bg-green-500': 'from-green-500 to-green-600 text-green-600 bg-green-100',
    'bg-orange-500': 'from-orange-500 to-orange-600 text-orange-600 bg-orange-100',
  }[color];

  const iconColorClass = color.replace('bg-', '');

  return (
    <div 
      className={`${positionStyles} max-w-xs w-full group`}
      onMouseEnter={setHovered}
      onMouseLeave={resetHovered}
    >
      <div 
        className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 
          ${isHovered ? 'scale-105 shadow-xl' : ''}
          ${isHovered ? `shadow-${iconColorClass}/20` : ''}
          border border-slate-100 hover:border-${iconColorClass}/30`}
      >
        <div className="flex flex-col items-center text-center">
          <div className={`p-3 rounded-full mb-4 ${isHovered ? `bg-${iconColorClass}-200` : `bg-${iconColorClass}-100`} transition-colors duration-300`}>
            {icon}
          </div>
          <h4 className={`text-xl font-bold mb-2 ${isHovered ? `text-${iconColorClass}-600` : 'text-slate-800'} transition-colors duration-300`}>
            {title}
          </h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTriangle;
