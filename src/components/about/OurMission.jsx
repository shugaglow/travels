const OurMission = () => {
  const goals = [
    { title: "Our Mission", text: "To redefine travel by blending adventure, culture, and comfort into every journey." },
    { title: "Our Vision", text: "To be the world’s most trusted travel partner for unforgettable experiences." },
    { title: "Our Values", text: "Authenticity, sustainability, and passion for exploration." },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Purpose</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-rose-500 mb-3">{goal.title}</h3>
              <p className="text-gray-600">{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
