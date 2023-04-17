import React from "react";
import Heading from "./ui/Heading";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { globalVariants } from "../constants";
const { containerVariants, childContainerVariants, scrollUpVariants } =
  globalVariants;

export default function Teams({ teamsData }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={scrollUpVariants} className="text-center">
        <Heading>{teamsData}</Heading>
      </motion.div>
      <motion.div
        variants={childContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full gap-y-20 grid-cols-1 p-6 mb-20

      mx-auto  md:w-4/5 grid md:grid-cols-2 lg:grid-cols-3"
      >
        {teamsData.members.map((member) => (
          <motion.div key={member.id} variants={scrollUpVariants}>
            <div className="group hover:text-white rounded-lg relative shadow-[-60px_60px_0_8px_#fff] hover:shadow-[-60px_60px_0_8px_#2124B1] transition-all duration-500 cursor-pointer">
              <Image
                className="shadow-lg rounded-lg w-full md:p-0 p-10"
                src={member.img}
                alt={member.name}
                width={400}
                height={800}
              />
              <div className="absolute top-20 lg:-left-10 md:p-0 p-3">
                <div className="flex flex-col gap-y-10 text-xl text-primary xl:group-hover:text-white lg:group-hover:text-white">
                  <FaFacebookF></FaFacebookF>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </div>

              <div className="absolute -bottom-14 lg:-left-10">
                <div>
                  <h1 className="font-semibold">{member.name}</h1>
                  <span className="text-gray-400">{member.position}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
