"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    { id: 1, category: "Weapon", title: "Sword", img: "https://thumb.ac-illust.com/48/48e5606e14c65071e25f380e71c6b181_w.jpeg" },
    { id: 2, category: "Gun", title: "Pistol", img: "https://media.istockphoto.com/id/1218529654/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%8B%E0%B8%A5-%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-8-%E0%B8%9A%E0%B8%B4%E0%B8%95%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=pudWXJIPBsCEGeYpVIiSH7I3yLl4L4VjE6gtC57pnRg=" },
    { id: 3, category: "Medicine", title: "Red Button", img: "https://www.shutterstock.com/image-vector/medication-vitamin-bottle-game-pixel-260nw-2319992415.jpg" }
  ];

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen">
      {/* ปุ่มเลือกประเภท */}
      <div className="absolute  top-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2 bg-white p-3 shadow-lg rounded-lg border border-gray-300">
        {["All", "Weapon", "Gun", "Medicine"].map((category) => (
          <button 
            key={category} 
            className={`btn join-item ${selectedCategory === category ? "btn-primary" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* เพิ่ม padding-top เพื่อให้ปุ่มไม่โดนรายการบัง */}
      <div className="pt-20 flex justify-center items-center flex-wrap gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="card bg-base-100 w-96 shadow-sm m-2">
              <figure>
                <img  src={item.img} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Category: {item.category}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link href="product">Details</Link>
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
