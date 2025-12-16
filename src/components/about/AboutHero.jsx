import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import adventure from "../../assets/adventure.jpg";
import amalfi from "../../assets/amalfi.jpg";
import bali from "../../assets/bali.jpg";
import cappadocia from "../../assets/cappadocia.jpg";
import paris from "../../assets/paris.jpg";

const images = [adventure, amalfi, bali, cappadocia, paris];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  // Cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col py-2 md:py-16 md:flex-row items-stretch h-auto md:h-[80vh] overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-[24px] md:px-[64px] md:py-40 py-8 bg-white z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl text-left font-extrabold text-gray-900 mb-4 leading-tight">
          About <span className="text-rose-500">WanderSoul</span> Travels
        </h1>
        <p className="text-gray-600 text-left text-lg mb-6">
          At WanderSoul, we believe travel should do more than take you places — 
          it should transform the way you see the world.  
          Our curated adventures connect you with people, culture, and nature in unforgettable ways.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-fit px-16 md:py-4 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full shadow-md transition-all"
        >
          Learn Our Story
        </motion.button>
      </motion.div>

      {/* Animated Image Section */}
      <div className="relative w-full md:w-1/2 min-h-[300px] rounded-md md:min-h-0 md:h-full overflow-hidden md:rounded-xl">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  );
};

export default AboutHero;




