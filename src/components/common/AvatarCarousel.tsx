import { Box } from "@mantine/core";
import { Carousel, CarouselBreakpoint, MemberAvatar } from "components/common";
import { Member } from "generated/mockGraphql";

interface Props {
  data: Member[];
  rows?: number;
  slidesToShow?: number;
  responsive?: CarouselBreakpoint[];
  loading?: boolean;
  withTitle?: boolean;
  withClassYear?: boolean;
}

export const AvatarCarousel = ({
  data,
  rows = 2,
  slidesToShow = 4,
  responsive,
  loading,
  withClassYear,
  withTitle,
}: Props) => {
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
