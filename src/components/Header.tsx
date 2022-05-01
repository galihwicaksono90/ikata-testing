import React from "react";
import Image from "next/image";
import {
  Box,
  Avatar,
  Divider,
  Center,
  Header,
  Text,
  Stack,
  Group,
  Input,
  Container,
  Menu,
} from "@mantine/core";
import { ChevronDown, Search } from "tabler-icons-react";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { useStyles } from "theme";

function HeaderTop() {
  return (
    <Container
      size={1128}
      style={{
        height: "102px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Group spacing={45}>
        <Image src="/ikataLogo.png" width="72px" height="72px" />
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
      </Group>
      <Group spacing={53}>
        <SearchInput />
        <Group spacing="sm">
          <Avatar radius="xl" />
          <Text variant="link" component={NextLink} href="/login">
            Login
          </Text>
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
      sx={(theme) => ({
        input: {
          height: "38px",
          border: `solid 1px ${theme.colors.dark[2]}`,
          borderRadius: "50px",
          width: "264px",
        },
      })}
    />
  );
}

const MenuItem = ({
  children,
  title,
  href,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) => {
  const { pathname } = useRouter();

  if (!children) {
    return (
      <li>
        <Box
          sx={(theme) => ({
            "& a": {
              color:
                pathname === href ? theme.primaryColor : theme.colors.white,
            },
          })}
        >
          <Text component={NextLink} href={href}>
            {title}
          </Text>
        </Box>
      </li>
    );
  }

  return (
    <li>
      <Menu
        control={
          <Group
            sx={(theme) => ({
              color: pathname.startsWith(href)
                ? theme.primaryColor
                : theme.colors.white,
            })}
          >
            <Text>{title}</Text>
            <ChevronDown size={14} />
          </Group>
        }
        styles={{
          body: {
            background: "rgba(0,0,0,0.45)",
            border: "none",
          },
        }}
      >
        {children}
      </Menu>
    </li>
  );
};

function MenuItemChild({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const { pathname } = useRouter();
  return (
    <Menu.Item component={NextLink} href={href}>
      <Text color={pathname === href ? "orange" : "white"}>{children}</Text>
    </Menu.Item>
  );
}

function HeaderMenu() {
  const { classes } = useStyles();
  return (
    <Container
      size={1128}
      style={{
        height: "76px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Center style={{ width: "100%" }}>
        <ul className={classes.menuItems}>
          <MenuItem title="Beranda" href="/" />
          <MenuItem title="Tentang Kami" href="/about" />
          <MenuItem title="Susunan Pengurus" href="/susunan-pengurus">
            <MenuItemChild href="/susunan-pengurus/dewan-pengawas">
              Dewan Pengurus
            </MenuItemChild>
            <MenuItemChild href="/susunan-pengurus/pengurus-pusat">
              Pengurus Pusat
            </MenuItemChild>
            <MenuItemChild href="/susunan-pengurus/koordinator-wilayah">
              Koordinator Wilayah
            </MenuItemChild>
            <MenuItemChild href="/susunan-pengurus/koordinator-angkatan">
              Koordinator Angkatan
            </MenuItemChild>
          </MenuItem>
          <MenuItem title="Lowongan" href="/lowongan">
            <MenuItemChild href="/lowongan/pekerjaan">
              Lowongan Pekerjaan
            </MenuItemChild>
            <MenuItemChild href="/lowongan/tugas-akhir">
              Lowongan Tugas Akhir
            </MenuItemChild>
            <MenuItemChild href="/lowongan/beasiswa">
              Lowongan Beasiswa
            </MenuItemChild>
          </MenuItem>
          <MenuItem title="News" href="/news">
            <MenuItemChild href="/news/pekerjaan">
              Lowongan Pekerjaan
            </MenuItemChild>
            <MenuItemChild href="/news/tugas-akhir">
              Lowongan Pekerjaan
            </MenuItemChild>
            <MenuItemChild href="/news/beasiswa">
              Lowongan Pekerjaan
            </MenuItemChild>
          </MenuItem>
          <MenuItem title="Articles" href="/articles" />
          <MenuItem title="Merchansise" href="/merchandise" />
          <MenuItem title="Koperasi IKATA" href="/koperasi" />
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
