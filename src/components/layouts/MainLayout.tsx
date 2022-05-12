import { useState, Dispatch, SetStateAction } from "react";
import {
  Group,
  Stack,
  Box,
  AppShell,
  MediaQuery,
  Navbar,
  Overlay,
  Burger,
} from "@mantine/core";
import Header from "components/header";
import Footer from "components/Footer";
import HeaderMenu from "components/header/HeaderMenu";
import { useStyles } from "theme";

export interface NavbarProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <AppShell
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={
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
                <Group
                  position="right"
                  align="center"
                  sx={{ height: 102 }}
                  pr={20}
                >
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
      }
      footer={<Footer />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
