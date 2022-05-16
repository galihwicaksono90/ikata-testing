import { Container, Box } from "@mantine/core";
import Image from "next/image";

interface Props {
  src: string;
}

export default function AdBanner({ src }: Props) {
  return (
    <Box style={{ position: "relative", height: 291, width: "100%" }}>
      <Container
        size={1128}
        sx={{ position: "relative", height: "100%", background: "tomato" }}
      >
        <Image src={src} layout="fill" objectFit="cover" />
      </Container>
    </Box>
  );
}

/*
 * export default function AdBanner({ src }: Props) {
 *   return (
 *     <Container fluid style={{ position: "relative", height: 291 }} mb={56}>
 *       <Image src={src} layout="fill" objectFit="cover" />
 *     </Container>
 *   );
 * } */
