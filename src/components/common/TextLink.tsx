import { Text, TextProps } from "@mantine/core";
import { NextLink } from "@mantine/next";

interface TextLinkProps extends Omit<TextProps<typeof NextLink>, "href"> {
  type?: "white" | "primary";
  href: string;
}

export const TextLink = ({
  children,
  href,
  sx,
  type = "primary",
  weight = 600,
  ...rest
}: TextLinkProps) => {
  return (
    <Text
      component={NextLink}
      {...rest}
      href={href}
      sx={(theme) => ({
        color: type === "primary" ? theme.colors.orange[0] : theme.white,
        "&:hover": {
          textDecoration: type === "primary" ? "underline" : "none",
          color: theme.colors.orange[0],
        },
      })}
      weight={weight}
    >
      {children}
    </Text>
  );
};
