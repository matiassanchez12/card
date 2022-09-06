import { type ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "primary.paleBlue",
        color: "black",
        overflowX: "hidden",
        fontFamily: "body.primary",
      },
    },
  },
  fonts: {
    body: {
      primary: "Red Hat Display, serif",
      secondary: "Roboto, sans-serif",
    },
  },
  colors: {
    primary: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)",
      lowBrightBlue: "hsl(245, 75%, 72%)",
    },
    neutral: {
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
    },
  },
});

const exportedObject = { config, theme };

export default exportedObject;
