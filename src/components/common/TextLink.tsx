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
  ...rest
}: TextLinkProps) => {
  return (
    <Text
      component={NextLink}
      {...rest}
      href={href}
      sx={(theme) => ({
        color: type === "primary" ? theme.primaryColor : theme.white,
        "&:hover": {
          textDecoration: type === "primary" ? "underline" : "none",
          color: theme.primaryColor,
        },
      })}
      weight="bold"
    >
      {children}
    </Text>
  );
};
