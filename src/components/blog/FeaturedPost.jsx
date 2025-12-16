import { motion } from "framer-motion";
import heroImage from "../../assets/bali.jpg";

const FeaturedPost = () => {
  const post = {
    title: "Exploring the Hidden Gems of Bali",
    description:
      "From secluded beaches to vibrant temples, Bali is a destination full of surprises. Here’s your insider’s guide to making the most of it.",
    image: heroImage,
    author: "Sarah Kim",
    date: "October 3, 2025",
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[70vh] object-cover brightness-[0.85]"
          />

          {/* Text Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              absolute bottom-8 left-1/2 transform -translate-x-1/2 
              md:left-10 md:translate-x-0
              bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 
              w-[90%] md:max-w-lg shadow-lg text-center md:text-left
            "
          >
            <p className="uppercase text-sm tracking-widest text-rose-500 mb-2">
              Featured Story
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-6">{post.description}</p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm mb-6">
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full shadow-md transition-all"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;


