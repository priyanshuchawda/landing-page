
import { useState, useEffect } from "react";

interface GlitchTitleProps {
  timeline: 'A' | 'B';
  mousePosition: { x: number; y: number };
}

const GlitchTitle = ({ timeline, mousePosition }: GlitchTitleProps) => {
  const [glitchText, setGlitchText] = useState("TIMELEAP");

  const timelineConfig = {
    A: {
      primaryColor: "text-green-400",
      glitchChance: 0.95,
      title: "TIMELEAP"
    },
    B: {
      primaryColor: "text-red-400", 
      glitchChance: 0.85,
      title: "T1M3L34P"
    }
  };

  const config = timelineConfig[timeline];

  useEffect(() => {
    const chars = timeline === 'A' ? "!@#$%^&*()_+-=[]{}|;':\",./<>?`~" : "!@#$%^&*()_+-=[]{}|;':\",./<>?`~0123456789";
    const originalText = config.title;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > config.glitchChance) {
        const glitched = originalText
          .split("")
          .map(char => Math.random() > (timeline === 'A' ? 0.7 : 0.5) ? chars[Math.floor(Math.random() * chars.length)] : char)
          .join("");
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), timeline === 'A' ? 100 : 200);
      }
    }, 50);

    return () => clearInterval(glitchInterval);
  }, [timeline, config.title, config.glitchChance]);

  return (
    <h1 
      className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 relative ${config.primaryColor}`}
      style={{
        textShadow: timeline === 'A' ? "3px 3px 0px #ff0040, -3px -3px 0px #00ffff" : "3px 3px 0px #ff0040, -3px -3px 0px #ff0040",
        transform: window.innerWidth > 768 ? `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` : 'none',
      }}
      role="banner"
      aria-label={`TimeLeap - Timeline ${timeline} mode`}
    >
      {glitchText}
    </h1>
  );
};

export default GlitchTitle;
