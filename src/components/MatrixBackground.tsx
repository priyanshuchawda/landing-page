
import { useEffect, useRef } from "react";

interface MatrixBackgroundProps {
  timeline: 'A' | 'B';
}

const MatrixBackground = ({ timeline }: MatrixBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    canvas.width = window.innerWidth * (isMobile ? 0.5 : 1) * devicePixelRatio;
    canvas.height = window.innerHeight * (isMobile ? 0.5 : 1) * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const chars = timeline === 'A' ? "01TIMELEAP" : "01T1M3L34P";
    const fontSize = isMobile ? 10 : 14;
    const columns = Math.floor((canvas.width / devicePixelRatio) / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = timeline === 'A' ? "rgba(0, 0, 0, 0.05)" : "rgba(17, 24, 39, 0.05)";
      ctx.fillRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);

      ctx.fillStyle = timeline === 'A' ? "#00ff41" : "#ef4444";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > (canvas.height / devicePixelRatio) && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, isMobile ? 70 : 35);
    return () => clearInterval(interval);
  }, [timeline]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-20 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
