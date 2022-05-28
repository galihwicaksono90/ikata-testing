import { Input } from "@mantine/core";
import { Search } from "tabler-icons-react";

interface SearchInputProps {
  width?: string | number;
}

export function SearchInput({ width }: SearchInputProps) {
  return (
    <Input
      icon={<Search />}
      radius="xl"
      placeholder="Search"
      styles={(theme) => ({
        input: {
          fontWeight: 500,
          color: theme.white,
          height: "38px",
          border: `solid 1px ${theme.colors.dark[3]}`,
          background: "transparent",
          borderRadius: "50px",
          width: width ?? "264px",
          "&::placeholder": {
            color: theme.colors.dark[3],
          },
          "& span :hover": {
            borderColor: theme.white,
          },
        },
      })}
    />
  );
}
