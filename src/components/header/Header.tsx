import {
  Box,
  Center,
  Divider,
  Header as BaseHeader,
  MediaQuery,
} from "@mantine/core";
import { Container } from "components/common";
import { HeaderMenu, HeaderTop } from "components/header";
import { MainLayoutProps } from "components/layouts";
import { useStyles } from "theme";

export function Header({ opened, setOpened }: MainLayoutProps) {
  const { classes } = useStyles();
  return (
    <BaseHeader height="auto" sx={{ border: "none" }}>
      <HeaderTop opened={opened} setOpened={setOpened} />
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Box
          sx={(theme) => ({
            width: "100%",
            background: theme.colors.dark[8],
            color: theme.white,
            zIndex: 1000,
          })}
        >
          <Divider sx={{ borderTopColor: "#474545" }} />
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
    </BaseHeader>
  );
}
