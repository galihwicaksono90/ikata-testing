import { useState } from "react";
import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
  Box,
} from "@mantine/core";
import { Eye, EyeOff } from "tabler-icons-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps extends Omit<BaseTextInputProps, "error"> {
  error: FieldError;
  register: UseFormRegisterReturn;
}

export const PasswordInput = ({ error, register, ...rest }: TextInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleVisibility = () => {
    console.log("toggle");
    setShowPassword((o) => !o);
  };

  return (
    <BaseTextInput
      {...register}
      {...rest}
      size="lg"
      type={showPassword ? "text" : "password"}
      error={!!error ? error.message : null}
      rightSection={
        <Box onClick={toggleVisibility} sx={{ height: 22, cursor: "pointer" }}>
          {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
        </Box>
      }
    ></BaseTextInput>
  );
};
