import { MantineThemeOverride } from "@mantine/core";

const CONTAINER_SIZE = 1128;

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "orange",
  defaultRadius: "md",
  //@ts-ignore
  radius: { xs: 8, sm: 10, md: 12, lg: 14, xl: "50%" },
  fontFamily: "Montserrat",
  //@ts-ignore
  fontSizes: { sm: "0.875rem", md: "1rem", lg: "1.125rem", xl: "1.374rem" },
  headings: {
    fontFamily: "Montserrat",
    sizes: {
      h1: { fontSize: "3rem", lineHeight: "5.3rem" },
      h2: { fontSize: "2rem", lineHeight: "3.6rem" },
      h3: { fontSize: "1.5rem", lineHeight: "1.83rem" },
      h4: { fontSize: "1.375rem", lineHeight: "2.48rem" },
      h5: { fontSize: "1.125rem", lineHeight: "2.rem" },
      h6: { fontSize: "1rem", lineHeight: "1.8rem" },
    },
  },
  breakpoints: { md: CONTAINER_SIZE, xs: 414 },
  colors: {
    dark: [
      "#fff",
      "#fff",
      "#898989",
      "#ABAAAA",
      "#ABAAAA",
      "#3f3f3f",
      "#1d1d1d",
      "#272727",
      "#1d1d1d",
      "#1d1d1d",
    ],
    orange: [
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
      "#FEB240",
    ],
  },
  other: {
    containerSize: CONTAINER_SIZE,
  },
};
