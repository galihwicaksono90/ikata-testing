import React from "react";
import {
  Box,
  MediaQuery,
  Container,
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

export default function FooterComponent() {
  const { classes } = useStyles();
  return (
    <Footer height="auto" className={classes.footer}>
      <Container size={1128} sx={{ width: "100%" }}>
        <Box
          className={classes.responsiveGroupSmall}
          sx={{ width: "100%", marginBottom: 60 }}
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
                <Image src="/ikataLogo.png" layout="fill" />
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
                  UPN "Veteran" Yogyakarta
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
            />
            <SocialMediaButton
              href="https://instagram.com"
              image="/instagram.png"
            />
          </Group>
        </Box>
      </Container>
      <Text className={classes.copyright}>&copy; 2022 Copyright</Text>
    </Footer>
  );
}

interface SocialMediaButtonProps extends UnstyledButtonProps<"a"> {
  image: string;
}

function SocialMediaButton({ href, image, mr }: SocialMediaButtonProps) {
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
