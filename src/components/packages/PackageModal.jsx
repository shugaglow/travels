import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PackageModal = ({ selectedPackage, onClose, onBookNow }) => {
  if (!selectedPackage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 bg-gray-200">
            <img
              src={selectedPackage.img}
              alt={selectedPackage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h2 className="text-2xl font-bold">{selectedPackage.title}</h2>
              <p className="text-sm opacity-90">{selectedPackage.location}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 p-2 rounded-full transition-all backdrop-blur-sm z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-6 space-y-5">
            <p className="text-gray-700 leading-relaxed">
              {selectedPackage.description}
            </p>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Itinerary Highlights:
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {selectedPackage.itinerary.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <p className="font-semibold text-lg text-rose-600">
                ${selectedPackage.price} / person
              </p>
              <button
                onClick={() => {
                  onBookNow(selectedPackage);
                  onClose();
                }}
                className="bg-rose-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-rose-700 transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PackageModal;
