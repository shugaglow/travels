import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; // 👈 use NavLink instead of <a>
import PlanYourTripModal from "./PlanYourTripModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-blue-800 transition ${
      isActive ? "text-blue-800 font-semibold border-b-2 border-rose-500 pb-1" : "text-gray-700"
    }`;

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-800 tracking-wide">
            Wander<span className="text-rose-500">Soul</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/destinations" className={linkClasses}>Destinations</NavLink></li>
            <li><NavLink to="/packages" className={linkClasses}>Packages</NavLink></li>
            <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
            <li><NavLink to="/blog" className={linkClasses}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => setIsTripModalOpen(true)}
            className="hidden md:inline-block bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition"
          >
            Plan Your Trip
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
              <li><NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/destinations" className={linkClasses} onClick={() => setIsOpen(false)}>Destinations</NavLink></li>
              <li><NavLink to="/packages" className={linkClasses} onClick={() => setIsOpen(false)}>Packages</NavLink></li>
              <li><NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About</NavLink></li>
              <li><NavLink to="/blog" className={linkClasses} onClick={() => setIsOpen(false)}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            </ul>

            <button
              onClick={() => {
                setIsTripModalOpen(true);
                setIsOpen(false);
              }}
              className="bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition mx-auto block mb-4"
            >
              Plan Your Trip
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <PlanYourTripModal
        isOpen={isTripModalOpen}
        onClose={() => setIsTripModalOpen(false)}
      />
    </>
  );
};

export default Navbar;



