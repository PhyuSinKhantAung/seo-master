import React, { useState } from "react";
import Heading from "./ui/Heading";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import { motion } from "framer-motion";
import { globalVariants } from "../constants";
const { containerVariants, scrollUpVariants } = globalVariants;

export default function Projects({ projectsData }) {
  const allProjects = projectsData.ourProjects;

  const [projects, setProjects] = useState(allProjects);

  const [value, setValue] = useState(0);

  const filteredProjects = (category) => {
    if (category === "all") {
      setProjects(allProjects);
      return;
    }
    const filteredProjects = allProjects.filter(
      (project) => project.category === category
    );
    setProjects(filteredProjects);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={scrollUpVariants} className="text-center">
        <Heading>{projectsData}</Heading>
      </motion.div>

      <motion.div variants={scrollUpVariants}>
        <div className="text-center my-4  transition-all duration-300">
          {projectsData.categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setValue(index);
                filteredProjects(category);
              }}
              className={`${
                index === value ? "bg-primary text-white" : "bg-gray-200 "
              } lg:mx-2 px-7 py-2 mx-1 capitalize rounded-md cursor-pointer hover:bg-primary hover:text-white transition-all duration-500`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={scrollUpVariants}
        className="lg:w-4/5 mx-auto grid md:grid-cols-2 xl:grid-cols-3 md:p-8 md:gap-6 p-4 gap-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative col-span-1 cursor-pointer"
          >
            <Image
              src={project.img}
              key={project.id}
              width={400}
              height={400}
              alt={project.name}
              className="rounded-lg w-full"
            />

            {/* Overlay */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary text-white absolute w-full h-full top-0 rounded-lg">
              <div className="absolute right-0 top-2 bg-white w-20 h-20 rounded-[50%] flex justify-center items-center mx-auto">
                <AddIcon className="text-[4rem] text-primary"></AddIcon>
              </div>
              <div className="absolute text-white top-52 left-4">
                <div className="flex gap-x-2 my-2">
                  <FolderIcon></FolderIcon>
                  <h1 className="capitalize">{project.category}</h1>
                </div>
                <h1 className="text-2xl font-semibold">{project.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
