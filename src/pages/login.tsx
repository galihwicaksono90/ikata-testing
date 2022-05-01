import {
  Overlay,
  Text,
  Button,
  Container,
  Box,
  Paper,
  Stack,
  Title,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
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
            <Stack align="center">
              <Title order={3} mb={40}>
                Login Anggota
              </Title>
              <TextInput
                placeholder="username"
                label="Username"
                required
                size="md"
                sx={{
                  width: "100%",
                  input: {
                    background: "rgba(255,255,255,0.25)",
                  },
                }}
              />
              <TextInput
                placeholder="password"
                label="password"
                required
                type="password"
                size="md"
                sx={{
                  width: "100%",
                  input: {
                    background: "rgba(255,255,255,0.25)",
                  },
                }}
              />
              <Text
                variant="link"
                component={NextLink}
                href="/forgot-password"
                sx={{ width: "100%" }}
                mb={40}
                align="right"
              >
                Lupa password?
              </Text>
              <Button
                fullWidth
                size="md"
                sx={(theme) => ({ color: theme.colors.dark })}
              >
                Login
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
      <Overlay color="#000" blur={2} opacity={0.6} zIndex={1} />
    </Box>
  );
}
