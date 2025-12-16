import { FaUmbrellaBeach, FaMountain, FaCity } from "react-icons/fa";
import bali from "../assets/bali.jpg";
import swissAlps from "../assets/swiss-alp.jpg";
import paris from "../assets/paris.jpg";
import { motion } from "framer-motion"


import { Link } from "react-router-dom";

const FeaturedPackages = () => {
  const packages = [
    {
      icon: <FaUmbrellaBeach className="text-rose-500 text-2xl mb-4" />,
      title: "7 Days in Bali",
      price: "$899",
      duration: "7 Days / 6 Nights",
      description:
        "Unwind on Bali’s serene beaches, explore lush temples, and enjoy sunset dinners by the ocean.",
      image:
        bali,
    },
    {
      icon: <FaMountain className="text-rose-500 text-2xl mb-4" />,
      title: "Swiss Alps Escape, Switzerland",
      price: "$1,450",
      duration: "5 Days / 4 Nights",
      description:
        "Breathe in the crisp mountain air and experience scenic train rides through Switzerland’s most iconic peaks.",
      image:
        swissAlps,
    },
    {
      icon: <FaCity className="text-rose-500 text-2xl mb-4" />,
      title: "Paris Romance, France",
      price: "$1,100",
      duration: "6 Days / 5 Nights",
      description:
        "Fall in love with Paris — from iconic landmarks and art-filled museums to cozy cafés and the Eiffel Tower at night.",
      image:
        paris,
    },

  ];

  return (
    <section className="px-[24px] md:px-[64px] md:py-40 py-16 flex flex-col items-center bg-blue-100 text-center" id="packages">
      <div className="container text-left px-6">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Featured <span className="text-rose-500">Packages</span>
        </h2>
        <p className="text-gray-600 mb-12 mx-auto">
          Handpicked travel experiences tailored to fit your dream vacation —
          whether it’s beaches, mountains, or city lights.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
  {packages.map((pkg, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md overflow-hidden transform cursor-default"
    >
      <motion.img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-60 object-cover"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="p-6 text-left">
        <div className="flex gap-2">
          <div className="flex items-center text-gray-500 text-sm">
            {pkg.icon}
          </div>
          <h3 className="text-l font-semibold text-gray-800 mb-2">
            {pkg.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-800 font-bold">{pkg.price}</span>
          <span className="text-blue-500 text-sm">{pkg.duration}</span>
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#be123c",
            color: "#fff",
            boxShadow: "0px 8px 15px rgba(190,18,60,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-5 cursor-pointer w-full bg-white text-rose-700 border border-rose-200 px-5 py-2 rounded-full font-medium transition-all duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>
      </div>

      <div className='lg:w-[20%]'>
           <Link
                to="/packages"
                className="bg-rose-700  text-white mt-16 flex justify-center px-8 py-2 rounded-full text-center font-semibold cursor-pointer hover:bg-white hover:text-rose-700 hover:border-rose-700  hover:border transition duration-300"
                >
                    View All Packages
             </Link>
        </div>
    </section>
  );
};

export default FeaturedPackages;
