import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/swiper-bundle.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar } from "@mui/material";
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

const fadeZoomInVariants = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const childContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

export default function Testimonials({ testimonialsData }) {
  SwiperCore.use([Autoplay]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-primary px-6 py-20 my-10"
    >
      <motion.div
        variants={scrollUpVariants}
        className="w-full lg:w-4/5 mx-auto"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="h-72 lg:h-80"
        >
          {testimonialsData.clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white p-6 rounded-lg flex flex-col gap-y-4 text-sm">
                <FaQuoteLeft className="text-3xl text-primary"></FaQuoteLeft>
                <p className="text-gray-400">{client.message}</p>
                <div className="flex">
                  <Avatar alt={client.name} src={client.image} />
                  <div className="mx-4">
                    <h1>{client.name}</h1>
                    <span className="text-gray-400">{client.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
