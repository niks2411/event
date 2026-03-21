import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const testimonials = [
    { name: 'Amod & Ritika', role: 'Wedding', text: 'We had an amazing experience with Shimmer Plano Events for our wedding. Everything from décor to hospitality was perfectly managed. The team handled everything smoothly and made our big day truly special and stress-free. Highly recommended!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'Khushboo & Om', role: 'Wedding', text: 'Shimmer Plano Events did a fantastic job in planning and managing our wedding. The décor was beautiful, and the entire event was well organized. Their team is very professional and supportive. Thank you for making our wedding memorable!', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { name: 'Vaibhav', role: 'Haldi & Mehndi', text: 'We booked Shimmer Plano Events for Haldi and Mehndi, and the experience was wonderful. The décor, coordination, and overall setup were perfect. Everything was handled on time, and the team was very cooperative.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Yogyata', role: 'Haldi & Mehndi', text: 'Our Haldi and Mehndi functions were beautifully managed by Shimmer Plano Events. The décor looked amazing, and the team ensured everything went smoothly. Truly a great experience!', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
    { name: 'Jyoti & Pramik', role: 'Engagement', text: 'Shimmer Plano Events did a great job for our engagement ceremony. The setup, décor, and overall management were excellent. Everything was well planned and executed perfectly. Thank you for making our special day memorable!', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
    { name: 'Sonakshi', role: 'Haldi Ceremony', text: 'We got our Haldi ceremony done by Shimmer Plano Events, and it was beautifully managed. The décor was vibrant and perfect for the occasion. The team was professional and handled everything smoothly. Highly satisfied', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' }
];

export default function Testimonials() {
    const revealRef = useReveal();
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 top-10 left-10 animate-orb-float" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Client Love</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="gold-text italic">Testimonials</span>
                    </h1>
                </div>
            </section>

            {/* Featured Slider */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 -top-20 right-0 animate-orb-float" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Happy Clients</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            What Our Clients <span className="gold-text italic">Say</span>
                        </h2>
                        <div className="section-divider" />
                    </div>

                    {/* Slider */}
                    <div className="reveal relative bg-white rounded-3xl shadow-xl overflow-hidden gold-border animate-border-glow">
                        <div className="p-10 md:p-14 text-center relative">
                            <span className="quote-mark text-6xl">‟</span>
                            <div className="relative z-10">
                                <div className="mt-8"></div>
                                <p className="text-charcoal-light/65 text-lg md:text-xl leading-relaxed mb-8 italic" style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem' }}>
                                    "{testimonials[activeSlide].text}"
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={testimonials[activeSlide].img}
                                        alt={testimonials[activeSlide].name}
                                        className="w-14 h-14 rounded-full object-cover ring-3 ring-gold/20"
                                    />
                                    <div className="text-left">
                                        <p className="font-bold text-charcoal">{testimonials[activeSlide].name}</p>
                                        <p className="text-gold text-xs tracking-wider uppercase">{testimonials[activeSlide].role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider dots */}
                        <div className="flex justify-center gap-2 pb-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSlide(i)}
                                    className={`h-2 rounded-full transition-all duration-400 ${i === activeSlide ? 'bg-gold w-8' : 'bg-gold/20 w-2 hover:bg-gold/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Reviews Grid */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="gradient-orb gradient-orb-gold w-80 h-80 bottom-0 left-0 animate-orb-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 reveal">
                        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>All Feedback</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                            All <span className="gold-text italic">Reviews</span>
                        </h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.name}
                                className="reveal relative p-8 bg-cream rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500
                                    hover:-translate-y-3 gold-border group card-3d"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="quote-mark text-5xl">‟</span>
                                {t.hasVideo && (
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/10 border border-gold/20
                                        flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                                        <span className="text-gold text-xs">▶</span>
                                    </div>
                                )}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/15" loading="lazy" />
                                        <div>
                                            <p className="font-bold text-charcoal text-sm">{t.name}</p>
                                            <p className="text-gold text-xs tracking-wider uppercase">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-3"></div>
                                    <p className="text-charcoal-light/55 text-sm leading-relaxed italic">"{t.text}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
