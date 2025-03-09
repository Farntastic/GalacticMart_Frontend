
import React from "react";

export default function Product() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-lg w-[600px] flex flex-row p-4 gap-4">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* ปุ่ม Edit & Delete */}
          <div className="mt-4 flex gap-2">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
