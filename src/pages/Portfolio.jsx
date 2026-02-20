import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import SmartVideo from '../components/ui/SmartVideo';

const categories = ['All', 'Weddings', 'Engagement', 'Haldi', 'Cinematic Reels', 'Fireworks'];

const portfolioItems = [
    { src: '/wedding/2I0A3871.JPG', cat: 'Weddings', title: 'Grand Entry Moment', h: 'h-80', poster: '/wedding.webp' },
    { id: 'aUrasM-b3sg', cat: 'Cinematic Reels', title: 'Wedding Highlight', h: 'h-[400px]', isVideo: true, poster: '/wedding.webp' },
    { src: '/wedding/2I0A3887.JPG', cat: 'Weddings', title: 'Mandap Decor', h: 'h-64', poster: '/wedding.webp' },
    { id: 'rmU6a81ll3Q', cat: 'Cinematic Reels', title: 'Haldi Celebration', h: 'h-[400px]', isVideo: true, poster: '/haldi.webp' },
    { src: '/haldi/IMG_0500.jpg', cat: 'Haldi', title: 'Traditional Haldi Setup', h: 'h-72', poster: '/haldi.webp' },
    { src: '/engagement/IMG_0521 (1).jpg', cat: 'Engagement', title: 'Royal Engagement', h: 'h-64', poster: '/engagement.webp' },
    { id: 'S9THv_CjII4', cat: 'Cinematic Reels', title: 'Mehndi & Decor', h: 'h-[400px]', isVideo: true, poster: '/haldi.webp' },
    { src: '/mehndi/IMG_0430.jpg', cat: 'Haldi', title: 'Mehndi Art & Decor', h: 'h-80', poster: '/haldi.webp' },
    { src: '/wedding/IMG_0543.jpg', cat: 'Weddings', title: 'Floral Elegance', h: 'h-72', poster: '/wedding.webp' },
    { id: 'dALJnPgxfC8', cat: 'Cinematic Reels', title: 'Reception Highlights', h: 'h-[400px]', isVideo: true, poster: '/wedding.webp' },
    { src: '/haldi/IMG_4421.jpg', cat: 'Haldi', title: 'Yellow Vibe Celebration', h: 'h-64', poster: '/haldi.webp' },
    { src: '/engagement/IMG_0530.jpg', cat: 'Engagement', title: 'Ring Ceremony', h: 'h-80', poster: '/engagement.webp' },
    { src: '/fire.webp', cat: 'Fireworks', title: 'Grand Finale Show', h: 'h-72', poster: '/fire.webp' },
    { src: '/wedding/IMG_0554.jpg', cat: 'Weddings', title: 'Dinner Reception', h: 'h-64', poster: '/wedding.webp' },
    { src: '/haldi/IMG_8484 (1).jpg', cat: 'Haldi', title: 'Vibrant Haldi Smiles', h: 'h-80', poster: '/haldi.webp' },
    { src: '/mehndi/IMG_6723.jpg', cat: 'Haldi', title: 'Henna Traditions', h: 'h-72', poster: '/haldi.webp' },
    { src: '/wedding/IMG_4477.jpg', cat: 'Weddings', title: 'Luxury Stay', h: 'h-64', poster: '/wedding.webp' },
    { src: '/engagement/IMG_0532.jpg', cat: 'Engagement', title: 'Cake Cutting', h: 'h-80', poster: '/engagement.webp' },
    { src: '/haldi/IMG_9346.jpg', cat: 'Haldi', title: 'Full Bloom Decor', h: 'h-72', poster: '/haldi.webp' },
    { src: '/wedding/IMG_4443.jpg', cat: 'Weddings', title: 'Evening Vibe', h: 'h-64', poster: '/wedding.webp' },
];

export default function Portfolio() {
    const revealRef = useReveal();
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState(null);

    const filtered = active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.cat === active);

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 bottom-10 left-10 animate-orb-float" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Our Work</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Portfolio <span className="gold-text italic">Showcase</span>
                    </h1>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 reveal">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300
                                    ${active === cat
                                        ? 'bg-gold text-white shadow-lg shadow-gold/20 scale-105'
                                        : 'bg-white text-charcoal border border-gold/10 hover:border-gold/30 hover:bg-gold/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Gallery */}
                    <div className="masonry-grid">
                        {filtered.map((item, i) => (
                            <div
                                key={(item.id || item.src) + i}
                                className={`img-zoom rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group cursor-pointer relative ${item.h}
                                    transition-all duration-500 bg-charcoal/5`}
                                onClick={() => setLightbox(item)}
                            >
                                {item.isVideo ? (
                                    <SmartVideo
                                        id={item.id}
                                        poster={item.poster}
                                        label={item.title}
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                )}
                                <div className="img-overlay">
                                    <span className="text-gold text-xs tracking-wider uppercase mb-1">{item.cat}</span>
                                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</span>
                                    {item.isVideo && (
                                        <span className="px-3 py-1 bg-gold text-white text-[8px] font-bold tracking-widest uppercase rounded-full mt-2">
                                            YouTube Reel
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
                    <button
                        className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl z-10 w-10 h-10 rounded-full
                            border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                        onClick={() => setLightbox(null)}
                    >
                        ✕
                    </button>
                    <div className="max-w-4xl w-full p-4 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        {lightbox.isVideo ? (
                            <div className="w-full aspect-[9/16] max-h-[85vh] rounded-xl overflow-hidden shadow-2xl border-4 border-white/5 bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${lightbox.id}?autoplay=1&controls=1&rel=0`}
                                    className="w-full h-full"
                                    title={lightbox.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <img src={lightbox.src} alt={lightbox.title} className="max-h-[75vh] w-auto rounded-xl shadow-2xl" />
                        )}
                        <div className="text-center mt-6">
                            <h4 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{lightbox.title}</h4>
                            <p className="text-gold text-sm tracking-widest uppercase mt-2 font-bold">{lightbox.cat}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
