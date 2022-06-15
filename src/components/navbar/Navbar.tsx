import {
  Box,
  Burger,
  MediaQuery,
  Navbar as BaseNavbar,
  ScrollArea,
  Stack,
  Group,
} from "@mantine/core";
import { SearchInput, UserAvatar } from "components/common";
import { useStyles } from "theme";
import { NavbarMenu } from "components/navbar";
import { MainLayoutProps } from "components/layouts";

export function Navbar({ opened, setOpened }: MainLayoutProps) {
  const { classes } = useStyles();
  return (
    <MediaQuery largerThan="md" styles={{ display: "none" }}>
      <Box sx={{ height: "100vh%" }}>
        <BaseNavbar
          hidden={!opened}
          sx={{
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
            padding: "0px 16px",
          }}
          fixed
        >
          <BaseNavbar.Section>
            <Group
              align="center"
              position="apart"
              sx={{
                height: 102,
              }}
            >
              <UserAvatar hidden />
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                color="white"
              />
            </Group>
          </BaseNavbar.Section>
          <BaseNavbar.Section>
            <Box
              component="ul"
              className={classes.menuItemsNavbar}
              style={{
                gap: 0,
                width: "100%",
                paddingLeft: "0px",
              }}
            >
              <ScrollArea
                sx={{
                  height: "calc(100vh - 179px)",
                  width: "100%",
                }}
              >
                <NavbarMenu />
              </ScrollArea>
            </Box>
          </BaseNavbar.Section>
        </BaseNavbar>
      </Box>
    </MediaQuery>
  );
}
