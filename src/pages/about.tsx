import { Tabs } from "@mantine/core";
import { AboutCarousel, AboutDescription } from "components/about";
import { Container } from "components/common";
import { MainLayout } from "components/layouts";
import { AboutType, api, About, Testimony } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

interface AboutProps {
  data?: {
    jurusan: About;
    organisasi: About;
    testimonies: Testimony[];
  };
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
