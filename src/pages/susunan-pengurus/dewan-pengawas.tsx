import { AvatarCarousel } from "components/common";
import { ManagementLayout } from "components/layouts";
import { MemberAvatar } from "components/common";
import { Grid } from "@mantine/core";
import { api, useGetMembersQuery } from "generated/graphql";
import { GetServerSideProps } from "next";
import { wrapper } from "redux/store";

export default function DewanPengawas() {
  const { data: members, isLoading } = useGetMembersQuery({
    limit: 5,
    field: "Dewan Pengawas",
  });
  console.log({ members });
  if (isLoading && !members) {
    return <div>Loading...</div>;
  }
  if (!members) {
    return <div>No members</div>;
  }

  return (
    <ManagementLayout
      title="Dewan Pengawas"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      {/* <AvatarCarousel data={members?.getMembers} /> */}
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
