import { SectionContainer } from "components/common";
import {
  useGetVacanciesQuery,
  Vacancy,
  VacancyType,
} from "generated/mockGraphql";
import {
  Avatar,
  Box,
  Grid,
  Group,
  Text,
  UnstyledButton,
  Button,
  Skeleton,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useState } from "react";
import { useStyles } from "theme";

const hrefs: { [key in VacancyType] } = {
  finalProject: "/lowongan/tugas-akhir",
  job: "/lowongan/pekerjaan",
  scholarship: "/lowongan/beasiswa",
};

export function VacancyLandingPage() {
  const { classes } = useStyles();
  const [currentType, setCurrentType] = useState(VacancyType.Job);
  const { data, isFetching } = useGetVacanciesQuery({
    type: currentType,
  });

  return (
    <SectionContainer
      title="LOWONGAN"
      noData={!data?.getVacancies.length}
      seeAllHref={hrefs[currentType]}
      loading={isFetching}
      rightItem={
        <Group spacing={20}>
          <Button
            variant={currentType === VacancyType.Job ? "filled" : "outline"}
            onClick={() => setCurrentType(VacancyType.Job)}
            className={classes.pillButton}
          >
            Pekerjaaan
          </Button>
          <Button
            variant={
              currentType === VacancyType.FinalProject ? "filled" : "outline"
            }
            onClick={() => setCurrentType(VacancyType.FinalProject)}
            className={classes.pillButton}
          >
            Tugas Akhir
          </Button>
          <Button
            variant={
              currentType === VacancyType.Scholarship ? "filled" : "outline"
            }
            onClick={() => setCurrentType(VacancyType.Scholarship)}
            className={classes.pillButton}
          >
            Beasiswa
          </Button>
        </Group>
      }
    >
      <Grid gutter={24}>
        {isFetching
          ? [...Array(6).fill(0)].map((_, index) => (
              <Grid.Col span={12} md={4} sm={6} key={index}>
                <VacancyBox loading />
              </Grid.Col>
            ))
          : data?.getVacancies.map((vacancy) => (
              <Grid.Col span={12} md={4} sm={6} key={vacancy.id}>
                <VacancyBox
                  data={vacancy}
                  href={`${hrefs[currentType]}/${vacancy.id}`}
                />
              </Grid.Col>
            ))}
      </Grid>
    </SectionContainer>
  );
}

function VacancyBox({
  data,
  href,
  loading,
}: {
  data?: Vacancy;
  href?: string;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <Group
        p={20}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          width: "100%",
        })}
        noWrap
        spacing={20}
      >
        <Skeleton circle height={60} width={60} />
        <Box sx={{ width: "80%" }}>
          <Skeleton height={14} width="70%" mb={10} />
          <Skeleton height={14} width="30%" />
        </Box>
      </Group>
    );
  }
  return (
    <UnstyledButton component={NextLink} href={href}>
      <Group
        p={20}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[5],
          width: "100%",
          "&:hover": {
            backgroundColor: theme.fn.lighten(theme.colors.dark[5], 0.1),
          },
        })}
        noWrap
        spacing={20}
      >
        <Avatar
          alt={data.company}
          src={data.image}
          sx={{ minWidth: 60, height: 60 }}
          radius="xl"
        />
        <Box>
          <Text size="lg" weight={700} lineClamp={1}>
            {data.title}
          </Text>
          <Text size="sm" weight={400} color="dimmed" lineClamp={1}>
            {data.company}
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
