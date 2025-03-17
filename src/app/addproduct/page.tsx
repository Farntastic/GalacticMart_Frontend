"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function AddProduct() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Other");
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name,
      details,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      image,
      category,
    };

    const res = await fetch("http://127.0.0.1:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      alert("✅ เพิ่มสินค้าเรียบร้อย!");
      router.push("/product"); 
    } else {
      alert("❌ เพิ่มสินค้าไม่สำเร็จ!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">➕ ADD PRODUCTS</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="ชื่อสินค้า" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded"/>
        <input type="text" placeholder="รายละเอียดสินค้า" value={details} onChange={(e) => setDetails(e.target.value)} className="w-full p-2 border rounded"/>
        <input type="number" placeholder="ราคา" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 border rounded"/>
        <input type="number" placeholder="จำนวนสินค้า" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full p-2 border rounded"/>
        <input type="text" placeholder="URL รูปภาพ" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 border rounded"/>

       
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
          <option value="Weapon">Weapon</option>
          <option value="Gun">Gun</option>
          <option value="Medicine">Medicine</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">เพิ่มสินค้า</button>
      </form>
    </div>
  );
}
