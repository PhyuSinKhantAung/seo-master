import { Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import DoneIcon from "@mui/icons-material/Done";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function About({ aboutData }) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center w-full px-4  xl:w-4/5 mx-auto my-6">
        <div className="col-span-1">
          <AppsIcon className="text-primary text-base inline-block my-4 mr-2"></AppsIcon>
          <Typography
            variant="caption"
            className="inline-block text-sm text-primary font-bold"
          >
            {aboutData.title}
          </Typography>
          <Typography variant="h4" className="text-2xl font-bold lg:text-3xl">
            {aboutData.subtitle}
          </Typography>
          <div className="flex w-20 justify-between my-2">
            <div className=" w-16 h-1 bg-black"></div>
            <div className=" w-1 h-1 bg-black"></div>
          </div>
          <Typography paragraph sx={{ marginY: 2 }} className="text-gray-600">
            {aboutData.paragraph}
          </Typography>
          <div className="lg:grid grid-cols-2 gap-x-2">
            {aboutData.achievements.map((achievement) => (
              <div className="col-span-1" key={achievement}>
                <DoneIcon className="text-primary mr-4" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-4 my-4">
            <button className="py-2 px-4 bg-primary text-white rounded-full">
              Read more
            </button>
            <div className="flex gap-x-2 text-xl text-primary">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          <Image
            src={aboutData.aboutImg}
            alt="seo-illustration-image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>

      <div className="bg-primary text-white py-4 w-full my-10 lg:my-32 flex justify-center">
        <div className="flex items-center w-4/5 lg:justify-between justify-center">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">
              Ready to get started
            </h1>
            <p className="py-2 text-base lg:text-lg">
              Diam elitr est dolore at sanctus nonumy.
            </p>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="relative text-black rounded-full py-3 px-4 md:w-[32rem]"
              />
              <SendIcon className="absolute text-primary top-2 right-8 md:right-4 -rotate-45"></SendIcon>
            </div>
          </div>
          <div className="hidden lg:inline h-64">
            <Image
              src="/images/seo-6.svg"
              width={500}
              height={500}
              alt="seo-illustration-image"
              className="overflow-visible"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
