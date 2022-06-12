import { Text, Title, Stack, Grid, Badge, Group } from "@mantine/core";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import { api, News } from "generated/mockGraphql";
import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "redux/store";
import { formatTime } from "utils/time";

interface Props {
  news: News;
}

export default function NewsContent({ news }: Props) {
  const { title, author, createdAt, tags } = news;
  return (
    <MainLayout>
      <Container>
        <Grid>
          <Grid.Col lg={8} md={12}>
            <Stack align="center" spacing={5}>
              <Title order={5} align="center">
                {title}
              </Title>
              <Text size="sm" color="dimmed">
                {author}
              </Text>
              <Text size="xs" color="dimmed">
                {formatTime(createdAt)}
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col lg={8} md={12}>
            <Group>
              {tags.map((tag, index) => (
                <Badge
                  size="lg"
                  radius="md"
                  variant="gradient"
                  gradient={{
                    from: "#feb240",
                    to: "#fe9040",
                    deg: 94,
                  }}
                  key={index}
                >
                  {tag}
                </Badge>
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const news = await store.dispatch(
        api.endpoints.GetNews.initiate({ id: Number(params.id) })
      );
      return {
        props: { news: news.data.getNews },
      };
    }
);
