import { Box, Tabs, Select, MediaQuery } from "@mantine/core";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { useGetMembersQuery } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const organization = [
  { value: "0", label: "Pengurus Inti" },
  { value: "1", label: "Biro Organisasi" },
  { value: "2", label: "Biro Kerjasama" },
  { value: "3", label: "Biro Dana & Pengembangan Kewirausahaan" },
  { value: "4", label: "Biro Penelitian & Pengembangan" },
  { value: "5", label: "Biro Sosial Budaya" },
  { value: "6", label: "Biro Human & Publikasi" },
];

interface Props {
  activeTab: number;
}

export default function PengurusPusat({ activeTab }: Props) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(activeTab);

  const { data: members, isFetching } = useGetMembersQuery({
    limit: 10,
    field: organization[currentTab].label,
  });

  const onTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
    setUrl(organization[tabIndex].label.toLowerCase());
  };

  const onSelectTab = (value: string) => {
    setCurrentTab(parseFloat(value));
    setUrl(organization.find((org) => org.value === value).label.toLowerCase());
  };

  const setUrl = (text) => {
    router.push(`/susunan-pengurus/pengurus-pusat/${text}`, undefined, {
      shallow: true,
    });
  };

  return (
    <ManagementLayout
      title="Pengurus Pusat"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Select
          size="lg"
          mb={40}
          data={organization}
          value={currentTab.toString()}
          onChange={onSelectTab}
        />
      </MediaQuery>
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
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            "& .mantine-Tabs-tabsListWrapper": {
              display: "none",
            },
            "& .mantine-Tabs-body": {
              maxWidth: "100%",
            },
          },
        })}
      >
        {organization.map((org) => (
          <Tabs.Tab label={org.label} key={org.value}>
            {isFetching ? (
              <div>Loading...</div>
            ) : (
              <Box sx={{ maxWidth: "100%" }}>
                <AvatarCarousel
                  data={!!members?.getMembers ? members.getMembers : []}
                  slidesToShow={3}
                  rows={2}
                  responsive={[
                    {
                      breakpoint: 555,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                  ]}
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
    if (!Array.isArray(query?.field) || query.field.length === 0) return false;
    return org.label.toLowerCase() == (query.field[0].toLowerCase() as string);
  });
  tab = tab === -1 ? 0 : tab;
  return {
    props: { activeTab: tab },
  };
};
