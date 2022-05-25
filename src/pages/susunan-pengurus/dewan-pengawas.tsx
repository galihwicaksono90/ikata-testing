import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, ArticleType, useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function DewanPengawas() {
  const { data: members, isLoading } = useGetMembersQuery({ limit: 5 });
  return (
    <ManagementLayout
      title="Dewan Pengawas"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AvatarCarousel data={members?.getMembers} />
      )}
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetMembers.initiate({
        limit: 8,
      })
    );
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
