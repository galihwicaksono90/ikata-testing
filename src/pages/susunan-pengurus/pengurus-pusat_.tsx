import { useState, useEffect } from "react";
import { Grid, Text, Paper, Group, Tabs, Box } from "@mantine/core";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/graphql";
import { setDewanPengawasTabPosition } from "redux/general/generalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const organization = [
  "Pengurus Inti",
  "Biro Organisasi",
  "Biro Kerjasama",
  "Biro Dana & Pengembangan Kewirausahaan",
  "Biro Penelitian & Pengembangan",
  "Biro Sosial Budaya",
  "Biro Human & Publikasi",
];

export default function PengurusPusat() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabPosition = useAppSelector(
    (state) => state.general.dewanPengawasTabPosition
  );
  const dispatch = useAppDispatch();

  const {
    data: members,
    refetch,
    isLoading,
  } = useGetMembersQuery({
    limit: 5,
  });

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const onTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };
  return (
    <ManagementLayout
      title="Pengurus Pusat"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <Tabs
        active={currentTab}
        onTabChange={onTabChange}
        orientation="vertical"
        variant="pills"
        sx={(theme) => ({
          "& .mantine-Tabs-tabsList": {
            gap: 20,
          },
          "& .mantine-Tabs-tabControl.mantine-Tabs-pills": {
            textAlign: "left",
            borderRadius: theme.radius.md,
            background: theme.colors.dark[7],
            height: 60,
            boxShadow: theme.shadows.lg,
            "&.mantine-Tabs-tabActive": {
              color: theme.primaryColor,
            },
          },
          "& .mantine-Tabs-body": {
            width: "100%",
          },
        })}
      >
        {organization.map((org) => (
          <Tabs.Tab label={org}>
            <Box>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <AvatarCarousel
                  data={!!members?.getMembers ? members.getMembers : []}
                ></AvatarCarousel>
              )}
            </Box>
          </Tabs.Tab>
        ))}
      </Tabs>
    </ManagementLayout>
  );
}
