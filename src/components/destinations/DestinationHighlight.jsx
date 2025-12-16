import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import santorini1 from "../../assets/santorini1.jpg";
import santorini2 from "../../assets/santorini2.jpg";
import santorini3 from "../../assets/santorini3.jpg";
import santorini4 from "../../assets/santorini4.jpg";
import santorini5 from "../../assets/santorini5.jpg";

const images = [santorini1, santorini2, santorini3, santorini4, santorini5];

const DestinationHighlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    travelers: "",
    date: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setNextIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("🎉 Your trip request has been received! We’ll contact you soon.");
    setFormData({ fullName: "", email: "", travelers: "", date: "" });

    setTimeout(() => {
      setSuccessMessage("");
      setIsBookingOpen(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            key={currentIndex}
            className="flex absolute w-[200%] h-full"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={images[currentIndex]}
              alt="Current destination"
              className="w-1/2 h-full object-cover"
            />
            <img
              src={images[nextIndex]}
              alt="Next destination"
              className="w-1/2 h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Foreground Text */}
        <div className="relative z-10 container mx-auto px-[24px] md:px-[64px] md:py-40 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Spotlight: <span className="text-rose-400">Santorini, Greece</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 max-w-lg">
              Experience the beauty of whitewashed buildings, breathtaking sunsets, and turquoise waters.
              Santorini offers a mix of romance, history, and luxury — perfect for couples and explorers alike.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      {isModalOpen && !isBookingOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-8 rounded-2xl max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-rose-600 transition text-2xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={santorini1}
              alt="Santorini, Greece"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            {/* Content */}
            <h3 className="text-3xl font-bold text-rose-600 mb-4">
              Santorini, Greece
            </h3>
            <p className="text-gray-700 mb-6">
              Santorini is a stunning island paradise with iconic blue-domed churches, cliffside views,
              and romantic sunsets. Perfect for relaxation or adventure.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Top Highlights:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
              <li>🏖 Relax on the Red Beach</li>
              <li>🌅 Watch the sunset in Oia</li>
              <li>⛵ Explore volcanic hot springs</li>
              <li>🍷 Enjoy fine Greek wine</li>
            </ul>

            {/* CTA */}
            <div className="flex justify-between items-center mt-8">
              <p className="text-gray-700">
                Ready to experience paradise? Let’s plan your trip.
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-all"
              >
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg relative shadow-2xl">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-rose-600 text-2xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-rose-600 mb-4">
              Book Your Trip to Santorini
            </h3>

            {successMessage ? (
              <div className="text-green-600 text-center py-8 font-semibold text-lg">
                {successMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Number of Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Preferred Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationHighlight;


