import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-rose-50 mb-4">WanderSoul</h2>
          <p className="text-sm mb-6">
            Discover the world’s most breathtaking destinations. 
            Your adventure starts with us.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-white transition-colors">Packages</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Booking Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get travel deals and updates directly to your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} VacaSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
