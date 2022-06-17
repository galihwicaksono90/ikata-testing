import { Box, BoxProps, Text } from "@mantine/core";
import { TextLink } from "components/common";
import { News } from "generated/mockGraphql";
import Image from "next/image";

interface NewsCardProps extends BoxProps<"div"> {
  height?: number | string;
  withTags?: boolean;
  tagAlign?: "center" | "right" | "left";
  data: News;
}

export function NewsCard({
  height = "392px",
  data,
  sx,
  withTags,
  tagAlign,
  ...rest
}: NewsCardProps) {
  return (
    <Box
      sx={(theme) => ({
        height: 392,
        position: "relative",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          height: 280,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          height: 200,
        },
        ...sx,
      })}
      {...rest}
    >
      <Box
        sx={(theme) => ({
          height: 129,
          background: theme.other.darkGradient,
          zIndex: 2000,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 16px 13px 16px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 100,
          },
        })}
      >
        <TextLink
          size="lg"
          sx={{ lineHeight: "32.4px" }}
          weight={600}
          lineClamp={2}
          href="/"
          type="white"
        >
          {data.title}
        </TextLink>
        {withTags ? (
          <Text
            sx={{ fontSize: "0.625rem", width: "100%" }}
            color="orange"
            weight={500}
            align={tagAlign}
          >
            &#9679; Berita Umum
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
          src={data.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Box>
  );
}
