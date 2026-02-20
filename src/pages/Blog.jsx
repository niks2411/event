import useReveal from '../hooks/useReveal';

const posts = [
    { title: '10 Wedding Décor Trends for 2026', category: 'Wedding Tips', date: 'Feb 10, 2026', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop', excerpt: 'Discover the hottest wedding decoration trends that will dominate celebrations this year.' },
    { title: 'How to Plan the Perfect Haldi Ceremony', category: 'Traditions', date: 'Feb 5, 2026', img: '/haldi.webp', excerpt: 'A complete guide to planning a vibrant and traditional haldi ceremony with modern touches.' },
    { title: 'Fireworks Safety: Everything You Need to Know', category: 'Safety', date: 'Jan 28, 2026', img: '/fire.webp', excerpt: 'Essential safety tips and guidelines for spectacular yet safe fireworks displays at events.' },
    { title: 'Corporate Event Planning: A Complete Checklist', category: 'Corporate', date: 'Jan 20, 2026', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop', excerpt: 'Everything you need to organize a successful and memorable corporate event.' },
    { title: 'Choosing the Perfect Wedding Venue', category: 'Wedding Tips', date: 'Jan 15, 2026', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', excerpt: 'Key factors to consider when selecting the ideal venue for your dream wedding.' },
    { title: 'Engagement Party Ideas That Wow', category: 'Engagement', date: 'Jan 8, 2026', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop', excerpt: 'Creative and unique engagement party ideas to celebrate your love story.' },
];

export default function Blog() {
    const revealRef = useReveal();

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 top-10 right-10 animate-orb-float" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Insights & Tips</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Our <span className="gold-text italic">Blog</span>
                    </h1>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 bottom-0 left-0 animate-orb-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Latest Posts</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Stories & <span className="gold-text italic">Inspiration</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <article
                                key={post.title}
                                className="reveal group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl
                                    transition-all duration-500 hover:-translate-y-3 gold-border card-3d"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <div className="img-zoom h-52 relative">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="img-overlay">
                                        <span className="text-gold text-xs tracking-wider uppercase">Read Article →</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-semibold tracking-wider uppercase rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-charcoal-light/35 text-xs">{post.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {post.title}
                                    </h3>
                                    <p className="text-charcoal-light/55 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <span className="text-gold text-sm font-semibold tracking-wider uppercase cursor-pointer hover:text-gold-dark transition-colors">
                                        Read More →
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
