import { useState, useCallback } from "react";
import { Grid, Text, Paper, Group } from "@mantine/core";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import { setDewanPengawasTabPosition } from "redux/general/generalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useDispatch } from "react-redux";

export default function PengurusPusat() {
  const tabPosition = useAppSelector(
    (state) => state.general.dewanPengawasTabPosition
  );
  const dispatch = useAppDispatch();

  /* const [currentPageIndex, setCurrentPageIndex] = useState<number>(0); */
  const { data: members, status, refetch } = useGetMembersQuery({ limit: 5 });

  const onClick = useCallback((index: number) => {
    dispatch(setDewanPengawasTabPosition(index));
    refetch();
  }, []);

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
            {data.map((name, index) => (
              <MenuItem
                name={name}
                key={index}
                onClick={() => onClick(index)}
                isActive={tabPosition === index}
              />
            ))}
          </Group>
        </Grid.Col>
        <Grid.Col span={9}>
          {status !== "pending" ? (
            <AvatarCarousel
              data={members.getMembers}
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
      shadow={isActive ? "lg" : null}
      withBorder
    >
      <Text
        color={isActive ? "orange" : "white"}
        weight={isActive ? "bold" : "normal"}
        size="sm"
      >
        {name}
      </Text>
    </Paper>
  );
};

const data = [
  "Pengurus Inti",
  "Biro Organisasi",
  "Biro Kerjasama",
  "Biro Dana & Pengembangan Kewirausahaan",
  "Biro Penelitian & Pengembangan",
  "Biro Sosial Budaya",
  "Biro Human & Publikasi",
];

/* const data = [
 *   {
 *     name: "Pengurus Inti",
 *     staff: [
 *       {
 *         name: "Rizki Amrullah",
 *         title: "Ketua",
 *       },
 *       {
 *         name: "Budi Gunawan",
 *         title: "Wakil Ketua",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Setyo Kurniawan",
 *         title: "Bendahara",
 *       },
 *       {
 *         name: "Rizki Amrullah",
 *         title: "Ketua",
 *       },
 *       {
 *         name: "Budi Gunawan",
 *         title: "Wakil Ketua",
 *       },
 *       {
 *         name: "Setyo Kurniawan",
 *         title: "Bendahara",
 *       },
 *       {
 *         name: "Rizki Amrullah",
 *         title: "Ketua",
 *       },
 *       {
 *         name: "Budi Gunawan",
 *         title: "Wakil Ketua",
 *       },
 *     ],
 *   },
 *   {
 *     name: "Biro Organisasi",
 *     staff: [
 *       {
 *         name: "Setyo Kurniawan",
 *         title: "Bendahara",
 *       },
 *       {
 *         name: "Rizki Amrullah",
 *         title: "Ketua",
 *       },
 *       {
 *         name: "Budi Gunawan",
 *         title: "Wakil Ketua",
 *       },
 *       {
 *         name: "Rizki Amrullah",
 *         title: "Ketua",
 *       },
 *       {
 *         name: "Budi Gunawan",
 *         title: "Wakil Ketua",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *       {
 *         name: "Sri Lestari",
 *         title: "Sekretaris",
 *       },
 *     ],
 *   },
 *   { name: "Biro Kerjasama" },
 *   { name: "Biro Dana & Pengembangan Kewirausahaan" },
 *   { name: "Biro Penelitian & Pengembangan" },
 *   { name: "Biro Sosial Budaya" },
 *   { name: "Biro Human & Publikasi" },
 * ];
 *  */
