import React from "react";
import { Box, Overlay, Title, Text } from "@mantine/core";
import Image from "next/image";
import { Carousel, Container } from "components/common";
import { useGetHeroImagesQuery } from "generated/graphql";

export default function HeroImage() {
  const { data: images, isLoading } = useGetHeroImagesQuery({ limit: 4 });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <Box sx={{ height: "679px" }}>
      <Carousel dotsPosition="inside" dots slidesToShow={1}>
        {images?.getHeroImages.map((image) => (
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
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "100%",
          width: "1440px",
          zIndex: 1000,
          transform: "translate(-50%,-50%)",
        }}
      >
        <Container
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={(theme) => ({
              position: "absolute",
              top: "70%",
              left: "75%",
              textAlign: "center",
              transform: "translate(-50%,-50%)",
              width: "fit-content",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                fontSize: "12px",
                left: "60%",
              },
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                left: "50%",
              },
            })}
          >
            <Text sx={{ fontSize: "2em" }} weight="bold">
              VIVA TAMBANG
            </Text>
            <Text sx={{ fontSize: "2em" }} weight="bold">
              MANTAP SKALEEE
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: "3.4375em",
                color: theme.primaryColor,
              })}
              weight="bold"
            >
              IKATA TANGGUH
            </Text>
          </Box>
        </Container>
      </Box>
      <Overlay opacity={0.5} color="black" zIndex={999} />
    </Box>
  );
}
