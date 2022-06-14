import { Container, Group, Input, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

interface VacancySearchbarProps {
  title: string;
  placeholder?: string;
}

export const VacancySearchbar = ({
  title,
  placeholder,
}: VacancySearchbarProps) => {
  return (
    <Container size={1128} sx={{ height: 90 }}>
      <Group position="apart" align="center" sx={{ height: "100%" }}>
        <Text color="dark" weight="bold" sx={{ fontSize: 22 }}>
          {title}
        </Text>
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
        />
      </Group>
    </Container>
  );
};
