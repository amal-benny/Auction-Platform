import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-5 py-1">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-gray-700">
        <div className="mb-2 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">AuctionHub</h2>
          <p className="text-sm text-gray-600 max-w-sm">
            Buy and sell through live auctions. Bid smart. Win big.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <p className="text-sm mb-2">Email: support@auctionhub.com</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-1 text-gray-500 text-sm">
        © {new Date().getFullYear()} AuctionHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
