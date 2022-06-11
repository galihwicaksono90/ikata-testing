import { VacancyLayout } from "components/layouts";
import { useGetCompanyJobsQuery, api } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function LowonganPekerjaan() {
  const { data, isLoading } = useGetCompanyJobsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <VacancyLayout title="Lowongan Pekerjaan" data={data.getCompanyJobs} />
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(api.endpoints.GetCompanyJobs.initiate());
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
