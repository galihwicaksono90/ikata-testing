import React from "react";
import {
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

const useStyles = createStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "inherit",
  },
  button: {
    width: "215px",
    height: "45px",
  },
  logoContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "white",
  },
  address: {
    width: "480px",
  },
  title: {
    fontSize: "20px",
    fontWeight: 500,
  },
  copyright: {
    width: "100vw",
    height: "46px",
    background: "#272727",
    textAlign: "center",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function FooterComponent() {
  const { classes } = useStyles();
  return (
    <Footer height={416} className={classes.footer}>
      <Container size={1128} className={classes.container}>
        <Stack>
          <Group spacing={30} mr={32}>
            <Image src="/ikataLogo.png" width={99} height={99} />
            <Stack>
              <Text className={classes.title}>
                Ikatan Alumni Tambang <br />
                UPN "Veteran" Yogyakarta
              </Text>
            </Stack>
          </Group>
          <Text className={classes.address} mr={20}>
            Jl. Kemang Raya No. 43, RT 9 / RW 1, Bangka Kecamatan Mampang Prpt,
            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
          </Text>
          <Button color="orange" variant="outline" className={classes.button}>
            Kontak Kami
          </Button>
        </Stack>
        <Group>
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
      className={classes.logoContainer}
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
