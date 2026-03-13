import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OptimizedImage({
    src,
    alt,
    className = "",
    containerClassName = "",
    priority = false,
    aspectRatio = "aspect-auto",
    objectFit = "object-cover"
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}>
            {/* Low-quality placeholder/shimmer */}
            <AnimatePresence>
                {!isLoaded && !error && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-charcoal/5 animate-pulse flex items-center justify-center"
                    >
                        <div className="w-8 h-8 border-2 border-gold/10 border-t-gold/40 rounded-full animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            {error ? (
                <div className="absolute inset-0 bg-charcoal/10 flex items-center justify-center text-charcoal/30 text-xs text-center p-4">
                    Image failed to load
                </div>
            ) : (
                <motion.img
                    src={src}
                    alt={alt}
                    loading={priority ? "eager" : "lazy"}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                        opacity: isLoaded ? 1 : 0,
                        scale: isLoaded ? 1 : 1.05
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`${className} ${objectFit} w-full h-full`}
                />
            )}
        </div>
    );
}
