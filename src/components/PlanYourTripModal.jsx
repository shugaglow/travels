import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuccessModal from "./SuccessModal";

const PlanYourTripModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setFormData({ name: "", email: "", destination: "", date: "", message: "" });
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 p-6 bg-black/50 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✖
              </button>

              <h2 className="text-xl font-bold mb-4">Plan Your Trip</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                />
                <textarea
                  name="message"
                  placeholder="Any special request?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  rows="3"
                />

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSuccess && (
        <SuccessModal formData={formData} onClose={handleCloseSuccess} />
      )}
    </>
  );
};

export default PlanYourTripModal;





