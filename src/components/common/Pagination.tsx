import {
  Pagination as BasePagination,
  PaginationProps as BasePaginationProps,
} from "@mantine/core";

interface PaginationProps extends BasePaginationProps {
  light?: boolean;
}

export const Pagination = ({ light, ...rest }: PaginationProps) => {
  return (
    <BasePagination
      styles={(theme) => ({
        item: {
          borderRadius: theme.radius.xl,
          fontWeight: 600,
          fontSize: "0.8125rem",
          backgroundColor: light ? theme.white : theme.colors.dark[8],
          color: light ? "#c4c4c4" : theme.colors.dark[2],
          border: "1px solid #eaeaea",
          width: 27,
        },
        active: {
          color: theme.colors.dark[8],
        },
      })}
      {...rest}
    />
  );
};
