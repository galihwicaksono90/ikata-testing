import { MainLayout } from "components/layouts";
import { Box, Title, Text } from "@mantine/core";
import { Container } from "components/common";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function ManagementLayout({ title, description, children }: Props) {
  return (
    <MainLayout>
      <Container
        pt={60}
        pb={60}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingTop: 30,
          },
        })}
        mb={80}
      >
        <Text
          component="h1"
          mb={46}
          sx={(theme) => ({
            fontSize: "3rem",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: "1.6rem",
              marginBottom: 30,
            },
          })}
        >
          {title}
        </Text>
        {/* <Text mb={40}>{description}</Text> */}
        {children}
      </Container>
    </MainLayout>
  );
}
