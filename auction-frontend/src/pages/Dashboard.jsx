import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const auctions = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      description: "Brand new. Starts at ₹50,000",
      currentBid: "₹65,000",
      endTime: "2h 30m left",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Freelance Web Design Service",
      description: "Get a full responsive website built with React!",
      currentBid: "₹15,000",
      endTime: "5h 15m left",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      id: 3,
      title: 'Samsung Smart TV 50"',
      description: "4K UHD Smart TV. Lightly used.",
      currentBid: "₹35,000",
      endTime: "3h 10m left",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTZ2mvdHNPDj272gWRazv0YFQABwdFb9jDw&s",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Live Auctions
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {auctions.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-blue-600 font-bold">
              Current Bid: {item.currentBid}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Ends in: {item.endTime}
            </p>
            <Link to={`/auction/${item.id}`}>
              <button className="w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700">
                View Auction
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
