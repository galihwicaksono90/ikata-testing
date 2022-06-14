import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

interface SearchInputProps {
  width?: string | number;
}

export function SearchInput({ width }: SearchInputProps) {
  return (
    <Input
      icon={<IconSearch />}
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
