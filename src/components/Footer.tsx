import {
  Home,
  User,
  Flower2,
  Tag,
  Image,
  MessageCircle,
  HelpCircle,
  Phone,
  ChevronRight,
  Heart,
} from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '#home',         label: 'Home',         icon: Home },
  { href: '#about',        label: 'About',        icon: User },
  { href: '#services',     label: 'Services',     icon: Flower2 },
  { href: '#pricing',      label: 'Pricing',      icon: Tag },
  { href: '#gallery',      label: 'Gallery',      icon: Image },
  { href: '#testimonials', label: 'Testimonials', icon: MessageCircle },
  { href: '#faq',          label: 'FAQ',          icon: HelpCircle },
  { href: '#contact',      label: 'Contact',      icon: Phone },
];

function LotusIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
      <path d="M14 2C14 2 10 6 10 10C10 12.2 11.8 14 14 14C16.2 14 18 12.2 18 10C18 6 14 2 14 2Z" stroke="#B48AD6" strokeWidth="1.2" fill="none"/>
      <path d="M14 14C14 14 8 11 5 8C3.5 6.5 4 4 6 3.5C8 3 10 5 10 10" stroke="#B48AD6" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M14 14C14 14 20 11 23 8C24.5 6.5 24 4 22 3.5C20 3 18 5 18 10" stroke="#B48AD6" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M14 14C14 14 6 14 3 17C1.5 18.5 2 21 14 21C26 21 26.5 18.5 25 17C22 14 14 14 14 14Z" stroke="#B48AD6" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2E1A47 0%, #180e2b 100%)' }}
      aria-label="Site footer"
    >
      {/* Gradient top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #7D4DB3 40%, #B48AD6 50%, #7D4DB3 60%, transparent 100%)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7D4DB3, transparent)' }}
      />

      <div className="relative max-w-lg mx-auto px-6 pt-16 pb-10">

        {/* ── Logo centered ── */}
        <div className="flex justify-center mb-7">
          <Logo variant="white" size="lg" className="max-w-[220px]" />
        </div>

        {/* ── Description ── */}
        <p
          className="text-center leading-relaxed mb-10"
          style={{ color: 'rgba(220,193,240,0.7)', fontSize: '0.95rem', lineHeight: 1.75 }}
        >
          Dhaka's premier luxury wellness sanctuary.
          <br />
          Where ancient healing meets modern therapy
          <br />
          for your complete wellbeing.
        </p>

        {/* ── Decorative divider ── */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(180,138,214,0.5))' }}
          />
          <div className="flex items-center gap-2">
            <span style={{ color: '#B48AD6', fontSize: '0.5rem' }}>●</span>
            <LotusIcon />
            <span style={{ color: '#B48AD6', fontSize: '0.5rem' }}>●</span>
          </div>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(180,138,214,0.5), transparent)' }}
          />
        </div>

        {/* ── Quick Links heading ── */}
        <h3
          className="text-white font-bold text-2xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Quick Links
        </h3>

        {/* ── Nav list ── */}
        <ul>
          {NAV_LINKS.map(({ href, label, icon: Icon }, i) => (
            <li key={href}>
              <a
                href={href}
                className="group flex items-center justify-between py-4 px-3 -mx-3 rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  {/* Outline icon in subtle circle */}
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-all duration-300 group-hover:border-purple-400"
                    style={{
                      border: '1.5px solid rgba(180,138,214,0.35)',
                      color: 'rgba(180,138,214,0.75)',
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span
                    className="text-base font-medium transition-colors duration-300 group-hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {label}
                  </span>
                </div>
                <ChevronRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: 'rgba(180,138,214,0.5)' }}
                />
              </a>
              {/* Thin separator — not after last item */}
              {i < NAV_LINKS.length - 1 && (
                <div
                  className="mx-3"
                  style={{ height: 1, background: 'rgba(180,138,214,0.12)' }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* ── Bottom divider ── */}
        <div
          className="mt-10 mb-7"
          style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(180,138,214,0.25), transparent)' }}
        />

        {/* ── Copyright ── */}
        <div className="text-center flex flex-col gap-1.5">
          <p style={{ color: 'rgba(220,193,240,0.5)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} EURO SPA CENTER. All Rights Reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5" style={{ color: 'rgba(220,193,240,0.4)', fontSize: '0.82rem' }}>
            Designed with{' '}
            <Heart size={13} className="inline" style={{ color: '#B48AD6' }} />{' '}
            for your wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
}
