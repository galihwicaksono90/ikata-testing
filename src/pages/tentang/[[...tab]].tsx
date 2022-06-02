import { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import { AboutCarousel, AboutDescription } from "components/about";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import { AboutType, api, About, Testimony } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import { useRouter } from "next/router";

interface AboutProps {
  data?: {
    jurusan: About;
    organisasi: About;
    testimonies: Testimony[];
  };
}

const tabObject = {
  0: "ikata",
  1: "jurusan",
  2: "ketua",
};

export default function AboutPage({ data }: AboutProps) {
  const [activeTab, setActiveTab] = useState(0);
  const { query, push } = useRouter();

  useEffect(() => {
    setActiveTab(() => {
      const tab = query?.tab;
      console.log({ tab });
      if (!Array.isArray(tab)) return 0;

      const key = Object.keys(tabObject).find(
        (key) => tabObject[parseFloat(key)] === tab[0]
      );
      console.log({ key });

      return key ? parseFloat(key) : 0;
    });
  }, []);

  const onTabChange = (active: number, tabKey: string) => {
    push(`/tentang/${tabKey}`, undefined, { shallow: true });
    setActiveTab(active);
  };

  return (
    <MainLayout>
      <Container pt={40}>
        <Tabs
          active={activeTab}
          onTabChange={onTabChange}
          variant="pills"
          tabPadding={40}
          sx={(theme) => ({
            "& .mantine-Tabs-tabControl.mantine-Tabs-pills": {
              borderRadius: 50,
              color: theme.primaryColor,
              border: `1px solid ${theme.primaryColor}`,
              "&.mantine-Tabs-tabActive": {
                color: theme.white,
                background: theme.primaryColor,
              },
            },
          })}
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
          <Tabs.Tab label="Ketua Ikata" tabKey="ketua">
            <AboutCarousel data={data.testimonies} />
          </Tabs.Tab>
        </Tabs>
      </Container>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
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
        },
      };
    }

    /* Promise.all(api.util.getRunningOperationPromises()); */
  });
