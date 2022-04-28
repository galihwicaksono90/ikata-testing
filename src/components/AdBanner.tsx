import { Container } from "@mantine/core";
import Image from "next/image";

interface Props {
  src: string;
}

export default function AdBanner({ src }: Props) {
  return (
    <Container fluid style={{ position: "relative", height: 291 }} mb={56}>
      <Image src={src} layout="fill" objectFit="cover" />
    </Container>
  );
}
