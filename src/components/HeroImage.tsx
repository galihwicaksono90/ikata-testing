import React from "react";
import { Box, Center, createStyles, Overlay } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "theme";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroImage() {
  const { classes } = useStyles();
  return (
    <Center sx={{ height: "679px" }}>
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
  return (
    <Box
      sx={{
        height: "679px",
        width: "100vw",
        position: "relative",
      }}
    >
      <Image src={src} layout="fill" objectFit="cover" />
      <Overlay opacity={0.2} color="black" />
    </Box>
  );
}
