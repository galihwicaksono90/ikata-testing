import { Avatar, Divider, Group, MediaQuery, Menu, Text } from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons";
import { TextLink } from "components/common";
import { useLazyGetProfileQuery } from "generated/graphql";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { resetUser } from "redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

interface Props {
  hidden?: boolean;
}

export const UserAvatar = ({ hidden }: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [getProfile] = useLazyGetProfileQuery();
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      if (!token || token === "undefined") return;
      try {
        await getProfile();
      } catch (e) {
        console.error({ e });
      }
    };
    if (!user) init();
  }, [getProfile, user]);

  const logout = useCallback(() => {
    dispatch(resetUser());
    localStorage.removeItem("token");
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
          <IconUserCircle size={30} color="white" />
        </Avatar>
        {!user ? (
          <>
            <TextLink type="white" href="/login" size="sm">
              Login
            </TextLink>
            <Divider
              orientation="vertical"
              color="primary"
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
          <div>
            Hi,{" "}
            <Menu
              control={
                <Text color="orange" sx={{ cursor: "pointer" }}>
                  {user.nickName}
                </Text>
              }
              styles={(theme) => ({
                body: {
                  background: theme.white,
                },
                itemLabel: {
                  color: theme.colors.dark[8],
                  fontSize: theme.fontSizes.sm,
                },
                itemIcon: {
                  color: theme.colors.dark[8],
                },
              })}
            >
              <Menu.Item
                icon={<IconUserCircle />}
                onClick={() => router.push("/profile")}
              >
                Lihat Profil
              </Menu.Item>
              <Menu.Item icon={<IconLogout />} onClick={logout}>
                Keluar
              </Menu.Item>
            </Menu>
          </div>
        )}
      </Group>
    </MediaQuery>
  );
};
