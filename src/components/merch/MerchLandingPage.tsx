import { SectionContainer } from "components/common";
import { MerchCarousel } from "components/merch";
import { useGetMerchandisesQuery } from "generated/graphql";
import { getMerchandisesDefaultParams } from "utils/defaultParams";

export const MerchLandingPage = () => {
  const { data, isLoading } = useGetMerchandisesQuery({
    params: getMerchandisesDefaultParams,
  });

  return (
    <SectionContainer
      title="MERCHANDISE"
      noData={!data?.getMerchandises.length}
      lightBackground
      containerSize={1315}
    >
      <MerchCarousel data={data?.getMerchandises} />
    </SectionContainer>
  );
};
