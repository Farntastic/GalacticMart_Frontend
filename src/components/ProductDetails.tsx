"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

// ✅ กำหนด Type ของ Product 
type Product = {
  id: string;
  name: string;
  details: string;
  price: number;
  stock: number;
  image: string;
  category: string;
};

export default function ProductDetails({ productId }: { productId: string }) {
  const [item, setItem] = useState<Product | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ โหลดข้อมูลสินค้าเมื่อ Component โหลด
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("❌ Product not found!");
        return res.json();
      })
      .then((data: Product) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!item) return <p className="text-center text-red-500">❌ Product not found</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 p-8">
      <div className="card bg-base-100 shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
       
        <div className="md:w-1/2">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
            <p className="text-gray-500 mb-2">Category: {item.category}</p>
            <p className="text-gray-700 mb-6">{item.details}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg">Stock: {item.stock}</p>
            <p className="text-lg font-semibold">💰 Price: {item.price} THB</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="btn btn-primary flex-1">
              <Link href={`/edit/${item.id}`} className="btn btn-primary">Edit</Link>
            </button>
            <DeleteButton productId={item.id} /> 
          </div>
        </div>
      </div>
    </div>
  );
}
