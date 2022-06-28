import { Box } from "@mantine/core";
import { SectionContainer, TextLink } from "components/common";
import { NewsCard } from "components/news";
import { useGetNewsQuery } from "generated/graphql";
import { getNewsDefaultParams } from "utils/defaultParams";

const gridDictionary = ["one", "two", "three", "four", "five", "six"];

export function NewsLandingPage() {
  const { data } = useGetNewsQuery({ params: getNewsDefaultParams });

  return (
    <SectionContainer
      title="BERITA"
      rightItem={
        <TextLink href="/" weight={600}>
          Lihat Semua
        </TextLink>
      }
      noData={!data?.getNews.length}
      lightBackground
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateAreas: '"one two two" "three three four" "five six six"',
          gap: 24,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateAreas: '"one" "two" "three" "four" "five" "six"',
          },
        })}
      >
        {data?.getNews.map((item, index) => {
          return (
            <NewsCard
              data={item}
              key={item.id}
              //style={{ gridArea: gridDictionary[index] }}
              tagAlign={[0, 3, 4].includes(index) ? "left" : "right"}
              withTags
              sx={{
                gridArea:
                  data?.getNews.length % 2 !== 0 &&
                  data?.getNews.length === index + 1
                    ? data?.getNews.length > 4
                      ? "five / five / six / six"
                      : "three / three / four / four"
                    : gridDictionary[index],
              }}
            />
          );
        })}
      </Box>
    </SectionContainer>
  );
}
