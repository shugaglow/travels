import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import romantic from "../../assets/romantic.jpg";
import kyoto from "../../assets/kyoto.jpg";
import beach from "../../assets/beach.jpg";
import marrakech from "../../assets/marrakech.jpg";
import mountain from "../../assets/mountain.jpg";
import swissAlp from "../../assets/swiss-alp.jpg";

const images = [romantic, kyoto, beach, marrakech, mountain, swissAlp];

const BlogHero = () => {
  const [current, setCurrent] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
      {/* Animated Backgrounds */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-white text-left px-6 md:px-20 max-w-5xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-widest text-left text-sm text-rose-400 mb-3">
          WanderSoul Journal
        </p>
        <h1 className="text-4xl text-left md:text-6xl font-extrabold leading-tight mb-6">
          Travel Stories & <span className="text-rose-400">Insights</span>
        </h1>
        <p className="text-lg text-left text-gray-200 mb-8">
          Dive into the journeys that inspire — from Kyoto’s quiet temples to the peaks of the Swiss Alps.
          Discover tips, tales, and travel wisdom from explorers around the globe.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-24 py-3 bg-rose-500 hover:bg-rose-600 rounded-full font-semibold shadow-lg"
        >
          Read Our Blog
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BlogHero;



