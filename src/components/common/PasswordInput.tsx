import { useState } from "react";
import { TextInput, TextInputProps } from "components/common";
import { Box } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons";

interface PasswordInputProps extends TextInputProps {}

export const PasswordInput = ({ ...rest }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleVisibility = () => {
    setShowPassword((o) => !o);
  };

  return (
    <TextInput
      {...rest}
      type={showPassword ? "text" : "password"}
      rightSection={
        <Box
          onClick={toggleVisibility}
          sx={{ height: 22, cursor: "pointer", paddingRight: 7 }}
        >
          {showPassword ? (
            <IconEye color="gray" />
          ) : (
            <IconEyeOff color="gray" />
          )}
        </Box>
      }
      styles={{
        label: {
          fontWeight: 600,
        },
      }}
    ></TextInput>
  );
};
