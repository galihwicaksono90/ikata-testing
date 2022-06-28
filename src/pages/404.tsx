import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import { Box, AspectRatio, Text } from "@mantine/core";
import Image from "next/image";

export default function NotFound() {
  return (
    <MainLayout>
      <Container
        sx={{
          height: 845,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 50,
        }}
        light
      >
        <AspectRatio
          sx={{ position: "relative", width: 415 }}
          ratio={415 / 276}
        >
          <Image src="/notFoundd.svg" layout="fill" objectFit="cover" />
        </AspectRatio>
        <Text color="#c4c4c4" weight={700} sx={{ fontSize: "2rem" }}>
          Page Not Found
        </Text>
      </Container>
    </MainLayout>
  );
}
