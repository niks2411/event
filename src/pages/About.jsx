import useReveal from '../hooks/useReveal';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';

import { Timeline } from '../components/ui/Timeline';

const timelineData = [
    {
        title: '2020',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>The Beginning</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed">
                    Shimmer Plano Events was founded with a clear vision: to redefine luxury event planning in Faridabad.
                    Aakash Narwat started the journey with a passion for excellence and a commitment to perfection.
                </p>
            </div>
        ),
    },
    {
        title: '2021',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>Rapid Growth</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed mb-4">
                    Successfully planned and executed our first 20+ events, ranging from intimate home ceremonies to grand outdoor celebrations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gold/5 rounded-2xl border border-gold/10">
                        <p className="text-2xl font-bold text-gold">20+</p>
                        <p className="text-[10px] uppercase tracking-wider text-charcoal/40">Events Managed</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2022',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d text-left">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>Delhi-NCR Expansion</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed">
                    We expanded our operations to cover the entire Delhi-NCR region, establishing a strong footprint in Gurgaon and Delhi's premium wedding market.
                </p>
            </div>
        ),
    },
    {
        title: '2023',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>The 50+ Milestone</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed mb-4">
                    Reaching our 50th event was a proud moment. We became known for our attention to detail and flawless execution.
                </p>
                <div className="rounded-2xl overflow-hidden h-48">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
                        alt="Event Setup"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        ),
    },
    {
        title: '2024',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>Premium Identity</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed">
                    Recognized as a trusted premium brand. We leveled up our design capabilities and introduced specialized effects and luxury hospitality services.
                </p>
            </div>
        ),
    },
    {
        title: '2025',
        content: (
            <div className="bg-white p-6 md:p-10 rounded-3xl gold-border shadow-xl card-3d">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>100+ Experiences</h4>
                <p className="text-charcoal-light/65 text-sm md:text-base leading-relaxed mb-4">
                    Proudly delivered over 100+ unforgettable experiences. Our journey continues with a commitment to making every celebration legendary.
                </p>
                <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-charcoal text-white rounded-2xl">
                        <p className="text-2xl font-bold gold-text">100+</p>
                        <p className="text-[10px] uppercase tracking-wider opacity-40">Grand Celebrations</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function About() {
    const revealRef = useReveal();
    const [ref1, count1] = useCounter(100);
    const [ref2, count2] = useCounter(5);
    const [ref3, count3] = useCounter(150);
    const [ref4, count4] = useCounter(100);

    return (
        <div ref={revealRef}>
            {/* Hero Banner */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Our Story</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        About <span className="gold-text italic">Shimmer Plano Events</span>
                    </h1>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="reveal-left">
                            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Who We Are</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Creating <span className="gold-text italic">Unforgettable</span> Celebrations Since 2020
                            </h2>
                            <div className="section-divider-left mb-8" />
                            <p className="text-charcoal-light/65 leading-relaxed mb-4 text-[15px]">
                                Shimmer Plano Events was founded in 2020 with one simple vision — to create unforgettable celebrations through creativity, discipline, and perfect planning.
                            </p>
                            <p className="text-charcoal-light/65 leading-relaxed mb-8 text-[15px]">
                                In a short span of time, we have successfully planned and executed 100+ events, including weddings, pre-wedding functions, corporate events, and private celebrations across Faridabad and Delhi-NCR.
                                We believe every event is unique, and our team works closely with clients to understand their vision and transform it into reality — beautifully and professionally.
                            </p>
                            <Link to="/services" className="inline-block px-8 py-3.5 bg-gold text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow">
                                Our Services
                            </Link>
                        </div>
                        <div className="reveal-right">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=700&fit=crop"
                                    alt="Shimmer Plano Events"
                                    className="rounded-2xl shadow-2xl w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-2xl shadow-xl animate-gentle-pulse">
                                    <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>100+</p>
                                    <p className="text-sm tracking-wider uppercase">Successful Events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal-left order-2 lg:order-1">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                                    alt="Aakash Narwat"
                                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
                                />
                                <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-tr-2xl" />
                            </div>
                        </div>
                        <div className="reveal-right order-1 lg:order-2">
                            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>The Visionary</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                Aakash <span className="gold-text italic">Narwat</span>
                            </h2>
                            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-6">Founder – Shimmer Plano Events</p>
                            <div className="section-divider-left mb-8" />
                            <p className="text-charcoal-light/65 leading-relaxed text-[15px]">
                                Under the leadership of Aakash Narwat, Shimmer Plano Events has grown into a trusted event planning brand known for quality, commitment, and flawless execution.
                                His dedication to creating stress-free, beautifully managed events has helped Shimmer Plano Events become a trusted name in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="reveal p-10 bg-white rounded-2xl gold-border card-3d hover:-translate-y-2 transition-all duration-500">
                            <div className="icon-badge icon-badge-lg mb-5">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
                            <p className="text-charcoal-light/65 leading-relaxed text-[15px]">
                                To deliver stress-free, beautifully managed events that create lifelong memories through creativity and precision.
                            </p>
                        </div>
                        <div className="reveal p-10 bg-white rounded-2xl gold-border card-3d hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '0.15s' }}>
                            <div className="icon-badge icon-badge-lg mb-5">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
                            <p className="text-charcoal-light/65 leading-relaxed text-[15px]">
                                To become one of India's most trusted and iconic luxury event planning brands, setting new standards for celebration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <Timeline data={timelineData} />

            {/* Statistics */}
            <section className="py-28 bg-charcoal relative overflow-hidden">
                <div className="gradient-orb gradient-orb-gold w-96 h-96 top-0 left-0 animate-orb-float" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div ref={ref1} className="reveal p-8">
                            <p className="text-5xl font-bold gold-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{count1}+</p>
                            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Events Delivered</p>
                        </div>
                        <div ref={ref2} className="reveal p-8">
                            <p className="text-5xl font-bold gold-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{count2}+</p>
                            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Years of Journey</p>
                        </div>
                        <div ref={ref3} className="reveal p-8">
                            <p className="text-5xl font-bold gold-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{count3}+</p>
                            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Happy Families</p>
                        </div>
                        <div ref={ref4} className="reveal p-8">
                            <p className="text-5xl font-bold gold-text mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{count4}%</p>
                            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Commitment</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
