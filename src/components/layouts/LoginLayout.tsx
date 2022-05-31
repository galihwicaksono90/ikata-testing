import {
  Box,
  Container,
  Overlay,
  Paper,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useRouter } from "next/router";
import { ArrowLeft } from "tabler-icons-react";

interface LoginLayoutProps {
  containerSize: number;
  headerTitle: string;
  children: React.ReactNode;
  center?: boolean;
}

export function LoginLayout({
  containerSize,
  headerTitle,
  children,
  center,
}: LoginLayoutProps) {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: center ? "center" : null,
        backgroundImage: `url("/mining1.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container style={{ zIndex: 2, width: "100%" }} size={containerSize}>
        <Paper
          sx={{
            background: "rgba(0,0,0,0.45)",
            padding: "29px 24px 41px 24px",
            width: "100%",
          }}
        >
          <Box sx={{ marginBottom: 40, position: "relative", width: "100%" }}>
            <UnstyledButton
              sx={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
              onClick={() => router.back()}
            >
              <ArrowLeft />
            </UnstyledButton>
            <Title order={3} align="center">
              {headerTitle}
            </Title>
          </Box>
          {children}
        </Paper>
      </Container>
      <Overlay color="#000" blur={2} opacity={0.6} zIndex={1} />
    </Box>
  );
}
