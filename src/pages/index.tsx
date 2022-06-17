import { AlumniLandingPage } from "components/alumni";
import { ArticleLandingPage } from "components/article";
import { AdBanner, HeroImage } from "components/common";
import { MainLayout } from "components/layouts";
import { MerchCarousel } from "components/merch";
import { ActivityLandingPage } from "components/activity";
import { NewsLandingPage } from "components/news";
import { api, ArticleType, VacancyType } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function Home() {
  //return <ArticleLandingPage />;
  return (
    <MainLayout>
      <HeroImage />
      <NewsLandingPage />
      <ActivityLandingPage />
      <AdBanner src="/banner1.png" />
      <ArticleLandingPage />
      {/*
      <AlumniLandingPage />
      <AdBanner src="/banner2.png" />
      <MerchCarousel /> */}
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetHeroImages.initiate({
        limit: 5,
      })
    );

    await store.dispatch(
      api.endpoints.GetNewsItems.initiate({
        limit: 6,
      })
    );

    await store.dispatch(
      api.endpoints.GetActivities.initiate({
        limit: 4,
      })
    );

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 4,
        type: ArticleType.Scientific,
      })
    );

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 0,
        type: ArticleType.NonScientific,
      })
    );

    Promise.all(api.util.getRunningOperationPromises());

    return {
      props: {},
    };
  });
