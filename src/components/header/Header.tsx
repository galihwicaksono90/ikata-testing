import { Box, Center, Divider, Header, MediaQuery } from "@mantine/core";
import { NavbarProps } from "components/layouts";
import { useStyles } from "theme";
import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import { Container } from "components/common";

export default function HeaderComponent({ opened, setOpened }: NavbarProps) {
  const { classes } = useStyles();
  return (
    <Header height="auto" sx={{ border: "none" }}>
      <HeaderTop opened={opened} setOpened={setOpened} />
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Box
          sx={(theme) => ({
            width: "100%",
            background: theme.colors.dark[8],
            color: theme.white,
          })}
        >
          <Divider />
          <Container
            style={{
              height: "76px",
              display: "flex",
              justifyContent: "space-between",
            }}
            noPadding
          >
            <Center style={{ width: "100%" }}>
              <ul className={classes.menuItems}>
                <HeaderMenu />
              </ul>
            </Center>
          </Container>
        </Box>
      </MediaQuery>
    </Header>
  );
}
