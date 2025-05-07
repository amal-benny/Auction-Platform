import React, { useState } from "react";
import { useParams } from "react-router-dom";

function AuctionDetail() {
  const { id } = useParams();

  // Mock auction data (this will come from backend later)
  const auction = {
    id: id,
    title: "iPhone 14 Pro Max",
    description: "Brand new. Full box with bill. Warranty included.",
    currentBid: 65000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJq1eKFxawiwz1UrMdSGhGJ63J7nZJldoGw&s",
    endTime: "2h 30m left",
    seller: "john_doe",
  };

  // Mock bid history
  const [bids, setBids] = useState([
    { user: "bidder123", amount: 65000 },
    { user: "techguru", amount: 64000 },
    { user: "aero_coder", amount: 63000 },
  ]);

  const [newBid, setNewBid] = useState("");

  const handleBidSubmit = () => {
    const bidValue = parseInt(newBid);
    if (isNaN(bidValue) || bidValue <= auction.currentBid) {
      alert("Your bid must be higher than the current bid!");
      return;
    }

    // Add new bid to top of list
    const updatedBids = [{ user: "you", amount: bidValue }, ...bids];
    setBids(updatedBids);
    setNewBid("");
    auction.currentBid = bidValue; // only for frontend now
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-full h-80 object-contain mb-4 rounded"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {auction.title}
        </h2>
        <p className="text-gray-600 mb-2">{auction.description}</p>
        <p className="text-sm text-gray-500 mb-2">Seller: {auction.seller}</p>
        <p className="text-blue-700 font-bold mb-2">
          Current Bid: ₹{auction.currentBid}
        </p>
        <p className="text-sm text-gray-500 mb-6">Ends in: {auction.endTime}</p>

        <div className="mb-4">
          <input
            type="number"
            value={newBid}
            onChange={(e) => setNewBid(e.target.value)}
            placeholder="Enter your bid (₹)"
            className="border px-3 py-2 rounded w-full mb-2"
          />
          <button
            onClick={handleBidSubmit}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Place Bid
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Bidding History
        </h3>
        <ul className="divide-y divide-gray-200">
          {bids.map((bid, index) => (
            <li
              key={index}
              className="py-2 flex justify-between text-sm text-gray-700"
            >
              <span>{bid.user}</span>
              <span className="font-medium">₹{bid.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AuctionDetail;
