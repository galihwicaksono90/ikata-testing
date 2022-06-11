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
  const { pathname } = useRouter();

  if (!children) {
    return (
      <Box
        component="li"
        py={withPadding ? 16 : 0}
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
                pathname === href ? theme.primaryColor : theme.colors.white,
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
              color: pathname.startsWith(href)
                ? theme.primaryColor
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
