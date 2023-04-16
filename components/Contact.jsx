import React from "react";
import Heading from "./ui/Heading";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const scrollUpVariants = {
  hidden: {
    y: 500,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 20,
    },
  },
};

export default function Contact({ contactData }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={scrollUpVariants} className="text-center">
        <Heading>{contactData}</Heading>
      </motion.div>
      <motion.div
        variants={scrollUpVariants}
        className="lg:w-2/5 md:w-1/2 w-full px-4 mx-auto flex flex-col gap-y-6"
      >
        <div className="grid gap-6 grid-cols-2">
          <TextField
            className="cols-span-1"
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
          />
          <TextField
            className="cols-span-1"
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
          />
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Subject"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <button className="py-4 px-6 bg-primary w-full text-white rounded-md">
          Send Message
        </button>
      </motion.div>
    </motion.div>
  );
}
