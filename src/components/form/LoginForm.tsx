import { Group } from "@mantine/core";
import {
  GradientButton,
  PasswordInput,
  showNotification,
  TextInput,
  TextLink,
} from "components/common";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { loginResolver } from "./formResolver";
import { useLoginMutation } from "generated/graphql";

interface LoginFormProps {
  email: string;
  password: string;
}

export function LoginForm() {
  const { classes } = useStyles();
  /* const [isLoading, setIsLoading] = useState(false); */
  const router = useRouter();
  const [login, { isLoading, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({
    mode: "onChange",
    resolver: loginResolver,
  });
  const onSubmit = useCallback(async (values: LoginFormProps) => {
    try {
      const user = await login({ user: values }).unwrap();
      showNotification({
        title: `Hi!`,
        message: `Selamat datang kembali!`,
      });
      console.log({ user });
    } catch (e) {
      console.log({ e });
      showNotification({
        title: e.name,
        message: e.message,
        id: "login-error",
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextInput
        register={register("email")}
        label="Email"
        error={!!errors.email}
        placeholder="Masukkan Email"
      />
      <PasswordInput
        register={register("password")}
        label="Password"
        error={!!errors.password}
        placeholder="Masukkan Password"
      />
      <Group position="right" mb={40}>
        <TextLink href="/forgot-password">Lupa Password?</TextLink>
      </Group>
      <GradientButton type="submit" fullWidth loading={isLoading} mb={50}>
        Login
      </GradientButton>
      <Group position="center">
        <TextLink href="/register">Daftar Baru</TextLink>
      </Group>
    </form>
  );
}
