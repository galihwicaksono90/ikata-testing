import {
  createStyles,
  Container,
  Card,
  Box,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyles } from "theme";
import Carousel from "components/Carousel";

import Image from "next/image";
import { useEffect, useState } from "react";

const mercs = [
  {
    image: "/merch1.png",
    title: "Kaos ikata friendship",
  },
  {
    image: "/merch2.png",
    title: "Kaos ikata adventure (kaos lengan panjang)",
  },
  {
    image: "/merch3.png",
    title: "Ikata golf shirt",
  },
  {
    image: "/merch4.png",
    title: "Mug Ikata",
  },
  {
    image: "/merch5.png",
    title: "Payung ikata golf",
  },
];

export default function MerchandiseCarousel() {
  const { classes } = useStyles();
  const [data, setData] = useState<typeof mercs>(null);

  useEffect(() => {
    setData(mercs);
  }, []);

  return (
    <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
      <Container size={1128} pt={80} pb={50}>
        <Group position="apart" mb={58} align="baseline">
          <Title order={2} sx={(theme) => ({ color: theme.colors.dark })}>
            Merchandise
          </Title>
          <Text
            component={NextLink}
            variant="link"
            href="/merchandise"
            color="dark"
            weight="bold"
          >
            Lihat Semua
          </Text>
        </Group>
        <Box sx={{ height: "466px" }}>
          <Carousel slidesToShow={4} autoplay>
            {data?.map((merc, index) => (
              <MerchandiseCard
                image={merc.image}
                title={merc.title}
                key={index}
              />
            ))}
          </Carousel>
          {/* <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
            }}
            slidesPerView={1}
            loop={true}
            className={classes.carousel}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              850: {
                slidesPerView: 3,
              },
              1128: {
                slidesPerView: 4,
              },
            }}
          >
            {data?.map((merc, index) => (
              <SwiperSlide key={index}>
                <MerchandiseCard image={merc.image} title={merc.title} />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </Box>
      </Container>
    </Box>
  );
}

function MerchandiseCard({ image, title }: { image: string; title: string }) {
  return (
    <Card
      mx="auto"
      sx={(theme) => ({
        width: 264,
        background: theme.white,
        border: `1px solid #EAEAEA`,
        height: 442,
        display: "flex",
        flexDirection: "column",
      })}
      withBorder
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          height: 224,
          borderRadius: theme.radius.md,
          padding: 20,
          overflow: "hidden",
          marginBottom: 15,
        })}
      >
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Title order={6}>{title}</Title>
      <Box sx={{ marginTop: "auto" }}>
        <Text mb={20} color="dimmed" weight="bold">
          Rp 135.000,-
        </Text>
        <Button size="lg" fullWidth>
          Lihat Detail
        </Button>
      </Box>
    </Card>
  );
}
