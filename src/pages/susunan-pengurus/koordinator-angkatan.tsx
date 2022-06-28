import { Group, Select, Stack, Text, MediaQuery, Grid } from "@mantine/core";
import { AvatarCarousel, MemberAvatar } from "components/common";
import { ManagementLayout } from "components/layouts";
import { useGetMembersQuery, api } from "generated/mockGraphql";
import { useState } from "react";
import { generateEightYears } from "utils";
import { wrapper } from "redux/store";
import { GetServerSideProps } from "next";

const years = generateEightYears();

export default function KoordinatorAngkatan() {
  const [value, setValue] = useState(years[0].value);

  const { data: members, isFetching } = useGetMembersQuery({
    limit: years.find((year) => year.value === value).data.length,
    field: value,
  });

  return (
    <ManagementLayout
      title="Koordinator Angkatan"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Stack>
        <Group position="center" mb={40}>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Text weight={600}>List Angkatan: </Text>
          </MediaQuery>
          <Select
            size="lg"
            data={years}
            value={value}
            onChange={setValue}
            styles={{
              item: {
                fontSize: 12,
              },
            }}
            sx={(theme) => ({
              width: 140,
              "& input": {
                color: theme.colors.orange[0],
                fontWeight: 700,
                fontSize: 12,
              },
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                width: "100%",
                fontSize: 14,
              },
            })}
          />
        </Group>
        <Grid gutter={10}>
          {isFetching
            ? [...Array(9).fill(0)].map((item, index) => (
                <Grid.Col span={12} md={3} sm={4} xs={6}>
                  <MemberAvatar key={index} loading />
                </Grid.Col>
              ))
            : members?.getMembers.map((member) => (
                <Grid.Col span={12} md={3} sm={4} xs={6}>
                  <MemberAvatar key={member.id} data={member} />
                </Grid.Col>
              ))}
        </Grid>
        {/* <AvatarCarousel
          loading={isFetching}
          data={members?.getMembers}
          rows={2}
          slidesToShow={4}
          responsive={[
            {
              smallerThan: 1114,
              slidesPerView: 3,
            },
            {
              smallerThan: 909,
              slidesPerView: 2,
            },
            {
              smallerThan: 520,
              slidesPerView: 1,
            },
          ]}
          withClassYear
        /> */}
      </Stack>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    try {
      await store.dispatch(
        api.endpoints.GetMembers.initiate({
          limit: years[0].data.length,
          field: years[0].value,
        })
      );

      Promise.all(api.util.getRunningOperationPromises());

      return {
        props: {},
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  });
