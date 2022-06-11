import { useState } from "react";
import { Select, Text, Group, Stack, Grid } from "@mantine/core";
import { ManagementLayout } from "components/layouts";
import { api, ArticleType, useGetMembersQuery } from "generated/mockGraphql";
import { AvatarCarousel, MemberAvatar } from "components/common";
import { GetServerSideProps } from "next";
import { generateEightYears } from "utils/generateEightYears";
import { nanoid } from "@reduxjs/toolkit";

const years = generateEightYears();

export default function KoordinatorAngkatan() {
  const [value, setValue] = useState(years[0].value);

  const {
    data: members,
    isFetching,
    isLoading,
  } = useGetMembersQuery({
    limit: years.find((year) => year.value === value).data.length,
    field: value,
  });

  if (isLoading) <div>Loading...</div>;
  if (!members) <div>No data</div>;

  return (
    <ManagementLayout
      title="Koordinator Angkatan"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <Stack>
          <Group position="center" mb={40}>
            <Text weight="bold">List Angkatan: </Text>
            <Select
              data={years}
              value={value}
              onChange={setValue}
              sx={{ width: 128 }}
            />
          </Group>
          <Grid>
            {members?.getMembers.map((member) => (
              <Grid.Col sm={3} span={6} key={nanoid()}>
                <MemberAvatar {...member} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      )}
    </ManagementLayout>
  );
}
