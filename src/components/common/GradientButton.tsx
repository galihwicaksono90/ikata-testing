import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@mantine/core";
import Link from "next/link";

interface GradientButtonProps extends BaseButtonProps<"button"> {
  href?: string;
}

export const GradientButton = ({
  children,
  href,
  ...rest
}: GradientButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <Button {...rest} component="a">
          {children}
        </Button>
      </Link>
    );
  }
  return <Button {...rest}>{children}</Button>;
};

const Button = ({ children, ...rest }) => {
  return (
    <BaseButton
      {...rest}
      variant="gradient"
      gradient={{
        from: "#feb240",
        to: "#fe9040",
        deg: 94,
      }}
      size="lg"
      radius="xs"
    >
      {children}
    </BaseButton>
  );
};
