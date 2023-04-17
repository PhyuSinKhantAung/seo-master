import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
};

const childrenVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const leftButtonVariants = {
  hidden: {
    x: -300,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const rightButtonVariants = {
  hidden: {
    x: 300,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export default function HeroBody({ heroData }) {
  return (
    <section className="pt-40 xl:w-full w-4/5 text-white mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:flex justify-center w-full items-center"
      >
        <div
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 lg:text-start text-center lg:mb-0 mb-10 flex flex-col gap-y-6"
        >
          <motion.Typography
            variants={childrenVariants}
            variant="h1"
            className="text-3xl xl:text-4xl font-bold"
            fontWeight={700}
          >
            {heroData.title}
          </motion.Typography>
          <motion.Typography
            variants={childrenVariants}
            variant="h6"
            className="text-base xl:text-xl"
          >
            {heroData.paragraph}
          </motion.Typography>
          <div>
            <motion.button
              variants={leftButtonVariants}
              className="py-3 px-4 xl:py-6 xl:px-12 font-semibold text-sm xl:text-lg rounded-full bg-white text-black"
            >
              {heroData.btnText1}
            </motion.button>
            <motion.button
              variants={rightButtonVariants}
              className="py-3 px-4 xl:py-6 xl:px-12 font-semibold text-sm xl:text-lg rounded-full border mx-4 hover:bg-white hover:text-black"
            >
              {heroData.btnText2}
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center" initial="hidden" animate="visible">
          <Image
            alt="seo-illustration-image"
            src={heroData.heroImg}
            width={600}
            height={600}
          ></Image>
        </div>
      </motion.div>
    </section>
  );
}
