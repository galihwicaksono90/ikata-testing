import {
  Box,
  Burger,
  MediaQuery,
  Navbar as BaseNavbar,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { SearchInput } from "components/common";
import { NavbarProps } from "components/layouts";
import { useStyles } from "theme";
import { NavbarMenu } from "components/navbar";

export function Navbar({ opened, setOpened }: NavbarProps) {
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
          <Stack>
            <BaseNavbar.Section>
              <Box
                sx={{
                  height: 102,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  color="white"
                />
              </Box>
            </BaseNavbar.Section>
            <BaseNavbar.Section>
              <SearchInput width="100%" />
            </BaseNavbar.Section>
            <BaseNavbar.Section>
              <Box
                component="ul"
                className={classes.menuItemsNavbar}
                style={{
                  gap: 0,
                  width: "100%",
                  paddingLeft: 0,
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
          </Stack>
        </BaseNavbar>
      </Box>
    </MediaQuery>
  );
}
