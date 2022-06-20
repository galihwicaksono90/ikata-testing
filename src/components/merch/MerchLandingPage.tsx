import { SectionContainer, Carousel, Container } from "components/common";
import { useGetMerchListQuery } from "generated/mockGraphql";
import { MerchCard, MerchCarousel } from "components/merch";

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
