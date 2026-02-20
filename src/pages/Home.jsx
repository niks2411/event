import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';
import Lightbox from '../components/ui/Lightbox';
import SmartVideo from '../components/ui/SmartVideo';
import { AnimatePresence, motion } from 'framer-motion';

const servicesList = [
    {
        title: 'Wedding Planning & Decor',
        badge: 'W',
        img: '/wedding.webp',
        desc: 'Complete wedding planning, décor design, and on-ground management.',
        gallery: [
            '/wedding/2I0A3871.JPG', '/wedding/2I0A3887.JPG', '/wedding/2I0A3892.JPG', '/wedding/2I0A3894.JPG',
            '/wedding/IMG_0543.jpg', '/wedding/IMG_0546.jpg', '/wedding/IMG_0549.jpg', '/wedding/IMG_0554.jpg',
            '/wedding/IMG_0592.jpg', '/wedding/IMG_4443.jpg', '/wedding/IMG_4448.jpg', '/wedding/IMG_4450.jpg',
            '/wedding/IMG_4453.jpg', '/wedding/IMG_4461.jpg', '/wedding/IMG_4465.jpg', '/wedding/IMG_4477.jpg'
        ]
    },
    {
        title: 'Haldi & Mehndi Events',
        badge: 'H',
        img: '/haldi.webp',
        desc: 'Vibrant, colorful and joyful décor and planning for Haldi & Mehndi.',
        gallery: [
            '/haldi/IMG_0500.jpg', '/haldi/IMG_0502.jpg', '/haldi/IMG_0512.jpg', '/haldi/IMG_4421.jpg',
            '/haldi/IMG_4422.jpg', '/haldi/IMG_4423.jpg', '/haldi/IMG_4429.jpg', '/haldi/IMG_6756.jpg',
            '/haldi/IMG_6766.jpg', '/haldi/IMG_6770.jpg', '/haldi/IMG_8477.jpg', '/haldi/IMG_8480.jpg',
            '/haldi/IMG_8484 (1).jpg', '/haldi/IMG_8488.jpg', '/haldi/IMG_8490.jpg', '/haldi/IMG_8495.jpg',
            '/haldi/IMG_8500.jpg', '/haldi/IMG_8759.jpg', '/haldi/IMG_8764.jpg', '/haldi/IMG_8791.jpg',
            '/haldi/IMG_8796.jpg', '/haldi/IMG_8803.jpg', '/haldi/IMG_8808.jpg', '/haldi/IMG_9246.jpg',
            '/haldi/IMG_9251.jpg', '/haldi/IMG_9257.jpg', '/haldi/IMG_9259.jpg', '/haldi/IMG_9339.jpg',
            '/haldi/IMG_9346.jpg', '/mehndi/IMG_0430.jpg', '/mehndi/IMG_0438.jpg', '/mehndi/IMG_6723.jpg'
        ]
    },
    { title: 'Sangeet Night', badge: 'S', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', desc: 'High-energy sangeet planning with performances and DJ.' },
    {
        title: 'Engagement Ceremony',
        badge: 'E',
        img: '/engagement.webp',
        desc: 'Elegant engagement décor and complete ceremony coordination.',
        gallery: [
            '/engagement/IMG_0521 (1).jpg', '/engagement/IMG_0524.jpg', '/engagement/IMG_0526.jpg',
            '/engagement/IMG_0530.jpg', '/engagement/IMG_0532.jpg'
        ]
    },
    { title: 'Photography & Films', badge: 'P', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', desc: 'Professional photography and cinematic wedding films.' },
    { title: 'SFX & Entry Concepts', badge: 'F', img: '/fire.webp', desc: 'Luxury special effects and grand entry concepts for a magical event.' },
];

const heroSlides = [
    '/wedding/2I0A3871.JPG',
    '/haldi/IMG_8477.jpg',
    '/engagement/IMG_0521 (1).jpg',
    '/mehndi/IMG_0438.jpg',
    '/wedding/IMG_0546.jpg'
];

const galleryImages = [
    { src: '/wedding/2I0A3871.JPG', h: 'h-80', label: 'Wedding Planning' },
    { src: '/haldi/IMG_0512.jpg', h: 'h-64', label: 'Floral Setup' },
    { src: '/engagement/IMG_0521 (1).jpg', h: 'h-72', label: 'Engagement' },
    { src: '/fire.webp', h: 'h-80', label: 'Special Effects' },
    { src: '/wedding/IMG_0546.jpg', h: 'h-64', label: 'Palace Wedding' },
    { src: '/haldi/IMG_8477.jpg', h: 'h-72', label: 'Haldi Ceremony' },
    { src: '/wedding/IMG_4450.jpg', h: 'h-80', label: 'Bridal Entry' },
    { src: '/haldi/IMG_9251.jpg', h: 'h-64', label: 'Stage Decor' },
];

const testimonials = [
    { name: 'Priya & Rahul', role: 'Wedding', text: 'They turned our dream wedding into a reality beyond anything we imagined. Every detail was perfect.', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Ananya Sharma', role: 'Engagement', text: 'The most magical engagement ceremony! Our families were left speechless by the stunning décor.', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { name: 'Vikram Enterprises', role: 'Corporate Event', text: 'Professional, creative, and flawless execution. Our annual gala was the talk of the industry.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
];

const whyUs = [
    { num: '✔', title: 'Professional Team', desc: 'Expert wedding planning team dedicated to your vision.' },
    { num: '✔', title: 'Creative Decor', desc: 'Unique theme styling and stunning decor concepts.' },
    { num: '✔', title: 'Seamless Execution', desc: 'Flawless on-ground management for a stress-free day.' },
    { num: '✔', title: 'Full Entertainment', desc: 'DJ, Anchor, and curated entertainment solutions.' },
    { num: '✔', title: 'Photography', desc: 'High-quality cinematic films and professional photography.' },
    { num: '✔', title: 'Guest Management', desc: 'Professional hospitality and seating management.' },
    { num: '✔', title: 'Special Effects', desc: 'Luxury SFX and grand entry concepts for magical moments.' },
    { num: '✔', title: 'Experiences', desc: 'We don’t just plan events — we create lifelong experiences.' },
];

const workingProcess = [
    { step: '1', title: 'Consultation', desc: 'We understand your vision, budget and expectations.' },
    { step: '2', title: 'Planning', desc: 'We design themes, timelines and execution strategy.' },
    { step: '3', title: 'Execution', desc: 'Our team manages everything on-ground smoothly.' },
    { step: '4', title: 'Celebration', desc: 'You enjoy your day — we handle the rest.' },
];

const reels = [
    { id: 'aUrasM-b3sg', label: 'Grand Wedding Highlight', poster: '/wedding.webp' },
    { id: 'rmU6a81ll3Q', label: 'Haldi Celebration', poster: '/haldi.webp' },
    { id: 'S9THv_CjII4', label: 'Mehndi Magic', poster: '/haldi.webp' },
    { id: 'dALJnPgxfC8', label: 'Reception Night', poster: '/wedding.webp' },
];

export default function Home() {
    const revealRef = useReveal();
    const [ref1, count1] = useCounter(100);
    const [ref2, count2] = useCounter(5);
    const [ref3, count3] = useCounter(100);

    const [activeGallery, setActiveGallery] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hero Background Slideshow Loop
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Keyboard controls for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!activeGallery) return;
            if (e.key === 'Escape') setActiveGallery(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeGallery, photoIndex]);

    const handleNext = () => {
        if (!activeGallery) return;
        setPhotoIndex((prev) => (prev + 1) % activeGallery.gallery.length);
    };

    const handlePrev = () => {
        if (!activeGallery) return;
        setPhotoIndex((prev) => (prev - 1 + activeGallery.gallery.length) % activeGallery.gallery.length);
    };

    const openGallery = (s) => {
        if (s.gallery && s.gallery.length > 0) {
            setActiveGallery(s);
            setPhotoIndex(0);
        }
    };

    return (
        <div ref={revealRef}>
            {/* ═══════════ HERO SECTION ═══════════ */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Background Slideshow */}
                <div className="absolute inset-0 bg-charcoal">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url('${heroSlides[currentSlide]}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                </div>

                <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] top-10 left-10 animate-orb-float" />
                <div className="gradient-orb gradient-orb-blush w-[300px] h-[300px] bottom-20 right-10 animate-orb-float" style={{ animationDelay: '3s' }} />

                <div className="relative z-10 text-center px-4 max-w-5xl pt-20 md:pt-28">
                    <div className="mb-4 animate-fade-in flex items-center justify-center gap-3" style={{ animationDelay: '0.2s' }}>
                        <span className="text-gold text-xl">✦</span>
                        <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase font-bold" style={{ fontFamily: 'var(--font-accent)' }}>
                            Shimmer Plano Events
                        </p>
                        <span className="text-gold text-xl">✦</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.4s', fontFamily: 'var(--font-heading)' }}>
                        Designing Celebrations.<br />
                        <span className="italic text-gold-light">Creating Memories.</span>
                    </h1>

                    <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed drop-shadow-md" style={{ animationDelay: '0.7s' }}>
                        Premium wedding & event planning company in Faridabad & Delhi-NCR.
                        From intimate ceremonies to grand weddings — we plan, design and execute everything with perfection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                        <Link
                            to="/contact"
                            className="px-12 py-4 bg-gold text-white font-bold text-sm tracking-widest uppercase rounded-full 
                                hover:bg-gold-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/20"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            to="/book"
                            className="px-12 py-4 border-2 border-white/30 text-white font-bold text-sm tracking-widest uppercase 
                                rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                        >
                            Plan Your Event
                        </Link>
                    </div>

                    <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                        <a href="tel:8826805646" className="inline-flex items-center gap-2 group">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-gold transition-colors duration-300">📞</span>
                            <span className="text-white font-bold tracking-widest uppercase text-sm">Call Now: 8826805646</span>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-2">
                        <div className="w-0.5 h-2.5 bg-gold rounded-full" />
                    </div>
                </div>
            </section>

            {/* ═══════════ SERVICES PREVIEW ═══════════ */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>What We Offer</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our <span className="gold-text italic">Premium</span> Services
                        </h2>
                        <div className="section-divider mb-5" />
                        <p className="text-charcoal-light/60 max-w-xl mx-auto text-sm leading-relaxed">
                            From intimate gatherings to grand weddings, we plan, design and execute everything with perfection.
                            {activeGallery ? null : ' Click to view our work.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((s, i) => (
                            <div
                                key={s.title}
                                className={`reveal group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl
                                    transition-all duration-500 hover:-translate-y-3 gold-border card-3d ${s.gallery ? 'cursor-pointer' : ''}`}
                                style={{ transitionDelay: `${i * 0.08}s` }}
                                onClick={() => s.gallery && openGallery(s)}
                            >
                                <div className="img-zoom h-52 relative">
                                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="img-overlay flex items-center justify-center">
                                        <span className="text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full">
                                            {s.gallery ? 'View Gallery →' : 'Explore →'}
                                        </span>
                                    </div>
                                    <span className="absolute top-4 left-4 icon-badge icon-badge-circle text-sm">{s.badge}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                                    <p className="text-charcoal-light/55 text-sm leading-relaxed mb-4">{s.desc}</p>
                                    <div className="flex justify-between items-center">
                                        <Link to="/services" onClick={(e) => e.stopPropagation()} className="text-gold text-[10px] font-bold tracking-widest uppercase hover:text-gold-dark transition-colors">
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ MASONRY GALLERY ═══════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Visual Journey</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Moments of <span className="gold-text italic">Magic</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="masonry-grid">
                        {galleryImages.map((item, i) => (
                            <div
                                key={i}
                                className={`reveal img-zoom rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group cursor-pointer relative ${item.h} transition-all duration-500`}
                                onClick={() => openGallery({ title: item.label, gallery: [item.src] })}
                            >
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                                <div className="img-overlay">
                                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{item.label}</span>
                                    <span className="text-gold text-xs tracking-wider uppercase mt-2">View Photo</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12 reveal">
                        <Link to="/portfolio" className="inline-block px-10 py-4 border-2 border-gold text-gold font-bold text-xs tracking-widest uppercase rounded-full hover:bg-gold hover:text-white transition-all duration-300">
                            View Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════ CINEMATIC REELS ═══════════ */}
            <section className="py-28 bg-charcoal relative overflow-hidden">
                <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] top-0 left-0 animate-orb-float opacity-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Cinematic Highlights</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Stories <span className="gold-text italic">In Motion</span>
                        </h2>
                        <div className="section-divider" />
                        <p className="text-white/40 max-w-xl mx-auto text-sm mt-6">
                            Glimpses of the magic we create. Experience the emotions, the grandeur, and the joy of Shimmer Plano Events.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reels.map((reel, i) => (
                            <div
                                key={reel.id}
                                className="reveal relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <SmartVideo
                                    id={reel.id}
                                    poster={reel.poster}
                                    label={reel.label}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ WHY CHOOSE US ═══════════ */}
            <section className="py-28 bg-blush relative overflow-hidden">
                <div className="gradient-orb gradient-orb-gold w-96 h-96 top-0 right-0 animate-orb-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Why Choose Us</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            The <span className="gold-text italic">Shimmer</span> Advantage
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyUs.map((item, i) => (
                            <div
                                key={item.title}
                                className="reveal text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm
                                    hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group gold-border"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="icon-badge icon-badge-lg icon-badge-circle mx-auto mb-5 text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {item.num}
                                </div>
                                <h3 className="text-lg font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                                <p className="text-charcoal-light/55 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div ref={ref1} className="reveal p-8 bg-white/50 rounded-2xl">
                            <p className="text-5xl font-bold gold-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{count1}+</p>
                            <p className="text-charcoal-light/50 text-xs uppercase tracking-[0.2em]">Events Delivered</p>
                        </div>
                        <div ref={ref2} className="reveal p-8 bg-white/50 rounded-2xl">
                            <p className="text-5xl font-bold gold-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{count2}+</p>
                            <p className="text-charcoal-light/50 text-xs uppercase tracking-[0.2em]">Years of Excellence</p>
                        </div>
                        <div ref={ref3} className="reveal p-8 bg-white/50 rounded-2xl">
                            <p className="text-5xl font-bold gold-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{count3}%</p>
                            <p className="text-charcoal-light/50 text-xs uppercase tracking-[0.2em]">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ WORKING PROCESS ═══════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>How We Work</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our Working <span className="gold-text italic">Process</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gold/20 hidden lg:block -translate-y-12" />

                        {workingProcess.map((step, i) => (
                            <div key={step.title} className="reveal text-center relative z-10" style={{ transitionDelay: `${i * 0.15}s` }}>
                                <div className="w-16 h-16 rounded-full bg-gold text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gold/30">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                                <p className="text-charcoal-light/60 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ TESTIMONIALS ═══════════ */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Testimonials</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Client <span className="gold-text italic">Stories</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.name}
                                className="reveal relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500
                                    hover:-translate-y-2 gold-border group"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <span className="quote-mark">"</span>
                                <div className="relative z-10">
                                    <div className="stars text-base mb-4">{'★'.repeat(t.rating)}</div>
                                    <p className="text-charcoal-light/65 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-gold/20" loading="lazy" />
                                        <div>
                                            <p className="font-bold text-charcoal text-sm">{t.name}</p>
                                            <p className="text-gold text-xs tracking-wider uppercase">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Gallery */}
            <AnimatePresence>
                {activeGallery && (
                    <Lightbox
                        gallery={activeGallery.gallery}
                        index={photoIndex}
                        onClose={() => setActiveGallery(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        onIndexChange={(idx) => setPhotoIndex(idx)}
                    />
                )}
            </AnimatePresence>

            {/* ═══════════ CTA BANNER ═══════════ */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=600&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/75" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="reveal">
                        <div className="ornament-line mb-6">
                            <span className="ornament" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            Let's Plan Your{' '}
                            <span className="gold-text italic">Perfect Day</span>
                        </h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
                            Ready to create an unforgettable celebration? Our team is here to bring your vision to
                            life with elegance, creativity, and perfection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-10 py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase rounded-full
                                    hover:bg-gold-dark transition-all duration-300 btn-glow"
                            >
                                Get In Touch
                            </Link>
                            <a
                                href="tel:8826805646"
                                className="px-10 py-4 border border-white/20 text-white font-semibold text-sm tracking-widest uppercase
                                    rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Call: 8826805646
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
