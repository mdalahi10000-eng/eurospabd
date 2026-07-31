import { useState } from 'react';
import { X } from 'lucide-react';

const GALLERY = [
  { src: 'https://images.pexels.com/photos/4170175/pexels-photo-4170175.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Luxury spa massage room interior', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/6186740/pexels-photo-6186740.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Spa candles and ceramic holder', span: '' },
  { src: 'https://images.pexels.com/photos/6186752/pexels-photo-6186752.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Rolled towels and candlelight on wooden shelf', span: '' },
  { src: 'https://images.pexels.com/photos/7789646/pexels-photo-7789646.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elegant massage room with illuminated wall panel', span: '' },
  { src: 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Relaxing spa scene with candles, towels, and flowers', span: '' },
  { src: 'https://images.pexels.com/photos/6560298/pexels-photo-6560298.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Hot stone massage therapy session', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/17640379/pexels-photo-17640379.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Minimalist spa interior with curved furniture', span: '' },
  { src: 'https://images.pexels.com/photos/11741344/pexels-photo-11741344.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elegant candle and towels in spa setting', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32" aria-label="Spa gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600">
            Gallery
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#2E1A47' }}
          >
            A Glimpse of Our Sanctuary
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the serene spaces and signature moments that await you at Euro Spa Center.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {GALLERY.map(({ src, alt, span }, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className={`group relative overflow-hidden rounded-2xl ${span}`}
              style={{ border: '1px solid #E8E2F1' }}
              aria-label={`Open image: ${alt}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(46,26,71,0.7) 100%)' }}
              >
                <span className="text-white text-sm font-medium">{alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer"
          style={{ background: 'rgba(46,26,71,0.95)' }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.replace(/w=\d+/, 'w=1600')}
            alt="Enlarged spa gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}
