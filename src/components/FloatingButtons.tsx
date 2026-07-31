import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/config';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#2E1A47',
            boxShadow: '0 4px 16px rgba(46,26,71,0.2)',
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Euro Spa Center"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        style={{
          background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)',
          boxShadow: '0 4px 20px rgba(91,58,134,0.4)',
        }}
      >
        <Phone size={22} className="text-white" />
        <span
          className="absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: '#2E1A47' }}
        >
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Euro Spa Center"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        style={{
          background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)',
          boxShadow: '0 4px 20px rgba(91,58,134,0.4)',
        }}
      >
        <MessageCircle size={22} className="text-white" />
        <span
          className="absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: '#2E1A47' }}
        >
          WhatsApp
        </span>
      </a>
    </div>
  );
}
