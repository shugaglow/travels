import { motion } from "framer-motion";
import travelhero from "../../assets/travelhero.png";

const PackagesHero = () => {
  const handleScroll = () => {
    const section = document.getElementById("packagesgrid");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50 py-16 px-6 md:px-20">
      {/* Background Accent Glow */}
      <div className="absolute -top-32 -left-20 w-[400px] h-[500px] bg-rose-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-gray-800 md:w-1/2 mb-12 md:mb-0"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Explore Our{" "}
          <span className="text-rose-600 drop-shadow-sm">Travel</span>{" "}
          Packages
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md"
        >
          Discover tailored journeys designed for dreamers and doers alike — from sun-soaked beaches to snow-capped adventures.
        </motion.p>

        <motion.button
          onClick={handleScroll}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#be123c",
            boxShadow: "0px 10px 30px rgba(190,18,60,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-rose-500 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Start Exploring
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative md:w-1/2 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        >
          <img
            src={travelhero}
            alt="Travel destinations collage"
            className="w-[600px] h-[300px] md:h-[550px] md:w-[800px] object-cover"
          />
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-6 right-6 bg-white text-gray-800 px-5 py-3 rounded-full shadow-md font-semibold text-sm md:text-base"
        >
          ✈️ 50+ Destinations Waiting
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PackagesHero;
