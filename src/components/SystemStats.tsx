
import { Card, CardContent } from "@/components/ui/card";

interface SystemStatsProps {
  timeline: 'A' | 'B';
}

const SystemStats = ({ timeline }: SystemStatsProps) => {
  const stats = [
    { label: "TIMELINES_PROCESSED", value: "∞", unit: "REALITIES" },
    { label: "PARADOX_PREVENTION", value: "99.97", unit: "%" },
    { label: "REGRETS_ELIMINATED", value: "847,293", unit: "INSTANCES" },
    { label: "SATISFACTION_RATE", value: "4.9", unit: "/5.0" }
  ];

  return (
    <section className="relative z-10 py-16 px-6 border-t border-green-400/30 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <span className="text-yellow-400">[STATUS]</span> QUANTUM_METRICS
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-black/90 border border-green-400/50 hover:border-green-400 transition-colors backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-xs text-green-300">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.unit}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemStats;
