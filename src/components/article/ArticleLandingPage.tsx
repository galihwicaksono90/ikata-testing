import { Button, Group, Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import { useGetArticlesQuery, Category } from "generated/graphql";
import { useState } from "react";
import { useStyles } from "theme";
import {
  getNonScientificArticlesDefaultParams,
  getScientificArticlesDefaultParams,
} from "utils/defaultParams";

const hrefs: { [key in Category]: string } = {
  Ilmiah: "/artikel/ilmiah",
  NonIlmiah: "/artikel/non-ilmiah",
};

export const ArticleLandingPage = () => {
  const { classes } = useStyles();
  const [currentType, setCurrentType] = useState(Category.Ilmiah);

  const { data: scientificArticles } = useGetArticlesQuery({
    params: getScientificArticlesDefaultParams,
  });

  const { data: nonScientificArticles } = useGetArticlesQuery({
    params: getNonScientificArticlesDefaultParams,
  });

  return (
    <SectionContainer
      title="ARTIKEL"
      seeAllHref={hrefs[currentType]}
      noData={
        (currentType === Category.Ilmiah &&
          !scientificArticles?.getArticles.data.length) ||
        (currentType === Category.NonIlmiah &&
          !nonScientificArticles?.getArticles.data.length)
      }
      rightItem={
        <Group spacing={20}>
          <Button
            variant={currentType === Category.Ilmiah ? "filled" : "outline"}
            onClick={() => setCurrentType(Category.Ilmiah)}
            className={classes.pillButton}
          >
            ILMIAH
          </Button>
          <Button
            variant={currentType === Category.NonIlmiah ? "filled" : "outline"}
            onClick={() => setCurrentType(Category.NonIlmiah)}
            className={classes.pillButton}
          >
            NON ILMIAH
          </Button>
        </Group>
      }
    >
      <Stack spacing={24}>
        {(currentType === Category.Ilmiah
          ? scientificArticles
          : nonScientificArticles
        )?.getArticles.data.map((article) => {
          return (
            <ArticleItem
              data={article}
              key={article.id}
              href={`${hrefs[currentType]}/${article.id}`}
            />
          );
        })}
      </Stack>
    </SectionContainer>
  );
};
