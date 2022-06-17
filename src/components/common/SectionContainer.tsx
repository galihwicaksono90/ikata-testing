import { ReactNode } from "react";
import { Container, TextLink } from "components/common";
import { Group, Box, Text, AspectRatio } from "@mantine/core";
import Image from "next/image";

interface SectionContainerProps {
  title: string;
  children?: ReactNode;
  rightItem?: ReactNode;
  noData?: boolean;
  seeAllHref?: string;
  lightBackground?: boolean;
}

export const SectionContainer = ({
  title,
  children,
  rightItem,
  noData,
  seeAllHref,
  lightBackground,
}: SectionContainerProps) => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        width: "100%",
        backgroundColor: lightBackground ? "initial" : theme.colors.dark[8],
      })}
    >
      <Container>
        <Group position="apart" align="baseline" mb={50}>
          <Group
            spacing={17}
            align="baseline"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                "& .mantine-AspectRatio-root": {
                  width: 40,
                },
                "& .mantine-Text-root": {
                  fontSize: "28px",
                },
              },
            })}
          >
            <AspectRatio
              ratio={62 / 17}
              sx={(theme) => ({
                width: 62,
                borderRadius: "50px",
                backgroundImage: theme.other.gradientColor,
              })}
            />
            <Text
              sx={{ fontSize: "2.625rem", fontWeight: 700 }}
              transform="uppercase"
            >
              {title}
            </Text>
          </Group>
          {rightItem}
        </Group>
        {noData ? (
          <NoData />
        ) : (
          <>
            {children}
            {seeAllHref ? (
              <Box
                sx={(theme) => ({
                  borderTop: `1px solid ${theme.colors.dark[5]}`,
                  borderBottom: `1px solid ${theme.colors.dark[5]}`,
                  marginTop: 40,
                  height: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <TextLink href={seeAllHref}>Lihat Semua</TextLink>
              </Box>
            ) : null}
          </>
        )}
      </Container>
    </Box>
  );
};

const NoData = () => {
  return (
    <Box sx={{ width: "100%" }} py={40}>
      <AspectRatio
        ratio={467 / 456}
        sx={{
          position: "relative",
          maxWidth: 467,
          display: "flex",
        }}
        mx="auto"
      >
        <Image src="/noData.svg" layout="fill" />
      </AspectRatio>
      <Text mt={80} align="center" size="xl" weight={500}>
        Belum ada data ditampilkan
      </Text>
    </Box>
  );
};
