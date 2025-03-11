"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Galactic Mart</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/addproduct">Add</Link></li>
            <li><Link href="/sale">Sale</Link></li>
            <li><Link href={"/product"}>Product</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}