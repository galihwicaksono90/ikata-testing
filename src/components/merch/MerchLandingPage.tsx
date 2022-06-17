import { SectionContainer, Carousel, Container } from "components/common";
import { useGetMerchListQuery } from "generated/mockGraphql";
import { MerchCard } from "components/merch";

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
    >
      <Carousel slidesToShow={4} arrows autoplay>
        {data?.getMerchList.map((merch, index) => (
          <MerchCard data={merch} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};
