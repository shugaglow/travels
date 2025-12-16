import heroImage from "../../assets/bali.jpg";

const OurStory = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center rounded-md bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for readability */}
      <div className="rounded-md absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Text Block */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-rose-400">Story</span>
          </h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            WanderLuxe began with a simple idea — to make travel seamless, soulful, and inspiring.
            From a small team of passionate travelers, we’ve grown into a global travel brand
            helping people explore destinations with comfort, care, and a touch of magic.
          </p>
          <p className="text-gray-200 leading-relaxed">
            Every trip we curate is built on experiences that connect people to the heart of a place —
            its culture, food, landscapes, and stories.
          </p>
        </div>

        {/* Optional Decorative Panel */}
        <div className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hidden md:block">
          <h3 className="text-2xl font-semibold mb-3 text-rose-300">Our Promise</h3>
          <p className="text-gray-100 leading-relaxed">
            We don’t just plan trips — we craft experiences that stay with you forever.
            Every journey with WanderLuxe is designed to inspire, connect, and rejuvenate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

