import { Grid, Group, Paper, Text } from "@mantine/core";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { useGetMembersQuery } from "generated/graphql";
import { setDewanPengawasTabPosition } from "redux/general/generalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const data = [
  "Pengurus Inti",
  "Biro Organisasi",
  "Biro Kerjasama",
  "Biro Dana & Pengembangan Kewirausahaan",
  "Biro Penelitian & Pengembangan",
  "Biro Sosial Budaya",
  "Biro Human & Publikasi",
];

export default function PengurusPusat() {
  const tabPosition = useAppSelector(
    (state) => state.general.dewanPengawasTabPosition
  );
  const dispatch = useAppDispatch();

  const { data: members, status, refetch } = useGetMembersQuery({ limit: 5 });

  const onClick = (index: number) => {
    dispatch(setDewanPengawasTabPosition(index));
    refetch();
  };

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
