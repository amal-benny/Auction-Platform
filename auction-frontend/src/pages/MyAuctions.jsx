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
        return "bg-green-100 text-green-700";
      case "lost":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        My Auctions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all transform hover:scale-102 hover:shadow-md hover:translate-y-1"
          >
            <img
              src={auction.imageUrl}
              alt={auction.title}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {auction.title}
                </h2>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusStyle(
                    auction.status
                  )}`}
                >
                  {auction.status.toUpperCase()}
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-3">
                Current Bid: ₹{auction.currentBid}
              </p>
              <Link
                to={`/auction/${auction.id}`}
                className="inline-block mt-3 text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
              >
                View Auction →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAuctions;
