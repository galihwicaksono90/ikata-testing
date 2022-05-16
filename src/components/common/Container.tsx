import React from "react";
import { Box, Container, ContainerProps, useMantineTheme } from "@mantine/core";

interface Props extends ContainerProps {
  light?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
}

export default function ContainerComponent({
  children,
  light = false,
  noPadding = false,
  ...rest
}: Props) {
  const theme = useMantineTheme();
  const padding = () => {
    if (noPadding) return {};

    return {
      pt: 50,
      pb: 75,
    };
  };

  if (light) {
    return (
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor: theme.white,
          color: theme.colors.dark,
        })}
      >
        <Container size={theme.other.containerSize} {...padding()} {...rest}>
          {children}
        </Container>
      </Box>
    );
  }

  return (
    <Container size={theme.other.containerSize} {...padding()} {...rest}>
      {children}
    </Container>
  );
}
