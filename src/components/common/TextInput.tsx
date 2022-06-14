import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
} from "@mantine/core";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps extends Omit<BaseTextInputProps, "error"> {
  error?: FieldError | boolean;
  register: UseFormRegisterReturn;
  optional?: boolean;
}

export const TextInput = ({
  styles,
  error,
  optional,
  register,
  ...rest
}: TextInputProps) => {
  return (
    <BaseTextInput
      size="lg"
      error={
        typeof error === "boolean" ? error : !!error ? error.message : null
      }
      description={optional ? "Optional" : null}
      {...register}
      {...rest}
      styles={(theme) => ({
        label: {
          fontWeight: 600,
        },
        input: {
          fontSize: theme.fontSizes.sm,
          fontWeight: 500,
        },
        invalid: {
          borderColor: theme.other.errorRed,
        },
        description: {
          marginLeft: 10,
          display: "inline",
          fontSize: theme.fontSizes.sm,
          "&:before": {
            content: '"("',
          },
          "&:after": {
            content: '")"',
          },
        },
        error: {
          fontSize: theme.fontSizes.sm,
          textAlign: "right",
          color: theme.other.errorWhite,
          fontWeight: 500,
        },
        ...styles,
      })}
    />
  );
};

{
  /* !!error ? error.message : null */
}
