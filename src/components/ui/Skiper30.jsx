import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const Skiper30 = ({ images = [] }) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.0]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Split images into 4 columns
  const columns = [
    images.slice(0, 3),
    images.slice(3, 6),
    images.slice(6, 9),
    images.slice(9, 12),
  ];

  return (
    <div className="w-full bg-white relative">
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white"
      >
        <Column images={columns[0]} y={y} topClass="-top-[30%]" />
        <Column images={columns[1]} y={y2} topClass="-top-[80%]" />
        <Column images={columns[2]} y={y3} topClass="-top-[30%]" />
        <Column images={columns[3]} y={y4} topClass="-top-[60%]" />
      </div>
    </div>
  );
};

const Column = ({ images = [], y, topClass }) => {
  return (
    <motion.div
      className={`relative flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] ${topClass} will-change-transform`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-[45vh] w-full overflow-hidden shadow-2xl">
          <OptimizedImage
            src={src}
            alt="gallery"
            className="pointer-events-none object-cover w-full h-full"
            containerClassName="h-full"
            width={600}
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };
