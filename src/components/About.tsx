import { Leaf, Award, Users, Sparkles } from 'lucide-react';

const ABOUT_IMG_1 = 'https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&cs=tinysrgb&w=1200';
const ABOUT_IMG_2 = 'https://images.pexels.com/photos/6186740/pexels-photo-6186740.jpeg?auto=compress&cs=tinysrgb&w=800';

const FEATURES = [
  { icon: Leaf, title: 'Natural & Organic', desc: 'Pure essential oils and organic products for holistic care.' },
  { icon: Award, title: 'Certified Therapists', desc: 'Internationally trained specialists with years of expertise.' },
  { icon: Users, title: 'Personalized Care', desc: 'Every session tailored to your unique wellness needs.' },
  { icon: Sparkles, title: 'Premium Ambiance', desc: 'A serene sanctuary designed for complete relaxation.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden" aria-label="About Euro Spa Center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMG_1}
                alt="Minimalist luxury spa interior at Euro Spa Center"
                className="w-full h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src={ABOUT_IMG_2}
                alt="Spa candles and towels for relaxation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-20 -z-10 blur-2xl"
              style={{ background: '#B48AD6' }}
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
              About Euro Spa Center
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
            >
              A Sanctuary of Calm in the Heart of Dhaka
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Euro Spa Center is Dhaka's premier luxury wellness destination, where ancient healing
              traditions meet modern therapeutic techniques. Our serene environment, expert therapists,
              and premium organic products create an experience that rejuvenates body, mind, and spirit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E2F1' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #5B3A86, #7D4DB3)' }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
