
import { Switch } from "@/components/ui/switch";
import { Volume2, VolumeX, Monitor, MonitorOff } from "lucide-react";

interface ControlPanelProps {
  timeline: 'A' | 'B';
  setTimeline: React.Dispatch<React.SetStateAction<'A' | 'B'>>;
  soundEnabled: boolean;
  toggleSound: () => void;
  crtMode: boolean;
  setCrtMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlPanel = ({ 
  timeline, 
  setTimeline, 
  soundEnabled, 
  toggleSound, 
  crtMode, 
  setCrtMode 
}: ControlPanelProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 bg-black/80 p-4 rounded border border-green-400/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs">
        <span>Timeline:</span>
        <Switch 
          checked={timeline === 'B'} 
          onCheckedChange={() => setTimeline(timeline === 'A' ? 'B' : 'A')}
          aria-label="Switch timeline mode"
        />
        <span>{timeline}</span>
      </div>
      
      <div className="flex items-center gap-2 text-xs">
        <button onClick={toggleSound} className="flex items-center gap-1" aria-label="Toggle ambient sound">
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>Audio</span>
        </button>
      </div>
      
      <div className="flex items-center gap-2 text-xs">
        <button onClick={() => setCrtMode(!crtMode)} className="flex items-center gap-1" aria-label="Toggle CRT filter">
          {crtMode ? <Monitor size={16} /> : <MonitorOff size={16} />}
          <span>CRT</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
