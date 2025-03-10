
import React from "react";

export default function Product() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-lg w-full h-full flex flex-row p-4 gap-4">
        {/* รูปภาพสินค้า */}
        <div className="w-1/3">
          <img
            src="https://thumb.ac-illust.com/48/48e5606e14c65071e25f380e71c6b181_w.jpeg"
            alt="Product"
            className="rounded-lg w-full"
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">Product Name</h2>
            <p className="text-gray-500">Category: Electronics</p>
            <p className="text-gray-700 mt-2">
            Forged from the heart of a thunderstorm, this sword crackles with raw energy. The blade, sleek and shining with electric blue veins, has been imbued with the power of lightning itself. When swung, the sword emits a bright flash, discharging arcs of lightning to strike down enemies with deadly precision. This weapon is known to cause chain reactions of electricity, stunning and electrifying nearby foes.
            </p>
            <div className="flex gap-4">
            <p className="">Quantity : 2</p> 
            <p className="ml-auto">Pirce : 2500</p>
            </div>
          </div>

          {/* ปุ่ม Edit & Delete */}
          <div className="mt-4 ml-auto flex gap-2">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
