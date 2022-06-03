import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
  Box,
} from "@mantine/core";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps extends Omit<BaseTextInputProps, "error"> {
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export const TextInput = ({ error, register, ...rest }: TextInputProps) => {
  return (
    <BaseTextInput
      size="lg"
      error={!!error ? error.message : null}
      {...register}
      {...rest}
    />
  );
};
