import React from "react";
import Header from "./Header";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Hero({ navData, heroData }) {
  return (
    <section className="bg-primary min-h-screen">
      <div className="container mx-auto relative min-h-screen">
        <Header navData={navData} heroData={heroData}></Header>\
        <section className="pt-40 xl:w-full w-4/5 text-white mx-auto">
          <div className="lg:flex justify-center w-full items-center">
            <div className="lg:w-1/2 lg:text-start text-center lg:mb-0 mb-10 flex flex-col gap-y-6">
              <Typography
                variant="h2"
                className="text-3xl xl:text-5xl"
                fontWeight={700}
              >
                {heroData.title}
              </Typography>
              <Typography
                variant="h6"
                paragraph
                className="text-base xl:text-xl"
              >
                {heroData.paragraph}
              </Typography>
              <div className="">
                <button className=" p-4 text-lg xl:text-xl rounded-full bg-white text-black">
                  {heroData.btnText1}
                </button>
                <button className=" p-4 text-lg xl:text-xl rounded-full border mx-4">
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
      </div>
    </section>
  );
}
