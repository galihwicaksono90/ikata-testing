import { Box, Text, Menu, Group } from "@mantine/core";
import { useRouter } from "next/router";
import { NextLink } from "@mantine/next";
import { ChevronDown } from "tabler-icons-react";

export default function MenuItem({
  children,
  title,
  href,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  const { pathname } = useRouter();

  if (!children) {
    return (
      <li>
        <Box
          sx={(theme) => ({
            "& a": {
              color:
                pathname === href ? theme.primaryColor : theme.colors.white,
            },
          })}
        >
          <Text component={NextLink} href={href}>
            {title}
          </Text>
        </Box>
      </li>
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
            <ChevronDown size={14} />
          </Group>
        }
        styles={{
          body: {
            background: "rgba(0,0,0,0.45)",
            border: "none",
          },
        }}
      >
        {children}
      </Menu>
    </li>
  );
}
