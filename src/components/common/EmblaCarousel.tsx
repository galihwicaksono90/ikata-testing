import React, { useEffect, useState, useCallback } from "react";
import { createStyles, UnstyledButton, ActionIcon, Box } from "@mantine/core";
import useEmblaCarousel from "embla-carousel-react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import Autoplay from "embla-carousel-autoplay";

interface EmblaCarouselProps {
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
    autoplay ? [Autoplay()] : []
  );

  const { classes } = useStyles({
    loop,
    withArrows,
    slidesPerView,
    marginsBetween,
    breakpoints,
  });

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
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

  return (
    <Box sx={{ position: "relative" }}>
      <div className={classes.emblaCarousel}>
        {withArrows ? (
          <Arrow type="prev" onClick={() => embla.scrollPrev()} />
        ) : null}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {children?.map((child, index) => (
              <div className="embla__slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        {withArrows ? (
          <Arrow type="next" onClick={() => embla.scrollNext()} />
        ) : null}
      </div>
      {withDots ? (
        <Box
          className={classes.emblaDots}
          sx={(theme) => ({
            position: dotsPosition === "inside" ? "absolute" : "initial",
            bottom: 65,
          })}
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

const useStyles = createStyles(
  (
    theme,
    {
      breakpoints,
      withArrows,
      slidesPerView,
      marginsBetween,
    }: Omit<EmblaCarouselProps, "children">
  ) => {
    const pasedBreakpoints = {};
    if (!!breakpoints?.length) {
      breakpoints?.forEach((b) => {
        pasedBreakpoints[`@media (max-width: ${b.smallerThan}px)`] = {
          flexBasis: `calc(100% / ${b.slidesPerView} )`,
        };
      });
    }

    return {
      emblaCarousel: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        ...(withArrows ? { "& > * + *": { marginLeft: 10 } } : null),
        "& .embla": {
          width: "100%",
          overflow: "hidden",
          "& .embla__container": {
            display: "flex",
          },
          "& .embla__slide": {
            position: "relative",
            flexGrow: 0,
            flexShrink: 0,
            flexBasis:
              slidesPerView === 1
                ? `calc(100% / ${slidesPerView} )`
                : `calc(100% / ${slidesPerView} - 7px)`,
            maxWidth: "100%",
            marginRight: slidesPerView === 1 ? 0 : marginsBetween,
            marginLeft: slidesPerView === 1 ? 0 : marginsBetween,
            ...pasedBreakpoints,
          },
        },
      },
      emblaDots: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: 10,
        marginTop: 40,
      },
      emblaDot: {
        height: 7,
        width: 16,
        backgroundColor: theme.colors.white[0],
        opacity: 0.5,
        borderRadius: "50px",
      },
    };
  }
);

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
