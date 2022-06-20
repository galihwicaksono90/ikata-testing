import { createStyles } from "@mantine/core";
import { EmblaCarouselProps } from "components/common";
export const useCarouselStyles = createStyles(
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
