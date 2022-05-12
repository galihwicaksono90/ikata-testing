import React from "react";
import NewsCard from "./NewsCard";

import Carousel from "components/Carousel";

export default function NewsCarousel() {
  return (
    <Carousel>
      <NewsCard
        title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
        tags={["Berita Umum"]}
        image="/news1.jpg"
        href="/about"
        bold
      />
      <NewsCard
        title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
        tags={["Berita Umum"]}
        image="/news2.jpg"
        href="/about"
        bold
      />
      <NewsCard
        title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
        tags={["Berita Umum"]}
        image="/news3.jpg"
        href="/about"
        bold
      />
    </Carousel>
  );
}

/*
 * export default function NewsCarousel() {
 *   const { classes } = useStyles();
 *   return (
 *     <AspectRatio ratio={744 / 596}>
 *       <Swiper
 *         modules={[Pagination, Autoplay]}
 *         pagination={{ clickable: true }}
 *         autoplay={{
 *           delay: 5000,
 *           disableOnInteraction: false,
 *         }}
 *         className={classes.carousel}
 *         loop={true}
 *       >
 *         <SwiperSlide>
 *           <NewsCard
 *             title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
 *             tags={["Berita Umum"]}
 *             image="/news1.jpg"
 *             href="/about"
 *             bold
 *           />
 *         </SwiperSlide>
 *         <SwiperSlide>
 *           <NewsCard
 *             title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
 *             tags={["Berita Umum"]}
 *             image="/news2.jpg"
 *             href="/about"
 *             bold
 *           />
 *         </SwiperSlide>
 *         <SwiperSlide>
 *           <NewsCard
 *             title="Harga batu bara terus melambung tinggi pada quarter pertama tahun 2022"
 *             tags={["Berita Umum"]}
 *             image="/news3.jpg"
 *             href="/about"
 *             bold
 *           />
 *         </SwiperSlide>
 *       </Swiper>
 *     </AspectRatio>
 *   );
 * } */
