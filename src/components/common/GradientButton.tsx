import { forwardRef } from "react";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ButtonVariant,
} from "@mantine/core";
import Link from "next/link";

interface GradientButtonProps extends BaseButtonProps<"button"> {
  href?: string;
}

function GradientButton({
  children,
  href,
  loading,
  ...rest
}: GradientButtonProps) {
  if (href) {
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
}

const Button = forwardRef(
  ({ children, variant = "gradient", loading, sx, ...rest }: any, ref) => {
    return (
      <BaseButton
        ref={ref}
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
          ...sx,
          color: theme.colors.dark[7],
          fontSize: theme.fontSizes.md,
          "&.mantine-Button-loading": {
            "&:disabled": {
              filter: "none",
            },
          },
          "&:disabled": {
            filter: "brightness(40%)",
          },
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
  }
);

Button.displayName = "ButtonComponent";
export { GradientButton };
