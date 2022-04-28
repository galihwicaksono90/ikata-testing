import React from "react";
import { Title, createStyles } from "@mantine/core";
import NewsCard from "./NewsCard";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const useStyles = createStyles((theme) => ({
  container: {
    height: "679px",
  },
  carousel: {
    "& .swiper-pagination-bullet": {
      width: "16px",
      height: "7px",
      background: "#fff",
      borderRadius: "40px",
      opacity: 0.5,
      transition: "opacity 300ms ease",
      /* position: "absolute", */
      /* bottom: -20, */
    },
    "& .swiper-pagination-bullet-active": {
      background: theme.primaryColor,
      opacity: 1,
    },
  },
}));

export default function NewsCarousel() {
  const { classes } = useStyles();
  return (
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
        <NewsCard
          title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
          tags={["Berita Umum"]}
          image="/news1.jpg"
          href="/about"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NewsCard
          title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
          tags={["Berita Umum"]}
          image="/news2.jpg"
          href="/about"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NewsCard
          title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
          tags={["Berita Umum"]}
          image="/news3.jpg"
          href="/about"
        />
      </SwiperSlide>
    </Swiper>
  );
}
