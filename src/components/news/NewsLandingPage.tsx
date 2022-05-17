import {
  Box,
  Center,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  PriceList,
  SectionTitleWithLink,
  Container,
  ActivityItemList,
} from "components/common";
import { useGetNewsItemsQuery } from "generated/graphql";
import Image from "next/image";
import NewsCard from "./NewsCard";
import NewsCarousel from "./NewsCarousel";

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
];

export default function News() {
  const { data: news, isLoading } = useGetNewsItemsQuery({ limit: 4 });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Stack mb={56} sx={{ maxWidth: 1128 }}>
        <Grid gutter={24}>
          <Grid.Col lg={8} md={12}>
            <Title mb={25} order={5}>
              Harga Acuan Batubara Mineral
            </Title>
            <Stack>
              <Box sx={{ marginBottom: 50 }}>
                <NewsCarousel limit={4} />
              </Box>
              <SectionTitleWithLink
                title="Berita Pengembangan Alumni"
                href="/"
              />
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                {news.getNewsItems.map((item) => {
                  return (
                    <NewsCard
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
            <Stack spacing={0}>
              <Title mb={25} order={5}>
                Harga Acuan Batubara Mineral
              </Title>
              <PriceList mb={30} />
              <ActivityItemList data={data} title="Berita Alumni" />
              <ActivityItemList data={data} title="Kegiatan IKATA" />
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
