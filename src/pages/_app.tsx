import { Global, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "redux/store";
import { theme } from "theme";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>IKATA</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Global
        styles={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            html: {
              fontSize: "14px",
            },
          },
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            html: {
              fontSize: "13px",
            },
          },
        })}
      />
      <NotificationsProvider position="top-right">
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </NotificationsProvider>
    </>
  );
}

export default wrapper.withRedux(App);
