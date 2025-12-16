import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage1 from "../../assets/iceland.jpg";
import heroImage2 from "../../assets/paris.jpg";
import heroImage3 from "../../assets/bali.jpg";
import heroImage4 from "../../assets/beach.jpg";
import heroImage5 from "../../assets/peru.jpg";
import heroImage6 from "../../assets/luxury.jpg";

const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6];

const DestinationHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden text-white bg-black">
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Destination background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div> */}
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-8 md:px-20 py-40 md:w-1/2 text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover Your <span className="text-rose-500">Next Journey</span>
        </h1>
        <p className="text-gray-200 text-lg mb-10 max-w-md">
          Explore awe-inspiring destinations, curated experiences, and adventures that redefine the art of travel.
        </p>

        <div className="flex flex-row gap-4">
          <motion.button
            onClick={() => {
              const section = document.getElementById("destinations");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-rose-700 text-white px-4 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-700 hover:border-rose-700 border transition duration-500 shadow-md"
          >
            Explore Now
          </motion.button>

          <Link
            to="/packages"
            className="bg-white text-rose-700 px-4 py-3 rounded-full font-semibold hover:bg-rose-700 hover:text-white hover:border-rose-700 border transition duration-500 shadow-md"
          >
            View Packages
          </Link>
        </div>
      </motion.div>

      {/* Optional Floating Image Preview */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden md:block md:w-1/2 pr-10"
      >
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next destination"
            className="w-full h-[500px] object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DestinationHero;
