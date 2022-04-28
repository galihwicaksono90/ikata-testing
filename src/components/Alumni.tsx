import {
  Button,
  Container,
  Text,
  Title,
  Card,
  AspectRatio,
  Group,
  createStyles,
} from "@mantine/core";
import Image from "next/image";
import { NextLink } from "@mantine/next";

export const items = [
  {
    title: "Menara Merah Putih Mining Contractor",
    image: "/alumni1.png",
  },
  {
    title: "Dafam Fortuna Seturan Yogyakarta",
    image: "/alumni2.png",
  },
  {
    title: "Kedai Kopi (Komunitas Tambang Indonesia)",
    image: "/alumni3.png",
  },
];

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colors.dark,
    fontWeight: "bold",
    transition: "ease-in-out 200ms color",
    ":hover": {
      color: theme.fn.lighten(theme.colors.dark[8], 0.2),
      textDecoration: "underline",
    },
  },
}));

export default function Alumni() {
  const { classes } = useStyles();
  return (
    <div style={{ width: "100%", background: "white" }}>
      <Container size={1135} pt={80} pb={50}>
        <Group position="apart" align="flex-start" mb={40}>
          <Title
            mt={30}
            order={2}
            sx={(theme) => ({
              fontWeight: 700,
              color: theme.colors.dark,
              "& span": { color: theme.primaryColor },
            })}
          >
            <span>Bisnis</span> Alumni <br />
            Tambang
          </Title>
          {items.map((item, index) => (
            <AlumniCard key={index} title={item.title} image={item.image} />
          ))}
        </Group>
        <Group position="right">
          <NextLink className={classes.link} href="/">
            Lihat Semua
          </NextLink>
        </Group>
      </Container>
    </div>
  );
}

function AlumniCard({ title, image }: { title: string; image: string }) {
  return (
    <div style={{ width: 264 }}>
      <Card
        sx={(theme) => ({ backgroundColor: theme.white })}
        p={15}
        shadow="xl"
        radius="xs"
      >
        <Card.Section mb={20}>
          <AspectRatio ratio={264 / 196}>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </AspectRatio>
        </Card.Section>
        <Text color="dark" mb={30} size="md" weight="bold">
          {title}
        </Text>
        <Button
          fullWidth
          color="dark"
          radius="xs"
          size="lg"
          component={NextLink}
          href="/"
        >
          Lihat Profil
        </Button>
      </Card>
    </div>
  );
}
