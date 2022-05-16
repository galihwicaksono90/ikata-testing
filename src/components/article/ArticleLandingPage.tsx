import { Grid, Stack, Tabs, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { ArticleList } from "components/article";
import { Container } from "components/common";
import { VacancyList } from "components/vacancy";
import { ArticleType, VacancyType } from "generated/graphql";
import { setArticleMenuPosition } from "redux/general/generalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useStyles } from "theme";

export default function ArticlesLandingPage() {
  const { classes } = useStyles();
  const activeTab = useAppSelector(
    (state) => state.general.articleMenuPosition
  );
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Grid gutter={10}>
        <Grid.Col lg={8} md={12}>
          <Stack>
            <Tabs
              mb={40}
              active={activeTab}
              onTabChange={(index) => dispatch(setArticleMenuPosition(index))}
            >
              <Tabs.Tab label="Artikel Ilmiah" className={classes.tabLabel}>
                <ArticleList type={ArticleType.Scientific} />
              </Tabs.Tab>
              <Tabs.Tab label="Artikel Non-Ilmiah" className={classes.tabLabel}>
                <ArticleList type={ArticleType.NonScientific} />
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
            <VacancyList type={VacancyType.Job} title="Lowongan" />
            <VacancyList type={VacancyType.Scholarship} title="Beasiswa" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
