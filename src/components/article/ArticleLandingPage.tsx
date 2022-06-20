import { Button, Group, Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import { ArticleType, useGetArticlesQuery } from "generated/mockGraphql";
import { useState } from "react";
import { useStyles } from "theme";

export const ArticleLandingPage = () => {
  const { classes } = useStyles();
  const [currentType, setCurrentType] = useState<ArticleType>(
    ArticleType.Scientific
  );

  const { data: scientificArticles, isLoading: scientificArticlesLoading } =
    useGetArticlesQuery({
      limit: 4,
      type: ArticleType.Scientific,
    });

  const {
    data: nonScientificArticles,
    isLoading: nonScientificArticlesLoading,
  } = useGetArticlesQuery({
    limit: 0,
    type: ArticleType.NonScientific,
  });

  if (scientificArticlesLoading || nonScientificArticlesLoading)
    <div>Loading</div>;

  return (
    <SectionContainer
      title="ARTIKEL"
      seeAllHref={
        currentType === ArticleType.Scientific
          ? "/articles/scientific"
          : "/articles/nonscientific"
      }
      noData={
        (currentType === ArticleType.Scientific &&
          !scientificArticles?.getArticles.length) ||
        (currentType === ArticleType.NonScientific &&
          !nonScientificArticles?.getArticles.length)
      }
      rightItem={
        <Group spacing={20}>
          <Button
            variant={
              currentType === ArticleType.Scientific ? "filled" : "outline"
            }
            onClick={() => setCurrentType(ArticleType.Scientific)}
            className={classes.pillButton}
          >
            ILMIAH
          </Button>
          <Button
            variant={
              currentType === ArticleType.NonScientific ? "filled" : "outline"
            }
            onClick={() => setCurrentType(ArticleType.NonScientific)}
            className={classes.pillButton}
          >
            NON ILMIAH
          </Button>
        </Group>
      }
    >
      <Stack spacing={24}>
        {(currentType === ArticleType.Scientific
          ? scientificArticles
          : nonScientificArticles
        )?.getArticles.map((article) => {
          const newData = {
            title: article.title,
            date: article.postedAt,
            description: article.description,
            href: article.id.toString(),
            image: article.image,
          };
          return <ArticleItem data={newData} key={article.id} />;
        })}
      </Stack>
    </SectionContainer>
  );
};
