import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar({ navData }) {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-10">
        {navData.map((item) => (
          <li key={item.name} className="hover:text-gray-400">
            {item.submenu ? (
              <NavLinks item={item} />
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
