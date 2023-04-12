import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function HeroBody({ heroData }) {
  return (
    <section className="pt-40 xl:w-full w-4/5 text-white mx-auto">
      <div className="lg:flex justify-center w-full items-center">
        <div className="lg:w-1/2 lg:text-start text-center lg:mb-0 mb-10 flex flex-col gap-y-6">
          <Typography
            variant="h2"
            className="text-3xl xl:text-4xl"
            fontWeight={700}
          >
            {heroData.title}
          </Typography>
          <Typography variant="h6" paragraph className="text-base xl:text-xl">
            {heroData.paragraph}
          </Typography>
          <div className="">
            <button className="py-3 px-4 xl:py-6 xl:px-12 font-semibold text-sm xl:text-lg rounded-full bg-white text-black">
              {heroData.btnText1}
            </button>
            <button className="py-3 px-4 xl:py-6 xl:px-12 font-semibold text-sm xl:text-lg rounded-full border mx-4 hover:bg-white hover:text-black transition-all duration-300">
              {heroData.btnText2}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            alt="seo-illustration-image"
            src={heroData.heroImg}
            width={600}
            height={600}
          ></Image>
        </div>
      </div>
    </section>
  );
}
