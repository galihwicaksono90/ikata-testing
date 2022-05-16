import { useState } from "react";
import { Text, Grid, Group, Input, Button } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Search } from "tabler-icons-react";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";

const areas = [
  {
    id: 1,
    name: "ambon",
    staff: [
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Budi Gunawan",
        title: "Wakil Ketua",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Setyo Kurniawan",
        title: "Bendahara",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
    ],
  },
  {
    id: 2,
    name: "balikpapan",
    staff: [
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Budi Gunawan",
        title: "Wakil Ketua",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Setyo Kurniawan",
        title: "Bendahara",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
    ],
  },
  {
    id: 3,
    name: "banda aceh",
    staff: [
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Budi Gunawan",
        title: "Wakil Ketua",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Setyo Kurniawan",
        title: "Bendahara",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
    ],
  },
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

export default function koordinatorWilayah() {
  const [currentAreaId, setCurrentAreaId] = useState<number>(1);
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebouncedValue(filter, 500);

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
              border: `1px solid`,
              borderColor: theme.colors.gray[2],
              borderRadius: theme.radius.md,
            })}
          >
            <Text weight="bold">List Wilayah</Text>
            <Input
              placeholder="Cari Wilayah"
              icon={<Search />}
              sx={(theme) => ({
                backgroundColor: theme.white,

                border: `1px solid`,
                borderColor: theme.colors.gray[2],
                borderRadius: theme.radius.md,
                input: {
                  color: theme.colors.dark,
                },
              })}
              rightSection={
                <Text
                  size="xs"
                  color="gray"
                  onClick={() => setFilter("")}
                  sx={{ cursor: "pointer" }}
                >
                  X
                </Text>
              }
              variant="unstyled"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
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
          <AvatarCarousel
            data={areas.find((area) => area.id === currentAreaId)?.staff}
            rows={2}
            slidesToShow={3}
          />
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}
