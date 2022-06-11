import { Avatar, Stack, Text, Box } from "@mantine/core";
import { IconMail } from "@tabler/icons";

export interface MemberAvatarProps {
  id: number;
  name: string;
  title: string;
  image?: string;
}

export function MemberAvatar({ name, image, title }: MemberAvatarProps) {
  return (
    <Stack align="center" mb={35}>
      <Avatar
        radius="xl"
        sx={{ height: 170, width: 170, marginBottom: 20 }}
        src={image}
      ></Avatar>
      <Text size="lg" weight={600}>
        {name}
      </Text>

      <Text color="dimmed" size="sm" weight={500}>
        {title}
      </Text>
      <Box
        component={IconMail}
        sx={(theme) => ({ color: theme.colors.dark[3] })}
      />
    </Stack>
  );
}
