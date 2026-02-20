import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const featuredVideo = {
    title: 'Priya & Rahul — A Royal Wedding',
    thumb: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=675&fit=crop',
};

const videoReels = [
    { title: 'Grand Wedding Entrance', category: 'Wedding', thumb: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop', duration: '3:24' },
    { title: 'Spectacular Fireworks Display', category: 'Fireworks', thumb: '/fire.webp', duration: '2:15' },
    { title: 'Haldi Ceremony Highlights', category: 'Haldi', thumb: '/haldi.webp', duration: '4:02' },
    { title: 'Corporate Year-End Gala', category: 'Corporate', thumb: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop', duration: '5:30' },
    { title: 'Romantic Engagement Night', category: 'Engagement', thumb: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop', duration: '3:45' },
    { title: 'Stage Décor Transformation', category: 'Decoration', thumb: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop', duration: '1:58' },
    { title: 'Birthday Bash Reels', category: 'Birthday', thumb: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&h=400&fit=crop', duration: '2:40' },
    { title: 'Beachside Wedding Film', category: 'Wedding', thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', duration: '6:12' },
    { title: 'Sangeet Night Dance Party', category: 'Wedding', thumb: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&h=400&fit=crop', duration: '3:55' },
];

export default function Videos() {
    const revealRef = useReveal();

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 bottom-10 right-10 animate-orb-float" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Cinematic Stories</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Event <span className="gold-text italic">Videos</span>
                    </h1>
                </div>
            </section>

            {/* Featured Video */}
            <section className="py-28 bg-charcoal relative overflow-hidden">
                <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] top-0 left-0 animate-orb-float" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Featured Film</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            {featuredVideo.title}
                        </h2>
                    </div>
                    <div className="reveal aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/8 relative cursor-pointer group">
                        <img
                            src={featuredVideo.thumb}
                            alt={featuredVideo.title}
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-20 h-20 rounded-full bg-gold/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-500 shadow-xl">
                                <span className="text-white text-2xl ml-1">▶</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white/50 text-sm">Click to play full wedding film</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Reels Grid */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 -top-20 right-0 animate-orb-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Event Reels</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Short <span className="gold-text italic">Highlights</span>
                        </h2>
                        <div className="section-divider" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoReels.map((v, i) => (
                            <div
                                key={v.title}
                                className="reveal group cursor-pointer"
                                style={{ transitionDelay: `${i * 0.05}s` }}
                            >
                                <div className="img-zoom aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl relative transition-shadow duration-300">
                                    <img src={v.thumb} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <span className="text-white text-xl ml-0.5">▶</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/70 text-xs font-medium">
                                        {v.duration}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {v.title}
                                    </h3>
                                    <p className="text-gold/60 text-xs tracking-wider uppercase mt-1">{v.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920&h=600&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-charcoal/85" />
                <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] top-0 right-0 animate-orb-float" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
                    <div className="ornament-line mb-6">
                        <span className="ornament" />
                    </div>
                    <p className="text-6xl text-gold/15 mb-4" style={{ fontFamily: 'Great Vibes, cursive' }}>Cinematic</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Every Event is a <span className="gold-text italic">Story</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
                        Our professional videography team captures the emotion, beauty, and magic of your celebration
                        with cinematic precision. Each video is crafted to tell your unique story.
                    </p>
                    <Link
                        to="/book"
                        className="inline-block px-10 py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase rounded-full
                            hover:bg-gold-dark transition-all duration-300 btn-glow"
                    >
                        Request Video Package
                    </Link>
                </div>
            </section>
        </div>
    );
}
