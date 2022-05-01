import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  carousel: {
    height: "100%",
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
  scrollbar: {
    backgroundColor: theme.colors.gray[2],
    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
  thumb: {
    backgroundColor: theme.colors.gray[3],
  },
}));
