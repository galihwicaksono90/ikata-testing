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
          color: theme.white,
          height: "38px",
          border: `solid 1px ${theme.colors.dark[2]}`,
          background: theme.colors.dark[8],
          borderRadius: "50px",
          width: width ?? "264px",
          "& span :hover": {
            borderColor: theme.white,
          },
        },
      })}
    />
  );
}
