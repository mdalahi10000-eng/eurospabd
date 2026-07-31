import { Hand, Heart, Flower2, Flame, Users, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    icon: Hand,
    name: 'Swedish Massage',
    desc: 'Gentle, flowing strokes that melt away tension and improve circulation for total body relaxation.',
    image: 'https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    name: 'Deep Tissue Massage',
    desc: 'Targeted pressure that releases chronic muscle tension and knots deep within the body.',
    image: 'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flower2,
    name: 'Aromatherapy Massage',
    desc: 'Essential oils blended to soothe the mind while therapeutic touch restores the body.',
    image: 'https://images.pexels.com/photos/3865794/pexels-photo-3865794.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    name: 'Hot Stone Massage',
    desc: 'Warm volcanic stones glide across the body, easing deep muscle tension and restoring energy.',
    image: 'https://images.pexels.com/photos/6187652/pexels-photo-6187652.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    name: 'Four Hand Massage',
    desc: 'Two therapists working in harmony create a deeply immersive and profoundly relaxing experience.',
    image: 'https://images.pexels.com/photos/18120174/pexels-photo-18120174.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    name: 'Six Hand Massage',
    desc: 'Three therapists synchronize for the ultimate indulgence—a symphony of touch and tranquility.',
    image: 'https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative"
      style={{ background: 'linear-gradient(180deg, #F8F5F1 0%, #F3EEF9 100%)' }}
      aria-label="Our spa services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            Our Signature Therapies
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            Treatments Crafted for Your Wellbeing
          </h2>
          <p className="text-gray-600 text-lg">
            Each therapy is designed by our master therapists to deliver profound relaxation and lasting renewal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, name, desc, image }) => (
            <article
              key={name}
              className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: '#FFFFFF', border: '1px solid #E8E2F1', boxShadow: '0 4px 20px rgba(46,26,71,0.06)' }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={`${name} at Euro Spa Center`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(46,26,71,0) 40%, rgba(46,26,71,0.5) 100%)' }}
                />
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
                >
                  {name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  View Pricing
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
