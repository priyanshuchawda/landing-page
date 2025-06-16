
import { useState, useEffect } from "react";

interface TimeLeapHeaderProps {
  timeline: 'A' | 'B';
}

const TimeLeapHeader = ({ timeline }: TimeLeapHeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const config = {
    A: { primaryColor: "text-green-400" },
    B: { primaryColor: "text-red-400" }
  };

  return (
    <header className="relative z-10 p-4 border-b border-green-400/30 bg-black/80 backdrop-blur-sm">
      <div className="flex justify-between items-center font-mono text-sm sm:text-base">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
          <span className={`text-xs ${config[timeline].primaryColor}`}>
            SYSTEM_STATUS: {timeline === 'A' ? 'ONLINE' : 'CORRUPTED'}
          </span>
          <button 
            onClick={() => window.open('https://priyanshutech.xyz', '_blank')}
            className="text-xs text-blue-400 hover:text-blue-300 underline"
          >
            [HOME]
          </button>
        </div>
        <div className={`text-xs ${config[timeline].primaryColor}`}>
          TEMPORAL_COORD: {currentTime.toISOString()}
        </div>
      </div>
    </header>
  );
};

export default TimeLeapHeader;
