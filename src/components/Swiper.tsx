/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  Lazy,
} from "swiper/modules";
const OverlayText = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "4vw",
  zIndex: 1000,
  color: "transparent", // Делаем текст прозрачным
  backgroundImage: "linear-gradient(45deg, #2196f3, #4caf50)", // Градиент
  WebkitBackgroundClip: "text",
});
const OverlayTextUnder = styled("div")({
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "transparent",
  fontSize: "1.5vw",
  zIndex: 1000,
  backgroundImage: "radial-gradient(ellipse at bottom, #173f6e 0%, #0c0d13 100%)",
  WebkitBackgroundClip: "text",

});


export default function Swipers() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        speed={500}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <OverlayText>DiVA HESTER</OverlayText>
        <OverlayTextUnder>Digital artist</OverlayTextUnder>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Image 1"
            className="w-auto h-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Image 2"
            className="w-auto h-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="Image 3"
            className="w-auto h-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
