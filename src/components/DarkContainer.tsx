import React from "react";
import { Box, Container } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

export default function DarkContainer({ children }: Props) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.colors.dark[7],
        color: theme.white,
      })}
    >
      <Container size={1128} pt={60} pb={75}>
        {children}
      </Container>
    </Box>
  );
}
