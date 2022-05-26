import React from "react";
import {
  Box,
  MediaQuery,
  UnstyledButton,
  Footer,
  Center,
  Text,
  Group,
  Stack,
  Button,
  createStyles,
  UnstyledButtonProps,
} from "@mantine/core";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { useStyles } from "theme";
import { Container } from "components/common";

export default function FooterComponent() {
  const { classes } = useStyles();
  return (
    <Footer height="auto" className={classes.footer}>
      <Container sx={{ width: "100%" }}>
        <Group
          sx={(theme) => ({
            marginBottom: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Stack>
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",

                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                },
              })}
            >
              <Box
                sx={{
                  width: 99,
                  height: 99,
                  marginRight: 20,
                  marginBottom: 20,
                  position: "relative",
                }}
              >
                <Image alt="" src="/ikataLogo.png" layout="fill" />
              </Box>
              <Stack>
                <Text
                  size="xl"
                  weight={500}
                  sx={(theme) => ({
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      textAlign: "center",
                    },
                  })}
                >
                  Ikatan Alumni Tambang <br />
                  UPN &quot;Veteran&quot; Yogyakarta
                </Text>
              </Stack>
            </Box>
            <Text
              sx={(theme) => ({
                marginRight: 20,
                maxWidth: 480,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  textAlign: "center",
                  marginRight: 0,
                },
              })}
            >
              Jl. Kemang Raya No. 43, RT 9 / RW 1, Bangka Kecamatan Mampang
              Prpt, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
            </Text>
            <Button variant="outline" size="lg">
              Kontak Kami
            </Button>
          </Stack>
          <Group my={30}>
            <SocialMediaButton
              href="https://youtube.com"
              image="/youtube.png"
              mr={30}
              alt=""
            />
            <SocialMediaButton
              href="https://instagram.com"
              image="/instagram.png"
              alt=""
            />
          </Group>
        </Group>
      </Container>
      <Text className={classes.copyright}>&copy; 2022 Copyright</Text>
    </Footer>
  );
}

interface SocialMediaButtonProps extends UnstyledButtonProps<"a"> {
  image: string;
  alt?: string;
}

function SocialMediaButton({ href, image, mr, alt }: SocialMediaButtonProps) {
  const { classes } = useStyles();
  return (
    <UnstyledButton
      className={classes.mediaSocialButton}
      component={NextLink}
      href={href}
      mr={mr}
    >
      <Center style={{ height: "100%" }}>
        <Image
          alt={alt}
          src={image}
          layout="fixed"
          objectFit="contain"
          width={40}
          height={40}
        />
      </Center>
    </UnstyledButton>
  );
}
