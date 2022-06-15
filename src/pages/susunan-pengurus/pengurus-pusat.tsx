import { Box, Tabs, Select, MediaQuery } from "@mantine/core";
import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";

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
  initialTab: number;
}

export default function PengurusPusat({ initialTab }: Props) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(initialTab);

  const { data: members, isFetching } = useGetMembersQuery({
    limit: 10,
    field: organization[currentTab].label,
  });

  const onTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
    setUrl(organization[tabIndex].value.toLowerCase());
  };

  const onSelectTab = (value: string) => {
    setCurrentTab(parseFloat(value));
    setUrl(organization.find((org) => org.value === value).label.toLowerCase());
  };

  const setUrl = (text: string) => {
    router.push(`/susunan-pengurus/pengurus-pusat?tab=${text}`, undefined, {
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
          sx={(theme) => ({
            "& input": {
              color: theme.colors.orange[0],
              fontSize: 14,
              fontWeight: 700,
              boxShadow: "0px 4px 7px 0px #00000026",
            },
          })}
        />
      </MediaQuery>
      <Tabs
        active={currentTab}
        onTabChange={onTabChange}
        orientation="vertical"
        variant="pills"
        sx={(theme) => ({
          marginBottom: 50,
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
            <Box sx={{ maxWidth: "100%" }}>
              <AvatarCarousel
                loading={isFetching}
                data={members.getMembers}
                slidesToShow={3}
                rows={2}
                responsive={[
                  {
                    breakpoint: 555,
                    settings: { slidesToShow: 2, slidesToScroll: 2 },
                  },
                  {
                    breakpoint: 400,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                  },
                ]}
                withClassYear
                withTitle
              />
            </Box>
          </Tabs.Tab>
        ))}
      </Tabs>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    let initialTab = 0;
    const tabQuery = query.tab as string;

    if (query?.tab) {
      const tab = organization.findIndex(
        (t) => t.value.toLowerCase() === tabQuery.toLowerCase()
      );
      initialTab = tab < 0 ? 0 : tab;
    }

    await store.dispatch(
      api.endpoints.GetMembers.initiate({
        limit: 10,
        field: organization[initialTab].label,
      })
    );

    return {
      props: { initialTab },
    };
  });
