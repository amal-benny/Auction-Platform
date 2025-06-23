import React, { useState } from "react";

function CreateAuction() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingBid: "",
    startTime: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("starting_bid", formData.startingBid);
    form.append("start_time", formData.startTime);
    form.append("end_time", formData.endTime);
    form.append("image", formData.image);

    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auction/create/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Auction created successfully!");

      setFormData({
        title: "",
        description: "",
        startingBid: "",
        startTime: "",
        endTime: "",
        image: null,
      });
      setPreview(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create auction");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-500 mb-10 text-center">
        Create a New Auction
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Item Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter item title"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter a brief description"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Starting Bid (₹)
          </label>
          <input
            type="number"
            name="startingBid"
            placeholder="Eg: 1000"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.startingBid}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Start Time
            </label>
            <input
              type="datetime-local"
              name="startTime"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              End Time
            </label>
            <input
              type="datetime-local"
              name="endTime"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
            onChange={handleChange}
            required
          />
        </div>

        {preview && (
          <div className="mt-6">
            <h3 className="text-sm text-gray-600 mb-2 font-medium">Preview:</h3>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-contain border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit Auction
        </button>
      </form>
    </div>
  );
}

export default CreateAuction;
