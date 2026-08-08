import { useState } from 'react';
import { X } from 'lucide-react';

const GALLERY = [
  {
    src: '/gallery/Reception1.png',
    alt: 'Euro Spa Center reception and lounge',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/gallery/Reception2.png',
    alt: 'Euro Spa Center lounge area',
    span: '',
  },
  {
    src: '/gallery/Reception3.png',
    alt: 'Euro Spa Center reception desk',
    span: '',
  },
  {
    src: '/gallery/Reception4.png',
    alt: 'Spa bathroom',
    span: '',
  },
  {
    src: '/gallery/Reception5.png',
    alt: 'Spa washroom and vanity area',
    span: '',
  },
  {
    src: '/gallery/Reception6.png',
    alt: 'Euro Spa Center interior',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/Reception7.png',
    alt: 'Euro Spa Center spa team',
    span: '',
  },
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
  src={lightbox}
  alt="Enlarged spa gallery image"
  className="max-w-full max-h-[90vh] object-contain rounded-2xl"
/>
        </div>
      )}
    </section>
  );
}
