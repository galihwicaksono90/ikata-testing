import { Box, Container, Text, Title, Group, MediaQuery } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { AlumniCarousel } from "components/alumni";

export default function Alumni() {
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
            mb={40}
            order={2}
            sx={(theme) => ({
              fontWeight: 700,
              color: theme.colors.dark,
              "& span": { color: theme.primaryColor },
            })}
          >
            <span>Bisnis</span> Alumni
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <br />
            </MediaQuery>
            {" Tambang"}
          </Title>
          <AlumniCarousel />
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
