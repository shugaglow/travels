import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanYourTripModal from "./PlanYourTripModal";
import ctaimage from "../assets/ctaimage2.jpg";

const CTASection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleViewPackages = () => {
    navigate("/packages");
  };

  const handleStartJourney = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="relative py-40 bg-gradient-to-r from-blue-900 via-blue-800 to-rose-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${ctaimage})`,
          }}
        ></div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

        {/* CTA Content */}
        <div className="relative container mx-auto px-6 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to <span className="text-rose-300">Explore the World</span>?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-10 text-lg">
            Your next adventure is just one click away. Discover breathtaking
            destinations, exclusive travel packages, and experiences that
            transform your journey into a story worth telling.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Start Journey Button */}
            <button
              onClick={handleStartJourney}
              className="bg-rose-700 cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-500 hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </button>

            {/* View Packages Button */}
            <button
              onClick={handleViewPackages}
              className="bg-white cursor-pointer hover:shadow-2xl transform hover:-translate-y-1 text-rose-700 px-8 py-3 rounded-full font-semibold hover:bg-rose-200 hover:text-rose-700 transition-all duration-500 shadow-md"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Plan Your Trip Modal (Rendered outside the section) */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <PlanYourTripModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}
    </>
  );
};

export default CTASection;

