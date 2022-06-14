import { MainLayout } from "components/layouts";
import { About, api, Testimony } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { wrapper } from "redux/store";
import { Container } from "components/common";
import { Tabs } from "@mantine/core";
import { AboutDescription, AboutCarousel } from "components/about";

interface AboutProps {
  data?: {
    jurusan: About;
    organisasi: About;
    testimonies: Testimony[];
  };
  initialTab?: number;
}

const tabObject = ["ikata", "jurusan", "ketua"];

export default function AboutPage({ data, initialTab }: AboutProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const router = useRouter();

  const onTabChange = (active: number, tabKey: string) => {
    router.push(`/tentang-kami/${tabKey}`, undefined, { shallow: true });
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log({ context });
  return {
    props: {},
  };
};
