import { ReactNode } from "react";
import { Container, TextLink, NoData } from "components/common";
import { Group, Box, Text, AspectRatio } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

interface SectionContainerProps {
  title: string;
  children?: ReactNode;
  rightItem?: ReactNode;
  noData?: boolean;
  seeAllHref?: string;
  lightBackground?: boolean;
  containerSize?: number;
  loading?: boolean;
}

export const SectionContainer = ({
  loading,
  title,
  children,
  rightItem,
  noData,
  seeAllHref,
  lightBackground,
  containerSize,
}: SectionContainerProps) => {
  const theme = useMantineTheme();
  return (
    <Box
      component="section"
      sx={(theme) => ({
        width: "100%",
        backgroundColor: lightBackground ? "initial" : theme.colors.dark[8],
      })}
    >
      <Container pb={0}>
        <Group position="apart" align="baseline">
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
      </Container>
      <Container size={containerSize ?? theme.other.containerSize}>
        {noData ? (
          <NoData />
        ) : (
          <>
            {children}
            {seeAllHref && !loading ? (
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
