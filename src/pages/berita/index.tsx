import { Grid, Stack } from "@mantine/core";
import { ActivityItemList, Container, PriceList } from "components/common";
import { MainLayout } from "components/layouts";
import { useGetNewsItemsQuery } from "generated/mockGraphql";

export default function News() {
  const { data: news, isLoading } = useGetNewsItemsQuery({ limit: 6 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <Container>
        <Grid gutter={24}>
          <Grid.Col lg={8} md={12}>
            <Stack spacing={60}>
              {/* <NewsCarousel limit={4} /> */}
              {/* <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                {news.getNewsItems.map((item) => {
                  return (
                    <NewsCard
                      title={item.title}
                      //image={item.image}
                      //href="/"
                      //align="center"
                      key={item.id}
                    />
                  );
                })}
              </SimpleGrid> */}
            </Stack>
          </Grid.Col>
          <Grid.Col lg={4} md={12}>
            <Stack>
              <PriceList />
              <ActivityItemList
                data={[{ image: "/news1.jpg", title: "Mantap" }]}
                title="Berita Lain"
                href="/"
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}
