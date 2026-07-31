import { Hand, Heart, Flower2, Flame, Users, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config';

interface Service {
  icon: typeof Hand;
  name: string;
  subtitle: string;
  desc: string;
  durations: { mins: number; price: string }[];
  signature?: boolean;
}

const SERVICES: Service[] = [
  {
    icon: Hand,
    name: 'Swedish Massage',
    subtitle: 'The Classic Restoration',
    desc: 'Gentle flowing strokes that melt away tension and boost circulation for full-body relaxation.',
    durations: [
      { mins: 60, price: '5,500' },
      { mins: 90, price: '8,000' },
    ],
  },
  {
    icon: Heart,
    name: 'Deep Tissue Massage',
    subtitle: 'Therapeutic Release',
    desc: 'Firm targeted pressure that releases chronic muscle tension and deep-seated knots.',
    durations: [
      { mins: 60, price: '6,500' },
      { mins: 90, price: '9,500' },
    ],
  },
  {
    icon: Flower2,
    name: 'Aromatherapy Massage',
    subtitle: 'Sensory Harmony',
    desc: 'Essential oils blended to calm the mind while therapeutic touch restores the body.',
    durations: [
      { mins: 60, price: '8,000' },
      { mins: 90, price: '11,500' },
    ],
  },
  {
    icon: Flame,
    name: 'Hot Stone Massage',
    subtitle: 'Ancient Heat Ritual',
    desc: 'Warm volcanic stones ease deep muscle tension and restore your natural energy flow.',
    durations: [
      { mins: 60, price: '8,500' },
      { mins: 90, price: '12,000' },
    ],
  },
  {
    icon: Users,
    name: 'Four Hand Massage',
    subtitle: 'Synchronized Serenity',
    desc: 'Two therapists in perfect harmony for a deeply immersive and profound relaxation.',
    durations: [
      { mins: 60, price: '10,000' },
      { mins: 90, price: '15,000' },
    ],
  },
  {
    icon: Sparkles,
    name: 'Six Hand Massage',
    subtitle: 'The Ultimate Indulgence',
    desc: 'Three therapists synchronized into a symphony of touch—our most exclusive offering.',
    durations: [
      { mins: 60, price: '15,000' },
      { mins: 90, price: '22,000' },
      { mins: 120, price: '30,000' },
    ],
    signature: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F5F1 0%, #EDE7F6 60%, #F8F5F1 100%)' }}
      aria-label="Pricing for our spa services"
    >
      {/* Soft ambient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B48AD6, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7D4DB3, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #B48AD6)' }} />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-500">
              Our Treatments
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #B48AD6, transparent)' }} />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47', lineHeight: 1.2 }}
          >
            Curated Wellness Rituals
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Each therapy is an art form. All prices in Bangladeshi Taka, inclusive of every luxury amenity.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map(({ icon: Icon, name, subtitle, desc, durations, signature }) => (
            <article
              key={name}
              className="group relative flex flex-col transition-all duration-500 hover:-translate-y-3"
              style={{ borderRadius: 24 }}
            >
              {/* Signature badge */}
              {signature && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 px-5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-white whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(90deg, #5B3A86, #7D4DB3)',
                    boxShadow: '0 4px 18px rgba(91,58,134,0.45)',
                  }}
                >
                  ✦ Signature Experience
                </div>
              )}

              {/* Card surface */}
              <div
                className="relative flex flex-col flex-1 overflow-hidden"
                style={{
                  borderRadius: 24,
                  background: signature
                    ? 'linear-gradient(160deg, #2E1A47 0%, #3D2260 100%)'
                    : 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: signature
                    ? '1px solid rgba(180,138,214,0.3)'
                    : '1px solid rgba(232,226,241,0.9)',
                  boxShadow: signature
                    ? '0 20px 60px rgba(46,26,71,0.35), 0 0 0 1px rgba(180,138,214,0.15)'
                    : '0 8px 40px rgba(46,26,71,0.08), 0 1px 0 rgba(255,255,255,0.9) inset',
                }}
              >
                {/* Subtle top sheen */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: signature
                      ? 'linear-gradient(90deg, transparent, rgba(180,138,214,0.6), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  }}
                />

                {/* Top content */}
                <div className="px-8 pt-10 pb-7">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={
                      signature
                        ? {
                            background: 'rgba(255,255,255,0.12)',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }
                        : {
                            background: 'linear-gradient(135deg, rgba(91,58,134,0.10), rgba(125,77,179,0.15))',
                            border: '1px solid rgba(125,77,179,0.2)',
                          }
                    }
                  >
                    <Icon
                      size={22}
                      style={{ color: signature ? '#DCC1F0' : '#7D4DB3' }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Name & subtitle */}
                  <p
                    className="text-xs tracking-widest uppercase font-medium mb-2"
                    style={{ color: signature ? 'rgba(220,193,240,0.7)' : '#B48AD6' }}
                  >
                    {subtitle}
                  </p>
                  <h3
                    className="text-2xl font-semibold leading-snug mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: signature ? '#FFFFFF' : '#2E1A47',
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: signature ? 'rgba(255,255,255,0.6)' : '#6B7280' }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Thin divider */}
                <div
                  className="mx-8"
                  style={{
                    height: 1,
                    background: signature
                      ? 'linear-gradient(90deg, transparent, rgba(180,138,214,0.4), transparent)'
                      : 'linear-gradient(90deg, transparent, #E8E2F1, transparent)',
                  }}
                />

                {/* Duration rows */}
                <div className="px-8 py-6 flex flex-col gap-1">
                  {durations.map(({ mins, price }, i) => (
                    <div
                      key={mins}
                      className="group/row flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 cursor-default"
                      style={{
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = signature
                          ? 'rgba(255,255,255,0.07)'
                          : 'rgba(125,77,179,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: signature ? '#B48AD6' : '#7D4DB3', opacity: 0.7 }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: signature ? 'rgba(255,255,255,0.75)' : '#4B5563' }}
                        >
                          {mins} min
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-xs font-medium"
                          style={{ color: signature ? 'rgba(220,193,240,0.6)' : '#9CA3AF' }}
                        >
                          BDT
                        </span>
                        <span
                          className="font-semibold"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: i === durations.length - 1 && durations.length > 2 ? '1.25rem' : '1.15rem',
                            color: signature ? '#DCC1F0' : '#2E1A47',
                          }}
                        >
                          {price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 pb-8 mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20would%20like%20to%20book%20a%20${encodeURIComponent(name)}%20session`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
                    style={
                      signature
                        ? {
                            background: 'linear-gradient(135deg, #7D4DB3, #B48AD6)',
                            color: '#fff',
                            borderRadius: 14,
                            boxShadow: '0 4px 20px rgba(125,77,179,0.5)',
                          }
                        : {
                            background: 'transparent',
                            color: '#5B3A86',
                            border: '1.5px solid rgba(91,58,134,0.35)',
                            borderRadius: 14,
                          }
                    }
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      if (!signature) {
                        el.style.background = 'linear-gradient(135deg, #5B3A86, #7D4DB3)';
                        el.style.color = '#fff';
                        el.style.borderColor = 'transparent';
                        el.style.boxShadow = '0 4px 20px rgba(91,58,134,0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      if (!signature) {
                        el.style.background = 'transparent';
                        el.style.color = '#5B3A86';
                        el.style.borderColor = 'rgba(91,58,134,0.35)';
                        el.style.boxShadow = 'none';
                      }
                    }}
                  >
                    Reserve This Experience
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #B48AD6)' }} />
            <span className="text-xs tracking-widest uppercase text-purple-400">Complimentary With Every Session</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #B48AD6, transparent)' }} />
          </div>
          <p className="text-gray-500 text-sm">
            Herbal tea ceremony · Aromatherapy induction · Relaxation lounge access · Fresh linen & robes
          </p>
        </div>
      </div>
    </section>
  );
}
