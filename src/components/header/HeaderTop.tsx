import React from "react";
import {
  AspectRatio,
  Box,
  Group,
  Stack,
  Text,
  MediaQuery,
  Avatar,
  Burger,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";
import { UserCircle } from "tabler-icons-react";
import { Container, SearchInput } from "components/common";
import { MainLayoutProps } from "components/layouts";

export function HeaderTop({ opened, setOpened }: MainLayoutProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container
        style={{
          height: "102px",
        }}
        noPadding
      >
        <Group position="apart" align="center" style={{ height: "100%" }}>
          <Group spacing="xl" align="center">
            <AspectRatio
              ratio={1}
              sx={(theme) => ({
                maxWidth: 72,
                position: "relative",
                width: 72,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  width: 50,
                },
              })}
            >
              <Image alt="" src="/ikataLogo.png" layout="fill" />
            </AspectRatio>
            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
              <Stack spacing={5}>
                <Text
                  size="xl"
                  weight="bold"
                  sx={(theme) => ({
                    lineHeight: "20px",
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      fontSize: 12,
                    },
                  })}
                >
                  PORTAL IKATAN ALUMNI TAMBANG
                </Text>
                <Text
                  sx={(theme) => ({
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      fontSize: 10,
                    },
                  })}
                >
                  UPN &quot;VETERAN&quot; YOGYAKARTA
                </Text>
              </Stack>
            </MediaQuery>
          </Group>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group spacing={53}>
              <SearchInput />
              <Group spacing="sm">
                <Avatar
                  radius="xl"
                  styles={(theme) => ({
                    placeholder: { background: theme.colors.dark[8] },
                  })}
                >
                  <UserCircle size={30} color="white" />
                </Avatar>
                <Text
                  variant="link"
                  component={NextLink}
                  href="/login"
                  weight="bold"
                >
                  Login
                </Text>
                <Text weight="bold" color="orange">
                  |
                </Text>
                <Text
                  variant="link"
                  component={NextLink}
                  href="/register"
                  weight="bold"
                  sx={{
                    color: "white",
                  }}
                >
                  Register
                </Text>
              </Group>
            </Group>
          </MediaQuery>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              color="white"
            />
          </MediaQuery>
        </Group>
      </Container>
    </Box>
  );
}
