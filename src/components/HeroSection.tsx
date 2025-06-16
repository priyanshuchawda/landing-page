
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GlitchTitle from "./GlitchTitle";
import InteractiveTerminal from "./InteractiveTerminal";

interface HeroSectionProps {
  timeline: 'A' | 'B';
  terminalLines: string[];
  setTerminalLines: React.Dispatch<React.SetStateAction<string[]>>;
  setTimeline: React.Dispatch<React.SetStateAction<'A' | 'B'>>;
  mousePosition: { x: number; y: number };
}

const HeroSection = ({ 
  timeline, 
  terminalLines, 
  setTerminalLines, 
  setTimeline, 
  mousePosition 
}: HeroSectionProps) => {
  const [showSecret, setShowSecret] = useState(false);

  const handleTimeTravel = () => {
    setTerminalLines(prev => [...prev, 
      "INIT_TIMETRAVEL.EXE EXECUTED...",
      "SCANNING TEMPORAL COORDINATES...",
      "QUANTUM FIELD STABILIZING...",
      "WARNING: TIMELINE DISPLACEMENT IMMINENT",
      "DESTINATION: YOUR PAST SELF",
      "STATUS: READY FOR TEMPORAL JUMP"
    ]);
  };

  const handleDemo = () => {
    setTerminalLines(prev => [...prev,
      "ACCESS_DEMO.BAT LOADING...",
      "INITIALIZING DEMO ENVIRONMENT...",
      "LOADING SAMPLE TIMELINE DATA...",
      "DEMO MODE: SAFE TEMPORAL DISPLACEMENT",
      "TRY THESE COMMANDS:",
      "- 'sudo leap' for quantum jump",
      "- 'timeline' to switch realities",
      "- 'help' for more commands"
    ]);
    
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 2000);
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-4xl">
        {/* Secret Animation */}
        {showSecret && (
          <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
            <div className="text-6xl font-bold text-purple-400 animate-pulse">
              🌀 QUANTUM LEAP ACTIVATED 🌀
            </div>
          </div>
        )}

        {/* Glitch Title */}
        <div className="mb-8">
          <GlitchTitle timeline={timeline} mousePosition={mousePosition} />
          <div className={`h-1 bg-gradient-to-r from-transparent via-${timeline === 'A' ? 'green' : 'red'}-400 to-transparent animate-pulse`} aria-hidden="true" />
        </div>

        <InteractiveTerminal 
          timeline={timeline}
          terminalLines={terminalLines}
          setTerminalLines={setTerminalLines}
          setTimeline={setTimeline}
          setShowSecret={setShowSecret}
        />

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-8 tracking-wide text-green-400">
          <span className="text-red-400">[ERROR]</span> YOUR PAST IS CALLING
          <br />
          <span className="text-yellow-400">[SOLUTION]</span> TEMPORAL DISPLACEMENT ACTIVATED
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            onClick={handleTimeTravel}
            className="bg-green-400 text-black hover:bg-green-300 text-lg px-8 py-4 font-mono tracking-wide border-2 border-green-400 transform hover:scale-105 transition-all duration-200"
          >
            INIT_TIMETRAVEL.EXE
          </Button>
          <Button 
            onClick={handleDemo}
            variant="outline"
            className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black text-lg px-8 py-4 font-mono tracking-wide transform hover:scale-105 transition-all duration-200"
          >
            ACCESS_DEMO.BAT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
