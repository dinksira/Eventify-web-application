// src/components/common/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Eventify</h2>
          <p className="text-sm leading-relaxed">
            Eventify helps you discover, plan, and manage events effortlessly. 
            Join a vibrant community of event lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="/events" className="hover:text-white transition-colors duration-200">Events</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-white transition-colors duration-200">FAQ</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
