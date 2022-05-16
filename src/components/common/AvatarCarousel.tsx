import { useState, useEffect } from "react";
import { MemberAvatarProps, MemberAvatar } from "components/common";
import { Box } from "@mantine/core";
import { Carousel } from "components/common";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

interface Props {
  data: MemberAvatarProps[];
  rows?: number;
  slidesToShow?: number;
}

const AvatarCarousel = ({ data, rows = 2, slidesToShow = 4 }: Props) => {
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
      <Carousel dotType="numbers" rows={rows} slidesToShow={slidesToShow} dots>
        {avatars.map((item, index) => (
          <MemberAvatar name={item.name} title={item.title} key={index} />
        ))}
      </Carousel>
    </Box>
  );
};

export default AvatarCarousel;
