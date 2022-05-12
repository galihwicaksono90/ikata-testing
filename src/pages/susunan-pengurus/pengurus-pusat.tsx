import { useState } from "react";
import { Grid, Text, Title, Box, Container, Paper, Group } from "@mantine/core";
import AvatarCarousel from "components/AvatarCarousel";
import { ManagementLayout } from "components/layouts";

const data = [
  {
    name: "Pengurus Inti",
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
        name: "Budi Gunawan",
        title: "Wakil Ketua",
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
        name: "Budi Gunawan",
        title: "Wakil Ketua",
      },
    ],
  },
  {
    name: "Biro Organisasi",
    staff: [
      {
        name: "Setyo Kurniawan",
        title: "Bendahara",
      },
      {
        name: "Rizki Amrullah",
        title: "Ketua",
      },
      {
        name: "Budi Gunawan",
        title: "Wakil Ketua",
      },
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
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
      },
      {
        name: "Sri Lestari",
        title: "Sekretaris",
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
  { name: "Biro Kerjasama" },
  { name: "Biro Dana & Pengembangan Kewirausahaan" },
  { name: "Biro Penelitian & Pengembangan" },
  { name: "Biro Sosial Budaya" },
  { name: "Biro Human & Publikasi" },
];

export default function PengurusPusat() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  return (
    <ManagementLayout
      title="Pengurus Pusat"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Grid>
        <Grid.Col span={3}>
          <Group spacing={20} direction="column">
            {data.map((item, index) => (
              <MenuItem
                name={item.name}
                key={index}
                onClick={() => setCurrentPageIndex(index)}
                isActive={currentPageIndex === index}
              />
            ))}
          </Group>
        </Grid.Col>
        <Grid.Col span={9}>
          {data[currentPageIndex]?.staff ? (
            <AvatarCarousel
              data={data[currentPageIndex].staff}
              rows={2}
              slidesToShow={3}
            />
          ) : null}
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}

const MenuItem = ({
  name,
  onClick,
  isActive,
}: {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Paper
      onClick={onClick}
      component="a"
      sx={(theme) => ({
        width: "100%",
        height: 60,
        background: theme.white,
        border: `1px solid ${theme.colors.dark[2]}`,
        display: "flex",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        "&:hover": {
          cursor: "pointer",
          boxShadow: isActive ? theme.shadows.md : theme.shadows.xs,
        },
      })}
      shadow={isActive ? "md" : null}
      withBorder
    >
      <Text
        color={isActive ? "orange" : "dark"}
        weight={isActive ? "bold" : "normal"}
        size="sm"
      >
        {name}
      </Text>
    </Paper>
  );
};
