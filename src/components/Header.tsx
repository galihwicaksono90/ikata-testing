import React from "react";
import Image from "next/image";
import {
  Divider,
  Center,
  Header,
  Text,
  createStyles,
  Stack,
  Group,
  Input,
  Container,
  Menu,
  Anchor,
} from "@mantine/core";
import { ChevronDown, Search, UserCircle } from "tabler-icons-react";
import Link from "next/link";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";

const useStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerTextTop: {
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "20px",
  },
  headerTextBottom: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  menuItems: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px",
    color: theme.white,
    cursor: "pointer",
    fontWeight: 500,
    "& .active a": {
      color: theme.primaryColor,
    },
    "& a": {
      color: theme.white,
      textDecoration: "none",
    },
  },
}));

function HeaderTop() {
  const { classes } = useStyle();
  return (
    <Container
      className={classes.container}
      size={1128}
      style={{ height: "102px" }}
    >
      <Group spacing={45}>
        <Image src="/ikataLogo.png" width="72px" height="72px" />
        <Stack spacing={5}>
          <Text className={classes.headerTextTop}>
            PORTAL IKATAN ALUMNI TAMBANG
          </Text>
          <Text>UPN "VETERAN" YOGYAKARTA</Text>
        </Stack>
      </Group>
      <Group spacing={53}>
        <SearchInput />
        <Group spacing="sm">
          <UserCircle />
          <NextLink href="">Login</NextLink>
        </Group>
      </Group>
    </Container>
  );
}

function SearchInput() {
  return (
    <Input
      icon={<Search />}
      radius="xl"
      variant="unstyled"
      placeholder="Search"
      styles={{
        input: {
          height: "38px",
          border: "solid 1px white",
          borderRadius: "50px",
          width: "264px",
        },
      }}
      color="white"
    />
  );
}

function HeaderMenu() {
  const { classes } = useStyle();
  const { pathname } = useRouter();
  return (
    <Container
      className={classes.container}
      size={1128}
      style={{ height: "76px" }}
    >
      <Center style={{ width: "100%" }}>
        <ul className={classes.menuItems}>
          <li className={pathname === "/" ? "active" : ""}>
            <NextLink href="/">Home</NextLink>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <Link href="/about">Tentang kami</Link>
          </li>
          <li className={pathname === "/management" ? "active" : ""}>
            <Menu
              control={
                <Group>
                  <Text>Susunan Pengurus</Text>
                  <ChevronDown size={14} />
                </Group>
              }
            >
              <Menu.Item component={NextLink} href="/management/item1">
                Item 1
              </Menu.Item>
              <Menu.Item component={NextLink} href="/management/item2">
                Item 2
              </Menu.Item>
              <Menu.Item component={NextLink} href="/management/item3">
                Item 3
              </Menu.Item>
            </Menu>
          </li>
          <li className={pathname === "/jobs" ? "active" : ""}>
            <Menu
              control={
                <Group>
                  <Text>Lowongan</Text>
                  <ChevronDown size={14} />
                </Group>
              }
            >
              <Menu.Item component={NextLink} href="/jobs/item1">
                Item 1
              </Menu.Item>
              <Menu.Item component={NextLink} href="/jobs/item2">
                Item 2
              </Menu.Item>
              <Menu.Item component={NextLink} href="/jobs/item3">
                Item 3
              </Menu.Item>
            </Menu>
          </li>
          <li className={pathname === "/news" ? "active" : ""}>
            <Menu
              control={
                <Group>
                  <Text>Berita</Text>
                  <ChevronDown size={14} />
                </Group>
              }
            >
              <Menu.Item component={NextLink} href="/news/item1">
                Item 1
              </Menu.Item>
              <Menu.Item component={NextLink} href="/news/item2">
                Item 2
              </Menu.Item>
              <Menu.Item component={NextLink} href="/news/item3">
                Item 3
              </Menu.Item>
            </Menu>
          </li>
          <li className={pathname === "/articles" ? "active" : ""}>
            <Link href="/articles">Artikel</Link>
          </li>
          <li className={pathname === "/merchandise" ? "active" : ""}>
            <Link href="/merchandise">Merchandise</Link>
          </li>
          <li className={pathname === "/koperasi" ? "active" : ""}>
            <Link href="/koperasi">Koperasi IKATA</Link>
          </li>
        </ul>
      </Center>
    </Container>
  );
}

export default function HeaderComponent() {
  return (
    <Header height="179px">
      <HeaderTop />
      <Divider />
      <HeaderMenu />
    </Header>
  );
}
