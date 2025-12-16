import { Link } from "react-router-dom";

const DestinationCTA = () => {
  return (
    <section className="py-20 text-center bg-blue-950 text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to start your next adventure?</h2>
      <p className="text-gray-300 mb-8">
        Find exclusive packages and hidden gems curated just for you.
      </p>
      <Link
        to="/packages"
        className="bg-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-500 transition-all"
      >
        View Packages
      </Link>
    </section>
  );
};

export default DestinationCTA;
