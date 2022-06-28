import { Group, Box, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { TextLink } from "components/common";
import { Time } from "utils";
import { NextLink } from "@mantine/next";
import { ActivitiesType, ArticlesType } from "generated/graphql";

export interface ArticleItemProps {
  data: Partial<ActivitiesType> | Partial<ArticlesType>;
  href: string;
}

export function ArticleItem({ data, href }: ArticleItemProps) {
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
        component={NextLink}
        href={href}
      >
        <Image
          src={data.thumbnailPath}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </Box>
      <Stack spacing={10}>
        <TextLink
          size="xl"
          weight={600}
          lineClamp={1}
          transform="capitalize"
          href={href}
          type="white"
        >
          {data.title}
        </TextLink>
        <Text size="sm" weight={500} color="dimmed">
          {Time.formatTime(data.publishedDate)}
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
            <TextLink href={href}>Selengkapnya</TextLink>
          </Text>
        </Box>
      </Stack>
    </Group>
  );
}
