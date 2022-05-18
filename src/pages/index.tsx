import { AlumniLandingPage } from "components/alumni";
import { ArticleLandingPage } from "components/article";
import { AdBanner, HeroImage } from "components/common";
import { MainLayout } from "components/layouts";
import { MerchCarousel } from "components/merch";
import { NewsLandingPage } from "components/news";
import { api, ArticleType, VacancyType } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function Home() {
  return (
    <MainLayout>
      <HeroImage />
      <NewsLandingPage />
      <AdBanner src="/banner1.png" />
      <ArticleLandingPage />
      <AlumniLandingPage />
      <AdBanner src="/banner2.png" />
      <MerchCarousel />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    // hero image data
    await store.dispatch(
      api.endpoints.GetHeroImages.initiate({
        limit: 4,
      })
    );
    // news  data
    await store.dispatch(
      api.endpoints.GetNewsItems.initiate({
        limit: 4,
      })
    );
    // articles data
    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 5,
        type: ArticleType.Scientific,
      })
    );
    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        limit: 5,
        type: ArticleType.NonScientific,
      })
    );
    await store.dispatch(
      api.endpoints.GetMerchList.initiate({
        limit: 5,
      })
    );
    await store.dispatch(
      api.endpoints.GetVacancies.initiate({
        type: VacancyType.Job,
      })
    );
    await store.dispatch(
      api.endpoints.GetVacancies.initiate({
        type: VacancyType.Scholarship,
      })
    );

    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
