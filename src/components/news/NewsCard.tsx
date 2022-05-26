import Image from "next/image";
import { Text, Badge, Group, Card, AspectRatio } from "@mantine/core";
import { NextLink } from "@mantine/next";

interface Props {
  title: string;
  image: string;
  tags?: string[];
  href?: string;
  bold?: boolean;
  align?: "left" | "right" | "center" | "justify";
}

export function NewsCard({ title, image, tags, href, bold, align }: Props) {
  return (
    <Card
      radius="md"
      p={20}
      sx={(theme) => ({
        background: "rgba(255,255,255,0.15)",
        transition: "ease-in-out 500 background",
        cursor: "pointer",
        boxShadow: theme.shadows.md,
        "&:hover": {
          backgroundColor: theme.fn.lighten("rgba(255,255,255,0.15)", 0.2),
        },
        color: theme.white,
      })}
      component={NextLink}
      href={href}
    >
      <Card.Section mb={20}>
        <AspectRatio ratio={744 / 433} sx={{ position: "relative" }}>
          <Image
            alt=""
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
            <Badge
              key={index}
              size="lg"
              radius="md"
              variant="gradient"
              gradient={{
                from: "#feb240",
                to: "#fe9040",
                deg: 94,
              }}
            >
              {tag}
            </Badge>
          ))}
        </Group>
      ) : null}
      <Text
        weight={bold ? "bold" : null}
        size={bold ? "lg" : "md"}
        align={align}
        lineClamp={2}
      >
        {title}
      </Text>
    </Card>
  );
}
