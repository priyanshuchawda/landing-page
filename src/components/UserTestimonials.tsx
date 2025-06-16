
import { Card, CardContent } from "@/components/ui/card";

interface UserTestimonialsProps {
  timeline: 'A' | 'B';
}

const UserTestimonials = ({ timeline }: UserTestimonialsProps) => {
  const testimonials = [
    {
      name: "SUBJECT_2087",
      content: timeline === 'A' ? "TEMPORAL DISPLACEMENT SUCCESSFUL. REGRET.EXE TERMINATED." : "T3MP0R4L D15PL4C3M3NT... 3RR0R 404",
      timestamp: "2087.03.14T15:42:00Z",
      status: "VERIFIED"
    },
    {
      name: "USER_ECHO_7",
      content: timeline === 'A' ? "TIMELINE CORRUPTION: 0%. SATISFACTION: 99.7%" : "T1M3L1N3 C0RRUPT10N: 89%. 54T15F4CT10N: ??",
      timestamp: "2156.12.25T08:30:15Z", 
      status: timeline === 'A' ? "AUTHENTICATED" : "CORRUPTED"
    },
    {
      name: "AGENT_NULL",
      content: timeline === 'A' ? "PARADOX PREVENTION PROTOCOLS ENGAGED. REALITY STABLE." : "P4R4D0X PR3V3NT10N F41L3D. R34L1TY UN5T4BL3.",
      timestamp: "3021.07.04T12:00:00Z",
      status: timeline === 'A' ? "CLASSIFIED" : "BREACHED"
    }
  ];

  return (
    <section className="relative z-10 py-16 px-6 border-t border-green-400/30 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
          <span className="text-cyan-400">[LOGS]</span> USER_FEEDBACK.TXT
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/90 border border-cyan-400/50 hover:border-cyan-400 transition-colors backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4 text-xs">
                  <span className="text-cyan-400">ID: {testimonial.name}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    testimonial.status === 'VERIFIED' ? 'bg-green-900 text-green-400' :
                    testimonial.status === 'AUTHENTICATED' ? 'bg-blue-900 text-blue-400' :
                    'bg-red-900 text-red-400'
                  }`}>
                    {testimonial.status}
                  </span>
                </div>
                <p className="text-sm mb-4 font-mono text-green-400">{testimonial.content}</p>
                <div className="text-xs text-gray-400">
                  TIMESTAMP: {testimonial.timestamp}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
