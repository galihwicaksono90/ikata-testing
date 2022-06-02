import { Box, Tabs } from "@mantine/core";
import { nanoid } from "@reduxjs/toolkit";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const organization = [
  { id: 0, name: "Pengurus Inti" },
  { id: 1, name: "Biro Organisasi" },
  { id: 2, name: "Biro Kerjasama" },
  { id: 3, name: "Biro Dana & Pengembangan Kewirausahaan" },
  { id: 4, name: "Biro Penelitian & Pengembangan" },
  { id: 5, name: "Biro Sosial Budaya" },
  { id: 6, name: "Biro Human & Publikasi" },
];

interface Props {
  activeTab: number;
}

export default function PengurusPusat({ activeTab }: Props) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(activeTab);

  const {
    data: members,
    refetch,
    isLoading,
    isFetching,
  } = useGetMembersQuery({
    limit: 10,
    field: organization[currentTab].name,
  });

  const onTabChange = (tabIndex: number) => {
    console.log({ tabIndex });
    /* dispatch(setPengurusPusatTabPosition(tabIndex)); */
    setCurrentTab(tabIndex);
    router.push(
      `/susunan-pengurus/pengurus-pusat/${organization[
        tabIndex
      ].name.toLowerCase()}`,
      undefined,
      { shallow: true }
    );
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
            width: 264,
          },
          "& .mantine-Tabs-tabControl.mantine-Tabs-pills": {
            fontWeight: 700,
            fontSize: theme.fontSizes.sm,
            textAlign: "left",
            borderRadius: theme.radius.md,
            background: theme.colors.dark[5],
            height: 60,
            boxShadow: theme.shadows.lg,
            "&.mantine-Tabs-tabActive": {
              color: theme.primaryColor,
            },
          },
          "& .mantine-Tabs-body": {
            maxWidth: "75%",
          },
        })}
      >
        {organization.map((org) => (
          <Tabs.Tab label={org.name} key={nanoid()}>
            {isFetching ? (
              <div>Loading...</div>
            ) : (
              <Box sx={{ maxWidth: "100%" }}>
                <AvatarCarousel
                  data={!!members?.getMembers ? members.getMembers : []}
                  slidesToShow={3}
                  rows={2}
                ></AvatarCarousel>
              </Box>
            )}
          </Tabs.Tab>
        ))}
      </Tabs>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let tab = organization.findIndex((org) => {
    return org.name.toLowerCase() == (query.field as string);
  });
  tab = tab === -1 ? 0 : tab;
  return {
    props: { activeTab: tab },
  };
};
