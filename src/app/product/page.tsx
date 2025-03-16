"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


interface Product {
  id: string;
  name: string;
  details: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  // ✅ ดึงข้อมูลจาก Backend เมื่อ Component โหลด
  useEffect(() => {
    fetch("http://localhost:8080/products") 

      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ✅ กรองสินค้าตามหมวดหมู่
  const filteredItems =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // ✅ แสดง Loading หรือ Error ถ้ามี
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative min-h-screen">
      {/* ปุ่มเลือกประเภท */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2 bg-white p-3 shadow-lg rounded-lg border border-gray-300">
        {["All", "Weapon", "Gun", "Medicine"].map((category) => (
          <button
            key={category}
            className={`btn join-item ${
              selectedCategory === category ? "btn-primary" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ แสดงสินค้า */}
      <div className="pt-30 flex justify-center items-center flex-wrap gap-4 bg-base-300">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="card bg-base-100 w-96 shadow-sm m-2">
              <figure>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Category: {item.category}</p>
                <p>{item.details}</p>
                <p className="font-bold">💰 {item.price} THB</p>
                <p className="text-sm text-gray-600">📦 คงเหลือ: {item.stock}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link href={`/product/${item.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No items found</p>
        )}
      </div>
    </div>
  );
}
