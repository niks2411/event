import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const packages = [
    {
        name: 'Silver',
        price: '₹2,50,000',
        desc: 'Perfect for intimate celebrations',
        popular: false,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        features: ['Up to 100 guests', 'Basic décor setup', 'Event coordination', 'Photography (4 hours)', 'Venue assistance', 'Standard lighting'],
        missing: ['Premium décor', 'Videography', 'Fireworks', 'Live entertainment', 'Full-day coordinator'],
    },
    {
        name: 'Gold',
        price: '₹5,00,000',
        desc: 'Most popular choice for weddings',
        popular: true,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 18c-4.418 0-8-1.79-8-4s3.582-4 8-4m0 8c4.418 0 8-1.79 8-4s-3.582-4-8-4M12 13c-2.485 0-4.5-1.79-4.5-4s2.015-4 4.5-4 4.5 1.79 4.5 4-2.015 4-4.5 4z" />
            </svg>
        ),
        features: ['Up to 300 guests', 'Premium floral décor', 'Full-day coordinator', 'Photography + Videography', 'Live entertainment', 'Custom lighting design', 'Venue booking support', 'Guest management'],
        missing: ['Fireworks display', 'Drone photography', 'After-party setup'],
    },
    {
        name: 'Platinum',
        price: '₹10,00,000',
        desc: 'The ultimate luxury experience',
        popular: false,
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        features: ['Unlimited guests', 'Luxury bespoke décor', 'Dedicated event team', 'Cinematic film + photos', 'Live band + DJ', 'Fireworks & pyrotechnics', 'Drone coverage', 'After-party planning', 'Honeymoon travel assist', 'Premium catering consultation'],
        missing: [],
    },
];

export default function Pricing() {
    const revealRef = useReveal();

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&h=800&fit=crop')`,
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
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Investment</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Pricing <span className="gold-text italic">Packages</span>
                    </h1>
                </div>
            </section>

            {/* Packages */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 -top-20 right-0 animate-orb-float" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 bottom-0 left-0 animate-orb-float" style={{ animationDelay: '3s' }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 reveal">
                        <p className="text-charcoal-light/55 max-w-2xl mx-auto text-sm leading-relaxed">
                            Every celebration is unique. Our packages serve as starting points — we customize every detail to match your vision and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {packages.map((pkg, i) => (
                            <div
                                key={pkg.name}
                                className={`reveal rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3
                                    ${pkg.popular
                                        ? 'bg-charcoal text-white shadow-2xl md:scale-105 relative z-10'
                                        : 'bg-white text-charcoal shadow-xl gold-border card-3d'
                                    }`}
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                {pkg.popular && (
                                    <div className="bg-gold text-white text-center py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                                        Most Popular
                                    </div>
                                )}
                                <div className="p-8 md:p-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`icon-badge w-10 h-10 text-xs ${pkg.popular ? 'border-gold/30' : ''}`}>{pkg.icon}</div>
                                        <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.name}</h3>
                                    </div>
                                    <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/50' : 'text-charcoal-light/55'}`}>{pkg.desc}</p>
                                    <div className="mb-8">
                                        <span className="text-4xl font-bold gold-text" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.price}</span>
                                        <span className={`text-xs ml-1 ${pkg.popular ? 'text-white/30' : 'text-charcoal-light/35'}`}>/ event</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((f) => (
                                            <li key={f} className={`flex items-center gap-3 text-[13px] ${pkg.popular ? 'text-white/75' : 'text-charcoal-light/60'}`}>
                                                <span className="text-gold text-sm font-bold">✓</span> {f}
                                            </li>
                                        ))}
                                        {pkg.missing.map((f) => (
                                            <li key={f} className={`flex items-center gap-3 text-[13px] line-through ${pkg.popular ? 'text-white/25' : 'text-charcoal-light/25'}`}>
                                                <span className="text-gray-400 text-sm">✕</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/book"
                                        className={`block text-center py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300
                                            ${pkg.popular
                                                ? 'bg-gold text-white hover:bg-gold-dark btn-glow'
                                                : 'border-2 border-gold text-gold hover:bg-gold hover:text-white'
                                            }`}
                                    >
                                        Choose {pkg.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-14 reveal">
                        <p className="text-charcoal-light/45 text-sm">
                            Need a custom package? <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">Contact us</Link> for a personalized quote.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
