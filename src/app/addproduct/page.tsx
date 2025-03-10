"use client";
import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    alert("Product added successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8  ">
      <div className="card bg-sky-950 shadow-lg w-full p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex gap-4">
            {/* Price */}
            <div>
              <label className="block font-medium  ">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input input-bordered w-md"
                required
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="input input-bordered w-md"
                required
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block font-medium">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}

          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input type="file" className="file-input" />
              <label className="fieldset-label">Max size 2MB</label>
            </fieldset>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-md">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
