import {
  MediaQuery,
  Overlay,
  Navbar,
  Stack,
  Group,
  Burger,
  Box,
} from "@mantine/core";
import { HeaderMenu } from "components/header";
import { NavbarProps } from "components/layouts";
import { useStyles } from "theme";

export default function ({ opened, setOpened }: NavbarProps) {
  const { classes } = useStyles();
  return (
    <MediaQuery largerThan="md" styles={{ display: "none" }}>
      <div>
        <Overlay
          hidden={!opened}
          onClick={() => setOpened((o) => !o)}
          color="#000"
          opacity={0.6}
          sx={{ zIndex: 100, transition: "display 2000ms ease" }}
          blur={2}
        />
        <Navbar
          hidden={!opened}
          position={{ bottom: 0, right: 0 }}
          fixed
          height="100vh"
          width={{
            base: 400,
          }}
          sx={(theme) => ({
            background: theme.colors.dark[7],
            color: theme.white,
          })}
        >
          <Stack>
            <Group position="right" align="center" sx={{ height: 102 }} pr={20}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                color="white"
              />
            </Group>
            <Box component="ul" className={classes.menuItemsNavbar}>
              <HeaderMenu />
            </Box>
          </Stack>
        </Navbar>
      </div>
    </MediaQuery>
  );
}
