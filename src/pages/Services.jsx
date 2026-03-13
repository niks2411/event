import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import Lightbox from '../components/ui/Lightbox';
import { AnimatePresence } from 'framer-motion';
import OptimizedImage from '../components/ui/OptimizedImage';

const services = [
    {
        title: 'Wedding Planning & Decor',
        badge: 'W',
        img: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/wedding_n1rfnd.webp',
        desc: 'Complete wedding planning, décor design, theme styling and on-ground management.',
        includes: ['Mandap & stage decor', 'Bride & groom entry concepts', 'Floral & lighting setup', 'Guest seating & ambience'],
        gallery: [
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400686/2I0A3871_egsxgv.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400688/2I0A3887_qdpcit.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400686/2I0A3892_llo9tu.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/2I0A3894_wzvxku.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/IMG_0543_l4wmmh.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/IMG_0546_bucqed.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400687/IMG_0549_gxam0n.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400688/IMG_0554_q0cewx.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400689/IMG_0592_wpqvi2.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400689/IMG_4443_sezmp8.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400733/IMG_4448_uw6hza.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400733/IMG_4450_yoxqwk.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400733/IMG_4453_prgdj7.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400734/IMG_4461_edcnpf.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400734/IMG_4465_f5g8j1.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400734/IMG_4477_obe30u.jpg'
        ]
    },
    {
        title: 'Haldi & Mehndi Events',
        badge: 'H',
        img: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400465/haldi_evqqdk.webp',
        desc: 'Vibrant, colorful and joyful décor and planning for Haldi & Mehndi functions.',
        includes: ['Theme décor & floral setup', 'Entry coordination', 'Music & vibe planning', 'Guest flow management'],
        gallery: [
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400582/IMG_0500_ujmroj.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400582/IMG_0502_xvnngk.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400582/IMG_0512_x5grj0.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400583/IMG_4421_nil3lx.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400582/IMG_4422_dsihuf.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400585/IMG_4423_n3re1h.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400585/IMG_4429_gk5rc1.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400585/IMG_6756_xqny3k.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400586/IMG_6766_iffext.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400585/IMG_6770_e5218i.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400585/IMG_8477_mepaxv.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400586/IMG_8480_quztya.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400588/IMG_8484_1_krkswe.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400587/IMG_8488_hsk3oa.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400588/IMG_8490_bhl0iu.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400595/IMG_8495_ruvgi5.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400611/IMG_8500_urluvv.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400613/IMG_8759_yt1ea4.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400614/IMG_8764_mjq1gh.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400615/IMG_8791_mof67n.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400618/IMG_8796_kukyil.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400622/IMG_8803_ib3o9m.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400625/IMG_8808_uaoqps.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400627/IMG_9246_gecyg6.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400627/IMG_9251_fzrtcd.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400629/IMG_9257_kofcaa.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400630/IMG_9259_grkd5e.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400632/IMG_9339_rj67ao.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400640/IMG_9346_hj1kbn.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_0430_mhfl3g.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_0438_ymf5mm.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400666/IMG_6723_bs8wi3.jpg'
        ]
    },
    {
        title: 'Sangeet Night',
        badge: 'S',
        img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&h=500&fit=crop',
        desc: 'High-energy sangeet planning with performances, DJ, and show flow management.',
        includes: ['DJ & sound setup', 'Anchor coordination', 'Dance performance flow', 'Stage & lighting management']
    },
    {
        title: 'Engagement Ceremony',
        badge: 'E',
        img: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/engagement_p1hq4n.webp',
        desc: 'Elegant engagement décor and complete ceremony coordination.',
        includes: ['Couple entry planning', 'Stage flow management', 'Floral décor', 'Photography coordination'],
        gallery: [
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400499/IMG_0521_1_mylb1b.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400500/IMG_0524_nfk9du.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400500/IMG_0526_ufsfwp.jpg',
            'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400502/IMG_0530_xds5xw.jpg', 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400501/IMG_0532_ecmg1p.jpg'
        ]
    },
    {
        title: 'Photography & Videography',
        badge: 'P',
        img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&h=500&fit=crop',
        desc: 'Professional wedding photography and cinematic films.',
        includes: ['Candid photography', 'Traditional coverage', 'Highlight films', 'Full event documentation']
    },
    {
        title: 'DJ, Music & Entertainment',
        badge: 'M',
        img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&h=500&fit=crop',
        desc: 'Complete entertainment solutions for weddings and events.',
        includes: ['DJ setup', 'Sound systems', 'Anchor & artist coordination', 'Music flow planning']
    },
    {
        title: 'SFX – Special Effects',
        badge: 'F',
        img: 'https://res.cloudinary.com/dpvbnp8s3/image/upload/v1773400464/fire_cmv6ch.webp',
        desc: 'Luxury effects to make your event magical.',
        includes: ['Cold fireworks', 'Indoor fireworks', 'Sparkle machines', 'Special entry effects', 'Grand moment highlights']
    },
    {
        title: 'Hospitality & Guest Management',
        badge: 'G',
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&h=400&fit=crop',
        desc: 'Professional guest handling and hospitality services.',
        includes: ['Guest welcome & coordination', 'Seating management', 'Family handling', 'Smooth event flow']
    },
];

export default function Services() {
    const revealRef = useReveal();
    const [activeGallery, setActiveGallery] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);

    // Close lightbox on escape key
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
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop"
                        alt="Services Hero"
                        className="w-full h-full"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>What We Offer</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Our <span className="gold-text italic">Services</span>
                    </h1>
                </div>
            </section>

            {/* Services List */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Premium Solutions</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            Curated Event <span className="gold-text italic">Experiences</span>
                        </h2>
                        <div className="section-divider mb-5" />
                        <p className="text-charcoal-light/55 max-w-xl mx-auto text-sm leading-relaxed">
                            Each service is tailored to perfection, ensuring your celebration is as unique as your story. Click on any service to view our work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((s, i) => (
                            <div
                                key={s.title}
                                className={`reveal bg-white rounded-3xl overflow-hidden shadow-lg border border-gold/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${s.gallery ? 'cursor-pointer' : ''}`}
                                style={{ transitionDelay: `${i * 0.05}s` }}
                                onClick={() => s.gallery && openGallery(s)}
                            >
                                <div className="h-64 relative overflow-hidden group">
                                    <OptimizedImage src={s.img} alt={s.title} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                        {s.gallery && (
                                            <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                                                View Gallery
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {s.title}
                                    </h3>
                                    <p className="text-charcoal-light/60 text-sm leading-relaxed mb-6">
                                        {s.desc}
                                    </p>
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Service Includes:</p>
                                            <ul className="grid grid-cols-1 gap-2">
                                                {s.includes.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal/70">
                                                        <span className="text-gold mt-0.5">✦</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-4">
                                        {s.gallery ? (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); openGallery(s); }}
                                                className="flex-1 px-8 py-3 bg-charcoal text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-black transition-all duration-300"
                                            >
                                                View Gallery
                                            </button>
                                        ) : null}
                                        <Link
                                            to="/contact"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex-1 px-8 py-3 bg-gold text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-gold-dark transition-all duration-300 text-center"
                                        >
                                            Enquire Now
                                        </Link>
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

            {/* CTA */}
            <section className="py-28 bg-charcoal relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <div className="reveal">
                        <div className="ornament-line mb-6">
                            <span className="ornament" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            Ready to <span className="gold-text italic">Create</span> Something Special? Let's Talk
                        </h2>
                        <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
                            Every event is unique. Tell us about your vision, and we'll create a customized plan
                            that brings it to life perfectly.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase
                                rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
