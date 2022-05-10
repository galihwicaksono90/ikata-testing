import { useEffect, useState } from "react";
import {
  ActionIcon,
  Avatar,
  Paper,
  Title,
  Container,
  Text,
  Box,
  Stack,
  Group,
  Grid,
  SimpleGrid,
  Button,
  createStyles,
} from "@mantine/core";
import { MainLayout } from "components/layouts";
import Image from "next/image";
import { Navigation, Swiper as SwiperProps } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";

import "swiper/css";
import "swiper/css/navigation";

export default function AboutPage() {
  return (
    <MainLayout>
      <Box>
        <Container size={1128} pt={80} pb={80}>
          <SimpleGrid cols={2} spacing={103}>
            <Stack>
              <Title order={1}>Tentang IKATA</Title>
              <Text size="sm" sx={{ lineHeight: "1.5rem" }}>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure
              </Text>
            </Stack>
            <Grid p={20} m={0}>
              <Grid.Col span={6}>
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image src="/mining1.jpg" layout="fill" objectFit="cover" />
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image src="/mining1.jpg" layout="fill" objectFit="cover" />
                </Box>
              </Grid.Col>
              <Grid.Col span={12}>
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image src="/mining1.jpg" layout="fill" objectFit="cover" />
                </Box>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Box>
      <AboutCarousel />
    </MainLayout>
  );
}

function AboutCarousel() {
  const [swiper, setSwiper] = useState<SwiperProps>(null);

  const prev = () => {
    swiper.slidePrev();
  };

  const next = () => {
    swiper.slideNext();
  };

  return (
    <Box sx={(theme) => ({ width: "100%", background: theme.colors.dark[2] })}>
      <Container size={1128} pt={80} pb={80}>
        <Stack align="center">
          <Title mb={14}>Ketua IKATA</Title>
          <Text mb={40} size="sm" weight="bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </Text>
          <Pagination
            numberOfSlides={swiper?.slides?.length}
            currentSlide={swiper?.realIndex}
          />
          <h1>{swiper?.realIndex}</h1>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <ActionIcon onClick={prev} radius="xl" variant="filled" size="xl">
              <ArrowLeft />
            </ActionIcon>
            <Swiper
              spaceBetween={50}
              loop={true}
              modules={[Navigation]}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              <SwiperSlide>
                <TestimonialCard name="Alino Budi Raharjo" year="0" />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Alino Budi Raharjo" year="1" />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Alino Budi Raharjo" year="2" />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Alino Budi Raharjo" year="3" />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard name="Alino Budi Raharjo" year="4" />
              </SwiperSlide>
            </Swiper>
            <ActionIcon onClick={next} radius="xl" variant="filled" size="xl">
              <ArrowRight />
            </ActionIcon>
          </Box>
        </Stack>
        <Button
          onClick={() =>
            console.log({
              realIndex: swiper.realIndex,
              activeIndex: swiper.activeIndex,
            })
          }
        >
          Active Index
        </Button>
      </Container>
    </Box>
  );
}

function TestimonialCard({ name, year }: { name: string; year: string }) {
  return (
    <Paper
      sx={(theme) => ({
        background: theme.white,
        padding: "62px 32px 40px 62px",
      })}
    >
      <Group noWrap>
        <Stack>
          <Text size="lg">{name}</Text>
          <Text color="dimmed" mb={30} size="sm">
            {year}
          </Text>
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Stack>
        <Avatar size={250} radius="xl">
          ABR
        </Avatar>
      </Group>
    </Paper>
  );
}

const Pagination = ({
  numberOfSlides,
  currentSlide,
}: {
  numberOfSlides?: number;
  currentSlide?: number;
}) => {
  const [testing, setTesting] = useState(0);

  useEffect(() => {
    if (currentSlide) {
      setTesting(currentSlide);
    }
  }, [currentSlide]);

  if (!numberOfSlides || numberOfSlides < 3) return null;

  console.log({ numberOfSlides });
  return (
    <Group>
      {testing}
      {[...Array(numberOfSlides - 2)].fill(0).map((_, index: number) => (
        <Box
          sx={(theme) => ({
            height: 5,
            width: 5,
            background:
              index === testing ? theme.primaryColor : theme.colors.gray,
          })}
          key={index}
        />
      ))}
    </Group>
  );
};
