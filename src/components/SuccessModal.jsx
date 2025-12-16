// src/components/SuccessModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessModal = ({ formData, onClose }) => {
  if (!formData) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-2xl max-w-md w-full text-center shadow-xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-green-600">
            Form Submitted Successfully 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for planning your trip with us. We’ve received your details and will get back to you soon.
          </p>

          <motion.div
            className="bg-gray-50 rounded-lg p-4 text-left mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Destination:</strong> {formData.destination}</p>
            <p><strong>Travel Date:</strong> {formData.date}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </motion.div>

          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
          >
            Close
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SuccessModal;

