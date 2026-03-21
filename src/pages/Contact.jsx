import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const eventTypes = ['Wedding', 'Engagement', 'Haldi & Mehndi', 'Sangeet Night', 'Photography', 'Special Effects', 'Corporate Event', 'Private Celebration', 'Other'];

export default function Contact() {
    const revealRef = useReveal();
    const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
    };

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Get In Touch</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Contact <span className="gold-text italic">Us</span>
                    </h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div className="reveal">
                            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Send an Enquiry</p>
                            <h2 className="text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                Let's Plan Your <span className="gold-text italic">Celebration</span>
                            </h2>
                            <div className="section-divider-left mb-8" />

                            {submitted && (
                                <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-xl text-gold text-sm animate-fade-in flex items-center gap-2">
                                    <span>✓</span> Thank you! We'll get back to you shortly to discuss your event.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <input
                                        type="text" name="name" value={form.name} onChange={handleChange} required
                                        placeholder="Your Name"
                                        className="form-input"
                                    />
                                    <input
                                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                                        placeholder="Phone Number"
                                        className="form-input"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <input
                                        type="email" name="email" value={form.email} onChange={handleChange} required
                                        placeholder="Email Address"
                                        className="form-input"
                                    />
                                    <select
                                        name="eventType" value={form.eventType} onChange={handleChange} required
                                        className="form-input appearance-none"
                                    >
                                        <option value="">Select Event Type</option>
                                        {eventTypes.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 gap-5">
                                    <input
                                        type="text" name="eventDate" value={form.eventDate} onChange={handleChange}
                                        placeholder="Event Date (e.g., 25th Dec 2025)"
                                        className="form-input"
                                    />
                                </div>
                                <textarea
                                    name="message" value={form.message} onChange={handleChange} required rows="5"
                                    placeholder="Tell us about your dream event..."
                                    className="form-input resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-10 py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase
                                        rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                                >
                                    Send Enquiry
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="reveal-right space-y-8">
                            <div className="p-8 bg-white rounded-2xl shadow-md gold-border card-3d">
                                <h3 className="text-xl font-bold text-charcoal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contact Information</h3>
                                <div className="space-y-6 text-sm text-charcoal-light/65">
                                    <div className="flex items-start gap-4">
                                        <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm flex-shrink-0 mt-0.5">📍</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-0.5 text-base uppercase tracking-wider">Location</p>
                                            <p className="text-lg">Faridabad, Haryana<br /><span className="text-gold font-semibold">(Serving Pan India)</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm flex-shrink-0">📞</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-0.5 text-base uppercase tracking-wider">Call Now</p>
                                            <p className="text-2xl font-bold text-gold tracking-tighter cursor-pointer hover:text-gold-dark transition-colors">
                                                <a href="tel:8826805646">8826805646</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm flex-shrink-0">✉️</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-0.5 text-base uppercase tracking-wider">Email Us</p>
                                            <p className="text-lg">info@shimmerplano.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="p-8 bg-charcoal rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="gradient-orb gradient-orb-gold w-32 h-32 -top-10 -right-10 opacity-30" />
                                <h4 className="text-white text-lg font-bold mb-6 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>Follow Our Journey</h4>
                                <div className="flex gap-4 relative z-10">
                                    <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal hover:border-transparent transition-all duration-300" aria-label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal hover:border-transparent transition-all duration-300" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal hover:border-transparent transition-all duration-300" aria-label="YouTube">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>
                                    </a>
                                </div>
                                <p className="text-white/40 text-xs mt-8">Stay updated with our latest events and behind-the-scenes magic.</p>
                            </div>

                            {/* Quick CTA */}
                            <a href="https://wa.me/918826805646" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-2xl text-lg font-bold
                                    hover:bg-[#1fb855] transition-all duration-300 shadow-xl shadow-[#25D366]/20"
                            >
                                <span>Chat on WhatsApp</span>
                                <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
