import { Stack, Text, List } from "@mantine/core";
import { Job } from "generated/mockGraphql";

export function VacancyList({ index, job }: { index: number; job: Job }) {
  return (
    <Stack mb={30}>
      <Text color="dark" weight="bold" mb={20}>{`Lowongan ${index + 1}: ${
        job.title
      }`}</Text>
      <Text color="dark" size="sm" weight="bold">
        Deskripsi Pekerjaan
      </Text>
      <Text color="dark" size="sm">
        {job.description} arisetnrstnst
      </Text>
      <Text color="dark" size="sm" weight="bold">
        Kualifikasi
      </Text>
      <List>
        {job?.qualifications?.map((q, index) => (
          <List.Item
            sx={(theme) => ({ fontSize: "14px", color: theme.colors.dark })}
            key={index}
          >
            {q}
          </List.Item>
        ))}
      </List>
    </Stack>
  );
}
