import {
  Box,
  Button,
  Container,
  Text,
  Title,
  Card,
  AspectRatio,
  Group,
} from "@mantine/core";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { useStyles } from "theme";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const items = [
  {
    title: "Menara Merah Putih Mining Contractor",
    image: "/alumni1.png",
  },
  {
    title: "Dafam Fortuna Seturan Yogyakarta",
    image: "/alumni2.png",
  },
  {
    title: "Kedai Kopi (Komunitas Tambang Indonesia)",
    image: "/alumni3.png",
  },
];

export default function Alumni() {
  const { classes } = useStyles();
  return (
    <div style={{ width: "100%", background: "white" }}>
      <Container size={1128} pt={80} pb={50}>
        <Box
          mb={30}
          sx={(theme) => ({
            display: "flex",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Title
            mt={30}
            order={2}
            sx={(theme) => ({
              fontWeight: 700,
              color: theme.colors.dark,
              "& span": { color: theme.primaryColor },
            })}
          >
            <span>Bisnis</span> Alumni <br />
            Tambang
          </Title>
          <Box sx={{ flexGrow: 1, height: 400 }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
              }}
              slidesPerView={1}
              className={classes.carousel}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                850: {
                  slidesPerView: 3,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <AlumniCard
                    key={index}
                    title={item.title}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
        <Group position="right">
          <Text
            color="dark"
            component={NextLink}
            href="/"
            variant="link"
            weight="bold"
          >
            Lihat Semua
          </Text>
        </Group>
      </Container>
    </div>
  );
}

function AlumniCard({ title, image }: { title: string; image: string }) {
  return (
    <Card
      sx={(theme) => ({ backgroundColor: theme.white, width: 264 })}
      p={15}
      shadow="md"
      radius="xs"
      mx="auto"
    >
      <Card.Section mb={20}>
        <AspectRatio ratio={264 / 196}>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </AspectRatio>
      </Card.Section>
      <Text color="dark" mb={30} size="md" weight="bold">
        {title}
      </Text>
      <Button
        fullWidth
        color="dark"
        radius="xs"
        size="lg"
        component={NextLink}
        href="/"
      >
        Lihat Profil
      </Button>
    </Card>
  );
}
