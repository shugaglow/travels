import CTASection from "../components/CTASection";
import LimitedOffers from "../components/packages/LimitedOffers";
import PackageGrid from "../components/packages/PackageGrid";
// import PackagesCTA from "../components/packages/PackagesCTA";
import PackagesHero from "../components/packages/PackagesHero";
import WhyBookWithUs from "../components/packages/WhyBookWithUs";

// const packages = [
//   {
//     title: "Romantic Escape - Santorini",
//     duration: "7 Days",
//     price: "$1,999",
//     img: "https://source.unsplash.com/600x400/?santorini",
//   },
//   {
//     title: "Adventure in Kenya",
//     duration: "10 Days",
//     price: "$2,499",
//     img: "https://source.unsplash.com/600x400/?kenya",
//   },
//   {
//     title: "Tokyo Explorer",
//     duration: "6 Days",
//     price: "$1,799",
//     img: "https://source.unsplash.com/600x400/?tokyo",
//   },
// ];

const Packages = () => {
  return (
    <section className=" bg-blue-50">
      {/* <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Featured Packages</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src={pkg.img} alt={pkg.title} className="w-full h-56 object-cover rounded-t-2xl" />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{pkg.title}</h3>
                <p className="text-gray-500 mt-1">{pkg.duration}</p>
                <p className="text-blue-700 font-semibold mt-2">{pkg.price}</p>
                <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <PackagesHero/>
      <PackageGrid/>
      <WhyBookWithUs/>
      <LimitedOffers/>
      <CTASection/>
    </section>
  );
};

export default Packages;
