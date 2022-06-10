import { Avatar, Divider, Group, MediaQuery } from "@mantine/core";
import { TextLink } from "components/common";
import { useLazyMeQuery } from "generated/graphql";
import { useEffect } from "react";
import { useAppSelector } from "redux/hooks";
import { UserCircle } from "tabler-icons-react";
import { showNotification } from "components/common";

interface Props {
  hidden?: boolean;
}

export const UserAvatar = ({ hidden }: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  /* const { isLoading, error } = useMeQuery({}, { skip: !!token }); */
  const [me] = useLazyMeQuery();

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      if (!!user || !token || token === "undefined") return;
      try {
        const user = await me().unwrap();
      } catch (e) {
        showNotification({
          title: e.name,
          message: e.message,
        });
      }
    };
    init();
  }, []);

  return (
    <MediaQuery
      smallerThan="md"
      styles={{ display: !hidden ? "none" : "flex" }}
    >
      <Group spacing={10}>
        <Avatar
          radius="xl"
          styles={(theme) => ({
            placeholder: { background: theme.colors.dark[8] },
          })}
        >
          <UserCircle size={30} color="white" />
        </Avatar>
        {!user ? (
          <>
            <TextLink type="white" href="/login" size="sm">
              Login
            </TextLink>
            <Divider
              orientation="vertical"
              color="orange"
              sx={{
                height: "17px",
                alignSelf: "center",
              }}
              size="md"
            />
            <TextLink href="/register" type="white" size="sm">
              Register
            </TextLink>
          </>
        ) : (
          <div>Hi, {user.nickName}</div>
        )}
      </Group>
    </MediaQuery>
  );
};
