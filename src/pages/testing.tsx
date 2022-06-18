import { MerchCard } from "components/merch";
import { SectionContainer, EmblaCarousel } from "components/common";
import { useGetMerchListQuery, api } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function Testing() {
  const { data, isLoading } = useGetMerchListQuery({ limit: 7 });
  if (isLoading) <div>Loading...</div>;
  return (
    <SectionContainer title="testing" lightBackground containerSize={1315}>
      <EmblaCarousel
        loop
        slidesPerView={4}
        withArrows
        marginsBetween={4}
        breakpoints={[
          {
            smallerThan: 1220,
            slidesPerView: 3,
          },
          {
            smallerThan: 959,
            slidesPerView: 2,
          },
        ]}
        withDots
      >
        {data?.getMerchList.map((item) => (
          <MerchCard key={item.id} data={item} />
        ))}
      </EmblaCarousel>
    </SectionContainer>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetMerchList.initiate({
        limit: 7,
      })
    );

    Promise.all(api.util.getRunningOperationPromises());

    return {
      props: {},
    };
  });
