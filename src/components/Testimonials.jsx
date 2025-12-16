import { FaQuoteLeft, FaStar } from "react-icons/fa";
import heroImage from "../assets/hero-image1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Miller",
      location: "New York, USA",
      message:
        "WanderSoul made my Bali trip unforgettable! From the smooth booking to the perfect itinerary — everything felt effortless and personalized.",
      rating: 5,
      image:
        heroImage,
    },
    {
      name: "David Chen",
      location: "Toronto, Canada",
      message:
        "It was my first time using WanderSoul and honestly, I’m impressed. The Switzerland package was worth every penny!",
      rating: 4,
      image: heroImage,
    },
    {
      name: "Amara Johnson",
      location: "Lagos, Nigeria",
      message:
        "Paris has always been my dream and WanderSoul made it come true. Great communication, lovely team, and amazing experience!",
      rating: 5,
      image: heroImage,
    },
  ];

  return (
    <section className="px-[24px] md:px-[64px] md:py-40 py-16 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">
          What Our <span className="text-rose-500">Travelers</span> Say
        </h2>
        <p className="text-gray-600 text-left  mb-12 mx-auto">
          Real experiences from real explorers who trusted WanderSoul to take
          them on their dream adventures.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-blue-950 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out p-8 text-left relative cursor-pointer hover:bg-blue-900/95"
            >
              <FaQuoteLeft className="text-rose-500 text-xl absolute top-6 right-6 transition-all duration-500 group-hover:text-rose-400 " />
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-rose-500"
                />
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-50">
                    {item.name}
                  </h3>
                  <p className="text-[12px] text-gray-300">{item.location}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic mb-4">“{item.message}”</p>
              <div className="flex">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
