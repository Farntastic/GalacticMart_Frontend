"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProduct() {
  const router = useRouter();
  const params = useParams(); 
  const [productId, setProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: "",
    stock: "",
    image: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    if (params?.productId) {
      setProductId(params.productId as string); 
    }
  }, [params]);

  
  useEffect(() => {
    if (!productId) return;

    fetch(`http://127.0.0.1:8080/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setFormData({
          name: data.name,
          details: data.details,
          price: data.price.toString(),
          stock: data.stock.toString(),
          image: data.image,
          category: data.category,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productId) return;

    const res = await fetch(`http://127.0.0.1:8080/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        details: formData.details,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
        image: formData.image,
        category: formData.category,
      }),
    });

    if (res.ok) {
      alert("✅ Product updated successfully!");
      router.push(`/product/${productId}`);
    } else {
      alert("❌ Failed to update product!");
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!productId) return <p className="text-center text-gray-500">❌ Invalid Product ID</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="card bg-base-100 shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
              <label className="block font-medium">Price (THB)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

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

          <div>
            <label className="block font-medium">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="select select-bordered w-full">
              <option value="Weapon">Weapon</option>
              <option value="Gun">Gun</option>
              <option value="Medicine">Medicine</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" className="btn" onClick={() => router.back()}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
