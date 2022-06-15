import { Paper, Text, Stack, Group, Avatar } from "@mantine/core";
import { Testimony } from "generated/mockGraphql";

interface Props {
  data: Testimony;
}

export function TestimonyCard({ data }: Props) {
  const { name, description, startYear, endYear, image, id } = data;

  return (
    <Paper
      sx={(theme) => ({
        padding: "62px 32px",
        background: "rgba(0,0,0,0.6)",
      })}
      mx={10}
    >
      <Group
        noWrap
        align="stretch"
        sx={(theme) => ({
          color: "#F1F1F1",
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
          <Text size="xl" mb={0} weight="500">
            {name}
          </Text>
          <Text mb={30} size="sm" weight="400">
            {startYear} - {endYear}
          </Text>
          <Text size="sm" sx={{ lineHeight: "25.2px" }} weight="400">
            {description}
          </Text>
        </Stack>
        <Avatar size={250} radius="xl" src={image}>
          ABR
        </Avatar>
      </Group>
    </Paper>
  );
}
