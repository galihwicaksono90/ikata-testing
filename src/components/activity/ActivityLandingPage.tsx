import { Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import { useGetActivitiesQuery } from "generated/graphql";
import { getActivitiesDefaultParams } from "utils/defaultParams";

export const ActivityLandingPage = () => {
  const { data } = useGetActivitiesQuery({
    params: getActivitiesDefaultParams,
  });

  return (
    <SectionContainer
      title="KEGIATAN IKATA"
      noData={!data?.getActivities.length}
      seeAllHref="/aktifitas"
    >
      <Stack spacing={24}>
        {data?.getActivities.map((activity) => {
          return (
            <ArticleItem
              data={activity}
              key={activity.id}
              href={`/aktifitas/${activity.id}`}
            />
          );
        })}
      </Stack>
    </SectionContainer>
  );
};
