import { AspectRatio, Text } from "@mantine/core";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import Image from "next/image";

export const ComingSoon = () => {
  return (
    <MainLayout>
      <Container
        sx={{
          height: 845,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        light
      >
        <AspectRatio
          sx={{ position: "relative", width: 415 }}
          ratio={415 / 276}
          mb={12}
        >
          <Image src="/comingSoon.svg" layout="fill" objectFit="cover" />
        </AspectRatio>
        <Text color="#c4c4c4" weight={700} sx={{ fontSize: "2rem" }} mb={10}>
          Coming Soon
        </Text>
        <Text color="#c4c4c4" weight={600} size="lg">
          Halaman ini sedang dalam tahap pengembangan
        </Text>
      </Container>
    </MainLayout>
  );
};
