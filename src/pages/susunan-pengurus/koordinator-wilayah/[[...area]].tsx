import { useState } from "react";
import { Text, Grid, Group, Input, MediaQuery, Select } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Search } from "tabler-icons-react";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import { useRouter } from "next/router";
import { capitalize } from "utils/capitalize";

interface Area {
  label: string;
  value: string;
}

interface Props {
  initialArea: Area;
  areas: Area[];
}

export default function KoordinatorWilayah({ initialArea, areas }: Props) {
  const router = useRouter();
  const [currentArea, setCurrentArea] = useState(initialArea);
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebouncedValue(filter, 500);
  const {
    data: members,
    isLoading,
    isFetching,
  } = useGetMembersQuery({
    limit: 8,
    field: currentArea.label,
  });

  if (isLoading) <div>Loadingg...</div>;

  const handleAreaChange = (area: Area) => {
    setCurrentArea(area);
    setUrl(area.label);
  };

  const onSelectArea = (value: string) => {
    const selectedArea = areas.find((area) => area.value === value);
    setCurrentArea(selectedArea);
    setUrl(selectedArea.label);
  };

  const setUrl = (area: string) => {
    router.push(`/susunan-pengurus/koordinator-wilayah/${area.toLowerCase()}`);
  };

  return (
    <ManagementLayout
      title="Koordinator Wilayah"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Select
          data={areas}
          value={currentArea.value}
          onChange={onSelectArea}
          mb={40}
          size="lg"
        />
      </MediaQuery>
      <Grid>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
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
                onChange={(e: any) => setFilter(e.target.value)}
                mb={20}
              />
              <Group direction="column">
                {areas
                  .filter((area) =>
                    area.label.includes(debouncedFilter.toLowerCase())
                  )
                  .map((area) => (
                    <Text
                      color={
                        currentArea.value === area.value ? "orange" : "gray"
                      }
                      weight={
                        currentArea.value === area.value ? "bold" : "normal"
                      }
                      transform="capitalize"
                      onClick={() => handleAreaChange(area)}
                      key={area.value}
                      sx={{ cursor: "pointer" }}
                      component="a"
                    >
                      {area.label}
                    </Text>
                  ))}
              </Group>
            </Group>
          </Grid.Col>
        </MediaQuery>
        <Grid.Col md={9} span={12}>
          {isFetching ? (
            <div>Loading...</div>
          ) : (
            <AvatarCarousel
              data={members.getMembers}
              rows={2}
              slidesToShow={3}
              responsive={[
                {
                  breakpoint: 555,
                  settings: { slidesToShow: 2, slidesToScroll: 2 },
                },
              ]}
            />
          )}
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    const { data: response } = await store.dispatch(
      api.endpoints.GetAreas.initiate()
    );

    const areas = response.getAreas.map((item) => ({
      value: item.id.toString(),
      label: capitalize(item.name),
    }));

    /* let tab = areas[0];
     * let areaQuery: any; */

    /* if (query?.area) {
     *   areaQuery = areas.find((area) => {
     *     return area.label.toLowerCase() == (query.area as string);
     *   });
     * }
     * tab = !areaQuery ? tab : areaQuery; */

    let initialAreaIndex = areas.findIndex((area) => {
      if (!Array.isArray(query?.area) || query.area.length === 0) return false;
      return area.label.toLowerCase() == query.area[0].toLowerCase();
    });
    initialAreaIndex = initialAreaIndex === -1 ? 0 : initialAreaIndex;

    console.log({ initialAreaIndex });
    return {
      props: { initialArea: areas[initialAreaIndex], areas: areas },
    };
  });
