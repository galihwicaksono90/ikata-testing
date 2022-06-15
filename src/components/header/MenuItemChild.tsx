import { Menu, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";

export function MenuItemChild({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const { pathname } = useRouter();
  return (
    <Menu.Item component={NextLink} href={href}>
      <Text color={pathname === href ? "#feb240" : "white"}>{children}</Text>
    </Menu.Item>
  );
}
