import MainLayout from "./MainLayout";
import { Box, Title, Text, Container } from "@mantine/core";
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
      <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
        <Container size={1128} pt={80} pb={80}>
          <Title
            order={1}
            sx={(theme) => ({ color: theme.colors.dark })}
            mb={7}
          >
            {title}
          </Title>
          <Text color="dark" mb={40}>
            {description}
          </Text>
          {children}
        </Container>
      </Box>
    </MainLayout>
  );
}
