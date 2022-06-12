import { Stack, Title, Divider, Text } from "@mantine/core";
import { Company } from "generated/mockGraphql";
import { VacancyList } from "components/vacancy";
import { formatTime } from "utils/time";

export function VacancyDescription(company: Company) {
  return (
    <Stack>
      <Title order={3} sx={(theme) => ({ color: theme.colors.dark })}>
        {company.name}
      </Title>
      <Text color="gray" size="sm" pb={20}>
        Posting Date: {formatTime(company.postedAt)} - Expiry Date:{" "}
        {formatTime(company.expiredAt)}
      </Text>
      <Text color="dark" size="sm">
        {company.description}
      </Text>
      <Divider mb={30} />
      {company.jobs.map((job, index) => (
        <VacancyList index={index} job={job} key={job.id} />
      ))}
      <Divider mb={30} />
      <Text color="gray" align="center" size="sm">
        {company.address}
      </Text>
      <Text
        color="orange"
        align="center"
        variant="link"
        size="sm"
        weight="bold"
      >
        {company.email}
      </Text>
    </Stack>
  );
}
