import MainLayout from "./MainLayout";
import {
  List,
  Title,
  ScrollArea,
  Avatar,
  Stack,
  Divider,
  Grid,
  createStyles,
  Box,
  Container,
  Group,
  Text,
  Input,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import React, { useState } from "react";
import { useStyles } from "theme";

export interface VacancyProps {
  id: number;
  companyName: string;
  companyDesc: string;
  vacancies: {
    name: string;
    desc: string;
    qualification: string[];
  }[];
  footer: string;
  email: string;
}

interface Props {
  title: string;
  placeholder?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  data: VacancyProps[];
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
          <Container size={1128} sx={{ height: 90 }}>
            <Group position="apart" align="center" sx={{ height: "100%" }}>
              <Text color="dark" weight="bold" sx={{ fontSize: 22 }}>
                {title}
              </Text>
              <Input
                onChange={(e: any) => setValue(e.target.value)}
                placeholder={placeholder}
                icon={<Search />}
                size="md"
                variant="unstyled"
                sx={(theme) => ({
                  backgroundColor: theme.white,
                  border: `1px solid`,
                  borderColor: theme.colors.gray[2],
                  borderRadius: theme.radius.md,
                  input: {
                    width: 420,
                    color: theme.colors.dark,
                  },
                })}
              />
            </Group>
          </Container>
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
              {data.map((item) => (
                <VacancyCard
                  name={item.companyName}
                  numberOfVacancies={item.vacancies.length}
                  id={item.id}
                  setCurrentVacancy={setCurrentVacancy}
                />
              ))}
            </ScrollArea>
            <Divider
              orientation={"vertical"}
              sx={{ height: "auto" }}
              color="gray"
            />
            <Box sx={{ width: "60%", paddingTop: 20 }}>
              <VacancyDesc {...data[currentVacancy]} />
            </Box>
          </Group>
        </Container>
      </Box>
    </MainLayout>
  );
}

const VacancyDesc = ({
  companyName,
  companyDesc,
  vacancies,
  footer,
  email,
}: VacancyProps) => {
  return (
    <Stack>
      <Title order={3} sx={(theme) => ({ color: theme.colors.dark })}>
        {companyName}
      </Title>
      <Text color="gray" size="sm" pb={20}>
        Posting Date: 14 April 2022 - Expiry Date: 30 April 2022
      </Text>
      <Text color="dark" size="sm">
        {companyDesc}
      </Text>
      <Divider mb={30} />
      {vacancies.map((vacancy, index) => (
        <VacancyItem
          index={index}
          name={vacancy.name}
          qualification={vacancy.qualification}
          desc={vacancy.desc}
        />
      ))}
      <Divider mb={30} />
      <Text color="gray" align="center" size="sm">
        {footer}
      </Text>
      <Text
        color="orange"
        align="center"
        variant="link"
        size="sm"
        weight="bold"
      >
        {email}
      </Text>
    </Stack>
  );
};

const VacancyItem = ({
  index,
  name,
  desc,
  qualification,
}: {
  index: number;
  name: string;
  desc: string;
  qualification: string[];
}) => {
  return (
    <Stack mb={30}>
      <Text color="dark" weight="bold" mb={20}>{`Lowongan ${
        index + 1
      }: ${name}`}</Text>
      <Text color="dark" size="sm" weight="bold">
        Deskripsi Pekerjaan
      </Text>
      <Text color="dark" size="sm">
        {desc}
      </Text>
      <Text color="dark" size="sm" weight="bold">
        Kualifikasi
      </Text>
      <List>
        {qualification.map((item) => (
          <List.Item
            sx={(theme) => ({ fontSize: "14px", color: theme.colors.dark })}
          >
            {item}
          </List.Item>
        ))}
      </List>
    </Stack>
  );
};

const VacancyCard = ({
  id,
  name,
  numberOfVacancies,
  setCurrentVacancy,
}: {
  id: number;
  name: string;
  numberOfVacancies: number;
  setCurrentVacancy: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <Group
        align="flex-start"
        spacing={20}
        p={20}
        sx={(theme) => ({
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.colors.gray[1],
          },
        })}
        onClick={() => setCurrentVacancy(id)}
      >
        <Avatar sx={{ height: 76, width: 76, borderRadius: "0px" }}></Avatar>
        <div>
          <Text color="dark" weight="bold">
            {name}
          </Text>
          <Text size="sm" color="gray" mb={22}>
            {numberOfVacancies} lowongan
          </Text>
          <Text size="sm" color="gray">
            14 April 2022 - Samarinda
          </Text>
        </div>
      </Group>
      <Divider color="gray" />
    </>
  );
};
