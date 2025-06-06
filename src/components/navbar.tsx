"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar bg-white shadow-sm">
        <div className="flex-1">
          <ul className="btn btn-ghost text-xl text-black">
            <li><Link href="/">Galactic Mart</Link></li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-black">
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/addproduct">Add</Link></li>
            <li><Link href="/sale">Sale</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
