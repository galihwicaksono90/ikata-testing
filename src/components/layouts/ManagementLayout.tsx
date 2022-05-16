import MainLayout from "./MainLayout";
import { Box, Title, Text } from "@mantine/core";
import { Container } from "components/common";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function ManagementLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <MainLayout>
      <Box>
        <Container pt={80} pb={80}>
          <Title order={1} mb={7}>
            {title}
          </Title>
          <Text mb={40}>{description}</Text>
          {children}
        </Container>
      </Box>
    </MainLayout>
  );
}
