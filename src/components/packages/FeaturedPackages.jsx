import baliImg from "../../assets/bali.jpg";
import parisImg from "../../assets/paris.jpg";
import kenyaImg from "../../assets/kenya.jpg";

const featured = [
  {
    img: baliImg,
    title: "Bali Bliss Retreat",
    description: "7-day tropical escape with yoga, beaches, and island adventures.",
    price: "$1,499",
  },
  {
    img: parisImg,
    title: "Romance in Paris",
    description: "5-night stay in the heart of Paris — Eiffel views and fine dining.",
    price: "$2,099",
  },
  {
    img: kenyaImg,
    title: "Safari Dreams",
    description: "6 days exploring wildlife and luxury lodges across Kenya.",
    price: "$1,899",
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-[24px] md:px-[64px] md:py-40 py-16 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Packages</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Handpicked experiences for travelers who want something extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((pkg, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md group relative h-[420px]"
            >
              <img
                src={pkg.img}
                alt={pkg.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all"></div>

              <div className="absolute bottom-0 p-6 text-white text-left">
                <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm mb-3">{pkg.description}</p>
                <span className="block text-lg font-bold">{pkg.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
