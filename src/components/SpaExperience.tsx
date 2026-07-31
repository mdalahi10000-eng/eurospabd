const EXPERIENCE_IMG = 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=1600';

const STEPS = [
  { num: '01', title: 'Arrive & Unwind', desc: 'Step into our sanctuary, sip herbal tea, and let the calm wash over you.' },
  { num: '02', title: 'Consultation', desc: 'Share your needs with your therapist to craft the perfect session.' },
  { num: '03', title: 'Your Therapy', desc: 'Relax into expert touch, soothing aromas, and serene ambiance.' },
  { num: '04', title: 'Renewed', desc: 'Leave refreshed, restored, and glowing with lasting serenity.' },
];

export default function SpaExperience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden" aria-label="The spa experience">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={EXPERIENCE_IMG}
          alt="Relaxing spa candles and flowers"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(46,26,71,0.92) 0%, rgba(91,58,134,0.85) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#DCC1F0' }}>
            The Spa Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Journey to Tranquility
          </h2>
          <p className="text-white/70 text-lg">
            From the moment you arrive, every detail is designed to guide you into deep relaxation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ num, title, desc }) => (
            <div
              key={num}
              className="group p-7 rounded-3xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              }}
            >
              <div
                className="text-4xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ fontFamily: "'Playfair Display', serif", color: '#DCC1F0' }}
              >
                {num}
              </div>
              <h3
                className="text-xl font-semibold mb-2 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
