const NewsletterCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-300">
          Get the latest travel tips, destination guides, and exclusive offers straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-500 rounded-full w-full text-gray-100 focus:outline-none"
          />
          <button className="bg-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
