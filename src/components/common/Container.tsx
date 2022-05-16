import React from "react";
import { Box, Container, ContainerProps } from "@mantine/core";

const CONTAINER_SIZE = 1128;

interface Props extends ContainerProps {
  light?: boolean;
  children: React.ReactNode;
}

export default function ContainerComponent({
  children,
  light = false,
  ...rest
}: Props) {
  if (light) {
    return (
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor: theme.white,
          color: theme.colors.dark,
        })}
      >
        <Container size={CONTAINER_SIZE} pt={60} pb={75} {...rest}>
          {children}
        </Container>
      </Box>
    );
  }

  return (
    <Container size={CONTAINER_SIZE} pt={60} pb={75} {...rest}>
      {children}
    </Container>
  );
}
