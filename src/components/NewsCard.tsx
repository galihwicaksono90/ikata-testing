import Image from "next/image";
import {
  createStyles,
  Text,
  Badge,
  Group,
  Card,
  Stack,
  AspectRatio,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
/* import Link from "next/link"; */

interface Props {
  title: string;
  image: string;
  tags?: string[];
  href?: string;
}

export default function NewsCard({ title, image, tags, href }: Props) {
  return (
    <Card
      radius="md"
      p={20}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[9],
        transition: "ease-in-out 500 background",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.fn.lighten(theme.colors.gray[9], 0.1),
        },
      })}
      component={NextLink}
      href={href}
    >
      <Card.Section mb={20}>
        <AspectRatio ratio={744 / 433}>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </AspectRatio>
      </Card.Section>
      {tags ? (
        <Group mb={20}>
          {tags.map((tag, index) => (
            <Badge key={index} size="lg">
              {tag}
            </Badge>
          ))}
        </Group>
      ) : null}
      <Text weight={600} size="lg" lineClamp={2}>
        {title}
      </Text>
    </Card>
  );
}
