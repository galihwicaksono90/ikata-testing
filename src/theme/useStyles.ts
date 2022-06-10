import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  slickCarousel: {
    width: "100%",
    "& ul": {},
    "& .slick-dots": {
      "&.outside": {
        bottom: "-45px",
      },
      "&.inside": {
        bottom: "8px",
      },
      "&.bullets": {
        "& li div": {
          width: 16,
          height: 7,
          borderRadius: theme.radius.md,
        },
      },
      "&.numbers": {
        "& li div": {
          width: 27,
          height: 27,
          borderRadius: theme.radius.xl,
        },
      },
      "& li div": {
        backgroundColor: theme.colors.gray[3],
        color: theme.colors.gray[5],
        fontWeight: "bold",
        lineHeight: "30px",
      },
      "& li.slick-active div": {
        background: theme.primaryColor,
        color: theme.white,
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
  carousel: {
    height: "100%",
    "& .swiper-pagination.swiper-pagination-bullets": {},
    "& .swiper-pagination-bullet": {
      width: "16px",
      height: "7px",
      background: theme.colors.dark[4],
      borderRadius: "40px",
      // opacity: 0.5,
      transition: "opacity 300ms ease",
    },
    "& .swiper-pagination-bullet-active": {
      background: theme.primaryColor,
      opacity: 1,
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
      color: theme.primaryColor,
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
  copyright: {
    width: "100vw",
    height: "46px",
    background: "#272727",
    textAlign: "center",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      color: theme.colors.white,
      "&::placeholder": {
        fontStyle: "italic",
        fontSize: theme.fontSizes.sm,
        color: theme.other.placeholderColor,
      },
      '&[type="password"]:not(:placeholder-shown)': {
        fontSize: "2rem",
        fontFamily: "pass",
        fontStyle: "normal",
      },
    },
    "& .mantine-TextInput-root": {
      "& label": {
        fontSize: theme.fontSizes.md,
        marginBottom: "15px",
      },
    },
    "& .mantine-RadioGroup-label": {
      fontSize: theme.fontSizes.md,
    },
    "& .mantine-TextInput-invalid": {
      color: theme.white,
      "&::placeholder": {
        color: theme.other.placeholderColor,
      },
    },
    "& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus":
      {
        border: "1px solid pink",
        WebkitTextFillColor: theme.colors.dark,
        WebkitBoxShadow: "0 0 0px 1px rgba(255, 255, 255, 0.01) inset",
      },

    "& .mantine-RadioGroup-root": {
      "& > .mantine-RadioGroup-label": {
        marginBottom: "15px",
        fontWeight: 600,
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
    },
  },
}));
