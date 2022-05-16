import { Card, AspectRatio, Text, Button } from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";

export interface AlumniCardProps {
  title: string;
  image: string;
}

export default function AlumniCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <Card
      sx={(theme) => ({ backgroundColor: theme.white, width: 264 })}
      p={15}
      shadow="md"
      radius="xs"
      mx="auto"
    >
      <Card.Section mb={20}>
        <AspectRatio ratio={264 / 196}>
          <Image
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
      <Button
        fullWidth
        color="dark"
        radius="xs"
        size="lg"
        component={NextLink}
        href="/"
      >
        Lihat Profil
      </Button>
    </Card>
  );
}
