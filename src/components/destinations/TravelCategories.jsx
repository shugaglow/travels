import beach from "../../assets/beach.jpg";
import mountain from "../../assets/mountain.jpg";
import city from "../../assets/city.jpg";
import romantic from "../../assets/romantic.jpg";
import luxury from "../../assets/luxury.jpg";
import adventure from "../../assets/adventure.jpg";

const categories = [
  {
    title: "Beach Escapes",
    description:
      "Soak up the sun, feel the sand, and unwind by crystal-clear shores.",
    img: beach,
  },
  {
    title: "Mountain Adventures",
    description:
      "Embrace the wild — from scenic hikes to peaceful mountain retreats.",
    img: mountain,
  },
  {
    title: "City Breaks",
    description:
      "Dive into culture, nightlife, and iconic landmarks in bustling cities.",
    img: city,
  },
  {
    title: "Romantic Getaways",
    description:
      "Candlelight dinners, sunset views, and destinations made for two.",
    img: romantic,
  },
  {
    title: "Luxury Retreats",
    description:
      "Indulge in world-class resorts, fine dining, and exclusive experiences.",
    img: luxury,
  },
  {
    title: "Adventure Trips",
    description:
      "For the thrill-seekers — from jungle safaris to diving deep into the sea.",
    img: adventure,
  },
];

const TravelCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Travel Categories
        </h2>
        <p className="text-gray-600 mx-auto mb-12">
          Whether you crave adventure, luxury, or romance — find the perfect
          travel style that fits your wanderlust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer h-72"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center transition-all duration-500">
                {/* Title (visible by default) */}
                <h3 className="text-2xl font-semibold tracking-wide mb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  {cat.title}
                </h3>

                {/* Hover content */}
                <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-200 max-w-xs">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
