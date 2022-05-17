import MainLayout from "./MainLayout";
import {
  Title,
  ScrollArea,
  Stack,
  Divider,
  Box,
  Container,
  Group,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { useStyles } from "theme";
import { Company, Job } from "generated/graphql";
import {
  VacancySearchbar,
  VacancyListItem,
  VacancyList,
  VacancyDescription,
} from "components/vacancy";

interface Props {
  title: string;
  placeholder?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  data: Company[];
}

export default function VacancyLayout({
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
