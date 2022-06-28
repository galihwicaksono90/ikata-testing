import { Box, BoxProps, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { NewsType } from "generated/graphql";
import Image from "next/image";

interface NewsCardProps extends BoxProps<"div"> {
  height?: number | string;
  withTags?: boolean;
  tagAlign?: "center" | "right" | "left";
  data: NewsType;
}

export function NewsCard({
  height = "392px",
  data,
  withTags,
  tagAlign,
  sx,
  ...rest
}: NewsCardProps) {
  return (
    <Box
      sx={(theme) => ({
        ...sx,
        height: 392,
        position: "relative",
        "& img": {
          transition: "transform ease 300ms",
        },
        "& .mantine-Text-root": {
          transition: "color ease 300ms",
        },
        "&:hover": {
          "& .mantine-Text-root": {
            color: theme.colors.orange[0],
          },
          "& img": {
            transform: "scale(1.08)",
          },
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          height: 280,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          height: 200,
        },
      })}
      {...rest}
    >
      <NextLink href={`/berita/${data.id}`}>
        <Box
          sx={(theme) => ({
            height: 129,
            background: theme.other.darkGradient,
            zIndex: 40,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 16px 13px 16px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            pointerEvents: "none",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              height: 100,
            },
          })}
        >
          <Text
            size="lg"
            sx={(theme) => ({
              lineHeight: "32.4px",
              color: theme.white,
              "&:hover": {
                color: theme.colors.orange[0],
              },
            })}
            weight={600}
            lineClamp={2}
          >
            {data.title}
          </Text>
          {withTags ? (
            <Text
              sx={{ fontSize: "0.625rem", width: "100%" }}
              color="orange"
              weight={500}
              align={tagAlign}
            >
              &#9679; Berita
            </Text>
          ) : null}
        </Box>
        <Box
          sx={(theme) => ({
            position: "relative",
            ...theme.fn.cover(),
          })}
        >
          <Image
            alt=""
            src={data.thumbnailPath}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </NextLink>
    </Box>
  );
}
