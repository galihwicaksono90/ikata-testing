import React from "react";
import { Box, AspectRatio } from "@mantine/core";
import NewsCard from "./NewsCard";
import { useStyles } from "theme";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewsCarousel() {
  const { classes } = useStyles();
  return (
    <AspectRatio ratio={744 / 596}>
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
            bold
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
            tags={["Berita Umum"]}
            image="/news2.jpg"
            href="/about"
            bold
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
            tags={["Berita Umum"]}
            image="/news3.jpg"
            href="/about"
            bold
          />
        </SwiperSlide>
      </Swiper>
    </AspectRatio>
  );
}
