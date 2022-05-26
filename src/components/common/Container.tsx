import React from "react";
import {
  Box,
  Container as BaseContainer,
  ContainerProps,
  useMantineTheme,
} from "@mantine/core";

interface Props extends ContainerProps {
  light?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
}

export function Container({
  children,
  light = false,
  noPadding = false,
  ...rest
}: Props) {
  const theme = useMantineTheme();
  const padding = () => {
    if (noPadding) return {};

    return {
      pt: 50,
      pb: 75,
    };
  };

  if (light) {
    return (
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor: theme.white,
          color: theme.colors.dark,
        })}
      >
        <BaseContainer
          size={theme.other.containerSize}
          {...padding()}
          {...rest}
        >
          {children}
        </BaseContainer>
      </Box>
    );
  }

  return (
    <BaseContainer size={theme.other.containerSize} {...padding()} {...rest}>
      {children}
    </BaseContainer>
  );
}
