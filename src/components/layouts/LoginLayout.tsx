import {
  Box,
  Container,
  Overlay,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useRouter } from "next/router";
import { ArrowLeft } from "tabler-icons-react";
import Image from "next/image";

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
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Box
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "tomato",
          position: "fixed",
        }}
      >
        <Image
          src="/loginBackground.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </Box>

      <Container style={{ zIndex: 2, width: "100%" }} size={containerSize}>
        <Paper
          sx={{
            background: "rgba(0,0,0,0.45)",
            padding: "29px 24px 41px 24px",
            width: "100%",
          }}
        >
          <Box sx={{ marginBottom: 60, position: "relative", width: "100%" }}>
            <UnstyledButton
              sx={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
              onClick={() => router.back()}
            >
              <ArrowLeft />
            </UnstyledButton>
            <Text align="center" sx={{ fontSize: "1.375rem", fontWeight: 600 }}>
              {headerTitle}
            </Text>
          </Box>
          {children}
        </Paper>
      </Container>
      <Overlay color="#000" blur={2} opacity={0.6} zIndex={1} />
    </Box>
  );
}
