import { motion } from "framer-motion";
import { FaGlobeAmericas, FaStar, FaPlaneDeparture, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaGlobeAmericas className="text-rose-500 text-3xl mb-4" />,
      title: "Curated Global Destinations",
      description:
        "We handpick breathtaking destinations across the world — from hidden gems to iconic getaways tailored for every traveler’s dream.",
    },
    {
      icon: <FaPlaneDeparture className="text-rose-500 text-3xl mb-4" />,
      title: "Seamless Travel Planning",
      description:
        "Enjoy hassle-free booking and itinerary planning. We handle the details so you can focus on making memories.",
    },
    {
      icon: <FaStar className="text-rose-500 text-3xl mb-4" />,
      title: "Top-Rated Experiences",
      description:
        "Partnering with trusted local guides and 5-star accommodations ensures unforgettable, high-quality adventures.",
    },
    {
      icon: <FaHeadset className="text-rose-500 text-3xl mb-4" />,
      title: "24/7 Customer Support",
      description:
        "Travel with confidence knowing our support team is always ready to assist — anytime, anywhere.",
    },
  ];

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      rotate: -1.5,
      boxShadow: "0px 10px 30px rgba(255, 64, 129, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-6 md:px-16 py-20 overflow-hidden">
      <div className="container mx-auto">
        {/* Header Animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4 text-left">
            Why Choose <span className="text-rose-500">WanderSoul</span>?
          </h2>
          <p className="text-gray-600 text-left max-w-2xl">
            From planning to exploring, we make every step of your journey simple, seamless, and extraordinary.
          </p>
        </motion.div>

        {/* Cards Container (staggered) */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-left border border-transparent hover:border-rose-100 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

