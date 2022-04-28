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

import Image from "next/image";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colors.dark,
    fontWeight: "bold",
    transition: "ease-in-out 200ms color",
    ":hover": {
      color: theme.fn.lighten(theme.colors.dark[8], 0.2),
      textDecoration: "underline",
    },
  },
}));

export default function MerchandiseCarousel() {
  const { classes } = useStyles();
  return (
    <div style={{ width: "100%", background: "white" }}>
      <Container size={1135} pt={80} pb={50}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          loop={true}
          style={{ background: "tomato" }}
        >
          {mercs.map((merc) => (
            <SwiperSlide>
              <MerchandiseCard image={merc.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
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
    <Card sx={(theme) => ({ width: 264, background: theme.white })} withBorder>
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
      <Title order={6} mb={40}>
        Hello world
      </Title>
      <Text mb={20}>Rp 135.000,-</Text>
      <Button size="lg" fullWidth>
        Lihat Detail
      </Button>
    </Card>
  );
}
