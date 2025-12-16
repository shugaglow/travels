import { useState } from "react";
import PackageModal from "./PackageModal";


import santoriniGetaway from "../../assets/santorini-g.jpg";
import baliP from "../../assets/bali-p.jpg";
import swissAlp from "../../assets/swiss-alp.jpg";
import baliBeach from "../../assets/bali-beach.jpg";
import safariKenya from "../../assets/safari-kenya.jpg";
import tokyoLight from "../../assets/tokyo-city-light.jpg";
import PlanYourTripModal from "../PlanYourTripModal";

const packages = [
  {
    id: 1,
    title: "Santorini Getaway",
    location: "Greece",
    img: santoriniGetaway,
    description:
      "Enjoy a 5-day escape in the blue and white paradise of Santorini with guided tours, wine tasting, and breathtaking sunsets.",
    price: 980,
    itinerary: [
      "Day 1: Arrival",
      "Day 2: Volcano Tour",
      "Day 3: Beach Day",
      "Day 4: Wine Tasting",
      "Day 5: Departure",
    ],
  },
  {
    id: 2,
    title: "Bali Paradise",
    location: "Indonesia",
    img: baliP,
    description:
      "A 7-day luxury experience in Bali — explore temples, rice terraces, beaches, and vibrant culture.",
    price: 1250,
    itinerary: [
      "Day 1: Ubud Tour",
      "Day 2: Waterfall Hike",
      "Day 3: Beach Club",
      "Day 4: Island Tour",
      "Day 5: Spa & Relaxation",
    ],
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    img: swissAlp,
    description:
      "Conquer the Alps with hiking trails, scenic trains, and cozy cabin stays in the heart of Switzerland.",
    price: 1550,
    itinerary: [
      "Day 1: Arrival in Zurich",
      "Day 2: Glacier Express",
      "Day 3: Jungfrau Tour",
      "Day 4: Lake Lucerne",
      "Day 5: Departure",
    ],
  },
  {
    id: 4,
    title: "Bali Beach Escape",
    location: "Indonesia",
    img: baliBeach,
    description:
      "Unwind on Bali’s serene beaches, explore vibrant temples, and experience the island’s rich culture and tropical charm.",
    price: 1350,
    itinerary: [
      "Day 1: Arrival in Denpasar & Beach Welcome Dinner",
      "Day 2: Ubud Rice Terrace Tour & Monkey Forest",
      "Day 3: Nusa Penida Island Excursion",
      "Day 4: Balinese Spa & Traditional Dance Show",
      "Day 5: Departure",
    ],
  },
  {
    id: 5,
    title: "Safari Expedition",
    location: "Kenya",
    img: safariKenya,
    description:
      "Experience the wild heart of Africa — from the vast savannahs of Maasai Mara to unforgettable wildlife encounters.",
    price: 1850,
    itinerary: [
      "Day 1: Arrival in Nairobi & City Tour",
      "Day 2: Drive to Maasai Mara Reserve",
      "Day 3: Full-Day Safari Game Drive",
      "Day 4: Visit Local Maasai Village",
      "Day 5: Departure",
    ],
  },
  {
    id: 6,
    title: "Tokyo City Lights",
    location: "Japan",
    img: tokyoLight,
    description:
      "Dive into Tokyo’s vibrant blend of tradition and technology — from neon streets to serene temples and sushi delights.",
    price: 2100,
    itinerary: [
      "Day 1: Arrival in Tokyo & Shinjuku Night Tour",
      "Day 2: Asakusa & Senso-ji Temple Visit",
      "Day 3: Mount Fuji Day Trip",
      "Day 4: Akihabara & Shopping Districts",
      "Day 5: Departure",
    ],
  },
];

const PackageGrid = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsPlanModalOpen(true);
  };

  return (
    <section id="packagesgrid" className="px-[24px] md:px-[64px] md:py-40 py-16 bg-gray-50">
      <h2 className="text-left text-3xl font-bold mb-10 text-gray-800">
        Explore Our Packages
      </h2>

      <div className="grid md:grid-cols-3 bg-white rounded-md p-8 gap-8 px-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 z-10 text-white">
              <h3 className="text-2xl font-semibold">{pkg.title}</h3>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
              <p className="text-sm mb-2">{pkg.location}</p>
              <p className="text-sm mb-4 max-w-xs text-gray-200 line-clamp-2">
                {pkg.description}
              </p>
              <button
                onClick={() => setSelectedPackage(pkg)}
                className="bg-rose-600 hover:bg-rose-700 transition-colors px-6 py-2 rounded-xl font-medium"
              >
                Click to View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Package Info Modal */}
      <PackageModal
        selectedPackage={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookNow={handleBookNow} // <-- send the book now action
      />

      {/* Plan Your Trip Modal */}
      <PlanYourTripModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </section>
  );
};

export default PackageGrid;
