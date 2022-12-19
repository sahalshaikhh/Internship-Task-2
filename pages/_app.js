import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        defaultRadius: "sm",
        primaryColor: "blue",
        dir: "ltr",
        loader: "dots",
      }}
      defaultProps={{
        Container: {
          size: "lg",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
