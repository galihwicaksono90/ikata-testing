import {
  createStyles,
  Container,
  Card,
  Box,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyles } from "theme";

import Image from "next/image";

export default function MerchandiseCarousel() {
  const { classes } = useStyles();
  return (
    <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
      <Container size={1135} pt={80} pb={50} sx={{ height: 620 }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          loop={true}
          className={classes.carousel}
        >
          {mercs.map((merc, index) => (
            <SwiperSlide key={index}>
              <MerchandiseCard image={merc.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

const mercs = [
  {
    image: "/merch1.png",
  },
  {
    image: "/merch2.png",
  },
  {
    image: "/merch3.png",
  },
  {
    image: "/merch4.png",
  },
  {
    image: "/merch5.png",
  },
];

function MerchandiseCard({ image }: { image: string }) {
  return (
    <Card
      sx={(theme) => ({
        width: 264,
        background: theme.white,
        border: `1px solid #EAEAEA`,
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
      <Title order={6} mb={40} sx={(theme) => ({ color: theme.colors.dark })}>
        Hello world
      </Title>
      <Text mb={20} color="dark">
        Rp 135.000,-
      </Text>
      <Button size="lg" fullWidth color="dark">
        Lihat Detail
      </Button>
    </Card>
  );
}
