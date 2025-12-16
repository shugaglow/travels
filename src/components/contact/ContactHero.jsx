import { motion } from "framer-motion";
import heroImage from "../../assets/peru.jpg";

const ContactHero = () => {
  // Scroll handler
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

      {/* Floating Glass Card */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center max-w-3xl mx-6 text-white shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Let’s <span className="text-rose-400">Connect</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Have a question, partnership idea, or just want to say hello?  
          Reach out — we’d love to hear your story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Smooth scroll button */}
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-rose-500 hover:bg-rose-600 rounded-full font-semibold shadow-md cursor-pointer"
          >
            Send a Message
          </motion.button>

          <motion.a
            href="mailto:info@wandersoul.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/40 hover:bg-white/10 rounded-full font-semibold"
          >
            Email Us
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative gradient bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default ContactHero;



