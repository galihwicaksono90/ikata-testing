import { Box, Overlay, Text } from "@mantine/core";
import { Container, EmblaCarousel } from "components/common";
import { useGetSlidersQuery } from "generated/graphql";
import { getSlidersDefaultParams } from "utils/defaultParams";
import Image from "next/image";

export function HeroImage() {
  const { data } = useGetSlidersQuery({ params: getSlidersDefaultParams });

  return (
    <Box sx={{ maxWidth: "100vw", position: "relative" }}>
      <EmblaCarousel withDots dotsPosition="inside" autoplay loop>
        {data?.getSliders.data.map((image) => (
          <Content src={image.photoPath} key={image.id} />
        ))}
      </EmblaCarousel>
      <Container
        sx={{
          position: "absolute",
          zIndex: 11,
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
      <Overlay opacity={0.5} color="black" zIndex={99} />
    </Box>
  );
}
