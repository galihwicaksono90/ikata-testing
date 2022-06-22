import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  slickCarousel: {
    width: "100%",
    "& ul": {},
    "& .slick-dots": {
      "&.outside": {
        bottom: "-60px",
      },
      "&.inside": {
        bottom: "8px",
      },
      "&.bullets": {
        "& li div": {
          width: 16,
          height: 7,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
          opacity: 0.5,
        },
      },
      "&.numbers": {
        "& li div": {
          width: 27,
          height: 27,
          borderRadius: theme.radius.xl,
        },
        "& > * + * ": {
          marginLeft: 10,
        },
      },
      "& li div": {
        backgroundColor: theme.colors.dark[8],
        color: theme.colors.gray[6],
        fontWeight: "bold",
        lineHeight: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& li.slick-active div": {
        background: theme.colors.orange[0],
        opacity: 1,
        color: theme.colors.dark[8],
      },
    },
    "& .carousel-arrow-next": {
      position: "absolute",
      top: "50%",
      right: "-40px",
    },
    "& .carousel-arrow-prev": {
      position: "absolute",
      top: "50%",
      left: "-40px",
    },
  },
  menuItems: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px",
    color: theme.colors.light,
    cursor: "pointer",
    fontWeight: 500,
    "& .active a": {
      color: theme.colors.orange[0],
    },
    "& a": {
      color: theme.colors.white,
      textDecoration: "none",
    },
  },
  menuItemsNavbar: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
  },
  scrollbar: {
    backgroundColor: theme.colors.gray[2],
    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
  thumb: {
    backgroundColor: theme.colors.gray[3],
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 60,
    background: theme.colors.dark[8],
    color: theme.white,
  },
  mediaSocialButton: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "white",
  },
  tabLabel: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.md,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: theme.fontSizes.sm,
    },
  },
  form: {
    "& > * + *": {
      marginTop: 30,
    },
    "& input": {
      background: "rgba(255,255,255,0.25)",
      color: theme.white,
      "&::placeholder": {
        fontStyle: "italic",
        fontSize: theme.fontSizes.sm,
        color: theme.other.placeholderColor,
      },
      // '&[type="password"]:not(:placeholder-shown)': {
      //   fontSize: "1.8rem",
      //   fontFamily: "caption",
      //   fontStyle: "normal",
      // },
    },
    "& .mantine-TextInput-root": {
      "& label": {
        fontSize: theme.fontSizes.md,
        marginBottom: "15px",
      },
    },
    "& .mantine-TextInput-invalid": {
      color: theme.white,
      borderColor: theme.other.errorRed,
      "&::placeholder": {
        color: theme.other.placeholderColor,
      },
      "&:focus-within": {
        borderColor: `${theme.other.errorRed} !important`,
      },
    },
    "& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus":
      {
        WebkitTextFillColor: theme.white,
        // WebkitBoxShadow: "0 0 0px 30px blue inset !important",
        transition: "background-color 9999s ease-in-out 0s",
      },

    "& .mantine-RadioGroup-root": {
      "& > .mantine-RadioGroup-label": {
        marginBottom: "15px",
        fontWeight: 600,
        fontSize: theme.fontSizes.md,
      },
      "& .mantine-Group-root": {
        gap: 40,
        "& .mantine-RadioGroup-label": {
          fontSize: theme.fontSizes.sm,
        },
      },
      "& .mantine-RadioGroup-error": {
        fontSize: theme.fontSizes.sm,
        color: theme.other.errorWhite,
      },
      "& .mantine-RadioGroup-radio": {
        height: "30px",
        width: "30px",
      },
    },

    "& .mantine-Select-root": {
      "& .mantine-Select-invalid": {
        borderColor: theme.other.errorRed,
        "&::placeholder": {
          color: theme.other.placeholderColor,
        },
      },
      " input": {
        fontSize: theme.fontSizes.sm,
      },
      "& > .mantine-Select-label": {
        fontSize: theme.fontSizes.md,
        fontWeight: 600,
        marginBottom: "15px",
      },
      "& .mantine-Select-error": {
        fontSize: theme.fontSizes.sm,
        color: theme.other.errorWhite,
      },
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      "& .mantine-RadioGroup-root .mantine-Group-root": {
        gap: 20,
      },
      "& .mantine-RadioGroup-root": {
        "& .mantine-RadioGroup-radio": {
          height: "25px",
          width: "25px",
        },
      },
    },
    // "@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)":
    //   {
    //     '& input[type="password"]:not(:placeholder-shown)': {
    //       fontFamily: "pass",
    //       fontSize: "30px",
    //     },
    //     "@-moz-document url-prefix()": {
    //       fontFamily: "pass",
    //       fontSize: "18px",
    //       color: "red",
    //     },
    //   },
  },
  tab: {
    "& .mantine-Tabs-tabControl.mantine-Tabs-pills": {
      height: 48,
      fontWeight: 600,
      borderRadius: 50,
      color: theme.colors.orange[0],
      border: `1px solid ${theme.colors.orange[1]}`,
      "&.mantine-Tabs-tabActive": {
        color: theme.colors.white[1],
        background: theme.colors.orange[0],
      },
    },
  },
  pillButton: {
    height: 48,
    borderRadius: "50px",
  },
}));
