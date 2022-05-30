import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ButtonVariant,
} from "@mantine/core";
import Link from "next/link";

interface GradientButtonProps extends BaseButtonProps<"button"> {
  href?: string;
}

export const GradientButton = ({
  children,
  href,
  loading,
  ...rest
}: GradientButtonProps) => {
  if (!!href) {
    return (
      <Link href={href} passHref>
        <Button {...rest} component="a" loading={loading}>
          {children}
        </Button>
      </Link>
    );
  }
  return (
    <Button {...rest} loading={loading}>
      {children}
    </Button>
  );
};

const Button = ({ children, variant = "gradient", loading, ...rest }) => {
  return (
    <BaseButton
      loading={loading}
      variant={variant as ButtonVariant}
      gradient={{
        from: "#feb240",
        to: "#fe9040",
        deg: 94,
      }}
      size="lg"
      radius="md"
      sx={(theme) => ({
        color: theme.colors.dark[7],
      })}
      loaderProps={{
        color: "#272727",
        variant: "dots",
      }}
      {...rest}
    >
      {loading ? null : children}
    </BaseButton>
  );
};
