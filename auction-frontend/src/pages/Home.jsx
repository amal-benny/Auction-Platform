import React from "react";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome to AuctionHub
      </h1>
      <p className="text-gray-600">
        Bid on goods and services at the best price!
      </p>
      <Dashboard />
    </div>
  );
}

export default Home;
