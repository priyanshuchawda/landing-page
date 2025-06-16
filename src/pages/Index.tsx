
import { useState, useEffect, useRef } from "react";
import TimeLeapHeader from "@/components/TimeLeapHeader";
import HeroSection from "@/components/HeroSection";
import ControlPanel from "@/components/ControlPanel";
import MatrixBackground from "@/components/MatrixBackground";
import SystemStats from "@/components/SystemStats";
import UserTestimonials from "@/components/UserTestimonials";
import PricingPlans from "@/components/PricingPlans";
import TimeLeapFooter from "@/components/TimeLeapFooter";

const Index = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<'A' | 'B'>('A');
  const [crtMode, setCrtMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Timeline configurations
  const timelineConfig = {
    A: {
      theme: "optimistic",
      primaryColor: "text-green-400",
      bgColor: "bg-black",
      glitchChance: 0.95,
      title: "TIMELEAP"
    },
    B: {
      theme: "corrupted", 
      primaryColor: "text-red-400",
      bgColor: "bg-gray-900",
      glitchChance: 0.85,
      title: "T1M3L34P"
    }
  };

  const config = timelineConfig[timeline];

  // Terminal boot sequence with timeline variations
  useEffect(() => {
    const bootSequence = timeline === 'A' ? [
      "INITIALIZING TEMPORAL MATRIX...",
      "LOADING QUANTUM DRIVERS...",
      "SCANNING TIMELINE INTEGRITY... OK",
      "TEMPORAL DISPLACEMENT READY",
      "WELCOME TO THE MULTIVERSE",
      "> TYPE 'HELP' FOR COMMANDS",
    ] : [
      "C0RRUPT3D T3MP0R4L M4TR1X...",
      "L04D1NG QU4NTUM DR1V3R5... ERROR",
      "5C4NN1NG T1M3L1N3 1NT3GR1TY... CORRUPTED",
      "T3MP0R4L D15PL4C3M3NT... UNSTABLE",
      "W3LC0M3 T0 TH3 D4RK V3R53",
      "> 5Y5T3M C0MPR0M153D",
    ];

    setTerminalLines([]);
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 800);
    });
  }, [timeline]);

  // Mouse tracking with mobile optimization
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Ambient sound setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.pause();
      } else {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 60;
        gainNode.gain.value = 0.02;
        
        oscillator.start();
        
        setTimeout(() => {
          oscillator.stop();
        }, 10000);
      }
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className={`min-h-screen ${config.bgColor} ${config.primaryColor} font-mono overflow-hidden relative ${crtMode ? 'crt-filter' : ''}`}>
      {/* CRT Filter Styles */}
      <style>
        {`
        .crt-filter::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 50;
          background: 
            linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.03) 50%),
            linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%);
          background-size: 2px 2px;
        }
        
        .crt-filter::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 51;
          background: radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.3) 100%);
        }
        `}
      </style>

      <MatrixBackground timeline={timeline} />

      {/* Scan Lines */}
      {crtMode && (
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)",
            }}
          />
        </div>
      )}

      {/* CRT Curve Effect */}
      {crtMode && <div className="fixed inset-0 pointer-events-none border-8 border-gray-900 rounded-3xl shadow-inner" aria-hidden="true" />}

      <ControlPanel 
        timeline={timeline}
        setTimeline={setTimeline}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        crtMode={crtMode}
        setCrtMode={setCrtMode}
      />

      <TimeLeapHeader timeline={timeline} />

      <HeroSection 
        timeline={timeline}
        terminalLines={terminalLines}
        setTerminalLines={setTerminalLines}
        setTimeline={setTimeline}
        mousePosition={mousePosition}
      />

      <SystemStats timeline={timeline} />
      <UserTestimonials timeline={timeline} />
      <PricingPlans timeline={timeline} />
      <TimeLeapFooter timeline={timeline} />

      {/* Hidden audio element for ambient sound */}
      <audio ref={audioRef} aria-hidden="true">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQcBiGY2+/M" type="audio/wav" />
      </audio>
    </div>
  );
};

export default Index;
