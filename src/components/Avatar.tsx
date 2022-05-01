import { Avatar, Stack, Text, Box } from "@mantine/core";
import { Mail } from "tabler-icons-react";

export interface AvatarProps {
  name: string;
  title: string;
}

export default function AvatarComponent({ name, title }: AvatarProps) {
  return (
    <Stack align="center" mb={35}>
      <Avatar
        radius="xl"
        sx={{ height: 170, width: 170, marginBottom: 20 }}
      ></Avatar>
      <Text color="dark" size="lg" weight={600}>
        {name}
      </Text>

      <Text color="gray" size="sm" weight={500}>
        {title}
      </Text>
      <Box component={Mail} sx={(theme) => ({ color: theme.colors.dark[3] })} />
    </Stack>
  );
}
