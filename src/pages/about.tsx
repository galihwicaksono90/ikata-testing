import {
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
} from "@mantine/core";
import Layout from "components/Layout";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function AboutPage() {
  return (
    <Layout>
      <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
        <Container size={1128} pt={80} pb={80}>
          <SimpleGrid cols={2}>
            <Stack>
              <Title order={1} sx={(theme) => ({ color: theme.colors.dark })}>
                Tentang IKATA
              </Title>
              <Text color="dark" size="sm">
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
    </Layout>
  );
}

function AboutCarousel() {
  return (
    <Box sx={(theme) => ({ width: "100%", background: theme.colors.dark[2] })}>
      <Container size={1128} pt={80} pb={80}>
        <Stack align="center">
          <Title sx={(theme) => ({ color: theme.colors.dark })} mb={14}>
            Ketua IKATA
          </Title>
          <Text color="dark" mb={40}>
            Lorem Ipsum Dolor Sit Amet
          </Text>

          <Box sx={{ width: "90%", margin: "auto" }}>
            <Swiper spaceBetween={50} loop={true} modules={[Navigation]}>
              <SwiperButtonPrev />
              <div>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              </div>
              <SwiperButtonNext />
            </Swiper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function TestimonialCard() {
  return (
    <Paper
      sx={(theme) => ({
        background: theme.white,
        padding: "62px 32px 40px 62px",
      })}
    >
      <Group noWrap>
        <Stack>
          <Text color="dark" sx={{ fontSize: "22px" }}>
            Alino Budi Raharjo
          </Text>
          <Text color="#898989" mb={40}>
            2015-2016
          </Text>
          <Text color="dark">
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
          ALB
        </Avatar>
      </Group>
    </Paper>
  );
}

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slideNext()}>Next</Button>;
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <Button onClick={() => swiper.slidePrev()}>Prev</Button>;
};
