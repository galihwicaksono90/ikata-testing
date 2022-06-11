import {
  AspectRatio,
  Box,
  Burger,
  Group,
  MediaQuery,
  Stack,
  Text,
} from "@mantine/core";
import { Container, UserAvatar } from "components/common";
import { MainLayoutProps } from "components/layouts";
import Image from "next/image";

export function HeaderTop({ opened, setOpened }: MainLayoutProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        background: theme.colors.dark[8],
        color: theme.white,
      })}
    >
      <Container
        style={{
          height: "102px",
        }}
        noPadding
      >
        <Group position="apart" align="center" style={{ height: "100%" }}>
          <Group spacing="xl" align="center">
            <AspectRatio
              ratio={1}
              sx={(theme) => ({
                maxWidth: 72,
                position: "relative",
                width: 72,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  width: 50,
                },
              })}
            >
              <Image alt="" src="/ikataLogo.png" layout="fill" />
            </AspectRatio>
            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
              <Stack spacing={5}>
                <Text
                  size="xl"
                  weight="bold"
                  sx={(theme) => ({
                    lineHeight: "20px",
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      fontSize: 12,
                    },
                  })}
                >
                  PORTAL IKATAN ALUMNI TAMBANG
                </Text>
                <Text
                  sx={(theme) => ({
                    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                      fontSize: 10,
                    },
                  })}
                >
                  UPN &quot;VETERAN&quot; YOGYAKARTA
                </Text>
              </Stack>
            </MediaQuery>
          </Group>
          <UserAvatar />
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              color="white"
            />
          </MediaQuery>
        </Group>
      </Container>
    </Box>
  );
}
