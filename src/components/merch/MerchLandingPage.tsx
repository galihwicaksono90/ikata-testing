import { SectionContainer } from "components/common";
import { MerchCarousel } from "components/merch";
import { useGetMerchListQuery } from "generated/mockGraphql";

export const MerchLandingPage = () => {
  const { data, isLoading } = useGetMerchListQuery({ limit: 5 });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <SectionContainer
      title="MERCHANDISE"
      noData={!data?.getMerchList.length}
      lightBackground
      containerSize={1315}
    >
      <MerchCarousel data={data?.getMerchList} />
    </SectionContainer>
  );
};
