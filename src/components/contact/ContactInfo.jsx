import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const info = [
    {
      icon: <Phone className="w-6 h-6 text-rose-500" />,
      title: "Phone",
      details: "+234 801 234 5678",
    },
    {
      icon: <Mail className="w-6 h-6 text-rose-500" />,
      title: "Email",
      details: "hello@wandersoul.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      title: "Office",
      details: "12 Wuse 2, buja, Nigeria",
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "Working Hours",
      details: "Mon - Fri, 9am - 6pm",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Contact Details
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {info.map((item, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
