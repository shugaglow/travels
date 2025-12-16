const features = [
  { title: "Expert Guides", desc: "Our local experts make every trip immersive and stress-free." },
  { title: "Flexible Plans", desc: "Easily customize itineraries that fit your schedule and budget." },
  { title: "24/7 Support", desc: "Round-the-clock assistance from our travel professionals." },
];

const WhyBookWithUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Book With WanderSoul</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <h3 className="text-xl font-semibold text-rose-500 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
