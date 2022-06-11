import React from "react";
import { ManagementLayout } from "components/layouts";
import { AvatarCarousel } from "components/common";
import { api, ArticleType, useGetMembersQuery } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function KoordinatorAngkatan() {
  const { data: members, isLoading } = useGetMembersQuery({
    limit: 8,
    field: "Koordinator Angkatan",
  });
  return (
    <ManagementLayout
      title="Koordinator Angkatan"
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
        field: "Koordinator Angkatan",
      })
    );
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
