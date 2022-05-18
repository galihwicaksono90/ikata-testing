import { Overlay, Container, Box, Paper, Stack, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { LoginForm } from "components/form";
import Image from "next/image";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/mining1.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container style={{ zIndex: 2 }}>
        <Stack align="center" spacing={20}>
          <Box
            sx={{
              width: "108px",
              height: "108px",
              position: "relative",
            }}
            component={NextLink}
            href="/"
          >
            <Image src="/ikataLogo.png" layout="fill" objectFit="cover" />
          </Box>
          <Paper
            sx={{
              background: "rgba(0,0,0,0.45)",
              padding: "29px 24px 41px 24px",
              width: 408,
            }}
          >
            <Title order={3} align="center" mb={40}>
              Login Anggota
            </Title>
            <LoginForm />
          </Paper>
        </Stack>
      </Container>
      <Overlay color="#000" blur={2} opacity={0.6} zIndex={1} />
    </Box>
  );
}
