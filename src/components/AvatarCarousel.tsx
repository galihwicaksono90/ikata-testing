import React from "react";
import Avatar, { AvatarProps } from "./Avatar";
import { createStyles, Box } from "@mantine/core";

import { Pagination, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

interface Props {
  data: AvatarProps[];
  rows?: number;
  slidesPerView?: number;
}

const useStyles = createStyles((theme) => ({
  avatarCarousel: {
    "&.swiper": {
      paddingBottom: "30px",
    },
    "& .swiper-pagination.swiper-pagination-bullets": {
      bottom: "0px",
    },
    "& .swiper-pagination-bullet": {
      backgroundColor: theme.colors.gray[3],
      color: theme.colors.gray[8],
      width: 27,
      height: 27,
      lineHeight: "30px",
      fontWeight: "bold",
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: theme.primaryColor,
      color: theme.colors.dark,
    },
  },
}));

const AvatarCarousel = ({ data, rows = 2, slidesPerView = 4 }: Props) => {
  const { classes } = useStyles();
  if (!data) {
    return null;
  }

  return (
    <Box>
      <Swiper
        modules={[Grid, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        slidesPerView={slidesPerView}
        grid={{
          rows,
          fill: "row",
        }}
        className={classes.avatarCarousel}
      >
        {data.map((item) => (
          <SwiperSlide>
            <Avatar name={item.name} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AvatarCarousel;
