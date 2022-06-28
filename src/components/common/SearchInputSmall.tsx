import { Input, InputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

interface SearchInputSmallProps extends InputProps<"input"> {
  placeholder?: string;
}

export const SearchInputSmall = ({
  placeholder,
  ...rest
}: SearchInputSmallProps) => {
  return (
    <Input
      placeholder={placeholder}
      icon={<IconSearch />}
      size="md"
      variant="unstyled"
      sx={(theme) => ({
        backgroundColor: theme.white,
        border: `1px solid`,
        borderColor: theme.colors.gray[2],
        borderRadius: theme.radius.md,
        input: {
          width: 420,
          color: theme.colors.dark,
        },
      })}
      {...rest}
    />
  );
};
