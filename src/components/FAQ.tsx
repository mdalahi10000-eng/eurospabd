import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'Yes, we recommend booking at least 24 hours in advance to secure your preferred therapist and time slot. You can book easily via WhatsApp or by calling us directly.',
  },
  {
    q: 'What should I wear to my spa session?',
    a: 'Wear comfortable, loose-fitting clothing. We provide fresh robes, slippers, and all necessary linens for your session. Your comfort and privacy are our priority.',
  },
  {
    q: 'Are your therapists certified?',
    a: 'Absolutely. All our therapists are internationally certified and have years of professional experience in their respective massage modalities.',
  },
  {
    q: 'Can I choose my therapist?',
    a: 'Yes, you may request a specific therapist when booking, subject to availability. We also have both male and female therapists to ensure your comfort.',
  },
  {
    q: 'What products do you use during treatments?',
    a: 'We use only premium, organic essential oils, lotions, and aromatherapy blends sourced from trusted international wellness brands.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: 'Yes, gift vouchers are available for all our services and make a wonderful present. Contact us via WhatsApp or phone to purchase one.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made at least 4 hours before your appointment incur no charge. Late cancellations may be subject to a 50% fee of the booked service.',
  },
  {
    q: 'Is the spa suitable for pregnant women?',
    a: 'We offer specialized prenatal massage therapies. Please inform us of your stage of pregnancy when booking so we can tailor the session safely.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            FAQ
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            Questions & Answers
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know before your visit to Euro Spa Center.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  border: `1px solid ${isOpen ? '#7D4DB3' : '#E8E2F1'}`,
                  boxShadow: isOpen ? '0 4px 20px rgba(91,58,134,0.12)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-lg font-semibold pr-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
                  >
                    {q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: isOpen ? '#7D4DB3' : '#F3EEF9',
                      color: isOpen ? '#fff' : '#5B3A86',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
