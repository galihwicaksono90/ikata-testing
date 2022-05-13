import React from "react";
import {
  Container,
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
import SearchInput from "./SearchInput";
import { NavbarProps } from "components/layouts";
import { UserCircle } from "tabler-icons-react";

export default function HeaderTop({ opened, setOpened }: NavbarProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container
        size={1128}
        style={{
          height: "102px",
        }}
      >
        <Group position="apart" align="center" style={{ height: "100%" }}>
          <Group spacing={45} align="center">
            <Image src="/ikataLogo.png" width="72px" height="72px" />
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Stack spacing={5}>
                <Text
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "20px",
                  }}
                >
                  PORTAL IKATAN ALUMNI TAMBANG
                </Text>
                <Text>UPN "VETERAN" YOGYAKARTA</Text>
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
                <Text variant="link" component={NextLink} href="/login">
                  Login
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