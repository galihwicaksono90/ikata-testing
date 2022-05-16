import React from "react";
import { Box, Overlay } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "components/common";
import { useGetHeroImagesQuery } from "generated/graphql";

export default function HeroImage() {
  const { data: images, isLoading } = useGetHeroImagesQuery({ limit: 4 });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <Box sx={{ height: "679px" }}>
      <Carousel dotsPosition="inside" dots slidesToShow={1} autoplay>
        {images.getHeroImages.map((image) => (
          <Content src={image.image} key={image.id} />
        ))}
      </Carousel>
    </Box>
  );
}

function Content({ src }: { src: string }) {
  return (
    <Box
      sx={{
        height: "679px",
        width: "100vw",
        position: "relative",
      }}
    >
      <Image src={src} layout="fill" objectFit="cover" priority />
      <Overlay opacity={0.2} color="black" />
    </Box>
  );
}
