import { useEffect, useState } from "react";
import {
  Avatar,
  Paper,
  Title,
  Text,
  Box,
  Stack,
  Group,
  Grid,
  SimpleGrid,
} from "@mantine/core";
import { MainLayout } from "components/layouts";
import Image from "next/image";
import { Carousel, Container } from "components/common";

import "swiper/css";
import "swiper/css/navigation";

export default function AboutPage() {
  return (
    <MainLayout>
      <Box>
        <Container pt={80} pb={80}>
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
                  <Image
                    alt=""
                    src="/mining1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image
                    alt=""
                    src="/mining2.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={12}>
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image
                    alt=""
                    src="/mining1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        sx={(theme) => ({ width: "100%", background: theme.colors.dark[5] })}
      >
        <Container pt={80} pb={80}>
          <AboutCarousel />
        </Container>
      </Box>
    </MainLayout>
  );
}

const AboutCarousel = () => {
  return (
    <Carousel arrows dots={false}>
      <TestimonyCard name="ALINO BUDI RAHARJO" year="0" />
      <TestimonyCard name="ALINO BUDI RAHARJO" year="1" />
      <TestimonyCard name="ALINO BUDI RAHARJO" year="2" />
      <TestimonyCard name="ALINO BUDI RAHARJO" year="3" />
      <TestimonyCard name="ALINO BUDI RAHARJO" year="4" />
    </Carousel>
  );
};

function TestimonyCard({ name, year }: { name: string; year: string }) {
  return (
    <Paper
      sx={(theme) => ({
        padding: "62px 32px 40px 62px",
        color: theme.colors.dark,
        background: theme.white,
      })}
      mx={10}
    >
      <Group noWrap>
        <Stack>
          <Text size="lg">{name}</Text>
          <Text color="dimmed" mb={30} size="sm">
            2014 - 2015
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
