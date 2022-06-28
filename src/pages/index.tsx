import { AlumniLandingPage } from "components/alumni";
import { ArticleLandingPage } from "components/article";
import {
  AdBanner,
  HeroImage,
  BackToTop,
  PriceListAffix,
} from "components/common";
import { MainLayout } from "components/layouts";
import { MerchLandingPage } from "components/merch";
import { VacancyLandingPage } from "components/vacancy";
import { ActivityLandingPage } from "components/activity";
import { NewsLandingPage } from "components/news";
import {
  api as mockApi,
  ArticleType,
  VacancyType,
} from "generated/mockGraphql";
import { api } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import * as params from "utils/defaultParams";

export default function Home() {
  return (
    <MainLayout>
      <HeroImage />
      <NewsLandingPage />
      <ActivityLandingPage />
      <AdBanner src="/banner1.png" />
      <ArticleLandingPage />
      <VacancyLandingPage />
      <AlumniLandingPage />
      <MerchLandingPage />
      <AdBanner src="/banner2.png" />
      <BackToTop />
      <PriceListAffix />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetSliders.initiate({
        params: params.getSlidersDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetNews.initiate({
        params: params.getNewsDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetActivities.initiate({
        params: params.getActivitiesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        params: params.getScientificArticlesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetArticles.initiate({
        params: params.getNonScientificArticlesDefaultParams,
      })
    );

    await store.dispatch(
      mockApi.endpoints.GetVacancies.initiate({
        type: VacancyType.Job,
      })
    );

    await store.dispatch(
      api.endpoints.GetAlumniBusinesses.initiate({
        params: params.getAlumniBusinessesDefaultParams,
      })
    );

    await store.dispatch(
      api.endpoints.GetMerchandises.initiate({
        params: params.getMerchandisesDefaultParams,
      })
    );

    await store.dispatch(mockApi.endpoints.GetCompanyJobs.initiate({}));

    Promise.all(mockApi.util.getRunningOperationPromises());

    return {
      props: {},
    };
  });
