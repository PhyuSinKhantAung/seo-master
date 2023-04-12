import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar({ navData }) {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-10">
        {navData.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <NavLinks item={item} />
            ) : (
              <Link href={item.href} className="hover:text-gray-400">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
