import { Container, Box } from "@mantine/core";
import Image from "next/image";

interface Props {
  src: string;
}

export function AdBanner({ src }: Props) {
  return (
    <Box style={{ position: "relative", height: 291, width: "100%" }}>
      <Container size={1128} sx={{ position: "relative", height: "100%" }}>
        <Image alt="" src={src} layout="fill" objectFit="cover" />
      </Container>
    </Box>
  );
}
