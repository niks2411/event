import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import SmartVideo from '../components/ui/SmartVideo';
import OptimizedImage from '../components/ui/OptimizedImage';
import Lightbox from '../components/ui/Lightbox';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Weddings', 'Engagement', 'Haldi & Mehndi', 'Sangeet', 'SFX & Entry'];

const portfolioItems = [
    { src: '/wedding/IMG_0543.jpg', cat: 'Weddings', title: 'Grand Mandap Setup', h: 'h-80' },
    { src: '/wedding/IMG_0546.jpg', cat: 'Weddings', title: 'Luxury Floral Decor', h: 'h-64' },
    { src: '/haldi-mehndi/IMG_4429.jpg', cat: 'Haldi & Mehndi', title: 'Traditional Haldi Vibe', h: 'h-72' },
    { src: '/engagement/IMG_0521_1.jpg', cat: 'Engagement', title: 'Royal Engagement Entry', h: 'h-64' },
    { src: '/sangeet/IMG_0845.jpg', cat: 'Sangeet', title: 'Sangeet Celebration Night', h: 'h-80' },
    { src: '/haldi-mehndi/IMG_0430.jpg', cat: 'Haldi & Mehndi', title: 'Seating Ambience', h: 'h-72' },
    { src: '/wedding/IMG_0549.jpg', cat: 'Weddings', title: 'Bride & Groom Seating', h: 'h-64' },
    { src: '/engagement/IMG_0530.jpg', cat: 'Engagement', title: 'Ring Ceremony Decor', h: 'h-80' },
    { src: '/entry-sfx/IMG_0926.jpg', cat: 'SFX & Entry', title: 'Cold Firework Entry', h: 'h-72' },
    { src: '/wedding/IMG_0554.jpg', cat: 'Weddings', title: 'Reception Grandeur', h: 'h-64' },
    { src: '/haldi-mehndi/IMG_6756.jpg', cat: 'Haldi & Mehndi', title: 'Colorful Mehndi Setup', h: 'h-80' },
    { src: '/sangeet/IMG_0922.jpg', cat: 'Sangeet', title: 'High-Energy Dance Floor', h: 'h-72' },
    { src: '/engagement/IMG_0526.jpg', cat: 'Engagement', title: 'Elegant Stage Setup', h: 'h-64' },
    { src: '/haldi-mehndi/IMG_6766.jpg', cat: 'Haldi & Mehndi', title: 'Floral Mandap Details', h: 'h-80' },
    { src: '/sangeet/IMG_0933.jpg', cat: 'Sangeet', title: 'DJ & Sound Experience', h: 'h-72' },
    { src: '/wedding/IMG_0592.jpg', cat: 'Weddings', title: 'Evening Ambience', h: 'h-64' },
    { src: '/haldi-mehndi/IMG_0438.jpg', cat: 'Haldi & Mehndi', title: 'Traditional Vibe Decor', h: 'h-72' },
    { src: '/engagement/IMG_0532.jpg', cat: 'Engagement', title: 'Couple Celebration Moment', h: 'h-80' },
    { src: '/haldi-mehndi/IMG_9251.jpg', cat: 'Haldi & Mehndi', title: 'Mehndi Garden Setup', h: 'h-72' },
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
                    <motion.div 
                        layout
                        className="masonry-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayedItems.map((item, i) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
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
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

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
            <AnimatePresence>
                {lightbox && (
                    <Lightbox
                        gallery={filtered.map(item => item.src)} // Pass all filtered images to lightbox
                        index={filtered.indexOf(lightbox)}
                        onClose={() => setLightbox(null)}
                        onNext={() => {
                            const currentIndex = filtered.indexOf(lightbox);
                            setLightbox(filtered[(currentIndex + 1) % filtered.length]);
                        }}
                        onPrev={() => {
                            const currentIndex = filtered.indexOf(lightbox);
                            setLightbox(filtered[(currentIndex - 1 + filtered.length) % filtered.length]);
                        }}
                        onIndexChange={(idx) => setLightbox(filtered[idx])}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
