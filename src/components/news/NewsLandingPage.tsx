import { Box } from "@mantine/core";
import { SectionContainer, TextLink } from "components/common";
import { NewsCard } from "components/news";
import { News, useGetNewsItemsQuery } from "generated/mockGraphql";

const gridDictionary = ["one", "two", "three", "four", "five", "six"];

export function NewsLandingPage() {
  const { data: newsItems, isLoading } = useGetNewsItemsQuery({ limit: 6 });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <SectionContainer
      title="BERITA"
      rightItem={
        <TextLink href="/" weight={600}>
          Lihat Semua
        </TextLink>
      }
      noData={!newsItems?.getNewsItems.length}
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
        {newsItems?.getNewsItems.map((item, index) => {
          return (
            <NewsCard
              data={item as News}
              key={item.id}
              style={{ gridArea: gridDictionary[index] }}
              tagAlign={[0, 3, 4].includes(index) ? "left" : "right"}
              withTags
            />
          );
        })}
      </Box>
    </SectionContainer>
  );
}
