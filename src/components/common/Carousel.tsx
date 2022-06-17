import React from "react";
import { ActionIcon, Box } from "@mantine/core";
import { useStyles } from "theme";
import Slider from "react-slick";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CarouselBreakpoint {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll?: number;
    infinite?: boolean;
    dots?: boolean;
  };
}

interface ArrowProps {
  type: "next" | "prev";
  onClick?: () => void;
}

export interface CarouselProps {
  dotType?: "bullets" | "numbers";
  arrows?: boolean;
  dotsPosition?: "inside" | "outside";
}

interface Props extends CarouselProps {
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  dots?: boolean;
  centerMode?: boolean;
  centerPadding?: string;
  responsive?: CarouselBreakpoint[];
  rows?: number;
  children: React.ReactNode;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function Carousel({
  dots = true,
  dotType = "bullets",
  arrows = false,
  dotsPosition = "outside",
  children,
  speed = 1000,
  autoplaySpeed = 5000,
  ...rest
}: Props) {
  const settings = {
    customPaging: (i: number) => {
      return <div>{dotType === "numbers" ? i + 1 : null}</div>;
    },
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    arrows,
    dots,
    ...rest,
  };

  const { classes } = useStyles();

  return (
    <Slider
      className={classes.slickCarousel}
      dotsClass={`slick-dots ${dotType} ${dotsPosition}`}
      speed={speed}
      autoplaySpeed={autoplaySpeed}
      {...settings}
    >
      {children}
    </Slider>
  );
}

const Arrow = ({ type, onClick }: ArrowProps) => {
  return (
    <ActionIcon
      onClick={onClick}
      className={`carousel-arrow-${type === "next" ? "next" : "prev"}`}
      variant="filled"
      radius="xl"
      size="lg"
    >
      {type === "next" ? <IconArrowRight /> : <IconArrowLeft />}
    </ActionIcon>
  );
};
