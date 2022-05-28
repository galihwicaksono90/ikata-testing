import { Box, Grid, SimpleGrid, Stack } from "@mantine/core";
import {
  ActivityItemList,
  Container,
  PriceList,
  SectionTitleWithLink,
} from "components/common";
import { NewsCard, NewsCarousel } from "components/news";
import { useGetNewsItemsQuery } from "generated/graphql";

const data = [
  {
    image: "/news1.jpg",
    title: "Bakti Sosial",
  },
  {
    image: "/news2.jpg",
    title: "Ikata Golf",
  },
  {
    image: "/news3.jpg",
    title: "Munas Ikata",
  },
  {
    image: "/news5.jpg",
    title: "Ikata Games",
  },
  {
    image: "/news1.jpg",
    title: "Bakti Sosial",
  },
  {
    image: "/news2.jpg",
    title: "Ikata Golf",
  },
  {
    image: "/news3.jpg",
    title: "Munas Ikata",
  },
  {
    image: "/news5.jpg",
    title: "Ikata Games",
  },
];

export function NewsLandingPage() {
  const { data: news, isLoading } = useGetNewsItemsQuery({ limit: 4 });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Grid gutter={30}>
        <Grid.Col lg={8} md={12}>
          <SectionTitleWithLink title="Berita Usaha Alumni" />
          <Stack>
            <Box sx={{ marginBottom: 50 }}>
              <NewsCarousel limit={4} />
            </Box>
            <SectionTitleWithLink
              title="Berita Pengembangan Alumni"
              href="/news"
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              {news?.getNewsItems.map((item) => {
                return (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    href="/"
                    align="center"
                  />
                );
              })}
            </SimpleGrid>
          </Stack>
        </Grid.Col>
        <Grid.Col lg={4} md={12}>
          <Stack spacing={30}>
            <div>
              <SectionTitleWithLink title="Harga Acuan Batubara Mineral" />
              <PriceList />
            </div>
            <Grid gutter={30}>
              <Grid.Col lg={12} md={6} sm={6} xs={12}>
                <ActivityItemList
                  data={data}
                  title="Kegiatan IKATA"
                  href="news"
                />
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
