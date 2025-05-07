import React, { useState } from "react";

function CreateAuction() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingBid: "",
    endTime: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later we'll send this data to backend using FormData
    console.log("Auction Created:", formData);
    alert("Auction created (mock)");
    // Clear form
    setFormData({
      title: "",
      description: "",
      startingBid: "",
      endTime: "",
      image: null,
    });
    setPreview(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Auction
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Item Title"
          className="w-full border px-4 py-2 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Item Description"
          className="w-full border px-4 py-2 rounded"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="startingBid"
          placeholder="Starting Bid (₹)"
          className="w-full border px-4 py-2 rounded"
          value={formData.startingBid}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="endTime"
          className="w-full border px-4 py-2 rounded"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={handleChange}
          required
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-full h-64 object-contain rounded"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Auction
        </button>
      </form>
    </div>
  );
}

export default CreateAuction;
