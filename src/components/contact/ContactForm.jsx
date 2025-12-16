import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Send Us a Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
