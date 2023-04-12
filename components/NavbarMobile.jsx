import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

export default function NavbarMobile({ navData }) {
  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-y-4">
        {navData.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <NavLinks item={item} />
            ) : (
              <Link href={item.href} className="hover:text-gray-400">
                {item.name}
              </Link>
            )}{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}
