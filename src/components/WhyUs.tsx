import { ShieldCheck, Clock, Award, HeartHandshake, Lock, Smile } from 'lucide-react';

const REASONS = [
  { icon: Award, title: 'Master Therapists', desc: 'Internationally certified with 10+ years of experience.' },
  { icon: ShieldCheck, title: 'Hygiene First', desc: 'Hospital-grade sanitation for every room and tool.' },
  { icon: Clock, title: 'Flexible Hours', desc: 'Open 7 days with convenient evening appointments.' },
  { icon: HeartHandshake, title: 'Personalized Care', desc: 'Sessions tailored to your body and wellness goals.' },
  { icon: Lock, title: 'Private Sanctuary', desc: 'Discreet, serene rooms for total peace of mind.' },
  { icon: Smile, title: '5-Star Service', desc: 'Trusted by thousands of delighted clients across Dhaka.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32" aria-label="Why choose Euro Spa Center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            Why Choose Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            The Euro Spa Center Difference
          </h2>
          <p className="text-gray-600 text-lg">
            Every detail is curated to deliver a world-class wellness experience you will return to again and again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1', boxShadow: '0 4px 20px rgba(46,26,71,0.05)' }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                style={{ background: '#7D4DB3' }}
              />
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
              >
                <Icon size={26} className="text-white" />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
              >
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
              <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full"
                style={{ width: '0%', background: 'linear-gradient(90deg, #5B3A86, #7D4DB3)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
