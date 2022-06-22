import { Box } from "@mantine/core";
import { Container } from "components/common";
import Image from "next/image";

interface Props {
  src: string;
}

export function AdBanner({ src }: Props) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.colors.dark[8],
      })}
    >
      <Container sx={{ position: "relative", height: 291 }} size={1440}>
        <Image alt="" src={src} layout="fill" objectFit="cover" />
      </Container>
    </Box>
  );
}
