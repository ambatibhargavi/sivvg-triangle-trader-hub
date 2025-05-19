
import { Shield, Banknote, Return } from "lucide-react";

const InvestmentTriangle = () => {
  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Policies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At SIVVG, we follow a balanced approach to trading and investments, 
            ensuring the perfect equilibrium between safety, liquidity, and returns.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[500px] md:h-[600px]">
          {/* Triangle Background */}
          <div className="triangle-container absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30">
            <div className="relative h-full flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
                The SIVVG Triangle
              </h3>
              <p className="text-center text-gray-700 px-4 max-w-md">
                Our investment philosophy is built upon three core pillars that form the foundation of our success.
              </p>
            </div>
          </div>
          
          {/* Liquidity Block - Top */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Banknote className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Liquidity</h4>
              <p className="text-center text-gray-600">
                We ensure your investments remain liquid, giving you access to your funds when you need them most.
              </p>
            </div>
          </div>
          
          {/* Safety Block - Bottom Left */}
          <div className="absolute left-0 bottom-0 bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Safety</h4>
              <p className="text-center text-gray-600">
                We prioritize capital preservation with robust risk management strategies and secure investment options.
              </p>
            </div>
          </div>
          
          {/* Returns Block - Bottom Right */}
          <div className="absolute right-0 bottom-0 bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <Return className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Returns</h4>
              <p className="text-center text-gray-600">
                We identify high-potential opportunities to maximize your investment returns consistently.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Investment Approach</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Risk Assessment</h4>
                <p className="text-gray-700">
                  We conduct thorough risk assessments for all investment opportunities, ensuring they align with our balanced approach to the investment triangle.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Diversification</h4>
                <p className="text-gray-700">
                  We believe in strategic diversification across asset classes to minimize risk while optimizing returns and maintaining adequate liquidity.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Long-term Perspective</h4>
                <p className="text-gray-700">
                  While capitalizing on short-term opportunities, our primary focus is on sustainable long-term growth that generates consistent returns.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Transparent Reporting</h4>
                <p className="text-gray-700">
                  We provide regular, transparent reports on investment performance, ensuring you're always informed about your portfolio's status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTriangle;
