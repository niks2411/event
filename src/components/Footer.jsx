import { Link } from 'react-router-dom';
import { useState } from 'react';

const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/videos', label: 'Videos' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
];

const services = [
    'Wedding Planning & Decor',
    'Haldi & Mehndi Events',
    'Sangeet Night',
    'Engagement Ceremony',
    'Photography & Videography',
    'DJ, Music & Entertainment',
    'SFX – Special Effects',
    'Hospitality & Guest Management',
];

const socialLinks = [
    {
        label: 'Facebook',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        )
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        label: 'Twitter',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        label: 'YouTube',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
            </svg>
        )
    },
    {
        label: 'Pinterest',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
        )
    },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-charcoal text-white/80 relative overflow-hidden">
            {/* Top gradient divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Decorative orbs */}
            <div className="gradient-orb gradient-orb-gold w-80 h-80 -top-20 -right-20 animate-orb-float" />
            <div className="gradient-orb gradient-orb-gold w-64 h-64 bottom-10 -left-16 animate-orb-float" style={{ animationDelay: '4s' }} />

            {/* Main Footer */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-5 group">
                            <img src="/logo-white.png" alt="Shimmer Plano Events" className="h-20 w-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105" />
                            <p className="text-gold text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Shimmer Plano Events</p>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/40 mb-3 italic">
                            Wedding & Event Planning Experts
                        </p>
                        <p className="text-sm leading-relaxed text-white/40 mb-6">
                            Founded 2020 | 100+ Events Delivered. We don't just plan events — we create experiences.
                        </p>
                        <div className="flex gap-2.5">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center
                                        text-white/40 hover:text-white hover:border-gold hover:bg-gold/20
                                        transition-all duration-300 shadow-sm"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-transparent" />
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-white/40 hover:text-gold hover:pl-2 transition-all duration-300 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-transparent" />
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-sm text-white/40 hover:text-gold hover:pl-2 transition-all duration-300 inline-block"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 relative inline-block">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-transparent" />
                        </h4>
                        <div className="space-y-4 text-sm text-white/40 mb-8">
                            <div className="flex items-start gap-4">
                                <span className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <div className="leading-relaxed">
                                    Faridabad, Haryana<br />
                                    <span className="text-[10px] text-gold/60 uppercase tracking-widest">(Serving Delhi-NCR)</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 shadow-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.155-.441.011-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                <a href="tel:8826805646" className="hover:text-gold transition-colors">+91 88268 05646</a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <h5 className="text-white text-xs tracking-wider uppercase mb-3 font-semibold">Newsletter</h5>
                        <form onSubmit={handleSubscribe} className="flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="flex-1 px-3 py-2.5 bg-white/5 border border-white/10 rounded-l-xl text-sm text-white
                                    placeholder-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/8 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-gold text-white text-xs font-semibold uppercase tracking-wider
                                    rounded-r-xl hover:bg-gold-dark transition-all duration-300"
                            >
                                {subscribed ? '✓' : '→'}
                            </button>
                        </form>
                        {subscribed && (
                            <p className="text-gold text-xs mt-2 animate-fade-in">Thank you for subscribing!</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/25">
                        © 2026 Shimmer Plano Events. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/25">
                        <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-gold transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
