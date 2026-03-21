import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ gallery, index, onClose, onNext, onPrev, onIndexChange }) {
    // Optimized Preloading Logic
    useEffect(() => {
        if (!gallery || gallery.length === 0) return;

        // Preload immediate neighbors for instant switching
        const neighbors = [
            gallery[(index + 1) % gallery.length],
            gallery[(index - 1 + gallery.length) % gallery.length]
        ];

        neighbors.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Background preload remainder of gallery
        const timer = setTimeout(() => {
            gallery.forEach((src, i) => {
                if (i !== index && !neighbors.includes(src)) {
                    const img = new Image();
                    img.src = src;
                }
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [gallery, index]);

    if (!gallery || gallery.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={onClose}
        >
            {/* Header info */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
                <div className="text-white">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase font-bold">
                        Photo {index + 1} of {gallery.length}
                    </p>
                </div>
                <button
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold transition-all duration-300"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>

            {/* Navigation Buttons */}
            {gallery.length > 1 && (
                <>
                    <button
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-gold transition-all duration-300 z-30"
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    >
                        ←
                    </button>
                    <button
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-gold transition-all duration-300 z-30"
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                    >
                        →
                    </button>
                </>
            )}

            {/* Main Image Container */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-12 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 1.02 }}
                        transition={{ 
                            duration: 0.4, 
                            ease: [0.22, 1, 0.36, 1],
                            opacity: { duration: 0.3 }
                        }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            src={gallery[index]}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-white/5"
                            loading="eager"
                            alt="Gallery view"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnail Stream */}
            {gallery.length > 1 && (
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 px-6 overflow-x-auto py-4 z-20 no-scrollbar" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-2">
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => onIndexChange(idx)}
                                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${index === idx ? 'border-gold scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
