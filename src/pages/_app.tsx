import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "theme";
import { wrapper } from "redux/store";

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

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default wrapper.withRedux(App);
