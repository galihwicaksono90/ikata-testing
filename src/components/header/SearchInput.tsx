import { Input } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function SearchInput() {
  return (
    <Input
      icon={<Search />}
      radius="xl"
      variant="unstyled"
      placeholder="Search"
      sx={(theme) => ({
        input: {
          height: "38px",
          border: `solid 1px ${theme.colors.dark[2]}`,
          borderRadius: "50px",
          width: "264px",
        },
      })}
    />
  );
}
