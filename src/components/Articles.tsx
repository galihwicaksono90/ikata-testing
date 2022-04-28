import { useMemo } from "react";
import { NextLink } from "@mantine/next";
import {
  Box,
  List,
  Grid,
  Stack,
  Tabs,
  Group,
  Container,
  Title,
  Text,
  AspectRatio,
  Paper,
  PaperProps,
} from "@mantine/core";
import { getCurrentDate } from "utils/time";
import Image from "next/image";

interface ArticleItem {
  title: string;
  image: string;
  description: string;
}

interface InfoItem extends PaperProps<"div"> {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

export const info: InfoItem = {
  title: "Lowongan Kerja",
  items: [
    {
      title: "Front End Developer",
      description: "PT Hana Teknologi Nusantara",
    },
    {
      title: "Artificial Lift Superintendo",
      description: "RH Petrogas",
    },
    {
      title: "Deputi Site HSE Leader of the world",
      description: "PT Saipem Indonesia",
    },
    {
      title: "Project Team Leader",
      description: "PT Bima Rekacipta Utama",
    },
  ],
};

const articleData: ArticleItem[] = [
  {
    title: "Pembukaan Lahan Tambang Batubara",
    description:
      "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
    image: "/article1.jpg",
  },
  {
    title: "Tata Cara Pengoperasian Alat Berat",
    description:
      "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
    image: "/article2.jpg",
  },
  {
    title: "Pemulihan Lahan Bekas Tambang Secara Efektif",
    description:
      "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
    image: "/article3.jpg",
  },
  {
    title: "Pengoperasian Terowongan Bawah Tanah",
    description:
      "Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat. ",
    image: "/article4.jpg",
  },
];

export default function Articles() {
  return (
    <Grid gutter={72}>
      <Grid.Col span={8}>
        <Stack>
          <Tabs mb={40}>
            <Tabs.Tab
              label="Artikel Ilmiah"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "white",
              }}
            >
              <Stack spacing={20} mt={20}>
                {articleData.map((article, index) => (
                  <ArticleItem {...article} key={index} />
                ))}
              </Stack>
            </Tabs.Tab>
            <Tabs.Tab
              label="Artikel Non-Ilmiah"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "white",
              }}
            >
              <Stack spacing={20} mt={20}>
                <ArticleItem {...articleData[3]} />
                <ArticleItem {...articleData[2]} />
                <ArticleItem {...articleData[1]} />
                <ArticleItem {...articleData[0]} />
              </Stack>
            </Tabs.Tab>
          </Tabs>
          <Text
            component={NextLink}
            href="/articles"
            variant="link"
            weight="bold"
          >
            Lihat Semua
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4} pt={75}>
        <Stack spacing={24}>
          <Info {...info} />
          <Info {...info} />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

function ArticleItem({ image, title, description }: ArticleItem) {
  const date = useMemo(() => getCurrentDate(), []);

  return (
    <Group align="flex-start" noWrap>
      <div
        style={{
          minWidth: "360px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          width={360}
          height={205}
        />
      </div>
      <Stack spacing={6}>
        <Text
          sx={(theme) => ({
            fontSize: "22px",
            fontWeight: 600,
            ":hover": {
              color: theme.fn.darken(theme.white, 0.1),
            },
          })}
          lineClamp={2}
          component={NextLink}
          href="/about"
        >
          {title}
        </Text>
        <Text size="sm" weight={500}>
          {date}
        </Text>
        <Text lineClamp={3} weight={500}>
          {description}
        </Text>
      </Stack>
    </Group>
  );
}

function Info({ title, items, ...rest }: InfoItem) {
  return (
    <Paper
      withBorder
      radius="md"
      p={20}
      sx={{ border: "solid white 1px" }}
      {...rest}
    >
      <Title order={5} mb={30}>
        {title}
      </Title>
      <List
        center
        spacing={30}
        icon={
          <Box
            sx={(theme) => ({
              height: 7,
              width: 7,
              backgroundColor: theme.primaryColor,
              borderRadius: "50%",
            })}
          />
        }
        mb={30}
      >
        {items.map((item) => {
          return (
            <>
              <List.Item
                sx={{
                  color: " white",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                <Text lineClamp={1}>{item.title}</Text>
              </List.Item>
              <Text pl={20} lineClamp={1}>
                {item.description}
              </Text>
            </>
          );
        })}
      </List>
      <Text component={NextLink} href="/articles" variant="link" weight="bold">
        Lihat Semua
      </Text>
    </Paper>
  );
}
