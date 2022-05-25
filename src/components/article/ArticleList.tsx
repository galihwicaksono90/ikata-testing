import { Box, Stack, Text, Skeleton, AspectRatio } from "@mantine/core";
import Image from "next/image";
import { formatTime } from "utils/time";
import { useGetArticlesQuery, ArticleType } from "generated/graphql";
import { NextLink } from "@mantine/next";

interface ArticleItemsProps {
  type: ArticleType;
  limit?: number;
}

export default function ArticleList({ type, limit }: ArticleItemsProps) {
  const { data: articles, isLoading } = useGetArticlesQuery({
    limit,
    type,
  });

  // show loading skeleton if loading
  if (isLoading) {
    return (
      <Stack spacing={20} mt={20}>
        {[...new Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              display: "flex",
              gap: 20,

              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                flexDirection: "column",
              },
            })}
          >
            <Skeleton width="100%" height={205} mb="xl" />
            <div style={{ width: "100%" }}>
              <Skeleton
                visible={isLoading}
                height={20}
                radius="lg"
                mb="md"
                color="red"
              />
              <Skeleton
                visible={isLoading}
                height={20}
                radius="lg"
                mb="md"
                width="50%"
              />
              <Skeleton
                visible={isLoading}
                height={5}
                radius="lg"
                mb="md"
                width="25%"
              />
              <Skeleton visible={isLoading} height={8} radius="lg" mb="md" />
              <Skeleton visible={isLoading} height={8} radius="lg" mb="md" />
              <Skeleton
                visible={isLoading}
                height={8}
                radius="lg"
                mb="md"
                width="25%"
              />
            </div>
          </Box>
        ))}
      </Stack>
    );
  }

  return (
    <Stack spacing={20} mt={20}>
      {articles?.getArticles.map((article) => (
        <Box
          key={article.id}
          sx={(theme) => ({
            display: "flex",
            gap: 20,

            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "12px",
              height: 205,
              position: "relative",
            }}
          >
            <Image alt="" src={article.image} layout="fill" objectFit="cover" />
          </Box>
          <Stack spacing={6} sx={{ width: "100%" }}>
            <Text
              weight="bold"
              size="xl"
              lineClamp={2}
              component={NextLink}
              href="/about"
            >
              {article.title}
            </Text>
            <Text size="sm" weight={500} color="dimmed">
              {formatTime(article.postedAt)}
            </Text>
            <Text lineClamp={3} weight={500}>
              {article.description}
            </Text>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
