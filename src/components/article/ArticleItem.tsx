import { Group, Box, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { TextLink } from "components/common";
import { formatTime } from "utils";

export interface ArticleItemProps {
  data: {
    title: string;
    date: string;
    description: string;
    href: string;
    image: string;
  };
}

export function ArticleItem({ data }: ArticleItemProps) {
  return (
    <Group
      align="flex-start"
      spacing={24}
      noWrap
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          minWidth: "35%",
          height: 241,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "100%",
          },
        })}
      >
        <Image src={data.image} layout="fill" objectFit="cover" />
      </Box>
      <Stack spacing={10}>
        <Text size="xl" weight={600} lineClamp={1} transform="capitalize">
          {data.title}
        </Text>
        <Text size="sm" weight={500} color="dimmed">
          {formatTime(data.date)}
        </Text>
        <Box>
          <Text>
            <Text
              weight={500}
              lineClamp={5}
              sx={{ lineHeight: 1.8 }}
              transform="capitalize"
            >
              {data.description}
            </Text>
            <TextLink href={data.href}>Selengkapnya</TextLink>
          </Text>
        </Box>
      </Stack>
    </Group>
  );
}
