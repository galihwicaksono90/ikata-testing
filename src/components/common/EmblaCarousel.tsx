import { ActionIcon, Box, UnstyledButton } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { useCarouselStyles } from "theme";
import { divideArrayIntoChunks } from "utils";

export interface EmblaCarouselProps {
  rows?: number;
  autoplay?: boolean;
  loop?: boolean;
  children: React.ReactNode[];
  withArrows?: boolean;
  withDots?: boolean;
  slidesPerView?: number;
  marginsBetween?: number;
  dotsPosition?: "inside" | "outside";
  breakpoints?: {
    /** in px */
    smallerThan: number;
    slidesPerView: number;
  }[];
}

export const EmblaCarousel = ({
  rows = 1,
  children,
  loop = false,
  withArrows = false,
  withDots = false,
  slidesPerView = 1,
  marginsBetween = 5,
  breakpoints,
  dotsPosition = "outside",
  autoplay,
}: EmblaCarouselProps) => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop,
      align: "start",
    },
    autoplay ? [Autoplay({ stopOnInteraction: false })] : []
  );

  const { classes } = useCarouselStyles({
    loop,
    withArrows,
    slidesPerView,
    marginsBetween,
    breakpoints,
  });

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const renderChildren = () => {
    if (rows === 1)
      return children?.map((child, index) => (
        <div className="embla__slide" key={index}>
          {child}
        </div>
      ));

    const dividedChildren = divideArrayIntoChunks(children, rows);
    return dividedChildren?.map((dividedChild, index) => (
      <div className="embla__slide" key={index}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>{dividedChild.map((child) => child)}</>
        </Box>
      </div>
    ));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <div className={classes.emblaCarousel}>
        {withArrows ? (
          <Arrow type="prev" onClick={() => embla.scrollPrev()} />
        ) : null}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{renderChildren()}</div>
        </div>
        {withArrows ? (
          <Arrow type="next" onClick={() => embla.scrollNext()} />
        ) : null}
      </div>
      {withDots ? (
        <Box
          className={classes.emblaDots}
          sx={{
            position: dotsPosition === "inside" ? "absolute" : null,
            bottom: 65,
          }}
        >
          {scrollSnaps.map((_, index) => (
            <Dots
              onClick={() => scrollTo(index)}
              selected={index === selectedIndex}
              key={index}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

interface ArrowProps {
  type: "next" | "prev";
  onClick?: () => void;
}

const Arrow = ({ type, onClick }: ArrowProps) => {
  return (
    <ActionIcon
      onClick={onClick}
      className={`carousel-arrow-${type === "next" ? "next" : "prev"}`}
      variant="filled"
      radius="xl"
      size="lg"
      sx={(theme) => ({
        "&:hover": {
          color: theme.colors.orange[0],
        },
      })}
    >
      {type === "next" ? <IconArrowRight /> : <IconArrowLeft />}
    </ActionIcon>
  );
};

const Dots = ({
  onClick,
  selected,
}: {
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <UnstyledButton
      onClick={onClick}
      sx={(theme) => ({
        backgroundColor: selected
          ? theme.colors.orange[0]
          : theme.colors.white[0],
        opacity: selected ? 1 : 0.5,
        height: 7,
        width: 16,
        borderRadius: "50px",
      })}
    />
  );
};
