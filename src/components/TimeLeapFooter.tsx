
interface TimeLeapFooterProps {
  timeline: 'A' | 'B';
}

const TimeLeapFooter = ({ timeline }: TimeLeapFooterProps) => {
  return (
    <footer className="relative z-10 border-t border-green-400/30 py-8 px-6 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-xs text-gray-400">
            © 3024 TIMELEAP_CORP. ALL RIGHTS RESERVED ACROSS ALL TIMELINES.
          </span>
        </div>
        <div className="text-xs text-red-400">
          *WARNING: TIMELEAP NOT RESPONSIBLE FOR TEMPORAL PARADOXES, EXISTENTIAL CRISES, 
          OR RUNNING INTO YOUR PAST SELF AT THE GROCERY STORE.
        </div>
      </div>
    </footer>
  );
};

export default TimeLeapFooter;
