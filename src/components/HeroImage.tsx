import React from "react";
import { Container, Center, createStyles, Overlay } from "@mantine/core";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
/* import "./Hero.css"; */

const useStyles = createStyles((theme) => ({
  container: {
    height: "679px",
  },
  imageContainer: {
    background: "teal",
    height: "679px",
    width: "100vw",
    position: "relative",
  },
  carousel: {
    "& .swiper-pagination-bullet": {
      width: "16px",
      height: "7px",
      background: "#fff",
      borderRadius: "40px",
      opacity: 0.5,
      transition: "opacity 300ms ease",
    },
    "& .swiper-pagination-bullet-active": {
      background: theme.primaryColor,
      opacity: 1,
    },
  },
}));

export default function HeroImage() {
  const { classes } = useStyles();
  return (
    <Center className={classes.container}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={classes.carousel}
        loop={true}
      >
        <SwiperSlide>
          <Content src={"/mining1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Content src={"/mining2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Content src={"/mining3.jpg"} />
        </SwiperSlide>
      </Swiper>
    </Center>
  );
}

function Content({ src }: { src: string }) {
  const { classes } = useStyles();
  return (
    <div className={classes.imageContainer}>
      <Image src={src} layout="fill" objectFit="cover" />
      <Overlay opacity={0.2} color="black" />
    </div>
  );
}
