import {
  Center,
  Text,
  Group,
  Stack,
  Title,
  Grid,
  SimpleGrid,
  AspectRatio,
  createStyles,
} from "@mantine/core";
import NewsCarousel from "./NewsCarousel";
import NewsCard from "./NewsCard";
import Image from "next/image";
import PriceList from "./PriceList";
import SectionTitleWithLink from "./SectionTitleWithLink";

const useStyles = createStyles((theme) => ({
  grid: {
    width: "100%",
  },
  banner: {
    background: theme.white,
    borderRadius: theme.radius.md,
  },
  imageContainer: {
    width: "72px",
    height: "72px",
    borderRadius: theme.radius.md,
    position: "relative",
    overflow: "hidden",
  },
}));

export default function News() {
  const { classes } = useStyles();
  return (
    <Stack mb={56}>
      <SectionTitleWithLink title="Berita Usaha Alumni" />
      <Grid className={classes.grid} gutter={24}>
        <Grid.Col span={8}>
          <Stack>
            <div>
              <NewsCarousel />
            </div>
            <SectionTitleWithLink title="Berita Pengembangan Alumni" href="/" />
            <SimpleGrid cols={2}>
              <NewsCard
                title="25% Penjualan Batu Bara Wajib ke Domestik, Ini Kata..."
                image="/news1.jpg"
                href="/"
              />
              <NewsCard
                title="25% Penjualan Batu Bara Wajib ke Domestik, Ini Kata..."
                image="/news2.jpg"
                href="/"
              />
              <NewsCard
                title="25% Penjualan Batu Bara Wajib ke Domestik, Ini Kata..."
                image="/news3.jpg"
                href="/"
              />
              <NewsCard
                title="25% Penjualan Batu Bara Wajib ke Domestik, Ini Kata..."
                image="/news4.jpg"
                href="/"
              />
            </SimpleGrid>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <AspectRatio ratio={1 / 1} className={classes.banner} mb={30}>
              <div>Sponsor banner</div>
            </AspectRatio>
            <Title mb={25} order={5}>
              Harga Acuan Batubara Mineral
            </Title>
            <PriceList mb={30} />
            <SectionTitleWithLink title="Kegiatan IKATA" href="/" />
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
  );
}

function ActivityItem({ title, image }: { title: string; image: string }) {
  return (
    <Group align="center" spacing={30}>
      <Center
        style={{
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
