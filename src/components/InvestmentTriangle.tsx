import { Briefcase, LineChart, PiggyBank, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const investmentData = [
  {
    title: "Liquidity",
    icon: <TrendingUp className="w-10 h-10" />,
    description: "Grow your wealth over time by investing in the stock market.",
  },
  {
    title: "Returns",
    icon: <LineChart className="w-10 h-10" />,
    description: "Diversify your investments through expert-managed funds.",
  },
  {
    title: "Safety",
    icon: <PiggyBank className="w-10 h-10" />,
    description: "Enjoy stable and secure returns with fixed interest rates.",
  },
];

const policyCards = [
  {
    title: "Risk Management",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "from-green-400 to-green-600 text-green-800",
  },
  {
    title: "Return Optimization",
    icon: <TrendingUp className="w-10 h-10" />,
    color: "from-yellow-400 to-yellow-600 text-yellow-800",
  },
  {
    title: "Goal-Based Planning",
    icon: <Target className="w-10 h-10" />,
    color: "from-blue-400 to-blue-600 text-blue-800",
  },
];

const InvestmentTriangle = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Your Investment Strategy</h2>
        <p className="text-xl text-gray-600">Choose the best options tailored to your financial goals.</p>
      </div>

      {/* Investment Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {investmentData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 border border-gray-200 hover:border-indigo-500"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-lg text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {policyCards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-10 shadow-lg bg-gradient-to-br ${card.color} bg-opacity-10 hover:shadow-2xl transition-all`}
          >
            <div className="flex items-center space-x-6 mb-4">
              <div className="bg-white p-3 rounded-full shadow">{card.icon}</div>
              <h4 className="text-2xl font-semibold">{card.title}</h4>
            </div>
            <p className="text-lg text-gray-800">
              Enhance your financial future with our strategic planning tools.
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 text-lg rounded-full">
          Start Investing Now
        </Button>
      </div>
    </div>
  );
};

export default InvestmentTriangle;
