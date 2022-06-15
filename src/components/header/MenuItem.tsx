import { Box, Group, Menu, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { IconChevronDown } from "@tabler/icons";

interface MenuItemProps {
  children?: React.ReactNode;
  title?: string;
  href?: string;
  withPadding?: boolean;
}

export function MenuItem({
  children,
  title,
  href,
  withPadding,
}: MenuItemProps) {
  const { asPath } = useRouter();

  if (!children) {
    return (
      <Box
        component="li"
        py={withPadding ? 16 : 0}
        pl={withPadding ? 10 : 0}
        sx={(theme) => ({
          width: withPadding ? "100%" : "initial",
          "&:hover": {
            backgroundColor: withPadding ? theme.colors.dark[5] : null,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            "& a": {
              color:
                asPath === href
                  ? theme.colors.orange[0]
                  : href !== "/" && asPath.startsWith(href)
                  ? theme.colors.orange[0]
                  : theme.white,
            },
          })}
        >
          <Text component={NextLink} href={href} size="md">
            {title}
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <li>
      <Menu
        control={
          <Group
            sx={(theme) => ({
              color: asPath.startsWith(href)
                ? theme.colors.orange
                : theme.colors.white,
            })}
          >
            <Text>{title}</Text>
            <IconChevronDown size={14} />
          </Group>
        }
        styles={(theme) => ({
          body: {
            background: "rgba(0,0,0,0.65)",
            border: "none",
          },
          itemHovered: {
            background: theme.colors.dark[5],
          },
        })}
      >
        {children}
      </Menu>
    </li>
  );
}
