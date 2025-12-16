import heroImage from "../../assets/hero-image1.jpg";

const team = [
  { name: "Sophia Moore", role: "Founder & CEO", img: heroImage,},
  { name: "James Carter", role: "Head of Operations", img: heroImage ,},
  { name: "Lila Torres", role: "Experience Curator", img: heroImage, },
];

const TeamShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-2xl w-full h-80 object-cover shadow-lg group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
