import {
  Box,
  Container,
  Paper,
  Text,
  UnstyledButton,
  BoxProps,
} from "@mantine/core";
import { useRouter } from "next/router";
import { IconArrowLeft } from "@tabler/icons";
import Image from "next/image";

interface LoginLayoutProps extends BoxProps<"div"> {
  containerSize: number;
  headerTitle: string;
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
        height: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        position: "relative",
        display: "flex",
        alignItems: center ? "center" : null,
        //overflow: "hidden",
      }}
    >
      <Box
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "fixed",
          filter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(0,0,0,0.5)",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        />
        <Image
          alt=""
          src="/loginBackground.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
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
          my={40}
        >
          <Box sx={{ marginBottom: 60, position: "relative", width: "100%" }}>
            <UnstyledButton
              sx={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
              onClick={() => router.back()}
            >
              <IconArrowLeft />
            </UnstyledButton>
            <Text align="center" sx={{ fontSize: "1.375rem", fontWeight: 600 }}>
              {headerTitle}
            </Text>
          </Box>
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
