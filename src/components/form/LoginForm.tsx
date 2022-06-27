import { useState, useEffect } from "react";
import { Group } from "@mantine/core";
import {
  GradientButton,
  PasswordInput,
  showNotification,
  TextInput,
  TextLink,
  SuccessModal,
} from "components/common";
import { useLoginMutation } from "generated/graphql";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { validateLoginForm } from "./formResolver";
import { UserInputTypeLogi } from "generated/graphql";

export function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit, formState, setError } =
    useForm<UserInputTypeLogi>({
      mode: "onChange",
    });

  const { errors, isValid } = formState;

  useEffect(() => {
    //show modal if before 30th of November 2022
    if (new Date().getTime() < new Date(2022, 11, 30).getTime()) {
      setShowModal(true);
    }
  }, []);

  const onSubmit = useCallback(
    async (values: UserInputTypeLogi) => {
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
    },
    [login, router, setError]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextInput
        register={register("email", { required: true })}
        label="Email"
        error={errors.email}
        placeholder="Masukkan Email"
        autoComplete="email"
      />
      <PasswordInput
        register={register("password", { required: true })}
        label="Password"
        error={!!errors.password}
        placeholder="Masukkan Password"
        autoComplete="password"
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
      <SuccessModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Perhatian!"
        message="Bagi anda yang sudah mendaftar dan terverifikasi pada saat MUNAS IKATA UPN 2021 silahkan menuju lupa password untuk me-reset akun anda, gunakan alamat email anda yang terdaftar pada saat MUNAS IKATA UPN 2021"
        buttonLabel="Lanjutkan Login"
        onClick={() => setShowModal(false)}
      />
    </form>
  );
}
