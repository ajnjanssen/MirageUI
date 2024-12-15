"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function VerticalNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="w-64 h-full bg-gray-800 text-white">
      <ul className="flex flex-col p-4">
        {navItems.map((item) => (
          <li key={item.name} className="mb-2">
            <button
              type="button"
              onClick={() => router.push(item.path)}
              className={`block w-full text-left px-4 py-2 rounded ${
                pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default VerticalNavigation;
