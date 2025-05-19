import { 
  Shield, 
  Users, 
  ChartLine, 
  BadgeInfo,
  Star
} from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">About SIVVG</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SIVVG is a premier trading and investment firm dedicated to providing secure, 
            profitable investment solutions for individuals and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 transform transition-all duration-300 hover:scale-105">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-700">
                <Star className="h-6 w-6 text-amber-500" />
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At SIVVG, our mission is to empower our clients with reliable trading solutions 
                that prioritize security while maximizing returns. We believe in transparent 
                operations and building lasting relationships based on trust and performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-violet-500">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-violet-700">
                <BadgeInfo className="h-6 w-6 text-violet-500" />
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6">
                We aim to become the most trusted name in the trading industry by consistently 
                delivering exceptional service and investment returns that exceed expectations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-full mr-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium">Secure Investments</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Secure Investment Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Our multi-layered security protocols and risk assessment frameworks ensure your investments are well-protected against market volatility.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-3 rounded-full mr-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium">Expert Team</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Industry-Leading Experts</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team consists of seasoned financial analysts and market specialists with decades of combined experience in global markets.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-full mr-3">
                      <ChartLine className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium">Consistent Growth</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Sustainable Growth Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Our investment models focus on long-term growth while maintaining consistent returns even during challenging market conditions.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 group-hover:scale-105">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img 
                src="https://i.pinimg.com/736x/76/87/d5/7687d581c201a9f25f759781e7eb2642.jpg" 
                alt="Trading professionals at SIVVG" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 z-20">
                <p className="text-white text-xl font-semibold transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  Trusted by over 1,000+ clients worldwide
                </p>
                <p className="text-white/90 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  Founded in 2015, SIVVG has been delivering excellence for over 8 years
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-violet-500/20 rounded-full z-[-1] animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full z-[-1] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
