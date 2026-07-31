import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '@/config';

const HERO_IMG = 'https://images.pexels.com/photos/4170175/pexels-photo-4170175.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src={HERO_IMG}
            alt="Elegant luxury spa massage room at Euro Spa Center"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        {/* Deep purple overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(46,26,71,0.88) 0%, rgba(91,58,134,0.72) 50%, rgba(46,26,71,0.85) 100%)',
          }}
        />
      </div>

      {/* Decorative floating orbs */}
      <div
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: '#B48AD6' }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: '#7D4DB3', animationDelay: '1.5s' }}
      />

      {/* Hero Content Card – glassmorphism */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div
          className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#DCC1F0',
          }}
        >
          ✦ Luxury Wellness & Spa ✦
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
        >
          Rediscover Your{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #DCC1F0, #B48AD6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Inner Serenity
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Step into Dhaka's most exquisite sanctuary of wellness. Indulge in premium massage therapies
          crafted for deep restoration and radiant wellbeing.
        </p>

        {/* Glassmorphism CTA card */}
        <div
          className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.10)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 32px rgba(46,26,71,0.25)',
            animationDelay: '0.6s',
          }}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)',
              boxShadow: '0 4px 20px rgba(91,58,134,0.5)',
            }}
          >
            Book a Session
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-8 py-4 rounded-xl text-base font-semibold text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10"
          >
            Call Us
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-14 max-w-lg mx-auto animate-fade-in px-4">
          {[
            { value: '10+', label: 'Years Excellence' },
            { value: '5K+', label: 'Happy Clients' },
            { value: '6', label: 'Signature Therapies' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl sm:text-3xl font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: '#DCC1F0' }}
              >
                {value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-2 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
