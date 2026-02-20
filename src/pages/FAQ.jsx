import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const faqData = [
    {
        category: 'General',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
        ),
        questions: [
            { q: 'How far in advance should I book your services?', a: 'We recommend booking at least 3-6 months in advance for weddings and large events. For smaller celebrations, 1-2 months is usually sufficient. However, we always suggest reaching out as early as possible to secure your preferred date.' },
            { q: 'Do you handle destination events?', a: 'Absolutely! We have organized destination weddings and events across India and internationally. Our team handles all logistics including venue scouting, vendor coordination, travel arrangements, and on-ground management.' },
            { q: 'What is your cancellation and refund policy?', a: 'Our cancellation policy varies based on the package and timeline. Generally, cancellations made 60+ days before the event receive a partial refund. We recommend reviewing the specific terms in your contract for details.' },
        ],
    },
    {
        category: 'Weddings',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        questions: [
            { q: 'Can you plan multi-day wedding celebrations?', a: 'Yes! We specialize in multi-day Indian weddings including all ceremonies — Mehndi, Haldi, Sangeet, Wedding, and Reception. We create a cohesive theme and timeline across all events.' },
            { q: 'Do you provide décor for both indoor and outdoor venues?', a: 'Yes, we design and execute décor for all venue types. Our team is experienced with palaces, farmhouses, banquet halls, beach locations, and more. We adapt our designs to complement the natural beauty of any setting.' },
        ],
    },
    {
        category: 'Fireworks & Effects',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        questions: [
            { q: 'Are your fireworks displays safe?', a: 'Safety is our top priority. All our pyrotechnic displays are managed by licensed professionals, and we comply with all local safety regulations. We carry comprehensive insurance and conduct thorough safety assessments before every show.' },
            { q: 'Can you do indoor pyrotechnics?', a: 'Yes! We offer indoor-safe cold sparklers, confetti cannons, CO2 jets, and low-smoke effects that are specifically designed for indoor venues. These create stunning visual effects without fire risk.' },
        ],
    },
    {
        category: 'Pricing & Payments',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
        ),
        questions: [
            { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, credit/debit cards, and cash. For large events, we offer a structured payment plan with an initial booking deposit followed by milestone payments.' },
            { q: 'Do the package prices include catering?', a: 'Our base packages focus on event planning, décor, and coordination. Catering is arranged separately through our network of premium catering partners, allowing you to customize your menu and budget independently.' },
        ],
    },
];

export default function FAQ() {
    const revealRef = useReveal();
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    let globalIndex = 0;

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
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Questions?</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Frequently Asked <span className="gold-text italic">Questions</span>
                    </h1>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 bottom-0 right-0 animate-orb-float" />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {faqData.map((section) => (
                        <div key={section.category} className="mb-14 reveal">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="icon-badge w-8 h-8 text-[10px]">{section.icon}</div>
                                <h3 className="text-2xl font-bold text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {section.category}
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {section.questions.map((item) => {
                                    const idx = globalIndex++;
                                    return (
                                        <div
                                            key={idx}
                                            className={`bg-white rounded-xl shadow-sm gold-border overflow-hidden transition-all duration-300
                                                ${openIndex === idx ? 'shadow-md' : ''}`}
                                        >
                                            <button
                                                onClick={() => toggle(idx)}
                                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gold/5 transition-colors"
                                            >
                                                <span className="font-semibold text-charcoal text-[13px] pr-4 leading-relaxed">{item.q}</span>
                                                <span className={`text-gold text-lg shrink-0 transition-transform duration-300 font-light ${openIndex === idx ? 'rotate-45' : ''}`}>
                                                    +
                                                </span>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-400 ${openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="px-5 pb-5 text-charcoal-light/55 text-sm leading-relaxed">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* CTA */}
                    <div className="reveal text-center mt-8 p-10 bg-white rounded-2xl gold-border shadow-sm">
                        <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                            Still have questions?
                        </h3>
                        <p className="text-charcoal-light/50 text-sm mb-6">
                            We're here to help. Reach out to us and we'll get back to you promptly.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-3.5 bg-gold text-white text-sm font-semibold tracking-widest uppercase
                                rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
