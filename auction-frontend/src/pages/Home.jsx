import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to AuctionHub
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Bid for premium items, rare collectibles, and once-in-a-lifetime
          deals. Let your dream items become reality.
        </p>
        <Link
          to="/create-auction"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Create an Auction
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Live Bidding
          </h3>
          <p className="text-gray-600">
            Engage in real-time auctions and compete with other users to win
            amazing deals.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Verified Sellers
          </h3>
          <p className="text-gray-600">
            Buy from trusted users with verified profiles and auction history.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Easy Listing
          </h3>
          <p className="text-gray-600">
            List your items quickly with our intuitive auction creation process.
          </p>
        </div>
      </section>

      {/* Latest Auctions */}
      <Dashboard />

      <Footer />
    </div>
  );
}

export default Home;
