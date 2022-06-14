import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { api, useGetMembersQuery } from "generated/mockGraphql";
import { MemberAvatar } from "components/common";
import { Grid } from "@mantine/core";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function DewanPengawas() {
  const { data: members, isLoading } = useGetMembersQuery({
    limit: 5,
    field: "Dewan Pengawas",
  });
  if (isLoading && !members) {
    return <div>Loading...</div>;
  }
  if (!members) {
    return <div>No members</div>;
  }

  return (
    <ManagementLayout title="Dewan Pengawas">
      <Grid>
        <Grid.Col sm={12} span={6}>
          <MemberAvatar {...members.getMembers[0]} />
        </Grid.Col>
        {members.getMembers.slice(-4).map((member, index) => (
          <Grid.Col sm={3} span={6} key={index}>
            <MemberAvatar {...member} />
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
