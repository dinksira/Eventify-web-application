// src/components/common/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-blue-600">
              Eventify
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white px-4 pb-4 space-y-2 shadow-md transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            {item.label}
          </Link>
        ))}
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
