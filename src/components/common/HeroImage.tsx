import { Box, Overlay, Text } from "@mantine/core";
import { Carousel, Container } from "components/common";
import { useGetHeroImagesQuery } from "generated/mockGraphql";
import Image from "next/image";
import React from "react";

export function HeroImage() {
  const { data: images, isLoading } = useGetHeroImagesQuery({ limit: 5 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ maxWidth: "100vw", position: "relative" }}>
      <Carousel dotsPosition="inside" dots slidesToShow={1} autoplay>
        {images?.getHeroImages.map((image) => (
          <Content src={image.image} key={image.id} />
        ))}
      </Carousel>
      <Container
        sx={{
          position: "absolute",
          zIndex: 1000,
          width: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            width: "fit-content",
          }}
        >
          <Text sx={{ fontSize: "2.5rem", fontWeight: 500 }}>VIVA TAMBANG</Text>
          <Text sx={{ fontSize: "2.5rem", fontWeight: 500 }}>
            MANTAP SKALEEE
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: "3.875em",
              color: theme.colors.orange[0],
              fontWeight: 700,
            })}
          >
            IKATA TANGGUH
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

function Content({ src }: { src: string }) {
  return (
    <Box
      sx={{
        height: "747px",
        position: "relative",
      }}
    >
      <Image src={src} alt="" priority layout="fill" objectFit="cover" />
      <Overlay opacity={0.5} color="black" zIndex={999} />
    </Box>
  );
}
