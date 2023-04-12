import React from "react";
import { FaHome } from "react-icons/fa";
import Heading from "./ui/Heading";

export default function Services({ servicesData }) {
  return (
    <div>
      <div className="text-center">
        <Heading>{servicesData}</Heading>
      </div>
      <div className="lg:w-4/5 mx-auto grid md:grid-cols-2 xl:grid-cols-3 md:p-8 md:gap-6 p-4 gap-4">
        {servicesData.ourServices.map((item) => (
          <div
            key={item.id}
            className="group cols-span-1 bg-white shadow-lg p-8 rounded-lg transition-all duration-500 hover:bg-primary cursor-pointer "
          >
            <div className="bg-primary group-hover:bg-white w-20 h-20 rounded-[50%] flex justify-center items-center mx-auto my-4">
              <FaHome className="text-4xl text-white group-hover:text-primary"></FaHome>
            </div>
            <div className="flex flex-col justify-center text-center gap-y-4">
              <h1 className="font-bold text-2xl group-hover:text-white">
                {item.title}
              </h1>
              <p className="text-gray-500 group-hover:text-white">
                {item.text}
              </p>
            </div>
            <button
              className="group-hover:before:w-full group-hover:before:bg-white group-hover:before:rounded-full 
            my-6 flex p-3  mx-auto relative 
            before:absolute 
            before:transition-all 
            before:duration-300 
            before:top-0 
            before:left-0 
            before:w-12 
            before:h-12 
            before:rounded-[50%] 
            before:bg-slate-200"
            >
              <span className="relative font-bold tracking-wider text-primary">
                {item.btnText}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
