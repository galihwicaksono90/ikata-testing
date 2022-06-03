import { Box, Container, Divider, Group, ScrollArea } from "@mantine/core";
import {
  VacancyDescription,
  VacancyListItem,
  VacancySearchbar,
} from "components/vacancy";
import { Company } from "generated/graphql";
import React, { useState } from "react";
import { useStyles } from "theme";
import { MainLayout } from "components/layouts";

interface Props {
  title: string;
  placeholder?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  data: Company[];
}

export function VacancyLayout({
  title,
  placeholder = "-Cari berdasarkan title dan profesi-",
  setValue,
  data,
}: Props) {
  const { classes } = useStyles();
  const [currentVacancy, setCurrentVacancy] = useState(0);

  return (
    <MainLayout>
      <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
        <Box sx={(theme) => ({ width: "100%", boxShadow: theme.shadows.md })}>
          <VacancySearchbar title={title} placeholder={placeholder} />
        </Box>
        <Container size={1128} pb={80}>
          <Group noWrap align="flex-start">
            <ScrollArea
              style={{
                height: "700px",
                width: "40%",
              }}
              pt={20}
              classNames={{
                scrollbar: classes.scrollbar,
                thumb: classes.thumb,
              }}
            >
              {data.map((company, index) => (
                <VacancyListItem
                  index={index}
                  company={company}
                  setCurrentVacancy={setCurrentVacancy}
                  currentVacancy={currentVacancy}
                  key={company.id}
                />
              ))}
            </ScrollArea>
            <Divider
              orientation={"vertical"}
              sx={{ height: "auto" }}
              color="gray"
            />
            <Box sx={{ width: "60%", paddingTop: 20 }}>
              <VacancyDescription {...data[currentVacancy]} />
            </Box>
          </Group>
        </Container>
      </Box>
    </MainLayout>
  );
}
