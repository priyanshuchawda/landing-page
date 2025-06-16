
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface InteractiveTerminalProps {
  timeline: 'A' | 'B';
  terminalLines: string[];
  setTerminalLines: React.Dispatch<React.SetStateAction<string[]>>;
  setTimeline: React.Dispatch<React.SetStateAction<'A' | 'B'>>;
  setShowSecret: React.Dispatch<React.SetStateAction<boolean>>;
}

const InteractiveTerminal = ({ 
  timeline, 
  terminalLines, 
  setTerminalLines, 
  setTimeline, 
  setShowSecret 
}: InteractiveTerminalProps) => {
  const [terminalInput, setTerminalInput] = useState("");

  const config = {
    A: { primaryColor: "text-green-400" },
    B: { primaryColor: "text-red-400" }
  };

  const handleTerminalCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    if (cmd === "sudo leap" || cmd === "konami") {
      setShowSecret(true);
      setTerminalLines(prev => [...prev, `> ${command}`, "QUANTUM LEAP INITIATED... WELCOME TO THE SECRET DIMENSION"]);
      setTimeout(() => setShowSecret(false), 5000);
    } else if (cmd === "help") {
      setTerminalLines(prev => [...prev, `> ${command}`, "AVAILABLE COMMANDS:", "- sudo leap: Initiate quantum leap", "- timeline: Switch reality", "- clear: Clear terminal"]);
    } else if (cmd === "timeline") {
      setTimeline(timeline === 'A' ? 'B' : 'A');
      setTerminalLines(prev => [...prev, `> ${command}`, `SWITCHING TO TIMELINE ${timeline === 'A' ? 'B' : 'A'}...`]);
    } else if (cmd === "clear") {
      setTerminalLines([]);
    } else {
      setTerminalLines(prev => [...prev, `> ${command}`, "COMMAND NOT RECOGNIZED. TYPE 'HELP' FOR AVAILABLE COMMANDS."]);
    }
    setTerminalInput("");
  };

  return (
    <Card className={`bg-black/90 border-2 border-${timeline === 'A' ? 'green' : 'red'}-400 shadow-lg shadow-${timeline === 'A' ? 'green' : 'red'}-400/20 mb-8 backdrop-blur-sm`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4 border-b border-green-400/30 pb-2">
          <div className="flex space-x-2" aria-hidden="true">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className={`text-xs ${config[timeline].primaryColor}`}>
            TEMPORAL_TERMINAL_v{timeline === 'A' ? '3.14' : '3.1[ERROR]'}
          </span>
        </div>
        
        <div className="text-left space-y-2 h-32 overflow-y-auto mb-4" role="log" aria-label="Terminal output">
          {terminalLines.map((line, index) => (
            <div key={index} className={`text-sm ${config[timeline].primaryColor}`}>
              {line.startsWith('>') ? (
                <span><span className="text-green-600">$</span> {line.substring(1)}</span>
              ) : (
                <span><span className="text-green-600">$</span> {line}</span>
              )}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-green-600">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTerminalCommand(terminalInput)}
              className="ml-1 bg-transparent border-none outline-none text-green-400 flex-1"
              placeholder="Type 'help' for commands..."
              aria-label="Terminal command input"
            />
            <span className="animate-pulse text-green-400">█</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveTerminal;
