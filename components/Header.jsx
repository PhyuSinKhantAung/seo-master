import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavbarMobile from "./NavbarMobile";

export default function Header({ navData, heroData }) {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white text-black p-3 shadow-lg" : "text-white p-6"
      }  shadow-lg fixed left-0 right-0 flex justify-between items-center 
      w-full mx-auto max-w-full z-20 transition-all duration-300`}
    >
      <Link
        href="/"
        className={`${
          header ? "text-primary" : "text-secondary"
        } flex items-center`}
      >
        <SearchIcon sx={{ fontSize: "4rem" }}></SearchIcon>
        <Typography variant="h4" fontWeight={700}>
          SEO
        </Typography>
        <Typography variant="h6">Master</Typography>
      </Link>

      {/* nav for pc */}
      <div className="lg:flex hidden gap-x-6 items-center">
        <Navbar navData={navData}></Navbar>
        <SearchIcon className="text-paleBlue"></SearchIcon>
        <button className="px-4 py-2 bg-paleBlue rounded-3xl">
          Pro Version
        </button>
      </div>

      {/* nav btn for mobile */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
      >
        <MenuIcon
          sx={{ fontSize: "2rem" }}
          className={`${header && "text-primary"}`}
        ></MenuIcon>
      </div>

      {/* nav mobile collapse */}
      <div
        className={`${
          navMobile ? "max-h-[500px]" : "max-h-0"
        } lg:hidden bg-white text-black absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all duration-500`}
      >
        <NavbarMobile navData={navData} />
        <SearchIcon className="mx-4"></SearchIcon>
        <button className="px-4 py-2 m-2 bg-paleBlue rounded-3xl text-white">
          Pro Version
        </button>
      </div>
    </header>
  );
}
