import { Grid, Stack, Tabs, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { ArticleList } from "components/article";
import { Container } from "components/common";
import { VacancyListLandingPage } from "components/vacancy";
import { ArticleType, VacancyType } from "generated/graphql";
import { setArticleMenuPosition } from "redux/general/generalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useStyles } from "theme";

export function ArticleLandingPage() {
  const { classes } = useStyles();
  const activeTab = useAppSelector(
    (state) => state.general.articleMenuPosition
  );
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Grid columns={24} gutter={40}>
        <Grid.Col lg={17} md={24}>
          <Stack>
            <Tabs
              mb={40}
              active={activeTab}
              onTabChange={(index) => dispatch(setArticleMenuPosition(index))}
              styles={{
                tabsListWrapper: {
                  borderBottom: "0px !important",
                },
              }}
            >
              <Tabs.Tab label="Artikel Ilmiah" className={classes.tabLabel}>
                <ArticleList type={ArticleType.Scientific} limit={5} />
              </Tabs.Tab>
              <Tabs.Tab label="Artikel Non-Ilmiah" className={classes.tabLabel}>
                <ArticleList type={ArticleType.NonScientific} limit={5} />
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
        <Grid.Col
          lg={7}
          md={24}
          pt={75}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              paddingTop: 25,
            },
          })}
        >
          <Grid gutter={24}>
            <Grid.Col lg={12} md={6} sm={6} xs={12}>
              <VacancyListLandingPage
                type={VacancyType.Job}
                title="Lowongan"
                href="/lowongan/pekerjaan"
              />
            </Grid.Col>
            <Grid.Col lg={12} md={6} sm={6} xs={12}>
              <VacancyListLandingPage
                type={VacancyType.Scholarship}
                title="Beasiswa"
                href="/lowongan/beasiswa"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
