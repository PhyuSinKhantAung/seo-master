import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SendIcon from "@mui/icons-material/Send";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ footerData }) {
  return (
    <div className="bg-primary text-white mt-20">
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-4/5 mx-auto py-20">
        <div className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Get In Touch
          </Typography>
          {footerData.getInTouch.map((item, index) => (
            <div key={index} className="py-2">
              <LocationOnIcon></LocationOnIcon>
              <span>{item}</span>
            </div>
          ))}

          <div className="flex gap-x-6 text-2xl my-6">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Popular Link
          </Typography>{" "}
          {footerData.popularLink.map((item, index) => (
            <div key={index} className="py-2">
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              <span className="capitalize">{item}</span>
            </div>
          ))}
        </div>

        <div className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Project Gallery
          </Typography>{" "}
          <ImageList cols={3} sx={{ width: 200 }}>
            {footerData.projectGallery.map((item, index) => (
              <ImageListItem key={index}>
                <Image alt={item} src={item} width={100} height={100}></Image>
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <div className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Newsletter
          </Typography>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            tenetur eum unde quia animi aspernatur explicabo consequuntur
            incidunt itaque. Laborum, perferendis. Iusto, aliquam. Ex error
          </p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Your Email"
              className="text-black rounded-full py-3 px-4"
            />
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto" />
      <div className="md:flex md:justify-between w-4/5 mx-auto py-10">
        <h6 className="text-center md:text-start">
          ©{" "}
          <Link href="/" className="cursor-pointer">
            Your Site name
          </Link>
          , All Rights Reserved. Designed By{" "}
          <Link href="/" className="cursor-pointer">
            HTML Codex
          </Link>
        </h6>
        <div className="flex gap-x-4 capitalize justify-center md:mt-0 mt-4">
          {footerData.assets.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
