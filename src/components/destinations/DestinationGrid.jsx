
import santorini from "../../assets/santorini.jpg";
import kyoto from "../../assets/kyoto.jpg";
import bali from "../../assets/bali.jpg";
import cappadocia from "../../assets/cappadocia.jpg";
import peru from "../../assets/peru.jpg";
import iceland from "../../assets/iceland.jpg";
import marrakech from "../../assets/marrakech.jpg";
import amalfi from "../../assets/amalfi.jpg";
import { Link } from "react-router-dom";


// const destinations = [
//   {
//     name: "Bali, Indonesia",
//     image: heroImage,
//     description: "A tropical paradise of beaches, temples, and vibrant culture.",
//   },
//   {
//     name: "Paris, France",
//     image: heroImage,
//     description: "The city of lights and love — where romance meets art.",
//   },
//   {
//     name: "Kyoto, Japan",
//     image: heroImage,
//     description: "A serene blend of tradition, cherry blossoms, and temples.",
//   },
//   {
//     name: "Cape Town, South Africa",
//     image: heroImage,
//     description: "Where ocean meets mountain — and culture meets adventure.",
//   },
// ];

const DestinationGrid = () => {
  return (
    <section id="destinations" className=" bg-white">

      <div className="relative px-[24px] md:px-[64px] md:py-40 py-16 flex flex-col items-center bg-gradient-to-b h-full from-white to-blue-50 z-10 text-gray-800">
      <div className='text-left w-full'>
        <h2 className="text-4xl text-left font-bold text-blue-800 mb-6">
        Popular Destinations
      </h2>
      <p className="text-left mb-16 w-[80%] text-gray-600 leading-relaxed">
        Every destination tells a story — of colors, cultures, and unforgettable moments. <br />
        At <span className="font-semibold text-rose-500">WanderSoul</span>, we take you beyond the map, 
        helping you discover hidden gems, iconic landmarks, and experiences that speak to your soul.
      </p>
      </div>
    
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            name: "Santorini, Greece",
            img: santorini,
            description:
              "Santorini offers breathtaking sea views, romantic sunsets, and timeless Mediterranean charm — a dreamer’s paradise.",
          },
          {
            name: "Kyoto, Japan",
            img: kyoto,
            description:
              "Kyoto reflects Japan’s timeless charm, where temples, cherry blossoms, and tea houses unite culture and art beautifully.",
          },
          {
            name: "Bali, Indonesia",
            img: bali,
            description:
              "Bali is a tropical haven where beaches, temples, and lush scenery blend relaxation, adventure, and vibrant culture.",
          },
    
              {
            name: "Cappadocia, Turkey",
            img: cappadocia,
            description:
              "Cappadocia, Turkey — a magical land of cave homes, hot air balloons, and stunning sunrise views."
          },

          {
              name: "Marrakech, Morocco",
              img: marrakech,
              description:
                "Marrakech, Morocco — a vibrant city filled with spice markets, ornate palaces, and the enchanting sounds of ancient streets."
            },

          {
            name: "Amalfi Coast, Italy",
            img: amalfi,
            description:
              "Amalfi Coast, Italy — a stunning coastline of colorful cliffside villages, Mediterranean flavors, and breathtaking sea views."
          },
          {
            name: "Reykjavik, Iceland",
            img: iceland,
            description:
              "Reykjavik, Iceland — a gateway to glaciers, northern lights, and natural hot springs that redefine adventure and tranquility."
          },
          {
            name: "Machu Picchu, Peru",
            img: peru,
            description:
              "Machu Picchu, Peru — an ancient Incan citadel perched high in the Andes, offering a breathtaking mix of mystery and wonder."
          }

          
        ].map((dest, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${dest.img})`,
              }}
            ></div>
    
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
    
            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-100 text-white transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-400 transition-colors duration-300">
                {dest.name}
              </h3>
              <p className="text-sm text-gray-300 mb-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                {dest.description}
              </p>
             <Link
      to="/packages"
      className="bg-white px-8 py-2 rounded-full text-center font-semibold text-rose-700 cursor-pointer hover:bg-rose-600 hover:text-white transition duration-300"
    >
      View Packages
    </Link>
    
            </div>

          </div>
        ))}
      </div>

        <div className='w-[20%]'>
           {/* <Link
                to="/packages"
                className="bg-rose-700  text-white mt-16 flex justify-center px-8 py-2 rounded-full text-center font-semibold cursor-pointer hover:bg-white hover:text-rose-700 hover:border-rose-700  hover:border transition duration-300"
                >
                    View All Destinations
             </Link> */}
        </div>
    </div>
    </section>
  );
};

export default DestinationGrid;
