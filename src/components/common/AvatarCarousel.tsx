import { Box } from "@mantine/core";
import {
  Carousel,
  MemberAvatar,
  EmblaCarousel,
  EmblaBreakpointsProps,
} from "components/common";
import { Member } from "generated/mockGraphql";

interface Props {
  data: Member[];
  rows?: number;
  slidesToShow?: number;
  responsive?: EmblaBreakpointsProps[];
  loading?: boolean;
  withTitle?: boolean;
  withClassYear?: boolean;
  loop?: boolean;
}

export const AvatarCarousel = ({
  data,
  rows = 2,
  slidesToShow = 4,
  responsive,
  loading,
  withClassYear,
  withTitle,
  loop = true,
}: Props) => {
  return (
    <EmblaCarousel
      loop={loop}
      withDots
      rows={rows}
      slidesPerView={slidesToShow}
      breakpoints={responsive}
      dotType="numbers"
    >
      {loading
        ? [...Array(10).fill(0)].map((item, index) => (
            <MemberAvatar loading={loading} key={index} />
          ))
        : data.map((item) => (
            <MemberAvatar
              data={item}
              key={item.id}
              withTitle={withTitle}
              withClassYear={withClassYear}
            />
          ))}
    </EmblaCarousel>
  );

  return (
    <Box>
      <Carousel
        dotType="numbers"
        rows={rows}
        slidesToShow={slidesToShow}
        dots
        infinite={false}
        responsive={responsive}
      >
        {loading
          ? [...Array(10).fill(0)].map((item, index) => (
              <MemberAvatar loading={loading} key={index} />
            ))
          : data.map((item) => (
              <MemberAvatar
                data={item}
                key={item.id}
                withTitle={withTitle}
                withClassYear={withClassYear}
              />
            ))}
      </Carousel>
    </Box>
  );
};
