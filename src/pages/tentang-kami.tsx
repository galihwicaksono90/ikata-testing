import { MainLayout } from "components/layouts";
import { About, api, Testimony } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";
import { Container } from "components/common";
import { Tabs } from "@mantine/core";
import { AboutDescription, AboutCarousel } from "components/about";
import { useStyles } from "theme";

interface AboutProps {
  data?: {
    jurusan: About;
    organisasi: About;
    testimonies: Testimony[];
  };
  initialTab: number;
}

const tabObject = ["ikata", "jurusan", "ketua-ikata"];

export default function AboutPage({ data, initialTab }: AboutProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const { classes } = useStyles();
  const router = useRouter();

  const onTabChange = (active: number, tabKey: string) => {
    router.push(`/tentang-kami?tab=${tabKey}`, undefined, { shallow: true });
    setActiveTab(active);
  };

  if (!data) {
    return "no data";
  }

  return (
    <MainLayout>
      <Container pt={40}>
        <Tabs
          active={activeTab}
          onTabChange={onTabChange}
          variant="pills"
          tabPadding={40}
          className={classes.tab}
        >
          <Tabs.Tab label="Tentang IKATA" tabKey="ikata">
            <AboutDescription title="Tentang IKATA" data={data.jurusan} />
          </Tabs.Tab>
          <Tabs.Tab
            label="Tentang Jurusan Teknik Pertambangan"
            tabKey="jurusan"
          >
            <AboutDescription
              title={`Tentang Jurusan Teknik Pertambangan UPN "Veteran" Yogyakarta`}
              data={data.organisasi}
            />
          </Tabs.Tab>
          <Tabs.Tab label="Ketua Ikata" tabKey="ketua-ikata">
            <AboutCarousel data={data.testimonies} />
          </Tabs.Tab>
        </Tabs>
      </Container>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    let initialTab = 0;

    if (query?.tab) {
      const tab = tabObject.findIndex((t) => t === query.tab);
      initialTab = tab < 0 ? 0 : tab;
    }

    try {
      const response = await store.dispatch(
        api.endpoints.GetAbout.initiate({
          limit: 3,
        })
      );
      return {
        props: {
          data: {
            jurusan: response.data.jurusan,
            organisasi: response.data.organisasi,
            testimonies: response.data.getTestimonies,
          },
          initialTab,
        },
      };
    } catch (e) {
      return {
        props: {
          data: {
            jurusan: {},
            organisasi: {},
            testimonies: [],
          },
          initialTab,
        },
      };
    }
  });
