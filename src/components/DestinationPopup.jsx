import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DestinationPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-6 right-6 z-[999] max-w-[340px] w-full mx-4 sm:mx-0 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-gold/30 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors p-1"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className="flex gap-4">
                    <div className="shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center overflow-hidden">
                            <img src="/logo-white.png" alt="Shimmer Plano Events" className="w-8 h-8 object-contain" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                            Destination Wedding?
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-4">
                            Looking to tie the knot in a dream location? Let's plan your perfect getaway celebration.
                        </p>
                        <Link
                            to="/contact"
                            className="block w-full py-3 bg-gold text-white text-center text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow shadow-lg shadow-gold/20"
                            onClick={() => setIsVisible(false)}
                        >
                            Get Free Consultation
                        </Link>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="block w-full text-center mt-3 text-[10px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider"
                        >
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
