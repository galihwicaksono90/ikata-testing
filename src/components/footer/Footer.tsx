import {
  Box,
  Button,
  Footer as BaseFooter,
  Group,
  Text,
  Stack,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
  IconPhone,
} from "@tabler/icons";
import { Container } from "components/common";
import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <BaseFooter
      height="auto"
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container sx={{ width: "100%" }} pt={40} pb={30}>
        <Group
          align="flex-start"
          position="apart"
          //mb={60}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
              gap: 80,
              alignItems: "center",
            },
          })}
        >
          <div>
            <Group
              spacing={30}
              align="flex-start"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  justifyContent: "center",
                  textAlign: "center",
                },
              })}
              mb={20}
            >
              <NextLink href="/">
                <Box sx={{ position: "relative", height: 99, width: 99 }}>
                  <Image src="/ikataLogo.png" layout="fill" alt="" />
                </Box>
              </NextLink>
              <Box>
                <Text sx={{ fontSize: "1.25rem" }} weight={500} mb={14.85}>
                  Ikatan Alumni Tambang UPN &quot;Veteran&quot; Yogyakarta
                </Text>
                <Group
                  spacing={18.85}
                  sx={(theme) => ({
                    width: "100%",
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      justifyContent: "center",
                    },
                  })}
                >
                  <Box
                    href="https://www.youtube.com/channel/UC9HwED5hkFPDGHwGbUVj9nQ"
                    component="a"
                    target="_blank"
                    sx={{ color: "white" }}
                  >
                    <IconBrandYoutube />
                  </Box>
                  <Box
                    href="https://www.youtube.com/channel/UC9HwED5hkFPDGHwGbUVj9nQ"
                    component="a"
                    target="_blank"
                    sx={{ color: "white" }}
                  >
                    <IconBrandInstagram />
                  </Box>
                </Group>
              </Box>
            </Group>
            <Text
              sx={(theme) => ({
                maxWidth: 480,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  textAlign: "center",
                  maxWidth: "100%",
                },
              })}
            >
              Jl. Kemang Raya No. 43, RT 9 / RW 1, Bangka Kecamatan Mampang
              Prpt, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
            </Text>
          </div>
          <Group
            direction="column"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              [`@media (max-width: 432px)`]: {
                flexDirection: "column",
                alignItems: "center",
              },
            })}
          >
            <Stack>
              <Text weight={700}>KONTAK</Text>
              <Group spacing={17.5}>
                <IconMail />
                <Text size="sm" weight={400}>
                  example@mail.com
                </Text>
              </Group>
              <Group spacing={17.5} mb={30}>
                <IconPhone />
                <Text size="sm" weight={400}>
                  08123456890
                </Text>
              </Group>
            </Stack>
            <Button variant="outline" size="lg" sx={{ width: 215 }}>
              Kontak kami
            </Button>
          </Group>
        </Group>
      </Container>
      <Text
        sx={(theme) => ({
          width: "100%",
          textAlign: "center",
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 400,
          background: theme.colors.dark[7],
        })}
      >
        &copy; 2022 Copyright
      </Text>
    </BaseFooter>
  );
}
