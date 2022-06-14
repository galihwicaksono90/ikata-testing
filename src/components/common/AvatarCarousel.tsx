import { Box } from "@mantine/core";
import {
  Carousel,
  CarouselBreakpoint,
  MemberAvatar,
  MemberAvatarProps,
} from "components/common";
import { useEffect, useState } from "react";

interface Props {
  data: MemberAvatarProps[];
  rows?: number;
  slidesToShow?: number;
  responsive?: CarouselBreakpoint[];
}

export const AvatarCarousel = ({
  data,
  rows = 2,
  slidesToShow = 4,
  responsive,
}: Props) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    if (data) {
      setAvatars(data);
      return;
    }
    setAvatars([]);
  }, [data]);

  if (!avatars) {
    return null;
  }

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
        {data.map((item) => (
          <MemberAvatar {...item} key={item.id} />
        ))}
      </Carousel>
    </Box>
  );
};
