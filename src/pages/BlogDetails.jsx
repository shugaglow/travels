// src/pages/BlogDetails.jsx
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Top 5 Hidden Beaches to Visit This Summer",
      image: "https://source.unsplash.com/1200x600/?beach,paradise",
      content: `
        Escape to some of the world’s most beautiful hidden beaches — from Bali’s secret coves to the white sands of the Maldives.
        These serene destinations offer privacy, beauty, and tranquility for travelers seeking the perfect seaside getaway.
        Pack your sunscreen and let’s dive into five underrated coastal gems worth exploring this summer!
      `,
    },
    {
      id: 2,
      title: "Exploring Kyoto’s Timeless Temples",
      image: "https://source.unsplash.com/1200x600/?kyoto,temple",
      content: `
        Kyoto is a treasure trove of history and tradition. Home to more than 1,600 temples, the city captures Japan’s spiritual soul.
        Whether you’re meditating at Kiyomizu-dera or strolling through the bamboo groves of Arashiyama, every corner whispers stories of the past.
        It’s the perfect destination for travelers who seek peace and cultural depth.
      `,
    },
    {
      id: 3,
      title: "How to Plan a Budget-Friendly European Adventure",
      image: "https://source.unsplash.com/1200x600/?europe,city",
      content: `
        Traveling through Europe doesn’t have to be expensive. With a few smart choices — like booking night trains, staying in hostels,
        and eating local — you can see iconic landmarks without draining your wallet.
        From Paris to Prague, here’s how to explore Europe affordably and meaningfully.
      `,
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-700">Blog not found</h2>
        <Link to="/blog" className="text-rose-500 mt-4 inline-block">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-4xl font-bold text-blue-900 mb-6">{blog.title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
        <Link
          to="/"
          className="inline-block mt-10 bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all duration-500"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogDetails;