import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, WHATSAPP_NUMBER, BUSINESS_HOURS, GOOGLE_MAPS_EMBED } from '@/config';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New booking request from ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: '#F8F5F1' }} aria-label="Contact Euro Spa Center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            Contact Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            Begin Your Wellness Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Reach out to book your session or ask any questions. We are here to help you relax.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Call Us</div>
                <div className="text-lg font-semibold" style={{ color: '#2E1A47' }}>{PHONE_NUMBER}</div>
              </div>
            </a>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
              >
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Visit Us</div>
                <div className="text-lg font-semibold mb-2" style={{ color: '#2E1A47' }}>{ADDRESS}</div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
              >
                <Clock size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-3">Business Hours</div>
                {BUSINESS_HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between py-1 text-sm">
                    <span className="text-gray-700">{day}</span>
                    <span className="font-medium" style={{ color: '#5B3A86' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E2F1' }}>
              <iframe
                title="Euro Spa Center location map"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="240"
                style={{ border: 0, filter: 'saturate(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-3xl"
            style={{ background: '#FFFFFF', border: '1px solid #E8E2F1', boxShadow: '0 8px 32px rgba(46,26,71,0.08)' }}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="01XXXXXXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your preferred service and time..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)', boxShadow: '0 4px 16px rgba(91,58,134,0.3)' }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={20} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
