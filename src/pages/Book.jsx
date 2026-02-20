import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const eventTypes = ['Wedding', 'Engagement', 'Haldi & Mehndi', 'Sangeet Night', 'Photography', 'Special Effects', 'Corporate Event', 'Private Celebration', 'Other'];
const budgetRanges = ['Under ₹1,00,000', '₹1,00,000 – ₹3,00,000', '₹3,00,000 – ₹5,00,000', '₹5,00,000 – ₹10,00,000', 'Above ₹10,00,000', 'Not sure yet'];

export default function Book() {
    const revealRef = useReveal();
    const [form, setForm] = useState({
        name: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', venue: '', budget: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div ref={revealRef}>
            {/* Hero */}
            <section className="hero-page relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
                <div className="gradient-orb gradient-orb-gold w-80 h-80 bottom-10 left-10 animate-orb-float" />
                <div className="relative z-10 text-center px-4">
                    <div className="ornament-line mb-4 animate-fade-in">
                        <span className="ornament" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 animate-fade-in" style={{ fontFamily: 'var(--font-accent)' }}>Get Started</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ fontFamily: 'var(--font-heading)' }}>
                        Book a <span className="gold-text italic">Consultation</span>
                    </h1>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-28 bg-cream relative overflow-hidden">
                <div className="gradient-orb gradient-orb-blush w-96 h-96 top-0 right-0 animate-orb-float" />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {submitted ? (
                        <div className="reveal text-center py-20">
                            <div className="icon-badge icon-badge-lg icon-badge-circle mx-auto mb-6 text-2xl animate-gentle-pulse">✓</div>
                            <h2 className="text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                Thank You!
                            </h2>
                            <p className="text-charcoal-light/55 mb-8 text-sm leading-relaxed max-w-md mx-auto">
                                We've received your booking request. Our team will reach out within 24 hours to schedule
                                your free consultation. Get ready to start planning your dream event!
                            </p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', venue: '', budget: '', message: '' }); }}
                                className="px-8 py-3.5 bg-gold text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                            >
                                Book Another Event
                            </button>
                        </div>
                    ) : (
                        <div className="reveal">
                            <div className="text-center mb-14">
                                <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Your Vision</p>
                                <h2 className="text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Tell Us About Your <span className="gold-text italic">Dream Event</span>
                                </h2>
                                <div className="section-divider mb-5" />
                                <p className="text-charcoal-light/55 max-w-xl mx-auto text-sm leading-relaxed">
                                    Fill out the form below and our event specialists will create a customized proposal just for you.
                                    Free consultation included!
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl gold-border space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Full Name *</label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} required
                                            className="form-input" placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Email *</label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} required
                                            className="form-input" placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Phone *</label>
                                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                                            className="form-input" placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Event Type *</label>
                                        <select name="eventType" value={form.eventType} onChange={handleChange} required
                                            className="form-input appearance-none"
                                        >
                                            <option value="">Select event type</option>
                                            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Preferred Date</label>
                                        <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Estimated Guests</label>
                                        <input type="number" name="guestCount" value={form.guestCount} onChange={handleChange}
                                            className="form-input" placeholder="e.g. 200"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Venue Preference</label>
                                        <input type="text" name="venue" value={form.venue} onChange={handleChange}
                                            className="form-input" placeholder="Venue name or city"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Budget Range</label>
                                        <select name="budget" value={form.budget} onChange={handleChange}
                                            className="form-input appearance-none"
                                        >
                                            <option value="">Select budget</option>
                                            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-charcoal uppercase tracking-[0.15em] mb-2">Tell Us More</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows="4"
                                        className="form-input resize-none"
                                        placeholder="Share your vision, theme ideas, special requirements..."
                                    />
                                </div>
                                <button type="submit"
                                    className="w-full py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase
                                        rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                                >
                                    Submit Booking Request
                                </button>
                                <p className="text-center text-charcoal-light/35 text-xs">
                                    Your information is secure and will only be used to contact you about your event.
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
