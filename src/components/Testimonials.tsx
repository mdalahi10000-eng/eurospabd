import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ayesha Rahman',
    role: 'Marketing Executive',
    text: 'Euro Spa Center is an absolute oasis in Dhaka. The aromatherapy massage left me feeling lighter than I have in months. The ambiance, the therapists, everything is five-star.',
    rating: 5,
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Business Owner',
    text: 'I booked the deep tissue massage after weeks of back pain. The therapist knew exactly where to work. Professional, hygienic, and genuinely therapeutic. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Sadia Karim',
    role: 'Architect',
    text: 'The hot stone massage was a revelation. The warm stones and the calming music transported me completely. This is now my monthly ritual for self-care.',
    rating: 5,
  },
  {
    name: 'Mahmud Hasan',
    role: 'Software Engineer',
    text: 'The four hand massage is worth every taka. Two therapists working in perfect sync—I have never felt so relaxed. The staff are courteous and the rooms are spotless.',
    rating: 5,
  },
  {
    name: 'Nusrat Jahan',
    role: 'Doctor',
    text: 'As a physician I appreciate their attention to hygiene and technique. The Swedish massage was excellent and the herbal tea afterward was a lovely touch.',
    rating: 5,
  },
  {
    name: 'Faisal Kabir',
    role: 'Entrepreneur',
    text: 'Treated myself to the six hand massage for my birthday. Three therapists, pure symphony. Euro Spa Center truly delivers a world-class experience in Dhaka.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [count]);

  const prev = () => setActive((p) => (p - 1 + count) % count);
  const next = () => setActive((p) => (p + 1) % count);

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F3EEF9 0%, #F8F5F1 100%)' }}
      aria-label="Client testimonials"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            Loved by Our Clients
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from the people who trust Euro Spa Center for their wellness.
          </p>
        </div>

        {/* Featured testimonial – glassmorphism */}
        <div className="relative">
          <div
            className="p-8 sm:p-12 rounded-3xl text-center transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(46,26,71,0.12)',
            }}
          >
            <div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
            >
              <Quote size={22} className="text-white" />
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-current" style={{ color: '#7D4DB3' }} />
              ))}
            </div>

            <p
              className="text-xl sm:text-2xl text-gray-800 leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "{TESTIMONIALS[active].text}"
            </p>

            <div>
              <div
                className="text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
              >
                {TESTIMONIALS[active].name}
              </div>
              <div className="text-sm text-purple-600 mt-1">{TESTIMONIALS[active].role}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1', color: '#5B3A86' }}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 28 : 8,
                    height: 8,
                    background: i === active ? '#7D4DB3' : '#D0C0EF',
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1', color: '#5B3A86' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
