import {
  MediaQuery,
  Divider,
  Header,
  Container,
  Center,
  Box,
} from "@mantine/core";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import { NavbarProps } from "components/layouts";
import { useStyles } from "theme";

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
            size={1128}
            style={{
              height: "76px",
              display: "flex",
              justifyContent: "space-between",
            }}
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
