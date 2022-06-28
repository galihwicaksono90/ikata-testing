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
  breakpoints?: EmblaBreakpointsProps[];
  dotType?: "bullets" | "numbers";
}

export interface EmblaBreakpointsProps {
  smallerThan: number;
  slidesPerView: number;
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
  dotType = "bullets",
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

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [prevBtnEnabled, setPrevButtonEnabled] = useState(false);
  const [nextBtnEnabled, setNextButtonEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevButtonEnabled(embla.canScrollPrev);
    setNextButtonEnabled(embla.canScrollNext);
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
          <Arrow
            type="prev"
            onClick={scrollPrev}
            disabled={loop ? false : !prevBtnEnabled}
          />
        ) : null}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{renderChildren()}</div>
        </div>
        {withArrows ? (
          <Arrow
            type="next"
            onClick={scrollNext}
            disabled={loop ? false : !nextBtnEnabled}
          />
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
              index={index}
              dotType={dotType}
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
  disabled?: boolean;
}

const Arrow = ({ type, onClick, disabled }: ArrowProps) => {
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
        "&:disabled": {
          color: theme.colors.dark[5],
        },
      })}
      disabled={disabled}
    >
      {type === "next" ? <IconArrowRight /> : <IconArrowLeft />}
    </ActionIcon>
  );
};

const Dots = ({
  onClick,
  selected,
  index,
  dotType,
}: {
  selected: boolean;
  onClick: () => void;
  index: number;
  dotType?: "bullets" | "numbers";
}) => {
  return (
    <UnstyledButton
      onClick={onClick}
      sx={(theme) => ({
        backgroundColor: selected
          ? theme.colors.orange[0]
          : dotType === "numbers"
          ? "rgba(0,0,0,0.6)"
          : "rgba(255,255,255,0.5)",
        height: dotType === "numbers" ? 27 : 7,
        width: dotType === "numbers" ? 27 : 16,
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 1,
        color: selected ? "#000" : "#898989",
      })}
    >
      {dotType === "numbers" ? index + 1 : null}
    </UnstyledButton>
  );
};
