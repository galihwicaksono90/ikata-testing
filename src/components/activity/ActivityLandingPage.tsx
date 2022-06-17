import { Stack } from "@mantine/core";
import { ArticleItem } from "components/article";
import { SectionContainer } from "components/common";
import { useGetActivitiesQuery } from "generated/mockGraphql";

export const ActivityLandingPage = () => {
  const { data: activities, isLoading } = useGetActivitiesQuery({ limit: 4 });

  if (isLoading) <div>Loading</div>;

  return (
    <SectionContainer
      title="KEGIATAN IKATA"
      noData={!activities?.getActivities.length}
      seeAllHref="/activities"
    >
      <Stack spacing={24}>
        {activities?.getActivities.map((activity) => {
          const newData = {
            title: activity.title,
            date: activity.postedAt,
            description: activity.description,
            href: activity.id.toString(),
            image: activity.image,
          };
          return <ArticleItem data={newData} key={activity.id} />;
        })}
      </Stack>
    </SectionContainer>
  );
};
