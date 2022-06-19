import { Grid, MediaQuery, Select, Stack, UnstyledButton } from "@mantine/core";
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
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Select
          size="lg"
          mb={40}
          data={organization}
          value={currentTab.toString()}
          onChange={onSelectTab}
          searchable
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
      <Grid>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Grid.Col span={3}>
            <Stack>
              {organization.map((org, index) => (
                <TabButton
                  key={index}
                  active={currentTab === index}
                  onClick={() => onTabChange(index)}
                >
                  {org.label}
                </TabButton>
              ))}
            </Stack>
          </Grid.Col>
        </MediaQuery>
        <Grid.Col md={9} span={12}>
          <AvatarCarousel
            data={members?.getMembers}
            loading={isFetching}
            withClassYear
            withTitle
            slidesToShow={3}
            responsive={[
              {
                slidesPerView: 2,
                smallerThan: 909,
              },
              {
                slidesPerView: 1,
                smallerThan: 520,
              },
            ]}
          />
        </Grid.Col>
      </Grid>
    </ManagementLayout>
  );
}

const TabButton = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <UnstyledButton
      className={active ? "active" : ""}
      onClick={onClick}
      sx={(theme) => ({
        width: 264,
        height: 60,
        background: theme.colors.dark[5],
        boxShadow: theme.shadows.xl,
        borderRadius: theme.radius.md,
        padding: "17px 20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontWeight: 500,
        fontSize: "14px",
        "&:hover": {
          background: theme.fn.lighten(theme.colors.dark[5], 0.1),
        },
        "&.active": {
          color: theme.colors.orange[0],
        },
      })}
    >
      {children}
    </UnstyledButton>
  );
};

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
