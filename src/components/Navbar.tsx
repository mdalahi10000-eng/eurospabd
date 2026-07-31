import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/config';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navStyle: React.CSSProperties = scrolled
    ? {
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: '0 2px 32px rgba(46,26,71,0.10)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
      }
    : {
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      };

  return (
    <header
      style={navStyle}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" aria-label="Euro Spa Center – Home">
            <Logo
              variant={scrolled ? 'primary' : 'white'}
              size="sm"
              className="transition-all duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  active === href
                    ? scrolled
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                    : 'text-white/85 hover:text-white hover:bg-white/15'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)',
                color: '#fff',
                boxShadow: '0 4px 18px rgba(91,58,134,0.35)',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-200"
            style={{ color: scrolled ? '#2E1A47' : '#fff' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)' }}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-purple-700 bg-purple-50"
            >
              <Phone size={16} /> {PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
            >
              Book Now via WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
