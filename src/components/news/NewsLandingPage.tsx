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
import { PriceList, SectionTitleWithLink, Container } from "components/common";
import { useGetNewsItemsQuery } from "generated/graphql";
import Image from "next/image";
import NewsCard from "./NewsCard";
import NewsCarousel from "./NewsCarousel";

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
              <SectionTitleWithLink title="Kegiatan IKATA" href="/" />
              <Stack mb={30}>
                <ActivityItem title="Bakti Sosial" image="/news1.jpg" />
                <ActivityItem title="IKATA Golf" image="/news2.jpg" />
                <ActivityItem title="Munas Ikata" image="/news3.jpg" />
                <ActivityItem title="IKATA Games" image="/news4.jpg" />
              </Stack>
              <SectionTitleWithLink title="Berita Alumni" href="/" />
              <Stack>
                <ActivityItem title="Bakti Sosial" image="/news1.jpg" />
                <ActivityItem title="IKATA Golf" image="/news2.jpg" />
                <ActivityItem title="Munas Ikata" image="/news3.jpg" />
                <ActivityItem title="IKATA Games" image="/news4.jpg" />
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}

function ActivityItem({ title, image }: { title: string; image: string }) {
  return (
    <Group align="center" spacing={30}>
      <Center
        sx={{
          width: 72,
          height: 72,
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src={image} layout="fill" objectFit="cover" />
      </Center>
      <Text weight="bold" size="lg">
        {title}
      </Text>
    </Group>
  );
}
