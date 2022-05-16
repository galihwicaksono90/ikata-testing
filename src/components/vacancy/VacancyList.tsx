import { PaperProps, Paper, Title, List, Box, Text } from "@mantine/core";
import { useGetVacanciesQuery, VacancyType } from "generated/graphql";
import { NextLink } from "@mantine/next";

export interface VacancyListProps extends PaperProps<"div"> {
  type: VacancyType;
  limit?: number;
  title: "Beasiswa" | "Lowongan";
}

export default function VacancyList({
  type,
  limit,
  title,
  ...rest
}: VacancyListProps) {
  const { data: vacancies, isLoading } = useGetVacanciesQuery({ type, limit });

  if (isLoading) {
    return <div>Loadingg....</div>;
  }

  return (
    <Paper
      withBorder
      radius="md"
      p={20}
      sx={(theme) => ({
        background: theme.colors.dark[8],
        color: theme.white,
        borderColor: theme.colors.dark[4],
        borderWidth: "1px",
        borderStyle: "solid",
      })}
      {...rest}
    >
      <Title order={5} mb={30}>
        {title}
      </Title>
      <List
        center
        spacing={50}
        icon={
          <Box
            sx={(theme) => ({
              height: 7,
              width: 7,
              backgroundColor: theme.primaryColor,
              borderRadius: "50%",
            })}
          />
        }
        mb={30}
      >
        {vacancies.getVacancies.map((vacancy) => {
          return (
            <Box
              key={vacancy.id}
              sx={(theme) => ({ marginBottom: 20, color: theme.white })}
            >
              <List.Item
                sx={() => ({
                  fontWeight: 600,
                  marginBottom: 8,
                })}
              >
                <Text lineClamp={1}>{vacancy.title}</Text>
              </List.Item>
              <Text pl={20} lineClamp={1} color="dimmed" size="sm">
                {vacancy.company}
              </Text>
            </Box>
          );
        })}
      </List>
      <Text component={NextLink} href="/articles" variant="link" weight="bold">
        Lihat Semua
      </Text>
    </Paper>
  );
}
