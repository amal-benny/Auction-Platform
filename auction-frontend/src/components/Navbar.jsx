// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          <Link to="/">AuctionHub</Link>
        </div>

        {/* Main Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/create-auction"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Create Auction
          </Link>
        </div>

        {/* Auth Buttons - Right Side */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
