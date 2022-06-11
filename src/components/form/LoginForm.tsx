import { Group } from "@mantine/core";
import {
  GradientButton,
  PasswordInput,
  showNotification,
  TextInput,
  TextLink,
} from "components/common";
import { useLoginMutation } from "generated/graphql";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { validateLoginForm } from "./formResolver";
import { UserInputTypeLogi } from "generated/graphql";

export function LoginForm() {
  const { classes } = useStyles();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit, formState, setError } =
    useForm<UserInputTypeLogi>({
      mode: "onChange",
    });

  const { errors, isValid } = formState;

  const onSubmit = useCallback(async (values: UserInputTypeLogi) => {
    if (!validateLoginForm(values, setError)) return;

    try {
      const user = await login({ user: values }).unwrap();
      localStorage.setItem("token", user.login.token);
      router.push("/");
    } catch (e) {
      showNotification({
        message: e.message,
        id: "login-error",
      });
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextInput
        register={register("email", { required: true })}
        label="Email"
        error={errors.email}
        placeholder="Masukkan Email"
      />
      <PasswordInput
        register={register("password", { required: true })}
        label="Password"
        error={!!errors.password}
        placeholder="Masukkan Password"
      />
      <Group position="right" mb={40}>
        <TextLink href="/forgot-password">Lupa Password?</TextLink>
      </Group>
      <GradientButton
        type="submit"
        fullWidth
        loading={isLoading}
        mb={50}
        disabled={!isValid}
      >
        Login
      </GradientButton>
      <Group position="center">
        <TextLink href="/register">Daftar Baru</TextLink>
      </Group>
    </form>
  );
}
