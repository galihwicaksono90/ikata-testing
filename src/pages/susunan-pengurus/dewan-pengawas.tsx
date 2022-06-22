import { Grid } from "@mantine/core";
import { MemberAvatar } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/mockGraphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function DewanPengawas() {
  const { data: members, isLoading } = useGetMembersQuery({
    limit: 5,
    field: "Dewan Pengawas",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!members) {
    return <div>No members</div>;
  }

  return (
    <ManagementLayout title="Dewan Pengawas">
      <Grid>
        <Grid.Col sm={12} span={6}>
          <MemberAvatar data={members.getMembers[0]} withClassYear withTitle />
        </Grid.Col>
        {members.getMembers.slice(-4).map((member, index) => (
          <Grid.Col sm={3} span={6} key={index}>
            <MemberAvatar data={member} withClassYear withTitle />
          </Grid.Col>
        ))}
      </Grid>
    </ManagementLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(
      api.endpoints.GetMembers.initiate({
        limit: 5,
        field: "Dewan Pengawas",
      })
    );
    Promise.all(api.util.getRunningOperationPromises());
    return {
      props: {},
    };
  });
