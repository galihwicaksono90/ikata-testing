import { VacancyLayout } from "components/layouts";
import { useGetCompanyJobsQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";
import { api } from "generated/graphql";

export default function LowonganPekerjaan() {
  const { data, isLoading } = useGetCompanyJobsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <VacancyLayout title="Lowongan Beasiswa" data={data.getCompanyJobs} />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(api.endpoints.GetCompanyJobs.initiate());
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
