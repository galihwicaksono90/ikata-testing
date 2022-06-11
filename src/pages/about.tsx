import { Container } from "components/common";
import { AboutDescription, AboutCarousel } from "components/about";
import { Tabs } from "@mantine/core";
import { MainLayout } from "components/layouts";
import { About, Testimony, api, GetAboutQuery } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

interface AboutProps {
  data?: GetAboutQuery;
}

export default function AboutPage({ data }: AboutProps) {
  return (
    <MainLayout>
      <Container pt={40}>
        <Tabs
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
          <Tabs.Tab label="Tentang IKATA">
            <AboutDescription title="Tentang IKATA" data={data.jurusan} />
          </Tabs.Tab>
          <Tabs.Tab label="Tentang Jurusan Teknik Pertambangan">
            <AboutDescription
              title={`Tentang Jurusan Teknik Pertambangan UPN "Veteran" Yogyakarta`}
              data={data.organisasi}
            />
          </Tabs.Tab>
          <Tabs.Tab label="Ketua Ikata">
            <AboutCarousel data={data.getTestimonies} />
          </Tabs.Tab>
        </Tabs>
      </Container>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    try {
      const data = await store.dispatch(
        api.endpoints.GetAbout.initiate({ limit: 4 })
      );
      return {
        props: {
          data: data.data,
        },
      };
    } catch (e) {
      return {
        props: {
          data: {},
        },
      };
    }
  });
