
import heroImage from "../../assets/hero-image1.jpg";

const themes = [
  { title: "Beach Escapes", image: heroImage },
  { title: "Cultural Journeys", image: heroImage },
  { title: "Mountain Adventures", image: heroImage },
  { title: "City Breaks", image: heroImage },
];

const DestinationThemes = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Explore by Theme
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {themes.map((theme, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={theme.image}
                alt={theme.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">{theme.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationThemes;
