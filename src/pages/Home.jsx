import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';
import Lightbox from '../components/ui/Lightbox';
import SmartVideo from '../components/ui/SmartVideo';
import OptimizedImage from '../components/ui/OptimizedImage';
import { AnimatePresence, motion } from 'framer-motion';
import { Skiper30 } from '../components/ui/Skiper30';

const servicesList = [
    {
        title: 'Wedding Planning & Decor',
        badge: 'W',
        img: '/wedding/IMG_0543.jpg',
        desc: 'Complete wedding planning, décor design, and on-ground management.',
        gallery: [
            '/wedding/IMG_0543.jpg', '/wedding/IMG_0546.jpg', '/wedding/IMG_0549.jpg', '/wedding/IMG_0554.jpg', '/wedding/IMG_0592.jpg'
        ]
    },
    {
        title: 'Haldi & Mehndi Events',
        badge: 'H',
        img: '/haldi-mehndi/IMG_4429.jpg',
        desc: 'Vibrant, colorful and joyful décor and planning for Haldi & Mehndi.',
        gallery: [
            '/haldi-mehndi/IMG_0430.jpg', '/haldi-mehndi/IMG_0438.jpg', '/haldi-mehndi/IMG_0502.jpg', '/haldi-mehndi/IMG_4429.jpg',
            '/haldi-mehndi/IMG_6723.jpg', '/haldi-mehndi/IMG_6756.jpg', '/haldi-mehndi/IMG_6766.jpg', '/haldi-mehndi/IMG_9251.jpg'
        ]
    },
    {
        title: 'Sangeet Night',
        badge: 'S',
        img: '/sangeet/IMG_0845.jpg',
        desc: 'High-energy sangeet planning with performances and DJ.',
        gallery: [
            '/sangeet/IMG_0845.jpg', '/sangeet/IMG_0848.jpg', '/sangeet/IMG_0922.jpg', '/sangeet/IMG_0933.jpg'
        ]
    },
    {
        title: 'Engagement Ceremony',
        badge: 'E',
        img: '/engagement/IMG_0521_1.jpg',
        desc: 'Elegant engagement décor and complete ceremony coordination.',
        gallery: [
            '/engagement/IMG_0521_1.jpg', '/engagement/IMG_0526.jpg', '/engagement/IMG_0530.jpg', '/engagement/IMG_0532.jpg'
        ]
    },
    { 
        title: 'Photography & Films', 
        badge: 'P', 
        img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', 
        desc: 'Professional photography and cinematic wedding films.'
    },
    { 
        title: 'SFX & Entry Concepts', 
        badge: 'F', 
        img: '/entry-sfx/IMG_0926.jpg', 
        desc: 'Luxury special effects and grand entry concepts for a magical event.',
        gallery: ['/entry-sfx/IMG_0926.jpg']
    },
];

const heroSlides = [
    'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400686/2I0A3871_egsxgv.jpg',
    '/bg8.jpeg',
    'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400499/IMG_0521_1_mylb1b.jpg',
    'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_0438_ymf5mm.jpg',
    'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/IMG_0546_bucqed.jpg'
];

const galleryImages = [
    '/wedding/IMG_0543.jpg',
    '/haldi-mehndi/IMG_4429.jpg',
    '/engagement/IMG_0521_1.jpg',
    '/sangeet/IMG_0845.jpg',
    '/wedding/IMG_0546.jpg',
    '/haldi-mehndi/IMG_6756.jpg',
    '/engagement/IMG_0530.jpg',
    '/sangeet/IMG_0922.jpg',
    '/wedding/IMG_0549.jpg',
    '/haldi-mehndi/IMG_0438.jpg',
    '/engagement/IMG_0526.jpg',
    '/entry-sfx/IMG_0926.jpg'
];

const testimonials = [
    { name: 'Amod & Ritika', role: 'Wedding', text: 'We had an amazing experience with Shimmer Plano Events for our wedding. Everything from décor to hospitality was perfectly managed. The team handled everything smoothly and made our big day truly special and stress-free. Highly recommended!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Khushboo & Om', role: 'Wedding', text: 'Shimmer Plano Events did a fantastic job in planning and managing our wedding. The décor was beautiful, and the entire event was well organized. Their team is very professional and supportive. Thank you for making our wedding memorable!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { name: 'Vaibhav', role: 'Haldi & Mehndi', text: 'We booked Shimmer Plano Events for Haldi and Mehndi, and the experience was wonderful. The décor, coordination, and overall setup were perfect. Everything was handled on time, and the team was very cooperative.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' }
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
    { src: '/SnapInsta.to_AQO-QusoRvyFu_hougfDxDL_D6jobQIocSM38JRdvH86hlhPPr9-lbkFOZW84eHZqTLJQsmjG6_0abUa9xI569OGY2u25skLGHk3TlU.mp4', label: 'Grand Wedding Highlight', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp' },
    { src: '/SnapInsta.to_AQPB_Ca46sHHf0nlTofJ5CTC2NGvQ_PKtCXB4iEGYjG_B3MfrMW-5rbSV1KWKs2WGdG6Q1C19Yx7idDW2ItbXKAA.mp4', label: 'Mehndi Magic', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
    { src: '/SnapInsta.to_AQPN0O7NWaUVZPt22z9SwPUQeljBT987QuQfOn6MOLTVZgP5I0LF8x_VNJVm_gNvq5eTDGOCviUsV0C2PzDgV6RI.mp4', label: 'Haldi Celebration', poster: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp' },
];

export default function Home() {
    const revealRef = useReveal();
    const [ref1, count1] = useCounter(560);
    const [ref2, count2] = useCounter(5);
    const [ref3, count3] = useCounter(100);

    const [activeGallery, setActiveGallery] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hero Background Slideshow Loop
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    // Aggressive Background Preloading for Home Page Assets
    useEffect(() => {
        // 1. Immediate Preload - Critical Hero Images
        heroSlides.slice(1, 3).forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // 2. Delayed Preload - Heavy Sections (Services & Gallery)
        const timer = setTimeout(() => {
            // Preload Service List thumbnails
            servicesList.forEach(s => {
                if (s.img) {
                    const img = new Image();
                    img.src = s.img;
                }
            });

            // Preload Masonry Gallery thumbnails
            galleryImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }, 1000); // Start after 1 second to not block initial render

        return () => clearTimeout(timer);
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
                    <AnimatePresence>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
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
                    <div className="mb-6 animate-fade-in flex items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
                        <span className="text-gold text-2xl">✦</span>
                        <p className="text-white text-base md:text-xl tracking-[0.5em] uppercase font-bold drop-shadow-lg" style={{ fontFamily: 'var(--font-accent)' }}>
                            Shimmer Plano Events
                        </p>
                        <span className="text-gold text-2xl">✦</span>
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
                </div>

                <div className="reveal mt-32 w-full relative z-20 min-h-[175vh] group/skipper">
                    <Skiper30 images={galleryImages} />
                    {/* Visual Overlay to blend transition */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-30" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reels.map((reel, i) => (
                            <div
                                key={reel.src}
                                className="reveal relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <SmartVideo
                                    src={reel.src}
                                    poster={reel.poster}
                                    label={reel.label}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ WHY CHOOSE US ═══════════ */}
            <section className="py-28 bg-[#FCF8F3] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left: Featured Image */}
                        <div className="w-full lg:w-[45%] reveal-left">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-2xl group-hover:bg-gold/20 transition-all duration-700" />
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] h-full">
                                    <OptimizedImage 
                                        src="https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400688/IMG_0554_q0cewx.jpg" 
                                        alt="Wedding Excellence" 
                                        className="transition-transform duration-1000 group-hover:scale-110"
                                        containerClassName="h-full"
                                        priority={true}
                                        objectFit="object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                        <p className="text-white/80 text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">Your Story</p>
                                        <p className="text-white text-2xl md:text-3xl font-bold font-heading">Crafting Perfection</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full lg:w-[55%]">
                            <div className="reveal mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Why Choose <span className="gold-text italic font-normal ml-1">Us</span>
                                </h2>
                                <div className="w-24 h-1 bg-gold rounded-full opacity-60" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                {whyUs.map((item, i) => (
                                    <div key={item.title} className="reveal flex gap-5 group/item" style={{ transitionDelay: `${i * 0.1}s` }}>
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/10 group-hover/item:bg-gold group-hover/item:border-gold transition-all duration-300">
                                            <svg className="w-4 h-4 text-gold group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-charcoal mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-charcoal-light/60 text-sm leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                        <div ref={ref1} className="reveal group p-8 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/40 hover:bg-white/60 transition-all duration-500">
                            <p className="text-6xl font-bold bg-gradient-to-br from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                {count1}<span className="text-3xl align-top ml-1 text-gold">+</span>
                            </p>
                            <div className="w-12 h-0.5 bg-gold/20 mx-auto mb-4 group-hover:w-20 transition-all duration-500" />
                            <p className="text-charcoal-light/40 text-[10px] font-bold uppercase tracking-[0.3em]">Events Delivered</p>
                        </div>
                        <div ref={ref2} className="reveal group p-8 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/40 hover:bg-white/60 transition-all duration-500">
                            <p className="text-6xl font-bold bg-gradient-to-br from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                {count2}<span className="text-3xl align-top ml-1 text-gold">+</span>
                            </p>
                            <div className="w-12 h-0.5 bg-gold/20 mx-auto mb-4 group-hover:w-20 transition-all duration-500" />
                            <p className="text-charcoal-light/40 text-[10px] font-bold uppercase tracking-[0.3em]">Years of Excellence</p>
                        </div>
                        <div ref={ref3} className="reveal group p-8 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/40 hover:bg-white/60 transition-all duration-500">
                            <p className="text-6xl font-bold bg-gradient-to-br from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                {count3}<span className="text-3xl align-top ml-1 text-gold">%</span>
                            </p>
                            <div className="w-12 h-0.5 bg-gold/20 mx-auto mb-4 group-hover:w-20 transition-all duration-500" />
                            <p className="text-charcoal-light/40 text-[10px] font-bold uppercase tracking-[0.3em]">Client Satisfaction</p>
                        </div>
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
                                    <OptimizedImage src={s.img} alt={s.title} className="w-full h-full" />
                                    <div className="img-overlay flex items-center justify-center">
                                        <span className="text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full">
                                            {s.gallery ? 'View Gallery →' : 'Explore →'}
                                        </span>
                                    </div>
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
                                    <div className="mb-4"></div>
                                    <p className="text-charcoal-light/65 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
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
                        backgroundImage: `url('https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400466/background_bnizmc.png')`,
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
