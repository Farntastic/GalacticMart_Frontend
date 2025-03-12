"use client";

import { useState } from "react";
import Link from "next/link";
import items from "@/components/items";
import Image from "next/image";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen ">
      {/* ปุ่มเลือกประเภท */}
      <div className="absolute  top-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2 bg-white p-3 shadow-lg rounded-lg border border-gray-300">
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

      <div className="pt-20 flex justify-center items-center flex-wrap gap-4 bg-base-300">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="card bg-base-100 w-96 shadow-sm m-2">
              <figure>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Category: {item.category}</p>
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
