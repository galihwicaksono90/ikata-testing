import { Text, Title, Group, GroupProps, createStyles } from "@mantine/core";
import { NextLink } from "@mantine/next";

interface Props extends GroupProps {
  title: string;
  href?: string;
}

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    /* color: theme.white, */
    fontWeight: "bold",
    transition: "ease-in-out 200ms color",
    ":hover": {
      color: theme.primaryColor,
    },
  },
}));

export function SectionTitleWithLink({ title, href, mb = 25, ...rest }: Props) {
  const { classes } = useStyles();
  return (
    <Group
      position="apart"
      align="baseline"
      mb={mb}
      {...rest}
      style={{ width: "100%" }}
    >
      {title ? <Title order={5}>{title}</Title> : null}
      {href ? (
        <Text
          href={href}
          className={classes.link}
          variant="link"
          component={NextLink}
        >
          Lihat Semua
        </Text>
      ) : null}
    </Group>
  );
}
