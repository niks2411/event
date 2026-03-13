import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import SmartVideo from '../components/ui/SmartVideo';
import OptimizedImage from '../components/ui/OptimizedImage';

const categories = ['All', 'Weddings', 'Engagement', 'Haldi', 'Fireworks'];

const portfolioItems = [
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400686/2I0A3871_egsxgv.jpg', cat: 'Weddings', title: 'Grand Entry Moment', h: 'h-80', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400688/2I0A3887_qdpcit.jpg', cat: 'Weddings', title: 'Mandap Decor', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400582/IMG_0500_ujmroj.jpg', cat: 'Haldi', title: 'Traditional Haldi Setup', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400499/IMG_0521_1_mylb1b.jpg', cat: 'Engagement', title: 'Royal Engagement', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/engagement_p1hq4n.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_0430_mhfl3g.jpg', cat: 'Haldi', title: 'Mehndi Art & Decor', h: 'h-80', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/IMG_0543_l4wmmh.jpg', cat: 'Weddings', title: 'Floral Elegance', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400583/IMG_4421_nil3lx.jpg', cat: 'Haldi', title: 'Yellow Vibe Celebration', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400502/IMG_0530_xds5xw.jpg', cat: 'Engagement', title: 'Ring Ceremony', h: 'h-80', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/engagement_p1hq4n.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/fire_cmv6ch.webp', cat: 'Fireworks', title: 'Grand Finale Show', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/fire_cmv6ch.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400688/IMG_0554_q0cewx.jpg', cat: 'Weddings', title: 'Dinner Reception', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400588/IMG_8484_1_krkswe.jpg', cat: 'Haldi', title: 'Vibrant Haldi Smiles', h: 'h-80', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_6723_bs8wi3.jpg', cat: 'Haldi', title: 'Henna Traditions', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400734/IMG_4477_obe30u.jpg', cat: 'Weddings', title: 'Luxury Stay', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400501/IMG_0532_ecmg1p.jpg', cat: 'Engagement', title: 'Cake Cutting', h: 'h-80', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/engagement_p1hq4n.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400640/IMG_9346_hj1kbn.jpg', cat: 'Haldi', title: 'Full Bloom Decor', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400689/IMG_4443_sezmp8.jpg', cat: 'Weddings', title: 'Evening Vibe', h: 'h-64', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_0438_ymf5mm.jpg', cat: 'Haldi', title: 'Colorful Blooms', h: 'h-72', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
];

export default function Portfolio() {
    const revealRef = useReveal();
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const [displayCount, setDisplayCount] = useState(6);

    const filtered = active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.cat === active);
    const displayedItems = filtered.slice(0, displayCount);

    useEffect(() => {
        // Preload remaining images in background after initial load
        const timer = setTimeout(() => {
            const itemsToPreload = portfolioItems.slice(6);
            itemsToPreload.forEach(item => {
                if (!item.isVideo && item.src) {
                    const img = new Image();
                    img.src = item.src.includes('cloudinary.com') 
                        ? item.src.replace('/upload/', '/upload/f_auto,q_auto,w_600/') 
                        : item.src;
                }
                if (item.poster) {
                    const posterImg = new Image();
                    posterImg.src = item.poster;
                }
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const loadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

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
                        {displayedItems.map((item, i) => (
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
                                    <OptimizedImage
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full"
                                        containerClassName="h-full"
                                        width={600}
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

                    {/* Load More Button */}
                    {displayCount < filtered.length && (
                        <div className="mt-20 text-center reveal">
                            <button
                                onClick={loadMore}
                                className="px-12 py-4 bg-gold text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300"
                            >
                                Load More Stories
                            </button>
                        </div>
                    )}
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
                            <OptimizedImage src={lightbox.src} alt={lightbox.title} className="max-h-[75vh] w-auto rounded-xl shadow-2xl" priority />
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
