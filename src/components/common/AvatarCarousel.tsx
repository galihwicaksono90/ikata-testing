import { useState, useEffect } from "react";
import { MemberAvatarProps, MemberAvatar } from "components/common";
import { Box } from "@mantine/core";
import { Carousel } from "components/common";
import { Member } from "generated/graphql";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

interface Props {
  data: MemberAvatarProps[];
  rows?: number;
  slidesToShow?: number;
}

export const AvatarCarousel = ({ data, rows = 2, slidesToShow = 4 }: Props) => {
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
      >
        {data.map((item) => (
          <MemberAvatar {...item} key={item.id} />
        ))}
      </Carousel>
    </Box>
  );
};
