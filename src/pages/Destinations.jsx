import CTASection from "../components/CTASection";
// import DestinationCTA from "../components/destinations/DestinationCTA";
// import DestinationFilter from "../components/destinations/DestinationFilter";
import DestinationGrid from "../components/destinations/DestinationGrid";
import DestinationHero from "../components/destinations/DestinationHero";
import DestinationHighlight from "../components/destinations/DestinationHighlight";
import TravelCategories from "../components/destinations/TravelCategories";
// import DestinationThemes from "../components/destinations/DestinationThemes";

const destinations = [
  { name: "Paris, France", desc: "The city of lights and love.", img: "https://source.unsplash.com/600x400/?paris" },
  { name: "Bali, Indonesia", desc: "Tropical paradise with rich culture.", img: "https://source.unsplash.com/600x400/?bali" },
  { name: "Cappadocia, Turkey", desc: "Magical hot air balloon rides and caves.", img: "https://source.unsplash.com/600x400/?cappadocia" },
  { name: "Maldives", desc: "Turquoise waters and white sands await.", img: "https://source.unsplash.com/600x400/?maldives" },
];

const Destinations = () => {
  return (
    <section className=" bg-white">
      {/* <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Explore Our Destinations</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={dest.img} alt={dest.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                <p className="text-gray-600 mt-2">{dest.desc}</p>
                <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition">
                  View Packages
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <DestinationHero/>
      {/* <DestinationFilter/> */}
      <DestinationGrid/>
      {/* <DestinationThemes/> */}
      <DestinationHighlight/>
      <TravelCategories/>
      <CTASection/>
    </section>
  );
};

export default Destinations;

