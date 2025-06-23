import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyAuctions() {
  const [auctions, setAuctions] = useState([]);

  const sampleAuctions = [
    {
      id: 1,
      title: "Vintage Watch",
      status: "won",
      currentBid: 1000,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJq1eKFxawiwz1UrMdSGhGJ63J7nZJldoGw&s",
    },
    {
      id: 2,
      title: "Luxury Car",
      status: "pending",
      currentBid: 50000,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJq1eKFxawiwz1UrMdSGhGJ63J7nZJldoGw&s",
    },
    {
      id: 3,
      title: "Old Painting",
      status: "lost",
      currentBid: 150,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfThvF_AiBSkjP-qj3K1lJpn-Z9WmPq8Vaw&s",
    },
    {
      id: 4,
      title: "Rare Collectibles",
      status: "won",
      currentBid: 250,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJq1eKFxawiwz1UrMdSGhGJ63J7nZJldoGw&s",
    },
  ];

  useEffect(() => {
    setAuctions(sampleAuctions);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "won":
        return "bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse";
      case "lost":
        return "bg-gradient-to-r from-red-400 to-red-600 text-white";
      case "pending":
        return "bg-gradient-to-r from-yellow-300 to-yellow-500 text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600 tracking-wide drop-shadow-sm">
        🏆 My Auctions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl border border-gray-100"
          >
            <img
              src={auction.imageUrl}
              alt={auction.title}
              className="w-full h-60 object-cover hover:brightness-95 transition-all duration-300"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {auction.title}
                </h2>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold shadow ${getStatusStyle(
                    auction.status
                  )}`}
                >
                  {auction.status.toUpperCase()}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 mb-4">
                Current Bid: ₹{auction.currentBid.toLocaleString()}
              </p>
              <Link
                to={`/auction/${auction.id}`}
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAuctions;
