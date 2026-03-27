import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isHome = location.pathname === '/';
    const isDark = !scrolled && isHome;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isDark
                ? 'bg-transparent'
                : 'bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src={isDark ? '/logo-white.png' : '/logo-black.png'}
                            alt="Shimmer Plano Events"
                            className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 rounded-lg
                                    ${location.pathname === link.path
                                        ? 'text-gold'
                                        : isDark
                                            ? 'text-white/80 hover:text-white'
                                            : 'text-charcoal-light hover:text-gold'
                                    }`}
                            >
                                {link.label}
                                {/* Active indicator */}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-5' : 'w-0'
                                    }`} />
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            className="ml-4 px-7 py-2.5 bg-gold text-white text-[13px] font-semibold tracking-wider uppercase rounded-full hover:bg-gold-dark transition-all duration-300 btn-glow"
                        >
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col gap-[5px] p-2.5 relative z-[110]"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-[2px] rounded-full transition-all duration-400 ${mobileOpen
                                ? 'rotate-45 translate-y-[7px] bg-charcoal'
                                : isDark ? 'bg-white' : 'bg-charcoal'
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] rounded-full transition-all duration-400 ${mobileOpen ? 'opacity-0 scale-x-0' : isDark ? 'bg-white' : 'bg-charcoal'
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] rounded-full transition-all duration-400 ${mobileOpen
                                ? '-rotate-45 -translate-y-[7px] bg-charcoal'
                                : isDark ? 'bg-white' : 'bg-charcoal'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 top-0 lg:hidden overflow-hidden transition-all duration-500 z-[105] ${mobileOpen ? 'visible' : 'invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-charcoal/60 backdrop-blur-md transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setMobileOpen(false)}
                />
                {/* Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[0.22,1,0.36,1] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="absolute inset-0 bg-cream/30 pointer-events-none" />
                    <nav className="relative flex flex-col pt-32 px-8 space-y-2">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`py-4 px-6 text-[15px] font-bold tracking-[0.15em] uppercase rounded-2xl transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-gold bg-gold/10 scale-[1.02]'
                                    : 'text-charcoal-light hover:text-gold hover:bg-gold/5'
                                    }`}
                                style={{ 
                                    transitionDelay: `${i * 0.05}s`,
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-8 px-2">
                            <Link
                                to="/book"
                                className="block py-4 px-8 bg-gold text-center text-white text-[13px] font-bold tracking-widest uppercase rounded-full hover:bg-gold-dark transition-all duration-300 shadow-xl shadow-gold/20"
                            >
                                Book Now
                            </Link>
                        </div>

                        <div className="pt-12 px-6 border-t border-gold/10 mt-12">
                            <p className="text-[10px] text-gold font-bold tracking-[0.3em] uppercase mb-4">Contact Us</p>
                            <a href="tel:8826805646" className="text-charcoal text-sm font-bold block mb-2">8826805646</a>
                            <p className="text-charcoal-light/60 text-xs">Faridabad, Haryana</p>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
