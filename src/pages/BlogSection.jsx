// src/components/BlogSection.jsx
import { Link } from "react-router-dom";
import beach from "../assets/beach.jpg";
import kyoto2 from "../assets/kyoto2.jpg";
import europe from "../assets/europe.jpg";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Hidden Beaches to Visit This Summer",
      image: beach,
      excerpt:
        "Discover secret tropical escapes where turquoise waves meet untouched sands. Perfect for those who crave serenity away from the crowds.",
    },
    {
      id: 2,
      title: "Exploring Kyoto’s Timeless Temples",
      image: kyoto2,
      excerpt:
        "Wander through Kyoto’s ancient streets, soak in the spiritual calm of traditional temples, and immerse yourself in Japanese heritage.",
    },
    {
      id: 3,
      title: "How to Plan a Budget-Friendly European Adventure",
      image: europe,
      excerpt:
        "Travel Europe without breaking the bank — from affordable flights to local dining tips, we’ve got you covered for an unforgettable trip.",
    },
  ];

  return (
    <section className="px-[24px] md:px-[64px] md:py-40 py-16 bg-blue-50 text-gray-800">
      <div className="mx-auto text-center">
        <h2 className="text-4xl  text-left font-bold text-blue-900 mb-6">
          Travel <span className="text-rose-500">Stories & Guides</span>
        </h2>
        <p className="text-gray-600 mb-12 text-left mx-auto">
          Get inspired with our travel insights, destination guides, and insider
          tips to make your next journey unforgettable.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6 text-left">
                <h3 className="text-[17px] font-semibold text-blue-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-[14px] mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-rose-500 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
