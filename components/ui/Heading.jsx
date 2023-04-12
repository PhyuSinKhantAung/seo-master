import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";

export default function Heading({ children }) {
  const { title, subtitle } = children;

  return (
    <>
      <AppsIcon className="text-primary text-base inline-block my-4 mr-2"></AppsIcon>
      <Typography
        variant="caption"
        className="inline-block text-sm text-primary font-bold"
      >
        {title}
      </Typography>
      <Typography variant="h4" className="text-2xl font-bold lg:text-3xl">
        {subtitle}
      </Typography>
      <div className="flex w-20 justify-between my-2 mx-auto">
        <div className=" w-16 h-1 bg-black"></div>
        <div className=" w-1 h-1 bg-black"></div>
      </div>
    </>
  );
}
