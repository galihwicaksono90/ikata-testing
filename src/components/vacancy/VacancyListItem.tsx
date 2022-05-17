import { Company } from "generated/graphql";
import { UnstyledButton, Avatar, Divider, Group, Text } from "@mantine/core";
import { formatTime } from "utils/time";

export default function VacancyListItem({
  index,
  company,
  setCurrentVacancy,
  currentVacancy,
}: {
  index: number;
  company: Company;
  setCurrentVacancy: React.Dispatch<React.SetStateAction<number>>;
  currentVacancy: number;
}) {
  return (
    <UnstyledButton
      onClick={() => setCurrentVacancy(index)}
      sx={{ width: "100%" }}
    >
      <Group
        align="flex-start"
        spacing={20}
        p={20}
        sx={(theme) => ({
          cursor: "pointer",
          backgroundColor:
            currentVacancy === index ? theme.colors.gray[1] : null,
          "&:hover": {
            backgroundColor: theme.colors.gray[2],
          },
        })}
        noWrap
      >
        <Avatar
          sx={{ height: 76, width: 76 }}
          src={company.image}
          radius="md"
        />
        <div>
          <Text color="dark" weight="bold">
            {company.name}
          </Text>
          <Text size="sm" color="gray" mb={22}>
            {company.jobs.length} lowongan
          </Text>
          <Text size="sm" color="gray">
            {formatTime(company.postedAt)} - {company.city}
          </Text>
        </div>
      </Group>
      <Divider color="gray" />
    </UnstyledButton>
  );
}
