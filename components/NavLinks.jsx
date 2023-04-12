import React, { useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavLinks({ item }) {
  const [heading, setHeading] = useState("");

  return (
    <>
      <div className="md:cursor-pointer group">
        <span
          onClick={() => {
            heading !== item.name ? setHeading(item.name) : setHeading("");
          }}
          className="hover:text-gray-400"
        >
          {item.name}
          <ExpandMoreIcon></ExpandMoreIcon>
        </span>

        {/* For Pc */}
        <div>
          <div className="absolute top-19 hidden hover:lg:block group-hover:lg:block ">
            <div className="bg-white text-black rounded-md py-1 px-3 ">
              <ul>
                {item.sublinks.map((item) => (
                  <li
                    key={item.name}
                    className="my-3 px-2 py-1 rounded-md hover:bg-gray-200"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile */}
      <div className={`${heading === item.name ? "lg:hidden " : "hidden"}`}>
        <ul>
          {item.sublinks.map((item) => (
            <li
              key={item.name}
              className="my-3 px-2 py-1 rounded-md hover:bg-gray-200"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
