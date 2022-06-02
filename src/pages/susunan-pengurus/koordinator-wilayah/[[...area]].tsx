import { useState } from "react";
import { Text, Grid, Group, Input } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Search } from "tabler-icons-react";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

const areas = [
  { id: 1, name: "ambon" },
  { id: 2, name: "balikpapan" },
  { id: 3, name: "banda aceh" },
  { id: 4, name: "bandar lampung" },
  { id: 5, name: "banjar" },
  { id: 6, name: "banjarbaru" },
  { id: 7, name: "banjarmasin" },
  { id: 8, name: "batam" },
  { id: 9, name: "bontang" },
  { id: 10, name: "cilegon" },
  { id: 11, name: "cirebon" },
  { id: 12, name: "bandung" },
];

interface Props {
  activeArea: number;
}

export default function KoordinatorWilayah({ activeArea }: Props) {
  const [currentAreaId, setCurrentAreaId] = useState<number>(activeArea);
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebouncedValue(filter, 500);
  const {
    data: members,
    isLoading,
    isFetching,
  } = useGetMembersQuery({
    limit: 8,
    field: areas.find((area) => area.id === currentAreaId).name,
  });

  if (isLoading) <div>Loadingg...</div>;

  return (
    <ManagementLayout
      title="Koordinator Wilayah"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Grid>
        <Grid.Col span={3}>
          <Group
            p={20}
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              background: theme.colors.dark[5],
            })}
          >
            <Text weight="bold">List Wilayah</Text>
            <Input
              placeholder="Cari Wilayah"
              icon={<Search />}
              sx={(theme) => ({
                border: `1px solid`,
                borderColor: "#eaeaea",
                borderRadius: theme.radius.md,
                input: {
                  color: theme.other.gray,
                },
              })}
              rightSection={
                <Text
                  size="xs"
                  onClick={() => setFilter("")}
                  sx={(theme) => ({
                    cursor: "pointer",
                    color: theme.other.gray,
                  })}
                >
                  X
                </Text>
              }
              variant="unstyled"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              mb={20}
            />
            <Group direction="column">
              {areas
                .filter((area) =>
                  area.name.includes(debouncedFilter.toLowerCase())
                )
                .map((area) => (
                  <Text
                    color={currentAreaId === area.id ? "orange" : "gray"}
                    weight={currentAreaId === area.id ? "bold" : "normal"}
                    transform="capitalize"
                    onClick={() => setCurrentAreaId(area.id)}
                    key={area.id}
                    sx={{ cursor: "pointer" }}
                  >
                    {area.name}
                  </Text>
                ))}
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={9}>
          {isFetching ? (
            <div>Loading...</div>
          ) : (
            <AvatarCarousel
              data={members.getMembers}
              rows={2}
              slidesToShow={3}
            />
          )}
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let tab = areas.find((area) => {
    return area.name.toLowerCase() == (query.area as string);
  });
  tab = !tab ? areas[0] : tab;
  return {
    props: { activeArea: tab.id },
  };
};
