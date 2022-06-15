import { Group, Select, Stack, Text, MediaQuery } from "@mantine/core";
import { AvatarCarousel } from "components/common";
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
            styles={(theme) => ({
              item: {
                fontSize: 12,
              },
            })}
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
        <AvatarCarousel
          loading={isFetching}
          data={members?.getMembers}
          rows={2}
          slidesToShow={4}
          responsive={[
            {
              breakpoint: 800,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 400,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
          withClassYear
        />
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
