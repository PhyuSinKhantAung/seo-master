import React from "react";
import Header from "./Header";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Hero({ navData, heroData }) {
  return (
    <>
      <section className="bg-primary min-h-screen">
        <div className="container mx-auto relative min-h-screen">
          <Header navData={navData} heroData={heroData}></Header>\
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2124B1"
          fill-opacity="1"
          d="M0,32L21.8,42.7C43.6,53,87,75,131,112C174.5,149,218,203,262,224C305.5,245,349,235,393,218.7C436.4,203,480,181,524,154.7C567.3,128,611,96,655,106.7C698.2,117,742,171,785,160C829.1,149,873,75,916,58.7C960,43,1004,85,1047,133.3C1090.9,181,1135,235,1178,266.7C1221.8,299,1265,309,1309,288C1352.7,267,1396,213,1418,186.7L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
