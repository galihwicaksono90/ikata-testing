import { Avatar, Divider, Group, MediaQuery } from "@mantine/core";
import { TextLink } from "components/common";
import { UserCircle } from "tabler-icons-react";

interface Props {
  hidden?: boolean;
}

export const UserAvatar = ({ hidden }: Props) => {
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
      </Group>
    </MediaQuery>
  );
};
