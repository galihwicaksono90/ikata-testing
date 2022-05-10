import { Input } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function SearchInput() {
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
          width: "264px",
          "& span :hover": {
            borderColor: theme.white,
          },
        },
      })}
    />
  );
}
