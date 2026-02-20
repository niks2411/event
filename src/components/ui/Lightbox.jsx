import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ gallery, index, onClose, onNext, onPrev, onIndexChange }) {
    // Preload all images in the background when the lightbox opens
    useEffect(() => {
        if (gallery && gallery.length > 0) {
            gallery.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        }
    }, [gallery]);

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
            <div className="w-full h-full flex items-center justify-center p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={gallery[index]}
                        src={gallery[index]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-charcoal/20"
                        loading="eager"
                    />
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
