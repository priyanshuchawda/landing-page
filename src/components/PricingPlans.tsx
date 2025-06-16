
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingPlansProps {
  timeline: 'A' | 'B';
}

const PricingPlans = ({ timeline }: PricingPlansProps) => {
  const plans = [
    {
      name: "BASIC_TRAVELER",
      price: "$29",
      features: ["5 REWINDS/DAY", "BASIC TIMELINE ACCESS", "EMAIL SUPPORT", "STANDARD PARADOX PROTECTION"]
    },
    {
      name: "QUANTUM_LORD",
      price: "$99",
      features: ["UNLIMITED REWINDS", "ADVANCED TIMELINE MODELING", "PRIORITY SUPPORT", "PREMIUM PARADOX INSURANCE", "MULTI-DIMENSIONAL ACCESS"],
      featured: true
    },
    {
      name: "ENTERPRISE_GOD",
      price: "CUSTOM",
      features: ["UNLIMITED EVERYTHING", "CUSTOM TIMELINE ARCHITECTURE", "DEDICATED MANAGER", "WHITE-LABEL PORTAL", "REALITY MODIFICATION RIGHTS"]
    }
  ];

  return (
    <section className="relative z-10 py-16 px-6 border-t border-green-400/30 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <span className="text-purple-400">[PACKAGES]</span> SUBSCRIPTION_MATRIX
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-black/90 border-2 transition-all hover:scale-105 backdrop-blur-sm ${
              plan.featured ? 'border-purple-400 shadow-lg shadow-purple-400/20' : 'border-green-400/50 hover:border-green-400'
            }`}>
              <CardContent className="p-6">
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-purple-400 text-black px-3 py-1 text-xs font-bold rounded">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-center text-green-400">{plan.name}</h3>
                <p className="text-3xl font-bold text-center mb-6 text-green-400">{plan.price}</p>
                <ul className="space-y-2 text-sm mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-green-400">
                      <span className="text-green-400 mr-2">▶</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full font-mono tracking-wide border-2 transition-all ${
                    plan.featured 
                      ? 'bg-purple-400 text-black border-purple-400 hover:bg-purple-300' 
                      : 'bg-green-400 text-black border-green-400 hover:bg-green-300'
                  }`}
                >
                  INITIALIZE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
