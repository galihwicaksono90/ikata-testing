import { useMemo } from "react";
import { NextLink } from "@mantine/next";
import {
  Box,
  List,
  Grid,
  Stack,
  Tabs,
  Title,
  Text,
  Paper,
  PaperProps,
  useMantineTheme,
} from "@mantine/core";
import { getCurrentDate } from "utils/time";
import Image from "next/image";
import DarkContainer from "./DarkContainer";
import { useGetArticlesQuery, ArticleType } from "generated/graphql";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { setArticleMenuPosition } from "redux/general/generalSlice";

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

export default function Articles() {
  const { data: scientificArticles, isLoading: scientificIsLoading } =
    useGetArticlesQuery({
      limit: 4,
      type: ArticleType.Scientific,
    });
  const { data: nonScientificArticles, isLoading: nonScientificIsLoading } =
    useGetArticlesQuery({
      limit: 4,
      type: ArticleType.NonScientific,
    });
  const activeTab = useAppSelector(
    (state) => state.general.articleMenuPosition
  );
  const dispatch = useAppDispatch();

  return (
    <DarkContainer>
      <Grid gutter={10}>
        <Grid.Col lg={8} md={12}>
          <Stack>
            <Tabs
              mb={40}
              active={activeTab}
              onTabChange={(index) => dispatch(setArticleMenuPosition(index))}
            >
              <Tabs.Tab
                label="Artikel Ilmiah"
                sx={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                <Stack spacing={20} mt={20}>
                  {scientificIsLoading
                    ? null
                    : scientificArticles.getArticles.map((article, index) => (
                        <ArticleItem {...article} key={index} />
                      ))}
                </Stack>
              </Tabs.Tab>
              <Tabs.Tab
                label="Artikel Non-Ilmiah"
                sx={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                <Stack spacing={20} mt={20}>
                  {nonScientificIsLoading
                    ? null
                    : nonScientificArticles.getArticles.map(
                        (article, index) => (
                          <ArticleItem {...article} key={index} />
                        )
                      )}
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
        <Grid.Col lg={4} md={12} pt={75}>
          <Stack spacing={24}>
            <Info {...info} />
            <Info {...info} />
          </Stack>
        </Grid.Col>
      </Grid>
    </DarkContainer>
  );
}

function ArticleItem({ image, title, description }: ArticleItem) {
  const theme = useMantineTheme();
  const date = useMemo(() => getCurrentDate(), []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 20,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column",
        },
      }}
    >
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
          weight="bold"
          size="xl"
          lineClamp={2}
          component={NextLink}
          href="/about"
        >
          {title}
        </Text>
        <Text size="sm" weight={500} color="dimmed">
          {date}
        </Text>
        <Text lineClamp={3} weight={500}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
}

function Info({ title, items, ...rest }: InfoItem) {
  return (
    <Paper
      withBorder
      radius="md"
      p={20}
      sx={(theme) => ({
        background: theme.colors.dark[8],
        color: theme.white,
        borderColor: theme.colors.dark[4],
        borderWidth: "1px",
        borderStyle: "solid",
      })}
      {...rest}
    >
      <Title order={5} mb={30}>
        {title}
      </Title>
      <List
        center
        spacing={50}
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
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              sx={(theme) => ({ marginBottom: 20, color: theme.white })}
            >
              <List.Item
                sx={() => ({
                  fontWeight: 600,
                  marginBottom: 8,
                })}
              >
                <Text lineClamp={1}>{item.title}</Text>
              </List.Item>
              <Text pl={20} lineClamp={1} color="dimmed" size="sm">
                {item.description}
              </Text>
            </Box>
          );
        })}
      </List>
      <Text component={NextLink} href="/articles" variant="link" weight="bold">
        Lihat Semua
      </Text>
    </Paper>
  );
}
