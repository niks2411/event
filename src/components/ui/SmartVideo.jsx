import React, { useRef, useEffect, useState } from 'react';

export default function SmartVideo({ src, id, poster, className, label }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // YouTube Embed URL Builder
    const getYouTubeUrl = (videoId) => {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`;
    };

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden bg-charcoal/20 ${className}`}>
            {/* Poster appears while loading or before intersection */}
            {(!isLoaded || !isVisible) && poster && (
                <img
                    src={poster}
                    alt={label}
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700"
                    loading="lazy"
                />
            )}

            {isVisible ? (
                id ? (
                    // YouTube Mode
                    <iframe
                        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        src={getYouTubeUrl(id)}
                        title={label}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        onLoad={() => setIsLoaded(true)}
                        style={{ width: '100%', height: '115%', marginTop: '-7.5%' }} // Zoom to hide controls
                    />
                ) : (
                    // Local MP4 Mode
                    <video
                        src={src}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={() => setIsLoaded(true)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                    />
                )
            ) : null}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-20 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-none text-left">
                <p className="text-white font-bold text-lg leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{label}</p>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">YouTube Reel</span>
                </div>
            </div>
        </div>
    );
}
