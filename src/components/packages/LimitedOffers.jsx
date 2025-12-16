import { useEffect, useState } from "react";
import heroImage1 from "../../assets/santorini.jpg";
import heroImage2 from "../../assets/iceland.jpg";
import heroImage3 from "../../assets/kyoto.jpg";
import heroImage4 from "../../assets/peru.jpg";
import heroImage5 from "../../assets/romantic.jpg";
import heroImage6 from "../../assets/mountain.jpg";
import PlanYourTripModal from "../PlanYourTripModal";

const LimitedOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 3);

  const images = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
  ];

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = offerEndDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Background Carousel
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, [images.length]);

  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-[24px] md:px-[64px] md:py-40 py-16 gap-10 relative z-10">
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Limited Time Offer!
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Experience the magic of{" "}
              <span className="font-semibold text-rose-400">
                Santorini, Greece
              </span>{" "}
              — now at{" "}
              <span className="font-semibold text-rose-400">30% OFF</span>! Book
              within the next few days to claim this exclusive deal and make
              your dream vacation a reality.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center md:justify-start gap-4 md:gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl min-w-[70px]"
                >
                  <span className="text-2xl font-bold">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase text-gray-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-rose-500 px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all mt-6 cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-lg min-h-[300px] md:h-96 z-0">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`offer-${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[9999]">
          <PlanYourTripModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            defaultLocation="Santorini, Greece — 30% OFF"
          />
        </div>
      )}
    </>
  );
};

export default LimitedOffers;

