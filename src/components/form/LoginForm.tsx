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

interface LoginFormProps {
  email: string;
  password: string;
}

export function LoginForm() {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({
    mode: "onChange",
    resolver: loginResolver,
  });

  console.log({ errors });
  const onSubmit = useCallback((values: LoginFormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (
        values.password !== "Password1" ||
        values.email !== "user@benar.com"
      ) {
        setError("email", { message: "" });
        setError("password", { message: "" });

        showNotification({
          message: "Nomor induk Makasiswa / Password tidak terdaftar",
          id: "login-error",
          radius: "xs",
        });
        return;
      }

      showNotification({
        title: `Hi!`,
        message: `Selamat datang kembali!`,
      });

      router.push("/");
    }, 2000);
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
      <GradientButton
        type="submit"
        disabled={!isValid}
        fullWidth
        loading={isLoading}
        mb={50}
      >
        Login
      </GradientButton>
      <Group position="center">
        <TextLink href="/register">Daftar Baru</TextLink>
      </Group>
    </form>
  );
}
