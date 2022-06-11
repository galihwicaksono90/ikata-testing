import { Avatar, Stack, Text, Box } from "@mantine/core";
import { IconMail } from "@tabler/icons";

export interface MemberAvatarProps {
  id: number;
  name: string;
  title: string;
  image?: string;
}

export function MemberAvatar(props: MemberAvatarProps) {
  const { name, image, title } = props;
  return (
    <Stack align="center" mb={35} sx={{ height: 339, minHeight: 339 }}>
      <Avatar
        radius="xl"
        sx={(theme) => ({
          height: 170,
          width: 170,
          marginBottom: 20,
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 156,
            width: 156,
          },
        })}
        src={image}
      />
      <Text size="lg" weight={600} align="center">
        {name}
      </Text>

      <Text color="dimmed" size="sm" weight={500} align="center" lineClamp={2}>
        {title}
      </Text>
      <Box
        component={IconMail}
        sx={(theme) => ({ color: theme.colors.dark[3] })}
      />
    </Stack>
  );
}
