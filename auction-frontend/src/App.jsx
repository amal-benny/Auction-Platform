import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AuctionDetail from "./pages/AuctionDetail";
import CreateAuction from "./pages/CreateAuction";
import MyAuctions from "./pages/MyAuctions";

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionDetail />} />
            <Route path="/create-auction" element={<CreateAuction />} />
            <Route path="/my-auction" element={<MyAuctions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
