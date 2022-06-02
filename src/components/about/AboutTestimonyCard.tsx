import { Paper, Text, Stack, Group, Avatar } from "@mantine/core";
import { Testimony } from "generated/graphql";

interface Props {
  data: Testimony;
}

export function TestimonyCard({ data }: Props) {
  const { name, description, startYear, endYear, image, id } = data;

  return (
    <Paper
      sx={(theme) => ({
        padding: "62px 32px",
        background: theme.colors.dark[8],
      })}
      mx={10}
    >
      <Group
        noWrap
        align="stretch"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
            alignItems: "center",
            textAlign: "center",
            "& .mantine-Avatar-root": {
              transform: "scale(0.9)",
            },
          },
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            "& .mantine-Avatar-root": {
              transform: "scale(0.7)",
            },
          },
        })}
      >
        <Stack>
          <Text size="lg">{name}</Text>
          <Text color="dimmed" mb={30} size="sm">
            {startYear} - {endYear}
          </Text>
          <Text size="sm">{description}</Text>
        </Stack>
        <Avatar size={250} radius="xl" src={image}>
          ABR
        </Avatar>
      </Group>
    </Paper>
  );
}
