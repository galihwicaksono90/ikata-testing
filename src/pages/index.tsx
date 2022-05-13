import { Container, Box } from "@mantine/core";
import { MainLayout } from "components/layouts";
import HeroImage from "components/HeroImage";
import News from "components/News";
import AdBanner from "components/AdBanner";
import Articles from "components/Articles";
import Alumni from "components/Alumni";
import MerchandiseCarousel from "components/MerchandiseCarousel";
import { api, ArticleType } from "generated/graphql";

import "swiper/css";
import "swiper/css/pagination";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function Home() {
  return (
    <MainLayout>
      <HeroImage />
      <News />
      <AdBanner src="/banner1.png" />
      <Articles />
      <Alumni />
      <AdBanner src="/banner2.png" />
      <MerchandiseCarousel />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 4,
        type: ArticleType.Scientific,
      })
    );
    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 4,
        type: ArticleType.NonScientific,
      })
    );
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
