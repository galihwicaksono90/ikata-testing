import { Card, AspectRatio, Text } from "@mantine/core";
import { GradientButton } from "components/common";
import Image from "next/image";

export interface AlumniCardProps {
  title: string;
  image: string;
}

export function AlumniCard({ title, image }: { title: string; image: string }) {
  return (
    <Card
      sx={(theme) => ({ backgroundColor: theme.white, width: 264 })}
      p={15}
      shadow="lg"
      radius="xs"
      mx="auto"
    >
      <Card.Section mb={20}>
        <AspectRatio ratio={264 / 196}>
          <Image
            alt=""
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </AspectRatio>
      </Card.Section>
      <Text color="dark" mb={30} size="md" weight="bold">
        {title}
      </Text>
      <GradientButton fullWidth href="/alumni">
        Lihat Profil
      </GradientButton>
    </Card>
  );
}
