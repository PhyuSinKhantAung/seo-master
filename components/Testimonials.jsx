import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/swiper-bundle.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar } from "@mui/material";

export default function Testimonials({ testimonialsData }) {
  SwiperCore.use([Autoplay]);

  return (
    <div className="bg-primary p-20 my-10">
      <div className="w-full lg:w-4/5 mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
          {testimonialsData.clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white p-4 rounded-lg ">
                <FaQuoteLeft className="text-3xl"></FaQuoteLeft>
                <p>{client.message}</p>
                <div className="flex">
                  <Avatar alt={client.name} src={client.image} />
                  <div>
                    <h1>{client.name}</h1>
                    <span>{client.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
